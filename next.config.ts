import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: '://fossmpstme.com',
          },
        ],
        destination: 'https://formbricks.com',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
