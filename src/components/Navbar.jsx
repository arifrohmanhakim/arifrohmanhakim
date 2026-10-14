import React from 'react';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';
import { UpworkIcon } from './UpworkIcon';
import { PROFILE_DATA } from '../constants/portfolioData';

export const Navbar = ({ isScrolled }) => {
  return (
    <header className={`madison-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container madison-nav-inner">
        {/* Brand Logo Italic ala Madison */}
        <a href="#hero" className="madison-brand" aria-label="Arif Rohman Hakim">
          <span>Arif.</span>
        </a>

        {/* Center Menu Links */}
        <nav className="madison-nav-menu" aria-label="Navigasi Utama">
          <a href="#hero" className="madison-nav-link">Home</a>
          <a href="#services" className="madison-nav-link">Services</a>
          <a href="#projects" className="madison-nav-link">Works</a>
          <a href="#vision" className="madison-nav-link">About</a>
          <a href="#experience" className="madison-nav-link">Experience</a>
        </nav>

        {/* Right Actions: Social Links & Contact CTA */}
        <div className="madison-nav-actions">
          <a
            href={PROFILE_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="github-ghost-btn"
            aria-label="GitHub"
            title="Kunjungi GitHub"
          >
            <GithubIcon size={16} />
          </a>

          <a
            href={PROFILE_DATA.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="github-ghost-btn nav-linkedin-btn"
            aria-label="LinkedIn"
            title="Kunjungi LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>

          <a
            href={PROFILE_DATA.upworkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="github-ghost-btn nav-upwork-btn"
            aria-label="Upwork"
            title="Hire on Upwork"
          >
            <UpworkIcon size={17} />
          </a>

          <a href="#contact" className="madison-pill-btn">
            <span>Contact</span>
          </a>
        </div>
      </div>
    </header>
  );
};
