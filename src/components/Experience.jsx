import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 border-t-2 border-slate-300 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border-2 border-slate-300 text-black text-xs font-mono font-black shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Career Journey</span>
          </div>

          <h2 className="font-bebas text-6xl sm:text-8xl md:text-9xl tracking-tight text-black leading-none">
            EXPERIENCE
          </h2>

          <p className="text-base sm:text-lg text-black font-black">
            Practical development roles and project milestones in Artificial Intelligence and Frontend Web Engineering.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-slate-300 -translate-x-1/2 hidden sm:block pointer-events-none" />
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-slate-300 sm:hidden pointer-events-none" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={exp.id} 
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  
                  {/* Glowing Node Icon */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cyan-500 border-2 border-white flex items-center justify-center shadow-lg z-20 group-hover:scale-125 transition-transform duration-300">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>

                  {/* Card Container */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] ml-14 sm:ml-0 ${
                    isEven ? 'sm:pr-4' : 'sm:pl-4'
                  }`}>
                    <div className="p-6 rounded-2xl bg-white border-2 border-slate-300 shadow-xl hover:border-cyan-500 transition-all duration-300 relative">
                      
                      {/* Role Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-md bg-cyan-500 text-white text-xs font-mono font-black shadow-sm">
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-black font-mono font-black">
                          <Calendar className="w-3.5 h-3.5 text-cyan-600" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-black text-black mb-1 group-hover:text-cyan-600 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-xs font-black text-black mb-4 flex items-center gap-2">
                        <span>{exp.company}</span>
                        {exp.companyUrl && (
                          <a 
                            href={exp.companyUrl} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="text-cyan-600 hover:underline inline-flex items-center gap-1 font-mono text-[11px] font-black"
                          >
                            <span>({exp.companyUrl.replace('https://', '')})</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                      {/* Responsibilities list */}
                      <ul className="space-y-2 mb-5">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="text-xs sm:text-sm text-black font-extrabold flex items-start gap-2 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack badges */}
                      <div className="pt-3 border-t border-slate-200 flex flex-wrap gap-1.5">
                        {exp.tech.map((t, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-300 text-black text-[11px] font-mono font-black"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
