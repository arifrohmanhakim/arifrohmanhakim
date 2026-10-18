import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { FaGooglePlay } from 'react-icons/fa6';
import { PROJECTS_DATA } from '../constants/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { getProjectBrandLogo } from './BrandLogos';
import { useSectionHeaderParallax } from '../hooks/useSectionHeaderParallax';

export const RecentProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const headerRef = useSectionHeaderParallax();
  const flagshipRef = useRef(null);
  const mobilePrimaryRef = useRef(null);
  const mobileSecondRef = useRef(null);

  const ggfProject = PROJECTS_DATA.find((p) => p.id === 'ggf-fms') || PROJECTS_DATA[0];
  const astraProject = PROJECTS_DATA.find((p) => p.id === 'astra-motor' || p.id === 'atra-motor') || PROJECTS_DATA[1];
  const polygonProject = PROJECTS_DATA.find((p) => p.id === 'polygon-bikes') || PROJECTS_DATA[2];
  const smallProjects = PROJECTS_DATA.filter(
    (p) => !['ggf-fms', 'astra-motor', 'polygon-bikes', 'payaman-os'].includes(p.id)
  );

  useEffect(() => {
    if (typeof CSS !== 'undefined' && CSS.supports && CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
      return;
    }

    const card = flagshipRef.current;
    if (!card) return;

    let isVisible = false;
    let rafId = null;

    const updateParallax = () => {
      if (!isVisible || !card) return;
      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalDist = windowHeight + rect.height;
      const currentPos = windowHeight - rect.top;
      const progress = Math.min(Math.max(currentPos / totalDist, 0), 1);

      const upOffset = 50 - progress * 120;
      const downOffset = -50 + progress * 120;

      if (mobilePrimaryRef.current) {
        mobilePrimaryRef.current.style.transform = `translateY(calc(-50% + ${upOffset.toFixed(1)}px))`;
      }
      if (mobileSecondRef.current) {
        mobileSecondRef.current.style.transform = `translateY(calc(-50% + ${downOffset.toFixed(1)}px))`;
      }
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          updateParallax();
          rafId = null;
        });
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          window.addEventListener('scroll', handleScroll, { passive: true });
          updateParallax();
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      },
      { threshold: 0 }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="projects" className="bento-projects-section">
      <div className="container">
        {/* Section Header */}
        <div ref={headerRef} className="bento-projects-header">
          <div className="creative-eyebrow">
            <span className="creative-eyebrow-line"></span>
            <span>Karya Terpilih</span>
            <span className="creative-eyebrow-line"></span>
          </div>

          <h2 className="creative-headline">
            Solusi Nyata Skala Enterprise. <br />
            <em>Dirancang dengan presisi &amp; rasa.</em>
          </h2>

          <p className="creative-lead">
            Eksplorasi ekosistem produksi: dari digitalisasi perkebunan agroindustri nasional, portal diler otomotif terkemuka, CRM AI multi-kanal, hingga resor mewah & e-commerce global
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="bento-grid">
          {/* 1. HERO FLAGSHIP CARD: GGF FMS (SPAN 12) */}
          {ggfProject && (
            <article
              ref={flagshipRef}
              className="bento-card bento-card-flagship"
              onClick={() => setSelectedProject(ggfProject)}
            >
              <div className="bento-flagship-info">
                <div>
                  <div className="bento-flagship-meta">
                    <div className="bento-brand-badge" title={ggfProject.client}>
                      {getProjectBrandLogo(ggfProject.id, 20)}
                    </div>
                  </div>

                  <h3 className="bento-flagship-title">{ggfProject.title}</h3>
                  <p className="bento-flagship-tagline">{ggfProject.tagline}</p>
                  <p className="bento-flagship-desc">{ggfProject.description}</p>

                  <div className="bento-tech-row">
                    {ggfProject.techStack.map((tech, i) => (
                      <span key={i} className="bento-tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* <div className="bento-actions-row" onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    className="bento-btn-primary"
                    onClick={() => setSelectedProject(ggfProject)}
                  >
                    <span>Detail Spesifikasi</span>
                    <ArrowRight size={16} />
                  </button>

                  {ggfProject.playStoreUrl && (
                    <a
                      href={ggfProject.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bento-btn-ghost"
                    >
                      <FaGooglePlay size={14} />
                      <span>Google Play</span>
                    </a>
                  )}
                </div> */}
              </div>

              {/* Visual Side: Web Kanban + Floating Mobile Companion */}
              <div className="bento-flagship-visual">
                <img
                  src={ggfProject.image}
                  alt={ggfProject.title}
                  className="bento-flagship-main-img"
                  loading="lazy"
                />
                <div className="bento-visual-gradient"></div>

                {ggfProject.mobileImage && (
                  <>
                  <div ref={mobileSecondRef} className="bento-floating-mobile second">
                    <img
                      src={ggfProject.mobileImageSecond}
                      alt={`${ggfProject.title} Mobile`}
                      className="bento-floating-mobile-img"
                      loading="lazy"
                    />
                  </div>
                  <div ref={mobilePrimaryRef} className="bento-floating-mobile">
                    <img
                      src={ggfProject.mobileImage}
                      alt={`${ggfProject.title} Mobile`}
                      className="bento-floating-mobile-img"
                      loading="lazy"
                    />
                  </div>
                  </>
                )}
              </div>
            </article>
          )}

          {/* 2. MEDIUM CARD: Astra Motor Honda (SPAN 6) */}
          {astraProject && (
            <article
              className="bento-card bento-card-medium"
              onClick={() => setSelectedProject(astraProject)}
            >
              <div className="bento-card-media-wrap">
                <img
                  src={astraProject.image}
                  alt={astraProject.title}
                  className="bento-card-media-img"
                  loading="lazy"
                />
                <div className="bento-card-media-overlay"></div>

                {astraProject.mobileImage && (
                  <div className="bento-medium-companion-phone">
                    <img
                      src={astraProject.mobileImage}
                      alt={`${astraProject.title} Mobile`}
                      className="bento-floating-mobile-img"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>

              <div className="bento-card-body">
                <div>
                  <div className="bento-card-top-row">
                    <div className="bento-brand-badge" title={astraProject.client}>
                      {getProjectBrandLogo(astraProject.id, 26)}
                    </div>
                  </div>

                  <h3 className="bento-card-title">{astraProject.title}</h3>
                  <p className="bento-card-tagline">{astraProject.tagline}</p>
                </div>

                {/* <div className="bento-card-footer">
                  <span className="bento-explore-link">
                    <span>Lihat Arsitektur &amp; Fitur</span>
                    <ArrowRight size={15} />
                  </span>
                </div> */}
              </div>
            </article>
          )}

          {/* 3. MEDIUM CARD: Centris.ai (SPAN 6) */}
          {polygonProject && (
            <article
              className="bento-card bento-card-medium"
              onClick={() => setSelectedProject(polygonProject)}
            >
              <div className="bento-card-media-wrap">
                <img
                  src={polygonProject.image}
                  alt={polygonProject.title}
                  className="bento-card-media-img"
                  loading="lazy"
                />
                <div className="bento-card-media-overlay"></div>
              </div>

              <div className="bento-card-body">
                <div>
                  <div className="bento-card-top-row">
                    <div className="bento-brand-badge" title={polygonProject.client}>
                      {getProjectBrandLogo(polygonProject.id, 26)}
                    </div>
                  </div>

                  <h3 className="bento-card-title">{polygonProject.title}</h3>
                  <p className="bento-card-tagline">{polygonProject.tagline}</p>
                </div>

                {/* <div className="bento-card-footer">
                  <span className="bento-explore-link">
                    <span>Lihat Arsitektur &amp; Fitur</span>
                    <ArrowRight size={15} />
                  </span>
                </div> */}
              </div>
            </article>
          )}

          {/* 4, 5, 6. SMALL CARDS: Rascal Republic, Polygon Bikes, Samara Lombok (SPAN 4) */}
          {smallProjects.map((project) => (
            <article
              key={project.id}
              className="bento-card bento-card-small"
              onClick={() => setSelectedProject(project)}
            >
              <div className="bento-card-media-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="bento-card-media-img"
                  loading="lazy"
                />
                <div className="bento-card-media-overlay"></div>
              </div>

              <div className="bento-card-body">
                <div>
                  {/* <div className="bento-card-top-row">
                    <div className="bento-brand-badge" title={project.client}>
                      {getProjectBrandLogo(project.id, 24)}
                    </div>
                  </div> */}

                  <h3 className="bento-card-title">{project.title}</h3>
                  <p className="bento-card-tagline">{project.tagline}</p>
                </div>

                {/* <div className="bento-card-footer">
                  <span className="bento-explore-link">
                    <span>Detail Proyek</span>
                    <ArrowRight size={14} />
                  </span>
                </div> */}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Detail Proyek Spesifikasi Teknis */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default RecentProjectsSection;
