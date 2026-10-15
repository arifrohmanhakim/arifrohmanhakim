import React, { useState, useEffect } from 'react';
import { X, ExternalLink, ArrowRight, Layers } from 'lucide-react';
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
          aria-label="Tutup modal"
        >
          <X size={18} />
        </button>

        <div className="apple-modal-content-grid">
          {/* Kolom Visual & Galeri Screenshot Nyata */}
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

            {/* Navigasi Tab Screenshot Bersih & Elegan */}
            {project.screenshots && project.screenshots.length > 1 && (
              <div style={{ marginTop: '16px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.screenshots.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveScreenshotIndex(idx)}
                      style={{
                        background: activeScreenshotIndex === idx ? '#f59e0b' : 'rgba(255, 255, 255, 0.06)',
                        color: activeScreenshotIndex === idx ? '#000000' : '#cbd5e1',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '5px 11px',
                        borderRadius: '9999px',
                        fontSize: '0.72rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="apple-modal-quick-meta">
              <span className="apple-modal-badge">{project.eyebrow}</span>
              <span className="apple-modal-client">{project.client}</span>
            </div>
          </div>

          {/* Kolom Cerita & Eksplorasi Proyek */}
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
            </div>

            <div className="apple-modal-body-scroll">
              <div className="apple-modal-section">
                <h4 className="apple-modal-section-title">Cerita Proyek</h4>
                <p className="apple-modal-desc">{project.description}</p>
              </div>

              {project.specs && (
                <div className="apple-modal-section">
                  <h4 className="apple-modal-section-title">Sorotan Rekayasa</h4>
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
                        <div style={{ fontSize: '0.7rem', color: '#f59e0b', fontWeight: '700', textTransform: 'uppercase' }}>
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

              <div className="apple-modal-section">
                <h4 className="apple-modal-section-title">Teknologi &amp; Pendekatan</h4>
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
                  <FaGooglePlay size={16} />
                  <span>Buka di Google Play</span>
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
                  <span>Buka Website Resmi</span>
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
