import React from 'react';

export const ExperienceTableSection = () => {
  const journeys = [
    {
      period: '2024 — Sekarang',
      role: 'Modern Web Architecture & Creative Systems',
      desc: 'Mengeksplorasi ekosistem React 19, arsitektur serverless Next.js, emulasi retro computing Payaman OS, dan pengalaman audio visual modern.',
      tags: ['React 19', 'Next.js', 'TypeScript', 'Web Audio API', 'Creative UI']
    },
    {
      period: '2022 — 2024',
      role: 'Enterprise Scale Mobile Architecture',
      desc: 'Merancang dan memelihara aplikasi lapangan GGF FMS untuk pemantauan ribuan hektar agroindustri, integrasi GIS satelit, NDVI drone, dan sinkronisasi data offline-first SQLite.',
      tags: ['React Native', 'Offline SQLite', 'GIS Satelit', 'Android & iOS', 'Background GPS']
    },
    {
      period: '2017 — 2022',
      role: 'Mobile Native & Fullstack Foundations',
      desc: 'Mengembangkan fondasi pengembangan aplikasi seluler sejak 2017, integrasi backend RESTful API dengan Node.js/PHP, serta perancangan antarmuka pengguna yang berorientasi solusi nyata.',
      tags: ['Mobile Development', 'Android Java', 'Node.js', 'PHP', 'UI/UX Design']
    }
  ];

  return (
    <section id="experience" className="creative-section">
      <div className="container">
        <div className="creative-header">
          <div className="creative-eyebrow">
            <span className="creative-eyebrow-line"></span>
            <span>Perjalanan &amp; Jejak Karya</span>
          </div>

          <h2 className="creative-headline">
            Dedikasi bertahun-tahun dalam <em>mengasah keahlian.</em>
          </h2>

          <p className="creative-lead">
            Perjalanan yang dibangun dari rasa penasaran teknis, pengalaman nyata menguji aplikasi di lapangan, dan komitmen menghasilkan karya berkualitas tinggi.
          </p>
        </div>

        <div className="creative-journey-stack">
          {journeys.map((item, index) => (
            <div key={index} className="creative-journey-row">
              <div className="creative-journey-period">{item.period}</div>
              <div>
                <h3 className="creative-journey-role">{item.role}</h3>
                <p className="creative-journey-desc">{item.desc}</p>
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
