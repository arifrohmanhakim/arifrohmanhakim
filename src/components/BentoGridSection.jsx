import React from 'react';
import { ExternalLink, Terminal, Sparkles, Map, BookOpen, Layers } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { InteractiveQueryBuilderWidget } from './InteractiveQueryBuilderWidget';
import { InteractivePhoneWidget } from './InteractivePhoneWidget';
import { PROJECTS_DATA } from '../constants/portfolioData';

export const BentoGridSection = ({ onPlaySound }) => {
  const payamanProject = PROJECTS_DATA.find((p) => p.id === 'payaman-os');
  const animalpediaProject = PROJECTS_DATA.find((p) => p.id === 'animalpedia');
  const sinauProject = PROJECTS_DATA.find((p) => p.id === 'sinau');
  const mapsProject = PROJECTS_DATA.find((p) => p.id === 'rn-web-maps');

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        <header className="section-header">
          <div className="badge-tag">
            <Sparkles size={14} />
            <span>Karya Terkurasi & Arsitektur Sistem</span>
          </div>
          <h2 className="section-title">
            Bento Showcase <span className="text-gradient">Proyek Terpilih</span>
          </h2>
          <p className="section-description">
            Eksplorasi interaktif mulai dari emulasi desktop retro 1-bit, perangkat mobile React Native, komponen query visual, hingga integrasi GIS dan kecerdasan buatan.
          </p>
        </header>

        <div className="bento-container-grid">
          {/* Card 1: Flagship Payaman OS (Col Span 2) */}
          <div className="bento-card bento-hero-project">
            <div className="bento-card-bg-glow"></div>
            <div className="bento-content-layout">
              <div className="bento-meta-header">
                <span className="bento-tag flag-tag">★ Flagship Workstation</span>
                <div className="bento-links">
                  <a
                    href="https://payamanos.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento-icon-btn highlight"
                    title="Buka Demo Payaman OS"
                    onClick={() => onPlaySound?.(800, 'square', 0.05)}
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={payamanProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento-icon-btn"
                    title="Repositori GitHub"
                    onClick={() => onPlaySound?.(600, 'sine', 0.04)}
                  >
                    <GithubIcon size={16} />
                  </a>
                </div>
              </div>

              <div className="bento-headline-row">
                <div className="retro-apple-mark"></div>
                <div>
                  <h3 className="bento-project-title">Payaman OS</h3>
                  <p className="bento-project-subtitle">
                    Retro, monochrome web-based desktop operating system terinspirasi dari Classic Mac OS (System 6/7) dengan sintesis Web Audio API dan pixel art 1-bit.
                  </p>
                </div>
              </div>

              {/* CRT Monitor Simulator Box */}
              <div className="crt-monitor-box">
                <div className="crt-scanline-overlay"></div>
                <div className="crt-inner-screen">
                  <div className="crt-menubar">
                    <span>File</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Special</span>
                  </div>
                  <div className="crt-body-demo">
                    <div className="crt-icon-cluster">
                      <div className="crt-desktop-icon">
                        <div className="crt-bitmap-disk">💾</div>
                        <span>Hard Disk 20MB</span>
                      </div>
                      <div className="crt-desktop-icon">
                        <div className="crt-bitmap-app">⚡</div>
                        <span>Synth Engine</span>
                      </div>
                    </div>
                    <div className="crt-status-message">
                      &gt; Payaman OS running smoothly at 60FPS on modern web canvas.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bento-footer-tags">
                {payamanProject.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Interactive Query Builder Widget */}
          <div className="bento-card bento-query-builder">
            <div className="bento-meta-header">
              <span className="bento-tag">Open Source Library</span>
              <a
                href="https://github.com/arifrohmanhakim/react-easy-query-builder"
                target="_blank"
                rel="noopener noreferrer"
                className="bento-icon-btn"
                title="GitHub"
              >
                <GithubIcon size={16} />
              </a>
            </div>

            <h3 className="bento-project-title">React Easy Query Builder</h3>
            <p className="bento-project-subtitle">
              Pustaka komponen React visual untuk merakit filter aturan multi-kondisi bersarang secara reaktif.
            </p>

            <InteractiveQueryBuilderWidget onPlaySound={onPlaySound} />
          </div>

          {/* Card 3: Interactive Mobile Phone Widget (Doit Wallet) */}
          <div className="bento-card bento-mobile-card">
            <div className="bento-meta-header">
              <span className="bento-tag mobile-tag">Mobile Engineering</span>
              <a
                href="https://github.com/arifrohmanhakim/doit"
                target="_blank"
                rel="noopener noreferrer"
                className="bento-icon-btn"
                title="GitHub"
              >
                <GithubIcon size={16} />
              </a>
            </div>

            <h3 className="bento-project-title">Doit Digital Wallet</h3>
            <p className="bento-project-subtitle">
              Aplikasi dompet digital modern berbasis React Native & TypeScript dengan alur transaksi aman dan cepat.
            </p>

            <InteractivePhoneWidget onPlaySound={onPlaySound} />
          </div>

          {/* Card 4: Animalpedia Kids */}
          <div className="bento-card bento-playful-card">
            <div className="bento-meta-header">
              <span className="bento-tag playful-tag">EdTech & Playful UI</span>
              <a
                href={animalpediaProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-icon-btn"
                title="GitHub"
              >
                <GithubIcon size={16} />
              </a>
            </div>

            <div className="crayon-decor-badge">🦁 Crayon Design System</div>
            <h3 className="bento-project-title">Animalpedia Kids</h3>
            <p className="bento-project-subtitle">
              Aplikasi edukasi fauna interaktif anak-anak dengan estetika guratan krayon, state management Zustand yang gesit, dan transisi ceria.
            </p>

            <div className="animal-stickers-row">
              <span className="animal-sticker">🐘 Gajah</span>
              <span className="animal-sticker">🦒 Jerapah</span>
              <span className="animal-sticker">🐬 Lumba</span>
              <span className="animal-sticker">🦅 Elang</span>
            </div>

            <div className="bento-footer-tags">
              {animalpediaProject.techStack.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          {/* Card 5: GIS & Web Maps (rn-web-maps) */}
          <div className="bento-card bento-gis-card">
            <div className="bento-meta-header">
              <span className="bento-tag">GIS & Cross-Platform</span>
              <a
                href={mapsProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-icon-btn"
                title="GitHub"
              >
                <GithubIcon size={16} />
              </a>
            </div>

            <div className="gis-icon-header">
              <Map size={20} className="text-cyan" />
              <h3 className="bento-project-title">react-native-web-maps</h3>
            </div>
            <p className="bento-project-subtitle">
              Menjembatani ekosistem `react-native-maps` ke platform Web menggunakan Google Maps JavaScript SDK serta pemrosesan GeoJSON lokal.
            </p>

            <div className="gis-radar-box">
              <div className="radar-grid">
                <span className="geo-ping ping-jogja" title="Yogyakarta Base">Yogyakarta</span>
                <span className="geo-ping ping-lampung" title="Lampung GeoJSON">Lampung</span>
              </div>
            </div>

            <div className="bento-footer-tags">
              {mapsProject.techStack.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          {/* Card 6: Sinau AI Ebook */}
          <div className="bento-card bento-ai-card">
            <div className="bento-meta-header">
              <span className="bento-tag ai-tag">AI Studio Exploration</span>
              <a
                href={sinauProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-icon-btn"
                title="GitHub"
              >
                <GithubIcon size={16} />
              </a>
            </div>

            <div className="ai-icon-header">
              <BookOpen size={20} className="text-indigo" />
              <h3 className="bento-project-title">Sinau AI Ebook</h3>
            </div>
            <p className="bento-project-subtitle">
              Eksplorasi pembacaan materi edukatif bertenaga AI dengan integrasi Google AI Studio untuk pemahaman teks adaptif.
            </p>

            <div className="ai-chat-snippet">
              <div className="ai-bubble user">&gt; Ringkas bab ini dalam 3 poin kunci</div>
              <div className="ai-bubble bot">✔ Sistem modular, efisiensi render DOM, & sanitasi input.</div>
            </div>

            <div className="bento-footer-tags">
              {sinauProject.techStack.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
