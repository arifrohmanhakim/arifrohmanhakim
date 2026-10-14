import React from 'react';
import { ShieldCheck, Cpu, Terminal } from 'lucide-react';
import { PROFILE_DATA } from '../constants/portfolioData';

export const VisionSection = ({ stats }) => {
  return (
    <section id="vision" className="apple-section">
      <div className="container">
        <div className="apple-section-header">
          <span className="apple-eyebrow">PHILOSOPHY &amp; IMPACT</span>
          <h2 className="apple-headline">
            Obsessed with detail. <br />
            <span className="apple-headline-gradient">From architecture to pixel.</span>
          </h2>
          <p className="apple-subheadline">
            Mewujudkan konsep rekayasa menjadi produk digital yang instan, elegan, dan teruji di lingkungan produksi.
          </p>
        </div>

        <div className="apple-vision-bento">
          {/* Sisi Kiri: Apple Spec Metric Tiles */}
          <div className="apple-metrics-stack">
            <div className="apple-metric-card apple-reveal-card">
              <div className="apple-metric-header">
                <Terminal size={20} className="apple-metric-icon" />
                <span className="apple-metric-badge">Open Ecosystem</span>
              </div>
              <span className="apple-metric-number">{stats.publicRepos || 12}+</span>
              <span className="apple-metric-label">Public Repositories di GitHub</span>
              <p className="apple-metric-desc">Pustaka open source, tool modular, dan implementasi arsitektur frontend modern.</p>
            </div>

            <div className="apple-metric-card apple-reveal-card">
              <div className="apple-metric-header">
                <Cpu size={20} className="apple-metric-icon" />
                <span className="apple-metric-badge">Performance</span>
              </div>
              <span className="apple-metric-number">60 FPS</span>
              <span className="apple-metric-label">Fluid Motion &amp; Zero Bloat</span>
              <p className="apple-metric-desc">Komposisi ringan dengan pemanfaatan hardware acceleration dan state management efisien.</p>
            </div>

            <div className="apple-metric-card apple-reveal-card">
              <div className="apple-metric-header">
                <ShieldCheck size={20} className="apple-metric-icon" />
                <span className="apple-metric-badge">Standards</span>
              </div>
              <span className="apple-metric-number">100%</span>
              <span className="apple-metric-label">Clean Code &amp; Test Discipline</span>
              <p className="apple-metric-desc">Prinsip clean architecture, separation of concerns, dan keamanan di setiap layer aplikasi.</p>
            </div>
          </div>

          {/* Sisi Kanan: Apple Pro Hardware Frame Workspace */}
          <div className="apple-workspace-frame apple-reveal-card">
            <div className="apple-workspace-glass">
              <img
                src="/workstation.jpg"
                alt="Engineering Workspace"
                className="apple-workspace-img"
                loading="lazy"
              />
              <div className="apple-workspace-glow"></div>
              <div className="apple-workspace-caption">
                <div className="apple-caption-pill">
                  <span className="apple-caption-dot"></span>
                  <span>Engineering Studio • Yogyakarta, ID</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
