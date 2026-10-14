import React, { useState, useEffect } from 'react';
import { Search, ExternalLink, Terminal, Volume2, VolumeX, Moon, Sun, X, Laptop } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { PROJECTS_DATA, PROFILE_DATA } from '../constants/portfolioData';

export const CommandPalette = ({
  isOpen,
  onClose,
  isRetroMode,
  onToggleRetro,
  theme,
  onToggleTheme,
  isAudioEnabled,
  onToggleAudio,
  onPlaySound
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filteredProjects = PROJECTS_DATA.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.techStack.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="palette-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="palette-modal" onClick={(e) => e.stopPropagation()}>
        <div className="palette-input-wrapper">
          <Search size={18} className="palette-search-icon" />
          <input
            type="text"
            className="palette-input"
            placeholder="Ketik nama proyek, teknologi, atau aksi cepat..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          <button type="button" className="palette-close-btn" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        <div className="palette-section">
          <span className="palette-group-title">Aksi Cepat</span>
          <div className="palette-items">
            <button
              type="button"
              className="palette-item"
              onClick={() => {
                onToggleRetro();
                onPlaySound?.(600, 'square', 0.08);
                onClose();
              }}
            >
              <Laptop size={16} />
              <span>{isRetroMode ? 'Ganti ke Modern Glass UI' : 'Aktifkan Payaman 1-Bit Retro OS'}</span>
              <kbd className="palette-kbd">Alt+R</kbd>
            </button>

            <button
              type="button"
              className="palette-item"
              onClick={() => {
                onToggleAudio();
                onClose();
              }}
            >
              {isAudioEnabled ? <VolumeX size={16} /> : <Volume2 size={16} />}
              <span>{isAudioEnabled ? 'Matikan Suara Audio Synth' : 'Aktifkan Suara Audio Synth'}</span>
              <kbd className="palette-kbd">Sound</kbd>
            </button>

            <button
              type="button"
              className="palette-item"
              onClick={() => {
                onToggleTheme();
                onPlaySound?.(500, 'sine', 0.04);
                onClose();
              }}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              <span>Ganti Mode Terang / Gelap</span>
              <kbd className="palette-kbd">Theme</kbd>
            </button>
          </div>
        </div>

        <div className="palette-section">
          <span className="palette-group-title">Proyek & Repositori ({filteredProjects.length})</span>
          <div className="palette-items">
            {filteredProjects.map((project) => (
              <a
                key={project.id}
                href={project.demoUrl || project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="palette-item"
                onClick={() => onPlaySound?.(700, 'sine', 0.04)}
              >
                <GithubIcon size={16} />
                <div className="palette-item-text">
                  <span className="palette-item-name">{project.title}</span>
                  <span className="palette-item-sub">{project.categoryLabel} • {project.techStack.slice(0, 2).join(', ')}</span>
                </div>
                <ExternalLink size={14} className="palette-ext-icon" />
              </a>
            ))}
          </div>
        </div>

        <div className="palette-footer">
          <span>Gunakan <kbd className="palette-kbd">Esc</kbd> untuk menutup</span>
          <span>@{PROFILE_DATA.handle}</span>
        </div>
      </div>
    </div>
  );
};
