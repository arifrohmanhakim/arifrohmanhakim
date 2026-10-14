import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { PROJECTS_DATA } from '../constants/portfolioData';

export const RecentProjectsSection = () => {
  const featured = PROJECTS_DATA.slice(0, 4);

  return (
    <section id="projects" className="apple-section">
      <div className="container">
        <div className="apple-section-header-split">
          <div>
            <span className="apple-eyebrow">FEATURED INVENTIONS</span>
            <h2 className="apple-headline">
              Engineered from scratch. <br />
              <span className="apple-headline-gradient">Open for exploration.</span>
            </h2>
          </div>
          <a
            href="https://github.com/arifrohmanhakim"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-ghost-pill-link"
          >
            <span>Lihat Semua di GitHub</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="apple-projects-bento">
          {featured.map((project, idx) => (
            <article
              key={project.id}
              className={`apple-project-bento-card apple-reveal-card ${idx === 0 ? 'card-featured-hero' : ''}`}
            >
              <div className="apple-project-card-header">
                <div className="apple-project-pill-group">
                  <span className="apple-category-pill">{project.categoryLabel}</span>
                  {idx === 0 && (
                    <span className="apple-signature-pill">
                      <Sparkles size={12} />
                      <span>Signature Work</span>
                    </span>
                  )}
                </div>

                <div className="apple-card-actions">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apple-action-btn apple-action-demo"
                      title={`Buka Demo ${project.title}`}
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apple-action-btn apple-action-source"
                    title={`Repositori ${project.title}`}
                  >
                    <GithubIcon size={15} />
                    <span>Source</span>
                  </a>
                </div>
              </div>

              <div className="apple-project-card-body">
                <h3 className="apple-project-title">{project.title}</h3>
                <p className="apple-project-desc">{project.description}</p>
              </div>

              <div className="apple-project-card-footer">
                <div className="apple-tags-row">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="apple-tech-tag">{tech}</span>
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
