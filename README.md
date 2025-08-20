# Portfolio (Next.js + TypeScript + Tailwind)

## Run locally

```powershell
# from repo root
npm install
npm run dev
# open http://localhost:3000
```

## Build & start

```powershell
npm run build
npm run start
```

## Notes
- Theme toggle persists in localStorage and respects system preference.
- Sections reveal on scroll and nav highlights the active section; prefers-reduced-motion disables animations.
- Update `metadataBase` and URLs in `app/layout.tsx` to your real domain.
- Replace `app/sitemap.xml` <loc> with your domain, and drop a real `public/favicon.ico`.
