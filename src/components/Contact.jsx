import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [timeStr, setTimeStr] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');

  // Web3Forms Access Key: Replace with your key from https://web3forms.com (Free, sent to riteshmedasani2007@gmail.com)
  const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'; 

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTimeStr(now.toLocaleTimeString('en-US', options) + ' IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    const emailBody = `Portfolio Message from Website:\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const subject = `New Portfolio Inquiry from ${formData.name}`;

    // Construct direct mailto URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(emailBody);
    const directMailUrl = `mailto:riteshmedasani2007@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
    setMailtoUrl(directMailUrl);

    // Synchronously attempt window.location for native mail client
    try {
      if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: subject,
            from_name: formData.name,
            replyto: formData.email,
            to_email: 'riteshmedasani2007@gmail.com',
            message: emailBody,
          }),
        });
      } else {
        // Formspree fallback / direct mailto trigger
        window.location.href = directMailUrl;
      }
    } catch (err) {
      console.error('Submission API error:', err);
      window.location.href = directMailUrl;
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <div className="section__header">
          <div className="eyebrow">GET IN TOUCH</div>
          <h2>Let's build something remarkable together</h2>
          <p className="section__lead">
            Whether you have a computer vision project, AI initiative, internship opportunity, or technical inquiry, feel free to reach out.
          </p>
        </div>

        <div className="contact__grid">
          <form className="contact__form" onSubmit={handleSubmit}>
            {submitted ? (
              <div
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '2rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📧</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--accent)', margin: '0 0 0.5rem' }}>
                  Thank you {formData.name}!
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', margin: '0 0 1.5rem' }}>
                  Your message has been dispatched to <strong>riteshmedasani2007@gmail.com</strong>.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
                  <a
                    href={mailtoUrl}
                    className="btn btn--primary"
                    style={{ width: '100%', textDecoration: 'none' }}
                  >
                    Open in Your Email Client ↗
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="btn btn--ghost"
                    style={{ width: '100%' }}
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <>
                <label>
                  <span>Your Name</span>
                  <input
                    type="text"
                    placeholder="e.g. Alex Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </label>

                <label>
                  <span>Your Email Address</span>
                  <input
                    type="email"
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </label>

                <label>
                  <span>Project Message / Details</span>
                  <textarea
                    rows="5"
                    placeholder="Describe your project, ideas, or opportunities..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </label>

                <button type="submit" className="btn btn--primary btn--xl" style={{ marginTop: '0.5rem' }} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending Email...' : 'Send Message to Ritesh 🚀'}
                </button>
              </>
            )}
          </form>

          <aside className="contact__aside">
            <div>
              <h3>Direct Email</h3>
              <a href="mailto:riteshmedasani2007@gmail.com">riteshmedasani2007@gmail.com</a>
            </div>

            <div>
              <h3>Phone Number</h3>
              <a href="tel:+919866594904">+91 9866594904</a>
            </div>

            <div>
              <h3>Location</h3>
              <p style={{ color: 'var(--text-muted)' }}>Chennai, Tamil Nadu, India</p>
            </div>

            <div>
              <h3>Local Time</h3>
              <p className="contact__clock">{timeStr || '09:30:00 AM IST'}</p>
            </div>

            <div>
              <h3>Social Profiles</h3>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <a
                  href="https://github.com/Riteshchowdary-07"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'var(--surface-muted)',
                    border: '1px solid var(--border)',
                    borderRadius: '50%',
                    width: '42px',
                    height: '42px',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'var(--text)',
                  }}
                  title="GitHub"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/ritesh-chowdary-7b1169333/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'var(--surface-muted)',
                    border: '1px solid var(--border)',
                    borderRadius: '50%',
                    width: '42px',
                    height: '42px',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'var(--text)',
                  }}
                  title="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.239-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
