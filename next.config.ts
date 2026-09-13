import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/mobile-tyre-fitting-bristol",
        destination: "/",
        statusCode: 301,
      },
    ];
  },
  images: {
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
