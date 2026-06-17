import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { CTASection } from '@/components/sections/cta'
import { SuburbPageSchema, FAQPageSchema } from '@/components/schema'
import { CheckCircle2, ShieldCheck, Phone, Stethoscope, HeartPulse } from 'lucide-react'

// Define the suburb data mapping
interface SuburbData {
  id: string
  name: string
  region: string
  nearestHospital: string
  description: string
}

const suburbsMap: Record<string, SuburbData> = {
  nedlands: {
    id: 'nedlands',
    name: 'Nedlands',
    region: 'Western Suburbs',
    nearestHospital: 'Sir Charles Gairdner Hospital & Hollywood Private',
    description: 'Serving Nedlands, Dalkeith, and Crawley with professional in-home clinical nursing. Ideal for post-surgical recovery, wound care, and medication management.',
  },
  subiaco: {
    id: 'subiaco',
    name: 'Subiaco',
    region: 'Western Suburbs',
    nearestHospital: 'Sir Charles Gairdner Hospital & Hollywood Private',
    description: 'Providing in-home registered nurse visits across Subiaco, Jolimont, and Shenton Park. Sterile wound dressing changes and GP clinical coordination.',
  },
  cottesloe: {
    id: 'cottesloe',
    name: 'Cottesloe',
    region: 'Western Suburbs',
    nearestHospital: 'Sir Charles Gairdner Hospital & Hollywood Private',
    description: 'Delivering companion care, medication management, and mobility support for seniors in Cottesloe, Swanbourne, and Peppermint Grove.',
  },
  gosnells: {
    id: 'gosnells',
    name: 'City of Gosnells',
    region: 'Perth South-East',
    nearestHospital: 'Armadale Kelmscott Memorial Hospital',
    description: 'Providing in-home nursing care, wound management, medication support, and post-hospital recovery across the City of Gosnells, including Gosnells, Maddington, Kenwick, and Thornlie.',
  },
  armadale: {
    id: 'armadale',
    name: 'City of Armadale',
    region: 'Perth South-East',
    nearestHospital: 'Armadale Kelmscott Memorial Hospital',
    description: 'Registered nurse home visits for post-surgical recovery, wound care, and chronic condition management across the City of Armadale, including Armadale, Kelmscott, and Byford.',
  },
  rockingham: {
    id: 'rockingham',
    name: 'Rockingham',
    region: 'Perth South',
    nearestHospital: 'Rockingham General Hospital',
    description: 'Professional in-home nursing care, sterile wound dressings, and medication management across Rockingham, Baldivis, and the surrounding southern corridor.',
  },
  applecross: {
    id: 'applecross',
    name: 'Applecross',
    region: 'Perth South',
    nearestHospital: 'Fiona Stanley Hospital & St John of God Murdoch',
    description: 'Providing in-home private nursing visits and post-operative recovery around Applecross, Mount Pleasant, and Ardross.',
  },
  'mount-lawley': {
    id: 'mount-lawley',
    name: 'Mount Lawley',
    region: 'Inner North',
    nearestHospital: 'Royal Perth Hospital',
    description: 'Registered nurse visits, blood pressure monitoring, subcutaneous injections, and complex medication safety in Mount Lawley, Highgate, and Inglewood.',
  },
  fremantle: {
    id: 'fremantle',
    name: 'Fremantle',
    region: 'Fremantle Area',
    nearestHospital: 'Fiona Stanley Hospital & Fremantle Hospital',
    description: 'Post-hospital recovery care, wound management, and nursing-led respite care in Fremantle, East Fremantle, and South Fremantle.',
  },
  'south-perth': {
    id: 'south-perth',
    name: 'South Perth',
    region: 'Inner South',
    nearestHospital: 'Royal Perth Hospital & Fiona Stanley Hospital',
    description: 'Companion care, respite nursing, and active medication reconciliation in South Perth, Como, and Kensington.',
  },
}

// Generate static params for all 10 suburbs
export function generateStaticParams() {
  return Object.keys(suburbsMap).map((suburb) => ({
    suburb,
  }))
}

// Resolve metadata dynamically
export async function generateMetadata({ params }: { params: Promise<{ suburb: string }> }): Promise<Metadata> {
  const { suburb } = await params
  const data = suburbsMap[suburb]
  if (!data) return {}

  return {
    title: `In-Home Registered Nurse ${data.name} WA | The Nurse Who Knows You`,
    description: `Private home nursing services in ${data.name}, Perth WA. Registered nurses providing post-hospital care, wound dressings, and medication reconciliation.`,
    alternates: { canonical: `https://carencure.com.au/locations/${suburb}` },
  }
}

