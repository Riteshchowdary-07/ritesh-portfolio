import React from 'react';
import { FileText, Sparkles, CheckCircle2 } from 'lucide-react';

export const Resume = ({ onOpenResumeModal }) => {
  return (
    <section id="resume" className="py-24 relative z-10 border-t-2 border-slate-300 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-slate-300 relative overflow-hidden text-center space-y-6 shadow-2xl">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border-2 border-slate-300 text-black text-xs font-mono font-black shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Curriculum Vitae</span>
          </div>

          <h2 className="font-bebas text-6xl sm:text-8xl md:text-9xl tracking-tight text-black leading-none">
            WANT TO KNOW MORE?
          </h2>

          <p className="text-base sm:text-lg text-black font-black max-w-2xl mx-auto leading-relaxed">
            Take a closer look at my experience, skills, education, and projects in a structured candidate summary.
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={onOpenResumeModal}
              className="px-9 py-4 rounded-full font-black text-base text-white bg-cyan-500 hover:bg-cyan-600 shadow-xl flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 border border-cyan-400"
            >
              <FileText className="w-5 h-5 text-white" />
              <span className="text-white-brand">Download & View Resume</span>
            </button>
          </div>

          {/* Recruiter Guarantee Pills */}
          <div className="pt-6 border-t-2 border-slate-200 flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-black font-black">
            <span className="flex items-center gap-1.5 text-emerald-700 font-black">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> B.Tech AI & ML (2024–2028)
            </span>
            <span className="flex items-center gap-1.5 text-emerald-700 font-black">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Verified CGPA: 7.22
            </span>
            <span className="flex items-center gap-1.5 text-emerald-700 font-black">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Gemini AI & Web Stack Experience
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
