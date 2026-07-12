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
        destination: 'https://app.formbricks.com/s/cmqwmpfyp4iub01xl8ysq4j9b',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
