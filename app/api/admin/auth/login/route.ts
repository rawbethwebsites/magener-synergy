import { NextRequest, NextResponse } from 'next/server';
import { signAdminToken, COOKIE_NAME, MAX_AGE } from '@/lib/auth';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    return NextResponse.json(
      { error: 'Admin credentials not configured. Set ADMIN_EMAIL and ADMIN_PASSWORD in .env.local' },
      { status: 500 }
    );
  }

  if (email !== adminEmail || password !== adminPassword) {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
  }

  const token = await signAdminToken(email);

  const response = NextResponse.json({ success: true });
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: MAX_AGE,
    path: '/',
  });

  return response;
}
