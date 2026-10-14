import React from 'react';
import { Code2, Smartphone, Sparkles, Globe } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      num: '01',
      icon: <Code2 size={24} className="apple-service-icon" />,
      title: 'Web Architecture',
      tag: 'Zero-Bloat Engineering',
      desc: 'Membangun aplikasi web berperforma tinggi dari nol menggunakan React 19, Next.js, dan optimasi arsitektur modular ultra-cepat.'
    },
    {
      num: '02',
      icon: <Smartphone size={24} className="apple-service-icon" />,
      title: 'Mobile Applications',
      tag: 'Native Performance',
      desc: 'Merancang antarmuka mobile intuitif untuk Android & iOS dengan React Native, transisi gestur halus, dan integrasi API instan.'
    },
    {
      num: '03',
      icon: <Sparkles size={24} className="apple-service-icon" />,
      title: 'Creative Technology',
      tag: 'Experimental & Audio',
      desc: 'Eksplorasi antarmuka unik seperti Payaman OS (emulasi retro Mac 1-bit), sintesis Web Audio API, dan interaksi visual dinamis.'
    },
    {
      num: '04',
      icon: <Globe size={24} className="apple-service-icon" />,
      title: 'Open Source & GIS',
      tag: 'Multiplatform Tools',
      desc: 'Pengembangan pustaka frontend visual, pemetaan GIS / GeoJSON interaktif, query builders, dan kontribusi ekosistem global.'
    }
  ];

  return (
    <section id="services" className="apple-section">
      <div className="container">
        <div className="apple-section-header">
          <span className="apple-eyebrow">CAPABILITIES</span>
          <h2 className="apple-headline">
            Engineered for performance. <br />
            <span className="apple-headline-gradient">Built for scale.</span>
          </h2>
          <p className="apple-subheadline">
            Kombinasi standar rekayasa perangkat lunak modern, performa tanpa kompromi, dan desain pengalaman pengguna yang berkelas.
          </p>
        </div>

        <div className="apple-bento-grid">
          {services.map((item, index) => (
            <div key={index} className="apple-bento-card apple-reveal-card">
              <div className="apple-card-top">
                <div className="apple-icon-wrapper">{item.icon}</div>
                <span className="apple-card-pill">{item.tag}</span>
              </div>
              <div className="apple-card-content">
                <span className="apple-card-number">{item.num}</span>
                <h3 className="apple-card-title">{item.title}</h3>
                <p className="apple-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
