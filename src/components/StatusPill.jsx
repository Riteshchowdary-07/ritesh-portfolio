import React from 'react';

export default function StatusPill() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href="#contact" onClick={scrollToContact} className="status-pill magnetic">
      <span className="status-pill__dot"></span>
      <span>Available for work — contact</span>
    </a>
  );
}
