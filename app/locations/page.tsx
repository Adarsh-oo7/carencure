import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { SuburbCard } from '@/components/suburb-card'
import { CTASection } from '@/components/sections/cta'
import { LocalBusinessSchema } from '@/components/schema'
import { Building2, Stethoscope, Landmark, HeartHandshake } from 'lucide-react'

export const metadata: Metadata = {
  title: { absolute: 'Aged Care & Home Nursing Service Areas Perth WA | Care N Cure' },
  description: 'Local aged care at home & community nursing across Perth. Based in Harrisdale — serving Canning Vale, Southern River, Armadale, Gosnells, Cockburn, Willetton & 50+ suburbs. Call 1300 919 663.',
  alternates: { canonical: 'https://carencure.com.au/locations' },
}

// Home-base corridor — closest to 15 Rockefeller Way, Harrisdale (strongest local relevance)
const homeBaseSuburbs = [
  { name: 'Harrisdale', href: '/locations/harrisdale', description: 'Our home base at 15 Rockefeller Way. Fastest response for aged care and nurse visits.', distance: 'Home Base' },
  { name: 'Piara Waters', href: '/locations/piara-waters', description: 'Aged care at home and registered nurse visits, about 5 minutes from our base.', distance: 'Home Base' },
  { name: 'Southern River', href: '/locations/southern-river', description: 'Local aged care, medication checks and wound care for Southern River families.', distance: 'Home Base' },
  { name: 'Forrestdale', href: '/locations/forrestdale', description: 'Same dedicated nurse every visit for Forrestdale and Hilbert seniors.', distance: 'Home Base' },
  { name: 'Canning Vale', href: '/locations/canning-vale', description: 'Community nursing care, wound dressings and chronic disease monitoring in Canning Vale.', distance: 'Perth South-East' },
  { name: 'Thornlie', href: '/locations/thornlie', description: 'Community nursing care and elderly home care in Thornlie and Langford.', distance: 'Perth South-East' },
  { name: 'City of Gosnells', href: '/locations/gosnells', description: 'In-home nursing care, wound management, and medication support across the City of Gosnells.', distance: 'Perth South-East' },
  { name: 'City of Armadale', href: '/locations/armadale', description: 'Registered nurse visits for post-hospital recovery and chronic condition management in Armadale.', distance: 'Perth South-East' },
  { name: 'Kelmscott', href: '/locations/kelmscott', description: 'Community nursing and aged care at home in Kelmscott, Camillo and Champion Lakes.', distance: 'Perth South-East' },
  { name: 'Byford', href: '/locations/byford', description: 'In-home aged care nursing for Byford and the Serpentine-Jarrahdale area.', distance: 'Perth South-East' },
  { name: 'Willetton', href: '/locations/willetton', description: 'Aged care at home for Willetton, Riverton and Rossmoyne seniors.', distance: 'Perth South-East' },
  { name: 'Cockburn Central', href: '/locations/cockburn-central', description: 'Post-discharge nursing near Fiona Stanley for Success, Atwell and Aubin Grove.', distance: 'Perth South' },
]

const primarySuburbs = [
  { name: 'Nedlands', href: '/locations/nedlands', description: 'Clinical nursing recovery care near Sir Charles Gairdner Hospital and Hollywood Private.', distance: 'Western Suburbs' },
  { name: 'Subiaco', href: '/locations/subiaco', description: 'Sterile wound dressings and medication management for Subiaco and West Perth residents.', distance: 'Western Suburbs' },
  { name: 'Cottesloe', href: '/locations/cottesloe', description: 'Nursing-led companion care and mobility support for seniors in beachside Cottesloe.', distance: 'Western Suburbs' },
  { name: 'Bull Creek', href: '/locations/bull-creek', description: 'In-home aged care in Bull Creek, Leeming and Bateman near Fiona Stanley.', distance: 'Perth South' },
  { name: 'Melville', href: '/locations/melville', description: 'Support at Home nursing and aged care in Melville, Alfred Cove and Myaree.', distance: 'Perth South' },
  { name: 'Rockingham', href: '/locations/rockingham', description: 'Professional home nursing, wound care, and medication management across the Rockingham area.', distance: 'Perth South' },
  { name: 'Baldivis', href: '/locations/baldivis', description: 'Community nursing care and aged care at home in Baldivis, Wellard and Warnbro.', distance: 'Perth South' },
  { name: 'Applecross', href: '/locations/applecross', description: 'In-home private nursing visits and post-surgical recovery around Melville and Applecross.', distance: 'Perth South' },
  { name: 'Mount Lawley', href: '/locations/mount-lawley', description: 'Registered nurse visits, blood pressure monitoring, and injection administration.', distance: 'Inner North' },
  { name: 'Fremantle', href: '/locations/fremantle', description: 'Post-hospital transitions and chronic condition management for the Fremantle region.', distance: 'Fremantle Area' },
  { name: 'South Perth', href: '/locations/south-perth', description: 'Companion care, respite nursing, and active medication reconciliation in South Perth.', distance: 'Inner South' },
]

