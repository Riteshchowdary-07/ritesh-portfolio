import React from 'react';
import { GraduationCap, Calendar, Sparkles } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative z-10 border-t-2 border-slate-300 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border-2 border-slate-300 text-black text-xs font-mono font-black shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Academic Background</span>
          </div>

          <h2 className="font-bebas text-6xl sm:text-8xl md:text-9xl tracking-tight text-black leading-none">
            EDUCATION
          </h2>

          <p className="text-base sm:text-lg text-black font-black">
            Academic qualifications and foundational coursework in AI, Machine Learning, and Computer Science.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border-2 border-slate-300 shadow-xl hover:border-emerald-500 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b-2 border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-emerald-100 border border-emerald-400 text-emerald-700 shadow-sm">
                    <GraduationCap className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-black group-hover:text-emerald-600 transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-black text-cyan-700 mt-0.5">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-4 py-1.5 rounded-full bg-emerald-600 text-white font-mono font-black text-xs shadow-sm">
                    {edu.grade}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-black font-mono font-black bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-black font-extrabold leading-relaxed">
                {edu.details}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
