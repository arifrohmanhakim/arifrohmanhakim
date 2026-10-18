import React from 'react';
import {
  SiReact,
  SiNodedotjs,
  SiLaravel,
  SiFigma,
  SiAndroid,
  SiApple
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

export const TechStackMarquee = () => {
  const technologies = [
    { name: 'React.js', icon: <SiReact size={24} /> },
    { name: 'React Native', icon: <TbBrandReactNative size={26} /> },
    { name: 'Node.js', icon: <SiNodedotjs size={24} /> },
    { name: 'Laravel', icon: <SiLaravel size={24} /> },
    { name: 'Figma', icon: <SiFigma size={22} /> },
    { name: 'Android', icon: <SiAndroid size={24} /> },
    { name: 'iOS', icon: <SiApple size={24} /> }
  ];

  return (
    <section className="tech-marquee-section" aria-label="Core engineering tech stack">
      <div className="container">
        <p className="tech-marquee-label">
          CORE TECHNOLOGIES &amp; SPECIALIZED STACK
        </p>
        <div className="tech-marquee-wrapper">
          <div className="tech-marquee-track">
            {/* Set 1 */}
            {technologies.map((tech, i) => (
              <div key={`t1-${i}`} className="tech-marquee-item">
                <span className="tech-marquee-icon">{tech.icon}</span>
                <span className="tech-marquee-name">{tech.name}</span>
              </div>
            ))}
            {/* Set 2 (Duplicate for seamless loop) */}
            {technologies.map((tech, i) => (
              <div key={`t2-${i}`} className="tech-marquee-item" aria-hidden="true">
                <span className="tech-marquee-icon">{tech.icon}</span>
                <span className="tech-marquee-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackMarquee;
