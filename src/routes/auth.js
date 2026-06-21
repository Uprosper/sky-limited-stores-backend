const express = require('express');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const { requireAuth } = require('../middleware/auth');
const router = express.Router();

// Helper to sign a JWT for a given user id
function signToken(userId) {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
}

// Helper to send an email via Brevo's REST API
async function sendBrevoEmail({ to, toName, subject, html }) {
  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'api-key': process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: {
        name: 'Sky Limited Stores',
        email: process.env.BREVO_SENDER_EMAIL, // must be a verified sender in Brevo
      },
      to: [{ email: to, name: toName }],
      subject,
      htmlContent: html,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Brevo send failed (${response.status}): ${errorBody}`);
  }

  return response.json();
}

// --- POST /api/auth/signup ---
router.post(
  '/signup',
  [
    body('name').trim().notEmpty().withMessage('Name is required.'),
    body('email').isEmail().withMessage('A valid email is required.'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters.'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }
    try {
      const { name, email, password } = req.body;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ error: 'An account with this email already exists.' });
      }
      const user = await User.create({ name, email, password });
      const token = signToken(user._id);
      res.status(201).json({ token, user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Could not create account.' });
    }
  }
);

// --- POST /api/auth/login ---
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('A valid email is required.'),
    body('password').notEmpty().withMessage('Password is required.'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password.' });
      }
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ error: 'Invalid email or password.' });
      }
      const token = signToken(user._id);
      res.json({ token, user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Could not log in.' });
    }
  }
);

// --- GET /api/auth/me ---
router.get('/me', requireAuth, async (req, res) => {
  res.json({ user: req.user });
});

// --- POST /api/auth/forgot-password ---
router.post(
  '/forgot-password',
  [body('email').isEmail().withMessage('A valid email is required.')],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }
    try {
      const { email } = req.body;
      const user = await User.findOne({ email });

      // Always respond the same way, whether or not the email exists,
      // so this endpoint can't be used to check which emails are registered.
      const genericResponse = {
        message: 'If an account with that email exists, a reset link has been sent.',
      };

      if (!user) {
        return res.json(genericResponse);
      }

      const token = crypto.randomBytes(32).toString('hex');
      user.resetToken = token;
      user.resetTokenExpiry = Date.now() + 60 * 60 * 1000; // 1 hour
      await user.save();

      const resetUrl = `${process.env.FRONTEND_URL}/reset-password.html?token=${token}`;

      try {
        await sendBrevoEmail({
          to: user.email,
          toName: user.name,
          subject: 'Reset your Sky Limited Stores password',
          html: `
            <p>Hi ${user.name},</p>
            <p>We received a request to reset your password. Click the link below to set a new one. This link expires in 1 hour.</p>
            <p><a href="${resetUrl}">${resetUrl}</a></p>
            <p>If you didn't request this, you can safely ignore this email.</p>
          `,
        });
      } catch (emailErr) {
        // Log the real error for debugging, but still return the generic
        // response so we don't leak whether the email send failed or the
        // account simply doesn't exist.
        console.error('Brevo email send error:', emailErr);
      }

      res.json(genericResponse);
    } catch (err) {
      console.error('Forgot password error:', err);
      res.status(500).json({ error: 'Could not process request.' });
    }
  }
);

// --- POST /api/auth/reset-password ---
router.post(
  '/reset-password',
  [
    body('token').notEmpty().withMessage('Reset token is required.'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters.'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }
    try {
      const { token, password } = req.body;
      const user = await User.findOne({
        resetToken: token,
        resetTokenExpiry: { $gt: Date.now() },
      });

      if (!user) {
        return res.status(400).json({ error: 'Reset link is invalid or has expired.' });
      }

      user.password = password; // pre-save hook will hash it
      user.resetToken = null;
      user.resetTokenExpiry = null;
      await user.save();

      res.json({ message: 'Password updated successfully. You can now log in.' });
    } catch (err) {
      console.error('Reset password error:', err);
      res.status(500).json({ error: 'Could not reset password.' });
    }
  }
);

module.exports = router;
