import React from 'react';
import { Sparkles, GraduationCap, Award, Code, FolderGit2 } from 'lucide-react';
import { aboutData, personalData } from '../data/portfolioData';

export const About = () => {
  const statIcons = [FolderGit2, Award, GraduationCap, Code];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {aboutData.title}
          </h2>
        </div>

        {/* Content & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Detailed Narrative & Passport Photo Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              
              {/* Profile Card Header with Passport Photo */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-6 border-b border-white/10">
                <div className="relative shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 rounded-2xl blur-md opacity-70 animate-pulse"></div>
                  <img 
                    src="/ritesh-passport.jpg" 
                    alt="Kalapaneni Ritesh Chowdary" 
                    className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 border-cyan-400/80 shadow-xl"
                  />
                  <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-slate-900 border border-cyan-500/50 text-[10px] font-mono text-cyan-400 font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400 fill-amber-400" /> AI/ML
                  </div>
                </div>

                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-white">Kalapaneni Ritesh Chowdary</h3>
                  <p className="text-xs font-mono text-cyan-400 font-semibold">
                    AI & ML Student • R.M.D Engineering College
                  </p>
                  <p className="text-xs text-slate-400 italic pt-1">
                    "Building meaningful digital experiences through creative code and intelligent algorithms."
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                {aboutData.paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>

              {/* Core Interests Tag Pills */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {['Artificial Intelligence', 'Machine Learning', 'Frontend Development', 'Python & Flask', 'UI/UX Design', 'Problem Solving'].map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 text-xs font-medium hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    #{interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: 4 Verified Statistic Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalData.stats.map((stat, idx) => {
              const IconComponent = statIcons[idx % statIcons.length];
              return (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 group-hover:scale-105 transition-transform inline-block">
                      {stat.value}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1">{stat.label}</h3>
                  <p className="text-xs text-slate-400 leading-snug">{stat.detail}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
