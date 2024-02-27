/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "**",
      },
    ],
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `https://oldbee.netlify.app/api/:path*`,
      },
    ];
  },
  headers: async () => {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Geliştirme ortamında "*" kullanabilirsiniz.
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
