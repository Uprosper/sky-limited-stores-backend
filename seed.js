'use strict';

/**
 * Sky Limited Stores — Product Seed
 * Run:  node src/seed.js
 * (place this file at src/seed.js inside your backend folder)
 *
 * Prices are in NGN and already include a 40 % markup over the
 * AliExpress source prices.
 */

require('dotenv').config();
const mongoose = require('mongoose');

// ── Inline Product schema (mirrors src/models/Product.js) ────────────────────
const ProductSchema = new mongoose.Schema(
  {
    name:        { type: String, required: true, trim: true },
    category:    { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    price:       { type: Number, required: true },   // selling price (NGN)
    oldPrice:    { type: Number, default: null },     // crossed-out price shown on card
    image:       { type: String, default: '' },
    tag:         { type: String, default: '' },
    stock:       { type: Number, default: 100 },
    active:    { type: Boolean, default: true },
    autodsId:    { type: String, default: null },
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

// ── Seed data ─────────────────────────────────────────────────────────────────
//  original = AliExpress price (NGN)
//  price    = original × 1.40, rounded to 2 d.p.
//  oldPrice = original (shown as the "was" crossed-out figure)

const products = [
  // ── Lighters / Igniters ───────────────────────────────────────────────────
  {
    name:        'New Pulse Igniter Electronic Charging Lighter',
    category:    'Accessories',
    description: 'Windproof electric arc igniter with flexible gooseneck, USB rechargeable, safety lock & battery display.',
    price:       1149.23,   // 820.88 × 1.40
    oldPrice:    820.88,
    tag:         'Sale',
    stock:       80,
  },
  {
    name:        'HOT Windproof Pulse Arc Ignition Electric Lighter',
    category:    'Accessories',
    description: 'Slimline windproof arc lighter, ignition switch, safety lock, USB-C rechargeable with power display.',
    price:       2282.83,   // 1630.59 × 1.40
    oldPrice:    1630.59,
    tag:         'Hot',
    stock:       60,
  },
  {
    name:        'Home Portable Pulse Igniter Kitchen Lighter',
    category:    'Smart Home',
    description: 'Long-stem portable kitchen lighter, dual-insurance switch, battery display, available in multiple colours.',
    price:       3507.01,   // 2505.01 × 1.40
    oldPrice:    2505.01,
    tag:         'Sale',
    stock:       50,
  },
  {
    name:        'Type-C Rechargeable Kitchen Arc Lighter',
    category:    'Smart Home',
    description: 'Type-C rechargeable candle & kitchen lighter, windproof electric arc, safety lock, compact design.',
    price:       3060.43,   // 2186.02 × 1.40
    oldPrice:    2186.02,
    tag:         '',
    stock:       45,
  },

  // ── Electronic Components ─────────────────────────────────────────────────
  {
    name:        '10/20PCS DB207 DB107 Bridge Rectifier DIP-4',
    category:    'Accessories',
    description: '2A 1000V DIP-4 bridge rectifier diodes, sold in packs of 10 or 20. Ideal for AC-to-DC conversion circuits.',
    price:       2089.25,   // 1492.32 × 1.40
    oldPrice:    1492.32,
    tag:         'Sale',
    stock:       200,
  },
  {
    name:        '10/20/50PCS Diode Rectifier DB107 DB207',
    category:    'Accessories',
    description: 'DB107 1A / DB207 2A 1000V DIP-4 bridge rectifier diodes, flexible quantity packs for electronics projects.',
    price:       2367.15,   // 1690.82 × 1.40
    oldPrice:    1690.82,
    tag:         'Choice',
    stock:       300,
  },
  {
    name:        '10pcs Diode Bridge Rectifica DB207 DIP-4',
    category:    'Accessories',
    description: '10-piece lot of DB207 DIP-4 bridge rectifiers, trusted brand components for hobbyist and professional use.',
    price:       2806.76,   // 2004.83 × 1.40
    oldPrice:    2004.83,
    tag:         '',
    stock:       150,
  },
  {
    name:        '10PCS KBP307 3A 1000V Diode Bridge Rectifier',
    category:    'Accessories',
    description: 'KBP307 3A 1000V DIP-4 bridge rectifiers in a pack of 10. High current capacity for power supply designs.',
    price:       3271.04,   // 2336.46 × 1.40
    oldPrice:    2336.46,
    tag:         'Choice',
    stock:       120,
  },

  // ── Audio / Wearables ─────────────────────────────────────────────────────
  {
    name:        'X9 Wireless Bluetooth 5.0 Earphone',
    category:    'Audio',
    description: 'Compact single-ear Bluetooth 5.0 earphone with charging case, clear call quality, lightweight design.',
    price:       2089.25,   // 1492.32 × 1.40
    oldPrice:    2653.01,   // original "was" price from AliExpress
    tag:         'New',
    stock:       90,
  },
  {
    name:        'New 180° Wireless Headphone Bluetooth Earpiece',
    category:    'Audio',
    description: '180° rotatable single-ear Bluetooth headphone with LED battery display, long standby, ear-hook design.',
    price:       2217.25,   // 1583.75 × 1.40
    oldPrice:    1583.75,
    tag:         '',
    stock:       75,
  },
  {
    name:        'Wireless Ear Clip On Earphone Bluetooth',
    category:    'Audio',
    description: 'Open-ear clip-on Bluetooth earphone, free-fit comfort design, suitable for sports and daily use.',
    price:       3017.81,   // 2155.58 × 1.40
    oldPrice:    3828.78,   // original "was" price from AliExpress
    tag:         'Sale',
    stock:       65,
  },
  {
    name:        'Bluetooth 5.4 Wireless Earphone',
    category:    'Audio',
    description: 'KEBIDU Bluetooth 5.4 TWS earphones with conductor, soundproof & super bass modes, welcome deal free shipping.',
    price:       3672.00,   // 2622.86 × 1.40
    oldPrice:    3512.23,   // original "was" price from AliExpress
    tag:         'New',
    stock:       55,
  },
];

// ── Run ───────────────────────────────────────────────────────────────────────
async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅  Connected to MongoDB');

    // Remove every existing product so we start clean
    const deleted = await Product.deleteMany({});
    console.log(`🗑   Cleared ${deleted.deletedCount} existing product(s)`);

    const productsWithActiveStatus = products.map(p => ({ ...p, active: true }));
const inserted = await Product.insertMany(productsWithActiveStatus);

    console.log(`🌱  Inserted ${inserted.length} product(s):`);
    inserted.forEach(p => console.log(`     • [${p.category}] ${p.name} — NGN ${p.price.toFixed(2)}`));

    await mongoose.disconnect();
    console.log('\n✅  Done. Run `npm start` to serve the updated catalog.');
  } catch (err) {
    console.error('❌  Seed failed:', err.message);
    process.exit(1);
  }
}

seed();
