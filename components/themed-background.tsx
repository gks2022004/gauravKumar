"use client";

import React, { useEffect, useRef } from "react";

function ConstellationCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    let raf = 0;
    let particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isDark = () => document.documentElement.classList.contains("dark");

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // particle count scales with area, capped for perf
      const count = prefersReduced ? 40 : Math.min(140, Math.floor((width * height) / 12000));
      particles = new Array(count).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 1.6 + 0.4,
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);
  // draw lines first (theme-aware color, distant-fade)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 110) {
    const alpha = Math.max(0, 0.16 * (1 - dist / 110));
    const color = isDark() ? `255,255,255` : `15,23,42`; // white in dark, slate-900 in light
    ctx.strokeStyle = `rgba(${color},${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      // draw points
      for (const p of particles) {
    ctx.fillStyle = isDark() ? "rgba(255,255,255,0.7)" : "rgba(15,23,42,0.45)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!prefersReduced) {
        // update
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -5) p.x = width + 5;
          if (p.x > width + 5) p.x = -5;
          if (p.y < -5) p.y = height + 5;
          if (p.y > height + 5) p.y = -5;
        }
        raf = requestAnimationFrame(step);
      }
    }

    const ro = new ResizeObserver(() => {
      resize();
      step();
    });
    ro.observe(canvas);
    resize();
    step();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" />;
}

export default function ThemedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none">
      {/* Aurora glow layers: stronger in dark, brighter yet subtle in light */}
      <div className="absolute inset-0">
        <div className="aurora-anim absolute -top-1/3 -left-1/3 h-[70vmax] w-[70vmax] rounded-full blur-2xl opacity-[0.08] dark:opacity-[0.18] mix-blend-screen bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.6),transparent_55%)] animate-[aurora_55s_linear_infinite_alternate]" />
        <div className="aurora-anim absolute -bottom-1/3 -right-1/4 h-[65vmax] w-[65vmax] rounded-full blur-2xl opacity-[0.07] dark:opacity-[0.16] mix-blend-screen bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.6),transparent_55%)] animate-[aurora_65s_linear_infinite_alternate]" />
        <div className="aurora-anim absolute top-1/4 left-1/2 h-[55vmax] w-[55vmax] -translate-x-1/2 rounded-full blur-2xl opacity-[0.06] dark:opacity-[0.12] mix-blend-screen bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.6),transparent_55%)] animate-[aurora_75s_linear_infinite_alternate]" />
      </div>

      {/* Light mode: soft rotating beams for an elegant effect */}
      <div className="absolute inset-0 dark:hidden">
        <div className="beams-anim absolute left-1/2 top-1/2 h-[140vmax] w-[140vmax] -translate-x-1/2 -translate-y-1/2 animate-[rotate-slow_120s_linear_infinite] opacity-[0.10]">
          <div className="absolute inset-0 rounded-full" style={{ background: "conic-gradient(from 0deg at 50% 50%, rgba(59,130,246,0.12), rgba(168,85,247,0.10), rgba(56,189,248,0.12), rgba(59,130,246,0.12))" }} />
          <div className="absolute inset-0 rounded-full blur-3xl" style={{ background: "conic-gradient(from 90deg at 50% 50%, rgba(59,130,246,0.10), rgba(16,185,129,0.10), rgba(56,189,248,0.10), rgba(59,130,246,0.10))" }} />
        </div>
      </div>

      {/* Light-mode bokeh floaters for extra depth */}
      <div className="absolute inset-0 hidden dark:block" />
      <div className="absolute inset-0 dark:hidden">
        <div className="bokeh-anim absolute left-[12%] top-[22%] h-24 w-24 rounded-full bg-white/35 blur-[18px] animate-[bokeh-float_8s_ease-in-out_infinite]" />
        <div className="bokeh-anim absolute right-[18%] top-[28%] h-16 w-16 rounded-full bg-white/30 blur-[16px] animate-[bokeh-float_10s_ease-in-out_infinite]" />
        <div className="bokeh-anim absolute left-[30%] bottom-[18%] h-20 w-20 rounded-full bg-white/28 blur-[16px] animate-[bokeh-float_9s_ease-in-out_infinite]" />
      </div>
      {/* Constellation layer */}
      <ConstellationCanvas />
  {/* Soft vignettes: lighter in light mode, stronger in dark */}
  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/10 to-transparent dark:from-black/30" />
    </div>
  );
}
