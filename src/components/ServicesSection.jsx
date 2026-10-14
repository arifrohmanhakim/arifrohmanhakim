import React from 'react';

export const ServicesSection = () => {
  const services = [
    {
      num: '01',
      title: 'Web Architecture',
      desc: 'Membangun aplikasi web berperforma tinggi dari nol dengan React 19, Next.js, dan optimasi bundle zero-bloat.'
    },
    {
      num: '02',
      title: 'Mobile App',
      desc: 'Merancang antarmuka mobile intuitif untuk Android & iOS menggunakan React Native dengan navigasi mulus.'
    },
    {
      num: '03',
      title: 'Creative Tech',
      desc: 'Eksplorasi antarmuka unik seperti Payaman OS (emulasi retro Mac 1-bit) dan sintesis Web Audio API.'
    },
    {
      num: '04',
      title: 'Open Source & GIS',
      desc: 'Pengembangan pustaka frontend visual, pemetaan GIS / GeoJSON interaktif, dan arsitektur microservices.'
    }
  ];

  return (
    <section id="services" className="madison-services-section">
      <div className="container">
        <h2 className="madison-section-headline">I CAN HELP YOU WITH</h2>

        <div className="madison-services-grid">
          {services.map((item, index) => (
            <div key={index} className="madison-service-col">
              <span className="service-number">| {item.num}</span>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
