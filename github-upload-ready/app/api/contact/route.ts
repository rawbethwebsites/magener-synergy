import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Save to database
    try {
      await prisma.inquiry.create({
        data: { name, email, phone: phone || null, service: service || null, message },
      });
    } catch (dbErr) {
      console.warn('DB save failed (DB may not be set up yet):', dbErr);
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const text = `🚀 New Lead: Magener Synergy
    
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${message}`;

    if (!botToken || !chatId) {
      console.warn("Telegram credentials missing in ENV. Request payload intercepted and logged successfully.");
      console.log(text);
      return NextResponse.json({ success: true, simulated: true });
    }

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Telegram API responded with HTTP ${response.status}: ${errText}`);
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("Error routing lead to Telegram:", msg);
    return NextResponse.json({ success: false, error: "Failed to dispatch message to broker" }, { status: 500 });
  }
}
