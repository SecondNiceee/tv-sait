import { NextRequest, NextResponse } from 'next/server';

// Обработка preflight
export async function OPTIONS() {
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return new Response(null, { status: 200, headers });
}

export async function POST(request: NextRequest) {
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Поле "message" обязательно и должно быть строкой' },
        { status: 400, headers }
      );
    }

    // Основной бот
    const token = "7752212739:AAFuqn5tnrYaF8yG4ybEBgGlR2grJXomP1E";
    const chat_id = "2144832745";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Второй бот (резервный)
    const sec_token = "8068546933:AAFw-MSDl4JqYt8_7iehtMU40soJxdOPxyc";
    const sec_chat_id = "5620861091";
    const sec_url = `https://api.telegram.org/bot${sec_token}/sendMessage`;

    // Отправляем в основной бот
    fetch(sec_url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: sec_chat_id, text: message }),
    }).catch(err => console.error('Не удалось отправить во второй бот:', err));

    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id, text: message }),
    });

    // Отправляем в резервный бот (не блокируем ответ)


    return NextResponse.json(
      { ok: true, result: "Всё файн"},
      { status: 200, headers }
    );
  } catch (error) {
    console.error('Ошибка в API:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500, headers }
    );
  }
}