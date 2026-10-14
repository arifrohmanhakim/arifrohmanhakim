import React from 'react';
import { Terminal, Shield, Zap, Layers } from 'lucide-react';
import { PROFILE_DATA } from '../constants/portfolioData';

export const AboutSection = () => {
  return (
    <section id="about" className="section-minimal alt-bg">
      <div className="container">
        <div className="about-layout-minimal">
          <div className="about-narrative-col">
            <span className="section-kicker">Filosofi & Pendekatan</span>
            <h2 className="section-title-minimal">
              Membangun perangkat lunak yang <span className="serif-highlight">bernyawa</span> dan tahan uji.
            </h2>
            <p className="narrative-p">
              Saya percaya bahwa software terbaik lahir dari irisan antara arsitektur kode yang disiplin dan kepedulian mendalam terhadap estetika antarmuka. Baik saat mengeksplorasi emulasi retro OS berbasis canvas pixel art seperti <strong>Payaman OS</strong>, merakit komponen query visual, atau mengoptimalkan render performa aplikasi mobile di React Native, prioritas saya tetap konsisten: <em>performa tinggi, kode yang bersih, dan interaksi yang intuitif.</em>
            </p>
            <p className="narrative-p">
              Berbasis di Yogyakarta, saya menikmati memecahkan masalah rekayasa mulai dari layer database dan REST API hingga ke micro-interaction terkecil pada komponen antarmuka pengguna.
            </p>
          </div>

          <div className="about-principles-col">
            <div className="principle-card">
              <Zap size={20} className="principle-icon" />
              <div>
                <h3 className="principle-title">Performa & Zero Bloat</h3>
                <p className="principle-desc">
                  Meminimalkan ketergantungan paket berlebih, memprioritaskan pemrosesan di sisi klien dan render DOM yang efisien.
                </p>
              </div>
            </div>

            <div className="principle-card">
              <Layers size={20} className="principle-icon" />
              <div>
                <h3 className="principle-title">Arsitektur Modular</h3>
                <p className="principle-desc">
                  Separation of concerns yang tegas antara layer data logic dan presentational components untuk skalabilitas jangka panjang.
                </p>
              </div>
            </div>

            <div className="principle-card">
              <Shield size={20} className="principle-icon" />
              <div>
                <h3 className="principle-title">Keamanan & Keandalan</h3>
                <p className="principle-desc">
                  Validasi ketat, sanitasi input, dan penanganan error yang elegan tanpa mengekspos rincian sensitif ke pengguna akhir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
