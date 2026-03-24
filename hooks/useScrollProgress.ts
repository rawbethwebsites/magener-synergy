import { useState, useEffect, RefObject } from 'react';

export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const scrollHeight = ref.current.offsetHeight - window.innerHeight;
        const scrolled = -rect.top;
        
        // Clamp between 0 and 1
        setProgress(Math.min(Math.max(scrolled / scrollHeight, 0), 1));
      });
    };
    
    // Wait for resize/load changes
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [ref]);

  return progress;
}
