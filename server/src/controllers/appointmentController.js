const nodemailer = require("nodemailer");

// Configure Transporter (Reuse connection)
const transporter = nodemailer.createTransport({
  host: process.env.ETH_HOST || "smtp.gmail.com",
  port: process.env.ETH_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.ETH_USER, // Tumhara email
    pass: process.env.ETH_PASS, // Tumhara app password
  },
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
      message:
        "Please fill in all required fields (Name, Email, Phone, Message)",
    });
  }

  try {
    // 2. Email Content
    const mailOptions = {
      from: `"${name}" <${process.env.ETH_USER}>`, // Sender address
      to: process.env.DOCTOR_EMAIL, // Receiver (Doctor)
      replyTo: email, // Reply to patient
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

    // 3. Send Mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Appointment request sent successfully!",
    });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error: Could not send email. Please try again later.",
    });
  }
};

module.exports = { sendAppointment };
