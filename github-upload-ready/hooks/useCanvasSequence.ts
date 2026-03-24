import { useEffect } from 'react';

export function useCanvasSequence(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  images: HTMLImageElement[],
  loaded: boolean,
  progress: number
) {
  useEffect(() => {
    if (!loaded || !canvasRef.current || images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Scale for high dpi
    const dpr = window.devicePixelRatio || 1;
    // Map progress to frame index
    const frameIndex = Math.min(
      Math.floor(progress * (images.length - 1)),
      images.length - 1
    );
    const img = images[frameIndex];
    if (!img) return;

    // Set actual canvas size and visible size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Cover-fit draw:
    const scale = Math.max(rect.width / img.width, rect.height / img.height);
    const x = (rect.width - img.width * scale) / 2;
    const y = (rect.height - img.height * scale) / 2;
    
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  }, [progress, loaded, images, canvasRef]);
}
