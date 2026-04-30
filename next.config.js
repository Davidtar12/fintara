/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "images.pexels.com", "via.placeholder.com"],
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SITE_NAME: "FinTara",
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://fintara.app",
  },
  // EN has both /blog/* and /posts/* serving the same MDX. /blog/* is canonical.
  // 301 from legacy /posts/* consolidates Google indexing into one URL.
  // ES only has /es/posts/* — leave it alone.
  async redirects() {
    return [
      { source: "/posts/:slug", destination: "/blog/:slug", permanent: true },
    ];
  },
};

module.exports = nextConfig;
