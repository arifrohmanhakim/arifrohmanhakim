import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
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
    <section id="contact" className="creative-section">
      <div className="container">
        <div className="creative-contact-canvas">
          <div className="creative-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="creative-eyebrow-line"></span>
            <span>Inisiasi Kolaborasi</span>
            <span className="creative-eyebrow-line"></span>
          </div>

          <h2 className="creative-contact-headline">
            Punya ide berani yang ingin <em>kita wujudkan bersama?</em>
          </h2>

          <p className="creative-contact-lead">
            Saya selalu terbuka untuk mendiskusikan peluang kolaborasi baru: perancangan arsitektur mobile, pengembangan platform web kreatif modern, atau konsultasi teknis tingkat lanjut.
          </p>

          <div className="creative-contact-actions">
            <a
              href={PROFILE_DATA.upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="creative-btn-primary"
            >
              <UpworkIcon size={18} />
              <span>Hire on Upwork</span>
              <ArrowUpRight size={15} />
            </a>

            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="creative-btn-outline"
            >
              <LinkedinIcon size={18} />
              <span>Connect di LinkedIn</span>
              <ArrowUpRight size={15} />
            </a>

            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="creative-btn-outline"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
              <ArrowUpRight size={15} />
            </a>

            <button
              type="button"
              onClick={handleCopyGithub}
              className="creative-btn-outline"
              title="Salin tautan GitHub"
            >
              {copied ? <Check size={16} className="text-amber" /> : <Copy size={16} />}
              <span>{copied ? 'Tautan Tersalin!' : 'Salin Profil'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
