import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";

import { BLOG_CONTENT, getPost } from "../../../blog-content";
import { getMdxPost, getAllMdxPosts } from "../../../../lib/mdx";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fintara.app";

export function generateStaticParams() {
  const hardcoded = BLOG_CONTENT.es.map((p) => ({ slug: p.slug }));
  const mdx = getAllMdxPosts("es").map((p) => ({ slug: p.slug }));
  const seen = new Set(hardcoded.map((p) => p.slug));
  const merged = [...hardcoded, ...mdx.filter((p) => !seen.has(p.slug))];
  return merged;
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const mdxPost = getMdxPost("es", params.slug);
  const post = mdxPost || getPost("es", params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/es/posts/${params.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/es/posts/${params.slug}`,
      type: "article",
      locale: "es_ES",
      publishedTime: post.date ? new Date(post.date).toISOString() : undefined,
      authors: ["David Tarazona"],
    },
  };
}

function PostHeader({ category, title, date, readTime, excerpt, isPlaceholder }: {
  category: string; title: string; date: string; readTime: string; excerpt: string; isPlaceholder: boolean;
}) {
  return (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#2e8b57]">{category}</p>
      <h1 className="mt-4 text-5xl leading-tight">{title}</h1>
      <div className="mt-5 flex gap-4 text-sm text-slate-400">
        <span>{date}</span>
        <span>{readTime}</span>
        {isPlaceholder && <span>Borrador placeholder</span>}
      </div>
      <p className="mt-8 text-xl leading-9 text-slate-600">{excerpt}</p>
    </>
  );
}

export default function PostPageEs({ params }: { params: { slug: string } }) {
  const mdxPost = getMdxPost("es", params.slug);

  if (mdxPost) {
    return (
      <div className="min-h-screen text-slate-900">
        <header className="border-b border-[#d8cfbd]/80 bg-[#f4efe6]/92">
          <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
            <Link href="/es/blog" className="brand-wordmark-inline" aria-label="FinTara logo">
              <span>FINTARA</span>
            </Link>
            <Link href="/es/blog" className="text-sm font-semibold text-[#214236] hover:text-[#173229]">
              Volver a artículos
            </Link>
          </div>
        </header>
        <main className="mx-auto max-w-4xl px-6 py-16">
          <PostHeader
            category={mdxPost.category}
            title={mdxPost.title}
            date={mdxPost.date}
            readTime={mdxPost.readTime}
            excerpt={mdxPost.excerpt}
            isPlaceholder={false}
          />
          <article className="prose prose-lg prose-slate mt-12 max-w-none">
            <MDXRemote source={mdxPost.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </article>
        </main>
      </div>
    );
  }

  const post = getPost("es", params.slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen text-slate-900">
      <header className="border-b border-[#d8cfbd]/80 bg-[#f4efe6]/92">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
          <Link href="/es/blog" className="brand-wordmark-inline" aria-label="FinTara logo">
            <span>FINTARA</span>
          </Link>
          <Link href="/es/blog" className="text-sm font-semibold text-[#214236] hover:text-[#173229]">
            Volver a artículos
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-16">
        <PostHeader
          category={post.category}
          title={post.title}
          date={post.date}
          readTime={post.readTime}
          excerpt={post.excerpt}
          isPlaceholder={true}
        />
        <article className="mt-12 space-y-6 text-lg leading-8 text-slate-700">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </main>
    </div>
  );
}