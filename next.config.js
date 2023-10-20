/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"],
    serverActions: true,
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
  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig;
