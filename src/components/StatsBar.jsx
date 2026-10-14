import React from 'react';
import { FolderGit2, Star, Users, Terminal, CheckCircle2 } from 'lucide-react';

export const StatsBar = ({ stats, onPlaySound }) => {
  const statItems = [
    {
      label: 'Repositori Publik Terverifikasi',
      value: stats.publicRepos,
      sub: 'TypeScript & JavaScript',
      icon: <FolderGit2 size={20} className="stat-glow-icon" />,
      freq: 440
    },
    {
      label: 'Total Stars di GitHub',
      value: stats.totalStars,
      sub: 'Open Source Engagement',
      icon: <Star size={20} className="stat-glow-icon star" />,
      freq: 554.37
    },
    {
      label: 'Public Gists & Solusi Algoritma',
      value: stats.publicGists,
      sub: 'GeoJSON & Snippets',
      icon: <Terminal size={20} className="stat-glow-icon term" />,
      freq: 659.25
    },
    {
      label: 'GitHub Following & Network',
      value: stats.following,
      sub: 'Developer Community',
      icon: <Users size={20} className="stat-glow-icon user" />,
      freq: 880
    }
  ];

  return (
    <section className="stats-section" aria-label="Statistik Pengembang">
      <div className="container">
        <div className="stats-glass-grid">
          {statItems.map((item, index) => (
            <div
              key={index}
              className="stat-card-glass"
              onClick={() => onPlaySound?.(item.freq, 'sine', 0.08)}
              title="Klik untuk feedback audio"
            >
              <div className="stat-top-row">
                <div className="stat-icon-wrapper">{item.icon}</div>
                <div className="stat-counter">{stats.isLoading ? '…' : item.value}</div>
              </div>
              <div className="stat-title">{item.label}</div>
              <div className="stat-sub">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
