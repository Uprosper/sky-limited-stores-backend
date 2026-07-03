'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const Product = mongoose.models.Product || require('./models/Product');

const products = require('./products'); // single source of truth for seed data

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await Product.deleteMany({});
    console.log('Cleared existing products');

    const result = await Product.insertMany(products, { ordered: false });
    console.log(`Seeded ${result.length} of ${products.length} products successfully`);
  } catch (err) {
    console.error('Seed error:', err);
  } finally {
    await mongoose.connection.close();
    console.log('Connection closed');
  }
};

seed();
