const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, min: 1 },
  },
  { _id: false }
);

const shippingAddressSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, default: '' },
    postalCode: { type: String, default: '' },
    country: { type: String, required: true },
    phone: { type: String, default: '' },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    items: {
      type: [orderItemSchema],
      required: true,
      validate: (v) => Array.isArray(v) && v.length > 0,
    },
    shippingAddress: {
      type: shippingAddressSchema,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ['pending', 'paid', 'processing', 'shipped', 'in_transit', 'out_for_delivery', 'delivered', 'cancelled'],
      default: 'pending',
    },
    paymentMethod: {
      type: String,
      enum: ['paystack'],
      default: 'paystack',
    },
    paymentStatus: {
      type: String,
      enum: ['unpaid', 'paid', 'failed'],
      default: 'unpaid',
    },
    paymentReference: {
      type: String,
      default: null,
      index: true,
    },
    // Set once the order has been forwarded to the supplier and they hand back a tracking code
    trackingNumber: {
      type: String,
      default: null,
      trim: true,
    },
    // e.g. "YunExpress", "China Post", "DHL" — whatever courier the supplier used
    courier: {
      type: String,
      default: null,
      trim: true,
    },
    // A timestamped log of every status change, shown to the customer as their tracking timeline
    statusHistory: {
      type: [
        new mongoose.Schema(
          {
            status: { type: String, required: true },
            note: { type: String, default: '' },
            timestamp: { type: Date, default: Date.now },
          },
          { _id: false }
        ),
      ],
      default: [],
    },
  },
  { timestamps: true }
);

// Updates the order's status and appends an entry to its history log in one step.
// Use this instead of setting order.status directly, so the timeline stays accurate.
orderSchema.methods.pushStatus = function (status, note) {
  this.status = status;
  this.statusHistory.push({ status, note: note || '', timestamp: new Date() });
};

module.exports = mongoose.model('Order', orderSchema);
