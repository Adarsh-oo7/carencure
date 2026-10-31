import Link from 'next/link'
import { Star, HeartHandshake, ShieldCheck, Handshake, Heart, Clock } from 'lucide-react'

const trustItems = [
  {
    icon: Star,
    label: '★ 5.0 Google Rating',
    sub: '12 Verified Perth Family Reviews',
    id: 'trust-rating',
    iconColor: '#CA8A04',
    href: '/review',
  },
  {
    icon: Heart,
    label: 'Dedicated Nurse Coordinator',
    sub: 'The same nurse who knows your parent',
    id: 'trust-dedicated',
    iconColor: '#0D9488',
  },
  {
    icon: Handshake,
    label: 'Partnering with Trilogy Care',
    sub: 'Support at Home & HCP Approved Partner',
    id: 'trust-trilogy',
    iconColor: '#0D9488',
  },
  {
    icon: Clock,
    label: 'Rapid 24–48h Assessment',
    sub: 'Fast clinical intake across Perth',
    id: 'trust-intake',
    iconColor: '#0D9488',
  },
  {
    icon: ShieldCheck,
    label: '$0 Travel Surcharges',
    sub: '50km Perth metropolitan service radius',
    id: 'trust-travel',
    iconColor: '#0D9488',
  },
  {
    icon: HeartHandshake,
    label: 'Transparent Rates from $110/hr*',
    sub: 'No lock-in contracts or hidden fees',
    id: 'trust-pricing',
    iconColor: '#0D9488',
  },
]

export function TrustBar() {
  return (
    <section className="py-7 bg-white border-b border-border shadow-xs" aria-label="Trust credentials">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustItems.map(({ icon: Icon, label, sub, id, iconColor, href }) => {
            const content = (
              <>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform"
                  style={{ background: 'var(--teal-subtle)', color: iconColor }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-navy leading-snug group-hover:text-teal-accent transition-colors">{label}</div>
                  <div className="text-[11px] mt-0.5 leading-tight" style={{ color: 'var(--text-muted)' }}>{sub}</div>
                </div>
              </>
            )

            return href ? (
              <Link
                key={id}
                id={id}
                href={href}
                className="flex flex-col items-center text-center gap-2 py-2 px-1 group cursor-pointer"
              >
                {content}
              </Link>
            ) : (
              <div key={id} id={id} className="flex flex-col items-center text-center gap-2 py-2 px-1">
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
