import React, { useState, useMemo } from 'react';
import { BentoGridSection } from './BentoGridSection';
import { ProjectFilter } from './ProjectFilter';
import { ProjectCard } from './ProjectCard';
import { PROJECTS_DATA } from '../constants/portfolioData';

export const ProjectSection = ({ onPlaySound }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (key) => {
    onPlaySound?.(520, 'sine', 0.04);
    setSelectedCategory(key);
  };

  return (
    <>
      {/* Bento Showcase Pilihan (Visual Utama) */}
      <BentoGridSection onPlaySound={onPlaySound} />

      {/* Repositori Lengkap dengan Filter */}
      <section className="section-wrapper sub-repos-section">
        <div className="container">
          <header className="section-header">
            <span className="section-tag">Katalog Repositori</span>
            <h3 className="section-title">Semua Repositori & Pustaka Terbuka</h3>
            <p className="section-description">
              Telusuri seluruh repositori publik dan implementasi kode berdasarkan kategori stack teknologi.
            </p>
          </header>

          <ProjectFilter
            activeCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
          />

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
