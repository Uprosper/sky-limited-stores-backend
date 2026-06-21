const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const seedProducts = require('../data/seedProducts');

// GET /api/admin/seed?key=YOUR_SEED_SECRET_KEY
router.get('/seed', async (req, res) => {
  try {
    const { key } = req.query;

    if (!process.env.SEED_SECRET_KEY) {
      return res.status(500).json({ error: 'SEED_SECRET_KEY not set on server.' });
    }

    if (key !== process.env.SEED_SECRET_KEY) {
      return res.status(401).json({ error: 'Unauthorized.' });
    }

    await Product.deleteMany({});
    const inserted = await Product.insertMany(seedProducts);

    res.json({
      message: 'Seeded successfully',
      count: inserted.length,
    });
  } catch (err) {
    console.error('Seed error:', err);
    res.status(500).json({ error: err.message || 'Seeding failed.' });
  }
});

module.exports = router;
