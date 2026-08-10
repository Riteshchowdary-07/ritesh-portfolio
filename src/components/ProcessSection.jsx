import React from 'react';
import { Sparkles, MessageSquare, Cpu, Rocket, ArrowRight } from 'lucide-react';

export const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Let's Talk & Formulate",
      desc: "We start with a conversation about your project, goals, dataset parameters, and vision to understand exactly what you need.",
      icon: MessageSquare,
      tag: "01 Let's Talk"
    },
    {
      number: "02",
      title: "Create & Refine",
      desc: "We design AI algorithms, train computer vision models (OpenCV/YOLOv8), and share interactive prototypes until everything feels perfect.",
      icon: Cpu,
      tag: "02 Create & Refine"
    },
    {
      number: "03",
      title: "Develop & Deploy",
      desc: "We connect Flask micro-backends with modern, responsive React user interfaces, ensuring high performance and recruiter readiness.",
      icon: Rocket,
      tag: "03 Develop & Deploy"
    }
  ];

  return (
    <section id="process" className="py-24 relative z-10 border-t-2 border-slate-300 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giant All-Caps Header */}
        <div className="text-center mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border-2 border-slate-300 text-black text-xs font-mono font-black shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Development Workflow</span>
          </div>

          <h2 className="font-bebas text-7xl sm:text-9xl tracking-tight text-black leading-none">
            PROCESS
          </h2>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: 3 Process Steps */}
          <div className="lg:col-span-7 space-y-6">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div 
                  key={idx}
                  className="framer-grid-container rounded-3xl bg-white p-6 sm:p-8 border-2 border-slate-300 shadow-lg relative flex flex-col justify-between hover:border-cyan-500 transition-all duration-300 group"
                >
                  <div className="crosshair-corner crosshair-top-left" />
                  <div className="crosshair-corner crosshair-top-right" />
                  <div className="crosshair-corner crosshair-bottom-left" />
                  <div className="crosshair-corner crosshair-bottom-right" />

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="font-bebas text-5xl text-black">
                          {step.number}
                        </span>
                        <span className="text-xs font-mono text-white font-black tracking-widest uppercase px-3 py-1 rounded bg-cyan-500 shadow-sm">
                          {step.tag}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bebas text-black tracking-wide group-hover:text-cyan-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-black leading-relaxed font-black">
                        {step.desc}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-100 text-black border-2 border-slate-300 group-hover:bg-cyan-400 group-hover:text-black transition-all shadow-md shrink-0">
                      <IconComp className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Full Body 3D Developer Desk Character Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              <div className="relative glass-card p-6 rounded-3xl border-2 border-slate-300 shadow-2xl bg-white text-center space-y-4">
                <img 
                  src="/dev-desk.jpg" 
                  alt="3D Developer Desk Character" 
                  className="w-full max-h-80 object-contain rounded-2xl"
                />
                <div className="space-y-1">
                  <div className="font-bebas text-3xl text-black leading-none">
                    ENGINEERING IN ACTION
                  </div>
                  <p className="text-xs text-black font-black">
                    Building robust OpenCV computer vision & Gemini AI web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
