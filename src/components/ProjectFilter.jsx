import React from 'react';
import { CATEGORY_FILTERS } from '../constants/portfolioData';

export const ProjectFilter = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="filter-tabs" role="tablist" aria-label="Filter Kategori Proyek">
      {CATEGORY_FILTERS.map((category) => {
        const isActive = activeCategory === category.key;
        return (
          <button
            key={category.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`filter-btn ${isActive ? 'active' : ''}`}
            onClick={() => onSelectCategory(category.key)}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
};
