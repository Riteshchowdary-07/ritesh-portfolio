import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Sparkles, 
  Terminal,
  ExternalLink
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const Hero = ({ isDark = true, onOpenTerminal }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = personalData.roles;

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center transition-colors duration-300 ${
      isDark ? 'bg-[#0b1017]' : 'bg-white'
    }`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-10 text-center">
        
        {/* Status Pill Badge */}
        <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-xs font-mono font-black shadow-sm ${
          isDark 
            ? 'bg-[#131b27] border-white/10 text-slate-200' 
            : 'bg-slate-100 border-slate-300 text-slate-900'
        }`}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>{personalData.status}</span>
        </div>

        {/* Framer Headline */}
        <div className="space-y-6">
          
          <div className="flex items-center justify-center">
            <h1 className={`font-bebas text-6xl sm:text-8xl md:text-9xl tracking-tight leading-none text-center ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              AI & ML DEVELOPER
            </h1>
          </div>

          {/* Typewriter Role */}
          <div className="h-10 flex items-center justify-center">
            <span className={`text-xl sm:text-2xl font-mono font-black flex items-center gap-2 ${
              isDark ? 'text-slate-200' : 'text-slate-900'
            }`}>
              <span className="text-cyan-500 font-black">&gt;</span> {displayText}
              <span className="w-2 h-6 bg-cyan-500 inline-block animate-pulse"></span>
            </span>
          </div>

          {/* Subtitle paragraph */}
          <p className={`text-base sm:text-lg max-w-2xl mx-auto font-extrabold leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-800'
          }`}>
            From R.M.D Engineering College, I build intelligent AI models, OpenCV computer vision systems, and practical web applications.
          </p>
        </div>

        {/* Floating Action Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-9 py-4 rounded-full font-black text-sm text-black bg-cyan-400 hover:bg-cyan-300 shadow-xl flex items-center gap-3 transition-all hover:scale-105 active:scale-95 group border border-cyan-300"
          >
            <span>i Want to Chat</span>
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
          </button>

          <button
            onClick={() => scrollToSection('projects')}
            className={`px-8 py-4 rounded-full font-black text-sm border flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-md ${
              isDark 
                ? 'bg-[#131b27] border-white/10 text-white hover:bg-slate-800' 
                : 'bg-slate-100 border-slate-300 text-slate-900 hover:bg-slate-200'
            }`}
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 text-cyan-500" />
          </button>

          {/* Direct Resume Link (PDF in new tab) */}
          <a
            href="/Ritesh_Chowdary_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-4 rounded-full font-black text-sm text-white bg-cyan-500 hover:bg-cyan-600 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-md"
          >
            <FileText className="w-4 h-4 text-white" />
            <span className="text-white-brand">View Original Resume (PDF)</span>
            <ExternalLink className="w-3.5 h-3.5 text-white" />
          </a>
        </div>

        {/* Code Visual Card Container */}
        <div className="pt-10 max-w-3xl mx-auto">
          <div className={`framer-grid-container rounded-3xl p-6 shadow-2xl border relative text-left ${
            isDark 
              ? 'bg-[#131b27] border-white/10' 
              : 'bg-white border-slate-300'
          }`}>
            <div className="crosshair-corner crosshair-top-left" />
            <div className="crosshair-corner crosshair-top-right" />
            <div className="crosshair-corner crosshair-bottom-left" />
            <div className="crosshair-corner crosshair-bottom-right" />

            <div className={`flex items-center justify-between pb-3 border-b text-xs font-mono ${
              isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-700'
            }`}>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <span className={`ml-2 font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>ritesh_ai_engine.py</span>
              </div>
              <button 
                onClick={onOpenTerminal}
                className={`hover:underline flex items-center gap-1 font-black ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}
              >
                <Terminal className="w-3.5 h-3.5" /> Run CLI
              </button>
            </div>

            <div className={`mt-4 font-mono text-xs space-y-2 p-5 rounded-2xl overflow-x-auto border ${
              isDark 
                ? 'bg-[#080c14] border-white/5 text-slate-300' 
                : 'bg-slate-50 border-slate-200 text-slate-900'
            }`}>
              <div className="text-purple-400 font-bold"><span className="text-blue-400 font-black">import</span> cv2, yolo, flask, generativeai</div>
              <div className="text-slate-500 font-extrabold"># Computer Vision & AI Developer Pipeline</div>
              <div className="font-extrabold">internship = Company(<span className="text-emerald-400 font-black">'Doneshswari Technologies (dtskills.tech)'</span>)</div>
              <div className="font-extrabold">models = [<span className="text-emerald-400 font-black">'YOLOv8 ALPR'</span>, <span className="text-emerald-400 font-black">'OpenCV Traffic Signals'</span>, <span className="text-emerald-400 font-black">'Gemini Career AI'</span>]</div>
              <div className="text-cyan-400 flex items-center gap-1.5 pt-1 font-black">
                <Sparkles className="w-3.5 h-3.5 animate-spin text-sky-400" />
                <span>status = "Building Intelligent Ideas Into Real-World Products"</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
