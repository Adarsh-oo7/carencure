import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/cdn-cgi/',
          // Prevent Next.js OG image routes from being indexed
          '/opengraph-image',
          // Prevent static font/asset files from being indexed
          '/_next/static/',
        ],
      },
    ],
    sitemap: 'https://carencure.com.au/sitemap.xml',
    host: 'https://carencure.com.au',
  }
}
