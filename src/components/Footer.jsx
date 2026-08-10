import React, { useState } from 'react';
import { Mail, ArrowUp, Terminal, Copy, Check } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { MarqueeTicker } from './MarqueeTicker';

export const Footer = ({ onOpenTerminal }) => {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 border-t-2 border-slate-300 bg-white text-black transition-colors duration-300">
      
      {/* Giant Infinite Marquee Banner on Pure White */}
      <MarqueeTicker 
        text="START A PROJECT • START A PROJECT" 
        hasArrow={true}
        onClick={() => scrollToSection('contact')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 bg-white">
        
        {/* Footer Neo-Bento Columns */}
        <div className="framer-grid-container rounded-3xl bg-white p-8 border-2 border-slate-300 relative shadow-lg">
          <div className="crosshair-corner crosshair-top-left" />
          <div className="crosshair-corner crosshair-top-right" />
          <div className="crosshair-corner crosshair-bottom-left" />
          <div className="crosshair-corner crosshair-bottom-right" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Initial Badge & Brand Info */}
            <div className="md:col-span-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500 text-white font-mono font-black text-xl flex items-center justify-center border-2 border-slate-300 shadow-md shrink-0">
                RC
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-black text-black leading-tight">
                  Kalapaneni Ritesh Chowdary
                </h4>
                <p className="text-xs text-cyan-brand font-mono font-black">
                  AI & ML Student • Developer
                </p>
                <p className="text-xs text-black font-mono font-bold">
                  R.M.D Engineering College
                </p>
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div className="md:col-span-3 space-y-2 text-xs font-mono">
              <div className="text-black uppercase font-black tracking-wider mb-2">Navigation</div>
              <div className="flex flex-col gap-1.5">
                {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((linkId) => (
                  <button
                    key={linkId}
                    onClick={() => scrollToSection(linkId)}
                    className="text-left text-black hover:text-cyan-600 transition-colors capitalize flex items-center gap-1.5 font-black"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950"></span>
                    <span>{linkId}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Social Channels */}
            <div className="md:col-span-2 space-y-2 text-xs font-mono">
              <div className="text-black uppercase font-black tracking-wider mb-2">Socials</div>
              <div className="flex flex-col gap-1.5 text-black font-black">
                <a href={personalData.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-600 transition-colors">
                  LinkedIn
                </a>
                <a href={personalData.contact.github} target="_blank" rel="noreferrer" className="hover:text-cyan-600 transition-colors">
                  GitHub
                </a>
                <a href={`mailto:${personalData.contact.email}`} className="hover:text-cyan-600 transition-colors">
                  Email Direct
                </a>
              </div>
            </div>

            {/* Click to Copy Email Card */}
            <div className="md:col-span-3 space-y-2">
              <div className="text-xs font-mono text-black font-black">Click to copy:</div>
              <button
                onClick={handleCopyEmail}
                className="w-full p-4 rounded-2xl bg-white border-2 border-slate-300 hover:border-cyan-500 text-left transition-all group flex items-center justify-between shadow-sm"
              >
                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono text-black uppercase font-black">Direct Contact</div>
                  <div className="text-xs font-black text-black truncate group-hover:text-cyan-600 transition-colors">
                    {personalData.contact.email}
                  </div>
                </div>
                <div className="p-2 rounded-xl bg-slate-100 border border-slate-300 text-black shrink-0">
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </div>
              </button>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-black font-mono font-black gap-4">
          <div className="flex items-center gap-2">
            <span>Designed & Built by <strong className="text-black font-black">Kalapaneni Ritesh Chowdary</strong></span>
            <button
              onClick={onOpenTerminal}
              className="p-1 rounded bg-slate-950 text-white border border-slate-800"
              title="Terminal Easter Egg"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span>© 2026 Kalapaneni Ritesh Chowdary</span>
            <button
              onClick={scrollToTop}
              title="Scroll to Top"
              className="p-2.5 rounded-full bg-slate-950 text-white hover:bg-slate-800 transition-all shadow-md"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
