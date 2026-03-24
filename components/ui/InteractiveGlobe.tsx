'use client';
import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { useSpring } from 'framer-motion';

export function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  
  const spring = useSpring(0, {
    stiffness: 280,
    damping: 40,
    mass: 1
  });

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;
    
    // Explicit cast since types might clash slightly on pointer injection
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.06, 0.09, 0.14],
      markerColor: [0.0, 0.68, 0.82],
      glowColor: [0.1, 0.1, 0.2],
      markers: [
        { location: [51.5072, 0.1276], size: 0.05 }, 
        { location: [43.6532, -79.3832], size: 0.05 }, 
        { location: [3.1390, 101.6869], size: 0.06 }, 
        { location: [25.2048, 55.2708], size: 0.08 }, 
        { location: [48.8566, 2.3522], size: 0.05 }, 
        { location: [35.6762, 139.6503], size: 0.06 }, 
      ],
      onRender: (state: { phi: number; width: number; height: number }) => {
        if (!pointerInteracting.current) {
          phi += 0.003;
        }
        state.phi = phi + spring.get();
        if (canvasRef.current) {
           state.width = canvasRef.current.clientWidth * 2;
           state.height = canvasRef.current.clientHeight * 2;
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);
    
    return () => globe.destroy();
  }, [spring]);

  return (
    <div className="w-full aspect-square max-w-[600px] mx-auto opacity-90 cursor-grab active:cursor-grabbing">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain"
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing';
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            spring.set(spring.get() + delta * 0.01);
            pointerInteracting.current = e.clientX;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            spring.set(spring.get() + delta * 0.01);
            pointerInteracting.current = e.touches[0].clientX;
          }
        }}
      />
    </div>
  );
}
