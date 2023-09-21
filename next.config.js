/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    scrollRestoration: false,
  },
  env: {
    BACKEND_SERVER: "https://jealous-cow-jewelry.cyclic.cloud/api",
    STATIC_SERVER: "https://jealous-cow-jewelry.cyclic.cloud",
    FRONTEND_SERVER: "https://aj-umber.vercel.app",

    // FRONTEND_SERVER: "http://localhost:3000",
    // BACKEND_SERVER: "http://localhost:8000/api",
    // STATIC_SERVER: "http://localhost:8000",
  },
  images: {
    domains: ["jealous-cow-jewelry.cyclic.cloud", "localhost"],
  },
};

module.exports = nextConfig;
