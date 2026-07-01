'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const Product = mongoose.models.Product || require('./models/Product');

const products = [
  // ───── EARBUDS ─────
  {
    "name": "Bolizma Bluetooth Sleep Earbuds with LED Display Charging Case",
    "price": 9799,
    "oldPrice": 13500,
    "category": "Earbuds",
    "tag": "Hot",
    "image": "/images/2.PNG",
    "description": "Bluetooth sleep earbuds with LED display charging case for all-night comfort."
  },
  {
    "name": "itel Earbuds Wireless Bluetooth 5.3 Headphones with Deep Bass",
    "price": 16800,
    "oldPrice": 20000,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/2_2.PNG",
    "description": "Wireless Bluetooth 5.3 earbuds with deep bass and clear call quality."
  },
  {
    "name": "Bolizma Sleeping Earbuds Bluetooth 5.4 Earphones TWS",
    "price": 15483,
    "oldPrice": 18144,
    "category": "Earbuds",
    "tag": "Hot",
    "image": "/images/2_3.PNG",
    "description": "Bluetooth 5.4 TWS sleeping earbuds with LED display and ultra-low profile fit."
  },
  {
    "name": "Bolizma Black Wireless Open Ear Earbuds with Bluetooth Air Clip",
    "price": 20000,
    "oldPrice": 25000,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/2_4.PNG",
    "description": "Open ear air clip Bluetooth earbuds with LED digital display charging case."
  },
  {
    "name": "Noise Hush ORAIMO Bluetooth Earphones Wireless Gaming",
    "price": 56448,
    "oldPrice": 40320,
    "category": "Earbuds",
    "tag": "Hot",
    "image": "/images/3_10.PNG",
    "description": "ORAIMO wireless gaming earphones with real noise cancellation technology."
  },
  {
    "name": "MingDe Era Wireless Earbuds with Noise Cancelling 30H",
    "price": 17287,
    "oldPrice": 20580,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/3_10_2.PNG",
    "description": "Wireless earbuds with ENC noise cancelling and 30H long battery life."
  },
  {
    "name": "Bolizma Wireless In-Ear Bluetooth Earbuds with Charging Case HiFi",
    "price": 11759,
    "oldPrice": 14406,
    "category": "Earbuds",
    "tag": "Hot",
    "image": "/images/3_10_3.PNG",
    "description": "HiFi wireless in-ear Bluetooth earbuds with LED display charging case."
  },
  {
    "name": "Bolizma Wireless Earbuds Bluetooth 5.4 Open Ear",
    "price": 16659,
    "oldPrice": 18018,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/3_10_4.PNG",
    "description": "Open ear Bluetooth 5.4 wireless earbuds with secure fit and clear sound."
  },
  {
    "name": "VANIR Open Ear Bluetooth Earbuds with Earhooks 48H",
    "price": 21168,
    "oldPrice": 30080,
    "category": "Earbuds",
    "tag": "Hot",
    "image": "/images/Capture_1.PNG",
    "description": "Open ear Bluetooth earbuds with secure earhooks and 48H total battery life."
  },
  {
    "name": "Bolizma Wireless Earbuds with Digital Display Bluetooth 5.3",
    "price": 15679,
    "oldPrice": 16464,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/Capture_2.PNG",
    "description": "Bluetooth 5.3 wireless earbuds with digital display and premium sound quality."
  },
  {
    "name": "Bolizma Sleeping Earbuds Bluetooth 5.4 Earphones TWS",
    "price": 15483,
    "oldPrice": 18144,
    "category": "Earbuds",
    "tag": "Hot",
    "image": "/images/Capture_3.PNG",
    "description": "TWS sleeping earbuds with Bluetooth 5.4 and ultra-comfortable low-profile design."
  },
  {
    "name": "Bolizma Wireless In-Ear Bluetooth Earbuds HiFi Charging Case",
    "price": 11759,
    "oldPrice": 14406,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/Capture_4.PNG",
    "description": "HiFi in-ear Bluetooth earbuds with fast-charge case and crystal-clear audio."
  },
  {
    "name": "Type-C Audio Adapter",
    "price": 10800,
    "oldPrice": 15000,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/2_5",
    "description": "Sound Quality Type-C Audio Adapter"
  },
  {
    "name": "P47M Cat Ear Bluetooth Headphones",
    "price": 11500,
    "oldPrice": 16006,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/2_6",
    "description": "Wireless P47M Cat Ear Bluetooth Headphone"
  },
  {
    "name": "P47M Wireless Bluetooth Headphones",
    "price": 14679,
    "oldPrice": 20406,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/2_7",
    "description": "Wireless Bluetooth Headphone with Sound Quality"
  },
  {
    "name": "M90 Pro Bluetooth Earbuds",
    "price": 15000,
    "oldPrice": 13000,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/2_8",
    "description": "Quality Pro Bluetooth Earbuds"
  },
   
  // ───── POWER BANKS ─────
  {
    "name": "Oraimo Traveler 15 Power Bank 20000mAh 15W Type-C Fast Charging",
    "price": 28421,
    "oldPrice": 38304,
    "category": "Power Banks",
    "tag": "Hot",
    "image": "/images/3.PNG",
    "description": "Oraimo 20000mAh power bank with 15W fast charging and Type-C input/output."
  },
  {
    "name": "SUNDASELF Portable Power Bank 20000mAh x2 Dual USB",
    "price": 31046,
    "oldPrice": 40320,
    "category": "Power Banks",
    "tag": "New",
    "image": "/images/3_2.PNG",
    "description": "2-pack SUNDASELF 20000mAh portable power banks with dual USB output."
  },
  {
    "name": "GDTINA 30000mAh 22.5W Super Fast Charging Power Bank",
    "price": 29204,
    "oldPrice": 44800,
    "category": "Power Banks",
    "tag": "Hot",
    "image": "/images/3_3.PNG",
    "description": "30000mAh power bank with 22.5W super fast charging and built-in cables."
  },
  {
    "name": "Philly 20000mAh Power Charging Bank Portable Charger Ultra Slim",
    "price": 14966,
    "oldPrice": 17198,
    "category": "Power Banks",
    "tag": "New",
    "image": "/images/3_4.PNG",
    "description": "Ultra slim Philly 20000mAh power bank with 4 ports including Type-C and micro USB."
  },
  {
    "name": "Philly 50000mAh 66W Super Fast Charge Power Bank",
    "price": 49980,
    "oldPrice": 45948,
    "category": "Power Banks",
    "tag": "Hot",
    "image": "/images/3_1.PNG",
    "description": "Philly PD-51 50000mAh power bank with 66W super fast charging and LED display."
  },
  {
    "name": "AVNEX 50000mAh Strong Durable Full Capacity Large Power Bank",
    "price": 57737,
    "oldPrice": 56256,
    "category": "Power Banks",
    "tag": "New",
    "image": "/images/3_2_1.PNG",
    "description": "AVNEX 50000mAh full capacity power bank with built-in cables and fast charging."
  },

  // ───── CLOTHING ─────
  {
    "name": "Jonnie Striped Black Baggy Track Pants",
    "price": 18900,
    "oldPrice": 26000,
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
    "oldPrice": 20890,
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
  {
    "name": "Dinosaur Graphic T-Shirt",
    "price": 8120,
    "oldPrice": 10440,
    "category": "Clothing",
    "tag": "New",
    "image": "/images/4_10.PNG",
    "description": "T-shirt with Dinosaur inspired from children's image."
  },
  {
    "name": "T-Rex Graphic T-Shirt",
    "price": 8000,
    "oldPrice": 9800,
    "category": "Clothing",
    "tag": "New",
    "image": "/images/4_11.PNG",
    "description": "T-shirt with Dinosaur inspired from children's image."
  },
  {
    "name": "Fashion House Graphic Tee",
    "price": 8000,
    "oldPrice": 9800,
    "category": "Clothing",
    "tag": "New",
    "image": "/images/4_12.PNG",
    "description": "Fashion model T-Shirt"
  },
  {
    "name": "Plain Unisex T-Shirt",
    "price": 12000,
    "oldPrice": 14740,
    "category": "Clothing",
    "tag": "New",
    "image": "/images/4_11.PNG",
    "description": "Unisex T-Shirt."
  },

  // ───── BAGS ─────
  {
    "name": "NAOT NAOT Plush Love Handbag Shoulder Bag Crossbody",
    "price": 7932,
    "oldPrice": 13110,
    "category": "Bags",
    "tag": "Hot",
    "image": "/images/4_5.PNG",
    "description": "Cute pink plush heart-shaped crossbody handbag with gold chain strap."
  },
  {
    "name": "addigoes Trendy Square Handbag For Women",
    "price": 23516,
    "oldPrice": 37159,
    "category": "Bags",
    "tag": "New",
    "image": "/images/4_6.PNG",
    "description": "Trendy square mini handbag in classic black with structured silhouette for women."
  },
  {
    "name": "High Quality Padded Laptop Bag Laptop Pouch Case Sleeve",
    "price": 16659,
    "oldPrice": 18200,
    "category": "Bags",
    "tag": "Hot",
    "image": "/images/4_7.PNG",
    "description": "Padded laptop sleeve bag with shoulder strap for laptops up to 15.6 inches."
  },
  {
    "name": "GALUIN Waterproof Anti-theft Men's Backpack For Laptop",
    "price": 26813,
    "oldPrice": 32417,
    "category": "Bags",
    "tag": "New",
    "image": "/images/4_8.PNG",
    "description": "GALUIN waterproof anti-theft backpack with USB charging port for laptop use."
  },
  {
    "name": "Men Sling Bag Pack With Lock Waterproof Anti-Theft Chest Bag",
    "price": 18493,
    "oldPrice": 28797,
    "category": "Bags",
    "tag": "Hot",
    "image": "/images/4_1_1.PNG",
    "description": "Waterproof anti-theft sling chest bag with combination lock for men."
  },
  {
    "name": "Single Laptop Table",
    "price": 68600,
    "oldPrice": 49000,
    "category": "Bags",
    "tag": "New",
    "image": "/images/4_1_2_1.PNG",
    "description": "Portable adjustable laptop table for bed and sofa use with smooth rolling wheels."
  },
  {
    "name": "3 In 1 Multi Functional Backpack With USB Slot",
    "price": 24158,
    "oldPrice": 30240,
    "category": "Bags",
    "tag": "Hot",
    "image": "/images/4_1_3_1.PNG",
    "description": "3-in-1 backpack set with USB charging port, matching shoulder bag and wallet."
  },
  {
    "name": "3-in-1 Productivity Offer: Premium Felt Laptop Bag with Stands",
    "price": 45079,
    "oldPrice": 42000,
    "category": "Bags",
    "tag": "New",
    "image": "/images/4_1_4_1.PNG",
    "description": "Premium 3-in-1 felt laptop bag bundled with aluminium phone and laptop stands."
  },
  {
    "name": "High Quality Waterproof Backpack Laptop Bag with Padded Laptop",
    "price": 25647,
    "oldPrice": 28000,
    "category": "Bags",
    "tag": "Hot",
    "image": "/images/5_2_2.PNG",
    "description": "Waterproof padded laptop backpack with multiple compartments and sleek design."
  },

  // ───── GAMING ─────
  {
    "name": "GtyGo Wired Gaming Mouse 7 Functional Keys RGB Light",
    "price": 7693,
    "oldPrice": 15120,
    "category": "Gaming",
    "tag": "Hot",
    "image": "/images/4_9.PNG",
    "description": "7-button wired gaming mouse with RGB lighting and adjustable DPI settings."
  },
  {
    "name": "Mechanical Keyboard 61-Key RGB Backlit Blue Switch Wired Gaming",
    "price": 43120,
    "oldPrice": 37898,
    "category": "Gaming",
    "tag": "New",
    "image": "/images/4_9_2.PNG",
    "description": "Compact 61-key mechanical gaming keyboard with RGB backlight and blue switches."
  },
  {
    "name": "Wired Luminescent Gaming Mouse/Mice Computer",
    "price": 10713,
    "oldPrice": 15886,
    "category": "Gaming",
    "tag": "Hot",
    "image": "/images/4_9_3.PNG",
    "description": "High-precision wired gaming mouse with luminescent RGB design and ergonomic grip."
  },
  {
    "name": "WIRELESS RGB Gaming Mouse DPI Ergonomic Mice PC",
    "price": 24500,
    "oldPrice": 22260,
    "category": "Gaming",
    "tag": "New",
    "image": "/images/4_9_4.PNG",
    "description": "Wireless RGB ergonomic gaming mouse with adjustable DPI and silent click buttons."
  },
  {
    "name": "Best Controllers Game Pads USB For PC & Laptops Windows",
    "price": 19208,
    "oldPrice": 18199,
    "category": "Gaming",
    "tag": "Hot",
    "image": "/images/5.PNG",
    "description": "Dual USB gamepad controller compatible with PC and laptops running Windows."
  },
  {
    "name": "RGB Smart Wired Gaming Keyboard PC Laptop Gaming",
    "price": 49000,
    "oldPrice": 98000,
    "category": "Gaming",
    "tag": "New",
    "image": "/images/5_1.PNG",
    "description": "Full-size RGB wired gaming keyboard with smart lighting effects and multimedia keys."
  },
  {
    "name": "8pcs Mobile Gaming Finger Sleeves Thumb Gloves For Mobile",
    "price": 19580,
    "oldPrice": 28000,
    "category": "Gaming",
    "tag": "Hot",
    "image": "/images/5_2.PNG",
    "description": "8-piece anti-sweat mobile gaming finger sleeves for smooth touchscreen control."
  },
  {
    "name": "4 Pcs Gaming Finger Sleeves Game Gloves Thumb Finger Cots",
    "price": 6174,
    "oldPrice": 7000,
    "category": "Gaming",
    "tag": "New",
    "image": "/images/5_2_3.PNG",
    "description": "4-piece gaming finger cots for precise swipe and tap control on mobile games."
  },
  {
    "name": "Finger Thumb Mobile Gaming Sleeves",
    "price": 6860,
    "oldPrice": 7000,
    "category": "Gaming",
    "tag": "Hot",
    "image": "/images/5_2_4.PNG",
    "description": "1-pair finger thumb gaming sleeves with anti-sweat breathable fabric for mobile gaming."
  },
  {
    "name": "Bluetooth Wireless Receiver Transmitter Audio Adapter",
    "price": 17444,
    "oldPrice": 12600,
    "category": "Gaming",
    "tag": "New",
    "image": "/images/4_1_5.PNG",
    "description": "Bluetooth 5.3 wireless audio receiver and transmitter adapter for TVs and speakers."
  },
  {
    "name": "2IN1 Bluetooth Wireless Receiver Transmitter Audio Adapter",
    "price": 17444,
    "oldPrice": 22260,
    "category": "Gaming",
    "tag": "Hot",
    "image": "/images/4_1_6.PNG",
    "description": "2-in-1 Bluetooth audio adapter that works as both receiver and transmitter."
  },
  {
    "name": "Universal Wireless Bluetooth Receiver & Transmitter Audio",
    "price": 17052,
    "oldPrice": 18060,
    "category": "Gaming",
    "tag": "New",
    "image": "/images/4_1_7.PNG",
    "description": "Universal Bluetooth 5.3 audio transmitter and receiver for any wired audio device."
  },

  // ───── LIGHTERS ─────
  {
    "name": "Rechargeable Electric Arc Ignitor with USB Cord for Gas Stoves",
    "price": 10584,
    "oldPrice": 7560,
    "category": "Lighters",
    "tag": "Hot",
    "image": "/images/4_5_1.PNG",
    "description": "Rechargeable electric arc ignitor for gas stoves, candles, and BBQ grills."
  },
  {
    "name": "Rechargeable Electric Arc Ignitor Lifetime Warranty",
    "price": 7252,
    "oldPrice": 5180,
    "category": "Lighters",
    "tag": "New",
    "image": "/images/4_5_2.PNG",
    "description": "Long-reach electric arc lighter with lifetime warranty and USB recharging."
  },
  {
    "name": "Rechargeable Electric Arc Ignitor for Gas Stoves Colorful",
    "price": 7232,
    "oldPrice": 5166,
    "category": "Lighters",
    "tag": "Hot",
    "image": "/images/4_5_3.PNG",
    "description": "Colorful rechargeable electric arc ignitor with flexible neck for kitchen use."
  },
  {
    "name": "Rechargeable Electric Arc Ignitor for Gas Stoves Pink",
    "price": 9799,
    "oldPrice": 6999,
    "category": "Lighters",
    "tag": "New",
    "image": "/images/4_5_4.PNG",
    "description": "Pink rechargeable electric arc ignitor with long neck for safe and easy lighting."
  },

  // ───── WATCHES ─────
  {
    "name": "BINBOND Men's Watch Fashion Waterproof Sport Quartz Business",
    "price": 17244,
    "oldPrice": 16289,
    "category": "Watches",
    "tag": "Hot",
    "image": "/images/5_2_1.PNG",
    "description": "BINBOND men's waterproof sport quartz business watch with leather strap."
  },
  {
    "name": "WABOOC Men's Luxury Stainless Steel Quartz Watch Luminous",
    "price": 33277,
    "oldPrice": 44332,
    "category": "Watches",
    "tag": "New",
    "image": "/images/5_1_1.PNG",
    "description": "WABOOC luxury stainless steel quartz watch with luminous hands and date display."
  },
  {
    "name": "Glow-in-the-Dark Rhinestone LED Student Couple Quartz Watch",
    "price": 11152,
    "oldPrice": 12912,
    "category": "Watches",
    "tag": "Hot",
    "image": "/images/5_1_2.PNG",
    "description": "Glow-in-the-dark rhinestone LED quartz watch for students and couples."
  },
  {
    "name": "BINLIHUAN Men's Business Quartz Watch Luxury Skull Style",
    "price": 21609,
    "oldPrice": 51450,
    "category": "Watches",
    "tag": "New",
    "image": "/images/5_1_3.PNG",
    "description": "Punk-style luxury skull quartz watch with genuine leather strap for men."
  },

  // ───── SMARTWATCHES ─────
  {
    "name": "Smart Sports Watch with Heart Rate Monitor",
    "price": 13000,
    "oldPrice": 8125,
    "category": "Smartwatches",
    "tag": "Hot",
    "image": "/images/8_4.PNG",
    "description": "Advanced smartwatch with heart rate monitoring, fitness tracking, and blood pressure sensor."
  },
  {
    "name": "Premium Smartwatch Case Protector - Rose Gold",
    "price": 5600,
    "oldPrice": 3500,
    "category": "Smartwatches",
    "tag": "New",
    "image": "/images/8_5.PNG",
    "description": "Durable protective case for smartwatch in elegant rose gold finish with screen guard."
  },
  {
    "name": "Premium Smartwatch Case Protector - Silver",
    "price": 5600,
    "oldPrice": 3500,
    "category": "Smartwatches",
    "tag": "Hot",
    "image": "/images/8_6.PNG",
    "description": "Premium protective case for smartwatch in silver with tempered glass screen protector."
  },
  {
    "name": "Fitness Smartwatch with LED Display",
    "price": 12800,
    "oldPrice": 8000,
    "category": "Smartwatches",
    "tag": "New",
    "image": "/images/8_7.PNG",
    "description": "Feature-rich fitness smartwatch with LED display, multi-sport modes, and health tracking."
  },
  {
    "name": "Rugged Smartwatch with Interchangeable Band",
    "price": 16000,
    "oldPrice": 10000,
    "category": "Smartwatches",
    "tag": "Hot",
    "image": "/images/8_8.PNG",
    "description": "Durable rugged smartwatch with interchangeable yellow band and outdoor features."
  },
  {
    "name": "Compact Smartwatch with Health Monitoring",
    "price": 11200,
    "oldPrice": 7000,
    "category": "Smartwatches",
    "tag": "New",
    "image": "/images/8_9.PNG",
    "description": "Lightweight compact smartwatch with comprehensive health monitoring and fitness tracking."
  },
  {
    "name": "Smartwatch with Stylish Pink Band",
    "price": 9920,
    "oldPrice": 6200,
    "category": "Smartwatches",
    "tag": "Hot",
    "image": "/images/8_10.PNG",
    "description": "Elegant smartwatch with pink band, -35% discount on health monitoring features."
  },
  {
    "name": "Smartwatch with Gray Band and LED Display",
    "price": 10560,
    "oldPrice": 6600,
    "category": "Smartwatches",
    "tag": "New",
    "image": "/images/8_11.PNG",
    "description": "Modern smartwatch with gray band, LED display, and comprehensive fitness tracking features."
  },

  // ───── 5G ROUTERS & BOOSTERS ─────
  {
    "name": "5G WiFi Router with High Speed Connectivity",
    "price": 35200,
    "oldPrice": 22000,
    "category": "Routers",
    "tag": "Hot",
    "image": "/images/9.PNG",
    "description": "Advanced 5G WiFi router for fast and stable internet connectivity throughout your space."
  },
  {
    "name": "MTN 5G Router - Premium Model",
    "price": 17920,
    "oldPrice": 11200,
    "category": "Routers",
    "tag": "New",
    "image": "/images/9_1.PNG",
    "description": "MTN official 5G router with 100gb data bundle and premium connectivity features."
  },
  {
    "name": "MTN 5G Booster - Enhanced Coverage",
    "price": 15680,
    "oldPrice": 9800,
    "category": "Routers",
    "tag": "Hot",
    "image": "/images/9_2.PNG",
    "description": "MTN 5G signal booster with -12% discount for extended network coverage."
  },
  {
    "name": "MTN 5G Signal Enhancer",
    "price": 14720,
    "oldPrice": 9200,
    "category": "Routers",
    "tag": "New",
    "image": "/images/9_3.PNG",
    "description": "Compact MTN 5G signal enhancer with -5% discount for optimal network performance."
  },

  // ───── PC GAMES ─────
  {
    "name": "BLUR Racing PC Game",
    "price": 14400,
    "oldPrice": 9000,
    "category": "PC Games",
    "tag": "Hot",
    "image": "/images/10_1.PNG",
    "description": "Intense arcade racing game with explosive power-ups and wheel-to-wheel combat."
  },
  {
    "name": "Call of Duty: Modern Warfare PC Game",
    "price": 14400,
    "oldPrice": 9000,
    "category": "PC Games",
    "tag": "New",
    "image": "/images/10_2.PNG",
    "description": "Modern Warfare edition with immersive campaign and multiplayer action on PC."
  },
  {
    "name": "Call of Duty: Day Zero Edition PC Game",
    "price": 14400,
    "oldPrice": 9000,
    "category": "PC Games",
    "tag": "Hot",
    "image": "/images/10_3.PNG",
    "description": "Exclusive Day Zero Edition of Call of Duty with premium early access content."
  },
  {
    "name": "Call of Duty: Black Ops PC Game",
    "price": 14400,
    "oldPrice": 9000,
    "category": "PC Games",
    "tag": "New",
    "image": "/images/10_4.PNG",
    "description": "Black Ops series with intense action, rated 18+ for mature audiences on PC."
  },
  {
    "name": "PES 2023 Football Life PC Game",
    "price": 19200,
    "oldPrice": 12000,
    "category": "PC Games",
    "tag": "Hot",
    "image": "/images/10_5.PNG",
    "description": "Pro Evolution Soccer 2023 with updated rosters and realistic football gameplay."
  },
  {
    "name": "GTA V - Grand Theft Auto PC Game",
    "price": 23712,
    "oldPrice": 14820,
    "category": "PC Games",
    "tag": "Hot",
    "image": "/images/10.PNG",
    "description": "Grand Theft Auto V - Epic open-world action game for PC with unmatched gameplay."
  },

  // ───── BEAUTY & COSMETICS ─────
  {
    "name": "Premium Cosmetics Storage Organizer 4-Tier",
    "price": 19200,
    "oldPrice": 12000,
    "category": "Beauty",
    "tag": "Hot",
    "image": "/images/11.PNG",
    "description": "Multi-compartment cosmetics organizer with 4 tiers, -50% discount on storage solutions."
  },
  {
    "name": "Hair Treatment Mask - Orange Label",
    "price": 11840,
    "oldPrice": 7400,
    "category": "Beauty",
    "tag": "New",
    "image": "/images/11_1.PNG",
    "description": "Professional hair treatment mask with deep conditioning formula, -25% discount available."
  },
  {
    "name": "Cosmetics Storage Box with Drawer",
    "price": 19200,
    "oldPrice": 12000,
    "category": "Beauty",
    "tag": "Hot",
    "image": "/images/11_2.PNG",
    "description": "Elegant white cosmetics storage organizer with pull-out drawer, -50% off selected items."
  },
  {
    "name": "Hair Growth Serum Premium Formula",
    "price": 9120,
    "oldPrice": 5700,
    "category": "Beauty",
    "tag": "New",
    "image": "/images/11_3.PNG",
    "description": "Advanced hair growth serum with natural ingredients for stronger, healthier hair."
  },
  {
    "name": "False Eyelashes Set - 10 Pairs",
    "price": 6480,
    "oldPrice": 4050,
    "category": "Beauty",
    "tag": "Hot",
    "image": "/images/11_4.PNG",
    "description": "Professional false eyelashes bundle with 10 pairs, -8% discount on bulk purchases."
  },
  {
    "name": "24K Gold Face Cream - GUAN JING",
    "price": 11200,
    "oldPrice": 7000,
    "category": "Beauty",
    "tag": "New",
    "image": "/images/11_6.PNG",
    "description": "Luxury 24K gold infused face cream for radiant skin, -31% discount this month."
  },
  {
    "name": "Premium Face Moisturizer Cream",
    "price": 8960,
    "oldPrice": 5600,
    "category": "Beauty",
    "tag": "Hot",
    "image": "/images/11_5.PNG",
    "description": "Hydrating facial cream with natural moisturizers for smooth, glowing skin."
  },
  {
    "name": "Portable Cosmetics Travel Bag - Blue Pattern",
    "price": 11520,
    "oldPrice": 7200,
    "category": "Beauty",
    "tag": "New",
    "image": "/images/11_7.PNG",
    "description": "Stylish blue patterned travel cosmetics bag with multiple compartments for organized beauty storage."
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
