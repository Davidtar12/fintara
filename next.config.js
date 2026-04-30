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
  // Consolidate duplicate routes — /posts/* was the legacy slug. /blog/* is canonical.
  // Permanent 301 lets Google merge any old indexing into the new URL.
  async redirects() {
    return [
      { source: "/posts/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/es/posts/:slug", destination: "/es/blog/:slug", permanent: true },
    ];
  },
};

module.exports = nextConfig;
