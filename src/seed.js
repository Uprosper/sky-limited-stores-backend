'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const Product = mongoose.models.Product || require('./models/Product');

const products = [
  // ───── EARBUDS ─────
  {
    "name": "Bolizma Bluetooth Sleep Earbuds with LED Display Charging Case",
    "price": 6999,
    "oldPrice": 44700,
    "category": "Earbuds",
    "tag": "Hot",
    "image": "/images/2.PNG",
    "description": "Bluetooth sleep earbuds with LED display charging case for all-night comfort."
  },
  {
    "name": "itel Earbuds Wireless Bluetooth 5.3 Headphones with Deep Bass",
    "price": 16800,
    "oldPrice": 12000,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/2_2.PNG",
    "description": "Wireless Bluetooth 5.3 earbuds with deep bass and clear call quality."
  },
  {
    "name": "Bolizma Sleeping Earbuds Bluetooth 5.4 Earphones TWS",
    "price": 11059,
    "oldPrice": 12960,
    "category": "Earbuds",
    "tag": "Hot",
    "image": "/images/2_3.PNG",
    "description": "Bluetooth 5.4 TWS sleeping earbuds with LED display and ultra-low profile fit."
  },
  {
    "name": "Bolizma Black Wireless Open Ear Earbuds with Bluetooth Air Clip",
    "price": 15399,
    "oldPrice": 14700,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/2_4.PNG",
    "description": "Open ear air clip Bluetooth earbuds with LED digital display charging case."
  },
  {
    "name": "Noise Hush ORAIMO Bluetooth Earphones Wireless Gaming",
    "price": 40320,
    "oldPrice": 28800,
    "category": "Earbuds",
    "tag": "Hot",
    "image": "/images/3_10.PNG",
    "description": "ORAIMO wireless gaming earphones with real noise cancellation technology."
  },
  {
    "name": "MingDe Era Wireless Earbuds with Noise Cancelling 30H",
    "price": 12348,
    "oldPrice": 14700,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/3_10_2.PNG",
    "description": "Wireless earbuds with ENC noise cancelling and 30H long battery life."
  },
  {
    "name": "Bolizma Wireless In-Ear Bluetooth Earbuds with Charging Case HiFi",
    "price": 8399,
    "oldPrice": 10290,
    "category": "Earbuds",
    "tag": "Hot",
    "image": "/images/3_10_3.PNG",
    "description": "HiFi wireless in-ear Bluetooth earbuds with LED display charging case."
  },
  {
    "name": "Bolizma Wireless Earbuds Bluetooth 5.4 Open Ear",
    "price": 11899,
    "oldPrice": 12870,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/3_10_4.PNG",
    "description": "Open ear Bluetooth 5.4 wireless earbuds with secure fit and clear sound."
  },
  {
    "name": "VANIR Open Ear Bluetooth Earbuds with Earhooks 48H",
    "price": 15120,
    "oldPrice": 72000,
    "category": "Earbuds",
    "tag": "Hot",
    "image": "/images/Capture_1.PNG",
    "description": "Open ear Bluetooth earbuds with secure earhooks and 48H total battery life."
  },
  {
    "name": "Bolizma Wireless Earbuds with Digital Display Bluetooth 5.3",
    "price": 11199,
    "oldPrice": 11760,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/Capture_2.PNG",
    "description": "Bluetooth 5.3 wireless earbuds with digital display and premium sound quality."
  },
  {
    "name": "Bolizma Sleeping Earbuds Bluetooth 5.4 Earphones TWS",
    "price": 11059,
    "oldPrice": 12960,
    "category": "Earbuds",
    "tag": "Hot",
    "image": "/images/Capture_3.PNG",
    "description": "TWS sleeping earbuds with Bluetooth 5.4 and ultra-comfortable low-profile design."
  },
  {
    "name": "Bolizma Wireless In-Ear Bluetooth Earbuds HiFi Charging Case",
    "price": 8399,
    "oldPrice": 10290,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/Capture_4.PNG",
    "description": "HiFi in-ear Bluetooth earbuds with fast-charge case and crystal-clear audio."
  },

  // ───── POWER BANKS ─────
  {
    "name": "Oraimo Traveler 15 Power Bank 20000mAh 15W Type-C Fast Charging",
    "price": 20301,
    "oldPrice": 27360,
    "category": "Power Banks",
    "tag": "Hot",
    "image": "/images/3.PNG",
    "description": "Oraimo 20000mAh power bank with 15W fast charging and Type-C input/output."
  },
  {
    "name": "SUNDASELF Portable Power Bank 20000mAh x2 Dual USB",
    "price": 22176,
    "oldPrice": 28800,
    "category": "Power Banks",
    "tag": "New",
    "image": "/images/3_2.PNG",
    "description": "2-pack SUNDASELF 20000mAh portable power banks with dual USB output."
  },
  {
    "name": "GDTINA 30000mAh 22.5W Super Fast Charging Power Bank",
    "price": 20860,
    "oldPrice": 32000,
    "category": "Power Banks",
    "tag": "Hot",
    "image": "/images/3_3.PNG",
    "description": "30000mAh power bank with 22.5W super fast charging and built-in cables."
  },
  {
    "name": "Philly 20000mAh Power Charging Bank Portable Charger Ultra Slim",
    "price": 10690,
    "oldPrice": 12284,
    "category": "Power Banks",
    "tag": "New",
    "image": "/images/3_4.PNG",
    "description": "Ultra slim Philly 20000mAh power bank with 4 ports including Type-C and micro USB."
  },
  {
    "name": "Philly 50000mAh 66W Super Fast Charge Power Bank",
    "price": 35700,
    "oldPrice": 32820,
    "category": "Power Banks",
    "tag": "Hot",
    "image": "/images/3_1.PNG",
    "description": "Philly PD-51 50000mAh power bank with 66W super fast charging and LED display."
  },
  {
    "name": "AVNEX 50000mAh Strong Durable Full Capacity Large Power Bank",
    "price": 41241,
    "oldPrice": 40183,
    "category": "Power Banks",
    "tag": "New",
    "image": "/images/3_2_1.PNG",
    "description": "AVNEX 50000mAh full capacity power bank with built-in cables and fast charging."
  },

  // ───── CLOTHING ─────
  {
    "name": "Jonnie Striped Black Baggy Track Pants",
    "price": 18900,
    "oldPrice": 40000,
    "category": "Clothing",
    "tag": "Hot",
    "image": "/images/4.PNG",
    "description": "Stylish black baggy track pants with contrast stripe design for streetwear looks."
  },
  {
    "name": "Track Striped Baggy Trouser Black",
    "price": 15119,
    "oldPrice": 30000,
    "category": "Clothing",
    "tag": "New",
    "image": "/images/4_2.PNG",
    "description": "Baggy black track trousers with bold stripe detailing for casual and street style."
  },
  {
    "name": "UNLIMITED Baggy Track Joggers",
    "price": 14490,
    "oldPrice": 10350,
    "category": "Clothing",
    "tag": "Hot",
    "image": "/images/4_3.PNG",
    "description": "Unlimited edition baggy track joggers with wide-leg fit and comfortable waistband."
  },
  {
    "name": "Asake Round Neck T-Shirt",
    "price": 11970,
    "oldPrice": 20000,
    "category": "Clothing",
    "tag": "New",
    "image": "/images/4_4.PNG",
    "description": "Trendy round neck T-shirt with relaxed fit for everyday casual wear."
  },
  {
    "name": "GALUIN Men's Casual Short-Sleeve Set",
    "price": 16128,
    "oldPrice": 24480,
    "category": "Clothing",
    "tag": "Hot",
    "image": "/images/4_1.PNG",
    "description": "Men's casual short-sleeve sports set with matching top and shorts."
  },
  {
    "name": "Berrykey Men's Pull Over Short Sleeve Polo Vintage Striped",
    "price": 22638,
    "oldPrice": 32340,
    "category": "Clothing",
    "tag": "New",
    "image": "/images/4_1_2.PNG",
    "description": "Vintage striped polo shirt with classic pull-over design and bold color blocking."
  },
  {
    "name": "Dou-color Men's 2-in-1 Racing Style Set",
    "price": 12036,
    "oldPrice": 14300,
    "category": "Clothing",
    "tag": "Hot",
    "image": "/images/4_1_3.PNG",
    "description": "Racing-style 2-in-1 men's set with graphic tee and matching shorts."
  },
  {
    "name": "Men's Trendy Multi Short Sleeve Shirt Sweatshirts",
    "price": 9940,
    "oldPrice": 17640,
    "category": "Clothing",
    "tag": "New",
    "image": "/images/4_1_4.PNG",
    "description": "Multi-print short sleeve sweatshirt with vibrant African-inspired graphic design."
  },

  // ───── BAGS ─────
  {
    "name": "NAOT NAOT Plush Love Handbag Shoulder Bag Crossbody",
    "price": 5666,
    "oldPrice": 9364,
    "category": "Bags",
    "tag": "Hot",
    "image": "/images/4_5.PNG",
    "description": "Cute pink plush heart-shaped crossbody handbag with gold chain strap."
  },
  {
    "name": "addigoes Trendy Square Handbag For Women",
    "price": 16797,
    "oldPrice": 26542,
    "category": "Bags",
    "tag": "New",
    "image": "/images/4_6.PNG",
    "description": "Trendy square mini handbag in classic black with structured silhouette for women."
  },
  {
    "name": "High Quality Padded Laptop Bag Laptop Pouch Case Sleeve",
    "price": 11899,
    "oldPrice": 13000,
    "category": "Bags",
    "tag": "Hot",
    "image": "/images/4_7.PNG",
    "description": "Padded laptop sleeve bag with shoulder strap for laptops up to 15.6 inches."
  },
  {
    "name": "GALUIN Waterproof Anti-theft Men's Backpack For Laptop",
    "price": 19152,
    "oldPrice": 23155,
    "category": "Bags",
    "tag": "New",
    "image": "/images/4_8.PNG",
    "description": "GALUIN waterproof anti-theft backpack with USB charging port for laptop use."
  },
  {
    "name": "Men Sling Bag Pack With Lock Waterproof Anti-Theft Chest Bag",
    "price": 13209,
    "oldPrice": 20569,
    "category": "Bags",
    "tag": "Hot",
    "image": "/images/4_1_1.PNG",
    "description": "Waterproof anti-theft sling chest bag with combination lock for men."
  },
  {
    "name": "Single Laptop Table",
    "price": 49000,
    "oldPrice": 35000,
    "category": "Bags",
    "tag": "New",
    "image": "/images/4_1_2_1.PNG",
    "description": "Portable adjustable laptop table for bed and sofa use with smooth rolling wheels."
  },
  {
    "name": "3 In 1 Multi Functional Backpack With USB Slot",
    "price": 17256,
    "oldPrice": 21600,
    "category": "Bags",
    "tag": "Hot",
    "image": "/images/4_1_3_1.PNG",
    "description": "3-in-1 backpack set with USB charging port, matching shoulder bag and wallet."
  },
  {
    "name": "3-in-1 Productivity Offer: Premium Felt Laptop Bag with Stands",
    "price": 32199,
    "oldPrice": 30000,
    "category": "Bags",
    "tag": "New",
    "image": "/images/4_1_4_1.PNG",
    "description": "Premium 3-in-1 felt laptop bag bundled with aluminium phone and laptop stands."
  },
  {
    "name": "High Quality Waterproof Backpack Laptop Bag with Padded Laptop",
    "price": 18319,
    "oldPrice": 20000,
    "category": "Bags",
    "tag": "Hot",
    "image": "/images/5_2_2.PNG",
    "description": "Waterproof padded laptop backpack with multiple compartments and sleek design."
  },

  // ───── GAMING ─────
  {
    "name": "GtyGo Wired Gaming Mouse 7 Functional Keys RGB Light",
    "price": 5495,
    "oldPrice": 10800,
    "category": "Gaming",
    "tag": "Hot",
    "image": "/images/4_9.PNG",
    "description": "7-button wired gaming mouse with RGB lighting and adjustable DPI settings."
  },
  {
    "name": "Mechanical Keyboard 61-Key RGB Backlit Blue Switch Wired Gaming",
    "price": 30800,
    "oldPrice": 27070,
    "category": "Gaming",
    "tag": "New",
    "image": "/images/4_9_2.PNG",
    "description": "Compact 61-key mechanical gaming keyboard with RGB backlight and blue switches."
  },
  {
    "name": "Wired Luminescent Gaming Mouse/Mice Computer",
    "price": 7652,
    "oldPrice": 11347,
    "category": "Gaming",
    "tag": "Hot",
    "image": "/images/4_9_3.PNG",
    "description": "High-precision wired gaming mouse with luminescent RGB design and ergonomic grip."
  },
  {
    "name": "WIRELESS RGB Gaming Mouse DPI Ergonomic Mice PC",
    "price": 17500,
    "oldPrice": 15900,
    "category": "Gaming",
    "tag": "New",
    "image": "/images/4_9_4.PNG",
    "description": "Wireless RGB ergonomic gaming mouse with adjustable DPI and silent click buttons."
  },
  {
    "name": "Best Controllers Game Pads USB For PC & Laptops Windows",
    "price": 13720,
    "oldPrice": 12999,
    "category": "Gaming",
    "tag": "Hot",
    "image": "/images/5.PNG",
    "description": "Dual USB gamepad controller compatible with PC and laptops running Windows."
  },
  {
    "name": "RGB Smart Wired Gaming Keyboard PC Laptop Gaming",
    "price": 35000,
    "oldPrice": 70000,
    "category": "Gaming",
    "tag": "New",
    "image": "/images/5_1.PNG",
    "description": "Full-size RGB wired gaming keyboard with smart lighting effects and multimedia keys."
  },
  {
    "name": "8pcs Mobile Gaming Finger Sleeves Thumb Gloves For Mobile",
    "price": 13986,
    "oldPrice": 20000,
    "category": "Gaming",
    "tag": "Hot",
    "image": "/images/5_2.PNG",
    "description": "8-piece anti-sweat mobile gaming finger sleeves for smooth touchscreen control."
  },
  {
    "name": "4 Pcs Gaming Finger Sleeves Game Gloves Thumb Finger Cots",
    "price": 4410,
    "oldPrice": 5000,
    "category": "Gaming",
    "tag": "New",
    "image": "/images/5_2_3.PNG",
    "description": "4-piece gaming finger cots for precise swipe and tap control on mobile games."
  },
  {
    "name": "Finger Thumb Mobile Gaming Sleeves",
    "price": 4900,
    "oldPrice": 5000,
    "category": "Gaming",
    "tag": "Hot",
    "image": "/images/5_2_4.PNG",
    "description": "1-pair finger thumb gaming sleeves with anti-sweat breathable fabric for mobile gaming."
  },
  {
    "name": "Bluetooth Wireless Receiver Transmitter Audio Adapter",
    "price": 12460,
    "oldPrice": 9000,
    "category": "Gaming",
    "tag": "New",
    "image": "/images/4_1_5.PNG",
    "description": "Bluetooth 5.3 wireless audio receiver and transmitter adapter for TVs and speakers."
  },
  {
    "name": "2IN1 Bluetooth Wireless Receiver Transmitter Audio Adapter",
    "price": 12460,
    "oldPrice": 15900,
    "category": "Gaming",
    "tag": "Hot",
    "image": "/images/4_1_6.PNG",
    "description": "2-in-1 Bluetooth audio adapter that works as both receiver and transmitter."
  },
  {
    "name": "Universal Wireless Bluetooth Receiver & Transmitter Audio",
    "price": 12180,
    "oldPrice": 12900,
    "category": "Gaming",
    "tag": "New",
    "image": "/images/4_1_7.PNG",
    "description": "Universal Bluetooth 5.3 audio transmitter and receiver for any wired audio device."
  },

  // ───── LIGHTERS ─────
  {
    "name": "Rechargeable Electric Arc Ignitor with USB Cord for Gas Stoves",
    "price": 7560,
    "oldPrice": 5400,
    "category": "Lighters",
    "tag": "Hot",
    "image": "/images/4_5_1.PNG",
    "description": "Rechargeable electric arc ignitor for gas stoves, candles, and BBQ grills."
  },
  {
    "name": "Rechargeable Electric Arc Ignitor Lifetime Warranty",
    "price": 5180,
    "oldPrice": 3700,
    "category": "Lighters",
    "tag": "New",
    "image": "/images/4_5_2.PNG",
    "description": "Long-reach electric arc lighter with lifetime warranty and USB recharging."
  },
  {
    "name": "Rechargeable Electric Arc Ignitor for Gas Stoves Colorful",
    "price": 5166,
    "oldPrice": 3690,
    "category": "Lighters",
    "tag": "Hot",
    "image": "/images/4_5_3.PNG",
    "description": "Colorful rechargeable electric arc ignitor with flexible neck for kitchen use."
  },
  {
    "name": "Rechargeable Electric Arc Ignitor for Gas Stoves Pink",
    "price": 6999,
    "oldPrice": 4999,
    "category": "Lighters",
    "tag": "New",
    "image": "/images/4_5_4.PNG",
    "description": "Pink rechargeable electric arc ignitor with long neck for safe and easy lighting."
  },

  // ───── WATCHES ─────
  {
    "name": "BINBOND Men's Watch Fashion Waterproof Sport Quartz Business",
    "price": 12317,
    "oldPrice": 11635,
    "category": "Watches",
    "tag": "Hot",
    "image": "/images/5_2_1.PNG",
    "description": "BINBOND men's waterproof sport quartz business watch with leather strap."
  },
  {
    "name": "WABOOC Men's Luxury Stainless Steel Quartz Watch Luminous",
    "price": 23769,
    "oldPrice": 31666,
    "category": "Watches",
    "tag": "New",
    "image": "/images/5_1_1.PNG",
    "description": "WABOOC luxury stainless steel quartz watch with luminous hands and date display."
  },
  {
    "name": "Glow-in-the-Dark Rhinestone LED Student Couple Quartz Watch",
    "price": 7966,
    "oldPrice": 9223,
    "category": "Watches",
    "tag": "Hot",
    "image": "/images/5_1_2.PNG",
    "description": "Glow-in-the-dark rhinestone LED quartz watch for students and couples."
  },
  {
    "name": "BINLIHUAN Men's Business Quartz Watch Luxury Skull Style",
    "price": 15435,
    "oldPrice": 36750,
    "category": "Watches",
    "tag": "New",
    "image": "/images/5_1_3.PNG",
    "description": "Punk-style luxury skull quartz watch with genuine leather strap for men."
  }
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    await Product.deleteMany({});
    console.log('Cleared existing products');
    await Product.insertMany(products);
    console.log(`Seeded ${products.length} products successfully`);
  } catch (err) {
    console.error('Seed error:', err);
  } finally {
    await mongoose.connection.close();
    console.log('Connection closed');
  }
};

seed();
