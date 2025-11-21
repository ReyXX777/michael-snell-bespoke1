import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone", // ensures .next can be deployed to Netlify
  
  pageExtensions: ["ts", "tsx", "js", "jsx"], // only consider pages; API routes won't be pre-rendered
  // Disable server-side generation for API routes
  async rewrites() {
    return [
      {
        source: "/api/:path*", 
        destination: "/api/:path*", // preserves API routes without pre-render
      },
    ];
  },
};

export default nextConfig;
