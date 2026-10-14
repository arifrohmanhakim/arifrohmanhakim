import React from 'react';
import { Calendar, Layers } from 'lucide-react';

export const ExperienceTableSection = () => {
  const experiences = [
    {
      period: '2024 - Sekarang',
      status: 'Current Focus',
      role: 'Full Stack & Web Architecture',
      desc: 'Merancang arsitektur web modern dengan React 19, Next.js, dan sistem komputasi audio interaktif.',
      skills: ['React 19', 'Next.js', 'TypeScript', 'Web Audio Synth', 'Tailwind CSS', 'Vite']
    },
    {
      period: '2022 - 2024',
      status: 'Specialized Track',
      role: 'Mobile Engineering',
      desc: 'Membangun ekosistem aplikasi mobile lintas platform Android & iOS berkinerja native tinggi.',
      skills: ['React Native', 'React Native for Web', 'Cross-Platform UI', 'Mobile REST APIs']
    },
    {
      period: '2021 - Sekarang',
      status: 'Continuous R&D',
      role: 'Open Source & System Innovation',
      desc: 'Riset emulasi OS klasik (Payaman OS), pustaka query visual, dan integrasi pemetaan GeoJSON / GIS.',
      skills: ['Payaman OS', 'GIS / GeoJSON', 'Node.js', 'Visual Query Builders', 'AI Studio']
    }
  ];

  return (
    <section id="experience" className="apple-section">
      <div className="container">
        <div className="apple-section-header">
          <span className="apple-eyebrow">TRAJECTORY &amp; MASTERY</span>
          <h2 className="apple-headline">
            Experience that matters. <br />
            <span className="apple-headline-gradient">Battle-tested in production.</span>
          </h2>
          <p className="apple-subheadline">
            Rekam jejak spesialisasi dalam rekayasa perangkat lunak multiplatform, arsitektur web, dan inovasi sistem.
          </p>
        </div>

        <div className="apple-timeline-stack">
          {experiences.map((item, index) => (
            <div key={index} className="apple-timeline-row apple-reveal-card">
              <div className="apple-timeline-meta">
                <div className="apple-period-pill">
                  <Calendar size={13} />
                  <span>{item.period}</span>
                </div>
                <span className="apple-status-tag">{item.status}</span>
              </div>

              <div className="apple-timeline-main">
                <h3 className="apple-timeline-role">{item.role}</h3>
                <p className="apple-timeline-desc">{item.desc}</p>
                <div className="apple-timeline-skills">
                  {item.skills.map((skill, i) => (
                    <span key={i} className="apple-skill-pill">
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
