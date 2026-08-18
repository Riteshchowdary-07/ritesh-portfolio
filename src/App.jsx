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
  const [isDark, setIsDark] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Enforce Light / White theme class on html document root
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('light');
    root.classList.remove('dark');
  }, [isDark]);

  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-cyan-500/30 selection:text-cyan-900 overflow-x-hidden">
      {/* Dynamic 2D Canvas Particle Neural Background with Interactive Cursor Effect on Pure White */}
      <NeuralNetworkBg />

      {/* Framer-Style Navigation Header */}
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content Sections on Pure White Background */}
      <main className="relative z-10 bg-white">
        {/* Hero Section */}
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />

        {/* Continuous Marquee Ticker Banner: SERVICES • WHAT I OFFER */}
        <MarqueeTicker text="SERVICES • WHAT I OFFER • SERVICES • WHAT I OFFER" />

        {/* Featured Work & 8 Projects Grid */}
        <Projects />

        {/* Framer Bento Grid ABOUT ME Section */}
        <AboutBento />

        {/* Development Methodology Process Steps */}
        <ProcessSection />

        {/* Categorized Interactive Skills */}
        <Skills />

        {/* Verified Oracle Industry Certifications */}
        <Certifications />

        {/* Internship & Development Timeline */}
        <Experience />

        {/* Academic Education Qualifications */}
        <Education />

        {/* Interactive FAQ Pill Accordion */}
        <FaqSection />

        {/* Resume Banner */}
        <Resume />

        {/* Contact Direct Messaging Form */}
        <Contact />
      </main>

      {/* Framer Footer with Infinite Ticker */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Interactive Modals */}
      <TerminalEasterEgg
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}

export default App;