export default async function SuburbPage({ params }: { params: Promise<{ suburb: string }> }) {
  const { suburb } = await params
  const data = suburbsMap[suburb]
  if (!data) {
    notFound()
  }

  const faqs = [
    {
      question: `How quickly can a nurse visit my home in ${data.name}?`,
      answer: `We arrange a telephone or home consult within 24–48 hours of your enquiry. Depending on roster capacity, clinical care visits can begin in ${data.name} within 1 to 2 business days.`,
    },
    {
      question: `Do you coordinate with doctors and hospitals near ${data.name}?`,
      answer: `Yes. We communicate directly with discharge coordinators at ${data.nearestHospital} and coordinate follow-up care with your local general practitioners in the ${data.name} area.`,
    },
    {
      question: 'Will I have the same nurse at every visit?',
      answer: 'Yes. Continuity of care is our priority. We maintain the same registered nurse for every visit so they know your clinical progress inside-out.',
    },
  ]

  return (
    <>
      <SuburbPageSchema suburb={data.name} url={`/locations/${data.id}`} />
      <FAQPageSchema faqs={faqs} />

      <PageHeader
        title={`Home Nursing in ${data.name}`}
        subtitle={`Professional, registered nursing care delivered in the quiet privacy of your ${data.name} home.`}
        breadcrumbItems={[
          { name: 'Locations', href: '/locations' },
          { name: data.name, href: `/locations/${data.id}` },
        ]}
        label={`Perth ${data.region}`}
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="section-label mb-2">Clinical Quality</p>
                <h2 className="text-navy text-3xl font-bold">Your trusted local home nursing team in {data.name}</h2>
                <div className="section-divider" />
                <p className="text-body text-lg leading-relaxed mt-4">
                  {data.description} Our co-founders, Jinu and Zuhair, are registered nurses with over a decade of clinical experience each. We bring strict clinical standards, sterile techniques, and compassionate support straight to your home.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-navy text-2xl font-bold">Why choose us in {data.name}?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-navy font-bold text-sm">Registered Nurses Only</h4>
                      <p className="text-body text-xs mt-1">We do not use support workers or assistants for clinical tasks.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-navy font-bold text-sm">Same Nurse, Every Visit</h4>
                      <p className="text-body text-xs mt-1">Building deep, consistent clinical relationships with zero roster surprises.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-navy font-bold text-sm">Direct GP Updates</h4>
                      <p className="text-body text-xs mt-1">Handovers sent to doctors and surgeons after critical recoveries.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-navy font-bold text-sm">Zero Fabricated Data</h4>
                      <p className="text-body text-xs mt-1">Clear, professional communication, transparent pricing, and real records.</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Local Hospital Continuity Box */}
              <div className="bg-surface p-6 rounded-2xl border border-border space-y-4">
                <h3 className="text-navy text-lg font-bold flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-teal-accent" />
                  Seamless hospital discharge
                </h3>
                <p className="text-body text-xs leading-relaxed">
                  If your loved one is returning to <strong>{data.name}</strong> from <strong>{data.nearestHospital}</strong>, early professional planning is critical. We coordinate directly with local ward teams and discharge coordinators, performing immediate medication checks and setting up dressing routines to prevent costly readmissions.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: 'var(--teal-accent)' }}>
                  <ShieldCheck className="w-4 h-4" /> Supporting Sir Charles Gairdner, Fiona Stanley, Royal Perth, and SJOG clients.
                </div>
              </div>

              {/* Specific Services Offered Checklist */}
              <div className="space-y-4">
                <h3 className="text-navy text-xl font-bold">Services We Deliver in {data.name}:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-body">
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-accent flex-shrink-0" />
                    <span>Post-Hospital Recovery Care</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-accent flex-shrink-0" />
                    <span>Registered Nurses Clinical care Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-accent flex-shrink-0" />
                    <span>Sterile Wound Dressings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-accent flex-shrink-0" />
                    <span>Injections & Vitals Monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-accent flex-shrink-0" />
                    <span>Medication Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-accent flex-shrink-0" />
                    <span>Mobility & Rehab Exercises</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-accent flex-shrink-0" />
                    <span>Companion & Respite Care</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <ContactForm
                  title={`Enquire in ${data.name}`}
                  subtitle={`Provide your details below. A registered nurse co-founder will call you back shortly to discuss nursing support in ${data.name}.`}
                  defaultSuburb={data.name}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Suburb FAQ Section */}
      <section className="section-py bg-surface border-t border-border">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-navy font-bold">Frequently Asked Questions</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="card-base p-6 divide-y divide-border">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4 first:pt-0 last:pb-0">
                <h4 className="text-navy font-bold mb-2">{faq.question}</h4>
                <p className="text-body text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Looking for a private registered nurse in ${data.name}?`}
        description={`Call co-founders Jinu and Zuhair directly. Speak directly with a registered nurse to design a recovery or care plan today.`}
        secondaryLink={{ text: 'Call Us Now', href: '/contact', isPhone: false }}
      />
    </>
  )
}
