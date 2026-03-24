'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a') !== null || target.closest('button') !== null || window.getComputedStyle(target).cursor === 'pointer';
      setIsHovered(isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-[#01afd1] rounded-full pointer-events-none z-[100] mix-blend-screen hidden md:block"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        scale: isHovered ? 3 : 1,
        opacity: isHovered ? 0.5 : 1
      }}
    />
  );
}