const additionalSuburbs = [
  { name: 'Claremont', href: '/locations/claremont', description: 'In-home nursing and aged care in Claremont, Karrakatta, and Mount Claremont.', distance: 'Western Suburbs' },
  { name: 'Inglewood', href: '/locations/inglewood', description: 'Registered nurse visits, sterile dressings, and monitoring in Inglewood and Maylands.', distance: 'Inner North' },
  { name: 'Booragoon', href: '/locations/booragoon', description: 'Post-surgical recovery and wound care near Garden City, Booragoon and Myaree.', distance: 'Perth South' },
  { name: 'Wembley', href: '/locations/wembley', description: 'Private home nursing care across Wembley and Wembley Downs.', distance: 'Western Suburbs' },
  { name: 'Floreat', href: '/locations/floreat', description: 'Clinical nursing and post-hospital support in Floreat and Perry Lakes.', distance: 'Western Suburbs' },
  { name: 'Mount Pleasant', href: '/locations/mount-pleasant', description: 'Registered nurse visits in Mount Pleasant and Brentwood — medication and wound care.', distance: 'Perth South' },
  { name: 'Leederville', href: '/locations/leederville', description: 'Clinical nursing, post-operative support, and medication checks in Leederville.', distance: 'Inner North' },
  { name: 'Victoria Park', href: '/locations/victoria-park', description: 'Private nursing, wound care, and medication management in Victoria Park.', distance: 'Inner East' },
  { name: 'Joondalup', href: '/locations/joondalup', description: 'Professional in-home nursing across Joondalup, Edgewater, and Currambine.', distance: 'Northern Suburbs' },
  { name: 'Midland', href: '/locations/midland', description: 'Registered nurse home visits in Midland, Middle Swan, and Guildford.', distance: 'Eastern Suburbs' },
  { name: 'Scarborough', href: '/locations/scarborough', description: 'In-home registered nurse visits in Scarborough, Trigg, and Wembley Downs.', distance: 'Northern Suburbs' },
  { name: 'Sorrento', href: '/locations/sorrento', description: 'Private nursing and registered nurse home visits across Sorrento, Hillarys, and Marmion.', distance: 'Northern Suburbs' },
  { name: 'Duncraig', href: '/locations/duncraig', description: 'In-home clinical nursing care in Duncraig, Carine, and Greenwood.', distance: 'Northern Suburbs' },
  { name: 'Karrinyup', href: '/locations/karrinyup', description: 'Registered nurse home care in Karrinyup, Gwelup, and Innaloo. Post-surgical care.', distance: 'Northern Suburbs' },
  { name: 'Como', href: '/locations/como', description: 'In-home registered nurse visits in Como, Manning, and Salter Point. Private nursing.', distance: 'Inner South' },
  { name: 'Bicton', href: '/locations/bicton', description: 'Clinical home nursing in Bicton, Palmyra, and East Fremantle. Sterile wound dressing.', distance: 'Fremantle Area' },
  { name: 'East Fremantle', href: '/locations/east-fremantle', description: 'Private nursing and post-hospital care in East Fremantle and Bicton. Dedicated RN.', distance: 'Fremantle Area' },
  { name: 'Shenton Park', href: '/locations/shenton-park', description: 'Registered nurse home visits in Shenton Park, Daglish, and Subiaco. Complex wound care.', distance: 'Western Suburbs' },
  { name: 'Dalkeith', href: '/locations/dalkeith', description: 'In-home private nursing care in Dalkeith, Nedlands, and Claremont. Registered nurses.', distance: 'Western Suburbs' },
  { name: 'City Beach', href: '/locations/city-beach', description: 'In-home registered nurse visits in City Beach and Floreat. Post-surgical recovery.', distance: 'Western Suburbs' },
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
        title="Aged Care & Home Nursing Across Perth"
        subtitle="A local Harrisdale nursing team providing aged care at home and registered nurse visits across the Perth metro area."
        breadcrumbItems={[{ name: 'Locations', href: '/locations' }]}
        label="Perth Metro Coverage"
      />

      {/* Home-base corridor */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="section-label mb-2">Our Home Base · 15 Rockefeller Way, Harrisdale</p>
            <h2 className="text-navy font-bold">Local aged care for Perth&apos;s south-east</h2>
            <div className="section-divider mx-auto" />
            <p className="text-body text-base leading-relaxed">
              Our nurses live and work in this corridor. These suburbs are closest to our Harrisdale base, so families get the fastest intake, the most flexible visit times, and the same nurse every time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {homeBaseSuburbs.map((suburb) => (
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

      {/* Main Service Area Intro & Suburb Grid */}
      <section className="section-py bg-surface">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="section-label mb-2">Perth WA Coverage</p>
            <h2 className="text-navy font-bold">Across the wider Perth metro area</h2>
            <div className="section-divider mx-auto" />
            <p className="text-body text-base leading-relaxed">
              We also visit families across the southern, western, northern and inner suburbs of Perth. If your suburb isn&apos;t listed, call us — we likely still cover it.
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
                A seamless discharge relies on clear communication. Jinu has spent over a decade working in hospital settings and knows exactly how to manage medical handovers. We speak directly to hospital coordinators to make sure everything is in place before you arrive home.
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
