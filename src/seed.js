'use strict';

/**
 * Sky Limited Stores — Product Seed
 * Run:  node src/seed.js
 * (place this file at src/seed.js inside your backend folder)
 *
 * Prices are in NGN and already include a 40 % markup over the
 * AliExpress / Temu source prices.
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
//  original = AliExpress / Temu source price (NGN)
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
    description: 'Transparent design wireless Bluetooth earbuds with charging case, clear call quality, lightweight build.',
    price:       4044.60,   // 2889.00 × 1.40 (Temu)
    oldPrice:    2889.00,
    tag:         'New',
    stock:       90,
  },
  {
    name:        'New 180° Wireless Headphone Bluetooth Earpiece',
    category:    'Audio',
    description: 'In-ear/non-in-ear convertible wireless earphone, long standby, comfortable ear-hook design.',
    price:       3263.40,   // 2331.00 × 1.40 (Temu)
    oldPrice:    2331.00,
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

  // ── Tools ──────────────────────────────────────────────────────────────────
  {
    name:        '1 Box DIY Electronics Component Kit',
    category:    'Tools',
    description: 'All-in-one electronics starter kit with assorted resistors, capacitors, wires and small components for hobby projects.',
    price:       18082.40,   // 12916 × 1.40 (Temu)
    oldPrice:    12916.00,
    tag:         'Hot',
    stock:       30,
  },
  {
    name:        'Electromagnetic Induction Tester / Phone Repair Inductor Fault Detector',
    category:    'Tools',
    description: 'Portable Type-C circuit continuity checker and inductor fault detector for phone repair technicians.',
    price:       4310.60,   // 3079 × 1.40 (Temu)
    oldPrice:    3079.00,
    tag:         'Sale',
    stock:       40,
  },
  {
    name:        'USB Card Reader, 4-in-1 Type-C',
    category:    'Tools',
    description: 'Compact 4-in-1 USB card reader supporting Type-C and multiple memory card formats.',
    price:       2543.80,   // 1817 × 1.40 (Temu)
    oldPrice:    1817.00,
    tag:         '',
    stock:       100,
  },
  {
    name:        'UMLIFE 100/200pcs LED Diode Kit',
    category:    'Tools',
    description: 'Assorted LED diode kit in multiple colours, organised storage box, ideal for electronics projects and repairs.',
    price:       2710.40,   // 1936 × 1.40 (Temu)
    oldPrice:    1936.00,
    tag:         '',
    stock:       120,
  },
  {
    name:        'USB 2.0 Type-C Flash Drive (256MB/100GB/128GB)',
    category:    'Tools',
    description: 'Dual-interface USB 2.0 and Type-C flash drive, multiple storage capacities available.',
    price:       4459.00,   // 3185 × 1.40 (Temu)
    oldPrice:    3185.00,
    tag:         'New',
    stock:       80,
  },
  {
    name:        'Cordless Electric Engraving Pen',
    category:    'Tools',
    description: 'Rechargeable cordless engraving pen for marking metal, wood, glass and other surfaces.',
    price:       3375.40,   // 2411 × 1.40 (Temu)
    oldPrice:    2411.00,
    tag:         'Sale',
    stock:       50,
  },
  {
    name:        'USB/Wireless Soldering Iron, 3-in-1',
    category:    'Tools',
    description: 'Portable 3-in-1 soldering iron with USB and wireless charging options, complete with carry case and accessories.',
    price:       14586.60,   // 10419 × 1.40 (Temu)
    oldPrice:    10419.00,
    tag:         'Hot',
    stock:       25,
  },
  {
    name:        'Multi-functional Wire Stripper (Pulley Design)',
    category:    'Tools',
    description: 'Pulley-design wire stripper for quick, accurate line splitting and stripping during electrical work.',
    price:       7452.20,   // 5323 × 1.40 (Temu)
    oldPrice:    5323.00,
    tag:         'Choice',
    stock:       40,
  },
  {
    name:        'Continuity Voltage Detector Pen',
    category:    'Tools',
    description: 'Non-contact voltage detector pen with line break detection and alarm light for safe electrical testing.',
    price:       3988.60,   // 2849 × 1.40 (Temu)
    oldPrice:    2849.00,
    tag:         '',
    stock:       70,
  },

  // ── Wearables ──────────────────────────────────────────────────────────────
  {
    name:        'Premium Smart Watch',
    category:    'Wearables',
    description: 'Premium smartwatch with sleek metal mesh band, fitness tracking and notifications.',
    price:       11176.20,   // 7983 × 1.40 (Temu)
    oldPrice:    7983.00,
    tag:         'Sale',
    stock:       35,
  },
  {
    name:        'New Smartwatch with Flashlight',
    category:    'Wearables',
    description: 'Feature-rich smartwatch with built-in flashlight function, fitness and health tracking.',
    price:       11088.00,   // 7920 × 1.40 (Temu)
    oldPrice:    7920.00,
    tag:         'Sale',
    stock:       35,
  },
  {
    name:        'VR Glasses, Virtual Reality Headset',
    category:    'Wearables',
    description: 'Immersive virtual reality glasses for mobile devices, comfortable head strap, wide field of view.',
    price:       13279.00,   // 9485 × 1.40 (Temu)
    oldPrice:    9485.00,
    tag:         '',
    stock:       20,
  },
  {
    name:        '3D VR Headset Smart Virtual Reality',
    category:    'Wearables',
    description: 'Smart 3D VR headset for immersive mobile virtual reality experiences, adjustable strap and lenses.',
    price:       17540.60,   // 12529 × 1.40 (Temu)
    oldPrice:    12529.00,
    tag:         'Choice',
    stock:       15,
  },
  {
    name:        'Multifunctional Smart Reading Glasses',
    category:    'Wearables',
    description: 'Smart reading glasses with adjustable lens range, lightweight and foldable design.',
    price:       3225.60,   // 2304 × 1.40 (Temu)
    oldPrice:    2304.00,
    tag:         'New',
    stock:       60,
  },

  // ── Beauty ─────────────────────────────────────────────────────────────────
  {
    name:        "Men's Beauty Mini Shaver",
    category:    'Beauty',
    description: 'Compact rechargeable mini shaver for men, portable design ideal for travel and quick grooming.',
    price:       5594.40,   // 3996 × 1.40 (Temu)
    oldPrice:    3996.00,
    tag:         'Sale',
    stock:       45,
  },
  {
    name:        'Professional Hair And Beard Clipper',
    category:    'Beauty',
    description: 'Professional-grade hair and beard clipper with multiple guide combs and long battery life.',
    price:       7092.40,   // 5066 × 1.40 (Temu)
    oldPrice:    5066.00,
    tag:         'Choice',
    stock:       30,
  },
  {
    name:        'Professional Electric Hair Clipper/Trimmer',
    category:    'Beauty',
    description: 'Cordless electric hair clipper and trimmer with precision blades for clean, even cuts.',
    price:       4383.40,   // 3131 × 1.40 (Temu)
    oldPrice:    3131.00,
    tag:         '',
    stock:       40,
  },

  // ── Smart Home ─────────────────────────────────────────────────────────────
  {
    name:        'Minimalist Solid-Colored Portable Desktop Clock',
    category:    'Smart Home',
    description: 'Minimalist digital desktop clock with large display, easy to read, compact portable design.',
    price:       2695.00,   // 1925 × 1.40 (Temu)
    oldPrice:    1925.00,
    tag:         '',
    stock:       60,
  },

  // ── Bags / Shoes / Watches (New fashion categories) ─────────────────────────
  {
    name:        'Lightweight Business Laptop Backpack',
    category:    'Bags',
    description: 'Durable, stylish unisex bag suitable for daily use, travel, or work. Multiple compartments for organised storage.',
    price:       13119.40,   // 9371 × 1.40 (Temu)
    oldPrice:    9371.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        'Men\'s Lightweight Briefcase Bag',
    category:    'Bags',
    description: 'Durable, stylish unisex bag suitable for daily use, travel, or work. Multiple compartments for organised storage.',
    price:       12629.40,   // 9021 × 1.40 (Temu)
    oldPrice:    9021.00,
    tag:         'Sale',
    stock:       50,
  },
  {
    name:        'Laptop Travel Backpack',
    category:    'Bags',
    description: 'Durable, stylish unisex bag suitable for daily use, travel, or work. Multiple compartments for organised storage.',
    price:       8876.00,   // 6340 × 1.40 (Temu)
    oldPrice:    6340.00,
    tag:         'New',
    stock:       50,
  },
  {
    name:        'Unisex Square Bag Messenger',
    category:    'Bags',
    description: 'Durable, stylish unisex bag suitable for daily use, travel, or work. Multiple compartments for organised storage.',
    price:       16023.00,   // 11445 × 1.40 (Temu)
    oldPrice:    11445.00,
    tag:         'Choice',
    stock:       50,
  },
  {
    name:        'Men\'s & Women\'s Crossbody Bag',
    category:    'Bags',
    description: 'Durable, stylish unisex bag suitable for daily use, travel, or work. Multiple compartments for organised storage.',
    price:       11253.20,   // 8038 × 1.40 (Temu)
    oldPrice:    8038.00,
    tag:         'Hot',
    stock:       50,
  },
  {
    name:        'Men\'s Single Shoulder Bag',
    category:    'Bags',
    description: 'Durable, stylish unisex bag suitable for daily use, travel, or work. Multiple compartments for organised storage.',
    price:       6280.40,   // 4486 × 1.40 (Temu)
    oldPrice:    4486.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        'Travel Laptop Backpack Set (3pc)',
    category:    'Bags',
    description: 'Durable, stylish unisex bag suitable for daily use, travel, or work. Multiple compartments for organised storage.',
    price:       18781.00,   // 13415 × 1.40 (Temu)
    oldPrice:    13415.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        'Men\'s Crossbody Bag',
    category:    'Bags',
    description: 'Durable, stylish unisex bag suitable for daily use, travel, or work. Multiple compartments for organised storage.',
    price:       6473.60,   // 4624 × 1.40 (Temu)
    oldPrice:    4624.00,
    tag:         'Sale',
    stock:       50,
  },
  {
    name:        'Quilted Shoulder Bag Unisex',
    category:    'Bags',
    description: 'Durable, stylish unisex bag suitable for daily use, travel, or work. Multiple compartments for organised storage.',
    price:       8022.00,   // 5730 × 1.40 (Temu)
    oldPrice:    5730.00,
    tag:         'New',
    stock:       50,
  },
  {
    name:        'Large-Capacity Crossbody Bag',
    category:    'Bags',
    description: 'Durable, stylish unisex bag suitable for daily use, travel, or work. Multiple compartments for organised storage.',
    price:       6553.40,   // 4681 × 1.40 (Temu)
    oldPrice:    4681.00,
    tag:         'Choice',
    stock:       50,
  },
  {
    name:        'MINZHE YL Lightweight Low-Top Shoes',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       13123.60,   // 9374 × 1.40 (Temu)
    oldPrice:    9374.00,
    tag:         'Hot',
    stock:       50,
  },
  {
    name:        'Men\'s Classic Solid Color Fashion Sneakers',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       13885.20,   // 9918 × 1.40 (Temu)
    oldPrice:    9918.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        'Men\'s Outdoor Slip-On Sandals',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       6608.00,   // 4720 × 1.40 (Temu)
    oldPrice:    4720.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        'Breathable Slip-On Lace-Up Shoes',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       9969.40,   // 7121 × 1.40 (Temu)
    oldPrice:    7121.00,
    tag:         'Sale',
    stock:       50,
  },
  {
    name:        'Men\'s Breathable Mesh Running Shoes',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       10455.20,   // 7468 × 1.40 (Temu)
    oldPrice:    7468.00,
    tag:         'New',
    stock:       50,
  },
  {
    name:        'Men\'s Fashion Solid Casual Sneakers',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       15099.00,   // 10785 × 1.40 (Temu)
    oldPrice:    10785.00,
    tag:         'Choice',
    stock:       50,
  },
  {
    name:        'Men\'s Business Casual Loafers',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       18114.60,   // 12939 × 1.40 (Temu)
    oldPrice:    12939.00,
    tag:         'Hot',
    stock:       50,
  },
  {
    name:        'Men\'s Sneakers (Sport)',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       11555.60,   // 8254 × 1.40 (Temu)
    oldPrice:    8254.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        'Men\'s Breathable Mesh Platform Shoes',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       20363.00,   // 14545 × 1.40 (Temu)
    oldPrice:    14545.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        'Men\'s Breathable Mesh Sneakers',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       15495.20,   // 11068 × 1.40 (Temu)
    oldPrice:    11068.00,
    tag:         'Sale',
    stock:       50,
  },
  {
    name:        'Casual Knit Mesh Breathable Sneakers',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       15276.80,   // 10912 × 1.40 (Temu)
    oldPrice:    10912.00,
    tag:         'New',
    stock:       50,
  },
  {
    name:        'Men\'s Business Casual Lace-Up Shoes',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       22407.00,   // 16005 × 1.40 (Temu)
    oldPrice:    16005.00,
    tag:         'Choice',
    stock:       50,
  },
  {
    name:        'Men\'s Outdoor Casual Shoes',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       15744.40,   // 11246 × 1.40 (Temu)
    oldPrice:    11246.00,
    tag:         'Hot',
    stock:       50,
  },
  {
    name:        'Men\'s Classic Color-Block Sneakers',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       17045.00,   // 12175 × 1.40 (Temu)
    oldPrice:    12175.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        'Men\'s Low-Top Lace-Up Sports Sneakers',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       15226.40,   // 10876 × 1.40 (Temu)
    oldPrice:    10876.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        'Women\'s Solid Color Sports Shoes',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       14942.20,   // 10673 × 1.40 (Temu)
    oldPrice:    10673.00,
    tag:         'Sale',
    stock:       50,
  },
  {
    name:        'Women\'s Fashionable Casual Sandals',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       10686.20,   // 7633 × 1.40 (Temu)
    oldPrice:    7633.00,
    tag:         'New',
    stock:       50,
  },
  {
    name:        'New Women\'s Casual Skate Shoes',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       12777.80,   // 9127 × 1.40 (Temu)
    oldPrice:    9127.00,
    tag:         'Choice',
    stock:       50,
  },
  {
    name:        'Women\'s Summer Breathable Knit Shoes',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       12654.60,   // 9039 × 1.40 (Temu)
    oldPrice:    9039.00,
    tag:         'Hot',
    stock:       50,
  },
  {
    name:        'Women\'s Summer Cool Sandals',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       10969.00,   // 7835 × 1.40 (Temu)
    oldPrice:    7835.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        'Women\'s Sneakers (Slip-On)',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       12448.80,   // 8892 × 1.40 (Temu)
    oldPrice:    8892.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        'Women\'s Breathable Mule Sneakers',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       13209.00,   // 9435 × 1.40 (Temu)
    oldPrice:    9435.00,
    tag:         'Sale',
    stock:       50,
  },
  {
    name:        'All-Match White Sneakers',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       10463.60,   // 7474 × 1.40 (Temu)
    oldPrice:    7474.00,
    tag:         'New',
    stock:       50,
  },
  {
    name:        '2026 Summer New Slide Sandals',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       13039.60,   // 9314 × 1.40 (Temu)
    oldPrice:    9314.00,
    tag:         'Choice',
    stock:       50,
  },
  {
    name:        'Ladies Running Sneakers',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       11739.00,   // 8385 × 1.40 (Temu)
    oldPrice:    8385.00,
    tag:         'Hot',
    stock:       50,
  },
  {
    name:        'LYYSB Women\'s Slip-On Sneakers',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       15748.60,   // 11249 × 1.40 (Temu)
    oldPrice:    11249.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        'Thick-Soled Summer Sandals',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       10157.00,   // 7255 × 1.40 (Temu)
    oldPrice:    7255.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        'Women\'s Casual Slip-On Shoes',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       12595.80,   // 8997 × 1.40 (Temu)
    oldPrice:    8997.00,
    tag:         'Sale',
    stock:       50,
  },
  {
    name:        'Casual White Sneakers',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       12135.20,   // 8668 × 1.40 (Temu)
    oldPrice:    8668.00,
    tag:         'New',
    stock:       50,
  },
  {
    name:        'ZOSIVC Women\'s Winter Sneakers',
    category:    'Shoes',
    description: 'Comfortable, breathable unisex footwear designed for everyday wear, casual outings, or light sports activity.',
    price:       16007.60,   // 11434 × 1.40 (Temu)
    oldPrice:    11434.00,
    tag:         'Choice',
    stock:       50,
  },
  {
    name:        '2pcs Simple and Stylish Watch Set',
    category:    'Watches',
    description: 'Stylish quartz watch with reliable movement, suitable for casual or business wear.',
    price:       10235.40,   // 7311 × 1.40 (Temu)
    oldPrice:    7311.00,
    tag:         'Hot',
    stock:       50,
  },
  {
    name:        'Unisex Quartz Watch - Faux Leather',
    category:    'Watches',
    description: 'Stylish quartz watch with reliable movement, suitable for casual or business wear.',
    price:       4055.80,   // 2897 × 1.40 (Temu)
    oldPrice:    2897.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        '1pc Watch, Men\'s Luxury',
    category:    'Watches',
    description: 'Stylish quartz watch with reliable movement, suitable for casual or business wear.',
    price:       4614.40,   // 3296 × 1.40 (Temu)
    oldPrice:    3296.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        '2pcs Minimalist Sports Style Watch Set',
    category:    'Watches',
    description: 'Stylish quartz watch with reliable movement, suitable for casual or business wear.',
    price:       6351.80,   // 4537 × 1.40 (Temu)
    oldPrice:    4537.00,
    tag:         'Sale',
    stock:       50,
  },
  {
    name:        '1-2pcs Exquisite Watch Set',
    category:    'Watches',
    description: 'Stylish quartz watch with reliable movement, suitable for casual or business wear.',
    price:       3057.60,   // 2184 × 1.40 (Temu)
    oldPrice:    2184.00,
    tag:         'New',
    stock:       50,
  },
  {
    name:        'Unisex Casual Fashion Quartz Watch',
    category:    'Watches',
    description: 'Stylish quartz watch with reliable movement, suitable for casual or business wear.',
    price:       4044.60,   // 2889 × 1.40 (Temu)
    oldPrice:    2889.00,
    tag:         'Choice',
    stock:       50,
  },
  {
    name:        '4pcs/2pcs Classic Quartz Men\'s Watch Set',
    category:    'Watches',
    description: 'Stylish quartz watch with reliable movement, suitable for casual or business wear.',
    price:       6941.20,   // 4958 × 1.40 (Temu)
    oldPrice:    4958.00,
    tag:         'Hot',
    stock:       50,
  },
  {
    name:        'Unisex Cool Business Luxury Watch',
    category:    'Watches',
    description: 'Stylish quartz watch with reliable movement, suitable for casual or business wear.',
    price:       4120.20,   // 2943 × 1.40 (Temu)
    oldPrice:    2943.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        '12pcs Fashion Quartz Watch Set',
    category:    'Watches',
    description: 'Stylish quartz watch with reliable movement, suitable for casual or business wear.',
    price:       22583.40,   // 16131 × 1.40 (Temu)
    oldPrice:    16131.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        'BANBONY Brand Unisex Quartz Watch',
    category:    'Watches',
    description: 'Stylish quartz watch with reliable movement, suitable for casual or business wear.',
    price:       9969.40,   // 7121 × 1.40 (Temu)
    oldPrice:    7121.00,
    tag:         'Sale',
    stock:       50,
  },
  {
    name:        '10pcs Fashionable Square Watch Set',
    category:    'Watches',
    description: 'Stylish quartz watch with reliable movement, suitable for casual or business wear.',
    price:       16766.40,   // 11976 × 1.40 (Temu)
    oldPrice:    11976.00,
    tag:         'New',
    stock:       50,
  },
  {
    name:        'New Multi-Function Sport Watch',
    category:    'Watches',
    description: 'Stylish quartz watch with reliable movement, suitable for casual or business wear.',
    price:       7606.20,   // 5433 × 1.40 (Temu)
    oldPrice:    5433.00,
    tag:         'Choice',
    stock:       50,
  },
  {
    name:        '4pcs Unisex Watch Set with Bracelet & Ring',
    category:    'Watches',
    description: 'Stylish quartz watch with reliable movement, suitable for casual or business wear.',
    price:       5577.60,   // 3984 × 1.40 (Temu)
    oldPrice:    3984.00,
    tag:         'Hot',
    stock:       50,
  },
  {
    name:        'Unisex Fashion Casual Quartz Watch',
    category:    'Watches',
    description: 'Stylish quartz watch with reliable movement, suitable for casual or business wear.',
    price:       5493.60,   // 3924 × 1.40 (Temu)
    oldPrice:    3924.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        '4pcs Men\'s And Women\'s Watch Gift Set',
    category:    'Watches',
    description: 'Stylish quartz watch with reliable movement, suitable for casual or business wear.',
    price:       5600.00,   // 4000 × 1.40 (Temu)
    oldPrice:    4000.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        '2pcs Fashionable Trendy Bag & Cap Set',
    category:    'Bags',
    description: 'Durable, stylish unisex bag suitable for daily use, travel, or work. Multiple compartments for organised storage.',
    price:       10645.60,   // 7604 × 1.40 (Temu)
    oldPrice:    7604.00,
    tag:         'Sale',
    stock:       50,
  },
  {
    name:        'Travel Backpack - New Style',
    category:    'Bags',
    description: 'Durable, stylish unisex bag suitable for daily use, travel, or work. Multiple compartments for organised storage.',
    price:       14660.80,   // 10472 × 1.40 (Temu)
    oldPrice:    10472.00,
    tag:         'New',
    stock:       50,
  },
  {
    name:        'Women\'s Single-Shoulder Bag',
    category:    'Bags',
    description: 'Durable, stylish unisex bag suitable for daily use, travel, or work. Multiple compartments for organised storage.',
    price:       9790.20,   // 6993 × 1.40 (Temu)
    oldPrice:    6993.00,
    tag:         'Choice',
    stock:       50,
  },
  {
    name:        'Travel Laptop Backpack, Large Capacity',
    category:    'Bags',
    description: 'Durable, stylish unisex bag suitable for daily use, travel, or work. Multiple compartments for organised storage.',
    price:       14278.60,   // 10199 × 1.40 (Temu)
    oldPrice:    10199.00,
    tag:         'Hot',
    stock:       50,
  },
  {
    name:        'Bat and Shoulder Bag Set',
    category:    'Bags',
    description: 'Durable, stylish unisex bag suitable for daily use, travel, or work. Multiple compartments for organised storage.',
    price:       11285.40,   // 8061 × 1.40 (Temu)
    oldPrice:    8061.00,
    tag:         '',
    stock:       50,
  },

  // ── Chargers / Power / Gaming Accessories ───────────────────────────────────
  {
    name:        'Newrixing 6W Wireless Charger Stand',
    category:    'Smart Home',
    description: 'Smart, convenient device designed for everyday home or travel use.',
    price:       22706.60,   // 16219 × 1.40 (Temu)
    oldPrice:    16219.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        'Smiling Shark Rechargeable Camping Lamp',
    category:    'Smart Home',
    description: 'Smart, convenient device designed for everyday home or travel use.',
    price:       13325.20,   // 9518 × 1.40 (Temu)
    oldPrice:    9518.00,
    tag:         'Sale',
    stock:       50,
  },
  {
    name:        'Multi-Functional Camping Power Station (10000mAh)',
    category:    'Smart Home',
    description: 'Smart, convenient device designed for everyday home or travel use.',
    price:       36681.40,   // 26201 × 1.40 (Temu)
    oldPrice:    26201.00,
    tag:         'New',
    stock:       50,
  },
  {
    name:        'Retractable Zoom LED Strong Flashlight',
    category:    'Tools',
    description: 'Practical, durable tool for everyday tasks and outdoor activities.',
    price:       8309.00,   // 5935 × 1.40 (Temu)
    oldPrice:    5935.00,
    tag:         'Choice',
    stock:       50,
  },
  {
    name:        '1309 Wolf In Sheep\'s Clothing Power Bank',
    category:    'Accessories',
    description: 'Handy accessory designed to enhance comfort, convenience, or device functionality.',
    price:       3577.00,   // 2555 × 1.40 (Temu)
    oldPrice:    2555.00,
    tag:         'Hot',
    stock:       50,
  },
  {
    name:        '3-In-1 Phone Stand Wireless Charger',
    category:    'Smart Home',
    description: 'Smart, convenient device designed for everyday home or travel use.',
    price:       19041.40,   // 13601 × 1.40 (Temu)
    oldPrice:    13601.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        'Newrixing 6W Portable Wireless Charger',
    category:    'Smart Home',
    description: 'Smart, convenient device designed for everyday home or travel use.',
    price:       26887.00,   // 19205 × 1.40 (Temu)
    oldPrice:    19205.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        '5-in-1 Car Fast Charger, 2-Port, 120W',
    category:    'Accessories',
    description: 'Handy accessory designed to enhance comfort, convenience, or device functionality.',
    price:       4173.40,   // 2981 × 1.40 (Temu)
    oldPrice:    2981.00,
    tag:         'Sale',
    stock:       50,
  },
  {
    name:        'Portable Outdoor Solar Charger Panel',
    category:    'Tools',
    description: 'Practical, durable tool for everyday tasks and outdoor activities.',
    price:       7565.60,   // 5404 × 1.40 (Temu)
    oldPrice:    5404.00,
    tag:         'New',
    stock:       50,
  },
  {
    name:        'Smiling Shark Power Bank Flashlight',
    category:    'Accessories',
    description: 'Handy accessory designed to enhance comfort, convenience, or device functionality.',
    price:       7285.60,   // 5204 × 1.40 (Temu)
    oldPrice:    5204.00,
    tag:         'Choice',
    stock:       50,
  },
  {
    name:        '4pcs/set Touch Screen Thumbs Gaming Grip',
    category:    'Accessories',
    description: 'Handy accessory designed to enhance comfort, convenience, or device functionality.',
    price:       2721.60,   // 1944 × 1.40 (Temu)
    oldPrice:    1944.00,
    tag:         'Hot',
    stock:       50,
  },
  {
    name:        '2pcs/8pcs Spider Gaming Finger Sleeves',
    category:    'Accessories',
    description: 'Handy accessory designed to enhance comfort, convenience, or device functionality.',
    price:       959.00,   // 685 × 1.40 (Temu)
    oldPrice:    685.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        '3D VR Headset Smart Virtual Reality (LAN XUN)',
    category:    'Wearables',
    description: 'Immersive wearable device offering an enhanced, comfortable user experience.',
    price:       13279.00,   // 9485 × 1.40 (Temu)
    oldPrice:    9485.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        'Wireless Headphones, Wireless Earbuds',
    category:    'Audio',
    description: 'Wireless audio device with reliable connectivity and clear sound quality.',
    price:       5243.00,   // 3745 × 1.40 (Temu)
    oldPrice:    3745.00,
    tag:         'Sale',
    stock:       50,
  },
  {
    name:        'OUBANG PS4 Controller Phone Mount Clip',
    category:    'Accessories',
    description: 'Handy accessory designed to enhance comfort, convenience, or device functionality.',
    price:       6168.40,   // 4406 × 1.40 (Temu)
    oldPrice:    4406.00,
    tag:         'New',
    stock:       50,
  },
  {
    name:        'Ultra-Thin Gaming Gloves',
    category:    'Accessories',
    description: 'Handy accessory designed to enhance comfort, convenience, or device functionality.',
    price:       1710.80,   // 1222 × 1.40 (Temu)
    oldPrice:    1222.00,
    tag:         'Choice',
    stock:       50,
  },
  {
    name:        '4pcs/Set Touch Screen Thumbs Game Controller',
    category:    'Accessories',
    description: 'Handy accessory designed to enhance comfort, convenience, or device functionality.',
    price:       2977.80,   // 2127 × 1.40 (Temu)
    oldPrice:    2127.00,
    tag:         'Hot',
    stock:       50,
  },
  {
    name:        '3D VR Headset Smart Virtual Reality',
    category:    'Wearables',
    description: 'Immersive wearable device offering an enhanced, comfortable user experience.',
    price:       17540.60,   // 12529 × 1.40 (Temu)
    oldPrice:    12529.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        'Game Controller Grip Compatible for Sony PSVita 1000/2000',
    category:    'Accessories',
    description: 'Handy accessory designed to enhance comfort, convenience, or device functionality.',
    price:       5492.20,   // 3923 × 1.40 (Temu)
    oldPrice:    3923.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        '4pcs Breathable Sweat-Absorbing Finger Sleeves',
    category:    'Accessories',
    description: 'Handy accessory designed to enhance comfort, convenience, or device functionality.',
    price:       1026.20,   // 733 × 1.40 (Temu)
    oldPrice:    733.00,
    tag:         'Sale',
    stock:       50,
  },

  // ── Clothes ──────────────────────────────────────────────────────────────────
  {
    name:        'American High Street Style Cargo Pants',
    category:    'Clothes',
    description: 'Trendy, comfortable cotton clothing piece, true to size, designed for everyday casual wear.',
    price:       27899.20,   // 19928 × 1.40 (Temu)
    oldPrice:    19928.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        'A Pair of Loose-Fitting Jeans, Plus Size',
    category:    'Clothes',
    description: 'Trendy, comfortable cotton clothing piece, true to size, designed for everyday casual wear.',
    price:       33262.60,   // 23759 × 1.40 (Temu)
    oldPrice:    23759.00,
    tag:         'Sale',
    stock:       50,
  },
  {
    name:        'Geng Yuan Men\'s Casual Jeans',
    category:    'Clothes',
    description: 'Trendy, comfortable cotton clothing piece, true to size, designed for everyday casual wear.',
    price:       21768.60,   // 15549 × 1.40 (Temu)
    oldPrice:    15549.00,
    tag:         'New',
    stock:       50,
  },
  {
    name:        'Men\'s Loose Fit Washed Jeans',
    category:    'Clothes',
    description: 'Trendy, comfortable cotton clothing piece, true to size, designed for everyday casual wear.',
    price:       25561.20,   // 18258 × 1.40 (Temu)
    oldPrice:    18258.00,
    tag:         'Choice',
    stock:       50,
  },
  {
    name:        'Men\'s Khaki Curved Baggy Pants',
    category:    'Clothes',
    description: 'Trendy, comfortable cotton clothing piece, true to size, designed for everyday casual wear.',
    price:       19748.40,   // 14106 × 1.40 (Temu)
    oldPrice:    14106.00,
    tag:         'Hot',
    stock:       50,
  },
  {
    name:        'Women\'s Black Loose Wide Leg Jeans',
    category:    'Clothes',
    description: 'Trendy, comfortable cotton clothing piece, true to size, designed for everyday casual wear.',
    price:       21572.60,   // 15409 × 1.40 (Temu)
    oldPrice:    15409.00,
    tag:         '',
    stock:       50,
  },
  {
    name:        'Vintage Blue Washed Straight-Leg Jeans',
    category:    'Clothes',
    description: 'Trendy, comfortable cotton clothing piece, true to size, designed for everyday casual wear.',
    price:       19644.80,   // 14032 × 1.40 (Temu)
    oldPrice:    14032.00,
    tag:         'Sale',
    stock:       50,
  },
  {
    name:        'Women\'s Mid-Rise Non-Stretch Distressed Jeans',
    category:    'Clothes',
    description: 'Trendy, comfortable cotton clothing piece, true to size, designed for everyday casual wear.',
    price:       17752.00,   // 12680 × 1.40 (Temu)
    oldPrice:    12680.00,
    tag:         'New',
    stock:       50,
  },
  {
    name:        'Hip-Hop Pattern Printed Loose Sweatpants',
    category:    'Clothes',
    description: 'Trendy, comfortable cotton clothing piece, true to size, designed for everyday casual wear.',
    price:       16935.80,   // 12097 × 1.40 (Temu)
    oldPrice:    12097.00,
    tag:         'Choice',
    stock:       50,
  },
  {
    name:        'Bust-Accented Design Boyfriend Jeans',
    category:    'Clothes',
    description: 'Trendy, comfortable cotton clothing piece, true to size, designed for everyday casual wear.',
    price:       24820.60,   // 17729 × 1.40 (Temu)
    oldPrice:    17729.00,
    tag:         'Hot',
    stock:       50,
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

    const productsWithImages = products.map((product, index) => ({
  ...product,
  image: `/images/${index + 1}.PNG`,
  active: true,
}));

const inserted = await Product.insertMany(productsWithImages);

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
