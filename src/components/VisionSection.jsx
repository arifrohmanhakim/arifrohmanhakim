import React from 'react';
import { PROFILE_DATA } from '../constants/portfolioData';

export const VisionSection = () => {
  return (
    <section id="vision" className="creative-section">
      <div className="container">
        <div className="creative-philosophy-layout">
          {/* Kolom Kiri: Kutipan Filosofi */}
          <div className="creative-quote-box">
            <div className="creative-eyebrow">
              <span className="creative-eyebrow-line"></span>
              <span>Filosofi Berkarya</span>
            </div>

            <blockquote className="creative-quote-text">
              &ldquo;Kode yang hebat bekerja secara senyap dan presisi di balik layar, memberi ruang penuh bagi <em>pengalaman manusia yang bermakna.</em>&rdquo;
            </blockquote>

            <p className="creative-lead" style={{ marginBottom: '28px' }}>
              Berbasis di Yogyakarta, saya melihat setiap proyek digital sebagai karya kriya modern—memadukan ketahanan arsitektur sistem, efisiensi eksekusi, dan keanggunan antarmuka yang ramah bagi penggunanya.
            </p>

            <div className="creative-author-signature">
              <span className="creative-author-dot"></span>
              <div>
                <div className="creative-author-name">{PROFILE_DATA.name}</div>
                <div className="creative-author-role">Software Engineer &amp; Kreator Payaman OS</div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Foto Studio Workspace Minimalis */}
          <div className="creative-workspace-card">
            <img
              src="/workspace.png"
              alt="Studio Ruang Kerja Arif Rohman Hakim"
              className="creative-workspace-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
