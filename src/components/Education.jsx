import React from 'react';

export default function Education() {
  const educationList = [
    {
      institution: 'R.M.D Engineering College',
      degree: 'B.Tech in Artificial Intelligence & Machine Learning',
      period: '2024 – 2028',
      score: 'CGPA: 7.22 / 10',
      description:
        'Specializing in core AI & ML fundamentals, Computer Vision algorithms, Deep Learning models, Neural Networks, Database Systems, and Object-Oriented Software Engineering.',
    },
    {
      institution: 'Narayana Junior College',
      degree: 'Intermediate (MPC — Mathematics, Physics, Chemistry)',
      period: '2022 – 2024',
      score: 'Score: 86%',
      description:
        'Rigorous pre-university education in Advanced Mathematics, Analytical Physics, and Chemistry, laying strong problem-solving foundations.',
    },
  ];

  return (
    <section id="education" className="section section--education">
      <div className="container">
        <div className="section__header">
          <div className="eyebrow">EDUCATION</div>
          <h2>Academic Qualifications</h2>
          <p className="section__lead">
            Formal technical education specializing in Artificial Intelligence, Machine Learning, Computer Science principles, and Mathematics.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="project-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="eyebrow" style={{ margin: 0 }}>{edu.period}</span>
                  <span style={{ color: 'var(--accent)', fontWeight: '600', fontSize: '0.9rem' }}>{edu.score}</span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', margin: '0 0 0.4rem', color: 'var(--text)' }}>
                  {edu.institution}
                </h3>
                <p style={{ fontWeight: '600', color: 'var(--text-muted)', fontSize: '1rem', margin: '0 0 1rem' }}>
                  {edu.degree}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
