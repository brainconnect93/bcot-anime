/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
    domains: ['m.media-amazon.com'],
  },
};

module.exports = nextConfig
