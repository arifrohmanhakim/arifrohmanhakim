import React, { useState, useMemo } from 'react';
import { ArrowLeft, ArrowUpRight, Search, X, FileText, Mail, ArrowRight } from 'lucide-react';
import { FaGooglePlay, FaGithub } from 'react-icons/fa6';
import { PROJECTS_DATA, PROJECT_CATEGORY_TABS, PROFILE_DATA } from '../constants/portfolioData';
import { getProjectBrandLogo } from '../components/BrandLogos';

export const ProjectsPage = ({ onNavigateHome, onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const titleMatch = project.title.toLowerCase().includes(query);
      const clientMatch = project.client?.toLowerCase().includes(query);
      const taglineMatch = project.tagline?.toLowerCase().includes(query);
      const roleMatch = project.role?.toLowerCase().includes(query);
      const stackMatch = project.techStack?.some((tech) =>
        tech.toLowerCase().includes(query)
      );

      return matchesCategory && (titleMatch || clientMatch || taglineMatch || roleMatch || stackMatch);
    });
  }, [selectedCategory, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="projects-page-wrapper">
      <div className="projects-page-glow"></div>

      <div className="container">
        {/* Navigation Breadcrumb */}
        <div className="projects-page-top-nav">
          <a
            href="/"
            className="projects-back-btn"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome?.();
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </a>
        </div>

        {/* Page Hero Header */}
        <header className="projects-page-header">
          <div className="creative-eyebrow">
            <span className="creative-eyebrow-line"></span>
            <span>Archive &amp; Technical Specifications</span>
            <span className="creative-eyebrow-line"></span>
          </div>

          <h1 className="projects-page-title">
            All Projects &amp; <em>Production Systems</em>.
          </h1>

          <p className="projects-page-lead">
            A comprehensive catalog of mission-critical offline mobile platforms, enterprise automotive portals, global multilingual e-commerce, and browser-based computing systems.
          </p>
        </header>

        {/* Controls Bar: Search & Category Tabs */}
        <div className="projects-controls-bar">
          <div className="projects-search-box">
            <Search size={18} className="projects-search-icon" />
            <input
              type="text"
              className="projects-search-input"
              placeholder="Search by title, role, client, or tech stack (e.g. React Native, SQLite, PHP, GIS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="projects-search-clear"
                onClick={() => setSearchQuery('')}
                title="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="projects-filter-row">
            <div className="projects-category-tabs" role="tablist">
              {PROJECT_CATEGORY_TABS.map((tab) => {
                const isActive = selectedCategory === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`projects-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(tab.key)}
                  >
                    <span>{tab.label}</span>
                    <span className="projects-tab-count">{tab.count}</span>
                  </button>
                );
              })}
            </div>

            <div className="projects-status-count">
              Showing {filteredProjects.length} of {PROJECTS_DATA.length} projects
            </div>
          </div>
        </div>

        {/* Projects Archive Grid */}
        {filteredProjects.length > 0 ? (
          <div className="projects-archive-grid">
            {filteredProjects.map((project) => {
              const liveLink = project.liveUrl || project.demoUrl;

              return (
                <article
                  key={project.id}
                  className="archive-project-card"
                  onClick={() => onSelectProject?.(project.id)}
                >
                  <div className="archive-card-media">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="archive-card-img"
                      loading="lazy"
                    />
                    <div className="archive-card-gradient"></div>

                    <div className="archive-card-floating-badge" title={project.client}>
                      {getProjectBrandLogo(project.id, 20)}
                    </div>

                    <span className="archive-card-category-tag">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="archive-card-body">
                    <div>
                      <div className="archive-card-meta">
                        <span className="archive-card-role">{project.role}</span>
                        <span className="archive-card-sep">•</span>
                        <span className="archive-card-year">{project.year}</span>
                      </div>

                      <h2
                        className="archive-card-title"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject?.(project.id);
                        }}
                      >
                        {project.title}
                      </h2>

                      <p className="archive-card-tagline">{project.tagline}</p>

                      {project.scopeNote && (
                        <p className="archive-card-scope">
                          <strong>Role &amp; Contribution:</strong> {project.scopeNote}
                        </p>
                      )}

                      <div className="archive-tech-row">
                        {project.techStack.map((tech, i) => (
                          <span key={i} className="archive-tech-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="archive-card-actions" onClick={(e) => e.stopPropagation()}>
                      <button
                        type="button"
                        className="archive-btn-case-study"
                        onClick={() => onSelectProject?.(project.id)}
                      >
                        <span>Case Study</span>
                        <ArrowRight size={13} />
                      </button>

                      <div className="archive-links-group">
                        {project.playStoreUrl && (
                          <a
                            href={project.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="archive-link-icon-btn"
                            title="Open Google Play Store"
                          >
                            <FaGooglePlay size={12} />
                            <span>Play Store</span>
                          </a>
                        )}

                        {liveLink && (
                          <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="archive-link-icon-btn"
                            title="Visit Live Application"
                          >
                            <span>Live Site</span>
                            <ArrowUpRight size={12} />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="archive-link-icon-btn"
                            title="View Source Repository"
                          >
                            <FaGithub size={13} />
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="projects-empty-state">
            <h3 className="projects-empty-title">No projects found</h3>
            <p className="projects-empty-desc">
              No projects matched your search query or selected category. Try searching with another keyword or resetting the filter.
            </p>
            <button
              type="button"
              className="projects-tab-btn active"
              onClick={handleResetFilters}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Callout Banner */}
        <section className="projects-bottom-callout">
          <div className="projects-bottom-callout-text">
            <h3>Need custom enterprise architecture?</h3>
            <p>
              Available for high-impact contracts, offline-first mobile apps with React Native, and enterprise web engineering.
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
              <ArrowUpRight size={12} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;
