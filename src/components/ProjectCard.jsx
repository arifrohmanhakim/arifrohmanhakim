import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const ProjectCard = ({ project }) => {
  return (
    <article className={`project-card ${project.isFeatured ? 'featured-card' : ''}`}>
      <div>
        <div className="project-card-top">
          <span className="project-category-badge">{project.categoryLabel}</span>
          <div className="project-links">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-icon-link"
                title={`Kunjungi Demo Live ${project.title}`}
                aria-label={`Demo live ${project.title}`}
              >
                <ExternalLink size={18} />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-icon-link"
              title={`Lihat Repositori ${project.title} di GitHub`}
              aria-label={`Repositori GitHub ${project.title}`}
            >
              <GithubIcon size={18} />
            </a>
          </div>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>

      <div className="project-tags">
        {project.techStack.map((tech, index) => (
          <span key={index} className="tag-pill">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};
