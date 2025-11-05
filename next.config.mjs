/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async rewrites() {
    return {
      beforeFiles: [
        // Keep /companies/* routes in Next.js
        {
          source: '/companies/:path*',
          destination: '/companies/:path*',
        },
        // Keep sitemap and robots in Next.js
        {
          source: '/sitemap.xml',
          destination: '/sitemap.xml',
        },
        {
          source: '/robots.txt',
          destination: '/robots.txt',
        },
      ],
      fallback: [
        // Everything else goes to Lovable
        {
          source: '/:path*',
          destination: 'https://cleverprep.lovable.app/:path*',
        },
      ],
    }
  },
}

export default nextConfig
