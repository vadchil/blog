/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // If deploying to GitHub Pages with custom domain, uncomment and set your basePath:
  // basePath: '/blog',
  // assetPrefix: '/blog',
}

module.exports = nextConfig

