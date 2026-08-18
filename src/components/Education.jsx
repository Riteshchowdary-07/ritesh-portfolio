import React from 'react';
import { GraduationCap, Award, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education = ({ isDark = true }) => {
  return (
    <section id="education" className={`py-24 relative z-10 border-t transition-colors duration-300 ${
      isDark ? 'bg-[#0b1017] border-white/10' : 'bg-white border-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-black shadow-xs ${
            isDark ? 'bg-[#131b27] border-white/10 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-900'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>Academic Qualifications</span>
          </div>

          <h2 className={`font-bebas text-6xl sm:text-8xl md:text-9xl tracking-tight leading-none ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            EDUCATION
          </h2>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border shadow-xl hover:border-cyan-500 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group ${
                isDark ? 'bg-[#131b27] border-white/10' : 'bg-white border-slate-300'
              }`}
            >
              <div className="space-y-4">
                
                {/* Header */}
                <div className={`flex items-center justify-between gap-3 border-b pb-4 ${
                  isDark ? 'border-white/10' : 'border-slate-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 shrink-0">
                      <GraduationCap className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-black group-hover:text-cyan-500 transition-colors ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {edu.institution}
                      </h3>
                      <div className="text-xs font-mono text-cyan-500 font-extrabold">
                        {edu.degree}
                      </div>
                    </div>
                  </div>

                  <span className={`px-3 py-1 rounded-full border text-[10px] font-mono font-black shrink-0 ${
                    isDark ? 'bg-[#080c14] border-white/10 text-slate-300' : 'bg-slate-100 border-slate-300 text-slate-800'
                  }`}>
                    {edu.period}
                  </span>
                </div>

                {/* Grade Badge */}
                <div className={`p-4 rounded-2xl border flex items-center justify-between font-mono text-xs font-black ${
                  isDark ? 'bg-[#080c14] border-white/5 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-500" /> Academic Score:
                  </span>
                  <span className="text-emerald-500 text-sm font-extrabold">{edu.grade}</span>
                </div>

                {/* Details */}
                <p className={`text-xs sm:text-sm font-black leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-800'
                }`}>
                  {edu.details}
                </p>

              </div>

              <div className={`pt-4 mt-6 border-t text-[11px] font-mono font-black flex items-center justify-between ${
                isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-700'
              }`}>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Verified Academic Credential
                </span>
                <span className="text-cyan-500 font-black">Active Degree</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
