'use client';

import { motion, useInView, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { STATS_DATA } from '@/lib/constants';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { bounce: 0, duration: 2500 });
  const [display, setDisplay] = useState("0");
  
  useEffect(() => {
    spring.on("change", (latest) => {
      setDisplay(Math.floor(latest).toString());
    });
    return () => spring.clearListeners();
  }, [spring]);

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, value, spring]);

  return (
    <span ref={ref} className="font-display">
      {display}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-brand-black border-y border-brand-border py-20 relative z-30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x-0 md:divide-x divide-brand-border h-full">
          {STATS_DATA.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center gap-2 px-4"
            >
              <h3 className="text-4xl md:text-5xl text-brand-gold font-medium">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-brand-silver text-xs md:text-sm uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
