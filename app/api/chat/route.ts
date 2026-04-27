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

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '');

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { message?: string; history?: ChatMessage[] };
    const message = body.message?.trim();

    if (!message) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    const apiKey = process.env.AI_API_KEY ?? process.env.OPENAI_API_KEY;
    const baseUrl = trimTrailingSlash(process.env.AI_API_BASE_URL ?? 'https://api.openai.com/v1');
    const model = process.env.AI_MODEL ?? process.env.OPENAI_MODEL ?? 'gpt-4.1-mini';

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            'Assistant is not configured yet. Set AI_API_KEY and AI_MODEL in your environment to enable live chat.'
        },
        { status: 500 }
      );
    }

    const history = Array.isArray(body.history) ? body.history.slice(-10) : [];

    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...history.map((item) => ({ role: item.role, content: item.content })),
      { role: 'user', content: message }
    ];

    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.6
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return NextResponse.json({ error: `Assistant request failed: ${errText}` }, { status: 502 });
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    const reply = data.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json({ error: 'Assistant returned no reply.' }, { status: 502 });
    }

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ error: 'Unexpected server error while chatting.' }, { status: 500 });
  }
}
