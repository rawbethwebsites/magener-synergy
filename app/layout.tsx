import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { DynamicFavicon } from '@/components/ui/DynamicFavicon';

const inter = Inter({ subsets: ['latin'], variable: '--font-geist-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Magener Synergy | Premium Travel & Education Consulting',
  description:
    'International tour packages, visa assistance, study abroad support, and corporate travel services from Abuja, Nigeria. Trusted by 5,000+ travelers.',
  keywords: [
    'travel agency Nigeria',
    'visa assistance Abuja',
    'study abroad Nigeria',
    'tour packages Africa',
    'UK visa Nigeria',
  ],
  openGraph: {
    title: 'Magener Synergy',
    description: 'The World, Curated for You.',
    url: 'https://magenersynergy.org',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
    icons: { icon: '/MAGENER.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} bg-brand-black text-brand-white antialiased`}
      >
        <DynamicFavicon />
        {children}
      </body>
    </html>
  );
}
