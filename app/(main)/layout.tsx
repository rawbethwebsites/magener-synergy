import LenisProvider from '@/components/providers/LenisProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <Navbar />
      {children}
      <Footer />
    </LenisProvider>
  );
}
