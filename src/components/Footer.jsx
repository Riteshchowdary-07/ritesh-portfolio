import React from 'react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const elem = document.getElementById('contact');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="big-cta">
        <div className="container big-cta__inner">
          <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
          <a href="#contact" onClick={scrollToContact} className="big-cta__title">
            LET'S WORK TOGETHER
          </a>
          <p className="big-cta__lead">
            Available for computer vision internships, Generative AI projects, and intelligent software engineering roles.
          </p>
          <div className="magnetic">
            <a href="#contact" onClick={scrollToContact} className="btn btn--primary btn--xl">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div className="site-footer__brand">
            <svg className="site-logo" width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2.5" y="2.5" width="59" height="59" rx="16" stroke="currentColor" strokeWidth="2" opacity="0.88" />
              <path d="M22 48V16h12c4.5 0 8 3 8 7.5 0 3.5-2 6.5-5.5 7.2L43 48h-6.5l-5.8-15H28.5V48H22zm6.5-21h5.2c2.2 0 3.8-1.2 3.8-3s-1.6-3-3.8-3H28.5v6z" fill="currentColor" />
              <circle cx="32" cy="10" r="2.5" fill="var(--accent)" />
            </svg>
            <span>© 2025–2026 KALAPANENI RITESH CHOWDARY</span>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a
              href="https://github.com/Riteshchowdary-07"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)' }}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ritesh-chowdary-7b1169333/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)' }}
            >
              LinkedIn
            </a>
            <a href="#home" onClick={scrollToTop} style={{ color: 'var(--accent)', cursor: 'pointer' }}>
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
