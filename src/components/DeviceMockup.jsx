import React from 'react';
import { ArrowRight } from 'lucide-react';

export const MacBookProMockup = ({ image, alt, promptText = 'Lihat Detail Arsitektur' }) => (
  <div className="macbook-pro-mockup">
    {/* Display Lid / Screen Shell */}
    <div className="macbook-lid">
      <div className="macbook-screen">
        {/* Top Notch Camera */}
        <div className="macbook-notch" aria-hidden="true">
          <span className="macbook-camera-lens"></span>
          <span className="macbook-sensor-dot"></span>
        </div>

        {/* Display Image */}
        <img
          src={image}
          alt={alt}
          className="macbook-display-img"
          loading="lazy"
          draggable="false"
        />

        {/* Glass Screen Glare */}
        <div className="macbook-screen-glare" aria-hidden="true"></div>
      </div>
    </div>

    {/* Aluminium Bottom Base / Chin */}
    <div className="macbook-base" aria-hidden="true">
      <div className="macbook-base-lip"></div>
      <div className="macbook-feet-shadow"></div>
    </div>
  </div>
);

export const IPhone16Mockup = ({ image, alt, isFloating = false }) => (
  <div className={`iphone-16-mockup ${isFloating ? 'dual-floating-iphone' : ''}`}>
    <div className="iphone-screen">
      {/* iOS Top Status Bar */}
      <div className="iphone-status-bar" aria-hidden="true">
        <span className="iphone-status-time">9:41</span>
        <div className="iphone-dynamic-island">
          <span className="iphone-camera-sensor"></span>
        </div>
        <div className="iphone-status-icons">
          <div className="iphone-battery-icon">
            <span className="iphone-battery-level"></span>
            <span className="iphone-battery-nipple"></span>
          </div>
        </div>
      </div>

      {/* Screen Content */}
      <img
        src={image}
        alt={alt}
        className="iphone-display-img"
        loading="lazy"
        draggable="false"
      />

      {/* Home Indicator Bar */}
      <div className="iphone-home-bar" aria-hidden="true"></div>
    </div>
  </div>
);

export const DeviceMockup = ({
  project,
  onClick,
  promptText = 'Lihat Detail Arsitektur'
}) => {
  const isMobileProject = project.category === 'mobile';
  const isDualDevice = project.id === 'astra-motor' || project.id === 'centris-ai' || project.deviceType === 'dual';

  // Pilih gambar untuk iPhone sekunder (jika dual)
  const mobileImage =
    project.mobileImage ||
    (project.screenshots && project.screenshots[1] ? project.screenshots[1].url : project.image);

  return (
    <div
      className="device-stage-container"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Buka detail ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick && onClick(e);
        }
      }}
    >
      {isDualDevice ? (
        <div className="mockup-dual-stage">
          <MacBookProMockup image={project.image} alt={project.title} />
          <IPhone16Mockup image={mobileImage} alt={`${project.title} Tampilan Mobile`} isFloating={true} />
        </div>
      ) : isMobileProject ? (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <IPhone16Mockup image={project.image} alt={project.title} />
        </div>
      ) : (
        <MacBookProMockup image={project.image} alt={project.title} />
      )}

      {/* Interactive Hover Tap Prompt */}
      <div className="device-tap-prompt">
        <span>{promptText}</span>
        <ArrowRight size={13} />
      </div>
    </div>
  );
};
