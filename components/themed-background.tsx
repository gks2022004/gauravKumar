"use client";

import React, { useEffect, useRef } from "react";

export default function ThemedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none">
      {/* Solid background color driven by CSS variables */}
      <div className="absolute inset-0 bg-background" />

      {/* Abstract painted background - inspired by fluid art */}
      <div className="absolute inset-0">
        {/* Main flowing shapes */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 rounded-full blur-3xl transform rotate-12 animate-[float_20s_ease-in-out_infinite]" />
          <div className="absolute top-1/4 -right-32 w-80 h-80 bg-gradient-to-bl from-cyan-300 via-sky-400 to-blue-500 rounded-full blur-2xl transform -rotate-45 animate-[float_25s_ease-in-out_infinite_reverse]" />
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-tr from-teal-400 via-cyan-500 to-sky-400 rounded-full blur-3xl transform rotate-45 animate-[float_30s_ease-in-out_infinite]" />
        </div>
        
        {/* Organic flowing shapes */}
        <div className="absolute inset-0 opacity-15 dark:opacity-8">
          <div className="absolute top-10 left-1/3 w-64 h-48 bg-gradient-to-r from-blue-400/60 to-cyan-300/60 transform skew-x-12 rotate-12 blur-2xl animate-[wave_35s_ease-in-out_infinite]" />
          <div className="absolute bottom-20 right-1/4 w-56 h-40 bg-gradient-to-l from-sky-500/50 to-blue-400/50 transform -skew-y-6 -rotate-6 blur-xl animate-[wave_40s_ease-in-out_infinite_reverse]" />
          <div className="absolute top-1/2 left-10 w-48 h-64 bg-gradient-to-b from-cyan-400/40 to-teal-300/40 transform skew-y-12 rotate-6 blur-2xl animate-[wave_28s_ease-in-out_infinite]" />
        </div>

        {/* Paint stroke effects */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-32 left-1/2 w-80 h-4 bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -rotate-12 blur-sm animate-[stroke_45s_ease-in-out_infinite]" />
          <div className="absolute bottom-40 left-1/4 w-60 h-3 bg-gradient-to-r from-transparent via-cyan-500 to-transparent transform rotate-45 blur-sm animate-[stroke_38s_ease-in-out_infinite_reverse]" />
          <div className="absolute top-2/3 right-1/3 w-72 h-2 bg-gradient-to-r from-transparent via-sky-300 to-transparent transform -rotate-30 blur-sm animate-[stroke_50s_ease-in-out_infinite]" />
        </div>
      </div>

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
