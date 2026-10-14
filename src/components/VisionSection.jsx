import React from 'react';
import { ShieldCheck, Cpu, Terminal, GitBranch } from 'lucide-react';
import { PROFILE_DATA } from '../constants/portfolioData';

export const VisionSection = ({ stats }) => {
  return (
    <section id="vision" className="anthropic-section">
      <div className="container">
        <div className="anthropic-header-block">
          <div className="anthropic-eyebrow-row">
            <span className="anthropic-eyebrow-index">03</span>
            <span className="anthropic-eyebrow-divider">/</span>
            <span className="anthropic-eyebrow-text">Principles &amp; Empirical Metrics</span>
          </div>

          <h2 className="anthropic-headline">
            Clear abstractions. <br />
            <em>Measurable reliability.</em>
          </h2>

          <p className="anthropic-lead">
            Menghindari kompleksitas yang tidak esensial. Setiap baris kode ditulis untuk kejelasan logis, efisiensi waktu respon, dan skalabilitas jangka panjang.
          </p>
        </div>

        <div className="anthropic-vision-grid">
          <div className="anthropic-metrics-stack">
            <div className="anthropic-metric-card">
              <div className="anthropic-metric-header">
                <Terminal size={18} className="anthropic-metric-icon" />
                <span className="anthropic-metric-category">OPEN REPOSITORIES</span>
              </div>
              <div className="anthropic-metric-val">{stats.publicRepos || 12}+</div>
              <div className="anthropic-metric-name">Public Repositories di GitHub</div>
              <p className="anthropic-metric-explanation">
                Pustaka open source mandiri, emulasi retro OS, modul mapping spatial, dan visual query builder.
              </p>
            </div>

            <div className="anthropic-metric-card">
              <div className="anthropic-metric-header">
                <Cpu size={18} className="anthropic-metric-icon" />
                <span className="anthropic-metric-category">COMPUTATION LATENCY</span>
              </div>
              <div className="anthropic-metric-val">&lt; 16ms</div>
              <div className="anthropic-metric-name">60/120 FPS Interaction Budget</div>
              <p className="anthropic-metric-explanation">
                Animasi berbasis CSS hardware compositor native, state management modular tanpa re-render berlebihan.
              </p>
            </div>

            <div className="anthropic-metric-card">
              <div className="anthropic-metric-header">
                <ShieldCheck size={18} className="anthropic-metric-icon" />
                <span className="anthropic-metric-category">CODE CRAFTSMANSHIP</span>
              </div>
              <div className="anthropic-metric-val">100%</div>
              <div className="anthropic-metric-name">Separation of Concerns</div>
              <p className="anthropic-metric-explanation">
                Penamaan deskriptif (self-documenting), custom hooks modular, serta sanitasi dan validasi data ketat di semua layer.
              </p>
            </div>
          </div>

          <div className="anthropic-workspace-panel">
            <div className="anthropic-workspace-frame">
              <img
                src="/workstation.jpg"
                alt="Engineering Lab Workstation"
                className="anthropic-workspace-photo"
                loading="lazy"
              />
              <div className="anthropic-workspace-overlay" />
              <div className="anthropic-workspace-footer">
                <span className="anthropic-mono-pill">PRIMARY WORKSTATION // YOGYAKARTA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
