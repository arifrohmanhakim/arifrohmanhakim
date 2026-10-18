import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants/portfolioData';
import { useSectionHeaderParallax } from '../hooks/useSectionHeaderParallax';

export const ExperienceTableSection = () => {
  const headerRef = useSectionHeaderParallax();

  return (
    <section id="experience" className="creative-section">
      <div className="container">
        <div ref={headerRef} className="creative-header">
          <div className="creative-eyebrow">
            <span className="creative-eyebrow-line"></span>
            <span>Career &amp; Track Record</span>
            <span className="creative-eyebrow-line"></span>
          </div>

          <h2 className="creative-headline">
            Engineering Experience &amp; Impact.
          </h2>

          <p className="creative-lead">
            A battle-tested track record spanning mission-critical enterprise field systems, real-time AI architectures, and high-traffic web applications.
          </p>
        </div>

        <div className="creative-journey-stack">
          {EXPERIENCE_DATA.map((item, index) => (
            <div key={index} className="creative-journey-row">
              <div className="creative-journey-period-col">
                <span className="creative-journey-period">{item.period}</span>
                <span className="creative-journey-loc">{item.location}</span>
              </div>

              <div className="creative-journey-body">
                <div className="creative-journey-head">
                  <h3 className="creative-journey-role">{item.role}</h3>
                  <span className="creative-journey-company">
                    <Briefcase size={14} className="company-icon" />
                    <span>{item.company}</span>
                  </span>
                </div>

                {/* Key Metric Highlights for Quick Scanning */}
                {item.metrics && (
                  <div className="experience-metrics-row">
                    {item.metrics.map((metric, mIdx) => (
                      <span key={mIdx} className="experience-metric-badge">
                        <CheckCircle2 size={13} />
                        <span>{metric}</span>
                      </span>
                    ))}
                  </div>
                )}

                <ul className="creative-journey-highlights">
                  {item.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="creative-journey-highlight-item">
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="creative-journey-tags">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="creative-mini-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
