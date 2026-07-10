'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const Product = mongoose.models.Product || require('./models/Product');

const products = [
  // ───── EARBUDS ─────
  {
    "name": "Bolizma Bluetooth Sleep Earbuds with LED Display Charging Case",
    "price": 6000,
    "oldPrice": 8548,
    "category": "Earbuds",
    "tag": "Hot",
    "image": "/images/2.PNG",
    "description": "Bluetooth sleep earbuds with LED display charging case for all-night comfort."
  },
  {
    "name": "itel Earbuds Wireless Bluetooth 5.3 Headphones with Deep Bass",
    "price": 14500,
    "oldPrice": 20000,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/2_2.PNG",
    "description": "Wireless Bluetooth 5.3 earbuds with deep bass and clear call quality."
  },
  {
    "name": "Bolizma Sleeping Earbuds Bluetooth 5.4 Earphones TWS",
    "price": 9290,
    "oldPrice": 10886,
    "category": "Earbuds",
    "tag": "Hot",
    "image": "/images/2_3.PNG",
    "description": "Bluetooth 5.4 TWS sleeping earbuds with LED display and ultra-low profile fit."
  },
  {
    "name": "Bolizma Black Wireless Open Ear Earbuds with Bluetooth Air Clip",
    "price": 11400,
    "oldPrice": 12348,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/2_4.PNG",
    "description": "Open ear air clip Bluetooth earbuds with LED digital display charging case."
  },
  {
    "name": "Noise Hush ORAIMO Bluetooth Earphones Wireless Gaming",
    "price": 33869,
    "oldPrice": 36000,
    "category": "Earbuds",
    "tag": "Hot",
    "image": "/images/3_10.PNG",
    "description": "ORAIMO wireless gaming earphones with real noise cancellation technology."
  },
  {
    "name": "MingDe Era Wireless Earbuds with Noise Cancelling 30H",
    "price": 10372,
    "oldPrice": 12348,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/3_10_2.PNG",
    "description": "Wireless earbuds with ENC noise cancelling and 30H long battery life."
  },
  {
    "name": "Bolizma Wireless In-Ear Bluetooth Earbuds with Charging Case HiFi",
    "price": 7055,
    "oldPrice": 8644,
    "category": "Earbuds",
    "tag": "Hot",
    "image": "/images/3_10_3.PNG",
    "description": "HiFi wireless in-ear Bluetooth earbuds with LED display charging case."
  },
  {
    "name": "Bolizma Wireless Earbuds Bluetooth 5.4 Open Ear",
    "price": 9995,
    "oldPrice": 10811,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/3_10_4.PNG",
    "description": "Open ear Bluetooth 5.4 wireless earbuds with secure fit and clear sound."
  },
  {
    "name": "VANIR Open Ear Bluetooth Earbuds with Earhooks 48H",
    "price": 12701,
    "oldPrice": 20480,
    "category": "Earbuds",
    "tag": "Hot",
    "image": "/images/Capture_1.PNG",
    "description": "Open ear Bluetooth earbuds with secure earhooks and 48H total battery life."
  },
  {
    "name": "Bolizma Wireless Earbuds with Digital Display Bluetooth 5.3",
    "price": 9407,
    "oldPrice": 9878,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/Capture_2.PNG",
    "description": "Bluetooth 5.3 wireless earbuds with digital display and premium sound quality."
  },
  {
    "name": "Bolizma Wireless In-Ear Bluetooth Earbuds HiFi Charging Case",
    "price": 7055,
    "oldPrice": 8644,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/Capture_4.PNG",
    "description": "HiFi in-ear Bluetooth earbuds with fast-charge case and crystal-clear audio."
  },
  {
    "name": "Type-C Audio Adapter",
    "price": 6480,
    "oldPrice": 9000,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/2_5.PNG",
    "description": "Sound Quality Type-C Audio Adapter"
  },
  {
    "name": "P47M Cat Ear Bluetooth Headphones",
    "price": 6900,
    "oldPrice": 9604,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/2_6.PNG",
    "description": "Wireless P47M Cat Ear Bluetooth Headphone"
  },
  {
    "name": "P47M Wireless Bluetooth Headphones",
    "price": 8807,
    "oldPrice": 12244,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/2_7.PNG",
    "description": "Wireless Bluetooth Headphone with Sound Quality"
  },
  {
    "name": "M90 Pro Bluetooth Earbuds",
    "price": 9000,
    "oldPrice": 7800,
    "category": "Earbuds",
    "tag": "New",
    "image": "/images/2_8.PNG",
    "description": "Quality Pro Bluetooth Earbuds"
  },
  // ───── POWER BANKS ─────
  {
    "name": "Oraimo Traveler 15 Power Bank 20000mAh 15W Type-C Fast Charging",
    "price": 17053,
    "oldPrice": 22982,
    "category": "Power Banks",
    "tag": "Hot",
    "image": "/images/3.PNG",
    "description": "Oraimo 20000mAh power bank with 15W fast charging and Type-C input/output."
  },
  {
    "name": "SUNDASELF Portable Power Bank 20000mAh x2 Dual USB",
    "price": 18628,
    "oldPrice": 24192,
    "category": "Power Banks",
    "tag": "New",
    "image": "/images/3_2.PNG",
    "description": "2-pack SUNDASELF 20000mAh portable power banks with dual USB output."
  },
  {
    "name": "GDTINA 30000mAh 22.5W Super Fast Charging Power Bank",
    "price": 17522,
    "oldPrice": 26880,
    "category": "Power Banks",
    "tag": "Hot",
    "image": "/images/3_3.PNG",
    "description": "30000mAh power bank with 22.5W super fast charging and built-in cables."
  },
  {
    "name": "Philly 20000mAh Power Charging Bank Portable Charger Ultra Slim",
    "price": 8980,
    "oldPrice": 10319,
    "category": "Power Banks",
    "tag": "New",
    "image": "/images/3_4.PNG",
    "description": "Ultra slim Philly 20000mAh power bank with 4 ports including Type-C and micro USB."
  },
  {
    "name": "Philly 50000mAh 66W Super Fast Charge Power Bank",
    "price": 29988,
    "oldPrice": 27569,
    "category": "Power Banks",
    "tag": "Hot",
    "image": "/images/3_1.PNG",
    "description": "Philly PD-51 50000mAh power bank with 66W super fast charging and LED display."
  },
  {
    "name": "AVNEX 50000mAh Strong Durable Full Capacity Large Power Bank",
    "price": 34642,
    "oldPrice": 33754,
    "category": "Power Banks",
    "tag": "New",
    "image": "/images/3_2_1.PNG",
    "description": "AVNEX 50000mAh full capacity power bank with built-in cables and fast charging."
  },
  {
    "name": "Baseus Lipo 20000mAh Power Bank 3A Fast Charging",
    "price": 21000,
    "oldPrice": 29400,
    "category": "Power Banks",
    "tag": "New",
    "image": "/images/3_5.PNG",
    "description": "Baseus Lipo 20000mAh power bank with 3A fast charging, 3 outputs and 1 input port, travel-friendly for iOS and Android."
  },
  {
    "name": "Oraimo Anifast Power Bank",
    "price": 21500,
    "oldPrice": 30100,
    "category": "Power Banks",
    "tag": "Hot",
    "image": "/images/3_6.PNG",
    "description": "Oraimo Anifast power bank delivering reliable fast charging in a sleek, compact everyday-carry design."
  },
  {
    "name": "Romoss Power Bank",
    "price": 19469,
    "oldPrice": 27257,
    "category": "Power Banks",
    "tag": "New",
    "image": "/images/3_7.PNG",
    "description": "Romoss high-capacity power bank offering dependable backup power for phones and small devices."
  },
  {
    "name": "Canyon Power Bank",
    "price": 25000,
    "oldPrice": 35000,
    "category": "Power Banks",
    "tag": "Hot",
    "image": "/images/3_8.PNG",
    "description": "Canyon portable power bank with a durable white finish, ideal for daily commutes and travel."
  },
  // ───── CLOTHING ─────
  {
    "name": "Jonnie Striped Black Baggy Track Pants",
    "price": 15876,
    "oldPrice": 33600,
    "category": "Clothing",
    "tag": "Hot",
    "image": "/images/4.PNG",
    "description": "Stylish black baggy track pants with contrast stripe design for streetwear looks."
  },
  {
    "name": "Track Striped Baggy Trouser Black",
    "price": 12700,
    "oldPrice": 25200,
    "category": "Clothing",
    "tag": "New",
    "image": "/images/4_2.PNG",
    "description": "Baggy black track trousers with bold stripe detailing for casual and street style."
  },
  {
    "name": "UNLIMITED Baggy Track Joggers",
    "price": 12172,
    "oldPrice": 8694,
    "category": "Clothing",
    "tag": "Hot",
    "image": "/images/4_3.PNG",
    "description": "Unlimited edition baggy track joggers with wide-leg fit and comfortable waistband."
  },
  {
    "name": "Asake Round Neck T-Shirt",
    "price": 10055,
    "oldPrice": 16800,
    "category": "Clothing",
    "tag": "New",
    "image": "/images/4_4.PNG",
    "description": "Trendy round neck T-shirt with relaxed fit for everyday casual wear."
  },
  {
    "name": "GALUIN Men's Casual Short-Sleeve Set",
    "price": 13547,
    "oldPrice": 20563,
    "category": "Clothing",
    "tag": "Hot",
    "image": "/images/4_1.PNG",
    "description": "Men's casual short-sleeve sports set with matching top and shorts."
  },
  {
    "name": "Berrykey Men's Pull Over Short Sleeve Polo Vintage Striped",
    "price": 19016,
    "oldPrice": 27166,
    "category": "Clothing",
    "tag": "New",
    "image": "/images/4_1_2.PNG",
    "description": "Vintage striped polo shirt with classic pull-over design and bold color blocking."
  },
  {
    "name": "Dou-color Men's 2-in-1 Racing Style Set",
    "price": 10110,
    "oldPrice": 12012,
    "category": "Clothing",
    "tag": "Hot",
    "image": "/images/4_1_3.PNG",
    "description": "Racing-style 2-in-1 men's set with graphic tee and matching shorts."
  },
  {
    "name": "Men's Trendy Multi Short Sleeve Shirt Sweatshirts",
    "price": 8350,
    "oldPrice": 14818,
    "category": "Clothing",
    "tag": "New",
    "image": "/images/4_1_4.PNG",
    "description": "Multi-print short sleeve sweatshirt with vibrant African-inspired graphic design."
  },
  {
    "name": "Dinosaur Graphic T-Shirt",
    "price": 4872,
    "oldPrice": 6264,
    "category": "Clothing",
    "tag": "New",
    "image": "/images/4_10.PNG",
    "description": "T-shirt with Dinosaur inspired from children's image."
  },
  {
    "name": "T-Rex Graphic T-Shirt",
    "price": 4800,
    "oldPrice": 5880,
    "category": "Clothing",
    "tag": "New",
    "image": "/images/4_11.PNG",
    "description": "T-shirt with Dinosaur inspired from children's image."
  },
  {
    "name": "Fashion House Graphic Tee",
    "price": 4800,
    "oldPrice": 5880,
    "category": "Clothing",
    "tag": "New",
    "image": "/images/4_12.PNG",
    "description": "Fashion model T-Shirt"
  },
  {
    "name": "Plain Unisex T-Shirt",
    "price": 7200,
    "oldPrice": 8844,
    "category": "Clothing",
    "tag": "New",
    "image": "/images/4_11.PNG",
    "description": "Unisex T-Shirt."
  },
  // ───── BAGS ─────
  {
    "name": "NAOT NAOT Plush Love Handbag Shoulder Bag Crossbody",
    "price": 4759,
    "oldPrice": 7866,
    "category": "Bags",
    "tag": "Hot",
    "image": "/images/4_5.PNG",
    "description": "Cute pink plush heart-shaped crossbody handbag with gold chain strap."
  },
  {
    "name": "addigoes Trendy Square Handbag For Women",
    "price": 14110,
    "oldPrice": 22295,
    "category": "Bags",
    "tag": "New",
    "image": "/images/4_6.PNG",
    "description": "Trendy square mini handbag in classic black with structured silhouette for women."
  },
  {
    "name": "High Quality Padded Laptop Bag Laptop Pouch Case Sleeve",
    "price": 9995,
    "oldPrice": 10920,
    "category": "Bags",
    "tag": "Hot",
    "image": "/images/4_7.PNG",
    "description": "Padded laptop sleeve bag with shoulder strap for laptops up to 15.6 inches."
  },
  {
    "name": "GALUIN Waterproof Anti-theft Men's Backpack For Laptop",
    "price": 16088,
    "oldPrice": 19450,
    "category": "Bags",
    "tag": "New",
    "image": "/images/4_8.PNG",
    "description": "GALUIN waterproof anti-theft backpack with USB charging port for laptop use."
  },
  {
    "name": "Men Sling Bag Pack With Lock Waterproof Anti-Theft Chest Bag",
    "price": 11096,
    "oldPrice": 17278,
    "category": "Bags",
    "tag": "Hot",
    "image": "/images/4_1_1.PNG",
    "description": "Waterproof anti-theft sling chest bag with combination lock for men."
  },
  {
    "name": "Single Laptop Table",
    "price": 41160,
    "oldPrice": 29400,
    "category": "Bags",
    "tag": "New",
    "image": "/images/4_1_2_1.PNG",
    "description": "Portable adjustable laptop table for bed and sofa use with smooth rolling wheels."
  },
  {
    "name": "3 In 1 Multi Functional Backpack With USB Slot",
    "price": 14495,
    "oldPrice": 18144,
    "category": "Bags",
    "tag": "Hot",
    "image": "/images/4_1_3_1.PNG",
    "description": "3-in-1 backpack set with USB charging port, matching shoulder bag and wallet."
  },
  {
    "name": "3-in-1 Productivity Offer: Premium Felt Laptop Bag with Stands",
    "price": 27047,
    "oldPrice": 25200,
    "category": "Bags",
    "tag": "New",
    "image": "/images/4_1_4_1.PNG",
    "description": "Premium 3-in-1 felt laptop bag bundled with aluminium phone and laptop stands."
  },
  {
    "name": "High Quality Waterproof Backpack Laptop Bag with Padded Laptop",
    "price": 15388,
    "oldPrice": 16800,
    "category": "Bags",
    "tag": "Hot",
    "image": "/images/5_2_2.PNG",
    "description": "Waterproof padded laptop backpack with multiple compartments and sleek design."
  },
  // ───── GAMING ─────
  {
    "name": "GtyGo Wired Gaming Mouse 7 Functional Keys RGB Light",
    "price": 4616,
    "oldPrice": 9072,
    "category": "Gaming",
    "tag": "Hot",
    "image": "/images/4_9.PNG",
    "description": "7-button wired gaming mouse with RGB lighting and adjustable DPI settings."
  },
  {
    "name": "Mechanical Keyboard 61-Key RGB Backlit Blue Switch Wired Gaming",
    "price": 25872,
    "oldPrice": 22739,
    "category": "Gaming",
    "tag": "New",
    "image": "/images/4_9_2.PNG",
    "description": "Compact 61-key mechanical gaming keyboard with RGB backlight and blue switches."
  },
  {
    "name": "Wired Luminescent Gaming Mouse/Mice Computer",
    "price": 6428,
    "oldPrice": 9532,
    "category": "Gaming",
    "tag": "Hot",
    "image": "/images/4_9_3.PNG",
    "description": "High-precision wired gaming mouse with luminescent RGB design and ergonomic grip."
  },
  {
    "name": "WIRELESS RGB Gaming Mouse DPI Ergonomic Mice PC",
    "price": 14700,
    "oldPrice": 13356,
    "category": "Gaming",
    "tag": "New",
    "image": "/images/4_9_4.PNG",
    "description": "Wireless RGB ergonomic gaming mouse with adjustable DPI and silent click buttons."
  },
  {
    "name": "Best Controllers Game Pads USB For PC & Laptops Windows",
    "price": 11525,
    "oldPrice": 10919,
    "category": "Gaming",
    "tag": "Hot",
    "image": "/images/5.PNG",
    "description": "Dual USB gamepad controller compatible with PC and laptops running Windows."
  },
  {
    "name": "RGB Smart Wired Gaming Keyboard PC Laptop Gaming",
    "price": 29400,
    "oldPrice": 58800,
    "category": "Gaming",
    "tag": "New",
    "image": "/images/5_1.PNG",
    "description": "Full-size RGB wired gaming keyboard with smart lighting effects and multimedia keys."
  },
  {
    "name": "8pcs Mobile Gaming Finger Sleeves Thumb Gloves For Mobile",
    "price": 11748,
    "oldPrice": 16800,
    "category": "Gaming",
    "tag": "Hot",
    "image": "/images/5_2.PNG",
    "description": "8-piece anti-sweat mobile gaming finger sleeves for smooth touchscreen control."
  },
  {
    "name": "4 Pcs Gaming Finger Sleeves Game Gloves Thumb Finger Cots",
    "price": 3704,
    "oldPrice": 4200,
    "category": "Gaming",
    "tag": "New",
    "image": "/images/5_2_3.PNG",
    "description": "4-piece gaming finger cots for precise swipe and tap control on mobile games."
  },
  {
    "name": "Finger Thumb Mobile Gaming Sleeves",
    "price": 4116,
    "oldPrice": 4200,
    "category": "Gaming",
    "tag": "Hot",
    "image": "/images/5_2_4.PNG",
    "description": "1-pair finger thumb gaming sleeves with anti-sweat breathable fabric for mobile gaming."
  },
  {
    "name": "Bluetooth Wireless Receiver Transmitter Audio Adapter",
    "price": 10466,
    "oldPrice": 7560,
    "category": "Gaming",
    "tag": "New",
    "image": "/images/4_1_5.PNG",
    "description": "Bluetooth 5.3 wireless audio receiver and transmitter adapter for TVs and speakers."
  },
  {
    "name": "2IN1 Bluetooth Wireless Receiver Transmitter Audio Adapter",
    "price": 10466,
    "oldPrice": 13356,
    "category": "Gaming",
    "tag": "Hot",
    "image": "/images/4_1_6.PNG",
    "description": "2-in-1 Bluetooth audio adapter that works as both receiver and transmitter."
  },
  {
    "name": "Universal Wireless Bluetooth Receiver & Transmitter Audio",
    "price": 10231,
    "oldPrice": 10836,
    "category": "Gaming",
    "tag": "New",
    "image": "/images/4_1_7.PNG",
    "description": "Universal Bluetooth 5.3 audio transmitter and receiver for any wired audio device."
  },
  {
    "name": "Sony PlayStation 2 Analog Dual Shock 2 Controller",
    "price": 7500,
    "oldPrice": 10500,
    "category": "Gaming",
    "tag": "Hot",
    "image": "/images/4_9_5.PNG",
    "description": "Official Sony PS2 analog dual shock controller with responsive analog sticks and vibration feedback."
  },
  {
    "name": "Sony PS3 Dual Shock 3 Wireless Game Pad - White",
    "price": 7999,
    "oldPrice": 11199,
    "category": "Gaming",
    "tag": "New",
    "image": "/images/4_9_6.PNG",
    "description": "Wireless Sony PS3 Dual Shock 3 controller in white with SIXAXIS motion sensing and rechargeable battery."
  },
  // ───── LIGHTERS ─────
  {
    "name": "Rechargeable Electric Arc Ignitor with USB Cord for Gas Stoves",
    "price": 6350,
    "oldPrice": 4536,
    "category": "Lighters",
    "tag": "Hot",
    "image": "/images/4_5_1.PNG",
    "description": "Rechargeable electric arc ignitor for gas stoves, candles, and BBQ grills."
  },
  {
    "name": "Rechargeable Electric Arc Ignitor Lifetime Warranty",
    "price": 4351,
    "oldPrice": 3108,
    "category": "Lighters",
    "tag": "New",
    "image": "/images/4_5_2.PNG",
    "description": "Long-reach electric arc lighter with lifetime warranty and USB recharging."
  },
  {
    "name": "Rechargeable Electric Arc Ignitor for Gas Stoves Colorful",
    "price": 4339,
    "oldPrice": 3100,
    "category": "Lighters",
    "tag": "Hot",
    "image": "/images/4_5_3.PNG",
    "description": "Colorful rechargeable electric arc ignitor with flexible neck for kitchen use."
  },
  {
    "name": "Rechargeable Electric Arc Ignitor for Gas Stoves Pink",
    "price": 5879,
    "oldPrice": 4199,
    "category": "Lighters",
    "tag": "New",
    "image": "/images/4_5_4.PNG",
    "description": "Pink rechargeable electric arc ignitor with long neck for safe and easy lighting."
  },
  // ───── WATCHES ─────
  {
    "name": "BINBOND Men's Watch Fashion Waterproof Sport Quartz Business",
    "price": 10346,
    "oldPrice": 9773,
    "category": "Watches",
    "tag": "Hot",
    "image": "/images/5_2_1.PNG",
    "description": "BINBOND men's waterproof sport quartz business watch with leather strap."
  },
  {
    "name": "WABOOC Men's Luxury Stainless Steel Quartz Watch Luminous",
    "price": 19966,
    "oldPrice": 26599,
    "category": "Watches",
    "tag": "New",
    "image": "/images/5_1_1.PNG",
    "description": "WABOOC luxury stainless steel quartz watch with luminous hands and date display."
  },
  {
    "name": "Glow-in-the-Dark Rhinestone LED Student Couple Quartz Watch",
    "price": 6691,
    "oldPrice": 7747,
    "category": "Watches",
    "tag": "Hot",
    "image": "/images/5_1_2.PNG",
    "description": "Glow-in-the-dark rhinestone LED quartz watch for students and couples."
  },
  {
    "name": "BINLIHUAN Men's Business Quartz Watch Luxury Skull Style",
    "price": 12965,
    "oldPrice": 30870,
    "category": "Watches",
    "tag": "New",
    "image": "/images/5_1_3.PNG",
    "description": "Punk-style luxury skull quartz watch with genuine leather strap for men."
  },
  // ───── SMARTWATCHES ─────
  {
    "name": "Smart Sports Watch with Heart Rate Monitor",
    "price": 4875,
    "oldPrice": 7800,
    "category": "Smartwatches",
    "tag": "Hot",
    "image": "/images/8_4.PNG",
    "description": "Advanced smartwatch with heart rate monitoring, fitness tracking, and blood pressure sensor."
  },
  {
    "name": "Premium Smartwatch Case Protector - Rose Gold",
    "price": 2100,
    "oldPrice": 3360,
    "category": "Smartwatches",
    "tag": "New",
    "image": "/images/8_5.PNG",
    "description": "Durable protective case for smartwatch in elegant rose gold finish with screen guard."
  },
  {
    "name": "Premium Smartwatch Case Protector - Silver",
    "price": 2100,
    "oldPrice": 3360,
    "category": "Smartwatches",
    "tag": "Hot",
    "image": "/images/8_6.PNG",
    "description": "Premium protective case for smartwatch in silver with tempered glass screen protector."
  },
  {
    "name": "Fitness Smartwatch with LED Display",
    "price": 4800,
    "oldPrice": 7680,
    "category": "Smartwatches",
    "tag": "New",
    "image": "/images/8_7.PNG",
    "description": "Feature-rich fitness smartwatch with LED display, multi-sport modes, and health tracking."
  },
  {
    "name": "Rugged Smartwatch with Interchangeable Band",
    "price": 6000,
    "oldPrice": 9600,
    "category": "Smartwatches",
    "tag": "Hot",
    "image": "/images/8_8.PNG",
    "description": "Durable rugged smartwatch with interchangeable yellow band and outdoor features."
  },
  {
    "name": "Compact Smartwatch with Health Monitoring",
    "price": 4200,
    "oldPrice": 6720,
    "category": "Smartwatches",
    "tag": "New",
    "image": "/images/8_9.PNG",
    "description": "Lightweight compact smartwatch with comprehensive health monitoring and fitness tracking."
  },
  {
    "name": "Smartwatch with Stylish Pink Band",
    "price": 3720,
    "oldPrice": 5952,
    "category": "Smartwatches",
    "tag": "Hot",
    "image": "/images/8_10.PNG",
    "description": "Elegant smartwatch with pink band, -35% discount on health monitoring features."
  },
  {
    "name": "Smartwatch with Gray Band and LED Display",
    "price": 3960,
    "oldPrice": 6336,
    "category": "Smartwatches",
    "tag": "New",
    "image": "/images/8_11.PNG",
    "description": "Modern smartwatch with gray band, LED display, and comprehensive fitness tracking features."
  },
  // ───── ROUTERS ─────
  {
    "name": "5G WiFi Router with High Speed Connectivity",
    "price": 13200,
    "oldPrice": 21120,
    "category": "Routers",
    "tag": "Hot",
    "image": "/images/9.PNG",
    "description": "Advanced 5G WiFi router for fast and stable internet connectivity throughout your space."
  },
  {
    "name": "MTN 5G Router - Premium Model",
    "price": 6720,
    "oldPrice": 10752,
    "category": "Routers",
    "tag": "New",
    "image": "/images/9_1.PNG",
    "description": "MTN official 5G router with 100gb data bundle and premium connectivity features."
  },
  {
    "name": "MTN 5G Booster - Enhanced Coverage",
    "price": 5880,
    "oldPrice": 9408,
    "category": "Routers",
    "tag": "Hot",
    "image": "/images/9_2.PNG",
    "description": "MTN 5G signal booster with -12% discount for extended network coverage."
  },
  {
    "name": "MTN 5G Signal Enhancer",
    "price": 5520,
    "oldPrice": 8832,
    "category": "Routers",
    "tag": "New",
    "image": "/images/9_3.PNG",
    "description": "Compact MTN 5G signal enhancer with -5% discount for optimal network performance."
  },
  {
    "name": "Xiaomi Mesh System AC1200 EU White",
    "price": 28800,
    "oldPrice": 40320,
    "category": "Routers",
    "tag": "Hot",
    "image": "/images/9_4.PNG",
    "description": "Dual-band Wi-Fi mesh system up to 1200Mbps, seamlessly covers your whole home and connects up to 254 devices."
  },
  {
    "name": "MTN Ops Router Powerbank K10 - Original 5G Router",
    "price": 17000,
    "oldPrice": 23800,
    "category": "Routers",
    "tag": "New",
    "image": "/images/9_5.PNG",
    "description": "Original MTN Ops K10 5G router with built-in powerbank function for on-the-go connectivity."
  },
  {
    "name": "MTN CAT4 K12 4G LTE Router + Free 50GB Data SIM",
    "price": 15000,
    "oldPrice": 21000,
    "category": "Routers",
    "tag": "Hot",
    "image": "/images/9_6.PNG",
    "description": "MTN official CAT4 K12 4G LTE router bundled with a free 50GB data SIM for instant home internet."
  },
  {
    "name": "Mifa Universal 4G LTE Pocket Mifi Mobile WiFi Hotspot Router",
    "price": 22944,
    "oldPrice": 32122,
    "category": "Routers",
    "tag": "New",
    "image": "/images/9_7.PNG",
    "description": "Built for Nigerian networks, this universal pocket mifi works seamlessly across all major providers for total network freedom."
  },
  {
    "name": "USB Type-C to DC Power Line Cable for Router/Powerbank",
    "price": 4999,
    "oldPrice": 6999,
    "category": "Routers",
    "tag": "Hot",
    "image": "/images/9_8.PNG",
    "description": "USB-C to DC 20V round port power cable with built-in PD decoy chip, supports 9V/12V fast charging for routers and power banks."
  },
  {
    "name": "Glo 4G LTE MiFi Pocket Mobile WiFi with Free 30GB",
    "price": 21120,
    "oldPrice": 29568,
    "category": "Routers",
    "tag": "New",
    "image": "/images/9_9.PNG",
    "description": "Glo-branded 4G LTE pocket MiFi device bundled with a free 30GB data allowance for portable home or office internet."
  },
  {
    "name": "Universal USB 4G LTE WiFi Hotspot Modem - All Networks",
    "price": 19899,
    "oldPrice": 27859,
    "category": "Routers",
    "tag": "Hot",
    "image": "/images/9_10.PNG",
    "description": "Insert any network SIM card to turn this USB modem into a wireless 4G LTE router, compatible with all Nigerian networks."
  },
  {
    "name": "MTN CAT4 K12 4G LTE Router + Free 50GB Data Sim Bundle",
    "price": 9120,
    "oldPrice": 12768,
    "category": "Routers",
    "tag": "New",
    "image": "/images/9_11.PNG",
    "description": "Compact MTN CAT4 K12 4G LTE router with a bundled 50GB data SIM, ready to use out of the box."
  },
  {
    "name": "Xiaomi Mi Router 4C (White)",
    "price": 14700,
    "oldPrice": 20580,
    "category": "Routers",
    "tag": "Hot",
    "image": "/images/9_12.PNG",
    "description": "Mi Router 4C with 4 antennas for wide, stable Wi-Fi coverage, 300Mbps high-speed Wi-Fi and app-controlled parental settings."
  },
  {
    "name": "4G LTE USB MiFi/UFI 150Mbps Modem Stick - Portable Wireless",
    "price": 15381,
    "oldPrice": 21533,
    "category": "Routers",
    "tag": "New",
    "image": "/images/9_13.PNG",
    "description": "Portable 4G LTE USB MiFi/UFI modem stick delivering up to 150Mbps wireless speeds for laptops and PCs."
  },
  {
    "name": "4G LTE Wireless USB MiFi/UFI Dongle Mobile Broadband",
    "price": 14499,
    "oldPrice": 20299,
    "category": "Routers",
    "tag": "Hot",
    "image": "/images/9_14.PNG",
    "description": "Compact 4G LTE wireless USB dongle providing instant mobile broadband for any network SIM."
  },
  // ───── PC GAMES ─────
  {
    "name": "BLUR Racing PC Game",
    "price": 5400,
    "oldPrice": 8640,
    "category": "PC Games",
    "tag": "Hot",
    "image": "/images/10_1.PNG",
    "description": "Intense arcade racing game with explosive power-ups and wheel-to-wheel combat."
  },
  {
    "name": "Call of Duty: Modern Warfare PC Game",
    "price": 5400,
    "oldPrice": 8640,
    "category": "PC Games",
    "tag": "New",
    "image": "/images/10_2.PNG",
    "description": "Modern Warfare edition with immersive campaign and multiplayer action on PC."
  },
  {
    "name": "Call of Duty: Day Zero Edition PC Game",
    "price": 5400,
    "oldPrice": 8640,
    "category": "PC Games",
    "tag": "Hot",
    "image": "/images/10_3.PNG",
    "description": "Exclusive Day Zero Edition of Call of Duty with premium early access content."
  },
  {
    "name": "Call of Duty: Black Ops PC Game",
    "price": 5400,
    "oldPrice": 8640,
    "category": "PC Games",
    "tag": "New",
    "image": "/images/10_4.PNG",
    "description": "Black Ops series with intense action, rated 18+ for mature audiences on PC."
  },
  {
    "name": "PES 2023 Football Life PC Game",
    "price": 7200,
    "oldPrice": 11520,
    "category": "PC Games",
    "tag": "Hot",
    "image": "/images/10_5.PNG",
    "description": "Pro Evolution Soccer 2023 with updated rosters and realistic football gameplay."
  },
  {
    "name": "GTA V - Grand Theft Auto PC Game",
    "price": 8892,
    "oldPrice": 14227,
    "category": "PC Games",
    "tag": "Hot",
    "image": "/images/10.PNG",
    "description": "Grand Theft Auto V - Epic open-world action game for PC with unmatched gameplay."
  },
  // ───── BEAUTY ─────
  {
    "name": "Premium Cosmetics Storage Organizer 4-Tier",
    "price": 7200,
    "oldPrice": 11520,
    "category": "Beauty",
    "tag": "Hot",
    "image": "/images/11.PNG",
    "description": "Multi-compartment cosmetics organizer with 4 tiers, -50% discount on storage solutions."
  },
  {
    "name": "Hair Treatment Mask - Orange Label",
    "price": 4440,
    "oldPrice": 7104,
    "category": "Beauty",
    "tag": "New",
    "image": "/images/11_1.PNG",
    "description": "Professional hair treatment mask with deep conditioning formula, -25% discount available."
  },
  {
    "name": "Cosmetics Storage Box with Drawer",
    "price": 7200,
    "oldPrice": 11520,
    "category": "Beauty",
    "tag": "Hot",
    "image": "/images/11_2.PNG",
    "description": "Elegant white cosmetics storage organizer with pull-out drawer, -50% off selected items."
  },
  {
    "name": "Hair Growth Serum Premium Formula",
    "price": 3420,
    "oldPrice": 5472,
    "category": "Beauty",
    "tag": "New",
    "image": "/images/11_3.PNG",
    "description": "Advanced hair growth serum with natural ingredients for stronger, healthier hair."
  },
  {
    "name": "False Eyelashes Set - 10 Pairs",
    "price": 2430,
    "oldPrice": 3888,
    "category": "Beauty",
    "tag": "Hot",
    "image": "/images/11_4.PNG",
    "description": "Professional false eyelashes bundle with 10 pairs, -8% discount on bulk purchases."
  },
  {
    "name": "24K Gold Face Cream - GUAN JING",
    "price": 4200,
    "oldPrice": 6720,
    "category": "Beauty",
    "tag": "New",
    "image": "/images/11_6.PNG",
    "description": "Luxury 24K gold infused face cream for radiant skin, -31% discount this month."
  },
  {
    "name": "Premium Face Moisturizer Cream",
    "price": 3360,
    "oldPrice": 5376,
    "category": "Beauty",
    "tag": "Hot",
    "image": "/images/11_5.PNG",
    "description": "Hydrating facial cream with natural moisturizers for smooth, glowing skin."
  },
  {
    "name": "Portable Cosmetics Travel Bag - Blue Pattern",
    "price": 4320,
    "oldPrice": 6912,
    "category": "Beauty",
    "tag": "New",
    "image": "/images/11_7.PNG",
    "description": "Stylish blue patterned travel cosmetics bag with multiple compartments for organized beauty storage."
  },
  // ───── AUDIO SPEAKERS (NEW CATEGORY) ─────
  {
    "name": "Zealot S532 Bluetooth Speaker Portable Stereo",
    "price": 21280,
    "oldPrice": 15200,
    "category": "Audio Speakers",
    "tag": "Hot",
    "image": "/images/12_1.PNG",
    "description": "Zealot S532 portable Bluetooth speaker with powerful stereo sound and waterproof design."
  },
  {
    "name": "Zealot S32 Bluetooth Speaker Portable 3D Sound",
    "price": 33600,
    "oldPrice": 24000,
    "category": "Audio Speakers",
    "tag": "New",
    "image": "/images/12_2.PNG",
    "description": "Zealot S32 Bluetooth speaker with 3D stereo sound, long battery life, and portable design."
  },
  {
    "name": "Zealot S61 Wireless BT Speaker Subwoofer Portable",
    "price": 31927,
    "oldPrice": 22805,
    "category": "Audio Speakers",
    "tag": "Hot",
    "image": "/images/12_3.PNG",
    "description": "Zealot S61 wireless speaker with powerful subwoofer bass, FM radio, and LED light."
  },
  {
    "name": "Zealot S51 Portable Wireless Bluetooth Speaker Bass",
    "price": 27720,
    "oldPrice": 19800,
    "category": "Audio Speakers",
    "tag": "New",
    "image": "/images/12_4.PNG",
    "description": "Zealot S51 portable speaker with deep bass, extended battery, and waterproof rating."
  },
  {
    "name": "Zealot S67 Portable Bluetooth Speaker 60W Bass Boombox Purple",
    "price": 88200,
    "oldPrice": 63000,
    "category": "Audio Speakers",
    "tag": "Hot",
    "image": "/images/12_5.PNG",
    "description": "Zealot S67 premium Bluetooth speaker with 60W output, deep bass, and 360° sound."
  },
  {
    "name": "Zealot S67 Portable Bluetooth Boombox Speaker 60W Camouflage",
    "price": 100800,
    "oldPrice": 72000,
    "category": "Audio Speakers",
    "tag": "New",
    "image": "/images/12_6.PNG",
    "description": "Zealot S67 Bluetooth boombox with camouflage design, powerful 60W bass, and long battery."
  },
  // ───── SHOES (NEW CATEGORY) ─────
  {
    "name": "Men's Simple Casual Outdoor Quality Shoe Brown",
    "price": 15428,
    "oldPrice": 11020,
    "category": "Shoes",
    "tag": "Hot",
    "image": "/images/13_1.PNG",
    "description": "Comfortable men's casual outdoor shoe with quality materials and modern design."
  },
  {
    "name": "Men's Simple Casual Comfortable Easy Wear Office Shoes",
    "price": 13999,
    "oldPrice": 9999,
    "category": "Shoes",
    "tag": "New",
    "image": "/images/13_2.PNG",
    "description": "Professional yet comfortable office shoes for men with easy-wear design."
  },
  {
    "name": "Men's Sneaker Trainers Simple Casual Canvas Shoe Black",
    "price": 13999,
    "oldPrice": 9999,
    "category": "Shoes",
    "tag": "Hot",
    "image": "/images/13_3.PNG",
    "description": "Classic black canvas sneaker trainers for casual everyday wear and comfort."
  },
  {
    "name": "Teen Children's Leather Sports Shoes Casual Running Sneakers",
    "price": 11539,
    "oldPrice": 8242,
    "category": "Shoes",
    "tag": "New",
    "image": "/images/13_4.PNG",
    "description": "Quality leather sports shoes for children with cushioned insoles for comfortable running."
  },
  {
    "name": "Men's New Unisex Sneakers Sports Casual Running Shoes Black",
    "price": 10283,
    "oldPrice": 7345,
    "category": "Shoes",
    "tag": "Hot",
    "image": "/images/13_5.PNG",
    "description": "Unisex sports sneakers in black with breathable design for running and casual activities."
  },
  {
    "name": "Men's Casual Outdoor Sport Sneakers Walking Shoes",
    "price": 9002,
    "oldPrice": 6430,
    "category": "Shoes",
    "tag": "New",
    "image": "/images/13_6.PNG",
    "description": "Outdoor sports sneakers designed for walking and casual wear with excellent grip."
  },
  {
    "name": "Ladies Everything Simple Casual Comfortable Easy Wear Office Shoes",
    "price": 12859,
    "oldPrice": 9185,
    "category": "Shoes",
    "tag": "Hot",
    "image": "/images/13_7.PNG",
    "description": "Women's comfortable office shoes with simple design and easy-wear functionality."
  },
  {
    "name": "Men's NYSC White Sneakers 2024 Men's Trainers Fashion",
    "price": 10283,
    "oldPrice": 7345,
    "category": "Shoes",
    "tag": "New",
    "image": "/images/13_8.PNG",
    "description": "Trendy white NYSC-inspired sneakers for men with fashionable trainer design."
  },
  {
    "name": "Trendy Stylish Sneakers for Men Black Loafers Board Shoes",
    "price": 16716,
    "oldPrice": 11940,
    "category": "Shoes",
    "tag": "Hot",
    "image": "/images/13_9.PNG",
    "description": "Stylish black loafer-style sneakers combining comfort with trendy street fashion."
  },
  {
    "name": "Men's Simple Casual Indoor Comfortable Sport Running Shoes",
    "price": 15428,
    "oldPrice": 11020,
    "category": "Shoes",
    "tag": "New",
    "image": "/images/13_10.PNG",
    "description": "Lightweight running shoes perfect for indoor sports and casual everyday comfort."
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
