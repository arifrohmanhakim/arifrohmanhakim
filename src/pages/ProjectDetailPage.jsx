import React, { useState, useEffect, useCallback } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  AlertCircle,
  Cpu,
  CheckCircle2,
  UserCheck,
  Building2,
  Calendar,
  Layers,
  Mail,
  FileText,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X
} from 'lucide-react';
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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const project =
    PROJECTS_DATA.find((p) => p.id === projectId) || PROJECTS_DATA[0];

  useEffect(() => {
    setActiveScreenshotIndex(0);
    setIsLightboxOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectId]);

  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const prevProject =
    PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject =
    PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  const screenshots =
    project.screenshots && project.screenshots.length > 0
      ? project.screenshots
      : [{ url: project.image, title: project.title }];

  const currentDisplayImage = screenshots[activeScreenshotIndex]?.url || project.image;
  const currentScreenshotTitle = screenshots[activeScreenshotIndex]?.title || project.title;

  const handlePrevScreenshot = useCallback(() => {
    setActiveScreenshotIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  const handleNextScreenshot = useCallback(() => {
    setActiveScreenshotIndex((prev) => (prev + 1) % screenshots.length);
  }, [screenshots.length]);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
      if (e.key === 'ArrowLeft') handlePrevScreenshot();
      if (e.key === 'ArrowRight') handleNextScreenshot();
    };

    window.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isLightboxOpen, handlePrevScreenshot, handleNextScreenshot]);

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

        {/* Visual Media Showcase & Studio Gallery */}
        <section className="project-detail-media-card" aria-label="Visual Media Showcase">
          {/* Studio Header Bar */}
          <div className="detail-media-window-bar">
            <div className="window-dots" aria-hidden="true">
              <span className="dot dot-close" />
              <span className="dot dot-minimize" />
              <span className="dot dot-expand" />
            </div>

            <div className="window-center-title">
              <Layers size={13} className="window-icon" />
              <span className="window-title-text">{currentScreenshotTitle}</span>
            </div>

            <div className="window-actions">
              <span className="window-counter-badge">
                {activeScreenshotIndex + 1} / {screenshots.length}
              </span>
              <button
                type="button"
                className="window-expand-btn"
                onClick={() => setIsLightboxOpen(true)}
                aria-label="Enlarge screenshot in fullscreen"
                title="Fullscreen / Enlarge"
              >
                <Maximize2 size={13} />
                <span className="expand-label">Zoom</span>
              </button>
            </div>
          </div>

          {/* Studio Hero Stage */}
          <div
            className="detail-hero-media-container"
            onClick={() => setIsLightboxOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsLightboxOpen(true);
              }
            }}
            title="Click to enlarge"
          >
            {/* Ambient Blurred Backdrop */}
            <div
              className="detail-hero-backdrop-glow"
              style={{ backgroundImage: `url(${currentDisplayImage})` }}
              aria-hidden="true"
            />

            {/* Main Image */}
            <img
              src={currentDisplayImage}
              alt={currentScreenshotTitle}
              className="detail-hero-img"
              key={currentDisplayImage}
            />

            {/* Navigation Overlay Arrows */}
            {screenshots.length > 1 && (
              <>
                <button
                  type="button"
                  className="detail-nav-arrow detail-nav-prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevScreenshot();
                  }}
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  className="detail-nav-arrow detail-nav-next"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextScreenshot();
                  }}
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Caption & Visual Thumbnail Strip */}
          <div className="detail-media-caption-bar">
            <div className="detail-caption-info">
              <span className="detail-caption-label">Active Preview</span>
              <p className="detail-caption-title">{currentScreenshotTitle}</p>
            </div>

            {screenshots.length > 1 && (
              <div
                className="detail-gallery-thumbs"
                role="tablist"
                aria-label="Screenshots list"
              >
                {screenshots.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    role="tab"
                    aria-selected={activeScreenshotIndex === idx}
                    className={`detail-thumb-preview ${activeScreenshotIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveScreenshotIndex(idx)}
                    title={item.title}
                  >
                    <img
                      src={item.url}
                      alt=""
                      aria-hidden="true"
                      className="detail-thumb-img"
                    />
                    <span className="detail-thumb-badge">{idx + 1}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Fullscreen Lightbox Modal */}
        {isLightboxOpen && (
          <div
            className="detail-lightbox-backdrop"
            onClick={() => setIsLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Screenshot lightbox"
          >
            <div className="detail-lightbox-bar" onClick={(e) => e.stopPropagation()}>
              <div className="lightbox-title-wrap">
                <span className="lightbox-title">{currentScreenshotTitle}</span>
                <span className="lightbox-counter">
                  {activeScreenshotIndex + 1} of {screenshots.length}
                </span>
              </div>
              <button
                type="button"
                className="detail-lightbox-close"
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>
            </div>

            <div className="detail-lightbox-content" onClick={(e) => e.stopPropagation()}>
              {screenshots.length > 1 && (
                <button
                  type="button"
                  className="lightbox-nav-btn lightbox-nav-prev"
                  onClick={handlePrevScreenshot}
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              <img
                src={currentDisplayImage}
                alt={currentScreenshotTitle}
                className="detail-lightbox-img"
              />

              {screenshots.length > 1 && (
                <button
                  type="button"
                  className="lightbox-nav-btn lightbox-nav-next"
                  onClick={handleNextScreenshot}
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>
          </div>
        )}

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
