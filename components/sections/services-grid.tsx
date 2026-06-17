import Link from 'next/link'
import { Bandage, Pill, Heart, Activity, ArrowRight, HeartHandshake, Award, Home } from 'lucide-react'

const services = [
  {
    id: 'service-clinical-care',
    icon: Heart,
    title: 'Registered Nurses Clinical care Services',
    description: 'Professional, registered nursing care: assessments, clinical tasks, chronic disease care, and advocacy.',
    href: '/registered-nurses-clinical-care-services',
    colour: '#FDE8EF',
    iconColour: '#C0392B',
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
    id: 'service-support-at-home',
    icon: HeartHandshake,
    title: 'Support at home',
    description: 'Help with daily living, personal care, domestic assistance, and social companionship under clinical oversight.',
    href: '/support-at-home',
    colour: '#E0F2F1',
    iconColour: '#0D9488',
  },
  {
    id: 'service-homecare-packages',
    icon: Award,
    title: 'Homecare packages',
    description: 'Coordinated government-funded care (HCP Levels 1–4) managed by experienced registered nurse case managers.',
    href: '/homecare-packages',
    colour: '#FEF9E7',
    iconColour: '#D4AC0D',
  },
  {
    id: 'service-wound-care',
    icon: Bandage,
    title: 'Wound Care With Clinical Oversight',
    description: 'Not just dressing changes—ongoing monitoring, healing progress review, and escalation when needed.',
    href: '/wound-care',
    colour: '#FDF2E9',
    iconColour: '#E67E22',
  },
  {
    id: 'service-medication',
    icon: Pill,
    title: 'Medication & Health Monitoring',
    description: 'Ensuring changes are noticed early, not after a hospital visit.',
    href: '/medication-management',
    colour: '#F5EEF8',
    iconColour: '#8E44AD',
  },
  {
    id: 'service-hospital-support',
    icon: Activity,
    title: 'Hospital Support & Discharge Planning',
    description: 'Smooth transitions from hospital back home with nurse follow-up.',
    href: '/post-hospital-care',
    colour: '#E8F4FD',
    iconColour: '#2980B9',
  },
]

export function ServicesGrid() {
  return (
    <section className="section-py bg-surface" aria-labelledby="services-heading">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="section-label mb-3">More Than Just Home Care</p>
          <h2 id="services-heading" className="text-navy mb-4">
            We don&apos;t just &ldquo;send carers&rdquo;
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-body max-w-2xl mx-auto text-lg font-medium">
            We provide nurse-led oversight of your care at home. That means:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map(({ id, icon: Icon, title, description, href, colour, iconColour }) => (
            <Link
              key={id}
              href={href}
              id={id}
              className="card-base p-8 service-card flex flex-col justify-between group"
            >
              <div className="flex flex-col gap-4">
                <div
                  className="w-13 h-13 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: colour, width: 52, height: 52 }}
                >
                  <Icon className="w-6 h-6" style={{ color: iconColour }} />
                </div>
                <div>
                  <h3 className="text-navy mb-2" style={{ fontSize: '1.2rem' }}>{title}</h3>
                  <p className="text-body text-base leading-relaxed">{description}</p>
                </div>
              </div>
              <div
                className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all mt-6"
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
