/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["unsplash.com", "images.unsplash.com","lh3.googleusercontent.com"],
     remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
    ], // whitelist Unsplash domains
  },
};

module.exports = nextConfig;
