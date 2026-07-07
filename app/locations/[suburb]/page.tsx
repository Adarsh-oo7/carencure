import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { CTASection } from '@/components/sections/cta'
import { SuburbPageSchema, FAQPageSchema, BreadcrumbSchema } from '@/components/schema'
import { CheckCircle2, ShieldCheck, Phone, Stethoscope, HeartPulse } from 'lucide-react'

// Define the suburb data mapping
interface SuburbData {
  id: string
  name: string
  region: string
  nearestHospital: string
  description: string
}

function getLocalText(suburb: string, name: string, region: string): string {
  const regionPhrases: Record<string, string> = {
    'Western Suburbs': `We provide regular home visits by Registered Nurses across the Western Suburbs, helping residents manage clinical needs safely in their own homes.`,
    'Perth South-East': `Our nursing team covers the South-East metropolitan area, offering clinical assessments, wound care, and medication support directly in the community.`,
    'Perth South': `For residents in Perth's southern corridor, our Registered Nurses deliver professional in-home clinical care tailored to your recovery and health management goals.`,
    'Inner North': `We service the inner-north suburbs, providing essential clinical services including vital signs tracking, wound management, and support coordination.`,
    'Fremantle Area': `Our Registered Nurses travel throughout the Fremantle region, delivering qualified clinical care to support post-hospital recovery and independent living.`,
    'Inner South': `We offer clinical home nursing visits across the inner-south suburbs, coordinating care to help clients maintain health and comfort at home.`,
    'Inner East': `Our in-home nursing services are available to families in the inner-east region, providing professional clinical support by qualified Registered Nurses.`,
    'Northern Suburbs': `We extend our professional clinical nursing visits to the northern suburbs, ensuring access to registered nursing care close to home.`,
    'Eastern Suburbs': `Our clinical home nursing support covers the eastern corridor, providing registered nurse visits for wound management, injections, and health checks.`,
  };

  const basePhrase = regionPhrases[region] || `Our clinical home nursing services are available to residents across the Perth metropolitan area.`;
  return `At Care N Cure, we are committed to delivering honest, professional nursing care. ${basePhrase} We work in cooperation with your treating doctors and local healthcare services to support your ongoing recovery in ${name}.`;
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
  claremont: {
    id: 'claremont',
    name: 'Claremont',
    region: 'Western Suburbs',
    nearestHospital: 'Sir Charles Gairdner Hospital & Hollywood Private',
    description: 'In-home clinical nursing and aged care support in Claremont, Karrakatta, and Mount Claremont. Post-surgical wound care, medication checks, and nursing assessments.',
  },
  inglewood: {
    id: 'inglewood',
    name: 'Inglewood',
    region: 'Inner North',
    nearestHospital: 'Royal Perth Hospital',
    description: 'Registered nurse visits, sterile dressings, injections, and blood pressure monitoring in Inglewood, Maylands, and Bedford.',
  },
  booragoon: {
    id: 'booragoon',
    name: 'Booragoon',
    region: 'Perth South',
    nearestHospital: 'Fiona Stanley Hospital & St John of God Murdoch',
    description: 'In-home registered nurse visits across Booragoon, Myaree, and Kardinya. Post-surgical recovery, wound care, and medication management close to Garden City.',
  },
  'canning-vale': {
    id: 'canning-vale',
    name: 'Canning Vale',
    region: 'Perth South-East',
    nearestHospital: 'Fiona Stanley Hospital',
    description: 'Home nursing care in Canning Vale, Willetton, and Riverton. Registered nurses providing post-hospital support, wound dressings, and chronic disease monitoring.',
  },
  wembley: {
    id: 'wembley',
    name: 'Wembley',
    region: 'Western Suburbs',
    nearestHospital: 'Sir Charles Gairdner Hospital',
    description: 'Private home nursing care across Wembley, Jolimont, and Wembley Downs. Wound care, health assessments, and medication coordination.',
  },
  floreat: {
    id: 'floreat',
    name: 'Floreat',
    region: 'Western Suburbs',
    nearestHospital: 'Sir Charles Gairdner Hospital',
    description: 'Clinical nursing and home care in Floreat and Perry Lakes. Post-hospital support, companion care, and mobility supervision by registered nurses.',
  },
  'mount-pleasant': {
    id: 'mount-pleasant',
    name: 'Mount Pleasant',
    region: 'Perth South',
    nearestHospital: 'Fiona Stanley Hospital & St John of God Murdoch',
    description: 'Professional in-home registered nurse visits in Mount Pleasant and Brentwood. Medication management, wound dressings, and chronic condition monitoring.',
  },
  leederville: {
    id: 'leederville',
    name: 'Leederville',
    region: 'Inner North',
    nearestHospital: 'Sir Charles Gairdner Hospital & Royal Perth Hospital',
    description: 'Clinical nursing services, post-operative support, and medication checks in Leederville, West Leederville, and North Perth.',
  },
  'victoria-park': {
    id: 'victoria-park',
    name: 'Victoria Park',
    region: 'Inner East',
    nearestHospital: 'Royal Perth Hospital',
    description: 'In-home nursing services across Victoria Park, Lathlain, and East Victoria Park. Private nursing, wound care, and medication management by registered nurses.',
  },
  joondalup: {
    id: 'joondalup',
    name: 'Joondalup',
    region: 'Northern Suburbs',
    nearestHospital: 'Joondalup Health Campus',
    description: 'Professional in-home nursing care across Joondalup, Edgewater, and Currambine. Post-hospital recovery and clinical nursing from the registered nurse team at Care N Cure.',
  },
  midland: {
    id: 'midland',
    name: 'Midland',
    region: 'Eastern Suburbs',
    nearestHospital: 'St John of God Midland Public & Private Hospital',
    description: 'Registered nurse home visits in Midland, Middle Swan, and Guildford. Wound care, medication management, and post-hospital recovery support in the eastern corridor.',
  },
}

