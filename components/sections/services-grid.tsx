import Link from 'next/link'
import { Heart, Home, Bandage, Pill, PersonStanding, Smile, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'service-post-hospital',
    icon: Heart,
    title: 'Post-Hospital Recovery Care',
    description: 'We support your loved one from discharge to full recovery at home — wound checks, medication oversight, vital signs, and family updates.',
    href: '/post-hospital-care',
    colour: '#E8F4FD',
    iconColour: '#2980B9',
  },
  {
    id: 'service-private-nursing',
    icon: Home,
    title: 'Private Nursing at Home',
    description: 'A registered nurse, at your home, on your schedule. For adults recovering from illness, surgery, or living with a chronic condition.',
    href: '/private-nursing',
    colour: '#EAF6F0',
    iconColour: '#27AE60',
  },
  {
    id: 'service-wound-care',
    icon: Bandage,
    title: 'Wound Care & Dressing',
    description: 'Professional wound assessment and dressing by AHPRA registered nurses — surgical wounds, pressure injuries, leg ulcers, diabetic foot wounds.',
    href: '/wound-care',
    colour: '#FDF2E9',
    iconColour: '#E67E22',
  },
  {
    id: 'service-medication',
    icon: Pill,
    title: 'Medication Management',
    description: 'Safe administration, monitoring, and family guidance for complex medication regimes — especially important post-discharge.',
    href: '/medication-management',
    colour: '#F5EEF8',
    iconColour: '#8E44AD',
  },
  {
    id: 'service-mobility',
    icon: PersonStanding,
    title: 'Mobility & Rehabilitation',
    description: 'In-home mobility support after surgery or illness — helping your loved one safely regain strength, balance, and independence.',
    href: '/mobility-support',
    colour: '#FEFCE8',
    iconColour: '#D97706',
  },
  {
    id: 'service-companion',
    icon: Smile,
    title: 'Companion Care',
    description: 'Nursing-led companionship and social support for elderly Perth residents — because connection is part of good care.',
    href: '/companion-care',
    colour: '#FDE8EF',
    iconColour: '#C0392B',
  },
]

export function ServicesGrid() {
  return (
    <section className="section-py bg-surface" aria-labelledby="services-heading">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="section-label mb-3">What We Offer</p>
          <h2 id="services-heading" className="text-navy mb-4">In-Home Nursing Services</h2>
          <div className="section-divider mx-auto" />
          <p className="text-body max-w-2xl mx-auto text-lg">
            Every service is delivered by AHPRA registered nurses — not support workers, not agency staff.
            Qualified clinical care at home, with the consistency and dignity every Australian deserves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ id, icon: Icon, title, description, href, colour, iconColour }) => (
            <Link
              key={id}
              href={href}
              id={id}
              className="card-base p-6 service-card flex flex-col gap-4 group"
            >
              <div
                className="w-13 h-13 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: colour, width: 52, height: 52 }}
              >
                <Icon className="w-6 h-6" style={{ color: iconColour }} />
              </div>
              <div className="flex-1">
                <h3 className="text-navy mb-2" style={{ fontSize: '1.05rem' }}>{title}</h3>
                <p className="text-body text-sm leading-relaxed">{description}</p>
              </div>
              <div
                className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                style={{ color: 'var(--teal-accent)' }}
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
