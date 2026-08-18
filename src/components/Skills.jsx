import React, { useState } from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Layout, 
  Cpu, 
  Sparkles,
  CheckCircle,
  Info
} from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

export const Skills = ({ isDark = true }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const iconMap = {
    Code2: Code2,
    BrainCircuit: BrainCircuit,
    Sparkles: Sparkles,
    Layout: Layout,
    Cpu: Cpu,
    CheckCircle2: CheckCircle,
  };

  return (
    <section id="skills" className={`py-24 relative z-10 border-t transition-colors duration-300 ${
      isDark ? 'bg-[#0b1017] border-white/10' : 'bg-white border-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-black shadow-xs ${
            isDark ? 'bg-[#131b27] border-white/10 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-900'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className={`font-bebas text-6xl sm:text-8xl md:text-9xl tracking-tight leading-none ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            SKILLS & TECHNOLOGIES
          </h2>

          <p className={`text-base sm:text-lg font-black ${
            isDark ? 'text-slate-300' : 'text-slate-800'
          }`}>
            Categorized breakdown of programming languages, AI/ML tools, Generative AI models, web frameworks, and core engineering fundamentals.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {skillsCategories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Code2;
            const isActive = activeCategory === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2.5 transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-500 text-white shadow-md scale-105 font-black border-2 border-cyan-500'
                    : isDark
                      ? 'bg-[#131b27] text-slate-200 border border-white/10 hover:bg-slate-800'
                      : 'bg-white text-slate-900 border-2 border-slate-300 hover:bg-slate-100'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Grid */}
        <div className="space-y-8">
          <div className={`flex items-center justify-between border-b pb-4 ${
            isDark ? 'border-white/10' : 'border-slate-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyan-500 text-white shadow-md">
                {React.createElement(iconMap[skillsCategories[activeCategory].icon] || Code2, { className: "w-5 h-5 text-white" })}
              </div>
              <h3 className={`text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {skillsCategories[activeCategory].title}
              </h3>
            </div>
            <span className={`text-xs font-mono font-black px-3 py-1 rounded-full border ${
              isDark ? 'bg-[#080c14] border-white/10 text-slate-300' : 'bg-slate-100 border-slate-300 text-slate-900'
            }`}>
              {skillsCategories[activeCategory].skills.length} Competencies
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsCategories[activeCategory].skills.map((skill, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border hover:border-cyan-500 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between ${
                  isDark ? 'bg-[#131b27] border-white/10' : 'bg-white border-slate-300'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`font-black text-xl group-hover:text-cyan-500 transition-colors ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {skill.name}
                    </span>
                    <CheckCircle className="w-5 h-5 text-cyan-500 shrink-0" />
                  </div>

                  <p className={`text-xs sm:text-sm font-black leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-800'
                  }`}>
                    {skill.desc}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t flex items-center justify-between text-[11px] font-mono font-black ${
                  isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-700'
                }`}>
                  <span className="flex items-center gap-1">
                    <Info className="w-3.5 h-3.5 text-cyan-500" /> Verified Skill
                  </span>
                  <span className="text-cyan-500 font-black">Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
