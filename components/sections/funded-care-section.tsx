import Link from 'next/link'
import { Home, Users, Heart, Activity } from 'lucide-react'

const fundingCards = [
  {
    id: 'funded-hcp',
    icon: Home,
    title: 'Home Care Packages (HCP)',
    subtitle: 'Levels 1–4 · Government Funded',
    body: 'For older Australians needing ongoing support at home. Your HCP funds nursing visits, wound care, and clinical oversight. We work with self-managed and provider-managed packages.',
    badge: 'My Aged Care · myagedcare.gov.au',
  },

  {
    id: 'funded-transition',
    icon: Activity,
    title: 'Post-Hospital Transition Care',
    subtitle: 'Short-term recovery support',
    body: 'Government-funded or private transition support immediately after hospital discharge. We bridge the gap, managing dressings and meds while you regain independence.',
    badge: 'Hospital Discharge Transition',
  },
  {
    id: 'funded-private',
    icon: Heart,
    title: 'Private Funding & Insurance',
    subtitle: 'Immediate access · No assessment required',
    body: 'Access immediate private nursing care without waitlists or government assessments. Many of our clinical care services can be claimed through private health insurance extras.',
    badge: 'Direct & Private Health extras',
  },
]

export function FundedCareSection() {
  return (
    <section className="py-20 bg-slate-50" aria-labelledby="funded-care-heading">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Funding &amp; Access</p>
          <h2 id="funded-care-heading" className="text-navy mb-4">
            We Work With Your Funding
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Many clients are eligible for government-funded or subsidized care. We help you understand and access what you&apos;re entitled to.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {fundingCards.map(({ id, icon: Icon, title, subtitle, body, badge }) => (
            <div
              key={id}
              id={id}
              className="bg-white rounded-2xl p-7 shadow-sm border border-border transition-all duration-200 hover:border-l-4 hover:border-l-teal-600 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'var(--teal)', color: 'var(--navy)' }}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-navy font-bold text-lg mb-1">{title}</h3>
              <p className="text-teal-700 text-sm font-medium mb-3">{subtitle}</p>
              <p className="text-body text-sm leading-relaxed mb-4">{body}</p>
              <span className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-teal-200">
                {badge}
              </span>
            </div>
          ))}
        </div>

        {/* Reassurance strip */}
        <div className="bg-teal-700 rounded-2xl px-8 py-8 text-center">
          <p className="text-white text-lg font-medium mb-5">
            Not sure what funding you&apos;re eligible for? Our nurses will help you find out — at no cost.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors"
            id="funded-care-chat-cta"
          >
            Book a Free Funding Chat
          </Link>
        </div>
      </div>
    </section>
  )
}
