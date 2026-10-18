import React from 'react';
import { useGitHubProfile } from './hooks/useGitHubProfile';
import { useScrollProgress } from './hooks/useScrollProgress';
import { Navbar } from './components/Navbar';
import { HeroMadisonSection } from './components/HeroMadisonSection';
import { TechStackMarquee } from './components/TechStackMarquee';
import { ServicesSection } from './components/ServicesSection';
import { VisionSection } from './components/VisionSection';
import { RecentProjectsSection } from './components/RecentProjectsSection';
import { ExperienceTableSection } from './components/ExperienceTableSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App = () => {
  const gitHubStats = useGitHubProfile();
  const { scrollY, isScrolled } = useScrollProgress();

  return (
    <div className="madison-portfolio-app">
      <Navbar isScrolled={isScrolled} />
      <main id="main-content">
        <HeroMadisonSection scrollY={scrollY} />
        <TechStackMarquee />
        <RecentProjectsSection />
        <ServicesSection />
       {/*  <VisionSection stats={gitHubStats} /> */}
        <ExperienceTableSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
