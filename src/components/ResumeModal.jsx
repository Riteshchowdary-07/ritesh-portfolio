import React from 'react';
import { X, Printer, FileText, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData, experienceData, educationData, skillsCategories } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      <div 
        className="glass-card rounded-3xl border border-cyan-500/40 w-full max-w-4xl overflow-hidden shadow-2xl relative my-8 max-h-[92vh] flex flex-col bg-[#07090e]"
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className="p-6 bg-[#0c101c] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Curriculum Vitae / Resume</h3>
              <p className="text-xs text-slate-400 font-mono">{personalData.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-semibold hover:bg-cyan-900 transition-all flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Export PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-8 space-y-8 overflow-y-auto font-sans text-slate-200 text-sm bg-[#090d16]" id="printable-resume">
          
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                {personalData.name}
              </h1>
              <p className="text-cyan-400 font-mono text-xs font-semibold">
                AI & ML Student | AI Developer | Frontend Developer
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 font-mono">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" /> {personalData.contact.phone}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" /> {personalData.contact.email}
                </span>
                <a 
                  href={personalData.contact.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1 text-blue-400 hover:underline"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn Profile
                </a>
              </div>
            </div>

            <img 
              src="/ritesh-passport.jpg" 
              alt="Kalapaneni Ritesh Chowdary Passport Photo" 
              className="w-24 h-24 rounded-xl object-cover border border-cyan-500/40 shadow-lg shrink-0"
            />
          </div>

          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-white/5">
              {personalData.bio}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider">
              Education
            </h2>
            <div className="space-y-3">
              {educationData.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <div className="font-bold text-white text-sm">{edu.institution}</div>
                    <div className="text-xs text-cyan-300">{edu.degree}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono text-emerald-400 font-semibold">{edu.grade}</div>
                    <div className="text-[11px] font-mono text-slate-400">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider">
              Work Experience & Projects
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <div className="font-bold text-white text-sm">{exp.role} ({exp.type})</div>
                      <div className="text-xs text-slate-400">{exp.company}</div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="space-y-1 pl-2">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider">
              Technical Skills & Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillsCategories.map((cat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                  <div className="text-xs font-bold text-white">{cat.title}</div>
                  <div className="text-xs text-slate-300 font-mono">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="p-4 bg-[#0c101c] border-t border-white/10 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-all"
          >
            Close Resume Preview
          </button>
        </div>

      </div>
    </div>
  );
};
