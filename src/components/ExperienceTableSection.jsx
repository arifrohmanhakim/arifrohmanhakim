import React from 'react';

export const ExperienceTableSection = () => {
  const experiences = [
    {
      period: '2024 - Sekarang',
      role: 'Full Stack & Web Architecture',
      skills: ['React 19', 'Next.js', 'TypeScript', 'Web Audio Synth', 'Tailwind CSS', 'Vite']
    },
    {
      period: '2022 - 2024',
      role: 'Mobile Engineering',
      skills: ['React Native', 'React Native for Web', 'Cross-Platform UI', 'Mobile REST APIs']
    },
    {
      period: '2021 - Sekarang',
      role: 'Open Source & System Innovation',
      skills: ['Payaman OS', 'GIS / GeoJSON', 'Node.js', 'Visual Query Builders', 'AI Studio']
    }
  ];

  return (
    <section id="experience" className="madison-experience-section">
      <div className="container">
        <h2 className="madison-section-headline">EXPERIENCE & SKILLS</h2>

        <div className="madison-table-wrapper">
          {experiences.map((item, index) => (
            <div key={index} className="madison-table-row">
              <div className="table-col-period">{item.period}</div>
              <div className="table-col-role">{item.role}</div>
              <div className="table-col-skills">
                {item.skills.map((skill, i) => (
                  <span key={i} className="skill-bullet">
                    • {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
