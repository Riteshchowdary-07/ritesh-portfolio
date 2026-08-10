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

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const iconMap = {
    Code2: Code2,
    BrainCircuit: BrainCircuit,
    Layout: Layout,
    Cpu: Cpu,
  };

  return (
    <section id="skills" className="py-24 relative z-10 border-t-2 border-slate-300 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border-2 border-slate-300 text-black text-xs font-mono font-black shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="font-bebas text-6xl sm:text-8xl md:text-9xl tracking-tight text-black leading-none">
            SKILLS & TECHNOLOGIES
          </h2>

          <p className="text-base sm:text-lg text-black font-black">
            A comprehensive overview of programming languages, machine learning techniques, web development frameworks, and core engineering practices.
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
                className={`px-5 py-3 rounded-xl text-sm font-black flex items-center gap-2.5 transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-500 text-white shadow-md scale-105 font-black border-2 border-cyan-500'
                    : 'bg-white text-black border-2 border-slate-300 hover:bg-slate-100 font-black'
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
          <div className="flex items-center justify-between border-b-2 border-slate-300 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyan-500 text-white shadow-md">
                {React.createElement(iconMap[skillsCategories[activeCategory].icon] || Code2, { className: "w-5 h-5 text-white" })}
              </div>
              <h3 className="text-3xl font-black text-black">
                {skillsCategories[activeCategory].title}
              </h3>
            </div>
            <span className="text-xs font-mono text-black font-black px-3 py-1 bg-slate-100 border border-slate-300 rounded-full">
              {skillsCategories[activeCategory].skills.length} Competencies
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsCategories[activeCategory].skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border-2 border-slate-300 hover:border-cyan-500 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-xl text-black group-hover:text-cyan-600 transition-colors">
                      {skill.name}
                    </span>
                    <CheckCircle className="w-5 h-5 text-cyan-600 shrink-0" />
                  </div>

                  <p className="text-xs sm:text-sm text-black font-black leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-black font-black">
                  <span className="flex items-center gap-1">
                    <Info className="w-3.5 h-3.5 text-cyan-600" /> Verified Competency
                  </span>
                  <span className="text-cyan-600 font-black">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
