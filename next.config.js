/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["play-lh.googleusercontent.com"],
  },
};

module.exports = nextConfig;
