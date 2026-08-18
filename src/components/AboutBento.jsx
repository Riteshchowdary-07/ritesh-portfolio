import React from 'react';
import { Sparkles, Code2, Briefcase, CheckCircle2 } from 'lucide-react';
import { aboutData, experienceData, personalData } from '../data/portfolioData';

export const AboutBento = ({ isDark = true }) => {
  return (
    <section id="about" className={`py-20 relative z-10 border-t transition-colors duration-300 ${
      isDark ? 'bg-[#0b1017] border-white/10' : 'bg-white border-slate-300'
    }`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-2">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-black shadow-xs ${
            isDark ? 'bg-[#131b27] border-white/10 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-900'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>Profile & Specialization</span>
          </div>

          <h2 className={`font-bebas text-7xl sm:text-9xl tracking-tight leading-none ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            ABOUT ME
          </h2>
        </div>

        {/* Neo-Bento Grid Container */}
        <div className={`framer-grid-container rounded-3xl p-6 sm:p-10 border shadow-2xl relative ${
          isDark ? 'bg-[#131b27] border-white/10' : 'bg-white border-slate-300'
        }`}>
          
          {/* Corner Crosshair Markers */}
          <div className="crosshair-corner crosshair-top-left" />
          <div className="crosshair-corner crosshair-top-right" />
          <div className="crosshair-corner crosshair-bottom-left" />
          <div className="crosshair-corner crosshair-bottom-right" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT COLUMN: 3 Metric Cards */}
            <div className="lg:col-span-3 space-y-6">
              <div className={`p-6 rounded-2xl border shadow-md hover:border-cyan-500 transition-all group ${
                isDark ? 'bg-[#080c14] border-white/10' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="text-5xl font-bebas text-cyan-500">
                  04
                </div>
                <div className={`text-xs font-mono mt-1 font-black ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                  AI & ML Projects Built
                </div>
              </div>

              <div className={`p-6 rounded-2xl border shadow-md hover:border-cyan-500 transition-all group ${
                isDark ? 'bg-[#080c14] border-white/10' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="text-5xl font-bebas text-cyan-500">
                  03
                </div>
                <div className={`text-xs font-mono mt-1 font-black ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                  Developer Roles & Internships
                </div>
              </div>

              <div className={`p-6 rounded-2xl border shadow-md hover:border-cyan-500 transition-all group ${
                isDark ? 'bg-[#080c14] border-white/10' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="text-5xl font-bebas text-emerald-500">
                  7.22
                </div>
                <div className={`text-xs font-mono mt-1 font-black ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                  B.Tech CGPA (R.M.D Eng. College)
                </div>
              </div>
            </div>

            {/* CENTER: Main About Narrative */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center text-center space-y-6 my-4 lg:my-0">
              
              <div className="px-6 py-2.5 rounded-full bg-cyan-400 text-black font-black text-xs shadow-lg flex items-center gap-2 border border-cyan-300">
                <span>👋 Welcome to my portfolio</span>
              </div>

              <div className="space-y-4 max-w-lg">
                <h3 className={`text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {personalData.name}
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed font-extrabold ${
                  isDark ? 'text-slate-300' : 'text-slate-800'
                }`}>
                  "{aboutData.paragraphs[0]}"
                </p>
              </div>

              {/* Focus Areas Grid */}
              <div className="w-full max-w-md pt-2">
                <div className={`text-xs font-mono font-black uppercase tracking-wider mb-3 ${
                  isDark ? 'text-cyan-400' : 'text-cyan-600'
                }`}>
                  Core Focus Areas
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {aboutData.focusAreas.map((area, idx) => (
                    <div 
                      key={idx}
                      className={`p-3 rounded-xl border text-xs font-mono font-black flex items-center gap-1.5 justify-center ${
                        isDark ? 'bg-[#080c14] border-white/10 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-900'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: 3 Metric Cards */}
            <div className="lg:col-span-3 space-y-6">
              <div className={`p-6 rounded-2xl border shadow-md hover:border-cyan-500 transition-all group ${
                isDark ? 'bg-[#080c14] border-white/10' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="text-5xl font-bebas text-cyan-500">
                  04
                </div>
                <div className={`text-xs font-mono mt-1 font-black ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                  Oracle Industry Certifications
                </div>
              </div>

              <div className={`p-6 rounded-2xl border shadow-md hover:border-cyan-500 transition-all group ${
                isDark ? 'bg-[#080c14] border-white/10' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="text-5xl font-bebas text-cyan-500">
                  2024–2028
                </div>
                <div className={`text-xs font-mono mt-1 font-black ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                  AI & ML Engineering Graduation
                </div>
              </div>

              <div className={`p-6 rounded-2xl border shadow-md hover:border-cyan-500 transition-all group ${
                isDark ? 'bg-[#080c14] border-white/10' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="text-5xl font-bebas text-amber-500">
                  86%
                </div>
                <div className={`text-xs font-mono mt-1 font-black ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                  Intermediate Percentage (Narayana)
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
