export type Post = {
  slug: string;
  title: string;
  date: string; // ISO date
  excerpt: string;
  content: Array<{ type: "p" | "h2" | "ul" | "li"; text: string } | { type: "ul"; items: string[] }>;
};

// Temporary in-memory posts. Replace with your CMS or MDX later.
// No posts yet (placeholder). Add posts here later.
export const posts: Post[] = [];

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
