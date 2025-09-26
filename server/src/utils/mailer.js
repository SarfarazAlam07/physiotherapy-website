// src/utils/mailer.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : 587,
  secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// optional: verify transporter on start
transporter.verify((err, success) => {
  if (err) {
    console.error('Mail transporter error:', err);
  } else {
    console.log('✅ Mail transporter ready');
  }
});

async function sendAppointmentMail(appointment) {
  const { name, email, phone, address, message } = appointment;

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: process.env.DOCTOR_EMAIL,
    replyTo: email,
    subject: `New Appointment Request — ${name}`,
    html: `
      <h3>New Appointment Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Problem:</strong><br/> ${message}</p>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
}

module.exports = { sendAppointmentMail };
