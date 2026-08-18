import React, { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const duration = 1200; // ms
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setCount(progress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLeaving(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800);
        }, 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`preloader ${isLeaving ? 'is-leaving' : ''}`} aria-hidden={isLeaving}>
      <div className="preloader__inner">
        <div className="preloader__logo">
          <svg className="site-logo" width="54" height="54" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2.5" y="2.5" width="59" height="59" rx="16" stroke="currentColor" strokeWidth="2" opacity="0.88" />
            <path d="M22 48V16h12c4.5 0 8 3 8 7.5 0 3.5-2 6.5-5.5 7.2L43 48h-6.5l-5.8-15H28.5V48H22zm6.5-21h5.2c2.2 0 3.8-1.2 3.8-3s-1.6-3-3.8-3H28.5v6z" fill="currentColor" />
            <circle cx="32" cy="10" r="2.5" fill="var(--accent)" />
          </svg>
        </div>
        <div className="preloader__brand">KALAPANENI RITESH CHOWDARY</div>
        <div className="preloader__count">{count}%</div>
        <div className="preloader__bar">
          <span style={{ width: `${count}%` }}></span>
        </div>
      </div>
    </div>
  );
}
