import React from 'react';
import { Smartphone, Layout, Sparkles, Server, ArrowUpRight } from 'lucide-react';
import { useSectionHeaderParallax } from '../hooks/useSectionHeaderParallax';

export const ServicesSection = () => {
  const headerRef = useSectionHeaderParallax();
  const disciplines = [
    {
      icon: <Smartphone size={22} />,
      title: 'Offline-First Mobile Systems',
      desc: 'Engineering resilient React Native applications tested in remote field operations: localized SQLite schemas, smart background GPS, spatial GIS layer caching, and smooth 60 FPS interfaces.'
    },
    {
      icon: <Layout size={22} />,
      title: 'Modern Web Engineering',
      desc: 'Building responsive, accessible web platforms utilizing modern React and clean CSS architectures that combine visual refinement with ultra-fast Core Web Vitals.'
    },
    {
      icon: <Server size={22} />,
      title: 'Full Stack & Real-Time Sync',
      desc: 'Connecting intuitive client interfaces with dependable backend foundations, RESTful endpoints, real-time WebSocket pipelines, and secure OAuth 2.0 authentication flows.'
    },
    {
      icon: <Sparkles size={22} />,
      title: 'Creative Systems & Audio Web',
      desc: 'Exploring browser frontiers through open source lab projects like Payaman OS (classic Macintosh 1-bit browser emulation, Web Audio API synthesis, and custom canvas windowing).',
      link: {
        text: 'Explore Payaman OS Demo',
        url: 'https://payamanos.vercel.app'
      }
    }
  ];

  return (
    <section id="services" className="creative-section">
      <div className="container">
        <div ref={headerRef} className="creative-header">
          <div className="creative-eyebrow">
            <span className="creative-eyebrow-line"></span>
            <span>Disciplines &amp; Capabilities</span>
            <span className="creative-eyebrow-line"></span>
          </div>

          <h2 className="creative-headline">
            Solid Architecture, <em>Intuitive Interfaces.</em>
          </h2>

          <p className="creative-lead">
            Designing resilient software systems engineered for reliability in production, maintainable for teams, and seamless for end users.
          </p>
        </div>

        <div className="creative-disciplines-grid">
          {disciplines.map((item, index) => (
            <div key={index} className="creative-discipline-card">
              <div className="creative-discipline-icon-box">
                {item.icon}
              </div>
              <h3 className="creative-discipline-title">{item.title}</h3>
              <p className="creative-discipline-desc">{item.desc}</p>

              {item.link && (
                <div style={{ marginTop: '14px' }}>
                  <a
                    href={item.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-sublink"
                  >
                    <span>{item.link.text}</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
