import React from 'react';

export const GgfLogo = ({ className = '', size = 32 }) => (
  <img
    src="/images/logos/fms-logo.png"
    alt="Great Giant Foods Official Logo"
    className={`apple-brand-official-logo fms-logo-img ${className}`}
    style={{ height: size, width: 'auto', objectFit: 'contain' }}
    loading="lazy"
  />
);

export const CentrisLogo = ({ className = '', size = 32 }) => (
  <img
    src="/images/logos/centris-ai.png"
    alt="Centris.ai Official Logo"
    className={`apple-brand-official-logo centris-logo-img ${className}`}
    style={{ height: size, width: 'auto', objectFit: 'contain' }}
    loading="lazy"
  />
);

export const RascalRepublicLogo = ({ className = '', size = 32 }) => (
  <img
    src="/images/logos/rascal-republic.png"
    alt="Rascal Republic Official Logo"
    className={`apple-brand-official-logo rascal-logo-img ${className}`}
    style={{ height: size, width: 'auto', objectFit: 'contain' }}
    loading="lazy"
  />
);

export const PolygonLogo = ({ className = '', size = 32 }) => (
  <img
    src="/images/logos/polygon-bikes.svg"
    alt="Polygon Bikes Official Logo"
    className={`apple-brand-official-logo polygon-logo-img ${className}`}
    style={{ height: size, width: 'auto', objectFit: 'contain' }}
    loading="lazy"
  />
);

export const AstraMotorLogo = ({ className = '', size = 32 }) => (
  <img
    src="/images/logos/astra-motor.png"
    alt="Astra Motor Official Logo"
    className={`apple-brand-official-logo astra-logo-img ${className}`}
    style={{ height: size, width: 'auto', objectFit: 'contain' }}
    loading="lazy"
  />
);

export const SamaraLogo = ({ className = '', size = 32 }) => (
  <img
    src="/images/logos/samara-lombok.png"
    alt="Samara Lombok Official Logo"
    className={`apple-brand-official-logo samara-logo-img ${className}`}
    style={{ height: size, width: 'auto', objectFit: 'contain' }}
    loading="lazy"
  />
);

export const PayamanLogo = ({ className = '', size = 32 }) => (
  <img
    src="/images/logos/payaman-os.png"
    alt="Payaman OS Official Logo"
    className={`apple-brand-official-logo payaman-logo-img ${className}`}
    style={{ height: size, width: 'auto', objectFit: 'contain' }}
    loading="lazy"
  />
);

export const getProjectBrandLogo = (id, size = 32) => {
  switch (id) {
    case 'ggf-fms':
      return <GgfLogo size={size} />;
    case 'centris-ai':
      return <CentrisLogo size={size} />;
    case 'rascal-republic':
      return <RascalRepublicLogo size={size} />;
    case 'samara-lombok':
      return <SamaraLogo size={size} />;
    case 'polygon-bikes':
      return <PolygonLogo size={size} />;
    case 'astra-motor':
    case 'atra-motor':
      return <AstraMotorLogo size={size} />;
    case 'payaman-os':
      return <PayamanLogo size={size} />;
    default:
      return null;
  }
};
