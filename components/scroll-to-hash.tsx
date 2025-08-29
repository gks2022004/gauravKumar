"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

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
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // On initial mount
  useEffect(() => {
    doScrollToHash();
  }, []);

  // On route/hash/search changes
  useEffect(() => {
    doScrollToHash();
  }, [pathname, searchParams]);

  return null;
}
