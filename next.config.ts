import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable TypeScript checking during build for testing purposes
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint checking during build as well (optional)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
