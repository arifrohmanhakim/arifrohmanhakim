import React, { useEffect } from 'react';
import { X, ExternalLink, ArrowRight, CheckCircle2, Layers, FileText } from 'lucide-react';
import { FaGooglePlay } from 'react-icons/fa6';
import { getProjectBrandLogo } from './BrandLogos';

export const ProjectDetailModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="anthropic-modal-backdrop" onClick={onClose}>
      <div 
        className="anthropic-modal-sheet" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        <div className="anthropic-modal-top-bar">
          <div className="anthropic-dossier-meta">
            <span className="anthropic-dossier-tag">SYSTEM DOSSIER</span>
            <span className="anthropic-dossier-id">{project.id.toUpperCase()}</span>
          </div>

          <button 
            onClick={onClose} 
            className="anthropic-modal-close-btn"
            aria-label="Tutup dossier"
          >
            <X size={16} />
            <span className="anthropic-close-text">ESC</span>
          </button>
        </div>

        <div className="anthropic-modal-body-layout">
          <div className="anthropic-modal-visual-column">
            <div className="anthropic-modal-img-frame">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="anthropic-modal-img"
                  loading="lazy"
                />
              ) : (
                <div className="anthropic-modal-placeholder">
                  <Layers size={40} />
                </div>
              )}
            </div>

            <div className="anthropic-modal-brand-strip">
              <div className="anthropic-brand-chip-modal">
                {getProjectBrandLogo(project.id, 24)}
              </div>
              <div className="anthropic-client-meta">
                <span className="anthropic-client-label">Organization</span>
                <span className="anthropic-client-name">{project.client}</span>
              </div>
            </div>
          </div>

          <div className="anthropic-modal-text-column">
            <div className="anthropic-modal-header">
              <span className="anthropic-eyebrow-accent">{project.eyebrow}</span>
              <h2 id="modal-project-title" className="anthropic-modal-title">
                {project.title}
              </h2>
              <p className="anthropic-modal-tagline">{project.tagline}</p>
            </div>

            <div className="anthropic-modal-section">
              <h4 className="anthropic-section-heading">Arsitektur &amp; Ikhtisar Sistem</h4>
              <p className="anthropic-modal-description">{project.description}</p>
            </div>

            <div className="anthropic-modal-section">
              <h4 className="anthropic-section-heading">Technical Specifications</h4>
              <div className="anthropic-specs-matrix">
                {project.specs && project.specs.map((spec, i) => (
                  <div key={i} className="anthropic-matrix-row">
                    <span className="anthropic-matrix-label">{spec.label}</span>
                    <span className="anthropic-matrix-val">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="anthropic-modal-section">
              <h4 className="anthropic-section-heading">Implemented Technology Stack</h4>
              <div className="anthropic-tech-tokens">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="anthropic-tech-token">
                    <CheckCircle2 size={12} className="anthropic-token-icon" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="anthropic-modal-footer">
              {project.playStoreUrl && (
                <a 
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anthropic-btn-clay"
                >
                  <FaGooglePlay size={14} />
                  <span>Google Play Production</span>
                </a>
              )}

              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anthropic-btn-clay"
                >
                  <span>Buka Live Website</span>
                  <ExternalLink size={14} />
                </a>
              )}

              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anthropic-btn-ghost"
                >
                  <span>Lihat Source Code</span>
                  <ExternalLink size={13} />
                </a>
              )}

              <button onClick={onClose} className="anthropic-btn-link">
                Kembali
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
