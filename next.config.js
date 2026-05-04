/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Legacy /posts/ → canonical /blog/
      { source: "/posts/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/es/posts/:slug", destination: "/es/blog/:slug", permanent: true },
      // Duplicate-content consolidation — 301 to canonical post per topic
      { source: "/blog/optimal-portfolio-rebalancing-frequency-strategy", destination: "/blog/optimal-portfolio-rebalancing-frequency", permanent: true },
      { source: "/blog/optimal-portfolio-rebalancing-frequency-guide", destination: "/blog/optimal-portfolio-rebalancing-frequency", permanent: true },
      { source: "/blog/optimal-portfolio-rebalancing-frequency-stocks", destination: "/blog/optimal-portfolio-rebalancing-frequency", permanent: true },
      { source: "/blog/implementing-sector-rotation-strategy-etfs", destination: "/blog/implementing-sector-rotation-strategy", permanent: true },
      { source: "/blog/build-dividend-etf-portfolio-strategy", destination: "/blog/build-a-resilient-dividend-etf-portfolio", permanent: true },
      // Pinterest pins pointing to posts that were generated but never published
      { source: "/blog/which-sectors-outperform-in-q4-2024", destination: "/blog/implementing-sector-rotation-strategy", permanent: true },
    ];
  },
  images: {
    domains: ["images.unsplash.com", "images.pexels.com", "via.placeholder.com"],
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SITE_NAME: "FinTara",
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://fintara.app",
  },
};

module.exports = nextConfig;
