const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const { name, email, phone, address, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ success: false, msg: "All fields required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.ETH_HOST,
      port: process.env.ETH_PORT,
      auth: {
        user: process.env.ETH_USER,
        pass: process.env.ETH_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.ETH_USER}>`, // Ethereal sender
      to: process.env.DOCTOR_EMAIL,              // Doctor email (real)
      replyTo: email,                             // Patient email
      subject: "New Appointment Request",
      html: `
        <h3>New Appointment Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Problem:</strong> ${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info)); 
    res.status(200).json({ success: true, msg: "Appointment sent!", previewUrl: nodemailer.getTestMessageUrl(info) });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    res.status(500).json({ success: false, msg: "Failed to send email", error: error.message });
  }
});

module.exports = router;
