'use client';
import { useEffect } from 'react';

export function DynamicFavicon() {
  useEffect(() => {
    let interval: NodeJS.Timeout;

    // SVG Data URIs for razor-sharp scalable favicons
    const svgWhite = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="white"/><text y="50%" x="50%" dominant-baseline="middle" text-anchor="middle" font-size="65" fill="%230f1723" font-family="sans-serif" font-weight="900">M</text></svg>`;
    
    const svgBlack = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%230f1723"/><text y="50%" x="50%" dominant-baseline="middle" text-anchor="middle" font-size="65" fill="white" font-family="sans-serif" font-weight="900">M</text></svg>`;

    // Steady brand color when active on the tab
    const svgCyan = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%2301afd1"/><text y="50%" x="50%" dominant-baseline="middle" text-anchor="middle" font-size="65" fill="white" font-family="sans-serif" font-weight="900">M</text></svg>`;

    const changeFavicon = (src: string) => {
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = src;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        let isWhite = true;
        // Blink between black and white every 1000ms
        interval = setInterval(() => {
          changeFavicon(isWhite ? svgWhite : svgBlack);
          // Optional: You can also blink the browser tab title to grab their attention! 
          document.title = isWhite ? "✈️ Your Journey Awaits" : "Magener Synergy";
          isWhite = !isWhite;
        }, 1000);
      } else {
        // User returned to the tab
        if (interval) clearInterval(interval);
        changeFavicon(svgCyan); // Lock it to steady Cyan
        document.title = "Magener Synergy | Premium Travel & Education";
      }
    };

    // Initialize steady state
    changeFavicon(svgCyan);
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (interval) clearInterval(interval);
    };
  }, []);

  return null;
}
