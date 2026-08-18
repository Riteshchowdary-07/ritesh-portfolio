import React, { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrame = useRef(null);

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices (desktops)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    document.documentElement.classList.add('has-custom-cursor');

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isActive) setIsActive(true);

      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest(
          'a, button, input, textarea, .project-card, .btn, .magnetic, .status-pill, .theme-toggle, .skill-list li, .experience__item'
        )
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    const render = () => {
      // Smooth linear interpolation (lerp) for cursor ring
      const lerp = (start, end, factor) => start + (end - start) * factor;
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.18);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.18);

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      animFrame.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    animFrame.current = requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${isActive ? 'is-active' : ''}`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${isActive ? 'is-active' : ''} ${isHovered ? 'is-hover' : ''}`}
        style={{
          transform: isClicked
            ? 'translate(-50%, -50%) scale(0.75)'
            : isHovered
            ? 'translate(-50%, -50%) scale(1.2)'
            : 'translate(-50%, -50%) scale(1)',
        }}
        aria-hidden="true"
      />
    </>
  );
}
