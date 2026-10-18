import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { FaGooglePlay } from 'react-icons/fa6';
import { PROJECTS_DATA } from '../constants/portfolioData';
import { getProjectBrandLogo } from './BrandLogos';
import { useSectionHeaderParallax } from '../hooks/useSectionHeaderParallax';

export const RecentProjectsSection = ({ onNavigateProjects, onSelectProject }) => {
  const headerRef = useSectionHeaderParallax();
  const flagshipRef = useRef(null);
  const mobilePrimaryRef = useRef(null);
  const mobileSecondRef = useRef(null);

  const ggfProject = PROJECTS_DATA.find((p) => p.id === 'ggf-fms') || PROJECTS_DATA[0];
  const astraProject = PROJECTS_DATA.find((p) => p.id === 'astra-motor' || p.id === 'atra-motor') || PROJECTS_DATA[1];
  const centrisProject = PROJECTS_DATA.find((p) => p.id === 'centris-ai') || PROJECTS_DATA[2];
  const smallProjects = PROJECTS_DATA.filter(
    (p) => !['ggf-fms', 'astra-motor', 'centris-ai', 'payaman-os'].includes(p.id)
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
            <span>Selected Works</span>
            <span className="creative-eyebrow-line"></span>
          </div>

          <h2 className="creative-headline">
            Enterprise Mobile &amp; Web Systems.
          </h2>

          <p className="creative-lead">
            Battle-tested production architectures: from offline-first agro-industrial field operations and AI CRM pipelines, to nationwide automotive portals and global multilingual e-commerce.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="bento-grid">
          {/* 1. HERO FLAGSHIP CARD: GGF FMS (SPAN 12) */}
          {ggfProject && (
            <article
              ref={flagshipRef}
              className="bento-card bento-card-flagship"
              onClick={() => onSelectProject?.(ggfProject.id)}
            >
              <div className="bento-flagship-info">
                <div>
                  <div className="bento-flagship-meta">
                    <div className="bento-brand-badge" title={ggfProject.client}>
                      {getProjectBrandLogo(ggfProject.id, 22)}
                    </div>
                  </div>

                  <h3 className="bento-flagship-title">{ggfProject.title}</h3>
                  <p className="bento-flagship-tagline">{ggfProject.tagline}</p>
                  <div style={{marginBottom: 14}}>
                    <span className="bento-role-text">{ggfProject.role}</span>
                    <span className="bento-meta-sep">•</span>
                    <span className="bento-year-text">{ggfProject.year}</span>
                  </div>
                  <p className="bento-scope-note">
                    <strong>My Contribution:</strong> {ggfProject.scopeNote}
                  </p>

                  <div className="bento-tech-row">
                    {ggfProject.primaryStack.map((tech, i) => (
                      <span key={i} className="bento-tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="bento-actions-row" onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    className="bento-btn-primary"
                    onClick={() => onSelectProject?.(ggfProject.id)}
                  >
                    <span>Read FMS Case Study</span>
                    <ArrowRight size={15} />
                  </button>

                  {ggfProject.playStoreUrl && (
                    <a
                      href={ggfProject.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bento-btn-ghost"
                    >
                      <FaGooglePlay size={13} />
                      <span>Google Play</span>
                      <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </div>

              {/* Visual Side */}
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

          {/* 2. MEDIUM CARD: Centris.ai (SPAN 6) */}
          {centrisProject && (
            <article
              className="bento-card bento-card-medium"
              onClick={() => onSelectProject?.(centrisProject.id)}
            >
              <div className="bento-card-media-wrap">
                <img
                  src={centrisProject.image}
                  alt={centrisProject.title}
                  className="bento-card-media-img"
                  loading="lazy"
                />
                <div className="bento-card-media-overlay"></div>
              </div>

              <div className="bento-card-body">
                <div>
                  <div className="bento-card-top-row">
                    <div className="bento-brand-badge" title={centrisProject.client}>
                      {getProjectBrandLogo(centrisProject.id, 24)}
                    </div>
                  </div>

                  <h3 className="bento-card-title">{centrisProject.title}</h3>
                  <p className="bento-card-role-meta">
                    {centrisProject.role} • {centrisProject.year}
                  </p>
                  <p className="bento-card-tagline">{centrisProject.tagline}</p>

                  <div className="bento-tech-row small">
                    {centrisProject.primaryStack.map((tech, i) => (
                      <span key={i} className="bento-tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="bento-card-footer">
                  <span className="bento-explore-link">
                    <span>Explore Architecture &amp; Case</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          )}

          {/* 3. MEDIUM CARD: Astra Motor Honda (SPAN 6) */}
          {astraProject && (
            <article
              className="bento-card bento-card-medium"
              onClick={() => onSelectProject?.(astraProject.id)}
            >
              <div className="bento-card-media-wrap">
                <img
                  src={astraProject.image}
                  alt={astraProject.title}
                  className="bento-card-media-img"
                  loading="lazy"
                />
                <div className="bento-card-media-overlay"></div>
              </div>

              <div className="bento-card-body">
                <div>
                  <div className="bento-card-top-row">
                    <div className="bento-brand-badge" title={astraProject.client}>
                      {getProjectBrandLogo(astraProject.id, 24)}
                    </div>
                  </div>

                  <h3 className="bento-card-title">{astraProject.title}</h3>
                  <p className="bento-card-role-meta">
                    {astraProject.role} • {astraProject.year}
                  </p>
                  <p className="bento-card-tagline">{astraProject.tagline}</p>

                  <div className="bento-tech-row small">
                    {astraProject.primaryStack.map((tech, i) => (
                      <span key={i} className="bento-tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="bento-card-footer">
                  <span className="bento-explore-link">
                    <span>Explore Dual Showroom System</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          )}

          {/* 4, 5, 6. CARDS: Polygon Bikes, Samara Lombok, Rascal Republic (SPAN 4) */}
          {smallProjects.map((project) => (
            <article
              key={project.id}
              className="bento-card bento-card-small"
              onClick={() => onSelectProject?.(project.id)}
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
                  <div className="bento-card-top-row">
                    <div className="bento-brand-badge" title={project.client}>
                      {getProjectBrandLogo(project.id, 22)}
                    </div>
                  </div>

                  <h3 className="bento-card-title">{project.title}</h3>
                  <p className="bento-card-role-meta">
                    {project.role} • {project.year}
                  </p>
                  <p className="bento-card-tagline">{project.tagline}</p>

                  <div className="bento-tech-row small">
                    {project.primaryStack.map((tech, i) => (
                      <span key={i} className="bento-tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="bento-card-footer">
                  <span className="bento-explore-link">
                    <span>View Specifications</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action: View All Projects Archive */}
        <div className="bento-archive-cta-wrap">
          <a
            href="/projects"
            className="bento-archive-cta-btn"
            onClick={(e) => {
              if (onNavigateProjects) {
                e.preventDefault();
                onNavigateProjects();
              }
            }}
          >
            <span>Explore All 7 Projects &amp; Case Studies</span>
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecentProjectsSection;
