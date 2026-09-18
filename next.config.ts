import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

   output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/zioza-connect-frontend",
  assetPrefix: "/zioza-connect-frontend/",

};

export default nextConfig;
