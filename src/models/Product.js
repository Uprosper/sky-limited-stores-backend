const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    oldPrice: {
      type: Number,
      min: 0,
      default: null,
    },
    image: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      enum: ['New', 'Hot', 'Sale', null],
      default: null,
    },
    stock: {
      type: Number,
      default: 0,
      min: 0,
    },
    // Optional reference to the source listing on AutoDS, for syncing later
    autodsId: {
      type: String,
      default: null,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
