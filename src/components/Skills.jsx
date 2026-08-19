import React, { useState } from 'react';
import SkillEndorseModal from './SkillEndorseModal';

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillCategories = [
    {
      category: 'PROGRAMMING',
      items: ['Python', 'Java', 'C++', 'JavaScript', 'SQL'],
    },
    {
      category: 'AI / ML',
      items: ['OpenCV', 'YOLOv8', 'Computer Vision', 'ALPR', 'KNN', 'Decision Trees', 'K-Means', 'Data Preprocessing', 'Model Evaluation'],
    },
    {
      category: 'GENERATIVE AI',
      items: ['Google Gemini API', 'Generative AI', 'Prompt Engineering', 'Agentic AI'],
    },
    {
      category: 'WEB / BACKEND',
      items: ['Flask', 'REST APIs', 'HTML5', 'CSS3', 'JavaScript', 'Oracle APEX'],
    },
    {
      category: 'DATABASE / CLOUD / TOOLS',
      items: ['Oracle SQL', 'PL/SQL', 'Oracle Cloud Infrastructure', 'Git', 'GitHub', 'VS Code'],
    },
    {
      category: 'FUNDAMENTALS',
      items: ['Data Structures & Algorithms', 'Problem Solving', 'UI/UX', 'Debugging'],
    },
  ];

  return (
    <section id="skills" className="section section--skills">
      <div className="container">
        <div className="section__header">
          <div className="eyebrow">TECHNICAL SKILLS &amp; COURSES</div>
          <h2>Tools, frameworks, and core engineering domains</h2>
          <p className="section__lead">
            Click any skill or topic below to endorse, collaborate, or express interest.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  letterSpacing: '0.12em',
                  color: 'var(--accent)',
                  margin: 0,
                  textTransform: 'uppercase',
                }}
              >
                {cat.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                {cat.items.map((item, iIdx) => (
                  <button
                    key={iIdx}
                    onClick={() => setSelectedSkill(item)}
                    style={{
                      background: 'var(--surface-muted)',
                      border: '1px solid var(--border)',
                      borderRadius: '999px',
                      color: 'var(--text)',
                      fontSize: '0.88rem',
                      padding: '0.45rem 0.9rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.18s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    title={`Click to endorse ${item}`}
                  >
                    <span>{item}</span>
                    <span style={{ color: 'var(--accent)', fontSize: '0.75rem' }}>✦</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedSkill && (
        <SkillEndorseModal skillName={selectedSkill} onClose={() => setSelectedSkill(null)} />
      )}
    </section>
  );
}
