import { MetadataRoute } from 'next'

const BASE_URL = 'https://carencure.com.au'
const TODAY = new Date().toISOString()

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
]

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
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/your-dedicated-nurse`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/post-hospital-care`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/private-nursing`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/wound-care`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/medication-management`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/mobility-support`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/companion-care`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/registered-nurses-clinical-care-services`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/homecare-packages`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/support-at-home`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/funded-care`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/referrals`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/testimonials`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: TODAY,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const suburbPages: MetadataRoute.Sitemap = suburbs.map((suburb) => ({
    url: `${BASE_URL}/locations/${suburb}`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...suburbPages, ...blogPages]
}
