import type { NextConfig } from "next";

const toolRedirects = [
  {
    destination: "/compress-pdf",
    sources: ["/tool/compress", "/tools/compress", "/pdf-compressor"],
  },
  {
    destination: "/merge-pdf",
    sources: ["/tool/merge", "/tools/merge", "/pdf-merger"],
  },
  {
    destination: "/split-pdf",
    sources: ["/tool/split", "/tools/split", "/pdf-splitter"],
  },
  {
    destination: "/rotate-pdf",
    sources: ["/tool/rotate", "/tools/rotate", "/pdf-rotator"],
  },
  {
    destination: "/edit-pdf",
    sources: ["/tool/edit", "/tools/edit", "/pdf-editor"],
  },
].flatMap(({ destination, sources }) =>
  sources.map((source) => ({
    source,
    destination,
    statusCode: 301 as const,
  })),
);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // pdf-lib and some deps ship CJS; allow them to work cleanly.
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return toolRedirects;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      // The pdf.js worker must be served with a JavaScript MIME type so the
      // browser will run it under our `nosniff` policy.
      {
        source: "/pdf.worker.min.js",
        headers: [
          { key: "Content-Type", value: "application/javascript; charset=utf-8" },
        ],
      },
    ];
  },
};

export default nextConfig;
