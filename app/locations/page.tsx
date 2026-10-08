import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { SuburbCard } from '@/components/suburb-card'
import { CTASection } from '@/components/sections/cta'
import { LocalBusinessSchema } from '@/components/schema'
import { Building2, Stethoscope, Landmark, HeartHandshake } from 'lucide-react'

export const metadata: Metadata = {
  title: { absolute: 'Aged Care & Home Nurse Perth Service Areas | Local RN Care | Care N Cure' },
  description: 'Looking for aged care at home or a private registered nurse in Perth? Based at 15 Rockefeller Way, Harrisdale — covering Canning Vale, Southern River, Cockburn, Willetton, Rockingham, Joondalup & 43+ suburbs. 24–48h start. Call 1300 919 663.',
  keywords: [
    'aged care service areas perth',
    'home nurse perth',
    'in home nursing perth',
    'aged care at home perth',
    'community nursing care perth',
    'aged care canning vale',
    'home nurse rockingham',
    'home nurse joondalup',
    'aged care southern river',
    'home nurse cockburn',
    'aged care armadale',
    'private nurse perth',
    'support at home perth',
  ],
  alternates: { canonical: 'https://carencure.com.au/locations' },
  openGraph: {
    title: 'Aged Care & Home Nurse Perth Service Areas | Care N Cure',
    description: 'AHPRA Registered Nurses delivering in-home clinical care & aged care across Perth. Immediate intake from our Harrisdale base. Call 1300 919 663.',
    url: 'https://carencure.com.au/locations',
    type: 'website',
  },
}

// Home-base corridor — closest to 15 Rockefeller Way, Harrisdale (strongest local relevance & fastest intake)
const homeBaseSuburbs = [
  { name: 'Harrisdale', href: '/locations/harrisdale', description: 'Our head office at 15 Rockefeller Way. Immediate same-day response for aged care and nurse visits.', distance: 'Home Base' },
  { name: 'Piara Waters', href: '/locations/piara-waters', description: 'Aged care at home and registered nurse visits, about 5 minutes from our base.', distance: '5 mins from base' },
  { name: 'Southern River', href: '/locations/southern-river', description: 'Local aged care, sterile wound dressings and medication checks for Southern River families.', distance: '8 mins from base' },
  { name: 'Canning Vale', href: '/locations/canning-vale', description: 'Community nursing care, wound dressings and chronic disease monitoring in Canning Vale.', distance: '10 mins from base' },
  { name: 'Willetton', href: '/locations/willetton', description: 'Aged care at home & clinical nursing for Willetton, Riverton and Rossmoyne seniors.', distance: '15 mins from base' },
  { name: 'Cockburn Central', href: '/locations/cockburn-central', description: 'Post-discharge nursing near Fiona Stanley for Success, Atwell, Cockburn and Aubin Grove.', distance: '15 mins from base' },
  { name: 'Bull Creek', href: '/locations/bull-creek', description: 'In-home aged care and clinical recovery in Bull Creek, Leeming and Bateman.', distance: '15 mins from base' },
  { name: 'Thornlie', href: '/locations/thornlie', description: 'Community nursing care and elderly home care in Thornlie, Langford and Crestwood.', distance: '12 mins from base' },
  { name: 'City of Gosnells', href: '/locations/gosnells', description: 'In-home nursing care, wound management, and medication support across the City of Gosnells.', distance: '12 mins from base' },
  { name: 'City of Armadale', href: '/locations/armadale', description: 'Registered nurse visits for post-hospital recovery and chronic condition management in Armadale.', distance: '15 mins from base' },
  { name: 'Kelmscott', href: '/locations/kelmscott', description: 'Community nursing and aged care at home in Kelmscott, Camillo and Champion Lakes.', distance: '15 mins from base' },
  { name: 'Byford', href: '/locations/byford', description: 'In-home aged care nursing for Byford and the Serpentine-Jarrahdale corridor.', distance: '18 mins from base' },
  { name: 'Forrestdale', href: '/locations/forrestdale', description: 'Dedicated registered nurse visits for Forrestdale, Hilbert and Haynes residents.', distance: '10 mins from base' },
]

// Priority Metro Hubs — High client demand and proven search volume
const priorityMetroHubs = [
  { name: 'Rockingham', href: '/locations/rockingham', description: 'Dedicated home nursing, sterile wound dressings, and medication management across Rockingham & Safety Bay.', distance: 'South Coastal Hub' },
  { name: 'Baldivis', href: '/locations/baldivis', description: 'Community nursing care and aged care at home across Baldivis, Wellard and Warnbro.', distance: 'South Metro Hub' },
  { name: 'Melville', href: '/locations/melville', description: 'Support at Home nursing, HCP management and aged care in Melville, Alfred Cove and Myaree.', distance: 'Melville Area' },
  { name: 'Applecross', href: '/locations/applecross', description: 'In-home private nursing visits and post-surgical recovery around Melville, Mount Pleasant and Applecross.', distance: 'Inner South' },
  { name: 'Booragoon', href: '/locations/booragoon', description: 'Post-surgical recovery and wound care near Garden City, Booragoon and Brentwood.', distance: 'Melville Area' },
  { name: 'Fremantle', href: '/locations/fremantle', description: 'Post-hospital transitions and chronic condition management for the Fremantle harbour region.', distance: 'Fremantle Area' },
  { name: 'East Fremantle', href: '/locations/east-fremantle', description: 'Private nursing and post-hospital care in East Fremantle and Bicton. Dedicated RN.', distance: 'Fremantle Area' },
  { name: 'South Perth', href: '/locations/south-perth', description: 'Companion care, respite nursing, and active medication reconciliation in South Perth & Como.', distance: 'Inner South' },
  { name: 'Victoria Park', href: '/locations/victoria-park', description: 'Private nursing, wound care, and medication management in Victoria Park & Burswood.', distance: 'Inner East' },
]

