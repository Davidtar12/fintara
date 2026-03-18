import Link from "next/link";
import { notFound } from "next/navigation";

import { BLOG_CONTENT, getPost } from "../../../blog-content";

export function generateStaticParams() {
  return BLOG_CONTENT.es.map((post) => ({ slug: post.slug }));
}

export default function PostPageEs({ params }: { params: { slug: string } }) {
  const post = getPost("es", params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen text-slate-900">
      <header className="border-b border-[#d8cfbd]/80 bg-[#f4efe6]/92">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
          <Link href="/es/blog" className="brand-wordmark-inline" aria-label="FinTara logo">
            <span>FINTARA</span>
          </Link>
          <Link href="/es/blog" className="text-sm font-semibold text-[#214236] hover:text-[#173229]">
            Volver a articulos
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#2e8b57]">{post.category}</p>
        <h1 className="mt-4 text-5xl leading-tight">{post.title}</h1>
        <div className="mt-5 flex gap-4 text-sm text-slate-400">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
          <span>Borrador placeholder</span>
        </div>
        <p className="mt-8 text-xl leading-9 text-slate-600">{post.excerpt}</p>
        <article className="mt-12 space-y-6 text-lg leading-8 text-slate-700">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </main>
    </div>
  );
}