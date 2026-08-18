import React, { useState } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import StatusPill from './components/StatusPill';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export function App() {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  return (
    <div className={`app-shell ${isPreloaderDone ? 'is-ready' : ''}`}>
      {!isPreloaderDone && <Preloader onComplete={() => setIsPreloaderDone(true)} />}

      <GrainOverlay />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <StatusPill />

      <div className="site-content">
        <main>
          <Hero />
          <MarqueeTicker />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function GrainOverlay() {
  return <div className="grain" aria-hidden="true" />;
}

export default App;
