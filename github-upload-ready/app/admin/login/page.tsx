'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      router.push('/admin');
      router.refresh();
    } else {
      setError(data.error || 'Login failed');
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0a1020] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <img src="/MAGENER.png" alt="Magener Synergy" className="h-10 w-auto object-contain mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-white mb-1">Admin Dashboard</h1>
          <p className="text-slate-400 text-sm">Sign in to manage your website content</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#131c2e] border border-[#1e2d47] rounded-2xl p-8 space-y-5">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="admin@magenersynergy.org"
              className="w-full bg-[#0a1020] border border-[#1e2d47] rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#01afd1] transition-colors"
            />
          </div>
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full bg-[#0a1020] border border-[#1e2d47] rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#01afd1] transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#01afd1] hover:bg-[#018cab] disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
