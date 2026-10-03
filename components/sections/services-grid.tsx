import Link from 'next/link'
import {
  Bandage,
  Pill,
  Heart,
  Activity,
  ArrowRight,
  HeartHandshake,
  Award,
  Home,
  ShieldCheck,
  UserCheck,
  Apple,
  Stethoscope,
} from 'lucide-react'

const services = [
  {
    id: 'service-aged-care',
    icon: HeartHandshake,
    title: 'Aged Care at Home Perth',
    description: 'AHPRA registered nurse-led aged care in-home support, Home Care Package guidance, Support at Home, and daily living coordination.',
    href: '/aged-care-at-home-perth',
    colour: '#E0F2F1',
    iconColour: '#0D9488',
  },
  {
    id: 'service-private-nursing',
    icon: Home,
    title: 'Private Nursing at Home',
    description: 'A registered nurse, at your home, on your schedule. For adults recovering from illness, surgery, or living with chronic conditions.',
    href: '/private-nursing',
    colour: '#EAF6F0',
    iconColour: '#27AE60',
  },
  {
    id: 'service-elderly-care',
    icon: Heart,
    title: 'Elderly Care at Home',
    description: 'Dedicated nurse coordinators for aging parents. Medication safety, health monitoring, chronic disease support, and transparent family updates.',
    href: '/private-nursing/elderly-care',
    colour: '#FDE8EF',
    iconColour: '#C0392B',
  },
  {
    id: 'service-ndis-nursing',
    icon: ShieldCheck,
    title: 'NDIS Nursing Care',
    description: 'Registered nurse support for NDIS participants with complex clinical requirements, continence assessments, and catheter management.',
    href: '/ndis-nursing',
    colour: '#F5EEF8',
    iconColour: '#8E44AD',
  },
  {
    id: 'service-personal-care',
    icon: UserCheck,
    title: 'Personal Care at Home',
    description: 'Gentle, respectful showering, grooming, dressing, and hygiene support supervised by Registered Nurse coordinators.',
    href: '/personal-care',
    colour: '#FFF7ED',
    iconColour: '#EA580C',
  },
  {
    id: 'service-homecare-packages',
    icon: Award,
    title: 'Home Care Packages (HCP)',
    description: 'Coordinated government-funded care (HCP Levels 1–4) partnering with Trilogy Care and self-managed providers with zero lock-in contracts.',
    href: '/homecare-packages',
    colour: '#FEF9E7',
    iconColour: '#D4AC0D',
  },
  {
    id: 'service-physiotherapy',
    icon: Activity,
    title: 'Physiotherapy at Home',
    description: 'Experienced mobile physiotherapists visiting your home across Perth for post-surgery rehab, falls prevention, and mobility restoration.',
    href: '/physiotherapy',
    colour: '#EFF6FF',
    iconColour: '#2563EB',
  },
  {
    id: 'service-nutritionist',
    icon: Apple,
    title: 'Nutritionist & Dietitian',
    description: 'Accredited Practising Dietitians for diabetic meal planning, dysphagia diets, involuntary weight loss, and aged care nutritional care.',
    href: '/nutritionist',
    colour: '#F0FDF4',
    iconColour: '#16A34A',
  },
  {
    id: 'service-wound-care',
    icon: Bandage,
    title: 'Wound Care with Clinical Oversight',
    description: 'Sterile surgical wound dressings, skin tear treatments, chronic ulcer management, and healing progression tracking by AHPRA nurses.',
    href: '/wound-care',
    colour: '#FDF2E9',
    iconColour: '#E67E22',
  },
  {
    id: 'service-medication',
    icon: Pill,
    title: 'Medication Safety & Injections',
    description: 'Webster-pack administration, insulin, Clexane injections, and vital sign monitoring to catch health deterioration early.',
    href: '/medication-management',
    colour: '#F3E8FF',
    iconColour: '#7E22CE',
  },
  {
    id: 'service-hospital-support',
    icon: Stethoscope,
    title: 'Post-Hospital Recovery Care',
    description: 'Smooth, safe transitions from Perth hospitals back home with rapid 24–48h clinical nurse intake and doctor coordination.',
    href: '/post-hospital-care',
    colour: '#E8F4FD',
    iconColour: '#2980B9',
  },
  {
    id: 'service-support-at-home',
    icon: HeartHandshake,
    title: 'Support at Home Program',
    description: 'Navigating the Australian Government new Support at Home system with continuous clinical oversight and zero travel surcharges.',
    href: '/support-at-home',
    colour: '#ECFDF5',
    iconColour: '#059669',
  },
]

export function ServicesGrid() {
  return (
    <section className="section-py bg-surface" aria-labelledby="services-heading">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Comprehensive In-Home Health &amp; Aged Care</p>
          <h2 id="services-heading" className="text-navy mb-4">
            We don&apos;t just &ldquo;send carers&rdquo;
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-body max-w-2xl mx-auto text-lg font-medium">
            We provide nurse-led oversight of your care at home. Explore our specialized services across Perth:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map(({ id, icon: Icon, title, description, href, colour, iconColour }) => (
            <Link
              key={id}
              href={href}
              id={id}
              className="card-base p-7 service-card flex flex-col justify-between group hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-teal-border"
            >
              <div className="flex flex-col gap-4">
                <div
                  className="w-13 h-13 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: colour, width: 50, height: 50 }}
                >
                  <Icon className="w-6 h-6" style={{ color: iconColour }} />
                </div>
                <div>
                  <h3 className="text-navy mb-2 font-bold text-lg leading-tight">{title}</h3>
                  <p className="text-body text-sm leading-relaxed">{description}</p>
                </div>
              </div>
              <div
                className="flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all mt-6 text-teal-text"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
