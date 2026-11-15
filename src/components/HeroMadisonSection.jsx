import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../constants/portfolioData';

export const HeroMadisonSection = ({ scrollY = 0 }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const effectiveScrollY = isMobile ? 0 : scrollY;
  const scriptZoom = Math.min(1 + effectiveScrollY * 0.0012, 1.45);
  const scriptTranslateY = Math.round(effectiveScrollY * 0.12);
  const photoTranslateY = Math.round(effectiveScrollY * 0.06);

  const shiftY_IAM = Math.round(-effectiveScrollY * 0.52);
  const shiftY_ARIF = Math.round(-Math.max(0, effectiveScrollY - 20) * 0.44);
  const shiftY_ROHMAN = Math.round(-Math.max(0, effectiveScrollY - 45) * 0.36);
  const shiftY_ROLE_1 = Math.round(-Math.max(0, effectiveScrollY - 15) * 0.48);
  const shiftY_ROLE_2 = Math.round(-Math.max(0, effectiveScrollY - 35) * 0.38);

  return (
    <section id="hero" className="madison-hero-section">
      <div className="container madison-hero-wrapper">
        {/* Top Meta Bar */}
        <div className="hero-top-meta-bar">
          <div className="opportunity-badge">
            <span className="dot-pulse" aria-hidden="true" />
            <span className="meta-avail-full">Available for New Opportunities</span>
            <span className="meta-avail-short">Available for Work</span>
          </div>
          <div className="hero-meta-location">
            <span className="meta-loc-full">{PROFILE_DATA.location}</span>
            <span className="meta-loc-short">Yogyakarta, ID</span>
            <span className="hero-meta-dot">•</span>
            <span className="meta-tz-full">{PROFILE_DATA.timezone}</span>
            <span className="meta-tz-short">WIB</span>
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
            <span className="script-word-left">Hi</span>
            <span className="script-word-right">There</span>
          </div>

          {/* Layer 1.5: Role Layer */}
          <div className="hero-role-layer-back">
            <div className="floating-role-box">
              <div
                className="floating-name-item-wrap"
                style={{ transform: `translate3d(0, ${shiftY_ROLE_1}px, 0)` }}
              >
                <span className="role-headline-bold">UI/UX</span>
              </div>
              <div
                className="floating-name-item-wrap"
                style={{ transform: `translate3d(0, ${shiftY_ROLE_2}px, 0)` }}
              >
                <span className="role-headline-bold">DESIGNER</span>
              </div>
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
              src="/arif_design.jpg"
              alt={PROFILE_DATA.name}
              className="hero-large-portrait-img hero-portrait-light"
              loading="eager"
            />
          </div>

          {/* Layer 3 (In Front): Name Layer */}
          <div className="hero-name-layer-front">
            <div className="floating-name-box">
              <div
                className="floating-name-item-wrap"
                style={{ transform: `translate3d(0, ${shiftY_IAM}px, 0)` }}
              >
                <span className="floating-iam-text">I AM</span>
              </div>
              <div
                className="floating-name-item-wrap"
                style={{ transform: `translate3d(0, ${shiftY_ARIF}px, 0)` }}
              >
                <h1 className="floating-name-text">ARIF</h1>
              </div>
              <div
                className="floating-name-item-wrap"
                style={{ transform: `translate3d(0, ${shiftY_ROHMAN}px, 0)` }}
              >
                <h1 className="floating-name-text">ROHMAN</h1>
              </div>
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
