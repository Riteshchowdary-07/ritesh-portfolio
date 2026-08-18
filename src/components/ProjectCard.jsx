import React from 'react';
import { ArrowUpRight, FolderGit2, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProjectCard = ({ project, isDark = true, onOpenModal }) => {
  return (
    <div className={`p-8 rounded-3xl border shadow-xl hover:border-cyan-500 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
      isDark ? 'bg-[#131b27] border-white/10' : 'bg-white border-slate-300'
    }`}>
      
      <div className="space-y-4">
        
        {/* Category & Badge */}
        <div className="flex items-center justify-between gap-2">
          <span className={`px-3 py-1 rounded-full border text-[10px] font-mono font-black ${
            isDark ? 'bg-[#080c14] border-white/10 text-cyan-400' : 'bg-slate-100 border-slate-300 text-cyan-700'
          }`}>
            {project.category}
          </span>

          {project.badge && (
            <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-500 text-[10px] font-mono font-black">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`text-2xl font-black group-hover:text-cyan-500 transition-colors leading-tight ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className={`text-xs sm:text-sm font-black leading-relaxed ${
          isDark ? 'text-slate-300' : 'text-slate-800'
        }`}>
          "{project.description}"
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className={`px-2.5 py-1 rounded-lg border text-xs font-mono font-black ${
                isDark ? 'bg-[#080c14] border-white/10 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-900'
              }`}
            >
              {t}
            </span>
          ))}
        </div>

      </div>

      {/* Action Button */}
      <div className={`pt-6 mt-6 border-t flex items-center justify-between ${
        isDark ? 'border-white/10' : 'border-slate-200'
      }`}>
        <button
          onClick={() => onOpenModal(project)}
          className="text-xs font-mono font-black text-cyan-500 hover:underline flex items-center gap-1"
        >
          View Details & Architecture
        </button>

        <button
          onClick={() => onOpenModal(project)}
          className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center hover:bg-cyan-600 transition-all shadow-md group-hover:scale-110"
        >
          <ArrowUpRight className="w-5 h-5 text-white" />
        </button>
      </div>

    </div>
  );
};
