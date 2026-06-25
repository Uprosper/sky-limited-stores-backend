const express = require('express');
const Product = require('../models/Product');
const { requireAuth, requireAdmin } = require('../middleware/auth');
const router = express.Router();

// GET /api/products
router.get('/', async (req, res) => {
  try {
    const { category, tag } = req.query;
    const filter = { active: true };
    if (category) filter.category = category;
    if (tag) filter.tag = tag;
    const products = await Product.find(filter).sort({ createdAt: 1 });
    res.json({ products });
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch products.' });
  }
});

// GET /api/products/:id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product || !product.active) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.json({ product });
  } catch (err) {
    res.status(400).json({ error: 'Invalid product id.' });
  }
});

// PUT /api/products/:id (admin only)
router.put('/:id', requireAuth, requireAdmin, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) return res.status(404).json({ error: 'Product not found.' });
    res.json({ product });
  } catch (err) {
    res.status(400).json({ error: 'Could not update product.' });
  }
});

// DELETE /api/products/:id (admin only)
router.delete('/:id', requireAuth, requireAdmin, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, { active: false }, { new: true });
    if (!product) return res.status(404).json({ error: 'Product not found.' });
    res.json({ message: 'Product deactivated.' });
  } catch (err) {
    res.status(400).json({ error: 'Could not delete product.' });
  }
});

module.exports = router;
