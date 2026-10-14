import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';

export const ExperienceTableSection = () => {
  const experiences = [
    {
      period: '2024 - Sekarang',
      status: 'Current Focus',
      role: 'Full Stack & Modern Web Systems',
      desc: 'Merancang arsitektur web modern dengan React 19, Next.js, dan optimasi komputasi interaktif berskala industri.',
      skills: ['React 19', 'Next.js', 'TypeScript', 'Web Audio Synth', 'Tailwind CSS', 'Vite']
    },
    {
      period: '2022 - 2024',
      status: 'Specialized Track',
      role: 'Enterprise Mobile Engineering',
      desc: 'Membangun aplikasi mobile perkebunan skala ribuan hektar (GGF FMS) serta aplikasi konsumen dengan performa tinggi pada platform Android & iOS.',
      skills: ['React Native', 'React Native for Web', 'Offline SQLite', 'GIS / Maps', 'REST APIs']
    },
    {
      period: '2021 - Sekarang',
      status: 'Continuous R&D',
      role: 'Applied Systems & Open Source Innovation',
      desc: 'Riset mandiri emulasi retro OS (Payaman OS 1-bit), pustaka query visual, dan integrasi kecerdasan buatan terapan.',
      skills: ['Payaman OS', 'GIS / GeoJSON', 'Node.js', 'Visual Query Builders', 'AI Integrations']
    }
  ];

  return (
    <section id="experience" className="anthropic-section">
      <div className="container">
        <div className="anthropic-header-block">
          <div className="anthropic-eyebrow-row">
            <span className="anthropic-eyebrow-index">04</span>
            <span className="anthropic-eyebrow-divider">/</span>
            <span className="anthropic-eyebrow-text">Chronological Trajectory &amp; Track Record</span>
          </div>

          <h2 className="anthropic-headline">
            Years of deliberate craft. <br />
            <em>Proven in production environments.</em>
          </h2>

          <p className="anthropic-lead">
            Evolusi teknis dari fondasi rekayasa logika, arsitektur aplikasi mobile di lapangan, hingga pengembangan sistem web fullstack yang resilien.
          </p>
        </div>

        <div className="anthropic-timeline-stack">
          {experiences.map((item, index) => (
            <div key={index} className="anthropic-timeline-row">
              <div className="anthropic-timeline-meta">
                <div className="anthropic-period-badge">
                  <Calendar size={13} className="anthropic-period-icon" />
                  <span>{item.period}</span>
                </div>
                <span className="anthropic-status-text">{item.status}</span>
              </div>

              <div className="anthropic-timeline-content">
                <h3 className="anthropic-timeline-role">{item.role}</h3>
                <p className="anthropic-timeline-desc">{item.desc}</p>
                <div className="anthropic-timeline-skills">
                  {item.skills.map((skill, i) => (
                    <span key={i} className="anthropic-skill-pill">
                      {skill}
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
