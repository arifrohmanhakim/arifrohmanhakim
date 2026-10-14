import React from 'react';
import { ArrowDownRight, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { PROFILE_DATA } from '../constants/portfolioData';

export const HeroSection = () => {
  return (
    <section id="hero" className="hero-minimal">
      <div className="container hero-layout-minimal">
        {/* Kolom Kiri: Tipografi Menonjol */}
        <div className="hero-text-block">
          <div className="hero-availability">
            <span className="availability-dot"></span>
            <span>Tersedia untuk proyek terpilih & kolaborasi</span>
          </div>

          <h1 className="hero-display-title">
            Merancang karya digital dengan{' '}
            <span className="serif-highlight">presisi, seni,</span>{' '}
            dan performa tanpa kompromi.
          </h1>

          <p className="hero-lead-text">
            Saya <strong>{PROFILE_DATA.name}</strong> (@{PROFILE_DATA.handle}), seorang Software Engineer berbasis di <strong>{PROFILE_DATA.location}</strong>. Kreator di balik <a href="https://payamanos.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-link">Payaman OS</a>, berfokus pada arsitektur web modern, aplikasi mobile React Native, dan ekosistem open source dengan standar kode yang bersih dan efisien.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn-hero-primary">
              <span>Eksplorasi Karya</span>
              <ArrowDownRight size={18} />
            </a>

            <a
              href="https://payamanos.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-secondary"
            >
              <span>Payaman OS Live</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-ghost"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
          </div>

          <div className="hero-meta-strip">
            <div className="meta-pill">React 19 & Next.js</div>
            <div className="meta-pill">React Native Mobile</div>
            <div className="meta-pill">TypeScript & Node.js</div>
          </div>
        </div>

        {/* Kolom Kanan: Foto Keren dengan Frame Minimalis */}
        <div className="hero-visual-block">
          <div className="portrait-frame">
            <img
              src="/portrait.jpg"
              alt="Potret Arif Rohman Hakim"
              className="portrait-image"
              loading="eager"
            />
            <div className="portrait-overlay-glow"></div>

            {/* Floating Minimal Badges */}
            <div className="floating-badge badge-location">
              <MapPin size={13} className="text-accent" />
              <span>Yogyakarta, ID</span>
            </div>

            <div className="floating-badge badge-craft">
              <Sparkles size={13} className="text-amber" />
              <span>Full Stack & Mobile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
