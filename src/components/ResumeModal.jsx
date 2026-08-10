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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      <div 
        className="rounded-3xl border-2 border-slate-300 w-full max-w-4xl overflow-hidden shadow-2xl relative my-8 max-h-[92vh] flex flex-col bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className="p-6 bg-slate-100 border-b-2 border-slate-300 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500 text-white shadow-md">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-black">Curriculum Vitae / Resume</h3>
              <p className="text-xs text-black font-mono font-bold">{personalData.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-cyan-500 text-white text-xs font-black hover:bg-cyan-600 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Export PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-200 border border-slate-300 text-black hover:bg-slate-300 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-8 space-y-8 overflow-y-auto font-sans text-black text-sm bg-white" id="printable-resume">
          
          <div className="border-b-2 border-slate-200 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-black text-black tracking-tight">
                {personalData.name}
              </h1>
              <p className="text-cyan-700 font-mono text-xs font-black">
                AI & ML Student | AI Developer | Frontend Developer
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-xs text-black pt-2 font-mono font-black">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" /> {personalData.contact.phone}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-cyan-600" /> {personalData.contact.email}
                </span>
                <a 
                  href={personalData.contact.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1 text-cyan-700 hover:underline"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn Profile
                </a>
                <a 
                  href={personalData.contact.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1 text-black hover:underline"
                >
                  <GithubIcon className="w-3.5 h-3.5" /> GitHub Profile
                </a>
              </div>
            </div>

            <div className="w-20 h-20 rounded-2xl bg-cyan-500 text-white font-mono font-black text-2xl flex items-center justify-center border-2 border-slate-300 shadow-md shrink-0">
              RC
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xs font-black font-mono text-cyan-700 uppercase tracking-wider">
              Professional Summary
            </h2>
            <p className="text-xs text-black font-extrabold leading-relaxed bg-slate-50 p-4 rounded-xl border-2 border-slate-200">
              {personalData.bio}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-black font-mono text-cyan-700 uppercase tracking-wider">
              Education
            </h2>
            <div className="space-y-3">
              {educationData.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border-2 border-slate-200 flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <div className="font-black text-black text-sm">{edu.institution}</div>
                    <div className="text-xs font-black text-cyan-700">{edu.degree}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono text-emerald-700 font-black">{edu.grade}</div>
                    <div className="text-[11px] font-mono text-black font-extrabold">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-black font-mono text-cyan-700 uppercase tracking-wider">
              Work Experience & Projects
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-50 border-2 border-slate-200 space-y-2">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <div className="font-black text-black text-sm">{exp.role} ({exp.type})</div>
                      <div className="text-xs font-bold text-black">{exp.company}</div>
                    </div>
                    <span className="text-xs font-mono text-black font-black">{exp.period}</span>
                  </div>
                  <ul className="space-y-1 pl-2">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="text-xs text-black font-black flex items-start gap-2">
                        <span className="text-cyan-600 font-black">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-black font-mono text-cyan-700 uppercase tracking-wider">
              Technical Skills & Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillsCategories.map((cat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border-2 border-slate-200 space-y-1">
                  <div className="text-xs font-black text-black">{cat.title}</div>
                  <div className="text-xs text-black font-mono font-bold">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="p-4 bg-slate-100 border-t-2 border-slate-300 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-black text-xs font-black transition-all border border-slate-300"
          >
            Close Resume Preview
          </button>
        </div>

      </div>
    </div>
  );
};
