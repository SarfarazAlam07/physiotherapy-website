// server/src/utils/mailer.js

// ✅ Humne Nodemailer hata diya hai.
// ✅ Ye code seedha Telegram API use karega (Jo kabhi fail nahi hota).

const sendAppointmentMail = async (appointment) => {
  const { name, email, phone, address, message } = appointment;

  // Render se tumhari keys uthayega
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("❌ Telegram Keys missing in Render Environment!");
    return;
  }

  // Message ka format
  const text = `
🏥 *NEW APPOINTMENT REQUEST* 🏥
-----------------------------
👤 *Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email}
📍 *Address:* ${address || "N/A"}
📝 *Problem:* ${message}
-----------------------------
🚀 _Sent from Website_
  `;

  try {
    // Telegram Server ko request bhejo
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown"
      })
    });

    const data = await response.json();
    
    if (data.ok) {
      console.log("✅ Telegram Notification Sent!");
    } else {
      console.error("❌ Telegram Error:", data);
    }

  } catch (error) {
    console.error("❌ Network Error:", error);
  }
};

module.exports = { sendAppointmentMail };