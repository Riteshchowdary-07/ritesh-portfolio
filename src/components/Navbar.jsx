import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Sun, 
  Menu, 
  X, 
  Terminal
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export const Navbar = ({ isDark, setIsDark, onOpenTerminal, onOpenResumeModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-nav py-3 border-b-2 border-slate-300 shadow-md bg-white' 
        : 'bg-white/95 py-4 border-b border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Pill Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-4 py-2 rounded-full bg-cyan-500 text-white font-black text-xs shadow-md hover:bg-cyan-600 transition-all flex items-center gap-2 group"
          >
            <span>i Want to Chat</span>
            <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
          </button>

          {/* Social Icons */}
          <div className="hidden sm:flex items-center gap-2.5 text-black">
            <a href={personalData.contact.github} target="_blank" rel="noreferrer" className="p-1.5 hover:text-cyan-600 transition-colors">
              <GithubIcon className="w-4 h-4 text-black" />
            </a>
            <a href={personalData.contact.linkedin} target="_blank" rel="noreferrer" className="p-1.5 hover:text-cyan-600 transition-colors">
              <LinkedinIcon className="w-4 h-4 text-black" />
            </a>
            <a href={`mailto:${personalData.contact.email}`} className="p-1.5 hover:text-cyan-600 transition-colors">
              <Mail className="w-4 h-4 text-black" />
            </a>
          </div>
        </div>

        {/* Center Logo Avatar Badge */}
        <button 
          onClick={() => scrollToSection('home')}
          className="flex flex-col items-center group"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-cyan-400 rounded-full blur-xs opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src="/ritesh-passport.jpg" 
              alt="Ritesh Chowdary Avatar" 
              className="relative w-10 h-10 rounded-full object-cover border-2 border-white shadow-md group-hover:scale-105 transition-transform"
            />
          </div>
          <span className="text-[10px] font-black text-black tracking-wider font-mono mt-0.5">
            Home
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full border-2 border-slate-300 shadow-inner">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-black transition-all duration-200 ${
                activeSection === link.id
                  ? 'bg-cyan-500 text-white font-black shadow-md'
                  : 'text-black hover:bg-slate-200 font-extrabold'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Action Icons & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenTerminal}
            title="Open CLI Terminal"
            className="p-2 rounded-full bg-slate-100 border border-slate-300 text-black hover:bg-slate-200 transition-all"
          >
            <Terminal className="w-4 h-4 text-black" />
          </button>

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-slate-100 border border-slate-300 text-amber-500 transition-all hover:scale-105"
            title="Switch Theme"
          >
            <Sun className="w-4 h-4 text-amber-500" />
          </button>

          {/* Bright Cyan Resume Button */}
          <button
            onClick={onOpenResumeModal}
            className="px-5 py-2 rounded-full text-xs font-black text-white bg-cyan-500 hover:bg-cyan-600 shadow-md transition-all"
          >
            <span className="text-white-brand">Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-black"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b-2 border-slate-300 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-black text-left transition-all ${
                  activeSection === link.id
                    ? 'bg-cyan-500 text-white font-black'
                    : 'text-black hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