// Generate static params for all suburbs
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
    title: {
      absolute: `Registered Nurse ${data.name} | Home Nursing Perth WA`,
    },
    description: `In-home clinical care by Registered Nurses in ${data.name}, Perth WA. Wound dressings, injections, and post-hospital recovery support by qualified RNs.`,
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
      question: `Do you provide nursing services in ${data.name}?`,
      answer: `Yes. Care N Cure registered nurses travel to ${data.name} and the surrounding area. Call us on 1300 919 663 to confirm availability and book a free initial assessment.`,
    },
    {
      question: 'Are your nurses fully registered with AHPRA?',
      answer: 'Yes. All nurses at Care N Cure are registered with the Australian Health Practitioner Regulation Agency (AHPRA) and hold current registration as Registered Nurses. Our co-founders Jinu and Zuhair have 10+ and 15+ years of clinical experience respectively.',
    },
    {
      question: `How quickly can a nurse visit me in ${data.name}?`,
      answer: `We aim to arrange an initial assessment within 24–48 hours of enquiry for clients in ${data.name}. For urgent post-discharge situations, call us directly and we will prioritise your case.`,
    },
    {
      question: 'What does in-home nursing cost?',
      answer: 'We provide clear, transparent pricing during your free initial assessment. Private nursing is available as a private-pay service. We also support clients with Home Care Packages (HCP), NDIS, and DVA funding. Call us to discuss your situation.',
    },
  ]

  return (
    <>
      <SuburbPageSchema suburb={data.name} url={`/locations/${suburb}`} />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Locations', href: '/locations' },
        { name: data.name, href: `/locations/${suburb}` },
      ]} />

      <PageHeader
        title={`Home Nursing in ${data.name}`}
        subtitle={`Registered nurses providing in-home clinical care across ${data.name} and surrounding Perth suburbs.`}
        breadcrumbItems={[
          { name: 'Locations', href: '/locations' },
          { name: data.name, href: `/locations/${suburb}` },
        ]}
        label={data.region}
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8">

              <div>
                <p className="section-label mb-2">Serving {data.region}</p>
                <h2 className="text-navy text-3xl font-bold">
                  Clinical home nursing in {data.name}, Perth WA
                </h2>
                <div className="section-divider" />
                <p className="text-body text-lg leading-relaxed mt-4">
                  {data.description}
                </p>
                <p className="text-body leading-relaxed mt-3">
                  {getLocalText(suburb, data.name, data.region)}
                </p>
                <p className="text-body leading-relaxed mt-3">
                  Care N Cure is a Perth-based nursing practice founded by Jinu and Zuhair — two registered nurses with a combined 25+ years of hospital and community nursing experience. We provide in-home nursing visits across {data.name} and all adjacent Perth suburbs.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-navy text-2xl font-bold">Why choose us in {data.name}?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-text flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-navy font-bold text-sm">Registered Nurses Only</h4>
                      <p className="text-body text-xs mt-1">We do not use support workers or assistants for clinical tasks.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-text flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-navy font-bold text-sm">Same Nurse, Every Visit</h4>
                      <p className="text-body text-xs mt-1">Building deep, consistent clinical relationships with zero roster surprises.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-text flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-navy font-bold text-sm">Direct GP Updates</h4>
                      <p className="text-body text-xs mt-1">Handovers sent to doctors and surgeons after critical recoveries.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-text flex-shrink-0 mt-1" />
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
                  <Stethoscope className="w-5 h-5 text-teal-text" />
                  Seamless hospital discharge
                </h3>
                <p className="text-body text-xs leading-relaxed">
                  If your loved one is returning to <strong>{data.name}</strong> from <strong>{data.nearestHospital}</strong>, early professional planning is critical. We coordinate directly with local ward teams and discharge coordinators, performing immediate medication checks and setting up dressing routines to prevent costly readmissions.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: 'var(--teal-text)' }}>
                  <ShieldCheck className="w-4 h-4" />
                  Supporting Sir Charles Gairdner, Fiona Stanley, Royal Perth, and SJOG clients.
                </div>
              </div>

              {/* Specific Services Offered Checklist */}
              <div className="space-y-4">
                <h3 className="text-navy text-xl font-bold">Services We Deliver in {data.name}:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-body">
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-text flex-shrink-0" />
                    <Link href="/post-hospital-care" className="hover:text-teal-text transition-colors font-medium">
                      Post-Hospital Recovery Care
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-text flex-shrink-0" />
                    <Link href="/private-nursing" className="hover:text-teal-text transition-colors font-medium">
                      Private Nursing at Home
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-text flex-shrink-0" />
                    <Link href="/registered-nurses-clinical-care-services" className="hover:text-teal-text transition-colors font-medium">
                      Registered Nurses Clinical care Services
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-text flex-shrink-0" />
                    <Link href="/wound-care" className="hover:text-teal-text transition-colors font-medium">
                      Sterile Wound Dressings
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-text flex-shrink-0" />
                    <Link href="/medication-management" className="hover:text-teal-text transition-colors font-medium">
                      Injections & Vitals Monitoring
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-text flex-shrink-0" />
                    <Link href="/medication-management" className="hover:text-teal-text transition-colors font-medium">
                      Medication Management
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-text flex-shrink-0" />
                    <Link href="/mobility-support" className="hover:text-teal-text transition-colors font-medium">
                      Mobility & Rehab Exercises
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-text flex-shrink-0" />
                    <Link href="/companion-care" className="hover:text-teal-text transition-colors font-medium">
                      Companion & Respite Care
                    </Link>
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