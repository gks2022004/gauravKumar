"use client";
import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
  <header className="sticky top-0 z-50 supports-[backdrop-filter]:backdrop-blur-lg backdrop-saturate-150
    border rounded-2xl mb-12 py-5 px-6 text-foreground
    bg-gray-500/10 border-black/10 shadow-md shadow-black/5
    dark:bg-black/25 dark:border-white/10">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <button className="sm:hidden" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z"/></svg>
        </button>
        <nav className="hidden sm:flex items-center gap-6 text-foreground/80">
          <Link href="/#about" className="nav-link hover:text-foreground">Home</Link>
          <Link href="/#experience" className="nav-link hover:text-foreground">Experience</Link>
          <Link href="/#projects" className="nav-link hover:text-foreground">Projects</Link>
          <Link href="/blog" className="nav-link hover:text-foreground">Blogs</Link>
          <a href="https://drive.google.com/file/d/1Oz9JSSryflSq-QVwIASETTawW85bLgrx/view?usp=drivesdk/" target="_blank" rel="noreferrer" className="hover:text-foreground">Resume</a>
        </nav>
        <div className="flex items-center gap-4 text-foreground/80">
          <a href="https://github.com/gks2022004" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground"><Github className="w-5 h-5"/></a>
          <a href="https://www.linkedin.com/in/imgauravkumar7/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="w-5 h-5"/></a>
          <a href="mailto:imgauravkumar7@gmail.com" aria-label="Email" className="hover:text-foreground"><Mail className="w-5 h-5"/></a>
          <a href="https://x.com/i_amgauravkumar" target="_blank" rel="noreferrer" aria-label="X" className="hover:text-white dark:hover:text-foreground">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
              <path d="M13.83 10.29 20.5 3h-1.64l-5.77 6.35L8.3 3H3.02l6.98 10.02L3.02 21h1.64l6.21-6.83L15.7 21h5.28l-7.15-10.71Zm-2.2 2.42-.72-.99L5 4.17h2.7l4.61 6.34.72.99 6.16 8.49h-2.7l-4.86-6.28Z"/>
            </svg>
          </a>
          <ThemeToggle />
        </div>
      </div>
      {open && (
  <div className="sm:hidden mt-3 border rounded-xl p-4 supports-[backdrop-filter]:backdrop-blur-md bg-white/20 dark:bg-black/25 border-white/20 dark:border-white/10 text-white dark:text-foreground">
          <div className="grid gap-2">
            <Link href="/#about" className="nav-link">Home</Link>
            <Link href="/#experience" className="nav-link">Experience</Link>
            <Link href="/#projects" className="nav-link">Projects</Link>
            <Link href="/blog" className="nav-link">Blogs</Link>
            <a href="https://drive.google.com/file/d/1Oz9JSSryflSq-QVwIASETTawW85bLgrx/view?usp=drivesdk/" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div>
      )}
    </header>
  );
}
