/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  env: {
    // BACKEND_SERVER: "https://long-cummerbund-slug.cyclic.app/api",
    // STATIC_SERVER: "https://long-cummerbund-slug.cyclic.app",

    BACKEND_SERVER: "http://localhost:8000/api",
    STATIC_SERVER: "http://localhost:8000",
  },
  images: {
    domains: ["long-cummerbund-slug.cyclic.app", "localhost"],
  },
};

module.exports = nextConfig;
