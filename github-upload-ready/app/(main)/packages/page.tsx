import Services from '@/components/sections/Services';
import { PageHeader } from '@/components/ui/PageHeader';

export default function PackagesPage() {
  return (
    <main className="bg-brand-black text-brand-white min-h-screen">
      <PageHeader
        title="Travel Packages"
        subtitle="Curated premium packages for leisure, business, study, and group travel — planned with precision."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Packages' }]}
      />
      <Services />
    </main>
  );
}
