import React, { useState } from 'react';
import SkillEndorseModal from './SkillEndorseModal';

export default function About() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const focusAreas = [
    { title: 'Computer Vision', icon: '👁️' },
    { title: 'Generative AI', icon: '✨' },
    { title: 'Agentic AI', icon: '🤖' },
    { title: 'Machine Learning', icon: '⚡' },
    { title: 'Python', icon: '🐍' },
    { title: 'AI Applications', icon: '🚀' },
  ];

  return (
    <section id="about" className="section section--about">
      <div className="container">
        <div className="section__header">
          <div className="eyebrow">ABOUT ME</div>
          <h2>Building intelligent systems for complex real-world challenges</h2>
        </div>

        <div className="about__grid">
          <div className="about__copy">
            <p>
              I am a B.Tech Artificial Intelligence &amp; Machine Learning student focused on building practical AI systems across Computer Vision, Generative AI, and intelligent software applications.
            </p>
            <p>
              My work spans real-time video processing pipelines for traffic safety, LLM-powered career counseling systems, healthcare emergency management platforms, and cloud database solutions.
            </p>
            <p>
              Certified across 4 Oracle specialized tracks including Generative AI Professional and Agentic AI Foundations, I combine solid software engineering fundamentals with cutting-edge AI technologies.
            </p>
          </div>

          <div className="about__skills">
            <h3>Core Focus Areas</h3>
            <ul className="skill-list">
              {focusAreas.map((area, idx) => (
                <li
                  key={idx}
                  onClick={() => setSelectedSkill(area.title)}
                  style={{ cursor: 'pointer' }}
                  title={`Click to endorse ${area.title}`}
                >
                  <span style={{ fontSize: '1.25rem' }}>{area.icon}</span>
                  <span>{area.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {selectedSkill && (
        <SkillEndorseModal skillName={selectedSkill} onClose={() => setSelectedSkill(null)} />
      )}
    </section>
  );
}
