import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, MapPin, Plane } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { DESTINATIONS_DATA } from '@/lib/data/destinations';

export async function generateStaticParams() {
  return DESTINATIONS_DATA.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dest = DESTINATIONS_DATA.find((d) => d.slug === slug);
  if (!dest) return {};
  return {
    title: `${dest.name}, ${dest.country} | Magener Synergy`,
    description: dest.description,
  };
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dest = DESTINATIONS_DATA.find((d) => d.slug === slug);
  if (!dest) notFound();

  const others = DESTINATIONS_DATA.filter((d) => d.slug !== slug).slice(0, 3);

  return (
    <main className="bg-brand-black text-brand-white min-h-screen">
      <PageHeader
        title={dest.name}
        subtitle={`${dest.country} — ${dest.tag}`}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: dest.name },
        ]}
        bgImage={dest.img}
      />

      {/* Hero Image */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image src={dest.img} alt={dest.name} fill className="object-cover brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 flex items-center gap-2 text-brand-gold text-sm uppercase tracking-widest">
          <MapPin className="w-4 h-4" /> {dest.country}
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <span className="text-brand-gold text-xs uppercase tracking-widest mb-4 block">
                Overview
              </span>
              <h2 className="text-3xl font-display mb-6 text-brand-white">{dest.name}</h2>
              <p className="text-brand-silver leading-relaxed text-lg">{dest.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-display mb-6 text-brand-white">Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dest.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span className="text-brand-silver text-sm leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-charcoal border border-brand-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center">
                  <Plane className="w-5 h-5 text-brand-gold" />
                </div>
                <h3 className="font-display text-xl text-brand-white">Visa Information</h3>
              </div>
              <p className="text-brand-silver leading-relaxed">{dest.visaInfo}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-brand-charcoal border border-brand-border rounded-2xl p-8 sticky top-28">
              <h3 className="font-display text-xl mb-2 text-brand-white">
                Ready to visit {dest.name}?
              </h3>
              <p className="text-brand-silver text-sm mb-6 leading-relaxed">
                Let our travel specialists craft the perfect itinerary for you.
              </p>
              <div className="space-y-3">
                <Button variant="primary" asChild className="w-full justify-center">
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
                <Button variant="outline" asChild className="w-full justify-center">
                  <Link href="/chat">Chat with Nova</Link>
                </Button>
              </div>
              <div className="mt-6 pt-6 border-t border-brand-border text-center">
                <p className="text-brand-gold text-2xl font-display">98%</p>
                <p className="text-brand-silver text-xs uppercase tracking-widest mt-1">
                  Visa Success Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Destinations */}
      <section className="container mx-auto px-6 pb-24">
        <div className="border-t border-brand-border pt-16">
          <h3 className="font-display text-2xl mb-8 text-brand-white">Other Destinations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((d) => (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="group relative h-52 rounded-2xl overflow-hidden border border-brand-border"
              >
                <Image
                  src={d.img}
                  alt={d.name}
                  fill
                  className="object-cover brightness-60 group-hover:brightness-75 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-brand-gold text-xs uppercase tracking-widest">{d.country}</p>
                  <p className="text-brand-white font-display text-xl">{d.name}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/destinations">
                <ArrowLeft className="w-4 h-4 mr-2" /> All Destinations
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
