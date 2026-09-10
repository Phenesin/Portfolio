import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for GitHub Pages deployment
  output: "export",
  
  // Disable the X-Powered-By header
  poweredByHeader: false,
  
  // Note: headers() cannot be used with output: "export". 
  // Security headers must be handled by the hosting provider (GitHub Pages)
  // or via <meta> tags in the HTML (like we do for CSP in layout.tsx).
};

export default nextConfig;
