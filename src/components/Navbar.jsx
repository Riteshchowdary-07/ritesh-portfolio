import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Sun, 
  Moon,
  Menu, 
  X, 
  Terminal,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export const Navbar = ({ isDark, setIsDark, onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
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
        ? isDark 
          ? 'glass-nav py-3 bg-[#0b1017]/90 border-b border-white/10 shadow-2xl' 
          : 'glass-nav py-3 bg-white/95 border-b border-slate-200 shadow-md'
        : isDark
          ? 'bg-[#0b1017]/70 py-4 border-b border-white/5'
          : 'bg-white/90 py-4 border-b border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Pill Button & Socials */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-4 py-2 rounded-full bg-cyan-500 text-white font-black text-xs shadow-md hover:bg-cyan-600 transition-all flex items-center gap-2 group"
          >
            <span>i Want to Chat</span>
            <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
          </button>

          {/* Social Icons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a 
              href={personalData.contact.github} 
              target="_blank" 
              rel="noreferrer" 
              className={`p-1.5 transition-colors ${isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-700 hover:text-cyan-600'}`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a 
              href={personalData.contact.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className={`p-1.5 transition-colors ${isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-700 hover:text-cyan-600'}`}
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a 
              href={`mailto:${personalData.contact.email}`} 
              className={`p-1.5 transition-colors ${isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-700 hover:text-cyan-600'}`}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Center Logo Initial Badge */}
        <button 
          onClick={() => scrollToSection('home')}
          className="flex flex-col items-center group"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-cyan-400 rounded-full blur-xs opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-10 h-10 rounded-full bg-cyan-500 text-white font-mono font-black text-xs flex items-center justify-center border-2 border-white shadow-md group-hover:scale-105 transition-transform">
              RC
            </div>
          </div>
          <span className={`text-[10px] font-black tracking-wider font-mono mt-0.5 ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
            Home
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className={`hidden lg:flex items-center gap-1 px-3 py-1 rounded-full border shadow-inner ${
          isDark 
            ? 'bg-[#131b27] border-white/10' 
            : 'bg-slate-100 border-slate-300'
        }`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-black transition-all duration-200 ${
                activeSection === link.id
                  ? 'bg-cyan-500 text-white font-black shadow-md'
                  : isDark
                    ? 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    : 'text-slate-800 hover:bg-slate-200'
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
            className={`p-2 rounded-full border transition-all ${
              isDark 
                ? 'bg-[#131b27] border-white/10 text-slate-200 hover:bg-slate-800' 
                : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
            }`}
          >
            <Terminal className="w-4 h-4" />
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full border transition-all ${
              isDark
                ? 'bg-[#131b27] border-white/10 text-amber-400 hover:bg-slate-800'
                : 'bg-slate-100 border-slate-300 text-amber-600 hover:bg-slate-200'
            }`}
            title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-800" />}
          </button>

          {/* Direct Resume Link (PDF in new tab) */}
          <a
            href="/Ritesh_Chowdary_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full text-xs font-black text-white bg-cyan-500 hover:bg-cyan-600 shadow-md transition-all flex items-center gap-1.5"
          >
            <span className="text-white-brand">Resume</span>
            <ExternalLink className="w-3.5 h-3.5 text-white" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl ${
          isDark ? 'bg-[#0b1017] border-white/10' : 'bg-white border-slate-300'
        }`}>
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-black text-left transition-all ${
                  activeSection === link.id
                    ? 'bg-cyan-500 text-white font-black'
                    : isDark
                      ? 'text-slate-300 hover:bg-slate-900'
                      : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <a
              href="/Ritesh_Chowdary_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl text-sm font-black text-left bg-cyan-500 text-white flex items-center justify-between mt-2"
            >
              <span>View Resume (PDF)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
