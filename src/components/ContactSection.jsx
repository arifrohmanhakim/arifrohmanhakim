import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';
import { UpworkIcon } from './UpworkIcon';
import { PROFILE_DATA } from '../constants/portfolioData';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyGithub = () => {
    navigator.clipboard?.writeText(PROFILE_DATA.githubUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="apple-section">
      <div className="container">
        <div className="apple-contact-card apple-reveal-card">
          <div className="apple-contact-ambient-glow"></div>
          
          <div className="apple-contact-content">
            <span className="apple-eyebrow">READY TO COLLABORATE</span>
            <h2 className="apple-contact-title">
              Let&apos;s build something <br />
              <span className="apple-headline-gradient">extraordinary together.</span>
            </h2>
            <p className="apple-contact-sub">
              Terbuka untuk kolaborasi proyek inovatif, arsitektur frontend web/mobile performa tinggi, atau konsultasi rekayasa perangkat lunak.
            </p>

            <div className="apple-contact-actions-grid">
              <a
                href={PROFILE_DATA.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-primary-btn"
              >
                <UpworkIcon size={18} />
                <span>Hire on Upwork</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-secondary-btn"
              >
                <LinkedinIcon size={18} />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-secondary-btn"
              >
                <GithubIcon size={18} />
                <span>GitHub Profile</span>
                <ArrowUpRight size={16} />
              </a>

              <button
                type="button"
                onClick={handleCopyGithub}
                className="apple-tertiary-btn"
                title="Salin tautan GitHub"
              >
                {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                <span>{copied ? 'Tersalin!' : 'Copy GitHub'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
