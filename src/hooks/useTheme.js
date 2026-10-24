import { useState, useEffect, useCallback } from 'react';

const THEME_STORAGE_KEY = 'portfolio-theme';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    try {
      if (typeof document !== 'undefined') {
        const domTheme = document.documentElement.getAttribute('data-theme');
        if (domTheme === 'light' || domTheme === 'dark') {
          return domTheme;
        }
      }
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
      if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    } catch {
      // Fallback aman jika localStorage tidak dapat diakses
    }
    return 'dark';
  });

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(THEME_STORAGE_KEY, theme);

      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#000000' : '#f8fafc');
      }
    } catch {
      // Error handling aman untuk browser storage & DOM
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme, setTheme };
};
