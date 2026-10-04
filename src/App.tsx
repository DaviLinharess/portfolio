import { useState, useCallback } from 'react';
import { InitialLoader } from './components/irfan/InitialLoader';
import { TargetCursor } from './components/irfan/TargetCursor';
import { DotFieldCanvas } from './components/irfan/DotFieldCanvas';
import { RouteTransition } from './components/irfan/RouteTransition';
import { Header } from './components/irfan/Header';
import { SideNav } from './components/irfan/SideNav';
import { Footer } from './components/irfan/Footer';
import { HomeStage } from './components/irfan/stages/HomeStage';
import { AboutStage } from './components/irfan/stages/AboutStage';
import { WorkStage } from './components/irfan/stages/WorkStage';
import { SkillsStage } from './components/irfan/stages/SkillsStage';
import { CredentialsStage } from './components/irfan/stages/CredentialsStage';
import { ContactStage } from './components/irfan/stages/ContactStage';
import { CVModal } from './components/irfan/CVModal';

export function App() {
  const [activeStage, setActiveStage] = useState<string>('home');
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [transitionLabel, setTransitionLabel] = useState<string>('INÍCIO');
  const [cvModalOpen, setCvModalOpen] = useState<boolean>(false);

  const handleNavigate = useCallback(
    (targetStage: string, label: string) => {
      if (targetStage === activeStage && !isTransitioning) return;

      setTransitionLabel(label);
      setIsTransitioning(true);

      // Switch stage content halfway through the wipe transition
      setTimeout(() => {
        setActiveStage(targetStage);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 350);
    },
    [activeStage, isTransitioning]
  );

  const handleTransitionComplete = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  const toggleTheme = useCallback(() => {
    setDarkTheme((prev) => !prev);
  }, []);

  return (
    <div className={`portfolio-root ${darkTheme ? 'dark-theme' : ''}`}>
      {/* 1. Initial Scanline Loader */}
      <InitialLoader />

      {/* 2. Interactive Dot Matrix Canvas Background */}
      <DotFieldCanvas />

      {/* 3. Custom Target Cursor (Rotating Corner Brackets Square) */}
      <TargetCursor />

      {/* 4. 5-Panel Wiping Route Transition */}
      <RouteTransition
        isTransitioning={isTransitioning}
        targetLabel={transitionLabel}
        onTransitionComplete={handleTransitionComplete}
      />

      {/* 5. Curriculum Vitae Modal */}
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

      {/* 6. Fixed Architectural Frame (No window scrolling!) */}
      <div className="portfolio-frame">
        {/* Frame Header */}
        <Header
          activeStage={activeStage}
          onNavigate={handleNavigate}
          darkTheme={darkTheme}
          onToggleTheme={toggleTheme}
        />

        {/* Frame Body (SideNav + Stage Viewport) */}
        <div className="frame-body">
          {/* Fixed Left Vertical Navigation */}
          <SideNav
            activeStage={activeStage}
            onNavigate={handleNavigate}
          />

          {/* Active Stage Viewport (100% Viewport Fit) */}
          <main className="stage-viewport">
            {activeStage === 'home' && (
              <HomeStage
                onNavigate={handleNavigate}
                onOpenCV={() => setCvModalOpen(true)}
              />
            )}

            {activeStage === 'about' && <AboutStage />}

            {activeStage === 'work' && <WorkStage />}

            {activeStage === 'skills' && <SkillsStage />}

            {activeStage === 'credentials' && <CredentialsStage />}

            {activeStage === 'contact' && <ContactStage />}
          </main>
        </div>

        {/* Fixed Full-Width Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
