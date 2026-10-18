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

    const updateParallax = () => {
      if (!isVisible || !header) return;

      const rect = header.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Delta terhadap titik tengah layar (0 saat tepat di tengah pandangan mata)
      const centerDelta = (windowHeight * 0.5) - (rect.top + rect.height * 0.5);

      // Pergerakan vertikal bertingkat mengikuti scroll atas-bawah
      const eyebrowY = Math.round(-centerDelta * 0.16);
      const headlineY = Math.round(-centerDelta * 0.10);
      const leadY = Math.round(-centerDelta * 0.05);

      // Garis melebar simetris saat mendekati titik tengah layar
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

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return headerRef;
};
