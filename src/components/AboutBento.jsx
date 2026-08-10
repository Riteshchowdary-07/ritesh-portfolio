import React from 'react';
import { Sparkles, Code2, Briefcase } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const AboutBento = () => {
  return (
    <section id="about" className="py-20 relative z-10 border-t-2 border-slate-300 bg-white transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giant All-Caps Header */}
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border-2 border-slate-300 text-black text-xs font-mono font-black shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Profile & Achievements</span>
          </div>

          <h2 className="font-bebas text-7xl sm:text-9xl tracking-tight text-black leading-none">
            ABOUT ME
          </h2>
        </div>

        {/* Neo-Bento Grid Container */}
        <div className="framer-grid-container rounded-3xl bg-white p-4 sm:p-8 border-2 border-slate-300 shadow-xl relative">
          
          {/* Corner Crosshair Markers */}
          <div className="crosshair-corner crosshair-top-left" />
          <div className="crosshair-corner crosshair-top-right" />
          <div className="crosshair-corner crosshair-bottom-left" />
          <div className="crosshair-corner crosshair-bottom-right" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* LEFT COLUMN: 3 Metric Cards */}
            <div className="lg:col-span-3 space-y-6">
              <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 shadow-md hover:border-cyan-500 transition-all group">
                <div className="text-5xl font-bebas text-black group-hover:text-cyan-600 transition-colors">
                  08+
                </div>
                <div className="text-xs text-black font-mono mt-1 font-black">
                  AI & ML Projects Completed
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 shadow-md hover:border-cyan-500 transition-all group">
                <div className="text-5xl font-bebas text-black group-hover:text-cyan-600 transition-colors">
                  03
                </div>
                <div className="text-xs text-black font-mono mt-1 font-black">
                  Development Roles & Internships
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 shadow-md hover:border-cyan-500 transition-all group">
                <div className="text-5xl font-bebas text-emerald-600">
                  7.22
                </div>
                <div className="text-xs text-black font-mono mt-1 font-black">
                  B.Tech CGPA (R.M.D Eng. College)
                </div>
              </div>
            </div>

            {/* CENTER: Full-Body Developer 3D Character Illustration */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative my-4 lg:my-0">
              
              {/* Speech Bubble */}
              <div className="mb-4 px-6 py-2.5 rounded-full bg-cyan-400 text-black font-black text-xs shadow-lg flex items-center gap-2 animate-bounce border border-cyan-300">
                <span>👋 Let Me Introduce Myself</span>
              </div>

              {/* Full Body 3D Character Illustration */}
              <div className="relative group max-w-sm">
                <img 
                  src="/dev-beanbag.jpg" 
                  alt="Full Body Developer Character" 
                  className="relative w-full max-h-80 rounded-3xl object-contain border-0 shadow-none hover:scale-105 transition-transform"
                />
              </div>

              {/* Bio summary */}
              <div className="mt-4 text-center max-w-md space-y-2">
                <h3 className="text-2xl font-black text-black">Kalapaneni Ritesh Chowdary</h3>
                <p className="text-xs sm:text-sm text-black leading-relaxed font-black">
                  B.Tech Artificial Intelligence & Machine Learning student at R.M.D Engineering College, specializing in OpenCV computer vision, YOLOv8 object detection, and full-stack Flask/React development.
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN: 3 Metric Cards */}
            <div className="lg:col-span-3 space-y-6">
              <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 shadow-md hover:border-cyan-500 transition-all group">
                <div className="text-5xl font-bebas text-cyan-600">
                  100%
                </div>
                <div className="text-xs text-black font-mono mt-1 font-black">
                  Recruiter & Candidate Readiness
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 shadow-md hover:border-cyan-500 transition-all group">
                <div className="text-5xl font-bebas text-black group-hover:text-cyan-600 transition-colors">
                  2024–2028
                </div>
                <div className="text-xs text-black font-mono mt-1 font-black">
                  AI & ML Engineering Graduation
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 shadow-md hover:border-cyan-500 transition-all group">
                <div className="text-5xl font-bebas text-amber-500">
                  86%
                </div>
                <div className="text-xs text-black font-mono mt-1 font-black">
                  Intermediate Percentage (Narayana)
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM ROW: My Stack & My Experience Lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t-2 border-slate-300">
            
            {/* My Stack List */}
            <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 shadow-md space-y-4">
              <div className="flex items-center justify-between border-b-2 border-slate-300 pb-3">
                <h4 className="font-bebas text-3xl text-black flex items-center gap-2">
                  <Code2 className="w-6 h-6 text-cyan-600" />
                  My Tech Stack
                </h4>
                <span className="text-xs font-mono text-black font-black">Core Tools</span>
              </div>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-white border-2 border-slate-300 flex items-center justify-between shadow-xs">
                  <span className="text-black font-black">Python</span>
                  <span className="text-[11px] text-black font-bold">ML & Vision</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border-2 border-slate-300 flex items-center justify-between shadow-xs">
                  <span className="text-black font-black">OpenCV</span>
                  <span className="text-[11px] text-black font-bold">Image Processing</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border-2 border-slate-300 flex items-center justify-between shadow-xs">
                  <span className="text-black font-black">YOLOv8</span>
                  <span className="text-[11px] text-black font-bold">Object Detection</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border-2 border-slate-300 flex items-center justify-between shadow-xs">
                  <span className="text-black font-black">Flask & React</span>
                  <span className="text-[11px] text-black font-bold">Web Stack</span>
                </div>
              </div>
            </div>

            {/* My Experience List */}
            <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 shadow-md space-y-4">
              <div className="flex items-center justify-between border-b-2 border-slate-300 pb-3">
                <h4 className="font-bebas text-3xl text-black flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-cyan-600" />
                  My Experience
                </h4>
                <span className="text-xs font-mono text-black font-black">Timeline</span>
              </div>

              <div className="space-y-3 font-sans text-xs">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="p-3.5 rounded-xl bg-white border-2 border-slate-300 flex items-center justify-between shadow-xs">
                    <div>
                      <div className="font-black text-black text-xs sm:text-sm">{exp.role}</div>
                      <div className="text-xs text-black font-bold">{exp.company}</div>
                    </div>
                    <span className="font-mono text-[11px] text-black font-black px-3 py-1 rounded-full bg-cyan-100 border border-cyan-400">
                      {exp.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
