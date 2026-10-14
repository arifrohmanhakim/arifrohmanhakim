import React from 'react';
import { PROFILE_DATA } from '../constants/portfolioData';

export const HeroMadisonSection = ({ scrollY = 0 }) => {
  // Animasi Zoom-in untuk teks "Hey, there"
  const scriptZoom = Math.min(1 + scrollY * 0.0012, 1.45);
  const scriptTranslateY = Math.round(scrollY * 0.12);

  // Animasi Foto (Parallax lembut di tengah)
  const photoTranslateY = Math.round(scrollY * 0.06);

  // Animasi Nama (Bergeser dari kiri ke kanan di DEPAN foto)
  const nameShiftX = Math.round(scrollY * 0.42);

  // Animasi Keahlian (Bergeser dari kanan ke kiri di BELAKANG foto)
  const roleShiftX = Math.round(-scrollY * 0.42);

  return (
    <section id="hero" className="madison-hero-section">
      <div className="madison-ambient-glow"></div>

      <div className="container madison-hero-wrapper">
        {/* Hero Grand Stage with 3D Depth Layering */}
        <div className="hero-centerpiece-stage">
          {/* Layer 1 (Paling Belakang): Teks "Hey, there" Zoom In Saat Scroll */}
          <div
            className="giant-script-background"
            style={{
              transform: `translate3d(0, ${scriptTranslateY}px, 0) scale(${scriptZoom})`,
              transformOrigin: 'center 40%'
            }}
            aria-hidden="true"
          >
            <span className="script-word-left">Hey,</span>
            <span className="script-word-right">there</span>
          </div>

          {/* Layer 1.5 (Belakang Foto): Teks Keahlian Bergeser Kanan ke Kiri */}
          <div
            className="hero-role-layer-back"
            style={{
              transform: `translate3d(${roleShiftX}px, 0, 0)`
            }}
          >
            <div className="floating-role-box">
              <span className="role-headline-bold">FRONTEND &</span>
              <span className="role-headline-bold">MOBILE ENGINEER</span>
            </div>
          </div>

          {/* Layer 2 (Tengah): Foto Potret Utama di Tengah */}
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

          {/* Layer 3 (Depan Foto): Teks Nama Bergeser Kiri ke Kanan Melewati Foto */}
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
            <span className="scroll-label">SCROLL TO DISCOVER</span>
          </div>
        </div>
      </div>
    </section>
  );
};
