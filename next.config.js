/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rvadmin.jetsite.ru',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
