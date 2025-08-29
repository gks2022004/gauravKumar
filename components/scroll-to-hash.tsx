"use client";

import { useEffect } from "react";

function doScrollToHash() {
  try {
    const { hash } = window.location;
    if (!hash) return;
    const id = decodeURIComponent(hash.replace(/^#/, ""));
    const el = document.getElementById(id);
    if (!el) return;
    // Delay a tick to ensure layout is painted
    requestAnimationFrame(() => {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 10);
    });
  } catch {}
}

export function ScrollToHash() {
  useEffect(() => {
    doScrollToHash();
    const onHash = () => doScrollToHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return null;
}
