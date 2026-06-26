// routes/admin.js
// ─────────────────────────────────────────────────────────────────────────────
// All routes here are protected by a simple ADMIN_SECRET header check.
// Set  ADMIN_SECRET=some-long-random-string  in your Render environment.
// ─────────────────────────────────────────────────────────────────────────────
const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/Product');
const User    = require('../models/User');
const router  = express.Router();

// ── Admin auth middleware ─────────────────────────────────────────────────────
function requireAdmin(req, res, next) {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) {
    return res.status(500).json({ error: 'ADMIN_SECRET is not configured on the server.' });
  }
  if (req.headers['x-admin-secret'] !== secret) {
    return res.status(401).json({ error: 'Unauthorised.' });
  }
  next();
}

// ── POST /api/admin/seed ──────────────────────────────────────────────────────
// (your existing seed route — unchanged)
router.post('/seed', requireAdmin, async (req, res) => {
  try {
    const existing = await Product.countDocuments();
    if (existing > 0) {
      return res.json({ message: `Seed skipped — ${existing} products already exist.` });
    }

    const products = [
  // ── Shoes (1–12) ──────────────────────────────────────────────────────
  { name: 'Urban Runner Sneakers',          category: 'Shoes',      price: 15400, oldPrice: 11000, tag: 'New',  description: 'Lightweight mesh upper, cushioned sole',       image: '/images/1.PNG'   },
  { name: 'Classic White Kicks',            category: 'Shoes',      price: 12600, oldPrice:  9000, tag: 'Hot',  description: 'Clean minimalist canvas sneaker',              image: '/images/2.PNG'   },
  { name: 'Sport Trail Shoes',              category: 'Shoes',      price: 18200, oldPrice: 13000, tag: null,   description: 'Grip sole, breathable knit upper',             image: '/images/3.PNG'   },
  { name: 'Slip-On Loafers',               category: 'Shoes',      price: 10500, oldPrice:  7500, tag: 'Sale', description: 'Casual everyday comfort loafer',               image: '/images/4.PNG'   },
  { name: 'High-Top Canvas Shoes',         category: 'Shoes',      price: 13300, oldPrice:  9500, tag: null,   description: 'Retro high-top street style',                  image: '/images/5.PNG'   },
  { name: 'Running Pro Boost',             category: 'Shoes',      price: 21000, oldPrice: 15000, tag: 'New',  description: 'Energy-return foam midsole',                   image: '/images/6.PNG'   },
  { name: 'Leather Oxford Shoes',          category: 'Shoes',      price: 19600, oldPrice: 14000, tag: null,   description: 'Polished faux-leather formal oxford',          image: '/images/7.PNG'   },
  { name: 'Chunky Platform Sneakers',      category: 'Shoes',      price: 16800, oldPrice: 12000, tag: 'Hot',  description: 'Bold platform sole, padded ankle collar',      image: '/images/8.PNG'   },
  { name: 'Waterproof Hiking Boots',       category: 'Shoes',      price: 24500, oldPrice: 17500, tag: null,   description: 'Ankle support, waterproof lining',             image: '/images/9.PNG'   },
  { name: 'Slip-Resistant Work Shoes',     category: 'Shoes',      price: 11200, oldPrice:  8000, tag: 'Sale', description: 'Oil-resistant outsole, cushioned insole',      image: '/images/10.PNG'  },
  { name: 'Fashion Mule Slides',           category: 'Shoes',      price:  9800, oldPrice:  7000, tag: null,   description: 'Open-back mule, quilted upper',                image: '/images/11.PNG'  },
  { name: 'Kids Light-Up Sneakers',        category: 'Shoes',      price:  8400, oldPrice:  6000, tag: 'Hot',  description: 'LED sole lights, hook-and-loop strap',         image: '/images/12.PNG'  },

  // ── Accessories (13–24) ───────────────────────────────────────────────
  { name: 'Minimalist Leather Wallet',     category: 'Accessories', price:  5600, oldPrice:  4000, tag: 'New',  description: 'Slim bi-fold, 6 card slots',                   image: '/images/13.PNG'  },
  { name: 'Polarised Aviator Sunglasses',  category: 'Accessories', price:  7700, oldPrice:  5500, tag: null,   description: 'UV400 protection, metal frame',                image: '/images/14.PNG'  },
  { name: 'Braided Leather Belt',          category: 'Accessories', price:  4200, oldPrice:  3000, tag: 'Sale', description: 'Genuine PU braid, pin buckle',                 image: '/images/15.PNG'  },
  { name: 'Silk Square Scarf',             category: 'Accessories', price:  3500, oldPrice:  2500, tag: null,   description: '70 × 70 cm printed silk-feel scarf',           image: '/images/16.PNG'  },
  { name: 'Multi-Tool Keychain',           category: 'Accessories', price:  2800, oldPrice:  2000, tag: 'Hot',  description: 'Bottle opener, screwdriver, carabiner',        image: '/images/17.PNG'  },
  { name: 'Canvas Tote Bag',              category: 'Accessories', price:  3150, oldPrice:  2250, tag: null,   description: 'Heavy-duty cotton canvas, inner pocket',       image: '/images/18.PNG'  },
  { name: 'Travel Passport Holder',       category: 'Accessories', price:  2450, oldPrice:  1750, tag: 'New',  description: 'RFID-blocking, fits cards + passport',         image: '/images/19.PNG'  },
  { name: 'Knitted Beanie Hat',           category: 'Accessories', price:  1960, oldPrice:  1400, tag: null,   description: 'Soft acrylic knit, one size fits all',         image: '/images/20.PNG'  },
  { name: 'Elastic Hair Scrunchie Set',   category: 'Accessories', price:  1120, oldPrice:   800, tag: 'Sale', description: 'Set of 6 pastel satin scrunchies',             image: '/images/21.PNG'  },
  { name: 'Stainless Steel Money Clip',   category: 'Accessories', price:  1750, oldPrice:  1250, tag: null,   description: 'Spring-tension clip, brushed finish',          image: '/images/22.PNG'  },
  { name: 'Boho Beaded Bracelet Set',     category: 'Accessories', price:  2100, oldPrice:  1500, tag: 'Hot',  description: 'Set of 5 mixed-bead stretch bracelets',        image: '/images/23.PNG'  },
  { name: 'Packable Sun Hat',             category: 'Accessories', price:  2800, oldPrice:  2000, tag: null,   description: 'Wide brim, UPF 50+, folds flat',               image: '/images/24.PNG'  },

  // ── Watches (25–36) ───────────────────────────────────────────────────
  { name: 'Classic Analogue Watch',       category: 'Watches',     price: 14000, oldPrice: 10000, tag: 'New',  description: 'Stainless case, genuine leather strap',        image: '/images/25.PNG'  },
  { name: 'Chronograph Sports Watch',     category: 'Watches',     price: 21000, oldPrice: 15000, tag: 'Hot',  description: '3-register chrono, 100 m water resist.',      image: '/images/26.PNG'  },
  { name: 'Rose Gold Mesh Watch',         category: 'Watches',     price: 16800, oldPrice: 12000, tag: null,   description: 'Ultrathin case, stainless mesh bracelet',     image: '/images/27.PNG'  },
  { name: 'Digital Tactical Watch',       category: 'Watches',     price: 11200, oldPrice:  8000, tag: 'Sale', description: 'EL backlight, dual time, alarm',               image: '/images/28.PNG'  },
  { name: 'Automatic Skeleton Watch',     category: 'Watches',     price: 28000, oldPrice: 20000, tag: null,   description: 'See-through dial, self-winding movement',      image: '/images/29.PNG'  },
  { name: 'Minimalist Marble-Dial Watch', category: 'Watches',     price: 12600, oldPrice:  9000, tag: 'New',  description: 'Genuine marble face, matte leather strap',     image: '/images/30.PNG'  },
  { name: 'Diver Style Watch 200 m',      category: 'Watches',     price: 19600, oldPrice: 14000, tag: null,   description: 'Uni-directional bezel, luminous hands',        image: '/images/31.PNG'  },
  { name: 'Pilot Aviator Watch',          category: 'Watches',     price: 17500, oldPrice: 12500, tag: 'Hot',  description: 'Large Arabic numerals, slide-rule bezel',      image: '/images/32.PNG'  },
  { name: 'Women\'s Crystal Watch',       category: 'Watches',     price:  9800, oldPrice:  7000, tag: null,   description: 'Crystal-set bezel, mother-of-pearl dial',      image: '/images/33.PNG'  },
  { name: 'Kids Dinosaur Watch',          category: 'Watches',     price:  5600, oldPrice:  4000, tag: 'Sale', description: 'Dino print silicone band, shockproof',         image: '/images/34.PNG'  },
  { name: 'Dress Watch Gold Tone',        category: 'Watches',     price: 15400, oldPrice: 11000, tag: null,   description: 'Thin profile, date window, mesh strap',        image: '/images/35.PNG'  },
  { name: 'Outdoor Adventure Watch',      category: 'Watches',     price: 22400, oldPrice: 16000, tag: 'New',  description: 'Altimeter, barometer, compass, thermometer',   image: '/images/36.PNG'  },

  // ── Bags (37–48) ──────────────────────────────────────────────────────
  { name: 'Leather Backpack 20 L',        category: 'Bags',        price: 21000, oldPrice: 15000, tag: 'New',  description: 'PU leather, padded laptop sleeve 15 in',       image: '/images/37.PNG'  },
  { name: 'Crossbody Sling Bag',          category: 'Bags',        price:  8400, oldPrice:  6000, tag: null,   description: 'Compact, adjustable strap, 3 compartments',   image: '/images/38.PNG'  },
  { name: 'Rolling Carry-On Luggage',     category: 'Bags',        price: 42000, oldPrice: 30000, tag: 'Hot',  description: '20 in spinner, TSA lock, hardshell ABS',       image: '/images/39.PNG'  },
  { name: 'Gym Duffel Bag',              category: 'Bags',        price: 11200, oldPrice:  8000, tag: null,   description: 'Shoe compartment, water bottle pocket',        image: '/images/40.PNG'  },
  { name: 'Mini Quilted Shoulder Bag',   category: 'Bags',        price:  7000, oldPrice:  5000, tag: 'Sale', description: 'Chain strap, gold-tone hardware',              image: '/images/41.PNG'  },
  { name: 'Vintage Messenger Bag',        category: 'Bags',        price: 14000, oldPrice: 10000, tag: null,   description: 'Waxed canvas, brass buckles, 13 in laptop',    image: '/images/42.PNG'  },
  { name: 'Clear Stadium Bag',            category: 'Bags',        price:  4200, oldPrice:  3000, tag: 'New',  description: 'PVC clear panel, event-compliant size',        image: '/images/43.PNG'  },
  { name: 'Fanny Pack / Belt Bag',       category: 'Bags',        price:  5600, oldPrice:  4000, tag: 'Hot',  description: 'Adjustable waist strap, 2 zip pockets',        image: '/images/44.PNG'  },
  { name: 'Drawstring Sports Bag',       category: 'Bags',        price:  3500, oldPrice:  2500, tag: null,   description: 'Lightweight nylon, reinforced corners',        image: '/images/45.PNG'  },
  { name: 'Business Briefcase',          category: 'Bags',        price: 24500, oldPrice: 17500, tag: null,   description: 'Hard-frame, key lock, document divider',       image: '/images/46.PNG'  },
  { name: 'Waterproof Dry Bag 10 L',     category: 'Bags',        price:  7700, oldPrice:  5500, tag: 'Sale', description: 'Roll-top seal, welded seams, IPX6 rated',      image: '/images/47.PNG'  },
  { name: 'Kids School Backpack',        category: 'Bags',        price:  9800, oldPrice:  7000, tag: 'New',  description: 'Ergonomic straps, reflective strips, 18 L',    image: '/images/48.PNG'  },

  // ── Tools (49–60) ─────────────────────────────────────────────────────
  { name: '21-Piece Screwdriver Set',    category: 'Tools',       price:  7700, oldPrice:  5500, tag: 'New',  description: 'Magnetic tips, ergonomic handle',              image: '/images/49.PNG'  },
  { name: 'Digital Tyre Pressure Gauge', category: 'Tools',       price:  3500, oldPrice:  2500, tag: null,   description: 'PSI/BAR/kPa/kgf display, backlit',             image: '/images/50.PNG'  },
  { name: 'Cordless Power Drill',        category: 'Tools',       price: 28000, oldPrice: 20000, tag: 'Hot',  description: '18 V, 2-speed, 13 mm chuck, 2 batteries',      image: '/images/51.PNG'  },
  { name: 'Retractable Tape Measure 5 m',category: 'Tools',       price:  1960, oldPrice:  1400, tag: null,   description: 'Rubber grip, magnetic hook, nylon blade',      image: '/images/52.PNG'  },
  { name: 'Magnetic Wristband Tool Belt',category: 'Tools',       price:  2800, oldPrice:  2000, tag: 'Sale', description: 'Holds screws, bits, drill bits hands-free',    image: '/images/53.PNG'  },
  { name: 'Adjustable Spanner Wrench',   category: 'Tools',       price:  3150, oldPrice:  2250, tag: null,   description: '10 in chrome-vanadium, laser etched scale',    image: '/images/54.PNG'  },
  { name: 'LED Head Torch 500 lm',       category: 'Tools',       price:  4200, oldPrice:  3000, tag: 'New',  description: '3 modes, tiltable head, IPX4 waterproof',      image: '/images/55.PNG'  },
  { name: 'Pipe & Stud Wall Detector',   category: 'Tools',       price:  5600, oldPrice:  4000, tag: null,   description: 'Detects wood, metal, live AC, up to 38 mm',    image: '/images/56.PNG'  },
  { name: 'Mini Hot-Glue Gun',           category: 'Tools',       price:  2450, oldPrice:  1750, tag: 'Hot',  description: '20 W, heats in 3 min, 10 sticks included',     image: '/images/57.PNG'  },
  { name: 'Combination Lock Set (3-pk)', category: 'Tools',       price:  3500, oldPrice:  2500, tag: null,   description: '4-digit resettable, hardened shackle',         image: '/images/58.PNG'  },
  { name: 'Laser Level Self-Levelling',  category: 'Tools',       price:  9800, oldPrice:  7000, tag: 'New',  description: 'Horizontal + vertical cross-line, ±3 mm/10 m', image: '/images/59.PNG'  },
  { name: 'Cable Ratchet Tie-Down Set',  category: 'Tools',       price:  4900, oldPrice:  3500, tag: 'Sale', description: '4-pack, 25 mm × 4.5 m, 400 kg lash rating',    image: '/images/60.PNG'  },

  // ── Clothes (61–72) ───────────────────────────────────────────────────
  { name: 'Oversized Graphic Tee',       category: 'Clothes',     price:  5600, oldPrice:  4000, tag: 'New',  description: '100 % cotton, unisex relaxed fit',             image: '/images/61.PNG'  },
  { name: 'Slim-Fit Chino Trousers',     category: 'Clothes',     price:  9800, oldPrice:  7000, tag: null,   description: 'Stretch cotton, flat-front, 4 pockets',        image: '/images/62.PNG'  },
  { name: 'Puffer Jacket Lightweight',   category: 'Clothes',     price: 19600, oldPrice: 14000, tag: 'Hot',  description: 'Water-repellent, packable into pocket',        image: '/images/63.PNG'  },
  { name: 'Floral Wrap Midi Dress',      category: 'Clothes',     price: 12600, oldPrice:  9000, tag: null,   description: 'V-neck, tie waist, viscose blend',             image: '/images/64.PNG'  },
  { name: 'Cargo Shorts 6-Pocket',       category: 'Clothes',     price:  7700, oldPrice:  5500, tag: 'Sale', description: 'Ripstop nylon, multiple zip pockets',          image: '/images/65.PNG'  },
  { name: 'Classic Oxford Shirt',        category: 'Clothes',     price:  8400, oldPrice:  6000, tag: null,   description: 'Button-down collar, chest pocket',             image: '/images/66.PNG'  },
  { name: 'Ribbed Knit Crop Top',        category: 'Clothes',     price:  4200, oldPrice:  3000, tag: 'New',  description: 'Stretchy rib-knit, cropped length',            image: '/images/67.PNG'  },
  { name: 'Denim Jacket Classic Wash',   category: 'Clothes',     price: 16800, oldPrice: 12000, tag: null,   description: 'Medium blue wash, contrast stitching',         image: '/images/68.PNG'  },
  { name: 'Fleece Hoodie Pullover',      category: 'Clothes',     price: 11200, oldPrice:  8000, tag: 'Hot',  description: 'Anti-pill fleece, kangaroo pocket, drawcord',  image: '/images/69.PNG'  },
  { name: 'High-Waist Yoga Leggings',    category: 'Clothes',     price:  8400, oldPrice:  6000, tag: 'Sale', description: '4-way stretch, squat-proof, 2 side pockets',   image: '/images/70.PNG'  },
  { name: 'Linen Wide-Leg Trousers',     category: 'Clothes',     price: 10500, oldPrice:  7500, tag: null,   description: 'Breathable linen-cotton blend, elastic waist',  image: '/images/71.PNG'  },
  { name: 'Bomber Jacket Satin Finish',  category: 'Clothes',     price: 14000, oldPrice: 10000, tag: 'New',  description: 'Satin shell, ribbed cuffs and hem',            image: '/images/72.PNG'  },

  // ── Smart Home (73–84) ────────────────────────────────────────────────
  { name: 'Smart Plug Wi-Fi 16 A',       category: 'Smart Home',  price:  4200, oldPrice:  3000, tag: 'New',  description: 'Voice control, energy monitoring, timer',      image: '/images/73.PNG'  },
  { name: 'LED Smart Bulb RGBW',         category: 'Smart Home',  price:  2800, oldPrice:  2000, tag: null,   description: 'E27, 9 W, 16 M colours, app + voice',          image: '/images/74.PNG'  },
  { name: 'Smart Door Lock Keypad',      category: 'Smart Home',  price: 35000, oldPrice: 25000, tag: 'Hot',  description: 'PIN + card + app unlock, auto-lock',           image: '/images/75.PNG'  },
  { name: 'Wi-Fi Video Doorbell',        category: 'Smart Home',  price: 21000, oldPrice: 15000, tag: null,   description: '1080p, night vision, two-way audio',            image: '/images/76.PNG'  },
  { name: 'Smart IR Remote Hub',         category: 'Smart Home',  price:  5600, oldPrice:  4000, tag: 'Sale', description: 'Controls TV, AC, fan via app or voice',        image: '/images/77.PNG'  },
  { name: 'Robot Vacuum Cleaner',        category: 'Smart Home',  price: 56000, oldPrice: 40000, tag: 'Hot',  description: 'Auto-plan, 2 000 Pa suction, app schedule',    image: '/images/78.PNG'  },
  { name: 'Smart Wi-Fi Power Strip',     category: 'Smart Home',  price:  7700, oldPrice:  5500, tag: null,   description: '4 AC + 4 USB, individually switchable',        image: '/images/79.PNG'  },
  { name: 'Motion Sensor Night Light',   category: 'Smart Home',  price:  1960, oldPrice:  1400, tag: 'New',  description: 'PIR trigger, auto-off, USB rechargeable',      image: '/images/80.PNG'  },
  { name: 'Smart Smoke & CO Detector',   category: 'Smart Home',  price:  9800, oldPrice:  7000, tag: null,   description: 'Dual sensor, app alert, 10-yr battery',        image: '/images/81.PNG'  },
  { name: 'Wi-Fi Security Camera 4 MP',  category: 'Smart Home',  price: 14000, oldPrice: 10000, tag: 'Sale', description: 'Full-colour night, two-way audio, AI detect',  image: '/images/82.PNG'  },
  { name: 'Smart Curtain Motor Wi-Fi',   category: 'Smart Home',  price: 19600, oldPrice: 14000, tag: null,   description: 'Timer, voice, app, works with track rail',     image: '/images/83.PNG'  },
  { name: 'Smart Home Hub Gateway',      category: 'Smart Home',  price: 16800, oldPrice: 12000, tag: 'New',  description: 'Zigbee + Wi-Fi bridge, links 200+ devices',    image: '/images/84.PNG'  },

  // ── Wearables (85–96) ─────────────────────────────────────────────────
  { name: 'Fitness Band HR + SpO2',      category: 'Wearables',   price:  9800, oldPrice:  7000, tag: 'New',  description: 'Heart rate, blood oxygen, sleep tracking',     image: '/images/85.PNG'  },
  { name: 'Smart Watch AMOLED 1.9 in',   category: 'Wearables',   price: 21000, oldPrice: 15000, tag: 'Hot',  description: 'Always-on, GPS, 100+ sport modes',             image: '/images/86.PNG'  },
  { name: 'Kids GPS Tracker Watch',      category: 'Wearables',   price: 14000, oldPrice: 10000, tag: null,   description: 'Real-time location, SOS call, geo-fence',      image: '/images/87.PNG'  },
  { name: 'Smart Ring Health Monitor',   category: 'Wearables',   price: 28000, oldPrice: 20000, tag: 'New',  description: 'HRV, temperature, steps — no charging daily',  image: '/images/88.PNG'  },
  { name: 'ECG Smart Watch Pro',         category: 'Wearables',   price: 35000, oldPrice: 25000, tag: 'Hot',  description: 'Medical-grade ECG, BP estimation, LTE',        image: '/images/89.PNG'  },
  { name: 'Sport Pedometer Clip',        category: 'Wearables',   price:  3500, oldPrice:  2500, tag: 'Sale', description: '3D sensor, calorie count, memory 7 days',      image: '/images/90.PNG'  },
  { name: 'UV Exposure Wristband',       category: 'Wearables',   price:  4900, oldPrice:  3500, tag: null,   description: 'Real-time UV index alert via vibration',       image: '/images/91.PNG'  },
  { name: 'Posture Corrector Smart',     category: 'Wearables',   price:  7700, oldPrice:  5500, tag: 'New',  description: 'Vibrates when you slouch, app coaching',       image: '/images/92.PNG'  },
  { name: 'Smart Glasses Open-Ear',      category: 'Wearables',   price: 19600, oldPrice: 14000, tag: null,   description: 'Built-in speakers, mic, polarised lenses',     image: '/images/93.PNG'  },
  { name: 'Period Tracker Smart Band',   category: 'Wearables',   price:  8400, oldPrice:  6000, tag: 'Hot',  description: 'Cycle prediction, cramp alert, temp sensor',   image: '/images/94.PNG'  },
  { name: 'Fall Detection Senior Watch', category: 'Wearables',   price: 16800, oldPrice: 12000, tag: 'New',  description: 'Auto-call on fall, GPS, large display',        image: '/images/95.PNG'  },
  { name: 'Haptic Buzzing Watch ADHD',   category: 'Wearables',   price: 11200, oldPrice:  8000, tag: null,   description: 'Silent vibrating reminders, interval timer',   image: '/images/96.PNG'  },

  // ── Audio (97–108) ────────────────────────────────────────────────────
  { name: 'TWS Earbuds ANC 30 dB',       category: 'Audio',       price: 14000, oldPrice: 10000, tag: 'New',  description: 'Active noise cancel, 6 + 24 h total playtime', image: '/images/97.PNG'  },
  { name: 'Over-Ear Studio Headphones',   category: 'Audio',       price: 21000, oldPrice: 15000, tag: 'Hot',  description: '40 mm driver, foldable, 3.5 mm + BT 5.3',     image: '/images/98.PNG'  },
  { name: 'Portable BT Speaker IP67',     category: 'Audio',       price: 16800, oldPrice: 12000, tag: null,   description: '360° sound, 24 h battery, waterproof',        image: '/images/99.PNG'  },
  { name: 'Neckband Wireless Earphones',  category: 'Audio',       price:  7700, oldPrice:  5500, tag: 'Sale', description: 'Magnetic buds, aptX, 20 h playback',           image: '/images/100.PNG' },
  { name: 'Bone Conduction Headphones',   category: 'Audio',       price: 19600, oldPrice: 14000, tag: 'New',  description: 'Open-ear safety, IP55, titanium frame',        image: '/images/101.PNG' },
  { name: 'Karaoke Wireless Microphone',  category: 'Audio',       price:  8400, oldPrice:  6000, tag: 'Hot',  description: 'BT 5.0, echo reverb, charge passthrough',      image: '/images/102.PNG' },
  { name: 'Soundbar 2.0 Channel 60 W',   category: 'Audio',       price: 28000, oldPrice: 20000, tag: null,   description: 'HDMI ARC, optical, BT, wall mountable',        image: '/images/103.PNG' },
  { name: 'Gaming Headset 7.1 Surround',  category: 'Audio',       price: 14000, oldPrice: 10000, tag: 'New',  description: 'Virtual 7.1, RGB, retractable mic, USB',       image: '/images/104.PNG' },
  { name: 'Smart Alarm Clock Speaker',    category: 'Audio',       price:  9800, oldPrice:  7000, tag: null,   description: 'FM radio, BT, LED display, USB charge port',   image: '/images/105.PNG' },
  { name: 'HiFi DAC USB-C Amplifier',    category: 'Audio',       price: 11200, oldPrice:  8000, tag: 'Hot',  description: '384 kHz/32-bit, CX31993 chip, 3.5 mm out',    image: '/images/106.PNG' },
  { name: 'Party Disco Ball Speaker',     category: 'Audio',       price: 12600, oldPrice:  9000, tag: 'Sale', description: 'Rotating RGB lights, BT 5.0, built-in mic',    image: '/images/107.PNG' },
  { name: 'Kids Headphones Volume Safe',  category: 'Audio',       price:  5600, oldPrice:  4000, tag: 'New',  description: '85 dB limit, foldable, 3.5 mm, 20 h play',    image: '/images/108.PNG' },

  // ── Beauty (109–120) ──────────────────────────────────────────────────
  { name: 'Jade Facial Roller',           category: 'Beauty',      price:  3500, oldPrice:  2500, tag: 'New',  description: 'Dual-ended genuine jade, reduces puffiness',   image: '/images/109.PNG' },
  { name: 'LED Face Mask 7 Colours',      category: 'Beauty',      price: 21000, oldPrice: 15000, tag: 'Hot',  description: 'Red + blue + IR light therapy, 20 min timer',  image: '/images/110.PNG' },
  { name: 'Mini Hair Straightener',       category: 'Beauty',      price:  7700, oldPrice:  5500, tag: null,   description: 'Ceramic plates, 200 °C, dual-voltage travel',  image: '/images/111.PNG' },
  { name: 'Electric Facial Cleanser',     category: 'Beauty',      price:  9800, oldPrice:  7000, tag: 'Sale', description: 'Silicone brush head, 3 speeds, waterproof',     image: '/images/112.PNG' },
  { name: 'Eyebrow Stamp & Stencil Kit',  category: 'Beauty',      price:  2100, oldPrice:  1500, tag: null,   description: '10 stencil shapes, smudge-proof powder',       image: '/images/113.PNG' },
  { name: 'Portable UV Nail Lamp 48 W',   category: 'Beauty',      price:  5600, oldPrice:  4000, tag: 'New',  description: 'Auto-sensor, 99-s timer, dual light source',   image: '/images/114.PNG' },
  { name: 'Blackhead Vacuum Remover',     category: 'Beauty',      price:  7000, oldPrice:  5000, tag: 'Hot',  description: '4 suction heads, 5 levels, USB rechargeable',  image: '/images/115.PNG' },
  { name: 'Rose Quartz Gua Sha Tool',     category: 'Beauty',      price:  2800, oldPrice:  2000, tag: null,   description: 'Heart-shaped, lifts and contours jawline',     image: '/images/116.PNG' },
  { name: 'Eyelash Curler Heated',        category: 'Beauty',      price:  3500, oldPrice:  2500, tag: 'Sale', description: 'Ceramic pad, 2 temps, USB-C rechargeable',     image: '/images/117.PNG' },
  { name: 'Sonic Tooth Whitening Kit',    category: 'Beauty',      price: 11200, oldPrice:  8000, tag: 'New',  description: 'LED accelerator, 3 × 10 min sessions',        image: '/images/118.PNG' },
  { name: 'Hair Growth Scalp Massager',   category: 'Beauty',      price:  4200, oldPrice:  3000, tag: null,   description: 'Electric, 4 heads, wet/dry, promotes growth',  image: '/images/119.PNG' },
  { name: 'Dermaplaning Face Razor Set',  category: 'Beauty',      price:  1960, oldPrice:  1400, tag: 'Hot',  description: '6-pack precision blades, peach-fuzz removal',  image: '/images/120.PNG' },
];

    await Product.insertMany(products);
    res.json({ message: `Seeded ${products.length} products successfully.` });
  } catch (err) {
    console.error('Seed error:', err);
    res.status(500).json({ error: err.message });
  }
});

