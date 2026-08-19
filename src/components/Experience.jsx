import React from 'react';

export default function Experience() {
  const experiences = [
    {
      period: '2025 – PRESENT',
      role: 'Computer Vision & AI Developer Intern',
      company: 'Doneshswari Technologies',
      location: 'Chennai / Tirupati, India',
      highlights: [
        'Developed OpenCV and YOLOv8-based real-time video processing pipelines for traffic signal recognition and vehicle detection.',
        'Implemented computer vision modules for automatic license plate recognition (ALPR) and traffic violation detection, including helmetless riding and mobile-phone usage identification.',
        'Integrated vision-processing modules with web-based analytics interfaces for monitoring detected events.',
        'Applied image preprocessing and object-tracking techniques to improve real-time detection performance.',
      ],
      tags: ['OpenCV', 'YOLOv8', 'ALPR', 'Computer Vision', 'Python', 'Object Tracking', 'Image Preprocessing'],
    },
    {
      period: '2025',
      role: 'AI Developer — Project-Based',
      company: 'AI & ML Engineering Initiatives',
      location: 'Project Role',
      highlights: [
        'Developed an AI Career Counselor web application using Python, Flask, JavaScript, and Google Gemini API.',
        'Designed structured prompt engineering to generate personalized career recommendations based on user inputs.',
        'Built responsive web interfaces for collecting user information and displaying dynamic AI-generated guidance.',
      ],
      tags: ['Python', 'Flask', 'Google Gemini API', 'Prompt Engineering', 'JavaScript', 'REST APIs'],
    },
    {
      period: '2024 – 2025',
      role: 'Frontend Developer — Project Role',
      company: 'Web Engineering Initiatives',
      location: 'Project Role',
      highlights: [
        'Developed responsive web interfaces using HTML5, CSS3, and JavaScript.',
        'Built reusable frontend components and improved UI/UX usability.',
        'Optimized page responsiveness and frontend performance across desktop and mobile devices.',
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX', 'Responsive Design', 'Frontend Architecture'],
    },
  ];

  return (
    <section id="experience" className="section section--experience">
      <div className="container">
        <div className="section__header">
          <div className="eyebrow">EXPERIENCE</div>
          <h2>Hands-on engineering across computer vision, GenAI, and web platforms</h2>
        </div>

        <ul className="experience__list">
          {experiences.map((exp, idx) => (
            <li key={idx} className="experience__item">
              <div className="experience__meta">
                <span className="experience__period">{exp.period}</span>
                <span className="experience__location">{exp.location}</span>
              </div>
              <div className="experience__body">
                <h3>
                  {exp.role} <span>— {exp.company}</span>
                </h3>
                <ul>
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="experience__tags">
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx}>{tag}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-start' }}>
          <a
            href="./Ritesh_Chowdary_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost experience__resume"
          >
            View Full Resume (PDF) ↗
          </a>
        </div>

        <div className="experience__extras">
          <div className="experience__education">
            <h3>Academic Background</h3>
            <p style={{ fontWeight: 600, color: 'var(--text)' }}>
              R.M.D Engineering College
            </p>
            <p>B.Tech in Artificial Intelligence &amp; Machine Learning (2024–2028)</p>
            <span>CGPA: 7.22 / 10</span>

            <div style={{ marginTop: '1.25rem' }}>
              <p style={{ fontWeight: 600, color: 'var(--text)' }}>
                Narayana Junior College
              </p>
              <p>Intermediate (MPC) | 2022–2024</p>
              <span>Score: 86%</span>
            </div>
          </div>

          <div className="experience__resume-projects">
            <h3>Oracle Certifications</h3>
            <ul>
              <li>
                <a
                  href="./certificates/Oracle_Generative_AI_Professional.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Oracle Cloud GenAI Pro ↗
                </a>
                <p>2025 Certified Generative AI Professional</p>
              </li>
              <li>
                <a
                  href="./certificates/Oracle_APEX_Cloud_Developer_Professional.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Oracle APEX Cloud Dev ↗
                </a>
                <p>Certified Professional</p>
              </li>
              <li>
                <a
                  href="./certificates/Agentic_AI_Foundations_Associate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agentic AI Foundations ↗
                </a>
                <p>Oracle Certified Associate</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
