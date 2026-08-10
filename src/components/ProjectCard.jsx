import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export const ProjectCard = ({ project, onOpenModal }) => {
  return (
    <div 
      className="glass-card rounded-3xl border-2 border-slate-300 bg-white overflow-hidden hover:border-cyan-500 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between cursor-pointer p-2"
      onClick={() => onOpenModal(project)}
    >
      
      {/* Top Banner Image Representation on Pure White */}
      <div className="relative h-52 bg-slate-50 rounded-2xl p-6 flex flex-col justify-between overflow-hidden border-2 border-slate-200 group-hover:scale-[1.01] transition-transform">
        <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform"></div>
        
        {/* Status Badge - Bright Cyan */}
        <div className="flex items-center justify-between z-10">
          <span className="px-3.5 py-1 rounded-full bg-cyan-500 text-white text-[11px] font-mono font-black shadow-sm">
            {project.status}
          </span>
          <div className="w-9 h-9 rounded-full bg-cyan-400 text-black border border-cyan-300 flex items-center justify-center shadow-md group-hover:bg-cyan-500 transition-all">
            <ArrowUpRight className="w-4.5 h-4.5 text-black" />
          </div>
        </div>

        {/* Project Title overlay */}
        <div className="z-10 space-y-1">
          <span className="text-xs font-mono text-cyan-brand font-black uppercase tracking-wider">
            {project.category}
          </span>
          <h4 className="text-3xl font-bebas text-black tracking-wide leading-none group-hover:text-cyan-600 transition-colors">
            {project.title}
          </h4>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 space-y-4 flex-1 flex flex-col justify-between bg-white">
        
        <p className="text-xs sm:text-sm text-black leading-relaxed font-black line-clamp-3">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-300 text-black text-[11px] font-mono font-black"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="pt-3 border-t-2 border-slate-200 flex items-center justify-between">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(project);
              }}
              className="text-xs font-black text-black hover:text-cyan-600 flex items-center gap-1.5 transition-colors"
            >
              <span>View Details</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            </button>

            <span className="px-2.5 py-0.5 rounded bg-slate-100 text-black text-[10px] font-mono font-black border border-slate-300">
              Coming Soon
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
