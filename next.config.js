/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Googl Account User Profile Picture
        port: "",
        pathname: "/a/**",
      },
    ],
  },
};

module.exports = nextConfig;
