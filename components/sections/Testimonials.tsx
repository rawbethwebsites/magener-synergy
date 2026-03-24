'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS_DATA } from '@/lib/data/testimonials';
import { SectionHeader } from '@/components/ui/SectionHeader';
import Image from 'next/image';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-brand-black relative overflow-hidden">
      <Image 
         src="/testimonial-bg.png" 
         alt="Luxury Resort Background"
         fill
         className="object-cover opacity-60 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-brand-charcoal/70 backdrop-blur-sm" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          label="CLIENT EXPERIENCES"
          title="Don't Just Take Our Word For It"
        />

        <div className="max-w-4xl mx-auto relative min-h-[350px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-brand-surface border border-brand-border rounded-2xl p-8 md:p-12 text-center w-full"
            >
              <div className="text-brand-gold mb-6 text-2xl tracking-[0.2em]">★★★★★</div>
              <p className="text-xl md:text-2xl text-brand-white font-display italic leading-relaxed mb-10 text-balance">
                &quot;{TESTIMONIALS_DATA[current].quote}&quot;
              </p>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 relative rounded-full overflow-hidden mb-4 border-2 border-brand-gold/30 bg-brand-charcoal">
                    {/* Placeholder for real images */}
                    <div className="absolute inset-0 flex items-center justify-center text-xl text-brand-gold uppercase font-display">
                      {TESTIMONIALS_DATA[current].name.charAt(0)}
                    </div>
                </div>
                <h4 className="text-brand-white font-medium uppercase tracking-wider">{TESTIMONIALS_DATA[current].name}</h4>
                <p className="text-brand-silver text-sm mt-1">{TESTIMONIALS_DATA[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
            {TESTIMONIALS_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-brand-gold scale-125' : 'bg-brand-border hover:bg-brand-silver'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
