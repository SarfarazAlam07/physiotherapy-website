const nodemailer = require('nodemailer');

// Is part ko dhyan se dekho, maine TLS aur Fallback add kiya hai
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',  // Hum direct Gmail host use karenge
  port: 587,               // Port 587 sabse safe hai Render ke liye
  secure: false,           // 587 ke liye ye hamesha false hona chahiye
  auth: {
    // Yahan maine check lagaya hai: Agar EMAIL_USER nahi mila to ETH_USER use karo
    user: process.env.EMAIL_USER || process.env.ETH_USER, 
    pass: process.env.EMAIL_PASS || process.env.ETH_PASS,
  },
  // 👇 YE SABSE ZAROORI HAI (Timeout fix karne ke liye)
  tls: {
    rejectUnauthorized: false, // Security check ko thoda loose karta hai connection ke liye
    ciphers: "SSLv3"
  }
});

// Verify connection
transporter.verify((err, success) => {
  if (err) {
    console.error('❌ Mail transporter error:', err);
  } else {
    console.log('✅ Mail transporter ready');
  }
});

async function sendAppointmentMail(appointment) {
  const { name, email, phone, address, message } = appointment;

  // Render par DOCTOR_EMAIL variable set hona chahiye
  const doctorEmail = process.env.DOCTOR_EMAIL; 
  const senderEmail = process.env.EMAIL_USER || process.env.ETH_USER;

  if (!doctorEmail || !senderEmail) {
    console.error("❌ Email variables missing in Environment!");
    throw new Error("Server misconfiguration: Missing email credentials");
  }

  const mailOptions = {
    from: `"${name}" <${senderEmail}>`,
    to: doctorEmail,
    replyTo: email,
    subject: `New Appointment Request — ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #2563eb;">New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <hr style="border: 0; border-top: 1px solid #eee;"/>
        <p><strong>Problem Description:</strong></p>
        <p style="background-color: #f9fafb; padding: 10px; border-radius: 5px;">${message}</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("📨 Email sent successfully:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw error;
  }
}

module.exports = { sendAppointmentMail };