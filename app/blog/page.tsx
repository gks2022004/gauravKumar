import Link from "next/link";
import { Header } from "@/components/header";
import { GlassCard, MousePositionEffect } from "@/components/ui/glass-card";
import { getPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getPosts();
  return (
    <main className="relative">
      <MousePositionEffect />
      <div className="max-w-4xl mx-auto px-6">
        <Header />
        <section id="blog" className="mt-12 space-y-6">
          <h1 className="text-3xl font-bold text-foreground">Blog</h1>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <GlassCard className="p-6 hover:scale-[1.01] transition-transform">
                <h2 className="text-xl font-semibold text-foreground mb-1">{post.title}</h2>
                <p className="text-sm text-foreground/60 mb-2">{new Date(post.date).toLocaleDateString()}</p>
                <p className="text-foreground/80">{post.excerpt}</p>
              </GlassCard>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
