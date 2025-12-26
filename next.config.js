/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  env: {
    BACKEND_API_URL: process.env.BACKEND_API_URL || 'https://api.chavaramatrimony.com',
    BACKEND_AUTH_VERIFY_URL: process.env.BACKEND_AUTH_VERIFY_URL || 'https://api.chavaramatrimony.com/auth/verify',
  },
}

module.exports = nextConfig
