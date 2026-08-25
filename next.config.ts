import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "activeimagerecognition.com" }],
        destination: "https://www.activeimagerecognition.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
