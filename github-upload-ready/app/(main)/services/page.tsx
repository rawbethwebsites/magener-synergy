import Services from '@/components/sections/Services';
import { PageHeader } from '@/components/ui/PageHeader';

export default function ServicesPage() {
  return (
    <main className="bg-brand-black text-brand-white min-h-screen">
      <PageHeader 
        title="Premium Services"
        subtitle="From seamless visa processing to luxury honeymoon packages, we manage every detail of your global journey."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />
      <Services />
    </main>
  );
}
