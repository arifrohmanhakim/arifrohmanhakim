import React from 'react';

export const StatsSection = ({ stats }) => {
  const statItems = [
    {
      number: stats.publicRepos,
      label: 'Repositori Publik',
      detail: 'TypeScript & JavaScript'
    },
    {
      number: stats.totalStars,
      label: 'GitHub Stars',
      detail: 'Pengakuan Komunitas'
    },
    {
      number: stats.publicGists,
      label: 'Public Gists',
      detail: 'Algoritma & GeoJSON'
    },
    {
      number: stats.followers,
      label: 'Followers',
      detail: 'Developer Network'
    }
  ];

  return (
    <section className="stats-minimal-section" aria-label="Statistik Pengembang">
      <div className="container">
        <div className="stats-row-minimal">
          {statItems.map((item, index) => (
            <div key={index} className="stat-unit-minimal">
              <span className="stat-big-number">
                {stats.isLoading ? '—' : item.number}
              </span>
              <span className="stat-unit-label">{item.label}</span>
              <span className="stat-unit-detail">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
