import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    quality: 65,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rapid-tyres.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
