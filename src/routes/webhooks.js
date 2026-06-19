const express = require('express');
const Order = require('../models/Order');
const { isValidWebhookSignature } = require('../utils/paystack');

const router = express.Router();

// POST /api/webhooks/paystack — Paystack calls this automatically after a payment event.
// Must use the raw request body (configured in server.js) to verify the signature.
router.post('/paystack', async (req, res) => {
  const signature = req.headers['x-paystack-signature'];

  if (!isValidWebhookSignature(req.rawBody, signature)) {
    return res.status(401).send('Invalid signature');
  }

  const event = req.body;

  try {
    if (event.event === 'charge.success') {
      const reference = event.data.reference;

      const order = await Order.findOne({ paymentReference: reference });

      if (order && order.paymentStatus !== 'paid') {
        order.paymentStatus = 'paid';
        order.pushStatus('paid', 'Payment confirmed via Paystack webhook.');
        await order.save();
      }
    }

    // Always respond 200 quickly so Paystack doesn't keep retrying
    res.sendStatus(200);
  } catch (err) {
    console.error('Webhook handling error:', err);
    res.sendStatus(200); // still acknowledge receipt to avoid retry storms
  }
});

module.exports = router;
