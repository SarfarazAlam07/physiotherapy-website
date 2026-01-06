// ✅ TELEGRAM NOTIFICATION SYSTEM
// Ye kabhi fail nahi hota kyunki ye simple internet request hai.

const sendAppointmentNotification = async (appointment) => {
  const { name, email, phone, message } = appointment;

  // Render Env Variables mein ye dono daal dena baad mein
  const botToken = process.env.TELEGRAM_BOT_TOKEN; 
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("❌ Telegram Token or Chat ID missing!");
    return;
  }

  // Message Design
  const text = `
🏥 *NEW APPOINTMENT REQUEST* 🏥
----------------------------
👤 *Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email}
📝 *Problem:* ${message}
----------------------------
🚀 _Sent from Mirani Physio Website_
  `;

  try {
    // Telegram API ko hit karo
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown" // Taaki Bold/Italic style dikhe
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

// Function ka naam wahi rakha hai taaki Controller mein change na karna pade
module.exports = { sendAppointmentMail: sendAppointmentNotification };