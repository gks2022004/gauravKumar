"use client";

import React, { useEffect, useRef } from "react";

export default function ThemedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none">
      {/* Solid background color driven by CSS variables */}
      <div className="absolute inset-0 bg-background" />

      {/* Aurora glow layers: only in light mode to avoid washing out dark */}
      <div className="absolute inset-0 dark:hidden">
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
  <div className="absolute inset-0 dark:hidden">
        <div className="bokeh-anim absolute left-[12%] top-[22%] h-24 w-24 rounded-full bg-white/35 blur-[18px] animate-[bokeh-float_8s_ease-in-out_infinite]" />
        <div className="bokeh-anim absolute right-[18%] top-[28%] h-16 w-16 rounded-full bg-white/30 blur-[16px] animate-[bokeh-float_10s_ease-in-out_infinite]" />
        <div className="bokeh-anim absolute left-[30%] bottom-[18%] h-20 w-20 rounded-full bg-white/28 blur-[16px] animate-[bokeh-float_9s_ease-in-out_infinite]" />
      </div>
      {/* Constellation layer */}
      
      {/* Soft vignettes: lighter in light mode, stronger in dark */}
  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/10 to-transparent dark:from-black/50" />
    </div>
  );
}
