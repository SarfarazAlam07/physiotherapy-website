const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.ETH_HOST || "smtp-relay.brevo.com", // Brevo ka server
  port: 587, // Standard Port
  secure: false, // 587 ke liye false
  auth: {
    user: process.env.ETH_USER, // Brevo Email
    pass: process.env.ETH_PASS, // Brevo SMTP Key
  },
  tls: {
    rejectUnauthorized: false, // Connection smooth rakhne ke liye
  },
});

// @desc    Send Appointment Email
// @route   POST /api/appointment
// @access  Public
const sendAppointment = async (req, res) => {
  const { name, email, phone, address, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields",
    });
  }

  // 🚀 User ko turant Success bhejo
  res.status(200).json({
    success: true,
    message: "Appointment request received! We will contact you soon.",
  });

  // Background mein Email bhejo
  const mailOptions = {
    from: `"${name}" <${process.env.ETH_USER}>`, // Sender: Brevo Email
    to: process.env.DOCTOR_EMAIL, // Receiver: Doctor
    replyTo: email, // Reply karne par Patient ka email aaye
    subject: `New Appointment: ${name}`,
    html: `
      <h3>New Appointment Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  transporter
    .sendMail(mailOptions)
    .then((info) => console.log(`✅ Email sent via Brevo: ${info.messageId}`))
    .catch((err) => console.error("❌ Brevo Error:", err));
};

module.exports = { sendAppointment };
