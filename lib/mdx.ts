import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export type MdxMeta = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  coverImage?: string;
  coverImageAttribution?: string;
};

export type MdxPost = MdxMeta & {
  content: string;
};

/**
 * Get a single MDX post by language and slug.
 * Returns null if the file does not exist.
 */
export function getMdxPost(lang: string, slug: string): MdxPost | null {
  const filePath = path.join(CONTENT_DIR, lang, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    category: data.category || "",
    title: data.title || "",
    excerpt: data.excerpt || "",
    date: data.date || "",
    readTime: data.readTime || "",
    coverImage: data.coverImage || "",
    coverImageAttribution: data.coverImageAttribution || "",
    content,
  };
}

/**
 * List all MDX posts for a language (metadata only, no body content).
 * Sorted newest-first by date.
 */
export function getAllMdxPosts(lang: string): MdxMeta[] {
  const dir = path.join(CONTENT_DIR, lang);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(dir, f), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        category: data.category || "",
        title: data.title || "",
        excerpt: data.excerpt || "",
        date: data.date || "",
        readTime: data.readTime || "",
        coverImage: data.coverImage || "",
        coverImageAttribution: data.coverImageAttribution || "",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get all slugs for both hardcoded and MDX posts (for generateStaticParams).
 */
export function getAllSlugs(lang: string): string[] {
  const mdxSlugs = getAllMdxPosts(lang).map((p) => p.slug);
  return mdxSlugs;
}
