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
  HeartHandshake,
  UserCheck,
  Activity,
} from 'lucide-react'

interface DecisionOption {
  title: string
  description: string
  href: string
  icon: any
  badge: string
}

const options: DecisionOption[] = [
  {
    title: 'Aged care at home in Perth',
    description: 'Nurse-led in-home aged care support, daily living assistance, chronic illness monitoring, and dignified aging at home.',
    href: '/aged-care-at-home-perth',
    icon: HeartHandshake,
    badge: 'Aged Care at Home',
  },
  {
    title: 'In-home care for an elderly parent',
    description: 'Dedicated registered nurse coordinators, medication safety, health monitoring, and direct family handover notes.',
    href: '/private-nursing/elderly-care',
    icon: Heart,
    badge: 'Elderly Care',
  },
  {
    title: 'A private nurse for a clinical task',
    description: 'Injections, catheter changes, clinical health assessments, or acute registered nursing care at home in Perth.',
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
    title: 'NDIS nursing & complex clinical needs',
    description: 'AHPRA registered nurse home visits for complex clinical needs, continence assessments, catheter care, and NDIS participants.',
    href: '/ndis-nursing',
    icon: Building2,
    badge: 'NDIS Nursing',
  },
  {
    title: 'Wound dressing or ulcer management',
    description: 'Sterile surgical wound dressings, skin tears, pressure injuries, and chronic ulcer healing progression reviews.',
    href: '/wound-care',
    icon: Bandage,
    badge: 'Wound Care',
  },
  {
    title: 'Personal care & daily routine support',
    description: 'Gentle, respectful showering, grooming, dressing, and hygiene support supervised by Registered Nurse coordinators.',
    href: '/personal-care',
    icon: UserCheck,
    badge: 'Personal Care',
  },
  {
    title: 'Physiotherapy & mobile dietitian',
    description: 'In-home physiotherapy for mobility and falls prevention, plus accredited dietitians for aged care and diabetic nutrition.',
    href: '/physiotherapy',
    icon: Activity,
    badge: 'Allied Health',
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
