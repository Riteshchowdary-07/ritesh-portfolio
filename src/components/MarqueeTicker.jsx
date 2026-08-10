import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const MarqueeTicker = ({ 
  text = "SERVICES • WHAT I OFFER • SERVICES • WHAT I OFFER", 
  hasArrow = false,
  onClick = null,
  bgClass = "bg-white border-y-2 border-slate-300"
}) => {
  const items = Array(8).fill(text);

  return (
    <div 
      onClick={onClick}
      className={`relative overflow-hidden py-4 sm:py-6 ${bgClass} cursor-pointer select-none group z-10 transition-colors duration-300`}
    >
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span className="font-bebas text-5xl sm:text-7xl md:text-8xl tracking-wider text-black group-hover:text-cyan-600 transition-colors">
              {item}
            </span>
            {hasArrow ? (
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black group-hover:scale-110 transition-all shadow-md">
                <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
            ) : (
              <span className="text-cyan-brand font-mono text-sm sm:text-base flex items-center gap-1">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-amber-500 animate-pulse" />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
