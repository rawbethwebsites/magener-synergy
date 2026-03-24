import VisaSection from '@/components/sections/VisaSection';
import { PageHeader } from '@/components/ui/PageHeader';

export default function VisaPage() {
  return (
    <main className="bg-brand-surface text-brand-white min-h-screen">
      <PageHeader 
        title="Visa & Study Abroad"
        subtitle="Navigate international borders with confidence. Our experts boast a 98% approval success rate globally."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Visa Services' }]}
        bgImage="/visa-graphics.png"
      />
      <VisaSection />
    </main>
  );
}
