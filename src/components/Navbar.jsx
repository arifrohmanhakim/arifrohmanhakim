import React from 'react';
import { FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';
import { PROFILE_DATA } from '../constants/portfolioData';

export const Navbar = ({ isScrolled, currentView = 'home', onNavigateHome, onNavigateProjects }) => {
  const handleNavClick = (e, targetHash) => {
    if (currentView !== 'home') {
      e.preventDefault();
      onNavigateHome?.(targetHash);
      setTimeout(() => {
        const el = document.querySelector(targetHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <header className={`madison-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container madison-nav-inner">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="madison-brand"
          aria-label="Arif Rohman Hakim"
          onClick={(e) => {
            if (currentView !== 'home') {
              e.preventDefault();
              onNavigateHome?.();
            }
          }}
        >
          <span>Arif.</span>
        </a>

        {/* Center Menu Links */}
        <nav className="madison-nav-menu" aria-label="Primary Navigation">
          <a
            href="#hero"
            className="madison-nav-link"
            onClick={(e) => handleNavClick(e, '#hero')}
          >
            Home
          </a>
          <a
            href="#projects"
            className="madison-nav-link"
            onClick={(e) => handleNavClick(e, '#projects')}
          >
            Works
          </a>
          <a
            href="#experience"
            className="madison-nav-link"
            onClick={(e) => handleNavClick(e, '#experience')}
          >
            Experience
          </a>
          <a
            href="#services"
            className="madison-nav-link"
            onClick={(e) => handleNavClick(e, '#services')}
          >
            Services
          </a>
          <a
            href="#contact"
            className="madison-nav-link"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Contact
          </a>
        </nav>

        {/* Right Actions */}
        <div className="madison-nav-actions">
          <a
            href={PROFILE_DATA.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="madison-resume-nav-btn"
            title="Download Resume / CV"
          >
            <FileText size={14} />
            <span>Resume</span>
            <ArrowUpRight size={12} />
          </a>

          <a
            href={PROFILE_DATA.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="github-ghost-btn nav-linkedin-btn"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <LinkedinIcon size={16} />
          </a>

          <a
            href={PROFILE_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="github-ghost-btn"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <GithubIcon size={16} />
          </a>

          <a href="#contact" className="madison-pill-btn">
            <span>Contact</span>
          </a>
        </div>
      </div>
    </header>
  );
};
