import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../constants/portfolioData';

export const HeroMadisonSection = ({ scrollY = 0 }) => {
  const scriptZoom = Math.min(1 + scrollY * 0.0012, 1.45);
  const scriptTranslateY = Math.round(scrollY * 0.12);
  const photoTranslateY = Math.round(scrollY * 0.06);
  const nameShiftX = Math.round(scrollY * 0.38);
  const roleShiftX = Math.round(-scrollY * 0.38);

  return (
    <section id="hero" className="madison-hero-section">
      <div className="container madison-hero-wrapper">
        {/* Top Meta Bar */}
        <div className="hero-top-meta-bar">
          <div className="opportunity-badge">
            <span className="dot-pulse" aria-hidden="true" />
            <span>Available for New Opportunities</span>
          </div>
          <div className="hero-meta-location">
            <span>{PROFILE_DATA.location}</span>
            <span className="hero-meta-dot">•</span>
            <span>{PROFILE_DATA.timezone}</span>
          </div>
        </div>

        {/* Hero Grand Stage with 3D Depth Layering */}
        <div className="hero-centerpiece-stage">
          {/* Layer 1 (Back): Cinematic Script Typo (Precision & Systems) */}
          <div
            className="giant-script-background"
            style={{
              transform: `translate3d(0, ${scriptTranslateY}px, 0) scale(${scriptZoom})`,
              transformOrigin: 'center 40%'
            }}
            aria-hidden="true"
          >
            <span className="script-word-left">Precision</span>
            <span className="script-word-right">Systems</span>
          </div>

          {/* Layer 1.5 (Behind Portrait): Role Layer */}
          <div
            className="hero-role-layer-back"
            style={{
              transform: `translate3d(${roleShiftX}px, 0, 0)`
            }}
          >
            <div className="floating-role-box">
              <span className="role-headline-bold">FULL STACK &amp;</span>
              <span className="role-headline-bold">MOBILE ENGINEER</span>
            </div>
          </div>

          {/* Layer 2 (Center): Portrait Image */}
          <div
            className="hero-center-portrait-wrap"
            style={{
              transform: `translate3d(0, ${photoTranslateY}px, 0)`
            }}
          >
            <img
              src="/arif_portrait.png"
              alt={PROFILE_DATA.name}
              className="hero-large-portrait-img"
              loading="eager"
            />
            <div className="portrait-bottom-fade"></div>
          </div>

          {/* Layer 3 (In Front): Name Layer */}
          <div
            className="hero-name-layer-front"
            style={{
              transform: `translate3d(${nameShiftX}px, 0, 0)`
            }}
          >
            <div className="floating-name-box">
              <span className="floating-iam-text">I AM</span>
              <h1 className="floating-name-text">ARIF</h1>
              <h1 className="floating-name-text">ROHMAN</h1>
            </div>
          </div>

          {/* Scroll Guide Indicator */}
          <div className="hero-scroll-indicator" aria-hidden="true">
            <div className="scroll-mouse-pill">
              <div className="scroll-mouse-wheel"></div>
            </div>
            <span className="scroll-label">SCROLL TO EXPLORE</span>
          </div>
        </div>

        {/* Hero Bottom Value & CTA Action Container */}
        <div className="hero-cta-action-container">
          <p className="hero-value-subheadline">
            {PROFILE_DATA.tagline}
          </p>

          <div className="hero-cta-buttons">
            <a href="#projects" className="hero-btn-primary">
              <span>View Selected Works</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#contact" className="hero-btn-secondary">
              <Mail size={16} aria-hidden="true" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Key Impact Metrics Highlights */}
          <div className="hero-impact-strip">
            <div className="hero-impact-item">
              <span className="hero-impact-num">1,000+ Ha</span>
              <span className="hero-impact-desc">Agro-monitoring deployed</span>
            </div>
            <div className="hero-impact-divider" aria-hidden="true"></div>
            <div className="hero-impact-item">
              <span className="hero-impact-num">33 Countries</span>
              <span className="hero-impact-desc">Global platform reach</span>
            </div>
            <div className="hero-impact-divider" aria-hidden="true"></div>
            <div className="hero-impact-item">
              <span className="hero-impact-num">10+ Years</span>
              <span className="hero-impact-desc">Engineering craft (since 2014)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
