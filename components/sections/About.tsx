'use client';
import { motion } from 'framer-motion';
import { RevealText } from '@/components/ui/RevealText';
import Image from 'next/image';
import { Globe, Plane, FileCheck, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section className="py-32 bg-brand-surface relative overflow-hidden border-t border-brand-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 items-center">
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl border border-brand-border bg-brand-charcoal overflow-hidden shadow-2xl"
          >
            <Image 
              src="/about-family-tour-ng.png" 
              alt="Magener Synergy Family Tour" 
              fill 
              className="object-cover opacity-80"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/20" />
          </motion.div>
          
          <div className="flex flex-col justify-center">
            <span className="text-brand-gold tracking-[0.25em] text-xs uppercase mb-6 block">OUR STORY</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-brand-white mb-8 leading-tight">
              Beyond Booking.<br/>We Build Journeys.
            </h2>
            <div className="flex flex-col gap-6 text-brand-silver text-lg leading-relaxed font-light">
              <RevealText text="Magener Synergy was founded on a simple belief: that every traveler deserves more than a ticket. Whether you're exploring the world for leisure, seeking international education, or organizing a corporate incentive retreat — we bring clarity, care, and expertise to every step of your journey." />
              <RevealText delay={0.4} text="Headquartered in Abuja, Nigeria, our team combines deep local knowledge with a global network of partners spanning the UK, Canada, Malaysia, UAE, and beyond. We don't just plan trips. We craft experiences that last a lifetime." />
            </div>
          </div>
          
        </div>
        
        {/* Values Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-brand-border pt-16 border-t border-brand-border">
           {[ 
             { icon: Globe, label: "Global Network" },
             { icon: Plane, label: "End-to-End Support" },
             { icon: FileCheck, label: "Visa Expertise" },
             { icon: GraduationCap, label: "Study Abroad" }
           ].map((item, i) => {
             const Icon = item.icon;
             return (
               <motion.div 
                 key={item.label}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 whileHover="hover"
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1, duration: 0.5 }}
                 className="flex flex-col items-center justify-center text-center px-4 gap-4 cursor-pointer group"
               >
                  <motion.div 
                    variants={{
                      hover: { scale: 1.15, backgroundColor: 'rgba(1, 175, 209, 0.1)', borderColor: 'rgba(1, 175, 209, 0.4)' }
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-16 h-16 rounded-full bg-brand-charcoal border border-brand-border flex items-center justify-center text-[#01afd1] shadow-lg"
                  >
                    <motion.div 
                      variants={{ hover: { rotate: [0, -15, 15, -10, 10, 0], scale: 1.1 } }} 
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </motion.div>
                  </motion.div>
                  <motion.span 
                    variants={{ hover: { color: '#01afd1' } }}
                    className="text-brand-white font-medium text-sm tracking-wider uppercase transition-colors"
                  >
                    {item.label}
                  </motion.span>
               </motion.div>
             );
           })}
        </div>
      </div>
    </section>
  );
}
