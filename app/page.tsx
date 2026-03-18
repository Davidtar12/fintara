"use client";

import Link from "next/link";
import Image from "next/image";

const categories = [
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
