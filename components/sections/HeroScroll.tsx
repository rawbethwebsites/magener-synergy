'use client';
import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useImagePreloader } from '@/hooks/useImagePreloader';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useCanvasSequence } from '@/hooks/useCanvasSequence';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const FRAME_COUNT = 64; 
const FRAMES = Array.from({ length: FRAME_COUNT }, (_, i) =>
  `/sequence-1/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`
);

const SLIDES = [
  {
    eyebrow: "PREMIUM TRAVEL & EDUCATION CONSULTING",
    line1: "The World,",
    line2: "Curated for You",
    subtext: "From Abuja to Amsterdam. From applications to arrivals.",
    alignment: "left"
  },
  {
    eyebrow: "GLOBAL STUDY PARTNERSHIPS",
    line1: "Your Education,",
    line2: "Starts Here",
    subtext: "UK, Canada, Malaysia & beyond. We handle every step.",
    alignment: "center"
  },
  {
    eyebrow: "EXPERT VISA PROCESSING",
    line1: "Your Visa,",
    line2: "Our Expertise",
    subtext: "98% success rate. We guide you from checklist to approval.",
    alignment: "right"
  },
  {
    eyebrow: "TAILORED ITINERARIES",
    line1: "Every Journey,",
    line2: "Handled with Care",
    subtext: "Luxury travel, honeymoons, corporate retreats — all covered.",
    alignment: "left"
  }
];

export default function HeroScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // existing custom hooks for canvas logic
  const { images, loaded } = useImagePreloader(FRAMES);
  const canvasProgress = useScrollProgress(containerRef);
  const reducedMotion = useReducedMotion();
  useCanvasSequence(canvasRef, images, loaded, canvasProgress);

  // Framer Motion for slide tracking
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const [activeSlide, setActiveSlide] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map 0-1 to 4 segments (0, 1, 2, 3) smoothly covering the 400vh
    const segmentWidth = 1 / SLIDES.length;
    let index = Math.floor(latest / segmentWidth);
    if (index >= SLIDES.length) index = SLIDES.length - 1;
    setActiveSlide(index);
  });

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {/* Background Layer (Canvas or Static) */}
        {!reducedMotion ? (
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full object-cover" 
            style={{ objectPosition: 'right center' }} 
          />
        ) : (
          <div 
             className="absolute inset-0 w-full h-full bg-cover bg-[right_center]" 
             style={{ backgroundImage: `url(${FRAMES[0]})` }} 
          />
        )}
        
        {/* Dynamic Gradient Overlay */}
        <div 
          className={`absolute inset-0 z-10 pointer-events-none transition-all duration-700 ${
            SLIDES[activeSlide].alignment === 'center' ? 'bg-brand-black/50 backdrop-blur-[2px]' : ''
          }`} 
          style={
            SLIDES[activeSlide].alignment === 'left' 
              ? { background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 55%, transparent 100%)' } 
              : SLIDES[activeSlide].alignment === 'right'
                ? { background: 'linear-gradient(to left, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 55%, transparent 100%)' }
                : {}
          }
        />
        
        {/* Content Container */}
        <div className={`relative z-20 w-full max-w-[1400px] mx-auto flex flex-col inset-y-0 py-24 transition-all duration-700 ${
          SLIDES[activeSlide].alignment === 'center' 
            ? 'items-center text-center px-6' 
            : SLIDES[activeSlide].alignment === 'right'
              ? 'items-end text-right pr-6 sm:pr-16 md:pr-24'
              : 'items-start text-left pl-6 sm:pl-16 md:pl-24'
        }`}>
          
          {/* Animated Text Wrapper (fixed height to prevent layout jumps on content swap) */}
          <div className="relative w-full h-[320px] md:h-[400px] flex flex-col justify-end pb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`absolute bottom-8 flex flex-col w-full ${
                  SLIDES[activeSlide].alignment === 'center' 
                    ? 'inset-x-0 items-center text-center mx-auto' 
                    : SLIDES[activeSlide].alignment === 'right'
                      ? 'right-0 items-end text-right'
                      : 'left-0 items-start text-left'
                }`}
              >
                <div className="mb-6">
                  <span className="inline-block bg-brand-black/40 backdrop-blur-md border border-brand-border/50 px-5 py-2 rounded-full text-brand-gold tracking-[0.2em] text-xs font-semibold uppercase drop-shadow-xl">
                    {SLIDES[activeSlide].eyebrow}
                  </span>
                </div>
                
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-brand-white max-w-4xl leading-tight drop-shadow-2xl">
                  {SLIDES[activeSlide].line1}<br />
                  <span className="text-[#01afd1]">{SLIDES[activeSlide].line2}</span>
                </h1>
                
                <p className="text-brand-silver text-lg md:text-2xl mt-6 max-w-xl leading-relaxed drop-shadow-xl font-light">
                  {SLIDES[activeSlide].subtext}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA Buttons - Rendered strictly outside AnimatePresence so they stay fixed on canvas */}
          <motion.div 
            layout
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full max-w-xl relative shrink-0 ${
              SLIDES[activeSlide].alignment === 'center' 
                ? 'justify-center mx-auto' 
                : SLIDES[activeSlide].alignment === 'right'
                  ? 'justify-end'
                  : 'justify-start'
            }`}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto bg-brand-surface/40 backdrop-blur-md border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black shadow-xl"
              asChild
            >
              <Link href="/packages">Explore Packages</Link>
            </Button>
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full sm:w-auto bg-[#01afd1] text-brand-black hover:bg-[#018cab] shadow-xl border-none font-medium"
              asChild
            >
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-brand-silver">
          <span className="text-xs tracking-widest uppercase text-brand-white drop-shadow-lg">Scroll</span>
          <div className="w-px h-12 bg-[#C9A84C]/80 animate-pulse shadow-xl" />
        </div>
      </div>
    </div>
  );
}
