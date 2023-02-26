/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // tried adding this to make TS debug work
  // productionBrowserSourceMaps: true,
}

module.exports = nextConfig
