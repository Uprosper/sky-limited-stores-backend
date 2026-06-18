const express = require('express');
const { body, validationResult } = require('express-validator');
const Message = require('../models/Message');
const { requireAuth, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// POST /api/contact — submit a contact form message (public)
router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('A valid email is required'),
    body('message').trim().notEmpty().withMessage('Message cannot be empty'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    try {
      const { name, email, message } = req.body;
      await Message.create({ name, email, message });
      res.status(201).json({ message: 'Thanks for reaching out — we\'ll get back to you soon.' });
    } catch (err) {
      res.status(500).json({ error: 'Could not send message. Please try again.' });
    }
  }
);

// GET /api/contact — list all messages (admin only)
router.get('/', requireAuth, requireAdmin, async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json({ messages });
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch messages.' });
  }
});

// PUT /api/contact/:id/read — mark a message as read (admin only)
router.put('/:id/read', requireAuth, requireAdmin, async (req, res) => {
  try {
    const msg = await Message.findByIdAndUpdate(req.params.id, { read: true }, { new: true });
    if (!msg) {
      return res.status(404).json({ error: 'Message not found.' });
    }
    res.json({ message: msg });
  } catch (err) {
    res.status(400).json({ error: 'Could not update message.' });
  }
});

module.exports = router;
