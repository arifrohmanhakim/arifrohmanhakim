import React, { useState, useEffect } from 'react';
import { X, ExternalLink, ArrowRight, Layers, CheckCircle2, AlertCircle, Cpu } from 'lucide-react';
import { FaGooglePlay } from 'react-icons/fa6';
import { getProjectBrandLogo } from './BrandLogos';

export const ProjectDetailModal = ({ project, onClose }) => {
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);

  useEffect(() => {
    setActiveScreenshotIndex(0);
  }, [project]);

  useEffect(() => {
    if (!project) {
      document.body.style.overflow = '';
      return;
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentDisplayImage =
    project.screenshots && project.screenshots[activeScreenshotIndex]
      ? project.screenshots[activeScreenshotIndex].url
      : project.image;

  const currentScreenshotTitle =
    project.screenshots && project.screenshots[activeScreenshotIndex]
      ? project.screenshots[activeScreenshotIndex].title
      : null;

  return (
    <div className="apple-modal-backdrop" onClick={onClose}>
      <div
        className="apple-modal-sheet"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        <button
          onClick={onClose}
          className="apple-modal-close-btn"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div className="apple-modal-content-grid">
          {/* Visual Column & Real Screenshots Gallery */}
          <div className="apple-modal-media-col">
            <div className="apple-modal-image-wrapper">
              {currentDisplayImage ? (
                <img
                  src={currentDisplayImage}
                  alt={currentScreenshotTitle || project.title}
                  className="apple-modal-hero-img"
                  loading="lazy"
                />
              ) : (
                <div className="apple-modal-image-placeholder">
                  <Layers size={48} />
                </div>
              )}
            </div>

            {/* Screenshots Thumbnails */}
            {project.screenshots && project.screenshots.length > 1 && (
              <div style={{ marginTop: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
                  {project.screenshots.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveScreenshotIndex(idx)}
                      style={{
                        position: 'relative',
                        width: '64px',
                        height: '42px',
                        borderRadius: '6px',
                        overflow: 'hidden',
                        border: activeScreenshotIndex === idx ? '2px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.15)',
                        boxShadow: activeScreenshotIndex === idx ? '0 0 10px rgba(245, 158, 11, 0.4)' : 'none',
                        background: '#090a0f',
                        cursor: 'pointer',
                        padding: 0,
                        flexShrink: 0,
                        opacity: activeScreenshotIndex === idx ? 1 : 0.6,
                        transition: 'all 0.2s ease'
                      }}
                      title={item.title}
                    >
                      <img
                        src={item.url}
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="apple-modal-quick-meta">
              <span className="apple-modal-badge">{project.role}</span>
              <span className="apple-modal-client">{project.client} • {project.year}</span>
            </div>
          </div>

          {/* Details & Case Study Column */}
          <div className="apple-modal-specs-col">
            <div className="apple-modal-header">
              <div className="apple-modal-brand-row">
                <div className="apple-brand-emblem-wrap">
                  {getProjectBrandLogo(project.id, 24)}
                </div>
                <span className="apple-modal-category">{project.categoryLabel}</span>
              </div>
              <h2 id="modal-project-title" className="apple-modal-title">{project.title}</h2>
              <p className="apple-modal-tagline">{project.tagline}</p>

              {/* Transparent Scope & Attribution Banner */}
              {project.scopeNote && (
                <div className="apple-modal-scope-box">
                  <span className="apple-scope-label">ROLE &amp; SCOPE CLARITY</span>
                  <p className="apple-scope-text">{project.scopeNote}</p>
                </div>
              )}
            </div>

            <div className="apple-modal-body-scroll">
              {/* Deep-Dive Case Study: Problem -> Architecture -> Impact */}
              {project.caseStudy && (
                <div className="apple-modal-section">
                  <h4 className="apple-modal-section-title">Case Study &amp; Technical Depth</h4>
                  <div className="case-study-cards-wrap">
                    <div className="case-study-card challenge">
                      <div className="case-study-card-head">
                        <AlertCircle size={15} />
                        <span>The Operational Challenge</span>
                      </div>
                      <p>{project.caseStudy.problem}</p>
                    </div>

                    <div className="case-study-card solution">
                      <div className="case-study-card-head">
                        <Cpu size={15} />
                        <span>Architectural Solution</span>
                      </div>
                      <p>{project.caseStudy.solution}</p>
                    </div>

                    <div className="case-study-card impact">
                      <div className="case-study-card-head">
                        <CheckCircle2 size={15} />
                        <span>Impact &amp; Results</span>
                      </div>
                      <p>{project.caseStudy.impact}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Engineering Specs */}
              {project.specs && (
                <div className="apple-modal-section">
                  <h4 className="apple-modal-section-title">Engineering Specifications</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {project.specs.map((spec, i) => (
                      <div
                        key={i}
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.07)',
                          borderRadius: '12px',
                          padding: '10px 14px'
                        }}
                      >
                        <div style={{ fontSize: '0.7rem', color: '#f59e0b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {spec.label}
                        </div>
                        <div style={{ fontSize: '0.86rem', color: '#f1f5f9', marginTop: '2px' }}>
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="apple-modal-section">
                <h4 className="apple-modal-section-title">Core Technology Stack</h4>
                <div className="apple-modal-tech-cloud">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="apple-tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="apple-modal-actions">
              {project.playStoreUrl && (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-primary-btn"
                >
                  <FaGooglePlay size={15} />
                  <span>View on Google Play</span>
                  <ExternalLink size={14} />
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={project.playStoreUrl ? "apple-ghost-btn" : "apple-primary-btn"}
                >
                  <span>Visit Production Platform</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
