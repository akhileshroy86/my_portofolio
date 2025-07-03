'use client';

import React, { useRef, useEffect } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  velocityX: number;
  velocityY: number;
  opacity: number;
}

const NUM_STARS = 120;

export const SparkleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const cursorRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Set initial cursor position to center after window is available
    cursorRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Initialize stars
    starsRef.current = Array.from({ length: NUM_STARS }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.2 + 0.3,
      velocityX: (Math.random() - 0.5) * 0.05, // 🌙 Slower speed
      velocityY: (Math.random() - 0.5) * 0.05,
      opacity: Math.random() * 0.6 + 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        // Repel from cursor
        const dx = star.x - cursorRef.current.x;
        const dy = star.y - cursorRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repelStrength = Math.min(80 / distance, 1.2);

        if (distance < 100) {
          star.velocityX += dx / distance * repelStrength * 0.015;
          star.velocityY += dy / distance * repelStrength * 0.015;
        }

        // Move
        star.x += star.velocityX;
        star.y += star.velocityY;

        // Wrap
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // 🌟 Draw yellow glow
        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.size * 8
        );
        gradient.addColorStop(0, `rgba(255, 230, 120, ${star.opacity})`);
        gradient.addColorStop(1, `rgba(255, 230, 120, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const moveHandler = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', moveHandler);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', moveHandler);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};
