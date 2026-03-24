import Destinations from '@/components/sections/Destinations';
import { PageHeader } from '@/components/ui/PageHeader';

export default function DestinationsPage() {
  return (
    <main className="bg-brand-charcoal text-brand-white min-h-screen">
      <PageHeader 
        title="Global Destinations"
        subtitle="Explore our curated portfolio of the world's most sought-after cities for business, study, and leisure."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Destinations' }]}
        bgImage="/testimonial-bg.png"
      />
      <Destinations />
    </main>
  );
}
