/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    scrollRestoration: false,
  },
  env: {
    BACKEND_SERVER: "https://odd-pink-lion-gear.cyclic.app/api",
    STATIC_SERVER: "https://odd-pink-lion-gear.cyclic.app",
    FRONTEND_SERVER: "https://aj-umber.vercel.app",
    // FRONTEND_SERVER: "http://localhost:3000",
    // BACKEND_SERVER: "http://localhost:8000/api",
    // STATIC_SERVER: "http://localhost:8000",
    MONGODB_URI:
      "mongodb+srv://petersafwat:YzegQ0QJlV0ljR0B@cluster0.dsafm2w.mongodb.net/AJSPORTS?retryWrites=true&w=majority",
    // GOOGLE_CLIENT_ID:
    //   "852941662667-467i5p7bqcgokabl1rjgi0j048vm6mev.apps.googleusercontent.com",
    // GOOGLE_CLIENT_SECRET: "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",

    // FACEBOOK_CLIENT_ID: "1781877375581162",
    // FACEBOOK_CLIENT_SECRET: "bbd0a0eaa0399e97a442ced74e5abdc9",

    // NEXTAUTH_SECRET: "my-altra-super-super-secret222",
    // JWT_SECRET: "my-altra-super-super-secret222ssasadss",
  },

  images: {
    domains: [
      "jealous-cow-jewelry.cyclic.cloud",
      "localhost",
      "media-4.api-sports.io",
    ],
  },
};

module.exports = nextConfig;
