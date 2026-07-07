import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema, BreadcrumbSchema } from '@/components/schema'
import {
  HeartPulse,
  Bandage,
  Pill,
  Activity,
  PersonStanding,
  HeartHandshake,
  Home,
  Package,
  Stethoscope,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Registered Nurse Home Care Services Perth | Care N Cure',
  },
  description:
    'Explore all in-home clinical care services provided by Registered Nurses at Care N Cure in Perth, WA. Wound dressing, medication reconciliation, assessments and home care packages.',
  alternates: { canonical: 'https://carencure.com.au/services' },
  openGraph: {
    title: 'Registered Nurse Home Care Services Perth | Care N Cure',
    description:
      'Registered Nurses delivering clinical care at home across Perth. View our full range of nursing services.',
    url: 'https://carencure.com.au/services',
  },
}

const services = [
  {
    id: 'service-your-dedicated-nurse',
    title: 'Your Dedicated Nurse',
    description:
      'One client. One nurse coordinator. A single registered nurse who learns your history, builds a relationship with your family, and stays with you across every visit.',
    href: '/your-dedicated-nurse',
    icon: Stethoscope,
    highlight: true,
  },
  {
    id: 'service-post-hospital-care',
    title: 'Post-Hospital Recovery Care',
    description:
      'Safe, supported transitions from hospital to home. Our nurses coordinate with discharge teams and provide clinical oversight during your recovery period.',
    href: '/post-hospital-care',
    icon: HeartPulse,
  },
  {
    id: 'service-private-nursing',
    title: 'Private Nursing at Home',
    description:
      'On-demand registered nurse visits for clinical assessments, health monitoring, injections, catheter care, and acute nursing needs.',
    href: '/private-nursing',
    icon: Activity,
  },
  {
    id: 'service-wound-care',
    title: 'Wound Care & Dressing',
    description:
      'Sterile dressing changes, post-surgical wound management, skin tear repair, chronic ulcer care, and infection prevention using advanced wound products.',
    href: '/wound-care',
    icon: Bandage,
  },
  {
    id: 'service-medication-management',
    title: 'Medication Management',
    description:
      'Registered nurse administration of medications, Webster pack setup, medication reconciliation, and monitoring for side effects and drug interactions.',
    href: '/medication-management',
    icon: Pill,
  },
  {
    id: 'service-mobility-support',
    title: 'Mobility & Rehabilitation Support',
    description:
      'Nurse-supervised mobility exercises, fall prevention assessments, post-orthopaedic rehabilitation support, and safe transfer techniques.',
    href: '/mobility-support',
    icon: PersonStanding,
  },
  {
    id: 'service-companion-care',
    title: 'Companion Care',
    description:
      'Social engagement, emotional support, transport assistance, and daily companionship — all under registered nurse oversight to monitor wellbeing.',
    href: '/companion-care',
    icon: HeartHandshake,
  },
  {
    id: 'service-registered-nurses-clinical-care',
    title: 'Registered Nurses Clinical Care',
    description:
      'Comprehensive clinical nursing assessments, chronic disease monitoring, care planning, and long-term in-home nursing care coordination.',
    href: '/registered-nurses-clinical-care-services',
    icon: Home,
  },
  {
    id: 'service-homecare-packages',
    title: 'Home Care Packages (HCP)',
    description:
      'Government-funded HCP Level 1–4 coordination managed by registered nurses. Transparent fees, no exit charges, and maximum care from your funding.',
    href: '/homecare-packages',
    icon: Package,
  },
  {
    id: 'service-support-at-home',
    title: 'Support at Home',
    description:
      'Daily living assistance including personal care, domestic support, shopping, and social activities — all delivered under registered nurse clinical oversight.',
    href: '/support-at-home',
    icon: Home,
  },
  {
    id: 'service-funded-care',
    title: 'Funded Care Options',
    description:
      'Guidance on accessing NDIS, DVA, and aged care funding streams. We help you navigate the system and maximise your entitlements.',
    href: '/funded-care',
    icon: Package,
  },
]

export default function ServicesPage() {
  return (
    <>
      <ServicePageSchema
        serviceName="Home Nursing Services Perth"
        description="Complete in-home nursing and aged care services by registered nurses across Perth, WA. Post-hospital recovery, wound care, medication management, home care packages, and more."
        url="/services"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
      ]} />

      <PageHeader
        title="Our Nursing Services"
        subtitle="Every service is delivered by — or under the clinical oversight of — a fully registered nurse."
        breadcrumbItems={[{ name: 'Services', href: '/services' }]}
        label="Clinical Home Nursing"
      />

      {/* Intro */}
      <section className="section-py bg-surface">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="section-label mb-2">What We Offer</p>
            <h2 className="text-navy font-bold mb-4">
              One practice. Every nursing need covered.
            </h2>
            <div className="section-divider mx-auto" />
            <p className="text-body text-base leading-relaxed mt-4">
              Care N Cure is a Perth-based in-home nursing practice led by Jinu and Zuhair — two
              registered nurses with a combined 25+ years of clinical experience. Unlike large
              agencies, every service we offer is clinically guided. You get nurses, not support
              workers acting as nurses.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map(({ id, title, description, href, icon: Icon, highlight }) => (
              <Link
                key={id}
                id={id}
                href={href}
                className={`card-base p-6 flex flex-col gap-4 group transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                  highlight ? 'border-2 border-teal-accent/60 bg-white' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-surface group-hover:bg-teal-accent/10 transition-colors">
                    <Icon className="w-5 h-5 text-teal-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-navy font-bold text-base mb-1 leading-snug">
                      {title}
                    </h3>
                    {highlight && (
                      <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-teal-accent/10 text-teal-accent mb-1">
                        Signature Service
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-body text-sm leading-relaxed">{description}</p>
                <div className="flex items-center gap-1 text-teal-accent text-sm font-semibold mt-auto">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why RNs matter */}
      <section className="section-py bg-white border-t border-border">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-8">
            <p className="section-label mb-2">Why It Matters</p>
            <h2 className="text-navy font-bold">Registered Nurse vs. Support Worker</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-base p-6 border-2 border-teal-accent/40">
              <h4 className="text-navy font-bold mb-3">✅ Care N Cure (Registered Nurse)</h4>
              <ul className="space-y-2 text-body text-sm">
                <li>• University-qualified clinical nurse</li>
                <li>• Can administer medications and injections</li>
                <li>• Performs clinical wound assessments</li>
                <li>• Recognises deterioration and escalates immediately</li>
                <li>• Legally accountable for clinical decisions</li>
                <li>• Coordinates directly with your GP and specialists</li>
              </ul>
            </div>
            <div className="card-base p-6 border border-border bg-surface">
              <h4 className="text-navy font-bold mb-3">⚠ Typical Agency (Support Worker)</h4>
              <ul className="space-y-2 text-body text-sm">
                <li>• Certificate III / IV qualification only</li>
                <li>• Cannot administer medications independently</li>
                <li>• Not trained in clinical wound assessment</li>
                <li>• Limited capacity to identify clinical deterioration</li>
                <li>• No clinical accountability</li>
                <li>• Rarely communicates with your treating team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which service you need?"
        description="Call us — you'll speak directly with a registered nurse who will assess your situation and recommend the right care plan. No waiting lists, no call centres."
        secondaryLink={{ text: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
