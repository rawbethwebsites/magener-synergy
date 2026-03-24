import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { SERVICES_DATA } from '@/lib/data/services';
import { SERVICE_PACKAGES } from '@/lib/data/packages';

export async function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Magener Synergy`,
    description: service.fullDesc,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;
  const others = SERVICES_DATA.filter((s) => s.slug !== slug).slice(0, 3);
  const packageOptions = SERVICE_PACKAGES[slug] || [];

  return (
    <main className="bg-brand-black text-brand-white min-h-screen">
      <PageHeader
        title={service.title}
        subtitle="Premium travel and consulting services tailored for you"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />

      {/* Hero image */}
      <section className="relative h-[45vh] w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover brightness-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8">
          <div className="w-14 h-14 rounded-full bg-brand-gold/20 backdrop-blur-md border border-brand-gold/30 flex items-center justify-center">
            <Icon className="w-7 h-7 text-brand-gold" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <span className="text-brand-gold text-xs uppercase tracking-widest mb-4 block">
                About This Service
              </span>
              <h2 className="text-3xl font-display mb-6">{service.title}</h2>
              <p className="text-brand-silver leading-relaxed text-lg">{service.fullDesc}</p>
            </div>

            <div>
              <h3 className="text-xl font-display mb-6">What&apos;s Included</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span className="text-brand-silver text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-display mb-6">Available Packages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packageOptions.map((pkg, i) => (
                  <div key={i} className="group bg-brand-charcoal border border-brand-border rounded-xl p-5 overflow-hidden">
                    <div className="relative h-52 w-full rounded-lg overflow-hidden mb-3">
                      <img src={pkg.image} alt={pkg.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/45 to-transparent" />
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {pkg.gallery.map((img, gi) => (
                        <div key={gi} className="relative h-16 rounded-md overflow-hidden border border-brand-border/60">
                          <img src={img} alt={`${pkg.name} gallery ${gi + 1}`} className="h-full w-full object-cover" loading="lazy" />
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-brand-gold text-xs uppercase tracking-widest">Package {i + 1}</p>
                      {pkg.popular && (
                        <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/40">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <h4 className="font-display text-lg mb-3">{pkg.name}</h4>
                    <p className="text-brand-silver text-sm leading-relaxed mb-3">{pkg.description}</p>
                    <div className="space-y-2 text-sm text-brand-silver">
                      <p><span className="text-brand-white">Ideal For:</span> {pkg.idealFor}</p>
                      <p><span className="text-brand-white">Duration:</span> {pkg.duration}</p>
                      <p><span className="text-brand-white">Hotel:</span> {pkg.hotel}</p>
                      <p><span className="text-brand-white">Tours/Inclusions:</span> {pkg.tours}</p>
                      <p><span className="text-brand-white">Not Included:</span> {pkg.excludes}</p>
                    </div>
                    <p className="text-brand-gold font-semibold mt-4">{pkg.price}</p>
                    {pkg.urgency && (
                      <p className="text-xs text-brand-gold/80 mt-1">{pkg.urgency}</p>
                    )}
                    <Button variant="outline" asChild className="mt-4 w-full justify-center">
                      <Link href={`/contact?service=${encodeURIComponent(service.title)}&package=${encodeURIComponent(pkg.name)}`}>Book This Package</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-display mb-6">How It Works</h3>
              <div className="space-y-4">
                {service.process.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-brand-charcoal border border-brand-border rounded-xl p-5"
                  >
                    <span className="w-8 h-8 rounded-full bg-brand-gold/20 text-brand-gold text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-brand-silver text-sm leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-brand-charcoal border border-brand-border rounded-2xl p-8 sticky top-28">
              <h3 className="font-display text-xl mb-2">Get Started Today</h3>
              <p className="text-brand-silver text-sm mb-6 leading-relaxed">
                Speak with a specialist about your {service.title.toLowerCase()} needs.
              </p>
              <div className="space-y-3">
                <Button variant="primary" asChild className="w-full justify-center">
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
                <Button variant="outline" asChild className="w-full justify-center">
                  <Link href="/chat">Chat with Nova</Link>
                </Button>
              </div>
              <p className="text-brand-silver text-xs text-center mt-6">
                Free consultation — no commitment required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="container mx-auto px-6 pb-24">
        <div className="border-t border-brand-border pt-16">
          <h3 className="font-display text-2xl mb-8">Other Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((s) => {
              const OtherIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-brand-charcoal border border-brand-border rounded-2xl p-6 hover:border-brand-gold/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center mb-4">
                    <OtherIcon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <h4 className="font-display text-lg mb-2 group-hover:text-brand-gold transition-colors">
                    {s.title}
                  </h4>
                  <p className="text-brand-silver text-sm leading-relaxed line-clamp-2">{s.desc}</p>
                  <span className="text-brand-gold text-xs uppercase tracking-widest mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
