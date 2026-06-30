const express = require('express');
const crypto = require('crypto');
const { body, validationResult } = require('express-validator');
const Order = require('../models/Order');
const Product = require('../models/Product');
const { requireAuth, requireAdmin } = require('../middleware/auth');
const { initializeTransaction, verifyTransaction } = require('../utils/paystack');

const router = express.Router();

// POST /api/orders — place a new order (logged-in, verified users only)
router.post(
  '/',
  requireAuth,
  [
    body('items').isArray({ min: 1 }).withMessage('Order must contain at least one item'),
    body('shippingAddress').isObject().withMessage('Shipping address is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    // Block unverified users from placing orders
    if (!req.user.isVerified) {
      return res.status(403).json({ error: 'Please verify your email before placing an order.' });
    }

    const { items, shippingAddress } = req.body;

    try {
      // Look up each product server-side so prices can't be tampered with from the client
      const orderItems = [];
      let totalAmount = 0;

      for (const item of items) {
        const product = await Product.findById(item.productId);

        if (!product || !product.active) {
          return res.status(400).json({ error: `Product ${item.productId} is unavailable.` });
        }

        const quantity = Math.max(1, parseInt(item.quantity, 10) || 1);

        orderItems.push({
          product: product._id,
          name: product.name,
          price: product.price,
          quantity,
        });

        totalAmount += product.price * quantity;
      }

      totalAmount = Math.round(totalAmount * 100) / 100;
      

      const order = await Order.create({
        user: req.user._id,
        items: orderItems,
        shippingAddress,
        totalAmount,
        paymentMethod: 'paystack',
        paymentStatus: 'unpaid',
      });

      // Generate a unique reference, start the Paystack transaction, and
      // return the checkout URL for the frontend to redirect the customer to
      const reference = `order_${order._id}_${crypto.randomBytes(4).toString('hex')}`;

      order.paymentReference = reference;
      order.pushStatus('pending', 'Order placed.');
      await order.save();

      const transaction = await initializeTransaction({
        email: req.user.email,
        amount: totalAmount,
        reference,
        callbackUrl: process.env.PAYSTACK_CALLBACK_URL,
        metadata: { orderId: order._id.toString(), userId: req.user._id.toString() },
      });

      res.status(201).json({
        order,
        payment: {
          authorizationUrl: transaction.authorization_url,
          reference: transaction.reference,
        },
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Could not place order. Please try again.' });
    }
  }
);

// GET /api/orders/verify/:reference — confirm payment status with Paystack directly
// Useful as a fallback right after the customer is redirected back from Paystack
router.get('/verify/:reference', requireAuth, async (req, res) => {
  try {
    const order = await Order.findOne({ paymentReference: req.params.reference });

    if (!order) {
      return res.status(404).json({ error: 'Order not found for this reference.' });
    }

    const isOwner = order.user.toString() === req.user._id.toString();
    if (!isOwner && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Not authorized to view this order.' });
    }

    // If a webhook already marked it paid, no need to call Paystack again
    if (order.paymentStatus === 'paid') {
      return res.json({ order });
    }

    const transaction = await verifyTransaction(req.params.reference);

    if (transaction.status === 'success') {
      order.paymentStatus = 'paid';
      order.pushStatus('paid', 'Payment confirmed via Paystack.');
      await order.save();
    } else if (transaction.status === 'failed') {
      order.paymentStatus = 'failed';
      order.pushStatus(order.status, 'Payment failed.');
      await order.save();
    }

    res.json({ order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not verify payment.' });
  }
});

// GET /api/orders/my — orders placed by the logged-in user
router.get('/my', requireAuth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json({ orders });
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch orders.' });
  }
});

// GET /api/orders/:id — single order (owner or admin only)
router.get('/:id', requireAuth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ error: 'Order not found.' });
    }

    const isOwner = order.user.toString() === req.user._id.toString();
    if (!isOwner && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Not authorized to view this order.' });
    }

    res.json({ order });
  } catch (err) {
    res.status(400).json({ error: 'Invalid order id.' });
  }
});

// GET /api/orders — all orders (admin only)
router.get('/', requireAuth, requireAdmin, async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }).populate('user', 'name email');
    res.json({ orders });
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch orders.' });
  }
});

// PUT /api/orders/:id/status — update order status (admin only)
router.put(
  '/:id/status',
  requireAuth,
  requireAdmin,
  [
    body('status')
      .isIn(['pending', 'paid', 'processing', 'shipped', 'in_transit', 'out_for_delivery', 'delivered', 'cancelled'])
      .withMessage('Invalid status'),
    body('note').optional().trim(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    try {
      const order = await Order.findById(req.params.id);

      if (!order) {
        return res.status(404).json({ error: 'Order not found.' });
      }

      order.pushStatus(req.body.status, req.body.note || '');
      await order.save();

      res.json({ order });
    } catch (err) {
      res.status(400).json({ error: 'Could not update order.' });
    }
  }
);

// PUT /api/orders/:id/tracking — assign a tracking number + courier once the supplier provides one (admin only)
router.put(
  '/:id/tracking',
  requireAuth,
  requireAdmin,
  [
    body('trackingNumber').trim().notEmpty().withMessage('Tracking number is required'),
    body('courier').trim().notEmpty().withMessage('Courier is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    try {
      const order = await Order.findById(req.params.id);

      if (!order) {
        return res.status(404).json({ error: 'Order not found.' });
      }

      order.trackingNumber = req.body.trackingNumber.trim();
      order.courier = req.body.courier.trim();

      // Move the order to "shipped" the first time a tracking number is assigned,
      // but don't roll a further-along order (e.g. already "delivered") backwards
      const fulfillmentOrder = ['pending', 'paid', 'processing', 'shipped', 'in_transit', 'out_for_delivery', 'delivered'];
      const currentIndex = fulfillmentOrder.indexOf(order.status);
      const shippedIndex = fulfillmentOrder.indexOf('shipped');
      const nextStatus = currentIndex < shippedIndex ? 'shipped' : order.status;

      order.pushStatus(nextStatus, `Tracking number ${order.trackingNumber} assigned via ${order.courier}.`);
      await order.save();

      res.json({ order });
    } catch (err) {
      res.status(400).json({ error: 'Could not assign tracking number.' });
    }
  }
);

module.exports = router;
