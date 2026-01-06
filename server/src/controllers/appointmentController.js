// server/src/controllers/appointmentController.js

// ✅ Import Telegram Utility (Humne nodemailer hata diya hai)
const { sendAppointmentMail } = require("../utils/mailer");

// @desc    Send Appointment Request (via Telegram)
// @route   POST /api/appointment
// @access  Public
const sendAppointment = async (req, res) => {
  const { name, email, phone, address, message } = req.body;

  // 1. Basic Validation (Check karo sab kuch bhara hai ya nahi)
  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message:
        "Please fill in all required fields (Name, Email, Phone, Message)",
    });
  }

  // 2. 🚀 FAST RESPONSE: User ko turant Success message bhejo
  // Hum Telegram message bhejne ka wait nahi karenge, user ko wait karna pasand nahi hota.
  res.status(200).json({
    success: true,
    message: "Appointment request received! We will contact you soon.",
  });

  // 3. 📨 BACKGROUND TASK: Telegram Notification Bhejo
  // Ye background mein chalega, agar fail bhi hua to user ko error nahi dikhega.
  console.log("📨 Sending Telegram notification for:", name);

  // Ye function tumhare mailer.js file ko call karega
  sendAppointmentMail(req.body);
};

module.exports = { sendAppointment };
