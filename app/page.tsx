"use client";

import Link from "next/link";

function FinTaraWordmark({ compact = false }: { compact?: boolean }) {
  const wrapperClass = compact
    ? "brand-wordmark scale-[0.72] origin-left"
    : "brand-wordmark";

  return (
    <div className={wrapperClass} aria-label="FinTara logo">
      <span className="brand-wordmark-line">FIN</span>
      <span className="brand-wordmark-line">TARA</span>
    </div>
  );
}

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
  "Perspective with spine",
  "Tools with real-world trade-offs",
  "Clear no-financial-advice boundary",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f4efe6] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-[#d8cfbd]/80 bg-[#f4efe6]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="hidden sm:block">
              <FinTaraWordmark compact />
            </div>
            <div className="sm:hidden flex h-9 w-9 items-center justify-center rounded-full bg-[#0f3b2f] text-xs font-bold text-[#e8d8a8]">
              FT
            </div>
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
              className="rounded-full bg-[#10213f] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0a1730]"
            >
              Off the Record
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-[#d8cfbd] bg-[radial-gradient(circle_at_top_left,_rgba(232,216,168,0.16),_transparent_28%),linear-gradient(180deg,_#0c1628_0%,_#13213c_100%)] text-white">
          <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#e8d8a8]">
                Finance, power, and market judgment
              </p>
              <div className="max-w-3xl">
                <FinTaraWordmark />
              </div>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300 md:text-2xl">
                Data first. Perspective second. Both matter.
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                FinTara is where David Tarazona writes about investing, incentives,
                financial power, and market structure. The point is not to sound neutral.
                The point is to be rigorous, clear about the argument, and honest about uncertainty.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://www.linkedin.com/newsletters/off-the-record-english-7439854561286262784/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#e8d8a8] px-6 py-3 text-sm font-semibold text-[#1a2438] hover:bg-[#f0e3bc]"
                >
                  Subscribe to the newsletter
                </a>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-full border border-[#b7a880]/60 px-6 py-3 text-sm font-semibold text-white hover:border-[#e8d8a8]"
                >
                  Read recent analysis
                </Link>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#e8d8a8]">
                Editorial line
              </p>
              <ul className="mt-6 space-y-4">
                {principles.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#d7be76]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-[#c5b281]/15 bg-slate-950/50 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
                  Brand promise
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#f3ead0]">Sharp opinion. Clear evidence.</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  This is not financial advice. It is analysis with a point of view,
                  backed by evidence and explicit trade-offs.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#8a6d2f]">
                Latest analysis
              </p>
              <h2 className="text-4xl">Recent pieces</h2>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-[#8a6d2f] hover:text-[#6d541e]">
              View all articles
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="group rounded-[1.5rem] border border-[#ddd3c1] bg-[linear-gradient(180deg,_#fffdfa_0%,_#f8f3e9_100%)] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a6d2f]">
                  {post.category}
                </p>
                <h3 className="mt-4 text-2xl leading-tight text-slate-900 group-hover:text-[#214236]">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                <div className="mt-8 flex items-center justify-between text-sm font-medium text-slate-400">
                  <span>{post.meta}</span>
                  <span className="text-[#214236]">Read -&gt;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-[#ddd3c1] bg-white/70">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#8a6d2f]">
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
                className="inline-flex items-center text-sm font-semibold text-[#214236] hover:text-[#173229]"
              >
                Follow David on LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,_#12233f_0%,_#0c1628_100%)] text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#e8d8a8]">
                Newsletter
              </p>
              <h2 className="text-4xl">Off the Record</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Weekly writing for readers who want markets explained with evidence,
                judgment, and an actual point of view. Not financial advice.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.linkedin.com/newsletters/off-the-record-english-7439854561286262784/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#e8d8a8] px-6 py-3 text-sm font-semibold text-[#10213f] hover:bg-[#f0e3bc]"
              >
                Subscribe in English
              </a>
              <a
                href="https://www.linkedin.com/newsletters/7439855200535904256/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#b7a880]/60 px-6 py-3 text-sm font-semibold text-white hover:border-[#e8d8a8]"
              >
                Suscribirse en espanol
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#f4efe6]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} FinTara by David Tarazona. Analysis only, not financial advice.</p>
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