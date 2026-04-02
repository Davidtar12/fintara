import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { BLOG_CONTENT, getPost } from "../../blog-content";
import { getMdxPost, getAllMdxPosts } from "../../../lib/mdx";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const mdxPost = getMdxPost("en", params.slug);
  if (!mdxPost) return {};

  return {
    title: mdxPost.title,
    description: mdxPost.excerpt,
    openGraph: {
      title: mdxPost.title,
      description: mdxPost.excerpt,
      type: "article",
      ...(mdxPost.ogImage ? { images: [{ url: mdxPost.ogImage, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: mdxPost.title,
      description: mdxPost.excerpt,
      ...(mdxPost.ogImage ? { images: [mdxPost.ogImage] } : {}),
    },
  };
}

export function generateStaticParams() {
  const hardcoded = BLOG_CONTENT.en.map((p) => ({ slug: p.slug }));
  const mdx = getAllMdxPosts("en").map((p) => ({ slug: p.slug }));
  const seen = new Set(hardcoded.map((p) => p.slug));
  const merged = [...hardcoded, ...mdx.filter((p) => !seen.has(p.slug))];
  return merged;
}

function PostHeader({
  category,
  title,
  date,
  readTime,
  excerpt,
  isPlaceholder,
}: {
  category: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  isPlaceholder: boolean;
}) {
  return (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#2e8b57]">{category}</p>
      <h1 className="mt-4 text-5xl leading-tight">{title}</h1>
      <div className="mt-5 flex gap-4 text-sm text-slate-400">
        <span>{date}</span>
        <span>{readTime}</span>
        {isPlaceholder && <span>Placeholder draft</span>}
      </div>
      <p className="mt-8 text-xl leading-9 text-slate-600">{excerpt}</p>
    </>
  );
}

function AttributionLine({ attribution }: { attribution: string }) {
  // Convert markdown links to HTML
  const html = attribution.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline">$1</a>'
  );
  return (
    <p
      className="mt-2 text-xs text-slate-400 text-right"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const mdxPost = getMdxPost("en", params.slug);

  if (mdxPost) {
    return (
      <div className="min-h-screen text-slate-900">
        <header className="border-b border-[#d8cfbd]/80 bg-[#f4efe6]/92">
          <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
            <Link href="/blog" className="brand-wordmark-inline" aria-label="FinTara logo">
              <span>FINTARA</span>
            </Link>
            <Link href="/blog" className="text-sm font-semibold text-[#214236] hover:text-[#173229]">
              Back to articles
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
          {mdxPost.coverImage && (
            <figure className="mt-10">
              <img
                src={mdxPost.coverImage}
                alt={mdxPost.title}
                className="w-full rounded-2xl object-cover max-h-[480px]"
              />
              {mdxPost.coverImageAttribution && (
                <figcaption>
                  <AttributionLine attribution={mdxPost.coverImageAttribution} />
                </figcaption>
              )}
            </figure>
          )}
          <article className="prose prose-lg prose-slate mt-12 max-w-none
            prose-img:rounded-xl prose-img:shadow-md
            prose-figcaption:text-xs prose-figcaption:text-slate-400">
            <MDXRemote
              source={mdxPost.content}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </article>
        </main>
      </div>
    );
  }

  const post = getPost("en", params.slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen text-slate-900">
      <header className="border-b border-[#d8cfbd]/80 bg-[#f4efe6]/92">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
          <Link href="/blog" className="brand-wordmark-inline" aria-label="FinTara logo">
            <span>FINTARA</span>
          </Link>
          <Link href="/blog" className="text-sm font-semibold text-[#214236] hover:text-[#173229]">
            Back to articles
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
