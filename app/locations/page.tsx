import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { SuburbCard } from '@/components/suburb-card'
import { CTASection } from '@/components/sections/cta'
import { LocalBusinessSchema } from '@/components/schema'
import { Building2, Stethoscope, Landmark, HeartHandshake } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Home Nursing Service Areas Perth | Care N Cure',
  description: 'Care N Cure Registered Nurses provide in-home clinical care across Perth suburbs, including Nedlands, Subiaco, Cottesloe, Harrisdale, and Joondalup.',
  alternates: { canonical: 'https://carencure.com.au/locations' },
}

const suburbsList = [
  { name: 'Nedlands', href: '/locations/nedlands', description: 'Clinical nursing recovery care near Sir Charles Gairdner Hospital and Hollywood Private.', distance: 'Western Suburbs' },
  { name: 'Subiaco', href: '/locations/subiaco', description: 'Sterile wound dressings and medication management for Subiaco and West Perth residents.', distance: 'Western Suburbs' },
  { name: 'Cottesloe', href: '/locations/cottesloe', description: 'Nursing-led companion care and mobility support for seniors in beachside Cottesloe.', distance: 'Western Suburbs' },
  { name: 'Joondalup', href: '/locations/joondalup', description: 'Supporting hospital transitions and complex care plans near Joondalup Health Campus.', distance: 'Perth North' },
  { name: 'Applecross', href: '/locations/applecross', description: 'In-home private nursing visits and post-surgical recovery around Melville and Applecross.', distance: 'Perth South' },
  { name: 'Mount Lawley', href: '/locations/mount-lawley', description: 'Registered nurse visits, blood pressure monitoring, and injection administration.', distance: 'Inner North' },
  { name: 'Harrisdale', href: '/locations/harrisdale', description: 'Our local office base — offering rapid-response community nursing to local families.', distance: 'Perth South' },
  { name: 'Fremantle', href: '/locations/fremantle', description: 'Post-hospital transitions and chronic condition management for the Fremantle region.', distance: 'Fremantle Area' },
  { name: 'Midland', href: '/locations/midland', description: 'Clinical nursing visits, skin tear repair, and complex Webster-pack setups in Midland.', distance: 'Perth East' },
  { name: 'South Perth', href: '/locations/south-perth', description: 'Companion care, respite nursing, and active medication reconciliation in South Perth.', distance: 'Inner South' },
]

const hospitalPartners = [
  { name: 'Fiona Stanley Hospital', location: 'Murdoch', icon: Building2, desc: 'Coordinating safe discharges for south metro surgical and medical patients.' },
  { name: 'Sir Charles Gairdner Hospital', location: 'Nedlands', icon: Stethoscope, desc: 'Liaising with western suburbs discharge teams for orthopaedic and cardiac care.' },
  { name: 'Royal Perth Hospital', location: 'Perth CBD', icon: Landmark, desc: 'Transition support for central and eastern Perth post-surgical recovery.' },
  { name: 'Joondalup Health Campus', location: 'Joondalup', icon: HeartHandshake, desc: 'Home visits and wound care for discharged northern corridor patients.' },
]

export default function LocationsPage() {
  return (
    <>
      <LocalBusinessSchema />

      <PageHeader
        title="Our Service Areas"
        subtitle="Registered nurses providing in-home clinical care across the entire Perth metro region."
        breadcrumbItems={[{ name: 'Locations', href: '/locations' }]}
        label="Perth Metro Coverage"
      />

      {/* Main Service Area Intro & Suburb Grid */}
      <section className="section-py bg-surface">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="section-label mb-2">Perth WA Coverage</p>
            <h2 className="text-navy font-bold">Nursing where you need it</h2>
            <div className="section-divider mx-auto" />
            <p className="text-body text-base leading-relaxed">
              Based in Harrisdale, our registered nursing founders travel across Perth to provide high-quality, professional clinical care directly in your home. Below are our key focus suburbs, but we cover all adjacent metro areas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {suburbsList.map((suburb) => (
              <SuburbCard
                key={suburb.name}
                name={suburb.name}
                href={suburb.href}
                description={suburb.description}
                distance={suburb.distance}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Discharges and Partnerships */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <p className="section-label mb-2">Hospital Integration</p>
              <h2 className="text-navy text-3xl font-bold">Coordinating with Perth&apos;s leading hospitals</h2>
              <div className="section-divider" />
              <p className="text-body text-sm leading-relaxed">
                A seamless discharge relies on clear communication. Jinu and Zuhair have spent over a decade working in hospital settings and know exactly how to manage medical handovers. We speak directly to hospital coordinators to make sure everything is in place before you arrive home.
              </p>
              <p className="text-body text-sm font-semibold text-navy">
                We coordinate transitions with all public and private Perth hospitals.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {hospitalPartners.map((hospital) => {
                  const Icon = hospital.icon
                  return (
                    <div key={hospital.name} className="card-base p-6 flex flex-col gap-3">
                      <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center text-teal-accent flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-navy font-bold text-sm">{hospital.name}</h4>
                        <p className="text-xs font-semibold" style={{ color: 'var(--teal-accent)' }}>{hospital.location}</p>
                        <p className="text-body text-xs mt-2 leading-relaxed">{hospital.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection
        title="Don't see your suburb listed? We likely still cover it."
        description="Call us directly to confirm our availability in your area and discuss your home nursing needs."
        secondaryLink={{ text: 'Send an enquiry', href: '/contact' }}
      />
    </>
  )
}
