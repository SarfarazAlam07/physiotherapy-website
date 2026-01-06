const nodemailer = require("nodemailer");

// ✅ FIX 1: 'service: gmail' use karo (Host/Port ka jhanjhat khatam)
// Aur TLS fix add kiya hai taaki Render block na kare
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ETH_USER, // Ensure karo ye Render Env Vars mein ho
    pass: process.env.ETH_PASS, // App Password
  },
  tls: {
    rejectUnauthorized: false // ⚠️ Ye line Cloud Server timeout rokti hai
  }
});

// @desc    Send Appointment Email
// @route   POST /api/appointment
// @access  Public
const sendAppointment = async (req, res) => {
  const { name, email, phone, address, message } = req.body;

  // 1. Basic Validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields (Name, Email, Phone, Message)",
    });
  }

  // 2. 🚀 MAGIC TRICK: Pehle hi Success Response bhej do!
  // User ko wait mat karao email ke liye.
  res.status(200).json({
    success: true,
    message: "Appointment request received! We will contact you soon.",
  });

  // 3. Email Logic (Ab ye Background mein chalega)
  const mailOptions = {
    from: `"${name}" <${process.env.ETH_USER}>`,
    to: process.env.DOCTOR_EMAIL,
    replyTo: email,
    subject: `New Appointment Request from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #2c3e50;">New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address || "Not Provided"}</p>
        <div style="background-color: #f9f9f9; padding: 10px; margin-top: 10px;">
          <strong>Problem Description:</strong>
          <p>${message}</p>
        </div>
      </div>
    `,
  };

  // 4. Send Mail (No await needed for response, just logging)
  transporter.sendMail(mailOptions)
    .then(info => {
      console.log(`✅ Email sent successfully to Doctor! ID: ${info.messageId}`);
    })
    .catch(error => {
      console.error("❌ Background Email Error:", error);
      // Note: User ko already success mil chuka hai, ye error humare liye hai
    });
};

module.exports = { sendAppointment };