// server/src/utils/mailer.js
const sendAppointmentMail = async (appointment) => {
  const { name, email, phone, address, message } = appointment;

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("❌ Telegram Keys missing!");
    return;
  }

  const text = `
🏥 *NEW APPOINTMENT* 🏥
👤 Name: ${name}
📞 Phone: ${phone}
📝 Problem: ${message}
  `;

  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: text })
    });
    console.log("✅ Telegram Sent!");
  } catch (error) {
    console.error("❌ Telegram Error:", error);
  }
};

module.exports = { sendAppointmentMail };