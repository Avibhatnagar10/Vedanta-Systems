/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["unsplash.com", "images.unsplash.com"], // whitelist Unsplash domains
  },
};

module.exports = nextConfig;
