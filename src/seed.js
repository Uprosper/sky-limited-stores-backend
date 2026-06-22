'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

// ── Product Schema ─────────────────────────────
const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    price: { type: Number, required: true },
    oldPrice: { type: Number, default: null },
    image: { type: String, default: '' },
    tag: { type: String, default: '' },
    stock: { type: Number, default: 100 },
    active: { type: Boolean, default: true },
    autodsId: { type: String, default: null },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model('Product', ProductSchema);

// ── DEFAULT IMAGES (IMPORTANT FIX) ─────────────────────────────
const defaultImages = {
  Audio: '/images/audio.jpg',
  Wearables: '/images/wearables.jpg',
  Accessories: '/images/accessories.jpg',
  'Smart Home': '/images/smart-home.jpg',
  Tools: '/images/tools.jpg',
  Beauty: '/images/beauty.jpg',
  Bags: '/images/bags.jpg',
  Shoes: '/images/shoes.jpg',
  Watches: '/images/watches.jpg',
  Clothes: '/images/clothes.jpg',
};

// ── PRODUCTS ─────────────────────────────
const products = [
  {
    name: 'X9 Wireless Bluetooth 5.0 Earphone',
    category: 'Audio',
    description: 'Transparent design wireless earbuds with charging case.',
    price: 4044.6,
    oldPrice: 2889,
    tag: 'New',
    stock: 90,
  },
  {
    name: 'Wireless Ear Clip On Earphone Bluetooth',
    category: 'Audio',
    description: 'Open-ear clip design for sports and comfort.',
    price: 3017.81,
    oldPrice: 3828.78,
    tag: 'Sale',
    stock: 65,
  },
  {
    name: 'Bluetooth 5.4 Wireless Earphone',
    category: 'Audio',
    description: 'High bass TWS earbuds with noise reduction.',
    price: 3672,
    oldPrice: 3512.23,
    tag: 'New',
    stock: 55,
  },

  {
    name: 'Premium Smart Watch',
    category: 'Wearables',
    description: 'Fitness tracking smartwatch with notifications.',
    price: 11176.2,
    oldPrice: 7983,
    tag: 'Sale',
    stock: 35,
  },
  {
    name: 'VR Glasses Virtual Reality Headset',
    category: 'Wearables',
    description: 'Immersive VR headset for mobile devices.',
    price: 13279,
    oldPrice: 9485,
    tag: '',
    stock: 20,
  },

  {
    name: 'USB Card Reader 4-in-1 Type-C',
    category: 'Tools',
    description: 'Multi-format memory card reader.',
    price: 2543.8,
    oldPrice: 1817,
    tag: '',
    stock: 100,
  },
  {
    name: 'Electronics DIY Kit',
    category: 'Tools',
    description: 'Starter kit for electronics projects.',
    price: 18082.4,
    oldPrice: 12916,
    tag: 'Hot',
    stock: 30,
  },

  {
    name: "Men's Mini Shaver",
    category: 'Beauty',
    description: 'Portable rechargeable grooming shaver.',
    price: 5594.4,
    oldPrice: 3996,
    tag: 'Sale',
    stock: 45,
  },

  {
    name: 'Laptop Backpack',
    category: 'Bags',
    description: 'Durable travel backpack with compartments.',
    price: 13119.4,
    oldPrice: 9371,
    tag: '',
    stock: 50,
  },

  {
    name: 'Men Sneakers Classic',
    category: 'Shoes',
    description: 'Comfortable casual sneakers.',
    price: 13885.2,
    oldPrice: 9918,
    tag: '',
    stock: 50,
  },

  {
    name: 'Luxury Quartz Watch',
    category: 'Watches',
    description: 'Elegant wrist watch for men and women.',
    price: 4614.4,
    oldPrice: 3296,
    tag: '',
    stock: 50,
  },

  {
    name: 'Smart Home Desktop Clock',
    category: 'Smart Home',
    description: 'Minimalist LED desk clock.',
    price: 2695,
    oldPrice: 1925,
    tag: '',
    stock: 60,
  },
];

// ── SEED FUNCTION ─────────────────────────────
async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    await Product.deleteMany({});
    console.log('🗑 Cleared old products');

    const productsWithImages = products.map((p) => ({
      ...p,
      image:
        p.image && p.image.trim() !== ''
          ? p.image
          : defaultImages[p.category] || '/images/default.jpg',
      active: true,
    }));

    const inserted = await Product.insertMany(productsWithImages);

    console.log(`🌱 Inserted ${inserted.length} products`);

    inserted.forEach((p) =>
      console.log(`• [${p.category}] ${p.name} — ₦${p.price}`)
    );

    await mongoose.disconnect();
    console.log('✅ Done');
  } catch (err) {
    console.error('❌ Seed failed:', err.message);
  }
}

seed();
