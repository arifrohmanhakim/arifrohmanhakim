import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { PROFILE_DATA } from '../constants/portfolioData';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyGithub = () => {
    navigator.clipboard?.writeText(PROFILE_DATA.githubUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="madison-contact-section">
      <div className="container">
        <div className="madison-contact-box">
          <span className="contact-sub-kicker">TERTARIK BERKOLABORASI?</span>
          <h2 className="contact-main-headline">
            Mari wujudkan produk digital dengan standar rekayasa tertinggi.
          </h2>

          <div className="contact-buttons-row">
            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="madison-primary-cta"
            >
              <GithubIcon size={18} />
              <span>Kunjungi Profil GitHub</span>
              <ArrowUpRight size={16} />
            </a>

            <button
              type="button"
              onClick={handleCopyGithub}
              className="madison-secondary-cta"
              title="Salin tautan profil"
            >
              {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
              <span>{copied ? 'Tersalin' : 'Salin URL GitHub'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
