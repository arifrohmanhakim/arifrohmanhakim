import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { PROJECTS_DATA } from '../constants/portfolioData';

export const RecentProjectsSection = () => {
  const featured = PROJECTS_DATA.slice(0, 4);

  return (
    <section id="projects" className="madison-projects-section">
      <div className="container">
        <div className="projects-header-row">
          <h2 className="madison-section-headline">RECENT PROJECTS</h2>
          <a
            href="https://github.com/arifrohmanhakim"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-link"
          >
            <span>Semua di GitHub</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="madison-projects-grid">
          {featured.map((project) => (
            <article key={project.id} className="madison-project-card">
              <div className="project-card-top-meta">
                <span className="project-pill-badge">{project.categoryLabel}</span>
                <div className="project-action-icons">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-circle-btn"
                      title="Lihat Demo"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-circle-btn"
                    title="Repositori GitHub"
                  >
                    <GithubIcon size={16} />
                  </a>
                </div>
              </div>

              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
              </div>

              <div className="project-card-footer">
                <div className="project-tags-wrap">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-chip">{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
