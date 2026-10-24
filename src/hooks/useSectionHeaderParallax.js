import { useEffect, useRef } from 'react';

export const useSectionHeaderParallax = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const eyebrow = header.querySelector('.creative-eyebrow');
    const eyebrowLines = header.querySelectorAll('.creative-eyebrow-line');
    const headline = header.querySelector('.creative-headline');
    const lead = header.querySelector('.creative-lead');

    let isVisible = false;
    let rafId = null;

    const resetStyles = () => {
      if (eyebrow) eyebrow.style.transform = '';
      if (headline) headline.style.transform = '';
      if (lead) lead.style.transform = '';
      eyebrowLines.forEach((line) => {
        line.style.transform = '';
      });
    };

    const updateParallax = () => {
      if (!isVisible || !header) return;

      // Di layar mobile atau tablet portrait, matikan parallax vertikal bertingkat agar teks tidak bertabrakan
      if (window.innerWidth <= 768) {
        resetStyles();
        return;
      }

      const rect = header.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const centerDelta = (windowHeight * 0.5) - (rect.top + rect.height * 0.5);

      const eyebrowY = Math.round(-centerDelta * 0.16);
      const headlineY = Math.round(-centerDelta * 0.10);
      const leadY = Math.round(-centerDelta * 0.05);

      const distRatio = Math.min(Math.abs(centerDelta) / (windowHeight * 0.6), 1);
      const lineScale = 1.2 - distRatio * 0.5;

      if (eyebrow) {
        eyebrow.style.transform = `translate3d(0, ${eyebrowY}px, 0)`;
      }
      if (headline) {
        headline.style.transform = `translate3d(0, ${headlineY}px, 0)`;
      }
      if (lead) {
        lead.style.transform = `translate3d(0, ${leadY}px, 0)`;
      }
      eyebrowLines.forEach((line) => {
        line.style.transform = `scaleX(${lineScale.toFixed(2)})`;
      });
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          updateParallax();
          rafId = null;
        });
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          window.addEventListener('scroll', handleScroll, { passive: true });
          updateParallax();
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      },
      { rootMargin: '150px 0px 150px 0px' }
    );

    observer.observe(header);

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        resetStyles();
      } else {
        updateParallax();
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (rafId) cancelAnimationFrame(rafId);
      resetStyles();
    };
  }, []);

  return headerRef;
};
