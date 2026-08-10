import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Sparkles } from 'lucide-react';

export const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "How long does a typical project take?",
      a: "Depending on project complexity, a full-stack AI web app or computer vision prototype takes 1 to 3 weeks, including dataset preprocessing, model evaluation, and responsive UI implementation."
    },
    {
      q: "What computer vision and AI models have you built?",
      a: "I have developed OpenCV-based traffic signal detection pipelines during my internship at Doneshswari Technologies (dtskills.tech), trained YOLOv8 for Automatic License Plate Recognition (ALPR) in Trivia-X, and integrated Gemini AI APIs into Flask web applications."
    },
    {
      q: "Where did you complete your computer vision internship?",
      a: "I completed my internship at Doneshswari Technologies (dtskills.tech), focusing on OpenCV video processing, real-time traffic signal recognition, and web analytics integration."
    },
    {
      q: "What web stack and programming languages do you use?",
      a: "My core programming languages are Python, Java, and C++. For web development, I work with Flask micro-backends, HTML5, CSS3, JavaScript ES6+, and React."
    },
    {
      q: "Are you available for internship opportunities?",
      a: "Yes! I am currently seeking software development, AI engineering, and computer vision internship roles to apply my practical skills and grow."
    }
  ];

  return (
    <section id="faq" className="py-24 relative z-10 border-t-2 border-slate-300 bg-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giant All-Caps Header */}
        <div className="text-center mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border-2 border-slate-300 text-black text-xs font-mono font-black shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-bebas text-6xl sm:text-8xl md:text-9xl tracking-tight text-black leading-none">
            FAQ
          </h2>
        </div>

        {/* Expandable Accordion List on Pure White */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="framer-grid-container rounded-3xl bg-white border-2 border-slate-300 overflow-hidden shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-black text-sm sm:text-base text-black flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-cyan-600 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <div className="p-2 rounded-full bg-cyan-100 border border-cyan-400 text-black shrink-0 font-bold">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-3 border-t-2 border-slate-200 text-xs sm:text-sm text-black leading-relaxed font-black bg-slate-50 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
