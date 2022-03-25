const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: (() => process.env.API_URL)(),
    PROXY_TARGET_URL: (() => process.env.PROXY_TARGET_URL)(),
  },
  async rewrites() {
    if (process.env.NODE_ENV !== "production") {
      return [
        {
          source: "/api/:path*",
          destination: `${process.env.PROXY_TARGET_URL}/api/:path*`,
        },
      ];
    }
    return [];
  },
};

module.exports = nextConfig;
