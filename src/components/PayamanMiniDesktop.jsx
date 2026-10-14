import React, { useState } from 'react';
import { Terminal, Music, Folder, ExternalLink, Sparkles, X, Minimize2, Maximize2 } from 'lucide-react';

export const PayamanMiniDesktop = ({ onPlaySound, isRetroMode, onToggleRetro }) => {
  const [activeWindow, setActiveWindow] = useState('payaman');
  const [synthNote, setSynthNote] = useState('440 Hz (A4)');

  const handleOpenApp = (appName) => {
    setActiveWindow(appName);
    onPlaySound?.(600, 'square', 0.05);
  };

  const handleClose = () => {
    setActiveWindow(null);
    onPlaySound?.(300, 'sine', 0.04);
  };

  const handleTestSynth = (freq, noteName) => {
    setSynthNote(`${freq} Hz (${noteName})`);
    onPlaySound?.(freq, 'triangle', 0.12);
  };

  return (
    <div className="mini-desktop-container">
      {/* Top Mac Classic Menu Bar */}
      <div className="retro-topbar">
        <div className="retro-apple-logo"></div>
        <span className="retro-topbar-title">Payaman OS Simulator v1.2</span>
        <div className="retro-topbar-right">
          <button
            type="button"
            className="retro-switch-btn"
            onClick={onToggleRetro}
            title="Beralih gaya visual Retro 1-Bit OS"
          >
            {isRetroMode ? '★ Modern Mode' : '⚡ Payaman 1-Bit Mode'}
          </button>
        </div>
      </div>

      {/* Desktop Workspace */}
      <div className="retro-screen">
        {/* Desktop Icons */}
        <div className="retro-icons-col">
          <button
            type="button"
            className={`retro-icon-item ${activeWindow === 'payaman' ? 'selected' : ''}`}
            onClick={() => handleOpenApp('payaman')}
          >
            <div className="retro-icon-box">🖥️</div>
            <span>Payaman.os</span>
          </button>

          <button
            type="button"
            className={`retro-icon-item ${activeWindow === 'synth' ? 'selected' : ''}`}
            onClick={() => handleOpenApp('synth')}
          >
            <div className="retro-icon-box">🎹</div>
            <span>SynthAudio</span>
          </button>

          <button
            type="button"
            className={`retro-icon-item ${activeWindow === 'bio' ? 'selected' : ''}`}
            onClick={() => handleOpenApp('bio')}
          >
            <div className="retro-icon-box">💾</div>
            <span>AboutMe.txt</span>
          </button>
        </div>

        {/* Floating Active Window */}
        {activeWindow && (
          <div className="retro-window">
            <div className="retro-window-header">
              <button
                type="button"
                className="retro-close-box"
                onClick={handleClose}
                aria-label="Tutup Jendela"
              />
              <div className="retro-window-stripes"></div>
              <span className="retro-window-title">
                {activeWindow === 'payaman' && 'Payaman OS (Classic Mac System 7)'}
                {activeWindow === 'synth' && 'Web Audio Synth Engine'}
                {activeWindow === 'bio' && 'Engineer Profile'}
              </span>
              <div className="retro-window-stripes"></div>
            </div>

            <div className="retro-window-body">
              {activeWindow === 'payaman' && (
                <div className="retro-app-content">
                  <div className="retro-banner-box">
                    <p className="retro-glitch-text">RETRO 1-BIT MONOCHROME WORKSTATION</p>
                    <p className="retro-text-sm">
                      Dibuat oleh Arif Rohman Hakim. Memadukan estetika Macintosh tahun 1987 dengan performa web modern.
                    </p>
                  </div>
                  <div className="retro-action-row">
                    <a
                      href="https://payamanos.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="retro-button-link"
                    >
                      <span>Buka Payaman OS Lengkap</span>
                      <ExternalLink size={14} />
                    </a>
                    <span className="retro-badge-pill">Web Audio + Canvas + Vercel</span>
                  </div>
                </div>
              )}

              {activeWindow === 'synth' && (
                <div className="retro-app-content">
                  <p className="retro-text-sm">
                    Mesin sintesis frekuensi audio realtime via Web Audio API murni tanpa file eksternal:
                  </p>
                  <div className="synth-keys-grid">
                    {[
                      { f: 261.63, n: 'C4' },
                      { f: 293.66, n: 'D4' },
                      { f: 329.63, n: 'E4' },
                      { f: 349.23, n: 'F4' },
                      { f: 392.00, n: 'G4' },
                      { f: 440.00, n: 'A4' },
                      { f: 493.88, n: 'B4' },
                      { f: 523.25, n: 'C5' }
                    ].map((key) => (
                      <button
                        key={key.n}
                        type="button"
                        className="synth-key-btn"
                        onClick={() => handleTestSynth(key.f, key.n)}
                      >
                        {key.n}
                      </button>
                    ))}
                  </div>
                  <div className="synth-status-box">
                    <span>Active Output: <strong>{synthNote}</strong></span>
                  </div>
                </div>
              )}

              {activeWindow === 'bio' && (
                <div className="retro-app-content">
                  <div className="retro-terminal-view">
                    <div><span className="term-user">arif@jogja</span>:<span className="term-path">~</span>$ whoami</div>
                    <div className="term-out">Arif Rohman Hakim — Creative Technologist & Full Stack Engineer</div>
                    <div><span className="term-user">arif@jogja</span>:<span className="term-path">~</span>$ stack --list</div>
                    <div className="term-out">React 19, React Native, TypeScript, Node.js, Next.js, Web Audio, GIS/GeoJSON</div>
                    <div><span className="term-user">arif@jogja</span>:<span className="term-path">~</span>$ echo $MISSION</div>
                    <div className="term-out">"Menghadirkan software dengan rasa seni, efisiensi tinggi, dan zero-bloat."</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
