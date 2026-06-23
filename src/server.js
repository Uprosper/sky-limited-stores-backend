const path = require('path');
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
// const adminSeedRoute = require('./routes/admin');
const contactRoutes = require('./routes/contact');
const webhookRoutes = require('./routes/webhooks');
// const adminSeedRoute = require('./routes/admin');
const adminSeedRoute = require('./routes/admin');

const app = express();

// --- Core middleware ---

// Paystack webhooks need access to the raw request body to verify the signature,
// so this route is registered BEFORE the JSON body parser, with its own raw parser.
app.use(
  '/api/webhooks',
  express.raw({ type: 'application/json' }),
  (req, res, next) => {
    req.rawBody = req.body; // Buffer, needed for signature check
    try {
      req.body = JSON.parse(req.body.toString('utf8'));
    } catch (e) {
      req.body = {};
    }
    next();
  },
  webhookRoutes
);

app.use(express.json());

const allowedOrigins = (process.env.CORS_ORIGIN || '*')
  .split(',')
  .map((o) => o.trim());

app.use(
  cors({
    origin: allowedOrigins.includes('*') ? '*' : allowedOrigins,
  })
);
app.use(express.static(path.join(__dirname, '../public')));

// Basic rate limiting to slow down brute-force attempts on auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please try again later.' },
});
app.use('/api/auth', authLimiter);

// --- Routes ---
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminSeedRoute);

// --- 404 handler ---
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found.' });
});

// --- Global error handler ---
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Server error.' });
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
