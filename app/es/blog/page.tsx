import Link from "next/link";

import { BLOG_CONTENT } from "../../blog-content";
import { getAllMdxPosts } from "../../../lib/mdx";

type PostItem = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

function BlogHeaderEs() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d8cfbd]/80 bg-[#f4efe6]/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/es" className="brand-wordmark-inline" aria-label="FinTara logo">
          <span>FINTARA</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/es/blog" className="text-sm font-medium text-slate-900">Articulos</Link>
          <Link href="/blog" className="rounded-full border border-[#d8cfbd] px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900">
            EN
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default function BlogPageEs() {
  const hardcoded: PostItem[] = BLOG_CONTENT.es.map((p) => ({
    slug: p.slug,
    category: p.category,
    title: p.title,
    excerpt: p.excerpt,
    date: p.date,
    readTime: p.readTime,
  }));

  const mdx: PostItem[] = getAllMdxPosts("es");

  // Merge: MDX posts first (newest), then hardcoded. Deduplicate by slug.
  const seen = new Set<string>();
  const allPosts: PostItem[] = [];
  for (const post of [...mdx, ...hardcoded]) {
    if (!seen.has(post.slug)) {
      seen.add(post.slug);
      allPosts.push(post);
    }
  }

  return (
    <div className="min-h-screen text-slate-900">
      <BlogHeaderEs />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#8a6d2f]">Archivo en espanol</p>
          <h1 className="text-5xl">Articulos de FinTara</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Analisis, herramientas y estrategia para inversores que les importan los detalles.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {allPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/es/posts/${post.slug}`}
              className="group rounded-[1.5rem] border border-[#ddd3c1] bg-[linear-gradient(180deg,_#fffdfa_0%,_#f8f3e9_100%)] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#2e8b57]">{post.category}</p>
                <p className="text-xs text-slate-400">{post.date}</p>
              </div>
              <h2 className="mt-4 text-3xl leading-tight group-hover:text-[#214236]">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{post.excerpt}</p>
              <div className="mt-8 flex items-center justify-between text-sm font-medium text-slate-400">
                <span>{post.readTime}</span>
                <span className="text-[#2e8b57]">Leer articulo -&gt;</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}