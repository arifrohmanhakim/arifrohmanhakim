import React, { useState } from 'react';
import { Mail, FileText, ArrowUpRight, Copy, Check } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';
import { UpworkIcon } from './UpworkIcon';
import { PROFILE_DATA } from '../constants/portfolioData';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="creative-section">
      <div className="container">
        <div className="creative-contact-canvas">
          <div className="creative-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="creative-eyebrow-line"></span>
            <span>Get in Touch</span>
            <span className="creative-eyebrow-line"></span>
          </div>

          <h2 className="creative-contact-headline">
            Let's build resilient, high-impact <em>software systems together.</em>
          </h2>

          <p className="creative-contact-lead">
            I am open to full-time engineering roles, enterprise-scale mobile architecture contracts, and modern web application development. Let's discuss your product goals.
          </p>

          {/* Primary Action Row: Direct Email & Download CV */}
          <div className="creative-contact-primary-row">
            <a
              href={`mailto:${PROFILE_DATA.email}?subject=Project%20Inquiry%20-%20Arif%20Rohman%20Hakim`}
              className="creative-btn-primary contact-main-btn"
            >
              <Mail size={18} />
              <span>Send Email to {PROFILE_DATA.email}</span>
              <ArrowUpRight size={15} />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="creative-btn-outline copy-email-btn"
              title="Copy email to clipboard"
            >
              {copied ? <Check size={16} className="text-amber-500" /> : <Copy size={16} />}
              <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
            </button>

            <a
              href={PROFILE_DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="creative-btn-primary resume-download-btn"
            >
              <FileText size={18} />
              <span>Download Resume / CV</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Secondary Professional Networks Row */}
          <div className="creative-contact-secondary-row">
            <span className="creative-secondary-label">Connect across platforms:</span>

            <div className="creative-secondary-links">
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="creative-btn-pill"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="creative-btn-pill"
                title="GitHub Profile"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href={PROFILE_DATA.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="creative-btn-pill"
                title="Upwork Profile"
              >
                <UpworkIcon size={16} />
                <span>Upwork Profile</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
