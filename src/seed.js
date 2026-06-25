'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const Product = mongoose.models.Product || require('./models/Product');

const products = [
  {
    "name": "USB Wireless Soldering Iron 3-in-1",
    "price": 18200,
    "originalPrice": 13000,
    "category": "Tools",
    "tag": "new",
    "image": "/images/1.PNG",
    "description": "Portable 3-in-1 cordless soldering iron for electronics repair and DIY projects."
  },
  {
    "name": "Professional Electric Hair Clipper Trimmer",
    "price": 16800,
    "originalPrice": 12000,
    "category": "Beauty",
    "tag": "popular",
    "image": "/images/2.PNG",
    "description": "Cordless professional hair clipper with adjustable blade for precise cuts."
  },
  {
    "name": "Multi-functional Wire Stripper Pulley Design",
    "price": 9800,
    "originalPrice": 7000,
    "category": "Tools",
    "tag": "new",
    "image": "/images/3.PNG",
    "description": "Ergonomic pulley-design wire stripper for clean and precise cable stripping."
  },
  {
    "name": "New Smartwatch with Flashlight",
    "price": 19600,
    "originalPrice": 14000,
    "category": "Wearables",
    "tag": "popular",
    "image": "/images/4.PNG",
    "description": "Feature-packed smartwatch with built-in LED flashlight and fitness tracking."
  },
  {
    "name": "Continuity Voltage Detector Pen",
    "price": 7000,
    "originalPrice": 5000,
    "category": "Tools",
    "tag": "new",
    "image": "/images/5.PNG",
    "description": "Non-contact voltage tester pen for safely detecting live wires and circuits."
  },
  {
    "name": "1 Box DIY Electronics Component Kit",
    "price": 11200,
    "originalPrice": 8000,
    "category": "Tools",
    "tag": "popular",
    "image": "/images/6.PNG",
    "description": "Comprehensive DIY electronics component assortment kit for hobbyists and engineers."
  },
  {
    "name": "Electromagnetic Induction Phone Repair Fault Detector",
    "price": 14000,
    "originalPrice": 10000,
    "category": "Tools",
    "tag": "new",
    "image": "/images/7.PNG",
    "description": "Electromagnetic induction tester for diagnosing faults in smartphones and PCBs."
  },
  {
    "name": "Minimalist Solid-Colored Portable Desktop Clock",
    "price": 8400,
    "originalPrice": 6000,
    "category": "Wearables",
    "tag": "popular",
    "image": "/images/8.PNG",
    "description": "Sleek minimalist desktop clock with solid color design for home or office."
  },
  {
    "name": "VR Glasses Virtual Reality Headset",
    "price": 16800,
    "originalPrice": 12000,
    "category": "Accessories",
    "tag": "new",
    "image": "/images/9.PNG",
    "description": "Immersive VR glasses compatible with most smartphones for gaming and media."
  },
  {
    "name": "Premium Smart Watch",
    "price": 22400,
    "originalPrice": 16000,
    "category": "Wearables",
    "tag": "popular",
    "image": "/images/10.PNG",
    "description": "Premium smartwatch with health monitoring, notifications, and long battery life."
  },
  {
    "name": "USB Card Reader 4-in-1 Type-C",
    "price": 5600,
    "originalPrice": 4000,
    "category": "Tools",
    "tag": "new",
    "image": "/images/11.PNG",
    "description": "4-in-1 Type-C USB card reader supporting SD, TF, CF and MS card formats."
  },
  {
    "name": "3D VR Headset Smart Virtual Reality",
    "price": 19600,
    "originalPrice": 14000,
    "category": "Accessories",
    "tag": "popular",
    "image": "/images/12.PNG",
    "description": "3D virtual reality headset compatible with Android and iOS smartphones."
  },
  {
    "name": "Men's Beauty Mini Shaver",
    "price": 8400,
    "originalPrice": 6000,
    "category": "Beauty",
    "tag": "new",
    "image": "/images/13.PNG",
    "description": "Compact rechargeable mini shaver for precise facial grooming on the go."
  },
  {
    "name": "UMLIFE 200pcs LED Diode Assortment Kit",
    "price": 7000,
    "originalPrice": 5000,
    "category": "Tools",
    "tag": "new",
    "image": "/images/14.PNG",
    "description": "200-piece LED diode assortment kit in multiple colors for electronics projects."
  },
  {
    "name": "USB 2.0 Type-C Flash Drive",
    "price": 9800,
    "originalPrice": 7000,
    "category": "Tools",
    "tag": "popular",
    "image": "/images/15.PNG",
    "description": "Dual-port USB 2.0 and Type-C flash drive for fast file transfer across devices."
  },
  {
    "name": "Professional Hair and Beard Clipper",
    "price": 18200,
    "originalPrice": 13000,
    "category": "Beauty",
    "tag": "popular",
    "image": "/images/16.PNG",
    "description": "Rechargeable professional clipper with stainless steel blades for hair and beard."
  },
  {
    "name": "Cordless Electric Engraving Pen",
    "price": 11200,
    "originalPrice": 8000,
    "category": "Tools",
    "tag": "new",
    "image": "/images/17.PNG",
    "description": "Cordless electric engraving pen for etching designs on metal, glass, and wood."
  },
  {
    "name": "Multifunctional Smart Reading Glasses",
    "price": 14000,
    "originalPrice": 10000,
    "category": "Wearables",
    "tag": "popular",
    "image": "/images/18.PNG",
    "description": "Smart reading glasses with blue light filtering and built-in magnification lenses."
  },
  {
    "name": "Newrixing 6W Wireless Charger Stand",
    "price": 9800,
    "originalPrice": 7000,
    "category": "Tools",
    "tag": "popular",
    "image": "/images/19.PNG",
    "description": "6W Qi wireless charging stand compatible with all wireless-enabled smartphones."
  },
  {
    "name": "Smiling Shark Rechargeable Camping Lamp",
    "price": 11200,
    "originalPrice": 8000,
    "category": "Tools",
    "tag": "new",
    "image": "/images/20.PNG",
    "description": "Portable rechargeable LED camping lamp with adjustable brightness modes."
  },
  {
    "name": "Multi-Functional Camping Power Station 10000mAh",
    "price": 22400,
    "originalPrice": 16000,
    "category": "Tools",
    "tag": "popular",
    "image": "/images/21.PNG",
    "description": "10000mAh portable power station with multiple outputs for outdoor and camping use."
  },
  {
    "name": "Retractable Zoom LED Strong Flashlight",
    "price": 8400,
    "originalPrice": 6000,
    "category": "Tools",
    "tag": "new",
    "image": "/images/22.PNG",
    "description": "High-powered zoomable LED flashlight with retractable focus and multiple modes."
  },
  {
    "name": "Wolf In Sheep Clothing Power Bank",
    "price": 16800,
    "originalPrice": 12000,
    "category": "Tools",
    "tag": "popular",
    "image": "/images/23.PNG",
    "description": "Unique 1309 Wolf design power bank with high capacity and fast charging support."
  },
  {
    "name": "3-In-1 Phone Stand Wireless Charger",
    "price": 14000,
    "originalPrice": 10000,
    "category": "Tools",
    "tag": "new",
    "image": "/images/24.PNG",
    "description": "3-in-1 wireless charging pad for phone, earbuds, and smartwatch simultaneously."
  },
  {
    "name": "Newrixing 6W Portable Wireless Charger",
    "price": 9800,
    "originalPrice": 7000,
    "category": "Tools",
    "tag": "popular",
    "image": "/images/25.PNG",
    "description": "Compact portable 6W wireless charger pad for Qi-compatible devices."
  },
  {
    "name": "5-in-1 Car Fast Charger 2-Port 120W",
    "price": 11200,
    "originalPrice": 8000,
    "category": "Tools",
    "tag": "new",
    "image": "/images/26.PNG",
    "description": "120W 5-in-1 dual-port car charger with PD and QC fast charging support."
  },
  {
    "name": "Portable Outdoor Solar Charger Panel",
    "price": 19600,
    "originalPrice": 14000,
    "category": "Tools",
    "tag": "popular",
    "image": "/images/27.PNG",
    "description": "Foldable solar charging panel for outdoor adventures and emergency power needs."
  },
  {
    "name": "Smiling Shark Power Bank Flashlight",
    "price": 14000,
    "originalPrice": 10000,
    "category": "Tools",
    "tag": "new",
    "image": "/images/28.PNG",
    "description": "Dual-function power bank with integrated LED flashlight for outdoor use."
  },
  {
    "name": "MINZHE YL Lightweight Low-Top Shoes",
    "price": 22400,
    "originalPrice": 16000,
    "category": "Shoes",
    "tag": "popular",
    "image": "/images/29.PNG",
    "description": "Ultra-lightweight low-top sneakers with breathable mesh upper for all-day comfort."
  },
  {
    "name": "Men's Classic Solid Color Fashion Sneakers",
    "price": 19600,
    "originalPrice": 14000,
    "category": "Shoes",
    "tag": "new",
    "image": "/images/30.PNG",
    "description": "Classic solid-color fashion sneakers with cushioned sole for casual everyday wear."
  },
  {
    "name": "Men's Outdoor Slip-On Sandals",
    "price": 14000,
    "originalPrice": 10000,
    "category": "Shoes",
    "tag": "popular",
    "image": "/images/31.PNG",
    "description": "Comfortable slip-on sandals with non-slip sole for outdoor and beach activities."
  },
  {
    "name": "Breathable Slip-On Lace-Up Shoes",
    "price": 16800,
    "originalPrice": 12000,
    "category": "Shoes",
    "tag": "new",
    "image": "/images/32.PNG",
    "description": "Breathable mesh slip-on shoes with elastic laces for easy on-and-off wear."
  },
  {
    "name": "Men's Breathable Mesh Running Shoes",
    "price": 22400,
    "originalPrice": 16000,
    "category": "Shoes",
    "tag": "popular",
    "image": "/images/33.PNG",
    "description": "Lightweight mesh running shoes with ergonomic sole for sport and fitness."
  },
  {
    "name": "Men's Fashion Solid Casual Sneakers",
    "price": 19600,
    "originalPrice": 14000,
    "category": "Shoes",
    "tag": "new",
    "image": "/images/34.PNG",
    "description": "Solid-colored casual sneakers with padded insole and flexible rubber outsole."
  },
  {
    "name": "Men's Business Casual Loafers",
    "price": 25200,
    "originalPrice": 18000,
    "category": "Shoes",
    "tag": "popular",
    "image": "/images/35.PNG",
    "description": "Sleek business casual loafers with leather-look finish for office and outings."
  },
  {
    "name": "Men's Sneakers Sport",
    "price": 19600,
    "originalPrice": 14000,
    "category": "Shoes",
    "tag": "new",
    "image": "/images/36.PNG",
    "description": "Sporty sneakers with shock-absorbing midsole for gym and casual use."
  },
  {
    "name": "Men's Breathable Mesh Platform Shoes",
    "price": 22400,
    "originalPrice": 16000,
    "category": "Shoes",
    "tag": "popular",
    "image": "/images/37.PNG",
    "description": "Trendy platform mesh shoes with elevated sole for a bold street-style look."
  },
  {
    "name": "Men's Breathable Mesh Sneakers",
    "price": 18200,
    "originalPrice": 13000,
    "category": "Shoes",
    "tag": "new",
    "image": "/images/38.PNG",
    "description": "Lightweight breathable mesh sneakers with cushioned footbed for daily wear."
  },
  {
    "name": "Casual Knit Mesh Breathable Sneakers",
    "price": 16800,
    "originalPrice": 12000,
    "category": "Shoes",
    "tag": "popular",
    "image": "/images/39.PNG",
    "description": "Knit mesh sneakers with flexible construction for breathable all-day comfort."
  },
  {
    "name": "Men's Business Casual Lace-Up Shoes",
    "price": 22400,
    "originalPrice": 16000,
    "category": "Shoes",
    "tag": "new",
    "image": "/images/40.PNG",
    "description": "Polished lace-up shoes blending business style with everyday casual comfort."
  },
  {
    "name": "Men's Outdoor Casual Shoes",
    "price": 18200,
    "originalPrice": 13000,
    "category": "Shoes",
    "tag": "popular",
    "image": "/images/41.PNG",
    "description": "Durable outdoor casual shoes with anti-slip sole for trails and city streets."
  },
  {
    "name": "Men's Classic Color-Block Sneakers",
    "price": 19600,
    "originalPrice": 14000,
    "category": "Shoes",
    "tag": "new",
    "image": "/images/42.PNG",
    "description": "Bold color-block sneakers with retro styling and comfortable foam insole."
  },
  {
    "name": "Men's Low-Top Lace-Up Sports Sneakers",
    "price": 19600,
    "originalPrice": 14000,
    "category": "Shoes",
    "tag": "popular",
    "image": "/images/43.PNG",
    "description": "Low-top sports sneakers with reinforced toe cap and breathable mesh panels."
  },
  {
    "name": "Women's Solid Color Sports Shoes",
    "price": 16800,
    "originalPrice": 12000,
    "category": "Shoes",
    "tag": "popular",
    "image": "/images/44.PNG",
    "description": "Lightweight solid-color women's sports shoes for gym, jogging, and casual wear."
  },
  {
    "name": "Women's Fashionable Casual Sandals",
    "price": 14000,
    "originalPrice": 10000,
    "category": "Shoes",
    "tag": "new",
    "image": "/images/45.PNG",
    "description": "Chic open-toe casual sandals with adjustable straps for summer outings."
  },
  {
    "name": "New Women's Casual Skate Shoes",
    "price": 18200,
    "originalPrice": 13000,
    "category": "Shoes",
    "tag": "popular",
    "image": "/images/46.PNG",
    "description": "Trendy women's skate shoes with canvas upper and vulcanized flat sole."
  },
  {
    "name": "Women's Summer Breathable Knit Shoes",
    "price": 14000,
    "originalPrice": 10000,
    "category": "Shoes",
    "tag": "new",
    "image": "/images/47.PNG",
    "description": "Breathable knit fabric shoes for warm-weather comfort and casual style."
  },
  {
    "name": "Women's Summer Cool Sandals",
    "price": 12600,
    "originalPrice": 9000,
    "category": "Shoes",
    "tag": "popular",
    "image": "/images/48.PNG",
    "description": "Stylish open-toe summer sandals with cushioned footbed for all-day wear."
  },
  {
    "name": "Women's Slip-On Sneakers",
    "price": 16800,
    "originalPrice": 12000,
    "category": "Shoes",
    "tag": "new",
    "image": "/images/49.PNG",
    "description": "Easy slip-on women's sneakers with elastic gore for quick on-and-off wear."
  },
  {
    "name": "Women's Breathable Mule Sneakers",
    "price": 14000,
    "originalPrice": 10000,
    "category": "Shoes",
    "tag": "popular",
    "image": "/images/50.PNG",
    "description": "Backless mule sneakers with padded collar for a relaxed, stylish look."
  },
  {
    "name": "All-Match White Sneakers",
    "price": 18200,
    "originalPrice": 13000,
    "category": "Shoes",
    "tag": "new",
    "image": "/images/51.PNG",
    "description": "Classic clean white sneakers that pair effortlessly with any outfit."
  },
  {
    "name": "2026 Summer New Slide Sandals",
    "price": 11200,
    "originalPrice": 8000,
    "category": "Shoes",
    "tag": "popular",
    "image": "/images/52.PNG",
    "description": "Trendy 2026 slide sandals with thick cushioned sole for poolside and casual wear."
  },
  {
    "name": "Ladies Running Sneakers",
    "price": 19600,
    "originalPrice": 14000,
    "category": "Shoes",
    "tag": "new",
    "image": "/images/53.PNG",
    "description": "Responsive running sneakers with arch support and breathable mesh for women."
  },
  {
    "name": "LYYSB Women's Slip-On Sneakers",
    "price": 16800,
    "originalPrice": 12000,
    "category": "Shoes",
    "tag": "popular",
    "image": "/images/54.PNG",
    "description": "Stylish women's slip-on sneakers with platform sole and soft textile upper."
  },
  {
    "name": "Thick-Soled Summer Sandals",
    "price": 14000,
    "originalPrice": 10000,
    "category": "Shoes",
    "tag": "new",
    "image": "/images/55.PNG",
    "description": "Chunky thick-soled summer sandals with adjustable buckle strap for added height."
  },
  {
    "name": "Women's Casual Slip-On Shoes",
    "price": 14000,
    "originalPrice": 10000,
    "category": "Shoes",
    "tag": "popular",
    "image": "/images/56.PNG",
    "description": "Comfortable casual slip-on shoes with memory foam insole for daily wear."
  },
  {
    "name": "Casual White Sneakers Women",
    "price": 16800,
    "originalPrice": 12000,
    "category": "Shoes",
    "tag": "new",
    "image": "/images/57.PNG",
    "description": "Clean casual white sneakers with minimalist design for effortless everyday style."
  },
  {
    "name": "ZOSIVC Women's Winter Sneakers",
    "price": 19600,
    "originalPrice": 14000,
    "category": "Shoes",
    "tag": "popular",
    "image": "/images/58.PNG",
    "description": "Warm winter sneakers with plush lining and anti-slip sole for cold weather."
  },
  {
    "name": "2pcs Simple and Stylish Watch Set",
    "price": 22400,
    "originalPrice": 16000,
    "category": "Watches",
    "tag": "popular",
    "image": "/images/59.PNG",
    "description": "Elegant 2-piece watch set with minimalist dials for couples or everyday matching."
  },
  {
    "name": "Unisex Quartz Watch Faux Leather",
    "price": 14000,
    "originalPrice": 10000,
    "category": "Watches",
    "tag": "new",
    "image": "/images/60.PNG",
    "description": "Classic unisex quartz watch with faux leather strap and clean round dial."
  },
  {
    "name": "Men's Luxury Quartz Watch",
    "price": 28000,
    "originalPrice": 20000,
    "category": "Watches",
    "tag": "popular",
    "image": "/images/61.PNG",
    "description": "Sophisticated luxury-style quartz watch with metallic case and Roman numerals."
  },
  {
    "name": "2pcs Minimalist Sports Style Watch Set",
    "price": 19600,
    "originalPrice": 14000,
    "category": "Watches",
    "tag": "new",
    "image": "/images/62.PNG",
    "description": "Matching 2-piece sports watch set with silicone strap and bold dial design."
  },
  {
    "name": "1-2pcs Exquisite Watch Set",
    "price": 16800,
    "originalPrice": 12000,
    "category": "Watches",
    "tag": "popular",
    "image": "/images/63.PNG",
    "description": "Beautifully crafted exquisite watch set with premium finish and precise movement."
  },
  {
    "name": "Unisex Casual Fashion Quartz Watch",
    "price": 14000,
    "originalPrice": 10000,
    "category": "Watches",
    "tag": "new",
    "image": "/images/64.PNG",
    "description": "Trendy casual quartz watch with color accent bezel for unisex everyday fashion."
  },
  {
    "name": "4pcs Classic Quartz Men's Watch Set",
    "price": 25200,
    "originalPrice": 18000,
    "category": "Watches",
    "tag": "popular",
    "image": "/images/65.PNG",
    "description": "4-piece men's quartz watch set with different strap styles for varied occasions."
  },
  {
    "name": "Unisex Cool Business Luxury Watch",
    "price": 28000,
    "originalPrice": 20000,
    "category": "Watches",
    "tag": "new",
    "image": "/images/66.PNG",
    "description": "Bold business luxury watch with stainless steel case and date display function."
  },
  {
    "name": "12pcs Fashion Quartz Watch Set",
    "price": 33600,
    "originalPrice": 24000,
    "category": "Watches",
    "tag": "popular",
    "image": "/images/67.PNG",
    "description": "Trendy 12-piece fashion quartz watch assortment in various colors and styles."
  },
  {
    "name": "BANBONY Unisex Quartz Watch",
    "price": 19600,
    "originalPrice": 14000,
    "category": "Watches",
    "tag": "new",
    "image": "/images/68.PNG",
    "description": "BANBONY brand unisex quartz watch with leather band and classic round face."
  },
  {
    "name": "10pcs Fashionable Square Watch Set",
    "price": 28000,
    "originalPrice": 20000,
    "category": "Watches",
    "tag": "popular",
    "image": "/images/69.PNG",
    "description": "10-piece square dial fashion watch set in assorted colors for gifting or resale."
  },
  {
    "name": "New Multi-Function Sport Watch",
    "price": 19600,
    "originalPrice": 14000,
    "category": "Watches",
    "tag": "new",
    "image": "/images/70.PNG",
    "description": "Feature-rich sport watch with stopwatch, alarm, backlight, and water resistance."
  },
  {
    "name": "4pcs Unisex Watch Set with Bracelet and Ring",
    "price": 22400,
    "originalPrice": 16000,
    "category": "Watches",
    "tag": "popular",
    "image": "/images/71.PNG",
    "description": "Coordinated 4-piece set with watch, bracelet, and ring for a complete look."
  },
  {
    "name": "Unisex Fashion Casual Quartz Watch",
    "price": 14000,
    "originalPrice": 10000,
    "category": "Watches",
    "tag": "new",
    "image": "/images/72.PNG",
    "description": "Lightweight casual quartz watch in soft silicone strap for daily comfortable wear."
  },
  {
    "name": "4pcs Men and Women Watch Gift Set",
    "price": 25200,
    "originalPrice": 18000,
    "category": "Watches",
    "tag": "popular",
    "image": "/images/73.PNG",
    "description": "Thoughtful 4-piece watch gift set perfect for couples or special occasions."
  },
  {
    "name": "Lightweight Business Laptop Backpack",
    "price": 25200,
    "originalPrice": 18000,
    "category": "Bags",
    "tag": "popular",
    "image": "/images/74.PNG",
    "description": "Sleek business backpack with padded laptop compartment and USB charging port."
  },
  {
    "name": "Men's Lightweight Briefcase Bag",
    "price": 22400,
    "originalPrice": 16000,
    "category": "Bags",
    "tag": "new",
    "image": "/images/75.PNG",
    "description": "Professional lightweight briefcase with multiple organizer pockets for daily commute."
  },
  {
    "name": "Laptop Travel Backpack",
    "price": 28000,
    "originalPrice": 20000,
    "category": "Bags",
    "tag": "popular",
    "image": "/images/76.PNG",
    "description": "Large-capacity travel backpack with anti-theft zipper and padded laptop sleeve."
  },
  {
    "name": "Unisex Square Bag Messenger",
    "price": 16800,
    "originalPrice": 12000,
    "category": "Bags",
    "tag": "new",
    "image": "/images/77.PNG",
    "description": "Compact square messenger bag with adjustable crossbody strap for everyday carry."
  },
  {
    "name": "Men's and Women's Crossbody Bag",
    "price": 14000,
    "originalPrice": 10000,
    "category": "Bags",
    "tag": "popular",
    "image": "/images/78.PNG",
    "description": "Versatile crossbody bag with multiple compartments for unisex everyday use."
  },
  {
    "name": "Men's Single Shoulder Bag",
    "price": 14000,
    "originalPrice": 10000,
    "category": "Bags",
    "tag": "new",
    "image": "/images/79.PNG",
    "description": "Stylish single-strap shoulder bag with zipper closure for casual outings."
  },
  {
    "name": "Travel Laptop Backpack Set 3pc",
    "price": 33600,
    "originalPrice": 24000,
    "category": "Bags",
    "tag": "popular",
    "image": "/images/80.PNG",
    "description": "3-piece travel set with large backpack, toiletry bag, and accessories pouch."
  },
  {
    "name": "Men's Crossbody Bag",
    "price": 14000,
    "originalPrice": 10000,
    "category": "Bags",
    "tag": "new",
    "image": "/images/81.PNG",
    "description": "Minimalist men's crossbody bag with waterproof canvas and zippered pockets."
  },
  {
    "name": "Quilted Shoulder Bag Unisex",
    "price": 16800,
    "originalPrice": 12000,
    "category": "Bags",
    "tag": "popular",
    "image": "/images/82.PNG",
    "description": "Trendy quilted shoulder bag with chain strap and premium stitching for unisex wear."
  },
  {
    "name": "Large-Capacity Crossbody Bag",
    "price": 19600,
    "originalPrice": 14000,
    "category": "Bags",
    "tag": "new",
    "image": "/images/83.PNG",
    "description": "Roomy crossbody bag with multiple zip pockets and adjustable padded strap."
  },
  {
    "name": "4pcs Touch Screen Thumbs Gaming Grip",
    "price": 5600,
    "originalPrice": 4000,
    "category": "Accessories",
    "tag": "popular",
    "image": "/images/84.PNG",
    "description": "Set of 4 touchscreen thumb grips for precise mobile gaming control."
  },
  {
    "name": "8pcs Spider Gaming Finger Sleeves",
    "price": 4900,
    "originalPrice": 3500,
    "category": "Accessories",
    "tag": "new",
    "image": "/images/85.PNG",
    "description": "8-piece breathable anti-sweat finger sleeves for smooth mobile gaming."
  },
  {
    "name": "LAN XUN 3D VR Headset Smart Virtual Reality",
    "price": 19600,
    "originalPrice": 14000,
    "category": "Accessories",
    "tag": "popular",
    "image": "/images/86.PNG",
    "description": "LAN XUN brand 3D VR headset with adjustable lens and wide FOV for immersive play."
  },
  {
    "name": "Wireless Headphones Earbuds Gaming",
    "price": 16800,
    "originalPrice": 12000,
    "category": "Accessories",
    "tag": "new",
    "image": "/images/87.PNG",
    "description": "Dual-mode wireless headphones with earbuds mode and low-latency gaming feature."
  },
  {
    "name": "OUBANG PS4 Controller Phone Mount Clip",
    "price": 7000,
    "originalPrice": 5000,
    "category": "Accessories",
    "tag": "popular",
    "image": "/images/88.PNG",
    "description": "Adjustable phone clip mount for PS4 controller to turn your phone into a gaming device."
  },
  {
    "name": "Ultra-Thin Gaming Gloves",
    "price": 5600,
    "originalPrice": 4000,
    "category": "Accessories",
    "tag": "new",
    "image": "/images/89.PNG",
    "description": "Ultra-thin touchscreen-compatible gaming gloves for sweat-free mobile play."
  },
  {
    "name": "4pcs Touch Screen Thumbs Game Controller Set",
    "price": 5600,
    "originalPrice": 4000,
    "category": "Accessories",
    "tag": "popular",
    "image": "/images/90.PNG",
    "description": "4-piece joystick thumb controller set for enhanced mobile gaming precision."
  },
  {
    "name": "1pc 3D VR Headset Smart Virtual",
    "price": 16800,
    "originalPrice": 12000,
    "category": "Accessories",
    "tag": "new",
    "image": "/images/91.PNG",
    "description": "Single-unit 3D VR headset with foam padding and wide-angle lens for VR content."
  },
  {
    "name": "Game Controller Grip for Sony PSVita",
    "price": 9800,
    "originalPrice": 7000,
    "category": "Accessories",
    "tag": "popular",
    "image": "/images/92.PNG",
    "description": "Ergonomic grip case compatible with Sony PSVita for comfortable extended gaming."
  },
  {
    "name": "4pcs Breathable Sweat-Absorbing Finger Sleeves",
    "price": 4900,
    "originalPrice": 3500,
    "category": "Accessories",
    "tag": "new",
    "image": "/images/93.PNG",
    "description": "Breathable sweat-absorbing finger sleeves for precise touchscreen and gaming use."
  },
  {
    "name": "American High Street Style Cargo Pants",
    "price": 22400,
    "originalPrice": 16000,
    "category": "Clothes",
    "tag": "popular",
    "image": "/images/94.PNG",
    "description": "Baggy American high-street cargo pants with multiple utility pockets and drawstring waist."
  },
  {
    "name": "Loose-Fitting Jeans Plus Size",
    "price": 19600,
    "originalPrice": 14000,
    "category": "Clothes",
    "tag": "new",
    "image": "/images/95.PNG",
    "description": "Comfortable plus-size loose-fitting jeans with stretch fabric and relaxed straight leg."
  },
  {
    "name": "Geng Yuan Men's Casual Jeans",
    "price": 18200,
    "originalPrice": 13000,
    "category": "Clothes",
    "tag": "popular",
    "image": "/images/96.PNG",
    "description": "Geng Yuan brand casual jeans with classic straight cut and durable denim fabric."
  },
  {
    "name": "Men's Loose Fit Washed Jeans",
    "price": 18200,
    "originalPrice": 13000,
    "category": "Clothes",
    "tag": "new",
    "image": "/images/97.PNG",
    "description": "Washed denim loose fit jeans with vintage fade effect and relaxed waistband."
  },
  {
    "name": "Men's Khaki Curved Baggy Pants",
    "price": 19600,
    "originalPrice": 14000,
    "category": "Clothes",
    "tag": "popular",
    "image": "/images/98.PNG",
    "description": "Stylish khaki curved-leg baggy pants with a trendy oversized silhouette."
  },
  {
    "name": "Women's Black Loose Wide Leg Jeans",
    "price": 18200,
    "originalPrice": 13000,
    "category": "Clothes",
    "tag": "new",
    "image": "/images/99.PNG",
    "description": "Chic black wide-leg jeans with high waist and loose flowing silhouette."
  },
  {
    "name": "Vintage Blue Washed Straight-Leg Jeans",
    "price": 18200,
    "originalPrice": 13000,
    "category": "Clothes",
    "tag": "popular",
    "image": "/images/100.PNG",
    "description": "Classic vintage-washed straight-leg jeans with authentic fade and raw hem."
  },
  {
    "name": "Women's Mid-Rise Distressed Jeans",
    "price": 19600,
    "originalPrice": 14000,
    "category": "Clothes",
    "tag": "new",
    "image": "/images/101.PNG",
    "description": "On-trend mid-rise distressed jeans with ripped knees and frayed hem detail."
  },
  {
    "name": "Hip-Hop Pattern Printed Loose Sweatpants",
    "price": 16800,
    "originalPrice": 12000,
    "category": "Clothes",
    "tag": "popular",
    "image": "/images/102.PNG",
    "description": "Street-style hip-hop print loose sweatpants with elastic waist and ankle cuff."
  },
  {
    "name": "Bust-Accented Design Boyfriend Jeans",
    "price": 18200,
    "originalPrice": 13000,
    "category": "Clothes",
    "tag": "new",
    "image": "/images/103.PNG",
    "description": "Relaxed boyfriend jeans with bust-accented design detail and comfortable stretch fit."
  },
  {
    "name": "10pcs Diode Bridge Rectifier DB207 DIP-4",
    "price": 5600,
    "originalPrice": 4000,
    "category": "Tools",
    "tag": "new",
    "image": "/images/104.PNG",
    "description": "Pack of 10 DB207 diode bridge rectifiers in DIP-4 package for power supply circuits."
  },
  {
    "name": "Home Portable Pulse Igniter Kitchen Lighter",
    "price": 8400,
    "originalPrice": 6000,
    "category": "Tools",
    "tag": "popular",
    "image": "/images/105.PNG",
    "description": "Rechargeable pulse igniter lighter for kitchen stoves, candles, and BBQ grills."
  },
  {
    "name": "Bluetooth 5.4 Wireless Earphone",
    "price": 14000,
    "originalPrice": 10000,
    "category": "Accessories",
    "tag": "new",
    "image": "/images/106.PNG",
    "description": "Latest Bluetooth 5.4 wireless earphones with noise reduction and long battery life."
  },
  {
    "name": "10PCS KBP307 3A 1000V Diode Bridge Rectifier",
    "price": 7000,
    "originalPrice": 5000,
    "category": "Tools",
    "tag": "popular",
    "image": "/images/107.PNG",
    "description": "10-piece KBP307 3A 1000V bridge rectifiers for AC-DC conversion in electronics."
  },
  {
    "name": "Men's Outdoor Trail Running Sneakers",
    "price": 22400,
    "originalPrice": 16000,
    "category": "Shoes",
    "tag": "popular",
    "image": "/images/108.PNG",
    "description": "Rugged trail running sneakers with grippy outsole and breathable upper for outdoors."
  },
  {
    "name": "Women's Elegant Block Heel Sandals",
    "price": 19600,
    "originalPrice": 14000,
    "category": "Shoes",
    "tag": "new",
    "image": "/images/109.PNG",
    "description": "Elegant block heel sandals with ankle strap and cushioned footbed for events."
  },
  {
    "name": "Men's Slim Fit Stretch Chino Pants",
    "price": 18200,
    "originalPrice": 13000,
    "category": "Clothes",
    "tag": "popular",
    "image": "/images/110.PNG",
    "description": "Slim fit chino pants with stretch fabric for a sharp, comfortable everyday look."
  },
  {
    "name": "Women's Floral Print Midi Dress",
    "price": 19600,
    "originalPrice": 14000,
    "category": "Clothes",
    "tag": "new",
    "image": "/images/111.PNG",
    "description": "Breezy floral print midi dress with V-neck and flowy skirt for warm-weather styling."
  },
  {
    "name": "Men's Oversized Graphic Hoodie",
    "price": 18200,
    "originalPrice": 13000,
    "category": "Clothes",
    "tag": "popular",
    "image": "/images/112.PNG",
    "description": "Cozy oversized graphic-print hoodie with kangaroo pocket and ribbed cuffs."
  },
  {
    "name": "Women's High-Waist Pleated Mini Skirt",
    "price": 14000,
    "originalPrice": 10000,
    "category": "Clothes",
    "tag": "new",
    "image": "/images/113.PNG",
    "description": "Trendy high-waist pleated mini skirt with zipper back for chic casual outfits."
  },
  {
    "name": "X9 Wireless Bluetooth 5.0 Earphone",
    "price": 14000,
    "originalPrice": 10000,
    "category": "Accessories",
    "tag": "popular",
    "image": "/images/114.PNG",
    "description": "X9 TWS Bluetooth 5.0 earphones with deep bass and touch control for seamless listening."
  },
  {
    "name": "New 180\u00b0 Wireless Bluetooth Earpiece Ear Hook",
    "price": 11200,
    "originalPrice": 8000,
    "category": "Accessories",
    "tag": "new",
    "image": "/images/115.PNG",
    "description": "Flexible 180-degree rotating ear hook Bluetooth earpiece in multiple color options."
  },
  {
    "name": "Wireless Ear Clip Bluetooth Receiver",
    "price": 9800,
    "originalPrice": 7000,
    "category": "Accessories",
    "tag": "popular",
    "image": "/images/116.PNG",
    "description": "Clip-on wireless Bluetooth audio receiver adapter for wired headphones and earphones."
  },
  {
    "name": "TV Music Bluetooth Transmitter USB",
    "price": 11200,
    "originalPrice": 8000,
    "category": "Accessories",
    "tag": "new",
    "image": "/images/117.PNG",
    "description": "USB plug-in Bluetooth transmitter for streaming TV audio wirelessly to headphones."
  },
  {
    "name": "Aromatherapy Candle Pulse Igniter",
    "price": 21000,
    "originalPrice": 15000,
    "category": "Tools",
    "tag": "popular",
    "image": "/images/118.PNG",
    "description": "Rechargeable electric pulse igniter for candles and aromatherapy burners."
  },
  {
    "name": "Colorful Windproof USB Cyclic Charging Double ARC Lighter",
    "price": 4900,
    "originalPrice": 3500,
    "category": "Tools",
    "tag": "new",
    "image": "/images/119.PNG",
    "description": "Windproof dual ARC electric lighter with colorful design and USB-C recharging."
  },
  {
    "name": "80000mAh Power Bank PD 35W Fast Charging",
    "price": 46200,
    "originalPrice": 33000,
    "category": "Tools",
    "tag": "popular",
    "image": "/images/120.PNG",
    "description": "High-capacity 80000mAh power bank with 35W PD fast charging and LED indicator."
  }
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
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
