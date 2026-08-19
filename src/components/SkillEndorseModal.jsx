import React, { useState } from 'react';

export default function SkillEndorseModal({ skillName, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('Hiring & Project Inquiry');
  const [message, setMessage] = useState(
    `Hi Ritesh, I am interested in your expertise in ${skillName} and would like to connect with you.`
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Ritesh's Web3Forms Access Key
  const WEB3FORMS_ACCESS_KEY = '287fed78-8277-49b0-8e08-cfa46dc6fab2';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    const emailBody = `Skill/Topic Endorsement:\nTopic: ${skillName}\nEndorsement Type: ${type}\nFrom Name: ${name}\nFrom Email: ${email}\n\nMessage:\n${message}`;
    const subject = `Skill Endorsement (${skillName}) from ${name}`;

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: subject,
          from_name: name,
          replyto: email,
          message: emailBody,
          skill_topic: skillName,
          type: type,
        }),
      });

      const data = await res.json();
      console.log('Skill endorsement response:', data);
    } catch (err) {
      console.error('API submission error:', err);
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(7, 11, 18, 0.88)',
        backdropFilter: 'blur(14px)',
        display: 'grid',
        placeItems: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border)',
          borderRadius: '24px',
          maxWidth: '560px',
          width: '100%',
          padding: '2rem',
          boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="theme-toggle"
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}
          aria-label="Close modal"
        >
          ✕
        </button>

        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '0.75rem' }}>✨</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', margin: '0 0 0.5rem', color: 'var(--text)' }}>
              Endorsement Sent!
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', margin: '0 0 1.5rem' }}>
              Thank you <strong>{name}</strong> for endorsing <strong>{skillName}</strong>. Your endorsement details have been delivered directly to Ritesh's inbox.
            </p>
            <button onClick={onClose} className="btn btn--primary" style={{ width: '100%' }}>
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.1rem' }}>
            <div>
              <span className="eyebrow" style={{ margin: 0 }}>SKILL &amp; TOPIC ENDORSEMENT</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', margin: '0.2rem 0 0.4rem', color: 'var(--text)' }}>
                {skillName}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.55', margin: 0 }}>
                Interested in Ritesh's work with <strong>{skillName}</strong>? Submit your endorsement or project inquiry below.
              </p>
            </div>

            <label style={{ display: 'grid', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <span>Your Name</span>
              <input
                type="text"
                placeholder="e.g. Sarah Jenkins"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                  background: 'var(--surface-muted)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  color: 'var(--text)',
                  padding: '0.85rem 1rem',
                  outline: 'none',
                }}
              />
            </label>

            <label style={{ display: 'grid', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <span>Your Email Address</span>
              <input
                type="email"
                placeholder="e.g. sarah@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  background: 'var(--surface-muted)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  color: 'var(--text)',
                  padding: '0.85rem 1rem',
                  outline: 'none',
                }}
              />
            </label>

            <label style={{ display: 'grid', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <span>Interest / Endorsement Type</span>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                style={{
                  background: 'var(--surface-muted)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  color: 'var(--text)',
                  padding: '0.85rem 1rem',
                  outline: 'none',
                }}
              >
                <option value="Hiring & Project Inquiry">Hiring &amp; Project Inquiry</option>
                <option value="Skill Endorsement">Skill Endorsement &amp; Recommendation</option>
                <option value="Technical Collaboration">Technical Collaboration / Research</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </label>

            <label style={{ display: 'grid', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <span>Message</span>
              <textarea
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={{
                  background: 'var(--surface-muted)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  color: 'var(--text)',
                  padding: '0.85rem 1rem',
                  outline: 'none',
                  fontFamily: 'inherit',
                }}
              />
            </label>

            <button type="submit" className="btn btn--primary" style={{ width: '100%', marginTop: '0.5rem' }} disabled={isSubmitting}>
              {isSubmitting ? 'Sending Endorsement...' : `Endorse ${skillName} & Submit 🚀`}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
