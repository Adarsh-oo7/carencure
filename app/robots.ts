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
          // Prevent Next.js dynamic OG image routes from being crawled as web pages
          '/opengraph-image*',
          '/*opengraph-image*',
          // Prevent static fonts and asset files from being crawled as web pages
          '/_next/static/*',
          '/*.woff2$',
          '/*.woff$',
          '/*.ttf$',
        ],
      },
    ],
    sitemap: 'https://carencure.com.au/sitemap.xml',
    host: 'https://carencure.com.au',
  }
}
