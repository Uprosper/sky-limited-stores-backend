'use strict';

/**
 * Sky Limited Stores — TEMPORARY Admin Seed Route
 * -------------------------------------------------
 * Place this file at: src/routes/adminSeed.js
 *
 * Then in src/server.js add these two lines:
 *
 *   const adminSeedRoute = require('./routes/adminSeed');
 *   app.use('/api/admin', adminSeedRoute);
 *
 * Usage (after deploying):
 *   Visit in your browser:
 *   https://YOUR-RENDER-URL.onrender.com/api/admin/seed?key=YOUR_SECRET_KEY
 *
 * IMPORTANT — SECURITY:
 *   1. Set an environment variable in Render called SEED_SECRET_KEY
 *      to some long random string (e.g. a UUID). Do NOT reuse another password.
 *   2. After you've successfully seeded the database, DELETE this file
 *      and remove the two lines from server.js, then redeploy.
 *      Leaving this route live is a risk — anyone with the key (or who
 *      guesses/leaks it) can wipe and reset your product catalog.
 */

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// ── Inline Product schema (mirrors src/models/Product.js) ────────────────────
const ProductSchema = new mongoose.Schema(
  {
    name:        { type: String, required: true, trim: true },
    category:    { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    price:       { type: Number, required: true },
    oldPrice:    { type: Number, default: null },
    image:       { type: String, default: '' },
    tag:         { type: String, default: '' },
    stock:       { type: Number, default: 100 },
    active:      { type: Boolean, default: true },
    autodsId:    { type: String, default: null },
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

// ── Seed data (same as your local seed.js) ────────────────────────────────────
const products = [
  {
    name: 'New Pulse Igniter Electronic Charging Lighter',
    category: 'Accessories',
    description: 'Windproof electric arc igniter with flexible gooseneck, USB rechargeable, safety lock & battery display.',
    price: 1149.23,
    oldPrice: 820.88,
    tag: 'Sale',
    stock: 80,
  },
  {
    name: 'HOT Windproof Pulse Arc Ignition Electric Lighter',
    category: 'Accessories',
    description: 'Slimline windproof arc lighter, ignition switch, safety lock, USB-C rechargeable with power display.',
    price: 2282.83,
    oldPrice: 1630.59,
    tag: 'Hot',
    stock: 60,
  },
  {
    name: 'Home Portable Pulse Igniter Kitchen Lighter',
    category: 'Smart Home',
    description: 'Long-stem portable kitchen lighter, dual-insurance switch, battery display, available in multiple colours.',
    price: 3507.01,
    oldPrice: 2505.01,
    tag: 'Sale',
    stock: 50,
  },
  {
    name: 'Type-C Rechargeable Kitchen Arc Lighter',
    category: 'Smart Home',
    description: 'Type-C rechargeable candle & kitchen lighter, windproof electric arc, safety lock, compact design.',
    price: 3060.43,
    oldPrice: 2186.02,
    tag: '',
    stock: 45,
  },
  {
    name: '10/20PCS DB207 DB107 Bridge Rectifier DIP-4',
    category: 'Accessories',
    description: '2A 1000V DIP-4 bridge rectifier diodes, sold in packs of 10 or 20. Ideal for AC-to-DC conversion circuits.',
    price: 2089.25,
    oldPrice: 1492.32,
    tag: 'Sale',
    stock: 200,
  },
  {
    name: '10/20/50PCS Diode Rectifier DB107 DB207',
    category: 'Accessories',
    description: 'DB107 1A / DB207 2A 1000V DIP-4 bridge rectifier diodes, flexible quantity packs for electronics projects.',
    price: 2367.15,
    oldPrice: 1690.82,
    tag: 'Choice',
    stock: 300,
  },
  {
    name: '10pcs Diode Bridge Rectifica DB207 DIP-4',
    category: 'Accessories',
    description: '10-piece lot of DB207 DIP-4 bridge rectifiers, trusted brand components for hobbyist and professional use.',
    price: 2806.76,
    oldPrice: 2004.83,
    tag: '',
    stock: 150,
  },
  {
    name: '10PCS KBP307 3A 1000V Diode Bridge Rectifier',
    category: 'Accessories',
    description: 'KBP307 3A 1000V DIP-4 bridge rectifiers in a pack of 10. High current capacity for power supply designs.',
    price: 3271.04,
    oldPrice: 2336.46,
    tag: 'Choice',
    stock: 120,
  },
  {
    name: 'X9 Wireless Bluetooth 5.0 Earphone',
    category: 'Audio',
    description: 'Compact single-ear Bluetooth 5.0 earphone with charging case, clear call quality, lightweight design.',
    price: 2089.25,
    oldPrice: 2653.01,
    tag: 'New',
    stock: 90,
  },
  {
    name: 'New 180° Wireless Headphone Bluetooth Earpiece',
    category: 'Audio',
    description: '180° rotatable single-ear Bluetooth headphone with LED battery display, long standby, ear-hook design.',
    price: 2217.25,
    oldPrice: 1583.75,
    tag: '',
    stock: 75,
  },
  {
    name: 'Wireless Ear Clip On Earphone Bluetooth',
    category: 'Audio',
    description: 'Open-ear clip-on Bluetooth earphone, free-fit comfort design, suitable for sports and daily use.',
    price: 3017.81,
    oldPrice: 3828.78,
    tag: 'Sale',
    stock: 65,
  },
  {
    name: 'Bluetooth 5.4 Wireless Earphone',
    category: 'Audio',
    description: 'KEBIDU Bluetooth 5.4 TWS earphones with conductor, soundproof & super bass modes, welcome deal free shipping.',
    price: 3672.00,
    oldPrice: 3512.23,
    tag: 'New',
    stock: 55,
  },
];

// ── Route ──────────────────────────────────────────────────────────────────
// GET /api/admin/seed?key=YOUR_SECRET_KEY
router.get('/seed', async (req, res) => {
  try {
    const providedKey = req.query.key;
    const realKey = process.env.SEED_SECRET_KEY;

    if (!realKey) {
      return res.status(500).json({
        error: 'SEED_SECRET_KEY is not set in environment variables. Add it in Render before using this route.',
      });
    }

    if (!providedKey || providedKey !== realKey) {
      return res.status(401).json({ error: 'Unauthorized. Missing or incorrect key.' });
    }

    const deleted = await Product.deleteMany({});
    const productsWithActiveStatus = products.map((p) => ({ ...p, active: true }));
    const inserted = await Product.insertMany(productsWithActiveStatus);

    return res.json({
      success: true,
      deletedCount: deleted.deletedCount,
      insertedCount: inserted.length,
      products: inserted.map((p) => ({ name: p.name, category: p.category, price: p.price })),
    });
  } catch (err) {
    console.error('Seed route failed:', err);
    return res.status(500).json({ error: 'Seed failed', details: err.message });
  }
});

module.exports = router;
