export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { first_name, last_name, email, phone_number, message } = req.body;

  const botToken = '7887053531:AAG_FcUVLNmoxCg06zK6CtARkNhTGUlqbcE';
  const chatId = 352007711;

  // Agar botToken yoki chatId yo'q bo'lsa, xatolik chiqaramiz
  if (!botToken || !chatId) {
    console.error('❌ TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID yo‘q!');
    return res
      .status(500)
      .json({ error: 'Serverda xatolik: Token yoki Chat ID yo‘q' });
  }

  const text = `
  📩 Yangi xabar keldi!
  👤 Ism: ${first_name} ${last_name}
  📧 Email: ${email}
  📞 Telefon: ${phone_number}
  📝 Xabar: ${message}
    `;

  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'Markdown',
      }),
    });

    const result = await response.json();
    console.log('✅ Telegram javobi:', result);

    if (!result.ok) {
      console.error('❌ Telegram xatosi:', result);
      throw new Error(result.description);
    }

    res.status(200).json({ success: true, message: 'Xabar yuborildi!' });
  } catch (error) {
    console.error('❌ API error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}
