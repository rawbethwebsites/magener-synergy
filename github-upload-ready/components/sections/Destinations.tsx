'use client';
import { DESTINATIONS_DATA } from '@/lib/data/destinations';
import { DestinationCard } from '@/components/ui/DestinationCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { InteractiveGlobe } from '@/components/ui/InteractiveGlobe';

export default function Destinations() {
  return (
    <section className="py-32 bg-[#0f1723] overflow-hidden border-t border-brand-border relative z-20">
      {/* Globe Background integration */}
      <div className="absolute top-1/2 -right-[20%] md:-right-[10%] lg:right-0 -translate-y-1/2 w-[600px] md:w-[800px] lg:w-[1000px] h-[600px] md:h-[800px] lg:h-[1000px] opacity-60 pointer-events-auto z-0 mix-blend-screen rounded-full overflow-hidden">
         <InteractiveGlobe />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          label="GLOBAL REACH"
          title="Featured Destinations"
          className="items-start text-left ml-0 mx-0 max-w-xl mb-4"
        />
        <p className="text-brand-silver max-w-lg mt-4 mb-12 leading-relaxed font-light drop-shadow-xl backdrop-blur-[2px]">
           Swipe through our curated selection of premier destinations. Drag the globe at any time to inspect your next potential journey.
        </p>
      </div>
      
      {/* Horizontal Scroll Track */}
      <div className="flex overflow-x-auto pb-12 px-6 gap-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] sm:pl-16 md:pl-32 lg:pl-[calc(50vw-400px)] relative z-10">
        {DESTINATIONS_DATA.map((dest, i) => (
          <div key={i} className="snap-center sm:snap-start shrink-0 drop-shadow-2xl">
            <DestinationCard
               name={dest.name}
               country={dest.country}
               tag={dest.tag}
               img={dest.img}
               slug={dest.slug}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
