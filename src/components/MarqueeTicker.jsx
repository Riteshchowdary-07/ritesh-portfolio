import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const MarqueeTicker = ({ 
  isDark = true,
  text = "SERVICES • WHAT I OFFER • SERVICES • WHAT I OFFER", 
  hasArrow = false,
  onClick = null
}) => {
  const items = Array(8).fill(text);

  return (
    <div 
      onClick={onClick}
      className={`relative overflow-hidden py-4 sm:py-6 border-y cursor-pointer select-none group z-10 transition-colors duration-300 ${
        isDark ? 'bg-[#0b1017] border-white/10' : 'bg-white border-slate-300'
      }`}
    >
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span className={`font-bebas text-5xl sm:text-7xl md:text-8xl tracking-wider group-hover:text-cyan-500 transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {item}
            </span>
            {hasArrow ? (
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cyan-500 border border-cyan-400 flex items-center justify-center text-white group-hover:scale-110 transition-all shadow-md">
                <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
            ) : (
              <span className="text-cyan-500 font-mono text-sm sm:text-base flex items-center gap-1">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-amber-500 animate-pulse" />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
