import About from '@/components/sections/About';
import { PageHeader } from '@/components/ui/PageHeader';

export default function AboutPage() {
  return (
    <main className="bg-brand-black text-brand-white min-h-screen">
      <PageHeader 
        title="Our Story"
        subtitle="Discover how Magener Synergy grew into Abuja's premier luxury travel and international education consultancy."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
        bgImage="/about-family-tour.png"
      />
      <About />
    </main>
  );
}
