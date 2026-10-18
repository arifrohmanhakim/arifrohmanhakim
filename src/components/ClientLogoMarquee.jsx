import React from 'react';
import {
  GgfLogo,
  AstraMotorLogo,
  PolygonLogo,
  CentrisLogo,
  SamaraLogo,
  RascalRepublicLogo
} from './BrandLogos';

export const ClientLogoMarquee = () => {
  const brands = [
    { name: 'Great Giant Foods', logo: <GgfLogo size={28} /> },
    { name: 'Astra Motor', logo: <AstraMotorLogo size={26} /> },
    { name: 'Polygon Bikes', logo: <PolygonLogo size={26} /> },
    { name: 'Centris AI', logo: <CentrisLogo size={26} /> },
    { name: 'Samara Lombok', logo: <SamaraLogo size={28} /> },
    { name: 'Rascal Republic', logo: <RascalRepublicLogo size={26} /> }
  ];

  return (
    <section className="client-marquee-section" aria-label="Brands and enterprise clients worked with">
      <div className="container">
        <p className="client-marquee-label">
          TRUSTED BY ENTERPRISES, GLOBAL BRANDS &amp; VENTURES
        </p>
        <div className="client-marquee-wrapper">
          <div className="client-marquee-track">
            {/* Set 1 */}
            {brands.map((brand, i) => (
              <div key={`b1-${i}`} className="client-marquee-item" title={brand.name}>
                {brand.logo}
                <span className="client-marquee-name">{brand.name}</span>
              </div>
            ))}
            {/* Set 2 (Duplicate for seamless loop) */}
            {brands.map((brand, i) => (
              <div key={`b2-${i}`} className="client-marquee-item" aria-hidden="true">
                {brand.logo}
                <span className="client-marquee-name">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
