import React, { useState, useEffect } from 'react';
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
import { ProjectsPage } from './pages/ProjectsPage';

export const App = () => {
  const gitHubStats = useGitHubProfile();
  const { scrollY, isScrolled } = useScrollProgress();

  const isProjectsRoute = () => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    return (
      path.endsWith('/projects') ||
      path.endsWith('/projects/') ||
      path.endsWith('projects.html') ||
      hash.includes('projects')
    );
  };

  const [currentView, setCurrentView] = useState(() => (isProjectsRoute() ? 'projects' : 'home'));

  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(isProjectsRoute() ? 'projects' : 'home');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigateToHome = (targetHash = '') => {
    if (window.location.pathname.endsWith('projects.html')) {
      window.location.href = `/${targetHash}`;
      return;
    }
    window.history.pushState(null, '', `/${targetHash}`);
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (targetHash) {
      setTimeout(() => {
        const el = document.querySelector(targetHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    }
  };

  const navigateToProjects = () => {
    window.history.pushState(null, '', '/projects');
    setCurrentView('projects');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="madison-portfolio-app">
      <Navbar
        isScrolled={isScrolled}
        currentView={currentView}
        onNavigateHome={navigateToHome}
        onNavigateProjects={navigateToProjects}
      />
      <main id="main-content">
        {currentView === 'projects' ? (
          <ProjectsPage onNavigateHome={navigateToHome} />
        ) : (
          <>
            <HeroMadisonSection scrollY={scrollY} />
            <TechStackMarquee />
            <RecentProjectsSection onNavigateProjects={navigateToProjects} />
            <ServicesSection />
            {/* <VisionSection stats={gitHubStats} /> */}
            <ExperienceTableSection />
            <ContactSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
