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
};

module.exports = nextConfig;