// ── DELETE /api/admin/products ────────────────────────────────────────────────
router.delete('/products', requireAdmin, async (req, res) => {
  try {
    const result = await Product.deleteMany({});
    res.json({ message: `Deleted ${result.deletedCount} products.` });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ error: err.message });
  }
});

// ── GET /api/admin/users ──────────────────────────────────────────────────────
// Returns all registered users (newest first), without passwords.
router.get('/users', requireAdmin, async (req, res) => {
  try {
    const users = await User.find({})
      .select('-password -resetToken -resetTokenExpiry')
      .sort({ createdAt: -1 });

    res.json({ count: users.length, users });
  } catch (err) {
    console.error('Admin users error:', err);
    res.status(500).json({ error: 'Could not fetch users.' });
  }
});

// ── GET /api/admin/login-activity ─────────────────────────────────────────────
// Returns the last 200 login events across all users, newest first.
router.get('/login-activity', requireAdmin, async (req, res) => {
  try {
    const users = await User.find({ 'loginHistory.0': { $exists: true } })
      .select('name email loginHistory');

    // Flatten all login events into one array
    const events = [];
    for (const user of users) {
      for (const entry of user.loginHistory) {
        events.push({
          userId:    user._id,
          name:      user.name,
          email:     user.email,
          timestamp: entry.timestamp,
          ip:        entry.ip,
        });
      }
    }

    // Sort newest first and return latest 200
    events.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    const recent = events.slice(0, 200);

    res.json({ count: recent.length, events: recent });
  } catch (err) {
    console.error('Admin login-activity error:', err);
    res.status(500).json({ error: 'Could not fetch login activity.' });
  }
});

module.exports = router;
