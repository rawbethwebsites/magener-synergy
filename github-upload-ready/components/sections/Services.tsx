'use client';
import { SERVICES_DATA } from '@/lib/data/services';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

export default function Services() {
  return (
    <section className="py-32 bg-brand-black relative z-20 border-t border-brand-border">
      <div className="container mx-auto px-6">
        <SectionHeader 
          label="WHAT WE OFFER"
          title="Every Journey, Handled with Precision"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((srv, i) => (
            <ServiceCard
              key={i}
              icon={srv.icon}
              title={srv.title}
              desc={srv.desc}
              image={srv.image}
              slug={srv.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
