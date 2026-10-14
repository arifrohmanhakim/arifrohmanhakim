import React, { useState, useMemo } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { PROJECTS_DATA, CATEGORY_FILTERS } from '../constants/portfolioData';

export const ProjectsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="section-minimal">
      <div className="container">
        <header className="section-header-minimal">
          <div className="section-kicker">Karya & Rekayasa</div>
          <h2 className="section-title-minimal">Proyek Pilihan</h2>
          <p className="section-desc-minimal">
            Koleksi aplikasi web berkinerja tinggi, sistem mobile, dan alat pengembangan open source yang dibangun dengan perhatian mendalam terhadap detail.
          </p>
        </header>

        {/* Minimal Category Filter */}
        <div className="filter-bar-minimal" role="tablist">
          {CATEGORY_FILTERS.map((cat) => (
            <button
              key={cat.key}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat.key}
              className={`filter-link-minimal ${selectedCategory === cat.key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Project List */}
        <div className="projects-showcase-list">
          {filteredProjects.map((project, index) => {
            const indexFormatted = String(index + 1).padStart(2, '0');
            return (
              <article key={project.id} className="project-item-minimal">
                <div className="project-left-col">
                  <span className="project-num">{indexFormatted}</span>
                  <span className="project-category-tag">{project.categoryLabel}</span>
                </div>

                <div className="project-center-col">
                  <h3 className="project-heading-minimal">{project.title}</h3>
                  <p className="project-summary-minimal">{project.description}</p>
                  <div className="project-tech-row">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="tech-tag-minimal">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-right-col">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-minimal-btn"
                      title="Kunjungi Live Demo"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-minimal-btn secondary"
                    title="Lihat Repositori GitHub"
                  >
                    <GithubIcon size={15} />
                    <span>Kode</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
