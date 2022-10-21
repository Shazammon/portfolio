/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // added this in class
  images: {
    // supply an array of trusted image domains (no http:// nor https://)
    domains: ['placekitten.com']
  }
}

module.exports = nextConfig