// Western & Northern Corridors
const northernAndWesternSuburbs = [
  { name: 'Joondalup', href: '/locations/joondalup', description: 'Professional in-home nursing across Joondalup, Edgewater, Currambine and Ocean Reef.', distance: 'Northern Hub' },
  { name: 'Claremont', href: '/locations/claremont', description: 'In-home nursing and aged care in Claremont, Karrakatta, and Mount Claremont.', distance: 'Western Suburbs' },
  { name: 'Nedlands', href: '/locations/nedlands', description: 'Clinical nursing recovery care near Sir Charles Gairdner Hospital and Hollywood Private in Nedlands & Dalkeith.', distance: 'Western Suburbs' },
  { name: 'Subiaco', href: '/locations/subiaco', description: 'Sterile wound dressings and medication management for Subiaco, Jolimont and West Perth residents.', distance: 'Western Suburbs' },
  { name: 'Cottesloe', href: '/locations/cottesloe', description: 'Nursing-led companion care and mobility support for seniors in beachside Cottesloe & Swanbourne.', distance: 'Western Suburbs' },
  { name: 'Wembley', href: '/locations/wembley', description: 'Private home nursing care across Wembley, Wembley Downs and West Leederville.', distance: 'Western Suburbs' },
  { name: 'Floreat', href: '/locations/floreat', description: 'Clinical nursing and post-hospital support in Floreat and Perry Lakes.', distance: 'Western Suburbs' },
  { name: 'Duncraig', href: '/locations/duncraig', description: 'In-home clinical nursing care in Duncraig, Carine, and Greenwood.', distance: 'Northern Suburbs' },
  { name: 'Karrinyup', href: '/locations/karrinyup', description: 'Registered nurse home care in Karrinyup, Gwelup, and Innaloo. Post-surgical care.', distance: 'Northern Suburbs' },
  { name: 'Sorrento', href: '/locations/sorrento', description: 'Private nursing and registered nurse home visits across Sorrento, Hillarys, and Marmion.', distance: 'Northern Suburbs' },
  { name: 'Scarborough', href: '/locations/scarborough', description: 'In-home registered nurse visits in Scarborough, Trigg, and City Beach.', distance: 'Coastal North' },
  { name: 'Midland', href: '/locations/midland', description: 'Registered nurse home visits in Midland, Middle Swan, and Guildford.', distance: 'Eastern Corridor' },
]

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
        subtitle="A local Harrisdale nursing team providing aged care at home and registered nurse visits across all metropolitan Perth suburbs."
        breadcrumbItems={[{ name: 'Locations', href: '/locations' }]}
        label="Perth Metropolitan Coverage"
      />

      {/* Immediate Client Intake Callout */}
      <section className="bg-gradient-to-r from-navy via-navy-light to-navy text-white py-6 border-b border-teal-500/30">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <span className="inline-block px-3 py-1 bg-teal-accent/20 text-teal-accent rounded-full text-xs font-bold uppercase tracking-wider mb-1">
                Direct Nurse Intake Hotline
              </span>
              <h3 className="text-lg md:text-xl font-bold text-white">Need an At-Home Nurse or Aged Care in Your Suburb?</h3>
              <p className="text-xs md:text-sm text-slate-300">
                AHPRA Registered Nurses visit your home directly. No GP referral needed · Zero travel fees within 50km · 24–48h assessment.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:1300919663"
                className="inline-flex items-center gap-2 bg-teal-accent hover:bg-teal-dark text-navy font-bold px-5 py-2.5 rounded-xl shadow-md transition-all text-sm"
              >
                Call 1300 919 663
              </a>
              <a
                href="https://wa.me/61481748516"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2.5 rounded-xl border border-white/20 transition-all text-sm"
              >
                WhatsApp RN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Tier 1: Home-Base South-East Corridor */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
              <span>⚡ Priority Area 1 · Head Office Catchment</span>
            </div>
            <h2 className="text-navy font-bold text-2xl md:text-3xl">Immediate Care Corridor: Perth&apos;s South-East</h2>
            <div className="section-divider mx-auto" />
            <p className="text-body text-base leading-relaxed">
              Based at <strong>15 Rockefeller Way, Harrisdale</strong>, our Registered Nurses live and operate right in this corridor. Families in these suburbs receive <strong>same-day / 24-hour intake</strong>, maximum schedule flexibility, and zero travel surcharges.
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

      {/* Priority Tier 2: High-Demand Metro & Coastal Corridors */}
      <section className="section-py bg-surface">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
              <span>🌊 Priority Area 2 · South & Coastal Metro</span>
            </div>
            <h2 className="text-navy font-bold text-2xl md:text-3xl">Southern Corridor & Fremantle Region</h2>
            <div className="section-divider mx-auto" />
            <p className="text-body text-base leading-relaxed">
              Active nursing coverage for high-density patient communities across Rockingham, Baldivis, Fremantle, and the City of Melville. Comprehensive Support at Home packages, complex wound care, and clinical nursing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {priorityMetroHubs.map((suburb) => (
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

      {/* Priority Tier 3: Western & Northern Corridors */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
              <span>🩺 Priority Area 3 · Western Suburbs & North Metro</span>
            </div>
            <h2 className="text-navy font-bold text-2xl md:text-3xl">Northern Corridor & Western Suburbs</h2>
            <div className="section-divider mx-auto" />
            <p className="text-body text-base leading-relaxed">
              Clinical post-operative surgical nursing, hospital transitions from SCGH and Hollywood Private, sterile wound care, and companion elderly care across Joondalup and the western coastal suburbs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {northernAndWesternSuburbs.map((suburb) => (
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
