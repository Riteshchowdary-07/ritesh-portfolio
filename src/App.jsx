import React, { useState, useEffect } from 'react';
import { NeuralNetworkBg } from './components/NeuralNetworkBg';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { Projects } from './components/Projects';
import { AboutBento } from './components/AboutBento';
import { ProcessSection } from './components/ProcessSection';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { FaqSection } from './components/FaqSection';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TerminalEasterEgg } from './components/TerminalEasterEgg';

export function App() {
  // Default to Dark theme matching Aakash Sharma template (#0b1017)
  const [isDark, setIsDark] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`relative min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-[#0b1017] text-slate-100' : 'bg-white text-slate-900'
    } selection:bg-cyan-500/30 selection:text-cyan-400 overflow-x-hidden`}>
      
      {/* Motion Canvas Neural Background */}
      <NeuralNetworkBg isDark={isDark} />

      {/* Modern Top Header Navigation */}
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero isDark={isDark} onOpenTerminal={() => setIsTerminalOpen(true)} />

        {/* Continuous Marquee Ticker Banner: SERVICES • WHAT I OFFER */}
        <MarqueeTicker isDark={isDark} text="SERVICES • WHAT I OFFER • SERVICES • WHAT I OFFER" />

        {/* Featured Projects Grid */}
        <Projects isDark={isDark} />

        {/* About Bento Grid Section */}
        <AboutBento isDark={isDark} />

        {/* Development Methodology Process Steps */}
        <ProcessSection isDark={isDark} />

        {/* Categorized Technical Skills */}
        <Skills isDark={isDark} />

        {/* Verified Oracle Industry Certifications */}
        <Certifications isDark={isDark} />

        {/* Internship & Experience Timeline */}
        <Experience isDark={isDark} />

        {/* Academic Qualifications */}
        <Education isDark={isDark} />

        {/* FAQ Accordion */}
        <FaqSection isDark={isDark} />

        {/* Resume PDF Download Banner */}
        <Resume isDark={isDark} />

        {/* Contact Form */}
        <Contact isDark={isDark} />
      </main>

      {/* Footer Banner */}
      <Footer isDark={isDark} onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Terminal CLI Modal */}
      <TerminalEasterEgg
        isDark={isDark}
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}

export default App;
