import React from 'react';
import { 
  X, 
  CheckCircle, 
  BrainCircuit, 
  Layers, 
  Workflow, 
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      <div 
        className="glass-card rounded-3xl border border-cyan-500/40 w-full max-w-3xl overflow-hidden shadow-2xl relative my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className="p-6 bg-[#0c101c] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-xs text-slate-400 font-mono">{project.subtitle}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto font-sans text-slate-300 text-sm">
          
          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-2">
            <h4 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider">
              Project Overview
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-red-500/20 space-y-2">
              <h4 className="text-xs font-bold font-mono text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" /> The Problem
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-emerald-500/20 space-y-2">
              <h4 className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> The AI Solution
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-2">
            <h4 className="text-xs font-bold font-mono text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
              <Workflow className="w-4 h-4" /> How It Works
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line font-mono bg-[#05070a] p-3 rounded-lg border border-white/5">
              {project.howItWorks}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, fIdx) => (
                <div key={fIdx} className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5 text-xs flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        <div className="p-4 bg-[#090d16] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-400 font-mono">
            Status: <span className="text-emerald-400 font-semibold">{project.status}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              disabled
              className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-500 text-xs font-mono flex items-center gap-2 cursor-not-allowed opacity-75"
              title="GitHub repository placeholder"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub (Coming Soon)</span>
            </button>

            <button
              disabled
              className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-500 text-xs font-mono flex items-center gap-2 cursor-not-allowed opacity-75"
              title="Live demo link placeholder"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo (Coming Soon)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
