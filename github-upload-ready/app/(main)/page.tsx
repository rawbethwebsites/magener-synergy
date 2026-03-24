import dynamic from 'next/dynamic';
import HeroScroll from '@/components/sections/HeroScroll';
import { Preloader } from '@/components/ui/Preloader';

// Pre-load above-fold / near-fold items statically
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';

// Lazy load below-fold
const TravelMorph = dynamic(() => import('@/components/sections/TravelMorph'));
const Services = dynamic(() => import('@/components/sections/Services'));
const Destinations = dynamic(() => import('@/components/sections/Destinations'));
const VisaSection = dynamic(() => import('@/components/sections/VisaSection'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));
const Globe = dynamic(() => import('@/components/sections/Globe'));

export default function HomePage() {
  return (
    <main className="bg-brand-black text-brand-white">
      <Preloader />
      <HeroScroll />
      <Stats />
      <About />
      <TravelMorph />
      <Services />
      <Destinations />
      <VisaSection />
      <Testimonials />
      <Globe />
    </main>
  );
}
