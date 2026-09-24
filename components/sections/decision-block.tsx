import Link from 'next/link'
import {
  Stethoscope,
  HeartPulse,
  Heart,
  Bandage,
  Pill,
  HelpCircle,
  Building2,
  ArrowRight,
} from 'lucide-react'

interface DecisionOption {
  title: string
  description: string
  href: string
  icon: typeof Stethoscope
  badge: string
}

const options: DecisionOption[] = [
  {
    title: 'In-home care for an elderly parent',
    description: 'Dedicated registered nurse visits, medication safety, health monitoring, and Home Care Package / Support at Home coordination.',
    href: '/private-nursing/elderly-care',
    icon: Heart,
    badge: 'Aged & Elderly Care',
  },
  {
    title: 'A private nurse for a clinical task',
    description: 'Injections, catheter changes, health assessments, or acute registered nursing care at home.',
    href: '/private-nursing',
    icon: Stethoscope,
    badge: 'Private Nursing',
  },
  {
    title: 'Recovery after hospital discharge',
    description: 'Transitioning home safely from Perth hospitals with clinical monitoring, wound oversight, and doctor communication.',
    href: '/post-hospital-care',
    icon: HeartPulse,
    badge: 'Post-Hospital Care',
  },
  {
    title: 'Home Care Packages & Support at Home',
    description: 'Navigating government aged care funding, HCP Levels 1–4, self-managed platforms (Trilogy Care), and Support at Home.',
    href: '/homecare-packages',
    icon: HelpCircle,
    badge: 'Aged Care Funding',
  },
  {
    title: 'Wound dressing or ulcer management',
    description: 'Sterile surgical wound dressings, skin tears, pressure injuries, and chronic ulcer management.',
    href: '/wound-care',
    icon: Bandage,
    badge: 'Wound Care',
  },
  {
    title: 'Medication management & injections',
    description: 'Medication reconciliation, Webster-pack safety, insulin and Clexane injections, and vital sign tracking.',
    href: '/medication-management',
    icon: Pill,
    badge: 'Medication Support',
  },
  {
    title: 'Community nursing for complex needs & NDIS',
    description: 'AHPRA registered nurse home visits for complex clinical needs, continence, and NDIS participants.',
    href: '/community-nursing',
    icon: Building2,
    badge: 'Community Nursing',
  },
]

export function DecisionBlock() {
  return (
    <section
      className="py-14 bg-surface border-b border-border"
      aria-labelledby="decision-block-heading"
    >
      <div className="section-container">
        <div className="max-w-3xl mb-10">
          <p className="section-label mb-2">Service Selection & Enquiry Routing</p>
          <h2
            id="decision-block-heading"
            className="text-navy text-2xl sm:text-3xl font-bold tracking-tight"
          >
            What kind of support are you looking for?
          </h2>
          <div className="section-divider mt-3 mb-4" />
          <p className="text-body text-base leading-relaxed">
            Choose the type of support you would like to discuss. Select an option below to explore our care pathways and speak with a nurse coordinator about your needs:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {options.map((opt) => {
            const Icon = opt.icon
            return (
              <Link
                key={opt.href}
                href={opt.href}
                className="card-base p-6 flex flex-col justify-between hover:border-teal-accent hover:shadow-md transition-all group bg-white relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-teal-subtle flex items-center justify-center text-teal-text group-hover:bg-teal-accent group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface text-navy border border-border">
                      {opt.badge}
                    </span>
                  </div>
                  <h3 className="text-navy font-bold text-lg mb-2 group-hover:text-teal-text transition-colors">
                    {opt.title}
                  </h3>
                  <p className="text-body text-sm leading-relaxed mb-4">
                    {opt.description}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-navy group-hover:text-teal-text pt-3 border-t border-border/50">
                  Explore Care Options
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
