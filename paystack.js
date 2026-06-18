const axios = require('axios');
const crypto = require('crypto');

const PAYSTACK_BASE_URL = 'https://api.paystack.co';

function paystackClient() {
  return axios.create({
    baseURL: PAYSTACK_BASE_URL,
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
  });
}

// Initializes a Paystack transaction and returns the authorization URL + reference
async function initializeTransaction({ email, amount, reference, callbackUrl, metadata }) {
  const client = paystackClient();

  // Paystack expects amounts in the smallest currency unit (e.g. kobo for NGN)
  const amountInKobo = Math.round(amount * 100);

  const response = await client.post('/transaction/initialize', {
    email,
    amount: amountInKobo,
    reference,
    callback_url: callbackUrl,
    metadata,
  });

  return response.data.data; // { authorization_url, access_code, reference }
}

// Verifies a transaction status directly with Paystack (used as a fallback to webhooks)
async function verifyTransaction(reference) {
  const client = paystackClient();
  const response = await client.get(`/transaction/verify/${reference}`);
  return response.data.data; // includes status: 'success' | 'failed' | ...
}

// Validates that a webhook request actually came from Paystack
function isValidWebhookSignature(rawBody, signatureHeader) {
  if (!signatureHeader) return false;

  const hash = crypto
    .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY)
    .update(rawBody)
    .digest('hex');

  return hash === signatureHeader;
}

module.exports = {
  initializeTransaction,
  verifyTransaction,
  isValidWebhookSignature,
};
