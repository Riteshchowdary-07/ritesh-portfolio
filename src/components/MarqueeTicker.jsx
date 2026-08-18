import React from 'react';

export default function MarqueeTicker() {
  const items = [
    'Computer Vision',
    'Generative AI',
    'YOLOv8 & ALPR',
    'Google Gemini API',
    'Agentic AI',
    'Prompt Engineering',
    'OpenCV',
    'Python & Flask',
    'Oracle OCI Cloud',
    'Web Engineering',
  ];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.concat(items).map((item, idx) => (
          <div key={idx} className="marquee__item">
            <span>{item}</span>
            <span className="marquee__dot" />
          </div>
        ))}
      </div>
    </div>
  );
}
