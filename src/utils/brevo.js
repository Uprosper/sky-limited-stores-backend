const axios = require('axios');

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || 'noreply@skylimitedstores.com';
const ADMIN_EMAIL = 'uchennamiracle89@gmail.com';

async function sendOrderConfirmationEmail(order, user) {
  try {
    // Format the delivery location info
    const locationInfo = order.shippingAddress.latitude && order.shippingAddress.longitude
      ? `\n\n📍 Delivery Location:\nLatitude: ${order.shippingAddress.latitude}\nLongitude: ${order.shippingAddress.longitude}\nGoogle Maps: https://maps.google.com/?q=${order.shippingAddress.latitude},${order.shippingAddress.longitude}`
      : '\n\n📍 Delivery Location: Address only (GPS location not captured)';

    const itemsList = order.items
      .map(item => `- ${item.name} (₦${item.price.toLocaleString('en-NG')}) × ${item.quantity} = ₦${(item.price * item.quantity).toLocaleString('en-NG')}`)
      .join('\n');

    const orderDate = new Date(order.createdAt).toLocaleDateString('en-NG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // ── EMAIL TO CUSTOMER ──
    const customerEmailHTML = `
      <html>
        <body style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <h2 style="color: #00d4ff;">Order Confirmation</h2>
          <p>Hi ${order.shippingAddress.fullName},</p>
          <p>Thank you for your order! Your payment has been received and confirmed.</p>
          
          <h3 style="color: #00d4ff;">Order Details</h3>
          <p><strong>Order ID:</strong> ${order._id}</p>
          <p><strong>Order Date:</strong> ${orderDate}</p>
          <p><strong>Order Total:</strong> ₦${order.totalAmount.toLocaleString('en-NG', {minimumFractionDigits: 2})}</p>
          
          <h3 style="color: #00d4ff;">Items Ordered</h3>
          <pre style="background: #f5f5f5; padding: 10px; border-radius: 5px;">${itemsList}</pre>
          
          <h3 style="color: #00d4ff;">Delivery Address</h3>
          <p>
            ${order.shippingAddress.fullName}<br>
            ${order.shippingAddress.address}<br>
            ${order.shippingAddress.city}, ${order.shippingAddress.state}<br>
            ${order.shippingAddress.country}<br>
            Phone: ${order.shippingAddress.phone}
          </p>

          <h3 style="color: #00d4ff;">Delivery Location</h3>
          ${order.shippingAddress.latitude && order.shippingAddress.longitude
            ? `<p>✓ GPS Location captured successfully</p>
               <p><strong>Coordinates:</strong> ${order.shippingAddress.latitude.toFixed(4)}, ${order.shippingAddress.longitude.toFixed(4)}</p>
               <p><a href="https://maps.google.com/?q=${order.shippingAddress.latitude},${order.shippingAddress.longitude}" style="color: #00d4ff;">View on Google Maps →</a></p>`
            : `<p>✗ GPS Location not available</p>`
          }
          
          <h3 style="color: #00d4ff;">What's Next?</h3>
          <p>Your order is being processed. You'll receive a tracking update within 24 hours.</p>
          <p>Questions? Reply to this email or contact us at the store.</p>
          
          <p style="margin-top: 30px; color: #999; font-size: 12px;">© 2026 Sky Limited Stores. All rights reserved.</p>
        </body>
      </html>
    `;

    // ── EMAIL TO ADMIN (YOU) ──
    const adminEmailHTML = `
      <html>
        <body style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <h2 style="color: #00d4ff;">🎉 New Order Received!</h2>
          
          <h3 style="color: #00d4ff;">Customer Info</h3>
          <p>
            <strong>Name:</strong> ${order.shippingAddress.fullName}<br>
            <strong>Email:</strong> ${user.email}<br>
            <strong>Phone:</strong> ${order.shippingAddress.phone}
          </p>

          <h3 style="color: #00d4ff;">Delivery Address</h3>
          <p>
            ${order.shippingAddress.address}<br>
            ${order.shippingAddress.city}, ${order.shippingAddress.state}<br>
            ${order.shippingAddress.country}
          </p>

          <h3 style="color: #00d4ff;">📍 GPS Location (FOR DISPATCH RIDER)</h3>
          ${order.shippingAddress.latitude && order.shippingAddress.longitude
            ? `<p style="background: #f0fff4; padding: 15px; border-left: 4px solid #00d4ff; border-radius: 5px;">
                 <strong>Latitude:</strong> ${order.shippingAddress.latitude}<br>
                 <strong>Longitude:</strong> ${order.shippingAddress.longitude}<br>
                 <a href="https://maps.google.com/?q=${order.shippingAddress.latitude},${order.shippingAddress.longitude}" style="color: #00d4ff; text-decoration: none;">📍 Open Google Maps</a>
               </p>`
            : `<p style="background: #fff3cd; padding: 15px; border-left: 4px solid #ff9800; border-radius: 5px;">
                 ⚠️ GPS Location not captured - Use manual address only
               </p>`
          }

          <h3 style="color: #00d4ff;">Order Items</h3>
          <pre style="background: #f5f5f5; padding: 10px; border-radius: 5px;">${itemsList}</pre>

          <h3 style="color: #00d4ff;">Order Summary</h3>
          <p>
            <strong>Order ID:</strong> ${order._id}<br>
            <strong>Total Amount:</strong> ₦${order.totalAmount.toLocaleString('en-NG', {minimumFractionDigits: 2})}<br>
            <strong>Payment Status:</strong> Paid ✓<br>
            <strong>Order Date:</strong> ${orderDate}
          </p>

          <p style="margin-top: 20px; color: #ff6b6b; font-weight: bold;">ACTION: Contact dispatch rider and provide the GPS coordinates above!</p>
        </body>
      </html>
    `;

    // Send to customer
    await sendEmail({
      to: user.email,
      subject: `Order Confirmed - Sky Limited Stores (Order #${order._id})`,
      html: customerEmailHTML,
    });

    // Send to admin
    await sendEmail({
      to: ADMIN_EMAIL,
      subject: `🎉 New Order #${order._id} - Ready for Dispatch`,
      html: adminEmailHTML,
    });

    console.log(`✓ Order confirmation emails sent for order ${order._id}`);
    return true;
  } catch (err) {
    console.error('Error sending order confirmation email:', err);
    return false;
  }
}

async function sendEmail({ to, subject, html }) {
  try {
    const response = await axios.post(
      BREVO_API_URL,
      {
        sender: { email: BREVO_SENDER_EMAIL, name: 'Sky Limited Stores' },
        to: [{ email: to }],
        subject: subject,
        htmlContent: html,
      },
      {
        headers: {
          'api-key': BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error('Brevo API error:', err.response?.data || err.message);
    throw err;
  }
}

module.exports = { sendOrderConfirmationEmail, sendEmail };
