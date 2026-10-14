import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA } from '../constants/portfolioData';

export const VisionSection = ({ stats }) => {
  return (
    <section id="vision" className="madison-vision-section">
      <div className="container">
        <div className="vision-header-row">
          <h2 className="madison-section-headline">TURNING MY VISION</h2>
          <p className="vision-lead-text">
            Mewujudkan konsep rekayasa menjadi solusi perangkat lunak yang elegan, cepat, dan berdampak nyata.
          </p>
        </div>

        <div className="vision-content-grid">
          {/* Sisi Kiri: Angka Statistik Besar */}
          <div className="vision-stats-col">
            <div className="vision-stat-card">
              <span className="vision-stat-number">{stats.publicRepos || 12}+</span>
              <span className="vision-stat-label">Repositori Publik GitHub</span>
            </div>

            <div className="vision-stat-card">
              <span className="vision-stat-number">100%</span>
              <span className="vision-stat-label">Dedikasi Clean Code & Zero Bloat</span>
            </div>

            <div className="vision-stat-card">
              <span className="vision-stat-number">{stats.publicGists || 5}+</span>
              <span className="vision-stat-label">Public Gists & Solusi Algoritma</span>
            </div>
          </div>

          {/* Sisi Kanan: Foto Workstation Estetis */}
          <div className="vision-workspace-col">
            <div className="workspace-image-frame">
              <img
                src="/workstation.jpg"
                alt="Minimalist Engineering Workspace"
                className="workspace-img"
                loading="lazy"
              />
              <div className="workspace-tag-overlay">
                <span>Studio Yogyakarta</span>
                <span className="dot-divider">•</span>
                <span>Crafting Daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
