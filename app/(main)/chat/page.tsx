'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/Button';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        'Hi, I’m Nova — Magener’s assistant. I can help with tours, visa support, study abroad, and travel planning. What do you need today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMessage: ChatMessage = { role: 'user', content: trimmed };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          history: messages.slice(1)
        })
      });

      const data = (await res.json()) as { reply?: string; error?: string };

      if (!res.ok || !data.reply) {
        throw new Error(data.error || 'Failed to get assistant reply.');
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply as string }]);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-brand-black pt-36 pb-20">
      <section className="container mx-auto px-6 max-w-4xl">
        <div className="mb-8 text-center">
          <p className="text-brand-gold uppercase tracking-[0.3em] text-xs mb-3">Live Assistant</p>
          <h1 className="font-display text-4xl md:text-5xl text-brand-white mb-3">Chat with Nova</h1>
          <p className="text-brand-silver max-w-2xl mx-auto">
            Ask anything about travel packages, visa applications, study-abroad routes, and booking support.
          </p>
        </div>

        <div className="rounded-2xl border border-brand-border bg-brand-charcoal/50 backdrop-blur-sm p-4 md:p-6">
          <div className="h-[52vh] overflow-y-auto space-y-4 pr-1">
            {messages.map((m, i) => (
              <div key={`${m.role}-${i}`} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm md:text-base leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-brand-gold text-brand-black'
                      : 'bg-brand-black/70 text-brand-white border border-brand-border'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl px-4 py-3 text-sm md:text-base bg-brand-black/70 text-brand-silver border border-brand-border">
                  Nova is typing...
                </div>
              </div>
            )}
          </div>

          {error && (
            <div className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 text-red-200 px-4 py-3 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSend} className="mt-5 flex gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 bg-brand-black/70 border border-brand-border rounded-xl px-4 py-3 text-brand-white placeholder:text-brand-silver/70 focus:outline-none focus:border-brand-gold"
            />
            <Button type="submit" variant="gold" size="default" disabled={loading || !input.trim()}>
              Send
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
