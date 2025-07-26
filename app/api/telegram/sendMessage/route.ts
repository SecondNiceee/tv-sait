import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const {message} = await request.json();
    const method = request.method;
    if (method !== "POST"){
      return NextResponse.json({message : "Не указан method"}, {status : 400})
    }
    if (!message){
      return NextResponse.json({message : "Не указан message"}, {status : 400})
    }
    // Получаем токен из переменных окружения
    const token = "7752212739:AAFuqn5tnrYaF8yG4ybEBgGlR2grJXomP1E"
    const chat_id = "2144832745"

    // Формируем URL для Telegram API
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Отправляем запрос в Telegram
    const telegramRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id, text : message }),
    });

    const data = await telegramRes.json();

    if (!telegramRes.ok) {
      return NextResponse.json({ error: data.description || 'Telegram API error' }, { status: telegramRes.status });
    }

    return NextResponse.json({ ok: true, result: data.result });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
