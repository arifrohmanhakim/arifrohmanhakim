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
import { ProjectDetailPage } from './pages/ProjectDetailPage';

export const App = () => {
  const gitHubStats = useGitHubProfile();
  const { scrollY, isScrolled } = useScrollProgress();

  const getRouteInfo = () => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    // Check project detail path: /project/:id or hash #/project/:id
    const projectDetailMatch = path.match(/^\/project\/([a-z0-9_-]+)/i);
    if (projectDetailMatch) {
      return { view: 'project-detail', projectId: projectDetailMatch[1] };
    }

    const projectHashMatch = hash.match(/^#\/project\/([a-z0-9_-]+)/i);
    if (projectHashMatch) {
      return { view: 'project-detail', projectId: projectHashMatch[1] };
    }

    // Check all projects archive path
    if (
      path.endsWith('/projects') ||
      path.endsWith('/projects/') ||
      path.endsWith('projects.html') ||
      hash.includes('projects')
    ) {
      return { view: 'projects', projectId: null };
    }

    return { view: 'home', projectId: null };
  };

  const [routeState, setRouteState] = useState(() => getRouteInfo());

  useEffect(() => {
    const handleLocationChange = () => {
      setRouteState(getRouteInfo());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateToHome = (targetHash = '') => {
    if (window.location.pathname.endsWith('projects.html')) {
      window.location.href = `/${targetHash}`;
      return;
    }
    window.history.pushState(null, '', `/${targetHash}`);
    setRouteState({ view: 'home', projectId: null });
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
    setRouteState({ view: 'projects', projectId: null });
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navigateToProject = (id) => {
    window.history.pushState(null, '', `/project/${id}`);
    setRouteState({ view: 'project-detail', projectId: id });
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="madison-portfolio-app">
      <Navbar
        isScrolled={isScrolled}
        currentView={routeState.view}
        onNavigateHome={navigateToHome}
        onNavigateProjects={navigateToProjects}
      />
      <main id="main-content">
        {routeState.view === 'project-detail' ? (
          <ProjectDetailPage
            projectId={routeState.projectId}
            onNavigateHome={navigateToHome}
            onNavigateProjects={navigateToProjects}
            onSelectProject={navigateToProject}
          />
        ) : routeState.view === 'projects' ? (
          <ProjectsPage
            onNavigateHome={navigateToHome}
            onSelectProject={navigateToProject}
          />
        ) : (
          <>
            <HeroMadisonSection scrollY={scrollY} />
            <TechStackMarquee />
            <RecentProjectsSection
              onNavigateProjects={navigateToProjects}
              onSelectProject={navigateToProject}
            />
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
