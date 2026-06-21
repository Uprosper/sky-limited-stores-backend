'use strict';

/**
 * Sky Limited Stores — Product Seed Data
 * Place this file at: src/data/seedProducts.js
 *
 * Prices are in NGN and already include a 40% markup over the
 * AliExpress source prices.
 */

const products = [
  // ── Lighters / Igniters ───────────────────────────────────────────────────
  {
    name:        'New Pulse Igniter Electronic Charging Lighter',
    category:    'Accessories',
    description: 'Windproof electric arc igniter with flexible gooseneck, USB rechargeable, safety lock & battery display.',
    price:       1149.23,
    oldPrice:    820.88,
    tag:         'Sale',
    stock:       80,
    active:      true,
  },
  {
    name:        'HOT Windproof Pulse Arc Ignition Electric Lighter',
    category:    'Accessories',
    description: 'Slimline windproof arc lighter, ignition switch, safety lock, USB-C rechargeable with power display.',
    price:       2282.83,
    oldPrice:    1630.59,
    tag:         'Hot',
    stock:       60,
    active:      true,
  },
  {
    name:        'Home Portable Pulse Igniter Kitchen Lighter',
    category:    'Smart Home',
    description: 'Long-stem portable kitchen lighter, dual-insurance switch, battery display, available in multiple colours.',
    price:       3507.01,
    oldPrice:    2505.01,
    tag:         'Sale',
    stock:       50,
    active:      true,
  },
  {
    name:        'Type-C Rechargeable Kitchen Arc Lighter',
    category:    'Smart Home',
    description: 'Type-C rechargeable candle & kitchen lighter, windproof electric arc, safety lock, compact design.',
    price:       3060.43,
    oldPrice:    2186.02,
    stock:       45,
    active:      true,
  },

  // ── Electronic Components ─────────────────────────────────────────────────
  {
    name:        '10/20PCS DB207 DB107 Bridge Rectifier DIP-4',
    category:    'Accessories',
    description: '2A 1000V DIP-4 bridge rectifier diodes, sold in packs of 10 or 20. Ideal for AC-to-DC conversion circuits.',
    price:       2089.25,
    oldPrice:    1492.32,
    tag:         'Sale',
    stock:       200,
    active:      true,
  },
  {
    name:        '10/20/50PCS Diode Rectifier DB107 DB207',
    category:    'Accessories',
    description: 'DB107 1A / DB207 2A 1000V DIP-4 bridge rectifier diodes, flexible quantity packs for electronics projects.',
    price:       2367.15,
    oldPrice:    1690.82,
    tag:         'Choice',
    stock:       300,
    active:      true,
  },
  {
    name:        '10pcs Diode Bridge Rectifica DB207 DIP-4',
    category:    'Accessories',
    description: '10-piece lot of DB207 DIP-4 bridge rectifiers, trusted brand components for hobbyist and professional use.',
    price:       2806.76,
    oldPrice:    2004.83,
    stock:       150,
    active:      true,
  },
  {
    name:        '10PCS KBP307 3A 1000V Diode Bridge Rectifier',
    category:    'Accessories',
    description: 'KBP307 3A 1000V DIP-4 bridge rectifiers in a pack of 10. High current capacity for power supply designs.',
    price:       3271.04,
    oldPrice:    2336.46,
    tag:         'Choice',
    stock:       120,
    active:      true,
  },

  // ── Audio / Wearables ─────────────────────────────────────────────────────
  {
    name:        'X9 Wireless Bluetooth 5.0 Earphone',
    category:    'Audio',
    description: 'Compact single-ear Bluetooth 5.0 earphone with charging case, clear call quality, lightweight design.',
    price:       2089.25,
    oldPrice:    2653.01,
    tag:         'New',
    stock:       90,
    active:      true,
  },
  {
    name:        'New 180° Wireless Headphone Bluetooth Earpiece',
    category:    'Audio',
    description: '180° rotatable single-ear Bluetooth headphone with LED battery display, long standby, ear-hook design.',
    price:       2217.25,
    oldPrice:    1583.75,
    stock:       75,
    active:      true,
  },
  {
    name:        'Wireless Ear Clip On Earphone Bluetooth',
    category:    'Audio',
    description: 'Open-ear clip-on Bluetooth earphone, free-fit comfort design, suitable for sports and daily use.',
    price:       3017.81,
    oldPrice:    3828.78,
    tag:         'Sale',
    stock:       65,
    active:      true,
  },
  {
    name:        'Bluetooth 5.4 Wireless Earphone',
    category:    'Audio',
    description: 'KEBIDU Bluetooth 5.4 TWS earphones with conductor, soundproof & super bass modes, welcome deal free shipping.',
    price:       3672.00,
    oldPrice:    3512.23,
    tag:         'New',
    stock:       55,
    active:      true,
  },
];

module.exports = products;
