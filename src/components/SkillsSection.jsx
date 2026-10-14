import React from 'react';
import { SKILL_CATEGORIES } from '../constants/portfolioData';

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-minimal">
      <div className="container">
        <header className="section-header-minimal">
          <div className="section-kicker">Keahlian Teknis</div>
          <h2 className="section-title-minimal">Teknologi & Lingkup Kerja</h2>
          <p className="section-desc-minimal">
            Alat dan tumpukan teknologi modern yang saya gunakan untuk mewujudkan produk digital dari ide awal hingga produksi.
          </p>
        </header>

        <div className="skills-editorial-grid">
          {SKILL_CATEGORIES.map((category, index) => (
            <div key={index} className="skill-editorial-block">
              <span className="skill-category-num">0{index + 1}</span>
              <h3 className="skill-category-name">{category.title}</h3>
              <ul className="skill-list-clean">
                {category.items.map((skill, i) => (
                  <li key={i} className="skill-item-clean">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
