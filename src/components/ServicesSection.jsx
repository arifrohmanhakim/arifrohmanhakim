import React from 'react';
import { Code2, Smartphone, Sparkles, Globe, Terminal, Cpu } from 'lucide-react';

export const ServicesSection = () => {
  const disciplines = [
    {
      num: '02.01',
      icon: <Code2 size={20} className="anthropic-discipline-icon" />,
      title: 'Web Systems Architecture',
      tag: 'Zero-Bloat Engineering',
      desc: 'Membangun aplikasi web berperforma tinggi dari nol menggunakan React 19, Next.js, dan optimasi arsitektur modular dengan rendering efisien.'
    },
    {
      num: '02.02',
      icon: <Smartphone size={20} className="anthropic-discipline-icon" />,
      title: 'Enterprise Mobile Engineering',
      tag: 'Native Performance & Offline-First',
      desc: 'Merancang arsitektur mobile berskala tinggi untuk Android & iOS menggunakan React Native, sinkronisasi offline SQLite, dan pelacakan GPS lapangan.'
    },
    {
      num: '02.03',
      icon: <Sparkles size={20} className="anthropic-discipline-icon" />,
      title: 'Creative Systems & Emulation',
      tag: 'Experimental Computing',
      desc: 'Eksplorasi komputasi unik seperti Payaman OS (emulasi retro Mac 1-bit), sintesis Web Audio API native, dan interaksi canvas berkecepatan tinggi.'
    },
    {
      num: '02.04',
      icon: <Globe size={20} className="anthropic-discipline-icon" />,
      title: 'Open Source Tools & Spatial GIS',
      tag: 'Multiplatform Infrastructure',
      desc: 'Pengembangan pustaka frontend visual, integrasi pemetaan GIS / GeoJSON interaktif, visual query builders, dan kontribusi ekosistem global.'
    }
  ];

  return (
    <section id="services" className="anthropic-section">
      <div className="container">
        <div className="anthropic-header-block">
          <div className="anthropic-eyebrow-row">
            <span className="anthropic-eyebrow-index">02</span>
            <span className="anthropic-eyebrow-divider">/</span>
            <span className="anthropic-eyebrow-text">Core Engineering Disciplines</span>
          </div>

          <h2 className="anthropic-headline">
            Depth in fundamentals. <br />
            <em>Speed in execution.</em>
          </h2>

          <p className="anthropic-lead">
            Pendekatan rekayasa perangkat lunak yang berlandaskan modularitas, efisiensi komputasi, dan kejelasan kode yang dapat dirawat dalam jangka panjang.
          </p>
        </div>

        <div className="anthropic-disciplines-grid">
          {disciplines.map((item, index) => (
            <div key={index} className="anthropic-discipline-card">
              <div className="anthropic-card-head">
                <span className="anthropic-card-idx">{item.num}</span>
                <span className="anthropic-discipline-tag">{item.tag}</span>
              </div>
              <div className="anthropic-discipline-body">
                <div className="anthropic-icon-badge">{item.icon}</div>
                <h3 className="anthropic-discipline-title">{item.title}</h3>
                <p className="anthropic-discipline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
