'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 15) + 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setLoading(false), 500); 
      }
      setProgress(current);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[1000] bg-brand-charcoal flex flex-col items-center justify-center text-brand-white"
        >
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-6xl tracking-widest text-[#01afd1]"
            >
              MAGENER
            </motion.h1>
          </div>
          <div className="overflow-hidden mt-4">
             <motion.p 
               initial={{ y: 50 }}
               animate={{ y: 0 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="text-brand-silver tracking-widest uppercase text-xs md:text-sm"
             >
               Curating your journey...
             </motion.p>
          </div>
          
          <div className="absolute bottom-16 right-16 md:bottom-24 md:right-24 text-6xl md:text-8xl font-display font-light text-brand-white/20">
            {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
