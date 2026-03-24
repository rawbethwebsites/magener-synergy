'use client';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Button } from '@/components/ui/Button';

export default function Globe() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative h-[80vh] overflow-hidden bg-brand-black border-t border-brand-border">
      {/* Video Background */}
      {!reducedMotion ? (
        <video
          src="/globe-loop.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-screen"
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-brand-charcoal opacity-40 mix-blend-screen" />
      )}
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 to-transparent z-10" />
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p 
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-brand-gold tracking-widest text-xs uppercase mb-4"
        >
          Ready to Depart?
        </motion.p>
        
        <motion.h2 
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display text-brand-white max-w-3xl leading-tight drop-shadow-lg"
        >
          Your Next Chapter<br />Starts Here
        </motion.h2>
        
        <motion.p 
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-brand-silver text-lg mt-6 max-w-lg mx-auto leading-relaxed"
        >
          Speak with a travel consultant today. No commitment — just clarity on
          how we can make your journey extraordinary.
        </motion.p>
        
        <motion.div 
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Button variant="gold" size="lg">Book a Free Consultation</Button>
          <Button variant="ghost" size="lg" className="border border-brand-border sm:border-transparent bg-brand-surface/50 sm:bg-transparent backdrop-blur-md">WhatsApp Us</Button>
        </motion.div>
      </div>
    </section>
  );
}
