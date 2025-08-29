import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { GlassCard, MousePositionEffect } from "@/components/ui/glass-card";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <main className="relative">
      <MousePositionEffect />
      <div className="max-w-3xl mx-auto px-6">
        <Header />
        <article className="mt-12 space-y-6">
          <GlassCard className="p-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">{post.title}</h1>
            <p className="text-sm text-foreground/60 mb-6">{new Date(post.date).toLocaleDateString()}</p>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {post.content.map((block, i) => {
                if ("items" in block) {
                  return (
                    <ul key={i} className="list-disc pl-6">
                      {block.items.map((it, idx) => (
                        <li key={idx}>{it}</li>
                      ))}
                    </ul>
                  );
                }
                switch (block.type) {
                  case "h2":
                    return <h2 key={i}>{block.text}</h2>;
                  case "p":
                    return <p key={i}>{block.text}</p>;
                  default:
                    return <p key={i}>{(block as any).text}</p>;
                }
              })}
            </div>
          </GlassCard>
          <div>
            <Link href="/blog" className="text-primary">← Back to Blog</Link>
          </div>
        </article>
      </div>
    </main>
  );
}
