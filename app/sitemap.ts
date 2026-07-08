import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE_URL = 'https://carencure.com.au'

// Dynamic so the sitemap always reflects today when regenerated/deployed
const NOW = new Date().toISOString()

// All suburb slugs — must match suburbsMap keys in app/locations/[suburb]/page.tsx
const suburbs = [
  'nedlands',
  'subiaco',
  'cottesloe',
  'gosnells',
  'armadale',
  'rockingham',
  'applecross',
  'mount-lawley',
  'fremantle',
  'south-perth',
  'claremont',
  'inglewood',
  'booragoon',
  'canning-vale',
  'wembley',
  'floreat',
  'mount-pleasant',
  'leederville',
  'victoria-park',
  'joondalup',
  'midland',
]

// Must match slug values in lib/blog-data.ts
const blogSlugs = [
  'benefits-of-home-nursing-care',
  'post-surgery-recovery-tips',
  'managing-chronic-diseases',
  'wound-care-best-practices',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // ── High-priority service pages ──
    {
      url: `${BASE_URL}/your-dedicated-nurse`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/post-hospital-care`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/private-nursing`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/private-nursing/elderly-care`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/registered-nurses-clinical-care-services`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/wound-care`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/medication-management`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/mobility-support`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/companion-care`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/homecare-packages`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/support-at-home`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/funded-care`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ── Hub & info pages ──
    {
      url: `${BASE_URL}/services`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/referrals`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/testimonials`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: NOW,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const suburbPages: MetadataRoute.Sitemap = suburbs.map((suburb) => ({
    url: `${BASE_URL}/locations/${suburb}`,
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...suburbPages, ...blogPages]
}
