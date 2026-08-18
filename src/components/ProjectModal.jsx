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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      <div 
        className="rounded-3xl border-2 border-slate-300 w-full max-w-3xl overflow-hidden shadow-2xl relative my-8 max-h-[90vh] flex flex-col bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 bg-slate-100 border-b-2 border-slate-300 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500 text-white shadow-md">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-black">{project.title}</h3>
              <p className="text-xs text-black font-mono font-bold">{project.subtitle}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-200 border border-slate-300 text-black hover:bg-slate-300 transition-all font-bold"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 overflow-y-auto font-sans text-black text-sm bg-white">
          
          <div className="p-4 rounded-xl bg-slate-50 border-2 border-slate-200 space-y-2 shadow-xs">
            <h4 className="text-xs font-black font-mono text-cyan-700 uppercase tracking-wider">
              Project Overview
            </h4>
            <p className="text-xs text-black font-extrabold leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-red-50 border-2 border-red-200 space-y-2 shadow-xs">
              <h4 className="text-xs font-black font-mono text-red-700 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-red-600" /> The Problem
              </h4>
              <p className="text-xs text-black font-extrabold leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border-2 border-emerald-200 space-y-2 shadow-xs">
              <h4 className="text-xs font-black font-mono text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> The AI Solution
              </h4>
              <p className="text-xs text-black font-extrabold leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border-2 border-slate-200 space-y-2 shadow-xs">
            <h4 className="text-xs font-black font-mono text-purple-700 uppercase tracking-wider flex items-center gap-1.5">
              <Workflow className="w-4 h-4 text-purple-600" /> How It Works
            </h4>
            <p className="text-xs text-black font-black leading-relaxed whitespace-pre-line font-mono bg-white p-3 rounded-lg border-2 border-slate-200">
              {project.howItWorks}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-black font-mono text-cyan-700 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-cyan-600" /> Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, fIdx) => (
                <div key={fIdx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs font-extrabold text-black flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-black font-mono text-black uppercase tracking-wider">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-300 text-black text-xs font-mono font-black"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bar */}
        <div className="p-4 bg-slate-100 border-t-2 border-slate-300 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-black font-mono font-black">
            Status: <span className="text-emerald-700 font-black">{project.status}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl || "https://github.com/Riteshchowdary-07/ritesh-portfolio"}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-cyan-500 text-white text-xs font-black font-mono flex items-center gap-2 hover:bg-cyan-600 transition-colors shadow-sm"
            >
              <GithubIcon className="w-4 h-4 text-white" />
              <span className="text-white-brand">View Code on GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
