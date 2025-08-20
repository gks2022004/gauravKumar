"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function PageEffects() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    // Reveal elements on scroll
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) e.target.classList.add('reveal-visible');
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    els.forEach(el => {
      el.classList.add('reveal');
      io.observe(el);
    });

    // Active nav link highlight
    const sectionIds = ["about","experience","projects","interests","tools"];
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter((s): s is HTMLElement => !!s);
    const linkMap = new Map<string, HTMLAnchorElement>();
    document.querySelectorAll<HTMLAnchorElement>('a.nav-link[href^="#"]').forEach(a => {
      const id = a.getAttribute('href')!.slice(1);
      linkMap.set(id, a);
    });
    const navIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (!id) return;
        const link = linkMap.get(id);
        if (!link) return;
        if (entry.isIntersecting) {
          document.querySelectorAll('a.nav-link').forEach(a => a.classList.remove('text-foreground','font-semibold'));
          link.classList.add('text-foreground','font-semibold');
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0.05 });
    sections.forEach(s => navIO.observe(s));

    // Back to top visibility
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      io.disconnect();
      navIO.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-[60] inline-flex items-center justify-center w-10 h-10 rounded-full border bg-background/90 backdrop-blur shadow ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'} transition`}
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
