/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/auth/login",
        destination: "http://api.mnimedu.com/api/auth/login/",
      },
      {
        source: "/api/auth/registration",
        destination: "http://api.mnimedu.com/api/auth/registration/",
      },
    ];
  },
};

export default nextConfig;
