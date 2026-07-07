/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Old static HTML redirect files removed — send 301 to proper Next.js routes
      {
        source: '/locations/midland/index.html',
        destination: '/locations/midland',
        permanent: true,
      },
      {
        source: '/locations/joondalup/index.html',
        destination: '/locations/joondalup',
        permanent: true,
      },
      // Trailing-slash variants for suburb pages (safety net)
      {
        source: '/locations/midland/',
        destination: '/locations/midland',
        permanent: true,
      },
      {
        source: '/locations/joondalup/',
        destination: '/locations/joondalup',
        permanent: true,
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://vitals.vercel-insights.com https://*.vercel-analytics.com; font-src 'self' data:;",
          },
        ],
      },
    ]
  },
}

export default nextConfig
