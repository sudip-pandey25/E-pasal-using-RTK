/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "sangw.in",
      "localhost",
      "picsum.photos",
      "images.pexels.com",
      "fakestoreapi.com",
    ],
  },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
