const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // ✨ Magic Line: Ye khud best port dhund lega
  auth: {
    user: process.env.EMAIL_USER || process.env.ETH_USER,
    pass: process.env.EMAIL_PASS || process.env.ETH_PASS,
  },
});

async function sendAppointmentMail(appointment) {
  const { name, email, phone, address, message } = appointment;
  
  const senderEmail = process.env.EMAIL_USER || process.env.ETH_USER;
  const doctorEmail = process.env.DOCTOR_EMAIL;

  const mailOptions = {
    from: `"${name}" <${senderEmail}>`,
    to: doctorEmail,
    replyTo: email,
    subject: `New Appointment: ${name}`,
    html: `
      <h3>New Patient Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Problem:</strong> ${message}</p>
      <p><strong>Email:</strong> ${email}</p>
    `,
  };

  // Hum yahan ab 'await' return nahi karenge, bas promise return karenge
  return transporter.sendMail(mailOptions);
}

module.exports = { sendAppointmentMail };