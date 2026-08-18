import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience = ({ isDark = true }) => {
  return (
    <section id="experience" className={`py-24 relative z-10 border-t transition-colors duration-300 ${
      isDark ? 'bg-[#0b1017] border-white/10' : 'bg-white border-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-black shadow-xs ${
            isDark ? 'bg-[#131b27] border-white/10 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-900'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>Professional Career History</span>
          </div>

          <h2 className={`font-bebas text-6xl sm:text-8xl md:text-9xl tracking-tight leading-none ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            WORK EXPERIENCE
          </h2>
        </div>

        {/* Timeline Items */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, idx) => (
            <div
              key={exp.id}
              className={`p-8 rounded-3xl border shadow-xl hover:border-cyan-500 hover:shadow-2xl transition-all duration-300 relative group ${
                isDark ? 'bg-[#131b27] border-white/10' : 'bg-white border-slate-300'
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 border-b pb-4 mb-6 ${
                isDark ? 'border-white/10' : 'border-slate-200'
              }">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-cyan-500" />
                    <h3 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {exp.role}
                    </h3>
                  </div>
                  <div className="text-sm font-mono text-cyan-500 font-extrabold flex items-center gap-2">
                    <span>{exp.company}</span>
                    {exp.location && (
                      <span className="flex items-center gap-1 text-slate-400 text-xs">
                        <MapPin className="w-3 h-3 text-slate-400" /> {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full border text-xs font-mono font-black flex items-center gap-1.5 ${
                    isDark ? 'bg-[#080c14] border-white/10 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-900'
                  }`}>
                    <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Responsibilities list */}
              <ul className="space-y-2.5 mb-6">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className={`text-xs sm:text-sm font-black flex items-start gap-2.5 ${
                    isDark ? 'text-slate-300' : 'text-slate-800'
                  }`}>
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className={`px-3 py-1 rounded-lg border text-xs font-mono font-black ${
                      isDark ? 'bg-[#080c14] border-white/10 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-900'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
