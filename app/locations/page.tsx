import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { SuburbCard } from '@/components/suburb-card'
import { CTASection } from '@/components/sections/cta'
import { LocalBusinessSchema } from '@/components/schema'
import { Building2, Stethoscope, Landmark, HeartHandshake } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Areas | Home Nursing Across Perth | Care N Cure',
  description: 'We provide registered nurse home care across Perth & surrounding suburbs. Find your area & book a free assessment. Nedlands, Fremantle, Subiaco & more.',
  alternates: { canonical: 'https://carencure.com.au/locations' },
}

const primarySuburbs = [
  { name: 'Nedlands', href: '/locations/nedlands', description: 'Clinical nursing recovery care near Sir Charles Gairdner Hospital and Hollywood Private.', distance: 'Western Suburbs' },
  { name: 'Subiaco', href: '/locations/subiaco', description: 'Sterile wound dressings and medication management for Subiaco and West Perth residents.', distance: 'Western Suburbs' },
  { name: 'Cottesloe', href: '/locations/cottesloe', description: 'Nursing-led companion care and mobility support for seniors in beachside Cottesloe.', distance: 'Western Suburbs' },
  { name: 'City of Gosnells', href: '/locations/gosnells', description: 'In-home nursing care, wound management, and medication support across the City of Gosnells.', distance: 'Perth South-East' },
  { name: 'City of Armadale', href: '/locations/armadale', description: 'Registered nurse visits for post-hospital recovery and chronic condition management in Armadale.', distance: 'Perth South-East' },
  { name: 'Rockingham', href: '/locations/rockingham', description: 'Professional home nursing, wound care, and medication management across the Rockingham area.', distance: 'Perth South' },
  { name: 'Applecross', href: '/locations/applecross', description: 'In-home private nursing visits and post-surgical recovery around Melville and Applecross.', distance: 'Perth South' },
  { name: 'Mount Lawley', href: '/locations/mount-lawley', description: 'Registered nurse visits, blood pressure monitoring, and injection administration.', distance: 'Inner North' },
  { name: 'Fremantle', href: '/locations/fremantle', description: 'Post-hospital transitions and chronic condition management for the Fremantle region.', distance: 'Fremantle Area' },
  { name: 'South Perth', href: '/locations/south-perth', description: 'Companion care, respite nursing, and active medication reconciliation in South Perth.', distance: 'Inner South' },
]

const additionalSuburbs = [
  { name: 'Claremont', href: '/locations/claremont', description: 'In-home nursing and aged care in Claremont, Karrakatta, and Mount Claremont.', distance: 'Western Suburbs' },
  { name: 'Inglewood', href: '/locations/inglewood', description: 'Registered nurse visits, sterile dressings, and monitoring in Inglewood and Maylands.', distance: 'Inner North' },
  { name: 'Booragoon', href: '/locations/booragoon', description: 'Post-surgical recovery and wound care near Garden City, Booragoon and Myaree.', distance: 'Perth South' },
  { name: 'Canning Vale', href: '/locations/canning-vale', description: 'Home nursing, wound dressings, and chronic disease monitoring in Canning Vale.', distance: 'Perth South-East' },
  { name: 'Wembley', href: '/locations/wembley', description: 'Private home nursing care across Wembley and Wembley Downs.', distance: 'Western Suburbs' },
  { name: 'Floreat', href: '/locations/floreat', description: 'Clinical nursing and post-hospital support in Floreat and Perry Lakes.', distance: 'Western Suburbs' },
  { name: 'Mount Pleasant', href: '/locations/mount-pleasant', description: 'Registered nurse visits in Mount Pleasant and Brentwood — medication and wound care.', distance: 'Perth South' },
  { name: 'Leederville', href: '/locations/leederville', description: 'Clinical nursing, post-operative support, and medication checks in Leederville.', distance: 'Inner North' },
  { name: 'Victoria Park', href: '/locations/victoria-park', description: 'Private nursing, wound care, and medication management in Victoria Park.', distance: 'Inner East' },
  { name: 'Joondalup', href: '/locations/joondalup', description: 'Professional in-home nursing across Joondalup, Edgewater, and Currambine.', distance: 'Northern Suburbs' },
  { name: 'Midland', href: '/locations/midland', description: 'Registered nurse home visits in Midland, Middle Swan, and Guildford.', distance: 'Eastern Suburbs' },
]

// Combined for components that need flat list
const suburbsList = [...primarySuburbs, ...additionalSuburbs]


const hospitalPartners = [
  { name: 'Fiona Stanley Hospital', location: 'Murdoch', icon: Building2, desc: 'Coordinating safe discharges for south metro surgical and medical patients.' },
  { name: 'Sir Charles Gairdner Hospital', location: 'Nedlands', icon: Stethoscope, desc: 'Liaising with western suburbs discharge teams for orthopaedic and cardiac care.' },
  { name: 'Royal Perth Hospital', location: 'Perth CBD', icon: Landmark, desc: 'Transition support for central and eastern Perth post-surgical recovery.' },
  { name: 'Rockingham General Hospital', location: 'Rockingham', icon: HeartHandshake, desc: 'Home visits and wound care for discharged southern corridor patients.' },
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
              Based in Perth, our registered nursing founders travel across Perth to provide high-quality, professional clinical care directly in your home. Below are our key focus suburbs, but we cover all adjacent metro areas.
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
