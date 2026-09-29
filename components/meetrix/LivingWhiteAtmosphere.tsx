"use client";

import React, { useEffect, useRef } from "react";

export default function LivingWhiteAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Subtle drifting connector particles in maroon and gold
    const particleCount = 35;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      alpha: number;
      color: string;
    }> = [];

    const colors = [
      "rgba(107, 15, 26,",  // Maroon
      "rgba(201, 168, 76,",  // Gold
      "rgba(133, 18, 34,",  // Vivid Wine
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedY: -(Math.random() * 0.25 + 0.05),
        speedX: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.4 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      t += 0.01;

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += Math.sin(t + i) * 0.2 + p.speedX;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* ── 1. LUXURY PEARL WHITE BASE ── */}
      <div className="absolute inset-0 bg-[#FAF8F5]" />

      {/* ── 2. SCULPTED MAROON & CHAMPAGNE NEBULAS (LGC VIBE) ── */}
      {/* Top-Left Imperial Maroon Hearth */}
      <div
        className="absolute -top-[12%] -left-[10%] w-[60vw] h-[60vw] max-w-[850px] max-h-[850px] rounded-full animate-ambient"
        style={{
          background:
            "radial-gradient(circle, rgba(107, 15, 26, 0.09) 0%, rgba(107, 15, 26, 0.03) 45%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Top-Right Champagne Gold Radiance */}
      <div
        className="absolute -top-[8%] -right-[8%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full animate-ambient"
        style={{
          background:
            "radial-gradient(circle, rgba(201, 168, 76, 0.12) 0%, rgba(201, 168, 76, 0.03) 50%, transparent 75%)",
          filter: "blur(65px)",
          animationDelay: "-5s",
        }}
      />

      {/* Mid Center Velvet Warmth */}
      <div
        className="absolute top-[40%] left-[20%] w-[65vw] h-[45vw] max-w-[900px] max-h-[600px] rounded-full animate-ambient"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(107, 15, 26, 0.06) 0%, rgba(201, 168, 76, 0.06) 40%, transparent 70%)",
          filter: "blur(80px)",
          animationDelay: "-8s",
        }}
      />

      {/* ── 3. FLOATING MAROON & GOLD DUST PARTICLES ── */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* ── 4. SUBTLE EDITORIAL GRID PATTERN ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(107, 15, 26, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(107, 15, 26, 0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 50%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 80%)",
        }}
      />
    </div>
  );
}
