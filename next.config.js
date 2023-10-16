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
    MONGODB_URI:
      "mongodb+srv://petersafwat:YzegQ0QJlV0ljR0B@cluster0.dsafm2w.mongodb.net/AJSPORTS?retryWrites=true&w=majority",
    GOOGLE_CLIENT_ID:
      "717688328200-d0kse7hiood1nrupppopua2tlv0ukl0v.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  },
  images: {
    domains: ["jealous-cow-jewelry.cyclic.cloud", "localhost"],
  },
};

module.exports = nextConfig;
