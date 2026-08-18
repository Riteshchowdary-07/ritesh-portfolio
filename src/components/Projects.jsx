import React, { useState } from 'react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'trivia-x',
      title: 'Trivia-X — AI Traffic Violation Detection',
      badge: 'Computer Vision',
      tech: ['Python', 'OpenCV', 'YOLOv8', 'ALPR', 'Computer Vision'],
      description:
        'AI-powered computer vision system for analyzing traffic footage, detecting vehicles and traffic violations, and performing automatic license plate recognition.',
      details: [
        'Real-time object detection using YOLOv8 trained for vehicle & signal recognition',
        'Automatic License Plate Recognition (ALPR) pipeline using image filtering and OCR',
        'Detection modules for helmetless riding, mobile-phone usage, and signal jumping',
        'Analytics interface integration for traffic monitoring authorities',
      ],
      svgGraphic: (
        <svg width="100%" height="100%" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="250" fill="#0c1420" />
          <path d="M50 210L170 120H230L350 210" stroke="#1e2e45" strokeWidth="3" />
          <line x1="200" y1="120" x2="200" y2="210" stroke="#8ec5ff" strokeWidth="2" strokeDasharray="6 6" />
          {/* Bounding Boxes */}
          <rect x="80" y="150" width="70" height="45" rx="4" stroke="#5ddea8" strokeWidth="2" fill="rgba(93,222,168,0.1)" />
          <text x="85" y="143" fill="#5ddea8" fontSize="10" fontFamily="monospace">VEHICLE 98.4%</text>
          
          <rect x="230" y="135" width="85" height="55" rx="4" stroke="#ff6b6b" strokeWidth="2" fill="rgba(255,107,107,0.1)" />
          <text x="235" y="128" fill="#ff6b6b" fontSize="10" fontFamily="monospace">VIOLATION: ALPR</text>
          
          <rect x="245" y="172" width="55" height="12" rx="2" fill="#152031" stroke="#8ec5ff" strokeWidth="1" />
          <text x="250" y="181" fill="#8ec5ff" fontSize="8" fontFamily="monospace">TN 09 CB 4021</text>
        </svg>
      ),
    },
    {
      id: 'ai-career-counselor',
      title: 'AI Career Counselor',
      badge: 'Generative AI',
      tech: ['Python', 'Flask', 'Gemini API', 'JavaScript', 'Prompt Engineering'],
      description:
        'AI-powered career guidance application providing personalized career recommendations based on user inputs.',
      details: [
        'Integrated Google Gemini API with tailored prompt engineering for skill assessment',
        'Built interactive questionnaire interface collecting academic background & interests',
        'Generates comprehensive career roadmaps, recommended skill courses, and job roles',
        'Responsive web application with real-time streaming response UI',
      ],
      svgGraphic: (
        <svg width="100%" height="100%" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="250" fill="#0f1927" />
          <circle cx="200" cy="110" r="45" stroke="#8ec5ff" strokeWidth="2" fill="rgba(142,197,255,0.08)" />
          <path d="M200 80L206 98L224 104L206 110L200 128L194 110L176 104L194 98Z" fill="#8ec5ff" />
          {/* Nodes */}
          <line x1="200" y1="155" x2="110" y2="195" stroke="#1e2e45" strokeWidth="2" />
          <line x1="200" y1="155" x2="200" y2="200" stroke="#1e2e45" strokeWidth="2" />
          <line x1="200" y1="155" x2="290" y2="195" stroke="#1e2e45" strokeWidth="2" />

          <rect x="70" y="185" width="80" height="30" rx="6" fill="#152031" stroke="#8ec5ff" strokeWidth="1" />
          <text x="110" y="204" fill="#8ec5ff" fontSize="10" fontFamily="sans-serif" textAnchor="middle">AI Engineering</text>

          <rect x="160" y="190" width="80" height="30" rx="6" fill="#152031" stroke="#5ddea8" strokeWidth="1" />
          <text x="200" y="209" fill="#5ddea8" fontSize="10" fontFamily="sans-serif" textAnchor="middle">Data Science</text>

          <rect x="250" y="185" width="80" height="30" rx="6" fill="#152031" stroke="#8ec5ff" strokeWidth="1" />
          <text x="290" y="204" fill="#8ec5ff" fontSize="10" fontFamily="sans-serif" textAnchor="middle">Cloud Arch</text>
        </svg>
      ),
    },
    {
      id: 'hospital-bed-management',
      title: 'Hospital Bed & Emergency Management System',
      badge: 'Healthcare Tech',
      tech: ['Python', 'Flask', 'JavaScript', 'AI', 'GPS', 'HTML/CSS'],
      description:
        'Healthcare emergency management platform designed around hospital bed availability and coordination between citizens, doctors, ambulances, and government authorities.',
      details: [
        'Multi-portal architecture for citizens, medical staff, ambulance dispatchers, and health officials',
        'Real-time bed tracking across ICU, Oxygen, and General wards',
        'GPS-assisted ambulance routing and emergency surge prediction module',
        'Centralized dashboard for rapid emergency triage & bed booking',
      ],
      svgGraphic: (
        <svg width="100%" height="100%" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="250" fill="#0a121d" />
          {/* Medical Cross Graphic */}
          <rect x="180" y="55" width="40" height="110" rx="8" fill="#152031" stroke="#5aa0e8" strokeWidth="2" />
          <rect x="145" y="90" width="110" height="40" rx="8" fill="#152031" stroke="#5aa0e8" strokeWidth="2" />
          <path d="M190 70H210M200 60V80" stroke="#8ec5ff" strokeWidth="3" strokeLinecap="round" />
          
          {/* Bed Cards */}
          <rect x="60" y="175" width="120" height="45" rx="8" fill="#101722" stroke="#5ddea8" strokeWidth="1.5" />
          <text x="75" y="194" fill="#f2f5fa" fontSize="11" fontWeight="bold">ICU BEDS: 18</text>
          <text x="75" y="209" fill="#5ddea8" fontSize="9">AVAILABLE</text>

          <rect x="220" y="175" width="120" height="45" rx="8" fill="#101722" stroke="#8ec5ff" strokeWidth="1.5" />
          <text x="235" y="194" fill="#f2f5fa" fontSize="11" fontWeight="bold">OXYGEN: 42</text>
          <text x="235" y="209" fill="#8ec5ff" fontSize="9">DISPATCH READY</text>
        </svg>
      ),
    },
    {
      id: 'digital-guidance-platform',
      title: 'Digital Guidance Platform for Government College Enrollment',
      badge: 'Smart India Hackathon 2025',
      tech: ['Python', 'Recommendation Systems', 'Web Architecture', 'UI/UX'],
      description:
        'Digital guidance platform designed to help students discover suitable government colleges using academic eligibility, cutoff information, and career preferences.',
      details: [
        'Built for Smart India Hackathon 2025 to streamline government college admissions',
        'Recommendation engine matching entrance cutoffs, reservation criteria, and course preferences',
        'Interactive college comparison tool with seat matrix & historical cutoff trends',
        'Intuitive UI/UX crafted for high accessibility across mobile & rural users',
      ],
      svgGraphic: (
        <svg width="100%" height="100%" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="250" fill="#0d1624" />
          {/* SIH Badge */}
          <rect x="30" y="25" width="170" height="26" rx="13" fill="rgba(142,197,255,0.12)" stroke="#8ec5ff" strokeWidth="1" />
          <text x="115" y="42" fill="#8ec5ff" fontSize="10" fontWeight="bold" textAnchor="middle">SMART INDIA HACKATHON 2025</text>
          
          {/* College Pillar Graphic */}
          <path d="M120 180V100L200 70L280 100V180" stroke="#3d4d63" strokeWidth="2" fill="none" />
          <rect x="140" y="120" width="20" height="60" fill="#152031" stroke="#8ec5ff" strokeWidth="1" />
          <rect x="190" y="120" width="20" height="60" fill="#152031" stroke="#8ec5ff" strokeWidth="1" />
          <rect x="240" y="120" width="20" height="60" fill="#152031" stroke="#8ec5ff" strokeWidth="1" />
          <line x1="100" y1="180" x2="300" y2="180" stroke="#8ec5ff" strokeWidth="3" />

          <rect x="100" y="195" width="200" height="30" rx="6" fill="#101722" stroke="#5ddea8" strokeWidth="1" />
          <text x="200" y="214" fill="#5ddea8" fontSize="10" fontWeight="bold" textAnchor="middle">COLLEGE MATCH: 96% ELIGIBLE</text>
        </svg>
      ),
    },
  ];

  return (
    <section id="projects" className="section section--projects">
      <div className="container">
        <div className="section__header">
          <div className="eyebrow">FEATURED PROJECTS</div>
          <h2>AI models, computer vision systems, and intelligent applications</h2>
          <p className="section__lead">
            Explore software platforms built with computer vision pipelines, Generative AI APIs, healthcare coordination tools, and recommendation engines.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="project-card__media">
                {project.svgGraphic}
                <div className="project-card__shade" />
                <span className="project-card__badge">{project.badge}</span>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <ul className="project-card__tech">
                  {project.tech.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>
                <div className="project-card__actions">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn--ghost"
                    style={{ width: '100%' }}
                  >
                    View Details &amp; Highlights
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(7, 11, 18, 0.85)',
            backdropFilter: 'blur(12px)',
            display: 'grid',
            placeItems: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              borderRadius: '24px',
              maxWidth: '620px',
              width: '100%',
              padding: '2rem',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
              <div>
                <span className="eyebrow">{selectedProject.badge}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', margin: '0.2rem 0 0.8rem' }}>
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="theme-toggle"
                style={{ flexShrink: 0 }}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', margin: '0 0 1.25rem' }}>
              {selectedProject.description}
            </p>

            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', margin: '0 0 0.6rem', color: 'var(--accent)' }}>
              Key Technical Highlights
            </h4>
            <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.2rem', lineHeight: '1.7', margin: '0 0 1.5rem' }}>
              {selectedProject.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {selectedProject.tech.map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    border: '1px solid var(--border)',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    padding: '0.3rem 0.75rem',
                    color: 'var(--text)',
                    background: 'var(--surface-muted)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <button onClick={() => setSelectedProject(null)} className="btn btn--primary" style={{ width: '100%' }}>
              Close Preview
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
