import { NextResponse } from 'next/server';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const SYSTEM_PROMPT = `You are Nova, the live customer assistant for Magener Synergy, a premium travel and education consulting company in Nigeria.

Your job:
- Help customers with tours, visa support, study-abroad guidance, and corporate travel planning.
- Be concise, warm, and practical.
- Ask clarifying questions when details are missing.
- Never invent approvals, prices, or guarantees; present them as estimates unless confirmed.
- Always end with a clear next step (e.g., “Share destination + travel month so I can guide you”).`;

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { message?: string; history?: ChatMessage[] };
    const message = body.message?.trim();

    if (!message) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    const model = process.env.OPENAI_MODEL ?? 'gpt-4.1-mini';

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            'Assistant is not configured yet. Set OPENAI_API_KEY in your environment to enable live chat.'
        },
        { status: 500 }
      );
    }

    const history = Array.isArray(body.history) ? body.history.slice(-10) : [];

    const input = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...history.map((item) => ({ role: item.role, content: item.content })),
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        input,
        temperature: 0.6
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return NextResponse.json({ error: `Assistant request failed: ${errText}` }, { status: 502 });
    }

    const data = (await response.json()) as {
      output_text?: string;
    };

    const reply = data.output_text?.trim();

    if (!reply) {
      return NextResponse.json({ error: 'Assistant returned no reply.' }, { status: 502 });
    }

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ error: 'Unexpected server error while chatting.' }, { status: 500 });
  }
}
