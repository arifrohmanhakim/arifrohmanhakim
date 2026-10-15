import { useState, useEffect, useRef, useCallback } from 'react';

export const useAppleSlider = ({ totalSlides, autoplayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartX = useRef(0);
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  // Autoplay Logic
  useEffect(() => {
    if (!isPlaying || isDragging || totalSlides <= 1) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, autoplayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isDragging, totalSlides, autoplayInterval, nextSlide, currentIndex]);

  // Keyboard Arrow Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Hanya aktifkan jika target bukan input / textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Pointer Drag Handlers
  const handlePointerDown = (e) => {
    if (e.button !== 0) return;
    if (e.target.closest('button, a, input, textarea')) return;

    setIsDragging(true);
    dragStartX.current = e.clientX;
    setDragOffset(0);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleGlobalPointerMove = (e) => {
      const diff = e.clientX - dragStartX.current;
      setDragOffset(diff);
    };

    const handleGlobalPointerUp = () => {
      setIsDragging(false);
      const threshold = 60;
      if (dragOffset < -threshold) {
        nextSlide();
      } else if (dragOffset > threshold) {
        prevSlide();
      }
      setDragOffset(0);
    };

    window.addEventListener('pointermove', handleGlobalPointerMove);
    window.addEventListener('pointerup', handleGlobalPointerUp);
    window.addEventListener('pointercancel', handleGlobalPointerUp);

    return () => {
      window.removeEventListener('pointermove', handleGlobalPointerMove);
      window.removeEventListener('pointerup', handleGlobalPointerUp);
      window.removeEventListener('pointercancel', handleGlobalPointerUp);
    };
  }, [isDragging, dragOffset, nextSlide, prevSlide]);

  return {
    currentIndex,
    isPlaying,
    isDragging,
    dragOffset,
    nextSlide,
    prevSlide,
    goToSlide,
    togglePlay,
    dragHandlers: {
      onPointerDown: handlePointerDown
    }
  };
};
