import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import { FaGooglePlay } from 'react-icons/fa6';
import { PROJECTS_DATA } from '../constants/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { getProjectBrandLogo } from './BrandLogos';

export const RecentProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const heroProject = PROJECTS_DATA[0];
  const gridProjects = PROJECTS_DATA.slice(1, 5);

  const handleOpenDetail = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="anthropic-section">
      <div className="container">
        <div className="anthropic-header-block">
          <div className="anthropic-eyebrow-row">
            <span className="anthropic-eyebrow-index">01</span>
            <span className="anthropic-eyebrow-divider">/</span>
            <span className="anthropic-eyebrow-text">Applied Systems &amp; Engineering Deployments</span>
          </div>

          <h2 className="anthropic-headline">
            Rigorous software engineering. <br />
            <em>Built for real-world resilience.</em>
          </h2>

          <p className="anthropic-lead">
            Kompilasi sistem produksi lintas domain: arsitektur mobile enterprise agrikultur skala nasional,
            portal luxury yachting, ekosistem CRM cerdas AI, hingga platform otomotif Astra Motor Honda.
          </p>
        </div>

        {heroProject && (
          <article className="anthropic-hero-card">
            <div className="anthropic-hero-card-grid">
              <div className="anthropic-hero-content">
                <div className="anthropic-card-top-meta">
                  <span className="anthropic-card-index">01.01</span>
                  <div className="anthropic-brand-chip">
                    {getProjectBrandLogo(heroProject.id, 24)}
                  </div>
                  <span className="anthropic-badge-tag">{heroProject.eyebrow}</span>
                </div>

                <h3 className="anthropic-card-title">{heroProject.title}</h3>
                <p className="anthropic-card-tagline">{heroProject.tagline}</p>
                <p className="anthropic-card-desc">{heroProject.description}</p>

                <div className="anthropic-specs-pill-list">
                  {heroProject.techStack.map((tech, i) => (
                    <span key={i} className="anthropic-spec-tag">{tech}</span>
                  ))}
                </div>

                <div className="anthropic-cta-group">
                  <button
                    type="button"
                    onClick={() => handleOpenDetail(heroProject)}
                    className="anthropic-btn-clay"
                    aria-label={`Pelajari arsitektur ${heroProject.title}`}
                  >
                    <span>Pelajari Arsitektur</span>
                    <ArrowRight size={15} />
                  </button>

                  {heroProject.playStoreUrl && (
                    <a
                      href={heroProject.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="anthropic-btn-ghost"
                    >
                      <FaGooglePlay size={13} />
                      <span>Google Play</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>

              <div 
                className="anthropic-hero-visual-frame"
                onClick={() => handleOpenDetail(heroProject)}
                role="button"
                tabIndex={0}
                aria-label={`Buka visual dan spesifikasi ${heroProject.title}`}
              >
                <div className="anthropic-img-container">
                  <img
                    src={heroProject.image}
                    alt={heroProject.title}
                    className="anthropic-hero-img"
                    loading="lazy"
                  />
                  <div className="anthropic-view-prompt">
                    <span>Lihat Dossier Teknis</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        <div className="anthropic-grid-cards">
          {gridProjects.map((project, idx) => (
            <article key={project.id} className="anthropic-item-card">
              <div 
                className="anthropic-item-visual-frame"
                onClick={() => handleOpenDetail(project)}
                role="button"
                tabIndex={0}
                aria-label={`Buka detail ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="anthropic-item-img"
                  loading="lazy"
                />
                <div className="anthropic-item-visual-badge">
                  <span className="anthropic-brand-chip-small">
                    {getProjectBrandLogo(project.id, 20)}
                  </span>
                  <span className="anthropic-item-index-num">01.0{idx + 2}</span>
                </div>
              </div>

              <div className="anthropic-item-content">
                <span className="anthropic-item-eyebrow">{project.eyebrow}</span>
                <h3 className="anthropic-item-title">{project.title}</h3>
                <p className="anthropic-item-tagline">{project.tagline}</p>
                <p className="anthropic-item-desc">{project.description}</p>

                <div className="anthropic-item-tags">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span key={i} className="anthropic-mini-tag">{tech}</span>
                  ))}
                </div>

                <div className="anthropic-item-footer">
                  <button
                    type="button"
                    onClick={() => handleOpenDetail(project)}
                    className="anthropic-item-link-btn"
                  >
                    <span>Dossier Proyek</span>
                    <ArrowRight size={14} />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="anthropic-item-ext-link"
                    >
                      <span>Situs Resmi</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectDetailModal project={selectedProject} onClose={handleCloseDetail} />
    </section>
  );
};
