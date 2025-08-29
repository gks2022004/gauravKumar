import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import ThemedBackground from "@/components/themed-background";
import { ScrollToHash } from "@/components/scroll-to-hash";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaurav Kumar Singh - Blockchain Developer",
  description:
    "Portfolio of Gaurav Kumar Singh, a Blockchain Developer building secure and scalable Web3 applications.",
  metadataBase: new URL("https://example.com"),
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Gaurav Kumar Singh - Blockchain Developer",
    description:
      "Secure, scalable, and innovative decentralized applications in Web3.",
    type: "website",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en" suppressHydrationWarning>
  <body className={cn(inter.className, "min-h-dvh antialiased bg-background text-foreground")}> 
        <script
          dangerouslySetInnerHTML={{
      __html: `(() => { try { const t = localStorage.getItem('theme'); if (t === 'dark') document.documentElement.classList.add('dark'); else document.documentElement.classList.remove('dark'); } catch {} })();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gaurav Kumar Singh",
              jobTitle: "Blockchain Developer",
              url: "https://example.com",
              sameAs: [
                "https://github.com/gks2022004",
                "https://www.linkedin.com/in/imgauravkumar7/",
                "https://x.com/i_amgauravkumar"
              ]
            }),
          }}
        />
  <ThemedBackground />
        <Suspense fallback={null}>
          <ScrollToHash />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
