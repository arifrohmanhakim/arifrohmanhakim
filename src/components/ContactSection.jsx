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
    <section id="contact" className="anthropic-section">
      <div className="container">
        <div className="anthropic-contact-box">
          <div className="anthropic-eyebrow-row">
            <span className="anthropic-eyebrow-index">05</span>
            <span className="anthropic-eyebrow-divider">/</span>
            <span className="anthropic-eyebrow-text">Inquiry &amp; Professional Collaboration</span>
          </div>

          <h2 className="anthropic-headline">
            Initiating dialogue. <br />
            <em>Let&apos;s construct meaningful systems.</em>
          </h2>

          <p className="anthropic-lead">
            Terbuka untuk kolaborasi proyek berdampak tinggi: rekayasa arsitektur mobile, sistem web fullstack modern, atau konsultasi rekayasa perangkat lunak.
          </p>

          <div className="anthropic-contact-actions">
            <a
              href={PROFILE_DATA.upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="anthropic-btn-clay"
            >
              <UpworkIcon size={16} />
              <span>Hire on Upwork</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="anthropic-btn-ghost"
            >
              <LinkedinIcon size={16} />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="anthropic-btn-ghost"
            >
              <GithubIcon size={16} />
              <span>GitHub Profile</span>
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={handleCopyGithub}
              className="anthropic-btn-outline"
              title="Salin tautan profil GitHub"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'Tersalin' : 'Salin URL'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
