import React from 'react';
import { Award, ExternalLink, Sparkles, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications = ({ isDark = true }) => {
  return (
    <section id="certifications" className={`py-24 relative z-10 border-t transition-colors duration-300 ${
      isDark ? 'bg-[#0b1017] border-white/10' : 'bg-white border-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-black shadow-xs ${
            isDark ? 'bg-[#131b27] border-white/10 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-900'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>Verified Industry Credentials</span>
          </div>

          <h2 className={`font-bebas text-6xl sm:text-8xl md:text-9xl tracking-tight leading-none ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            CERTIFICATIONS
          </h2>

          <p className={`text-base sm:text-lg font-black ${
            isDark ? 'text-slate-300' : 'text-slate-800'
          }`}>
            Official Oracle University certifications in Generative AI, Agentic AI, APEX Cloud Development, and AI Database SQL.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className={`p-8 rounded-3xl border shadow-xl hover:border-cyan-500 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group ${
                isDark ? 'bg-[#131b27] border-white/10' : 'bg-white border-slate-300'
              }`}
            >
              <div className="space-y-4">
                
                {/* Badge Header */}
                <div className={`flex items-center justify-between gap-3 border-b pb-4 ${
                  isDark ? 'border-white/10' : 'border-slate-200'
                }`}>
                  <div className="flex items-center gap-2.5">
                    <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-500 shrink-0">
                      <Award className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <div className={`text-xs font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{cert.issuer}</div>
                      <div className="text-[11px] font-mono text-red-500 font-black flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> {cert.level}
                      </div>
                    </div>
                  </div>

                  <span className={`px-3 py-1 rounded-full border text-[10px] font-mono font-black ${
                    isDark ? 'bg-[#080c14] border-white/10 text-slate-300' : 'bg-slate-100 border-slate-300 text-slate-800'
                  }`}>
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-black group-hover:text-cyan-500 transition-colors leading-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {cert.title}
                </h3>

                {/* Cert ID */}
                <div className={`text-xs font-mono font-bold p-3 rounded-xl border flex items-center justify-between ${
                  isDark ? 'bg-[#080c14] border-white/5 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}>
                  <span>Certification ID:</span>
                  <span className="text-cyan-500 font-black">{cert.certId}</span>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 rounded-lg border text-xs font-mono font-black ${
                        isDark ? 'bg-[#080c14] border-white/10 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-900'
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Button: View Certificate in New Tab */}
              <div className={`pt-6 mt-6 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-black font-mono flex items-center justify-center gap-2 transition-all shadow-md group-hover:scale-[1.01]"
                >
                  <span className="text-white-brand">View Certificate PDF</span>
                  <ExternalLink className="w-4 h-4 text-white" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
