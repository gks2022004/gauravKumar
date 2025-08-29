export type Post = {
  slug: string;
  title: string;
  date: string; // ISO date
  excerpt: string;
  content: Array<{ type: "p" | "h2" | "ul" | "li"; text: string } | { type: "ul"; items: string[] }>;
};

// Temporary in-memory posts. Replace with your CMS or MDX later.
export const posts: Post[] = [
  {
    slug: "welcome-to-my-blog",
    title: "Welcome to my blog",
    date: "2025-08-29",
    excerpt: "Kicking off a space to share notes on blockchain, dev tooling, and learning.",
    content: [
      { type: "p", text: "This blog is where I plan to write about Web3, blockchain design, and practical engineering tips." },
      { type: "h2", text: "Topics I enjoy" },
      { type: "ul", items: [
        "Smart contracts and security",
        "Scalable backend patterns",
        "Developer experience and productivity",
      ] },
      { type: "p", text: "Stay tuned for more posts soon!" },
    ],
  },
  {
    slug: "notes-on-building-scalable-dapps",
    title: "Notes on building scalable dApps",
    date: "2025-08-28",
    excerpt: "A few mental models I use when thinking about scale in decentralized apps.",
    content: [
      { type: "p", text: "Scaling dApps is equal parts protocol decisions and pragmatic engineering tradeoffs." },
      { type: "h2", text: "Key ideas" },
      { type: "ul", items: [
        "Separate read vs. write paths early",
        "Cache aggressively at the edges",
        "Index on the data you actually query",
      ] },
    ],
  },
];

export function getPosts() {
  // latest first
  return posts.slice().sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs() {
  return posts.map((p) => p.slug);
}
