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

export const IPadMagicKeyboardMockup = ({ image, alt }) => (
  <div className="ipad-keyboard-mockup">
    {/* Magnetic Apple Pencil Pro */}
    <div className="apple-pencil" aria-hidden="true">
      <div className="pencil-tip"></div>
      <div className="pencil-body">
        <span className="pencil-accent"></span>
      </div>
    </div>

    {/* Floating iPad Pro Screen */}
    <div className="ipad-floating-screen">
      <div className="ipad-bezel">
        <div className="ipad-camera" aria-hidden="true"></div>
        <img
          src={image}
          alt={alt}
          className="ipad-display-img"
          loading="lazy"
          draggable="false"
        />
        <div className="ipad-screen-glare" aria-hidden="true"></div>
      </div>
    </div>

    {/* Cantilever Magnetic Hinge & Floating Ambient Shadow */}
    <div className="ipad-cantilever-hinge" aria-hidden="true">
      <div className="ipad-hinge-bar"></div>
      <div className="ipad-cantilever-shadow"></div>
    </div>

    {/* Magic Keyboard Deck & Chiclet Keys Surface */}
    <div className="magic-keyboard-deck" aria-hidden="true">
      <div className="keyboard-keys-surface">
        <div className="key-row key-row-fn">
          {[...Array(14)].map((_, i) => (
            <span key={i} className="chiclet-key"></span>
          ))}
        </div>
        <div className="key-row">
          {[...Array(14)].map((_, i) => (
            <span key={i} className="chiclet-key"></span>
          ))}
        </div>
        <div className="key-row">
          {[...Array(14)].map((_, i) => (
            <span key={i} className="chiclet-key"></span>
          ))}
        </div>
        <div className="key-row">
          {[...Array(13)].map((_, i) => (
            <span key={i} className="chiclet-key"></span>
          ))}
        </div>
        <div className="key-row">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="chiclet-key"></span>
          ))}
        </div>
        <div className="key-row">
          <span className="chiclet-key mod-key"></span>
          <span className="chiclet-key mod-key"></span>
          <span className="chiclet-key mod-key"></span>
          <span className="chiclet-key spacebar-key"></span>
          <span className="chiclet-key mod-key"></span>
          <span className="chiclet-key mod-key"></span>
          <span className="chiclet-key arrow-cluster"></span>
        </div>
      </div>

      <div className="keyboard-trackpad"></div>
      <div className="keyboard-base-lip"></div>
    </div>
  </div>
);

export const DeviceMockup = ({
  project,
  onClick
}) => {
  const mockupType = project.mockupType || (
    project.category === 'mobile'
      ? 'mobile'
      : (project.id === 'astra-motor' || project.id === 'centris-ai' || project.deviceType === 'dual')
      ? 'dual'
      : 'macbook'
  );

  const mobileImage =
    project.mobileImage ||
    (project.screenshots && project.screenshots[1] ? project.screenshots[1].url : project.image);

  return (
    <div
      className={`device-stage-container ${mockupType === 'macbook-bleed' ? 'stage-bleed-right' : ''}`}
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
      {mockupType === 'ipad-keyboard' ? (
        <IPadMagicKeyboardMockup image={project.image} alt={project.title} />
      ) : mockupType === 'dual' ? (
        <div className="mockup-dual-stage">
          <MacBookProMockup image={project.image} alt={project.title} />
          <IPhone16Mockup image={mobileImage} alt={`${project.title} Tampilan Mobile`} isFloating={true} />
        </div>
      ) : mockupType === 'mobile' ? (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <IPhone16Mockup image={project.image} alt={project.title} />
        </div>
      ) : (
        <MacBookProMockup image={project.image} alt={project.title} />
      )}
    </div>
  );
};
