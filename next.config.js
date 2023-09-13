/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["iili.io"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
