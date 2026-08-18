import React from 'react';

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__atmosphere" />
      <div className="hero__grid" />
      <div className="hero__orb hero__orb--one" />
      <div className="hero__orb hero__orb--two" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="eyebrow hero__greeting">
            <span>KALAPANENI RITESH CHOWDARY</span>
            <span className="hero__greeting-sep">•</span>
            <span className="hero__role">CHENNAI, INDIA</span>
          </div>

          <h1 className="hero__brand">
            <span className="hero__brand-line">RITESH</span>
            <span className="hero__brand-line hero__brand-line--accent">CHOWDARY</span>
          </h1>

          <p className="hero__headline">
            AI & ML Engineering Student | Computer Vision & GenAI Developer
          </p>

          <p className="hero__support">
            Building practical AI systems across Computer Vision, Generative AI, and intelligent software applications.
          </p>

          <div className="hero__cta">
            <div className="magnetic">
              <a href="#projects" onClick={scrollTo('projects')} className="btn btn--primary">
                View projects
              </a>
            </div>
            <div className="magnetic">
              <a
                href="/Ritesh_Chowdary_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                View Resume ↗
              </a>
            </div>
            <div className="magnetic">
              <a href="#contact" onClick={scrollTo('contact')} className="btn btn--ghost">
                Contact me
              </a>
            </div>
          </div>

          <div className="hero__social">
            <a
              href="https://github.com/Riteshchowdary-07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub Profile"
              className="social-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ritesh-chowdary-7b1169333/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
              className="social-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.239-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="mailto:riteshmedasani2007@gmail.com"
              aria-label="Email"
              title="Send Email"
              className="social-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__panel">
            <div className="hero__panel-glow" />
            <span className="hero__panel-label">FOCUS &amp; SPECIALIZATION</span>
            <strong>AI &amp; ML Developer</strong>
            <p>
              B.Tech Artificial Intelligence & Machine Learning student building computer vision pipelines, Generative AI applications, and intelligent software architectures.
            </p>
            <ul>
              <li>OpenCV &amp; YOLOv8 Real-Time Processing</li>
              <li>Generative AI &amp; Gemini API Integration</li>
              <li>Agentic Systems &amp; Prompt Engineering</li>
              <li>Full-Stack Web Apps (Flask, JavaScript)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
