"use client";

import Link from "next/link";

const featuredPosts = [
  {
    slug: "etf-fee-compression-2026",
    category: "Investing",
    title: "ETF fees hit a 10-year low. Who actually keeps the gain?",
    excerpt:
      "Fee compression sounds universally good until you map where the savings are material and where the marketing is ahead of the math.",
    meta: "5 min read",
  },
  {
    slug: "ibkr-vs-brokers-2026",
    category: "Tools",
    title: "Interactive Brokers vs the rest: the real trade-offs after 3 years",
    excerpt:
      "Execution quality, margin rates, reporting friction, and why the best broker for serious investors is still not the easiest one.",
    meta: "7 min read",
  },
  {
    slug: "macro-signals-q1-2026",
    category: "Macro",
    title: "Three macro signals worth tracking before the market narrative changes",
    excerpt:
      "Not predictions. The specific data points that tend to shift the story before headlines catch up.",
    meta: "4 min read",
  },
];

const principles = [
  "Data before opinion",
  "No hype language",
  "Tools with real-world trade-offs",
  "Retail-investor clarity, not institutional jargon",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-stone-50/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
              FT
            </span>
            <span className="text-lg font-semibold tracking-tight">FinTara</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Articles
            </Link>
            <a
              href="https://www.linkedin.com/in/davidtarazona/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              David
            </a>
            <a
              href="https://www.linkedin.com/newsletters/off-the-record-english-7439854561286262784/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Off the Record
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.14),_transparent_35%),linear-gradient(180deg,_#0f172a_0%,_#111827_100%)] text-white">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
                Finance, markets, and systems
              </p>
              <h1 className="max-w-3xl text-5xl leading-[1.05] md:text-7xl">
                Finance writing that treats readers like adults.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                FinTara is where David Tarazona writes about markets, investing tools,
                incentives, and power. The angle is skeptical, data-grounded, and built
                for people who want signal instead of motivational finance content.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://www.linkedin.com/newsletters/off-the-record-english-7439854561286262784/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
                >
                  Subscribe to the newsletter
                </a>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:border-slate-400"
                >
                  Read recent analysis
                </Link>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
                Editorial line
              </p>
              <ul className="mt-6 space-y-4">
                {principles.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl bg-slate-950/50 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
                  Weekly note
                </p>
                <p className="mt-3 text-2xl font-semibold">Off the Record</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Weekly analysis on how money, power, and technology actually work.
                  Published on LinkedIn in English and Spanish.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-600">
                Latest analysis
              </p>
              <h2 className="text-4xl">Recent pieces</h2>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
              View all articles
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="group rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-600">
                  {post.category}
                </p>
                <h3 className="mt-4 text-2xl leading-tight text-slate-900 group-hover:text-emerald-700">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                <div className="mt-8 flex items-center justify-between text-sm font-medium text-slate-400">
                  <span>{post.meta}</span>
                  <span className="text-emerald-700">Read -&gt;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-600">
                About the author
              </p>
              <h2 className="text-4xl">David Tarazona</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                David is an investigative journalist and media founder who spent over a decade
                tracing offshore structures, corruption networks, and the incentives behind power.
              </p>
              <p>
                FinTara brings that same lens to investing: fewer slogans, more structure;
                fewer generic tips, more clarity about what matters and why.
              </p>
              <a
                href="https://www.linkedin.com/in/davidtarazona/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Follow David on LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
                Newsletter
              </p>
              <h2 className="text-4xl">Off the Record</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Weekly writing for readers who want to understand how power, money,
                and technology interact in the real world.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.linkedin.com/newsletters/off-the-record-english-7439854561286262784/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                Subscribe in English
              </a>
              <a
                href="https://www.linkedin.com/newsletters/7439855200535904256/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:border-slate-400"
              >
                Suscribirse en espanol
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} FinTara by David Tarazona.</p>
          <div className="flex gap-6">
            <Link href="/blog" className="hover:text-slate-900">
              Articles
            </Link>
            <a
              href="https://www.linkedin.com/in/davidtarazona/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}