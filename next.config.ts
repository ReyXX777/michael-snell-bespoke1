import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone", // ensures .next can be deployed to Netlify
};

export default nextConfig;
