import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.0.5'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-4878ccd41fca4cfd8b0f379f84c19a2b.r2.dev',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;  
