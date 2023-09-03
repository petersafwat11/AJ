/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  env: {
    // BACKEND_SERVER: "https://long-cummerbund-slug.cyclic.app/api",

    BACKEND_SERVER: "http://localhost:8000/api",
  },
};

module.exports = nextConfig;
