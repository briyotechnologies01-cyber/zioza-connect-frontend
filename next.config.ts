import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  basePath: "/zioza-connect-frontend",
  assetPrefix: "/zioza-connect-frontend/",
};

export default nextConfig;