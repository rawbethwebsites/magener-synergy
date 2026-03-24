'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useImagePreloader } from '@/hooks/useImagePreloader';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useCanvasSequence } from '@/hooks/useCanvasSequence';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Tag } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';

const FRAME_COUNT = 16; 
const FRAMES = Array.from({ length: FRAME_COUNT }, (_, i) =>
  `/sequence-2/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`
);

const DESTINATION_TAGS = [
  "London 🇬🇧 – Study, business, and family breaks",
  "Toronto 🇨🇦 – Study, immigration, and city escapes",
  "Kuala Lumpur 🇲🇾 – Affordable education and culture",
  "Dubai 🇦🇪 – Luxury shopping and desert adventures",
  "Paris 🇫🇷 – Romance, art, and fine dining",
  "Tokyo 🇯🇵 – Tech, culture, and vibrant city life"
];

export default function TravelMorph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { images, loaded } = useImagePreloader(FRAMES);
  const progress = useScrollProgress(containerRef);
  const reducedMotion = useReducedMotion();

  useCanvasSequence(canvasRef, images, loaded, progress);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const tagsOpacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const tagsY = useTransform(scrollYProgress, [0.3, 0.45], [40, 0]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-brand-charcoal">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
        {!reducedMotion ? (
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-70" />
        ) : (
          <div 
             className="absolute inset-0 w-full h-full bg-cover bg-center mix-blend-screen opacity-70" 
             style={{ backgroundImage: `url(${FRAMES[0]})` }} 
          />
        )}
        
        {/* Deep dark overlay to ensure text contrast over bright canvas frames */}
        <div className="absolute inset-0 bg-brand-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-brand-black/40 to-brand-black/90 z-10 backdrop-blur-[2px]" />

        <motion.div 
          style={{ y: reducedMotion ? 0 : subtitleY }}
          className="relative z-20 flex flex-col items-center justify-center text-center px-6 w-full h-full pt-[20vh]"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-brand-white mb-6 drop-shadow-2xl">
            Where Will We<br className="md:hidden" /> Take You Next?
          </h2>
          
          <p className="text-brand-silver text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md">
            From London to Tokyo, we curate seamless trips for study, business, and leisure — visas, flights, and stays handled for you.
          </p>

          <motion.div 
            style={{ opacity: reducedMotion ? 1 : tagsOpacity, y: reducedMotion ? 0 : tagsY }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto mb-12"
          >
            {DESTINATION_TAGS.map((tag, idx) => (
               <Tag key={tag} className="text-sm border-brand-gold/40 text-brand-gold bg-brand-black/50 hover:bg-brand-gold hover:text-brand-black transition-colors cursor-default drop-shadow-md">
                 {tag}
               </Tag>
            ))}
          </motion.div>
          
          <motion.div
             style={{ opacity: reducedMotion ? 1 : tagsOpacity, y: reducedMotion ? 0 : tagsY }}
             className="flex flex-col items-center gap-6"
          >
             <p className="text-brand-silver text-sm md:text-base italic max-w-xl mx-auto drop-shadow-md">
               Explore our curated packages or chat with a consultant to design your own route.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
               <Button variant="outline" size="default" className="w-full sm:w-auto border-brand-silver text-brand-white hover:bg-brand-white hover:text-brand-black bg-brand-black/40 backdrop-blur-sm shadow-xl">
                 Explore Packages
               </Button>
               <Button variant="primary" size="default" className="w-full sm:w-auto bg-[#01afd1] text-brand-black hover:bg-[#018cab] shadow-xl border-none font-medium">
                 Talk to a Consultant
               </Button>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
