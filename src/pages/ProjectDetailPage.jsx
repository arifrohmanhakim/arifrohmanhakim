import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, AlertCircle, Cpu, CheckCircle2, UserCheck, Building2, Calendar, Layers, Mail, FileText } from 'lucide-react';
import { FaGooglePlay, FaGithub } from 'react-icons/fa6';
import { PROJECTS_DATA, PROFILE_DATA } from '../constants/portfolioData';
import { getProjectBrandLogo } from '../components/BrandLogos';

export const ProjectDetailPage = ({
  projectId,
  onNavigateHome,
  onNavigateProjects,
  onSelectProject
}) => {
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);

  const project =
    PROJECTS_DATA.find((p) => p.id === projectId) || PROJECTS_DATA[0];

  useEffect(() => {
    setActiveScreenshotIndex(0);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectId]);

  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const prevProject =
    PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject =
    PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  const currentDisplayImage =
    project.screenshots && project.screenshots[activeScreenshotIndex]
      ? project.screenshots[activeScreenshotIndex].url
      : project.image;

  const currentScreenshotTitle =
    project.screenshots && project.screenshots[activeScreenshotIndex]
      ? project.screenshots[activeScreenshotIndex].title
      : project.title;

  const liveLink = project.liveUrl || project.demoUrl;

  return (
    <div className="project-detail-wrapper">
      <div className="project-detail-ambient-glow"></div>

      <div className="container">
        {/* Navigation Breadcrumb */}
        <div className="project-detail-top-nav">
          <button
            type="button"
            className="project-detail-back-btn"
            onClick={onNavigateProjects}
          >
            <ArrowLeft size={16} />
            <span>Back to All Projects</span>
          </button>

          <nav className="project-detail-breadcrumbs" aria-label="Breadcrumb">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
            >
              Home
            </a>
            <span>/</span>
            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                onNavigateProjects();
              }}
            >
              Works
            </a>
            <span>/</span>
            <span className="current">{project.title}</span>
          </nav>
        </div>

        {/* Hero Header */}
        <header className="project-detail-header">
          <div className="project-detail-brand-row">
            <div className="project-detail-brand-badge" title={project.client}>
              {getProjectBrandLogo(project.id, 24)}
            </div>
            <span className="project-detail-category-pill">{project.categoryLabel}</span>
          </div>

          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-tagline">{project.tagline}</p>
          <p className="project-detail-desc">{project.description}</p>

          {/* Quick Metadata Grid */}
          <div className="project-detail-meta-grid">
            <div className="project-detail-meta-card">
              <span className="meta-card-label">Role &amp; Responsibility</span>
              <span className="meta-card-val">{project.role}</span>
            </div>
            <div className="project-detail-meta-card">
              <span className="meta-card-label">Client / Organization</span>
              <span className="meta-card-val">{project.client}</span>
            </div>
            <div className="project-detail-meta-card">
              <span className="meta-card-label">Timeline</span>
              <span className="meta-card-val">{project.year}</span>
            </div>
            <div className="project-detail-meta-card">
              <span className="meta-card-label">Primary Stack</span>
              <span className="meta-card-val">{project.primaryStack.join(' • ')}</span>
            </div>
          </div>

          {/* Direct Action Links */}
          <div className="project-detail-actions-row">
            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-btn-primary"
              >
                <FaGooglePlay size={16} />
                <span>View on Google Play</span>
                <ExternalLink size={14} />
              </a>
            )}

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={project.playStoreUrl ? "detail-btn-ghost" : "detail-btn-primary"}
              >
                <span>Visit Live Platform</span>
                <ExternalLink size={14} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-btn-ghost"
              >
                <FaGithub size={16} />
                <span>Source Repository</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </header>

        {/* Visual Media Showcase */}
        <section className="project-detail-media-card">
          <div className="project-detail-hero-media">
            <img
              src={currentDisplayImage}
              alt={currentScreenshotTitle}
              className="detail-hero-img"
            />
          </div>

          {project.screenshots && project.screenshots.length > 0 && (
            <div className="detail-media-caption-bar">
              <span className="detail-caption-title">{currentScreenshotTitle}</span>

              {project.screenshots.length > 1 && (
                <div className="detail-gallery-thumbs">
                  {project.screenshots.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`detail-thumb-btn ${activeScreenshotIndex === idx ? 'active' : ''}`}
                      onClick={() => setActiveScreenshotIndex(idx)}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>

        {/* Transparent Role & Scope Attribution Banner */}
        {project.scopeNote && (
          <aside className="detail-scope-card">
            <span className="detail-scope-label">Role &amp; Contribution Clarity</span>
            <p className="detail-scope-text">{project.scopeNote}</p>
          </aside>
        )}

        {/* Deep-Dive Case Study */}
        {project.caseStudy && (
          <section className="detail-case-study-section">
            <div className="detail-section-title-wrap">
              <div className="creative-eyebrow">
                <span className="creative-eyebrow-line"></span>
                <span>Engineering Case Study</span>
                <span className="creative-eyebrow-line"></span>
              </div>
              <h2 className="detail-section-title">Problem, Architecture &amp; Impact</h2>
              <p className="detail-section-subtitle">
                Deconstructing the technical challenges and scalable architectural decisions behind this production release.
              </p>
            </div>

            <div className="detail-case-study-grid">
              <div className="detail-case-card challenge">
                <div className="detail-case-card-header">
                  <AlertCircle size={18} />
                  <span>The Operational Challenge</span>
                </div>
                <p>{project.caseStudy.problem}</p>
              </div>

              <div className="detail-case-card solution">
                <div className="detail-case-card-header">
                  <Cpu size={18} />
                  <span>Architectural Solution</span>
                </div>
                <p>{project.caseStudy.solution}</p>
              </div>

              <div className="detail-case-card impact">
                <div className="detail-case-card-header">
                  <CheckCircle2 size={18} />
                  <span>Impact &amp; Results</span>
                </div>
                <p>{project.caseStudy.impact}</p>
              </div>
            </div>
          </section>
        )}

        {/* Engineering Specifications & Full Tech Cloud */}
        <section className="detail-specs-stack-row">
          {project.specs && (
            <div className="detail-specs-panel">
              <h3>Engineering Specifications</h3>
              <div className="detail-specs-list">
                {project.specs.map((spec, i) => (
                  <div key={i} className="detail-spec-item">
                    <div className="detail-spec-label">{spec.label}</div>
                    <div className="detail-spec-val">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="detail-stack-panel">
            <h3>Complete Technology Stack</h3>
            <div className="detail-tech-cloud">
              {project.techStack.map((tech, i) => (
                <span key={i} className="detail-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Previous & Next Project Navigation */}
        <nav className="detail-pagination-row" aria-label="Project pagination">
          <div
            className="detail-pagination-card prev"
            onClick={() => onSelectProject(prevProject.id)}
          >
            <span className="detail-pagination-direction">
              <ArrowLeft size={13} />
              <span>Previous Project</span>
            </span>
            <span className="detail-pagination-title">{prevProject.title}</span>
            <span className="detail-pagination-role">{prevProject.role}</span>
          </div>

          <div
            className="detail-pagination-card next"
            onClick={() => onSelectProject(nextProject.id)}
          >
            <span className="detail-pagination-direction">
              <span>Next Project</span>
              <ArrowRight size={13} />
            </span>
            <span className="detail-pagination-title">{nextProject.title}</span>
            <span className="detail-pagination-role">{nextProject.role}</span>
          </div>
        </nav>

        {/* Bottom Callout Banner */}
        <section className="projects-bottom-callout">
          <div className="projects-bottom-callout-text">
            <h3>Architecting your next system?</h3>
            <p>
              Available for full stack engineering contracts, offline-first mobile apps, and enterprise web platforms.
            </p>
          </div>

          <div className="projects-bottom-callout-actions">
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="bento-btn-primary"
            >
              <Mail size={15} />
              <span>Email Directly</span>
            </a>

            <a
              href={PROFILE_DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bento-btn-ghost"
            >
              <FileText size={15} />
              <span>Download CV</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
