import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone", // ensures .next can be deployed to Netlify
  // Avoid pre-rendering for API routes and allow Edge functions if needed
  
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"], // ensures API routes aren't treated as pages
};

export default nextConfig;
