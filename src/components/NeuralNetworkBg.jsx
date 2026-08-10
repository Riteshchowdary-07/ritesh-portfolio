import React, { useEffect, useRef } from 'react';

export const NeuralNetworkBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = { x: null, y: null, radius: 180 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Generate fluid particles for white background
    const nodeCount = Math.floor((width * height) / 14000);
    const nodes = [];

    for (let i = 0; i < Math.max(45, nodeCount); i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2.5 + 1.5,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        color: Math.random() > 0.5 ? '#0284c7' : '#7c3aed'
      });
    }

    const render = () => {
      // Clear with pure transparent white
      ctx.clearRect(0, 0, width, height);

      const maxDistance = 150;

      // Draw connections & animate nodes
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // Position auto-animation
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        // Bounce boundaries
        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        nodeA.pulse += nodeA.pulseSpeed;

        // Draw connections between nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.3;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Mouse interactive cursor follow effect
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = mouse.x - nodeA.x;
          const mdy = mouse.y - nodeA.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mouse.radius) {
            const mAlpha = (1 - mdist / mouse.radius) * 0.7;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${mAlpha})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Slightly attract node towards cursor
            nodeA.x += mdx * 0.01;
            nodeA.y += mdy * 0.01;
          }
        }

        // Draw pulsing particle node
        const pulsingRadius = nodeA.radius + Math.sin(nodeA.pulse) * 0.8;
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, Math.max(1, pulsingRadius), 0, Math.PI * 2);
        ctx.fillStyle = nodeA.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(14, 165, 233, 0.4)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70 bg-white"
    />
  );
};
