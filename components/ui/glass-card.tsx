"use client";

import { cn } from "@/lib/utils";
import React, { useEffect } from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-black/10 bg-gray-500/10 p-6 backdrop-blur-lg",
        "dark:border-white/10 dark:bg-black/20",
        "shadow-md shadow-black/5 dark:shadow-black/20",
        "transition-all duration-500 ease-in-out",
        "hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40",
        "hover:border-black/20 dark:hover:border-white/20",
        "hover:scale-[1.02]",
        className
      )}
      {...props}
    >
      <div className="absolute -inset-px -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div 
          className="absolute inset-0 animate-[holographic-shift_12s_ease-in-out_infinite]"
          style={{
            background: `
              radial-gradient(400px circle at var(--mouse-x)px var(--mouse-y)px, hsla(var(--primary-hsl), 0.2), transparent 40%),
              radial-gradient(600px circle at var(--mouse-x)px var(--mouse-y)px, hsla(var(--primary-hsl), 0.1), transparent 50%)
            `
          }}
        />
      </div>
      {children}
    </div>
  );
}

export function MousePositionEffect() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
}
