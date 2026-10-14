import { useState, useEffect } from 'react';

export const useScrollProgress = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          setScrollY(currentY);
          setIsScrolled(currentY > 40);
          if (totalHeight > 0) {
            setScrollProgress(Math.min(Math.max(currentY / totalHeight, 0), 1));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollProgress, isScrolled };
};
