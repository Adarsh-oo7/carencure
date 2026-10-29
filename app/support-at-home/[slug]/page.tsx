import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FundedLanding } from '@/components/funded-landing'
import { getFundedPage, getFundedPagesByHub } from '@/lib/funded-pages'

const HUB = 'sah' as const
const BASE = 'https://carencure.com.au/support-at-home'

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return getFundedPagesByHub(HUB).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = getFundedPage(HUB, slug)
  if (!page) return {}
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: `${BASE}/${page.slug}` },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url: `${BASE}/${page.slug}`, type: 'website' },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getFundedPage(HUB, slug)
  if (!page) notFound()
  return <FundedLanding page={page} />
}
