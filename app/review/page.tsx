import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { ReviewFunnel } from '@/components/review/review-funnel'
import { Star, Heart, CheckCircle2, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Leave a Review | Care N Cure Perth In-Home Nursing',
  description:
    'Share your experience with Care N Cure Registered Nurses in Perth. Your feedback helps local Western Australian families and participants find trusted community care.',
  alternates: { canonical: 'https://carencure.com.au/review' },
  openGraph: {
    title: 'Leave a Review | Care N Cure Perth In-Home Nursing',
    description:
      'Share your experience with Care N Cure Registered Nurses in Perth. Your feedback helps local Western Australian families and participants find trusted community care.',
    url: 'https://carencure.com.au/review',
  },
}

export default function ReviewPage() {
  return (
    <>
      <PageHeader
        title="Share Your Experience"
        subtitle="Your review helps Perth families and NDIS participants connect with compassionate, registered nurse home care."
        breadcrumbItems={[{ name: 'Leave a Review', href: '/review' }]}
        label="Google Reviews"
      />

      <section className="section-py bg-surface">
        <div className="section-container max-w-4xl">
          <ReviewFunnel googleReviewUrl="https://share.google/AFv5vHsJl8uVnocto" />

          {/* Practice Trust Summary */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-border shadow-sm text-center">
            <div className="flex items-center justify-center gap-1.5 text-amber-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-navy font-bold text-lg">Care N Cure Community Nursing</p>
            <p className="text-body text-xs mt-1">
              Registered Nurse Led • Zero Travel Surcharges within 50km • Gosnells HQ
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-teal-accent" /> 2232B Albany Hwy, Gosnells WA 6110
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-teal-accent" /> 1300 919 663
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
