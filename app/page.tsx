"use client";

import Link from "next/link";

const posts = [
  {
    slug: "etf-fee-compression-2026",
    category: "Investing",
    title: "ETF Fees Hit a 10-Year Low — What It Means for Your Returns",
    excerpt:
      "Expense ratios have compressed 60% in a decade. Here's who actually benefits and who doesn't at different portfolio sizes.",
    date: "Mar 17, 2026",
    readTime: "5 min",
  },
  {
    slug: "ibkr-vs-brokers-2026",
    category: "Tools",
    title: "Interactive Brokers vs. the Rest: An Honest Breakdown",
    excerpt:
      "After 3 years using IBKR, here are the real trade-offs — execution quality, margin rates, complexity tax — no affiliate links.",
    date: "Mar 14, 2026",
    readTime: "7 min",
  },
  {
    slug: "macro-signals-q1-2026",
    category: "Macro",
    title: "Three Macro Signals Worth Watching in Q1 2026",
    excerpt:
      "Not predictions. Just the data points that historically precede regime changes, with context on why they matter now.",
    date: "Mar 11, 2026",
    readTime: "4 min",
  },
];

const topics = [
  { label: "Investing", slug: "investing", desc: "ETFs, stocks, portfolio construction" },
  { label: "Macro", slug: "macro", desc: "Economic cycles, rates, policy" },
  { label: "Tools", slug: "tools", desc: "IBKR, Finviz, screener guides" },
  { label: "Strategy", slug: "strategy", desc: "Portfolio frameworks, allocation" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-md bg-emerald-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">FT</span>
            </span>
            <span className="text-xl font-bold text-slate-900" style={{ fontFamily: "var(--font-serif)" }}>
              FinTara
            </span>
          </Link>
          <nav className="flex items-center gap-8">
            <Link href="/blog" className="text-sm text-slate-500 hover:text-slate-900 font-medium">
              Articles
            </Link>
            <Link href="/about" className="text-sm text-slate-500 hover:text-slate-900 font-medium">
              About
            </Link>
            <a
              href="https://www.linkedin.com/newsletters/off-the-record-english-7439854561286262784/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
            >
              Newsletter
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        {/* ── HERO ───────────────────────────────────────────── */}
        <section className="bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
            <div className="max-w-3xl">
              <p className="section-label text-emerald-400 mb-4">Finance &amp; Investing</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Sharp takes on{" "}
                <span className="text-emerald-400">money, markets</span>
                {" "}and how they actually work.
              </h1>
              <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-2xl">
                Data-grounded writing for retail investors. No hot takes without numbers.
                No hype. By David Tarazona — investigative journalist turned market watcher.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.linkedin.com/newsletters/off-the-record-english-7439854561286262784/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg"
                >
                  Subscribe to Off the Record
                </a>
                <Link href="/blog" className="btn-outline border-slate-600 text-slate-200 hover:bg-slate-700 hover:border-slate-700 rounded-lg">
                  Read Articles →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── TOPICS ─────────────────────────────────────────── */}
        <section className="border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-6 py-10">
            <div className="flex flex-wrap gap-3">
              {topics.map((t) => (
                <Link
                  key={t.slug}
                  href={`/category/${t.slug}`}
                  className="group flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full hover:border-emerald-600 hover:bg-emerald-50 transition-all text-sm font-medium text-slate-600 hover:text-emerald-700"
                >
                  <span>{t.label}</span>
                  <span className="text-slate-400 text-xs hidden sm:inline group-hover:text-emerald-500">
                    — {t.desc}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── LATEST ARTICLES ────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="section-label">Latest</p>
              <h2 className="text-3xl font-bold">Recent Articles</h2>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
              All articles →
            </Link>
          </div>

          <div className="space-y-0 divide-y divide-slate-100">
            {posts.map((post, i) => (
              <Link key={post.slug} href={`/posts/${post.slug}`} className="block group">
                <article className="py-8 flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-shrink-0 w-8 text-3xl font-bold text-slate-100 select-none hidden sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-400">{post.date}</span>
                      <span className="text-xs text-slate-400">{post.readTime} read</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{post.excerpt}</p>
                  </div>
                  <div className="flex-shrink-0 hidden sm:flex items-center text-slate-300 group-hover:text-emerald-500 transition-colors">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* ── NEWSLETTER ─────────────────────────────────────── */}
        <section id="newsletter" className="bg-emerald-600 text-white">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="max-w-2xl">
              <p className="text-emerald-200 text-xs font-bold tracking-widest uppercase mb-4">
                Weekly Newsletter
              </p>
              <h2 className="text-4xl font-bold mb-4">Off the Record</h2>
              <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
                Weekly newsletter for who want to understand how power, money, and technology
                actually work. Published every Sunday by David Tarazona.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.linkedin.com/newsletters/off-the-record-english-7439854561286262784/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  Subscribe in English
                </a>
                <a
                  href="https://www.linkedin.com/newsletters/7439855200535904256/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-lg border border-emerald-400 transition-colors"
                >
                  Suscribirse en Español
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ──────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center text-2xl font-bold text-slate-500">
                DT
              </div>
            </div>
            <div className="max-w-xl">
              <p className="section-label">Author</p>
              <h2 className="text-3xl font-bold mb-4">David Tarazona</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Ex-investigative journalist. Co-founder of a leading Colombian news outlet.
                13 years tracing how power, money, and offshore networks actually work.
                Now applying that same lens to investing and financial systems.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Master's in Economics from Tilburg University. Based between Medellín and Amsterdam.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/davidtarazona/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  LinkedIn →
                </a>
                <Link href="/about" className="text-sm font-semibold text-slate-500 hover:text-slate-700">
                  Full bio →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className="border-t border-slate-100 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded bg-emerald-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">FT</span>
                </span>
                <span className="font-bold text-slate-900">FinTara</span>
              </div>
              <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                Sharp, data-grounded finance writing. No hype without numbers.
              </p>
            </div>
            <div className="flex gap-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Newsletters</p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.linkedin.com/newsletters/off-the-record-english-7439854561286262784/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-600 hover:text-emerald-600"
                    >
                      Off the Record (EN)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/newsletters/7439855200535904256/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-600 hover:text-emerald-600"
                    >
                      Off the Record (ES)
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Links</p>
                <ul className="space-y-2">
                  <li><Link href="/blog" className="text-sm text-slate-600 hover:text-emerald-600">Articles</Link></li>
                  <li><Link href="/about" className="text-sm text-slate-600 hover:text-emerald-600">About</Link></li>
                  <li>
                    <a href="https://www.linkedin.com/in/davidtarazona/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-emerald-600">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-slate-200 text-xs text-slate-400">
            © {new Date().getFullYear()} David Tarazona · FinTara
            <span className="ml-4">Not financial advice.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

  { slug: "stocks", label: "💹 Stocks", color: "from-green-500 to-emerald-600" },
  { slug: "crypto", label: "₿ Crypto", color: "from-orange-500 to-red-600" },
  { slug: "passive-income", label: "💰 Passive Income", color: "from-blue-500 to-cyan-600" },
  { slug: "financial-independence", label: "🗽 Financial Independence", color: "from-purple-500 to-pink-600" },
];

const recentPosts = [
  {
    id: 1,
    slug: "best-stocks-2026",
    title: "5 Best Stocks to Buy in 2026",
    excerpt: "A comprehensive analysis of high-growth stocks with strong fundamentals...",
    category: "stocks",
    date: "Mar 18, 2026",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800",
  },
  {
    id: 2,
    slug: "crypto-investment-guide",
    title: "Beginner's Guide to Cryptocurrency Investment",
    excerpt: "Understanding Bitcoin, Ethereum, and how to build a diversified crypto portfolio...",
    category: "crypto",
    date: "Mar 17, 2026",
    image: "https://images.unsplash.com/photo-1518546305927-30be0d69f419?auto=format&fit=crop&w=800",
  },
  {
    id: 3,
    slug: "passive-income-sources",
    title: "Top 10 Passive Income Sources in 2026",
    excerpt: "Discover realistic ways to generate passive income from dividends to digital products...",
    category: "passive-income",
    date: "Mar 16, 2026",
    image: "https://images.unsplash.com/photo-1516321318423-f06f70259b51?auto=format&fit=crop&w=800",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              FinTara
            </span>
          </div>
          <div className="flex gap-6">
            <Link href="/blog" className="hover:text-green-600 transition">Blog</Link>
            <Link href="/about" className="hover:text-green-600 transition">About</Link>
            <Link href="#newsletter" className="hover:text-green-600 transition">Newsletter</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 text-6xl">📈</div>
          <div className="absolute bottom-20 right-10 text-6xl">💎</div>
          <div className="absolute top-1/2 right-1/4 text-5xl">💰</div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">Build Wealth. Secure Your Future.</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Master personal finance, stocks, crypto, and passive income strategies. Learn from David Tarazona's real-world experience.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/blog"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
            >
              Start Reading
            </Link>
            <Link 
              href="#newsletter"
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition"
            >
              Join Newsletter
            </Link>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Explore Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/category/${cat.slug}`}>
              <div className={`p-6 rounded-lg bg-gradient-to-br ${cat.color} text-white cursor-pointer hover:shadow-lg transition transform hover:-translate-y-1`}>
                <h3 className="text-lg font-bold">{cat.label}</h3>
                <p className="text-sm opacity-90 mt-2">Expert insights & strategies</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <Link href="/blog" className="text-green-600 hover:text-green-700 font-semibold">View All →</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Link key={post.id} href={`/posts/${post.slug}`}>
              <div className="group cursor-pointer">
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="flex gap-2 mb-2">
                  <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-green-600 transition">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16 my-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Weekly Finance Tips</h2>
          <p className="mb-8 text-lg opacity-90">
            Join thousands of readers learning to build wealth and achieve financial independence.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 rounded-lg font-semibold transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm opacity-75 mt-4">No spam, just valuable insights. Unsub anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-slate-900 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">FinTara</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Personal finance education for wealth builders.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Categories</h4>
              <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link href={`/category/${cat.slug}`} className="hover:text-green-600 transition">
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                <li><Link href="/blog" className="hover:text-green-600 transition">Blog</Link></li>
                <li><Link href="/about" className="hover:text-green-600 transition">About</Link></li>
                <li><Link href="/contact" className="hover:text-green-600 transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow</h4>
              <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="https://x.com/FinTara" className="hover:text-green-600 transition">X (Twitter)</a></li>
                <li><a href="https://linkedin.com" className="hover:text-green-600 transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-300 dark:border-gray-700 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>&copy; 2026 FinTara. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
