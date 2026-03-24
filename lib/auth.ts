import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'magener-admin-secret-change-in-production'
);

const COOKIE_NAME = 'admin_token';
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function signAdminToken(email: string): Promise<string> {
  return new SignJWT({ email, role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(JWT_SECRET);
}

export async function verifyAdminToken(token: string) {
  const { payload } = await jwtVerify(token, JWT_SECRET);
  return payload;
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  try {
    return await verifyAdminToken(token);
  } catch {
    return null;
  }
}

export { COOKIE_NAME, MAX_AGE };
