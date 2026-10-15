import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, ArrowRight, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGooglePlay } from 'react-icons/fa6';
import { PROJECTS_DATA } from '../constants/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { getProjectBrandLogo } from './BrandLogos';
import { useAppleSlider } from '../hooks/useAppleSlider';

export const RecentProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [cardWidth, setCardWidth] = useState(0);
  const firstCardRef = useRef(null);

  const projects = PROJECTS_DATA;
  const totalSlides = projects.length;

  const {
    currentIndex,
    isPlaying,
    isDragging,
    dragOffset,
    nextSlide,
    prevSlide,
    goToSlide,
    togglePlay,
    dragHandlers
  } = useAppleSlider({ totalSlides, autoplayInterval: 5000 });

  // Ukur lebar kartu aktif untuk menghitung pergeseran translasi yang presisi
  useEffect(() => {
    const updateCardMetrics = () => {
      if (firstCardRef.current) {
        const gap = 28;
        setCardWidth(firstCardRef.current.offsetWidth + gap);
      }
    };

    updateCardMetrics();
    window.addEventListener('resize', updateCardMetrics);
    return () => window.removeEventListener('resize', updateCardMetrics);
  }, []);

  const trackTransform = cardWidth > 0
    ? `translate3d(${-currentIndex * cardWidth + dragOffset}px, 0, 0)`
    : `translate3d(${dragOffset}px, 0, 0)`;

  return (
    <section id="projects" className="apple-slider-section">
      <div className="container apple-slider-header-wrap">
        <div className="creative-header" style={{ marginBottom: 0 }}>
          <div className="creative-eyebrow">
            <span className="creative-eyebrow-line"></span>
            <span>Karya Terpilih</span>
          </div>

          <h2 className="creative-headline">
            Keunggulan demi keunggulan. <br />
            <em>Dirancang dengan presisi &amp; rasa.</em>
          </h2>

          <p className="creative-lead">
            Jelajahi inovasi produksi: dari pemetaan cerdas perkebunan nasional, ekosistem otomotif Astra Motor Honda, CRM kecerdasan buatan, hingga resort mewah Samara Lombok &amp; e-commerce global.
          </p>
        </div>
      </div>

      {/* Horizontal Slider Viewport with Pointer Drag Handlers */}
      <div
        className="apple-slider-viewport"
        {...dragHandlers}
      >
        <div
          className={`apple-slider-track ${isDragging ? 'is-dragging' : ''}`}
          style={{ transform: trackTransform }}
        >
          {projects.map((project, index) => {
            const isActive = index === currentIndex;

            return (
              <article
                key={project.id}
                ref={index === 0 ? firstCardRef : null}
                className={`apple-slide-card ${isActive ? 'is-active' : ''}`}
                onClick={() => {
                  if (!isActive) {
                    goToSlide(index);
                  } else {
                    setSelectedProject(project);
                  }
                }}
              >
                {/* Full-Bleed Background Canvas Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="apple-slide-bg-img"
                  loading="lazy"
                  draggable="false"
                />

                {/* Floating Mobile Companion View (jika proyek memiliki mobileImage) */}
                {project.mobileImage && (
                  <div className="apple-slide-floating-mobile" aria-hidden="true">
                    <img
                      src={project.mobileImage}
                      alt={`${project.title} Mobile View`}
                      className="apple-slide-floating-mobile-img"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                )}

                {/* Top Vignette Gradient Overlay */}
                <div className="apple-slide-gradient-top" aria-hidden="true"></div>

                {/* Bottom Vignette Gradient Overlay */}
                <div className="apple-slide-gradient-bottom" aria-hidden="true"></div>

                {/* Layer Konten (Header di Atas & Footer di Bawah) */}
                <div className="apple-slide-content-layer">
                  {/* Top Header Content */}
                  <div className="apple-slide-header-area">
                    <div className="apple-slide-eyebrow-row">
                      <div className="apple-slide-brand-chip">
                        {getProjectBrandLogo(project.id, 28)}
                      </div>
                    </div>

                    <h3 className="apple-slide-title">{project.title}</h3>
                    <p className="apple-slide-tagline">{project.tagline}</p>
                  </div>

                  {/* Bottom Footer Content (Teknologi & Aksi) */}
                  <div
                    className="apple-slide-footer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="apple-slide-tech-row">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="apple-slide-pill">{tech}</span>
                      ))}
                    </div>

                    <div className="apple-slide-cta-row">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="apple-slide-btn-primary"
                      >
                        <span>Detail Proyek</span>
                        <ArrowRight size={14} />
                      </button>

                      {project.playStoreUrl && (
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="apple-slide-btn-ghost"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGooglePlay size={13} />
                          <span>Google Play</span>
                          <ArrowUpRight size={12} />
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="apple-slide-btn-ghost"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Situs Resmi</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Apple-style Dot Bar & Autoplay Controls */}
      <div className="apple-slider-controls-bar">
        {/* Pill Dot Navigation */}
        <div className="apple-dot-nav-pill" role="tablist" aria-label="Navigasi slide proyek">
          {projects.map((project, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={project.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Pindah ke slide ${index + 1}: ${project.title}`}
                className={`apple-dot-btn ${isActive ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <span className="apple-dot-shape"></span>
              </button>
            );
          })}
        </div>

        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={togglePlay}
          className="apple-playback-btn"
          aria-label={isPlaying ? 'Jeda perputaran otomatis' : 'Putar otomatis slide'}
          title={isPlaying ? 'Jeda Autoplay' : 'Mulai Autoplay'}
        >
          {isPlaying ? <Pause size={15} /> : <Play size={15} style={{ marginLeft: 2 }} />}
        </button>
      </div>

      {/* Modal Detail Proyek */}
      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
