/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/auth/login",
        destination: "http://api.mnimedu.com/api/auth/login/",
      },
    ];
  },
};

export default nextConfig;
