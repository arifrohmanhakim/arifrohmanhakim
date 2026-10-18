import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PROFILE_DATA } from '../constants/portfolioData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="madison-footer">
      <div className="container madison-footer-inner">
        <div className="footer-brand-side">
          <span className="footer-logo">Arif.</span>
          <span className="footer-location">• Yogyakarta, Indonesia</span>
        </div>

        <div className="footer-actions-side">
          <span className="footer-copy">© {currentYear} Arif Rohman Hakim. All rights reserved.</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="footer-scroll-top"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
