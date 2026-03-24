import { useState, useEffect } from 'react';

export function useImagePreloader(imagePaths: string[]) {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Escape early if no paths
    if (!imagePaths || imagePaths.length === 0) {
      setLoaded(true);
      return;
    }
    
    let loadedCount = 0;
    const imageElements = imagePaths.map((src) => {
      const img = new Image();
      img.src = src;
      
      const handleLoad = () => {
        loadedCount++;
        setProgress(loadedCount / imagePaths.length);
        if (loadedCount === imagePaths.length) {
          setImages(imageElements);
          setLoaded(true);
        }
      };

      img.onload = handleLoad;
      // Also increment on error to unblock
      img.onerror = handleLoad;
      
      return img;
    });
  }, [imagePaths]);

  return { images, loaded, progress };
}
