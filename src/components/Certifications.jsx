import React from 'react';

export default function Certifications() {
  const certs = [
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      issuer: 'Oracle University',
      badge: 'Certified Professional',
      year: '2025',
      code: 'OCI 2025 GenAI',
      file: '/certificates/Oracle_Generative_AI_Professional.pdf',
    },
    {
      title: 'Oracle APEX Cloud Developer Certified Professional',
      issuer: 'Oracle University',
      badge: 'Certified Professional',
      year: '2025',
      code: 'APEX Cloud Dev',
      file: '/certificates/Oracle_APEX_Cloud_Developer_Professional.pdf',
    },
    {
      title: 'Agentic AI Certified Foundations Associate',
      issuer: 'Oracle University',
      badge: 'Certified Associate',
      year: '2026',
      code: 'Agentic AI Associate',
      file: '/certificates/Agentic_AI_Foundations_Associate.pdf',
    },
    {
      title: 'Oracle AI Database SQL Certified Associate',
      issuer: 'Oracle University',
      badge: 'Certified Associate',
      year: '2026',
      code: 'AI DB SQL Associate',
      file: '/certificates/Oracle_AI_Database_SQL_Associate.pdf',
    },
  ];

  return (
    <section id="certifications" className="section section--certifications">
      <div className="container">
        <div className="section__header">
          <div className="eyebrow">CERTIFICATIONS</div>
          <h2>Oracle University Industry Certifications</h2>
          <p className="section__lead">
            Formal professional certifications validating expertise in Generative AI, Agentic AI Architectures, Oracle APEX Cloud Development, and Database SQL. Click any certificate to view the official document.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {certs.map((cert, idx) => (
            <a
              key={idx}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group"
              style={{
                padding: '1.6rem',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <span
                    style={{
                      background: 'var(--pill-bg)',
                      border: '1px solid color-mix(in srgb, var(--accent) 40%, transparent)',
                      borderRadius: '999px',
                      color: 'var(--accent)',
                      fontSize: '0.72rem',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      padding: '0.3rem 0.65rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    {cert.badge}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{cert.year}</span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    lineHeight: '1.35',
                    margin: '0 0 0.8rem',
                    color: 'var(--text)',
                  }}
                >
                  {cert.title}
                </h3>
              </div>

              <div>
                <div
                  style={{
                    borderTop: '1px solid var(--border)',
                    paddingTop: '0.85rem',
                    marginTop: '1rem',
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '500' }}>
                    {cert.issuer}
                  </span>
                  <span style={{ color: 'var(--accent)', fontSize: '0.78rem', fontFamily: 'monospace' }}>
                    View PDF ↗
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
