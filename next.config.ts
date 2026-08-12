import type { NextConfig } from "next";

// https://nextjs.org/docs/app/api-reference/config/next-config-js
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
