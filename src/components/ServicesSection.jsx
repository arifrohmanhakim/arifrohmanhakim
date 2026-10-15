import React from 'react';
import { Smartphone, Layout, Sparkles, Server } from 'lucide-react';

export const ServicesSection = () => {
  const disciplines = [
    {
      icon: <Smartphone size={22} />,
      title: 'Mobile Experience (Sejak 2017)',
      desc: 'Mendesain dan merekayasa aplikasi mobile (React Native & Native Android/iOS) yang tangguh di lapangan: dari sinkronisasi offline SQLite, pelacakan spasial GIS, hingga performa 60 FPS yang mulus di tangan pengguna.'
    },
    {
      icon: <Layout size={22} />,
      title: 'Modern Web & Creative UI',
      desc: 'Menciptakan antarmuka web modern dengan React 19 dan Next.js yang memadukan keindahan visual, tipografi anggun, dan micro-interactions yang hidup tanpa mengorbankan performa kecepatan muat.'
    },
    {
      icon: <Sparkles size={22} />,
      title: 'Creative Systems & Payaman OS',
      desc: 'Eksplorasi batas kreatif komputasi web: merancang emulasi retro 1-bit Mac (Payaman OS), visual query builder dinamis, serta engine synthesizer audio web native.'
    },
    {
      icon: <Server size={22} />,
      title: 'Fullstack & Cloud Architecture',
      desc: 'Menghubungkan arsitektur frontend dengan fondasi backend yang solid (Node.js/Express, PHP, RESTful API & database SQL/NoSQL) dengan pemrosesan efisien dan standar keamanan yang terjaga.'
    }
  ];

  return (
    <section id="services" className="creative-section">
      <div className="container">
        <div className="creative-header">
          <div className="creative-eyebrow">
            <span className="creative-eyebrow-line"></span>
            <span>Disiplin &amp; Keahlian</span>
          </div>

          <h2 className="creative-headline">
            Perkawinan antara arsitektur logika <em>dan rasa desain.</em>
          </h2>

          <p className="creative-lead">
            Bukan sekadar menulis baris kode, melainkan merancang sistem yang luwes, andal, dan menyenangkan saat disentuh oleh manusia.
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
