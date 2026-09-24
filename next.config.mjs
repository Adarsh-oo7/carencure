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
      // Legacy index.html redirects for root and all subdirectories
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:path*/index.html',
        destination: '/:path*',
        permanent: true,
      },
      // Redirect legacy .html endpoints to clean paths
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true,
      },
      // Fix Google Search Console 404 reported URL errors (legacy suburb-Suburb slug pattern)
      {
        source: '/locations/fremantle-Fremantle',
        destination: '/locations/fremantle',
        permanent: true,
      },
      {
        source: '/locations/inglewood-Inglewood',
        destination: '/locations/inglewood',
        permanent: true,
      },
      {
        source: '/locations/nedlands-Nedlands',
        destination: '/locations/nedlands',
        permanent: true,
      },
      {
        source: '/locations/cottesloe-Cottesloe',
        destination: '/locations/cottesloe',
        permanent: true,
      },
      {
        source: '/locations/victoria-park-Victoria-Park',
        destination: '/locations/victoria-park',
        permanent: true,
      },
      {
        source: '/locations/subiaco-Subiaco',
        destination: '/locations/subiaco',
        permanent: true,
      },
      {
        source: '/locations/applecross-Applecross',
        destination: '/locations/applecross',
        permanent: true,
      },
      {
        source: '/locations/claremont-Claremont',
        destination: '/locations/claremont',
        permanent: true,
      },
      {
        source: '/locations/gosnells-Gosnells',
        destination: '/locations/gosnells',
        permanent: true,
      },
      {
        source: '/locations/armadale-Armadale',
        destination: '/locations/armadale',
        permanent: true,
      },
      {
        source: '/locations/rockingham-Rockingham',
        destination: '/locations/rockingham',
        permanent: true,
      },
      {
        source: '/locations/south-perth-South-Perth',
        destination: '/locations/south-perth',
        permanent: true,
      },
      {
        source: '/locations/canning-vale-Canning-Vale',
        destination: '/locations/canning-vale',
        permanent: true,
      },
      {
        source: '/locations/mount-lawley-Mount-Lawley',
        destination: '/locations/mount-lawley',
        permanent: true,
      },
      {
        source: '/locations/joondalup-Joondalup',
        destination: '/locations/joondalup',
        permanent: true,
      },
      {
        source: '/locations/midland-Midland',
        destination: '/locations/midland',
        permanent: true,
      },
      {
        source: '/cdn-cgi/l/email-protection',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cdn-cgi/:path*',
        destination: '/',
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
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://vitals.vercel-insights.com https://*.vercel-analytics.com https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://www.google.com https://*.google.com https://stats.g.doubleclick.net; font-src 'self' data:;",
          },
        ],
      },
    ]
  },
}

export default nextConfig
