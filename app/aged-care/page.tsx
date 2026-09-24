import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { Heart, CheckCircle, HeartPulse, ShieldCheck, ArrowRight, Star, Users, Home, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Aged Care at Home Perth | In-Home Aged Care Support & Nursing WA | Care N Cure',
  },
  description:
    'Nurse-led aged care in-home support for seniors across Perth. Registered nurse visits, personal care, medication management, allied health & aged care packages. Call 1300 919 663.',
  keywords: [
    'aged care at home perth',
    'aged care in home support',
    'aged care in home services perth',
    'in home aged care perth',
    'aged care support at home perth',
    'aged care agency perth',
    'aged care home services wa',
    'at home aged care perth',
    'aged care nursing at home',
    'aged care canning vale',
    'aged care near me perth',
    'private aged care at home',
    'aged care help at home',
    'aged home care services',
    'community aged care perth',
    'aged care nursing services perth',
  ],
  alternates: { canonical: 'https://carencure.com.au/aged-care' },
}

const faqs = [
  {
    question: 'What aged care services can be provided at home in Perth?',
    answer:
      'Care N Cure provides a comprehensive range of aged care in-home support services delivered by AHPRA Registered Nurses and coordinated allied health professionals. These include clinical nursing assessments, wound dressing, medication management and injections, personal care assistance, companion care, physiotherapy, dietitian services, mobility and falls prevention, and care coordination with GPs and specialists.',
  },
  {
    question: 'How is Care N Cure different from a standard aged care agency?',
    answer:
      'Most aged care agencies dispatch rotating support workers who change each visit. At Care N Cure, every client is assigned a dedicated Registered Nurse Coordinator who attends every clinical visit, knows your medical history, coordinates with your doctors, and provides a single trusted point of contact for your family. This is clinical-grade in-home aged care — not just personal care.',
  },
  {
    question: 'What funding is available for aged care at home in Perth?',
    answer:
      'There are four main funding pathways for aged care at home: (1) Home Care Packages (HCP Levels 1–4) — government-subsidised packages for eligible seniors. (2) Support at Home — the new government program replacing HCP from mid-2025. (3) Commonwealth Home Support Programme (CHSP) — entry-level services for basic support needs. (4) Private self-funding — pay directly with no wait times. We help you navigate whichever pathway suits your situation.',
  },
  {
    question: 'Do I need a referral to access aged care at home?',
    answer:
      'For private aged care services, no referral is needed — simply call 1300 919 663. For government-funded aged care (HCP or Support at Home), you will first need an assessment through My Aged Care (call 1800 200 422). We can guide you through this process. For urgent needs while waiting for an assessment, we can begin private nursing care immediately.',
  },
  {
    question: 'Do you provide aged care services across all Perth suburbs?',
    answer:
      'Yes. Care N Cure provides aged care in-home support across the entire Perth metropolitan area, including Joondalup, Rockingham, Armadale, Canning Vale, South Perth, Claremont, Midland, Gosnells, Nedlands, and all surrounding suburbs. Call 1300 919 663 to confirm coverage for your specific suburb.',
  },
  {
    question: 'Can aged care support at home prevent a move to a residential facility?',
    answer:
      'Many families choose in-home aged care to keep their loved one living independently at home for as long as possible. With the right combination of nursing care, allied health, personal support, and care coordination, many seniors can safely remain at home for years longer than they otherwise might. Early intervention with our registered nurse team is key to achieving this.',
  },
]

const services = [
  { icon: HeartPulse, title: 'Clinical Nursing Visits', desc: 'AHPRA Registered Nurses for wound care, injections, medication management, and health monitoring.' },
  { icon: Users, title: 'Personal Care Assistance', desc: 'Bathing, grooming, dressing, and continence support delivered with dignity and respect.' },
  { icon: Heart, title: 'Companion & Social Care', desc: 'Meaningful social engagement, cognitive activities, and accompanied outings for wellbeing.' },
  { icon: Home, title: 'Domestic Assistance', desc: 'Light housekeeping, meal preparation, grocery shopping, and home organisation support.' },
  { icon: Star, title: 'Allied Health', desc: 'In-home physiotherapy, occupational therapy, speech therapy, and dietitian services.' },
  { icon: ShieldCheck, title: 'Medication Management', desc: 'Safe medication dispensing, Webster-pak support, and clinical medication reconciliation.' },
  { icon: Clock, title: 'Respite Care', desc: 'Planned and emergency respite for carers, including overnight and weekend support.' },
  { icon: HeartPulse, title: 'Care Coordination', desc: 'A dedicated nurse coordinator liaising with your GP, specialists, hospitals, and family.' },
]

export default function AgedCare() {
  return (
    <>
      <ServicePageSchema
        serviceName="Aged Care at Home Perth | In-Home Aged Care Support & Nursing WA"
        description="Nurse-led aged care in-home support for seniors across Perth. Registered nurse visits, personal care, medication management, allied health & aged care packages."
        url="/aged-care"
        procedureType="Aged Care"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Services', item: 'https://carencure.com.au/services' },
          { name: 'Aged Care at Home', item: 'https://carencure.com.au/aged-care' },
        ]}
      />

      <PageHeader
        title="Aged Care at Home in Perth"
        subtitle="Nurse-led in-home aged care support for Perth seniors — clinical nursing, personal care, allied health & care coordination. No residential facility needed."
        breadcrumbItems={[
          { name: 'Services', href: '/#services' },
          { name: 'Aged Care at Home', href: '/aged-care' },
        ]}
        label="In-Home Aged Care Perth"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8">

              <div>
                <p className="section-label mb-2">Nurse-Led Aged Care</p>
                <h2 className="text-navy text-3xl font-bold">In-Home Aged Care Support Across Perth WA</h2>
                <div className="section-divider" />
                <p className="text-body text-lg leading-relaxed mt-4">
                  Care N Cure is a Perth-based nurse-led aged care practice providing <strong>clinical aged care in-home support</strong> for seniors across all metropolitan Perth suburbs. We exist to give older Australians the highest quality nursing and personal care in the comfort of their own home — with the consistency, dignity, and clinical oversight they deserve.
                </p>
              </div>

              {/* Intent match box */}
              <div className="bg-teal-subtle/40 p-5 rounded-xl border border-teal-border">
                <p className="text-navy font-semibold text-sm leading-relaxed">
                  <strong>Looking for aged care support at home in Perth?</strong> Our AHPRA Registered Nurses provide in-home aged care across the entire Perth metro area — no GP referral required for private services. Call <a href="tel:1300919663" className="text-teal-text font-bold hover:underline">1300 919 663</a> for a same-day intake discussion, or enquire online to arrange an assessment within 24–48 hours.
                </p>
              </div>

              {/* Services Grid */}
              <div className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">Aged Care In-Home Services We Provide</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((item, i) => (
                    <div key={i} className="card-base p-5 flex gap-4">
                      <item.icon className="w-7 h-7 text-teal-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-navy font-bold mb-1 text-sm">{item.title}</h3>
                        <p className="text-body text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Difference */}
              <div className="bg-surface p-6 rounded-2xl border border-border space-y-4">
                <h2 className="text-navy text-xl font-bold">Why Families in Perth Choose Care N Cure for Aged Care</h2>
                <ul className="space-y-3 text-body text-sm">
                  {[
                    { strong: 'One Dedicated Registered Nurse', rest: ' — your family member always sees the same nurse, not a rotating roster of strangers.' },
                    { strong: 'Clinical-Grade Care', rest: ' — AHPRA Registered Nurses, not support workers, for all clinical tasks.' },
                    { strong: 'GP & Specialist Coordination', rest: ' — your nurse sends clinical updates directly to doctors after every relevant visit.' },
                    { strong: 'Aged Care Package Management', rest: ' — we help navigate HCP Levels 1–4 and the Support at Home program.' },
                    { strong: 'Rapid Intake', rest: ' — clinical assessments arranged within 24–48 hours of enquiry.' },
                    { strong: 'Transparent Pricing', rest: ' — clear, itemised fees with no hidden admin charges.' },
                  ].map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                      <span><strong>{p.strong}</strong>{p.rest}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Funding */}
              <div className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">Funding for Aged Care at Home</h2>
                <p className="text-body text-sm">There are multiple ways to fund in-home aged care support in Perth. We support all of the following:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Home Care Packages (HCP)', desc: 'Government-subsidised funding for eligible seniors (Levels 1–4). Managed by My Aged Care.' },
                    { title: 'Support at Home', desc: 'The new government-funded aged care program replacing HCP from mid-2025 onwards.' },
                    { title: 'Commonwealth Home Support Programme', desc: 'Entry-level support for basic daily needs including transport, personal care, and meals.' },
                    { title: 'Private Self-Funded', desc: 'Immediate access to care without waiting for a government assessment. Pay-as-you-go.' },
                  ].map((f, i) => (
                    <div key={i} className="p-4 bg-surface rounded-xl border border-border space-y-1">
                      <h3 className="font-bold text-navy text-sm">{f.title}</h3>
                      <p className="text-xs text-body">{f.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted">
                  For government-funded aged care, contact My Aged Care on <strong>1800 200 422</strong> or visit <a href="https://www.myagedcare.gov.au" rel="noopener noreferrer" target="_blank" className="text-teal-text hover:underline">myagedcare.gov.au</a> to begin an eligibility assessment.
                </p>
              </div>

              {/* Suburb Coverage */}
              <div className="space-y-3">
                <h2 className="text-navy text-xl font-bold">Aged Care Service Areas in Perth</h2>
                <p className="text-body text-sm">We provide in-home aged care support across all Perth metropolitan suburbs, including:</p>
                <div className="flex flex-wrap gap-2">
                  {['Armadale', 'Canning Vale', 'Joondalup', 'Rockingham', 'South Perth', 'Claremont', 'Nedlands', 'Midland', 'Gosnells', 'Fremantle', 'Applecross', 'Subiaco', 'Mount Lawley', 'Cottesloe', 'Karrinyup', 'Wembley'].map((s, i) => (
                    <Link key={i} href={`/locations/${s.toLowerCase().replace(' ', '-')}`} className="text-xs font-medium text-teal-text border border-teal-border bg-teal-subtle/30 px-2.5 py-1.5 rounded-lg hover:bg-teal-subtle transition-colors">
                      {s}
                    </Link>
                  ))}
                  <Link href="/locations" className="text-xs font-medium text-teal-text border border-teal-border bg-teal-subtle/30 px-2.5 py-1.5 rounded-lg hover:bg-teal-subtle transition-colors flex items-center gap-1">
                    <ArrowRight className="w-3 h-3" /> View all suburbs
                  </Link>
                </div>
              </div>

            </div>

            {/* Sidebar Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <ContactForm
                  title="Enquire About Aged Care at Home"
                  subtitle="Tell us about your loved one's aged care needs. Our Registered Nurse team will contact you to discuss the right services and funding options."
                  defaultService="Aged Care at Home"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-surface border-t border-border">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-navy font-bold text-2xl">Aged Care at Home FAQs</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="card-base p-6 divide-y divide-border">
            {faqs.map((faq, i) => (
              <div key={i} className="py-4 first:pt-0 last:pb-0">
                <h3 className="text-navy font-bold mb-2 text-sm">{faq.question}</h3>
                <p className="text-body text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Arrange Aged Care Support at Home in Perth"
        description="Our AHPRA Registered Nurses visit Perth seniors within 24–48 hours. Private, Home Care Package, Support at Home & NDIS funding all supported. Call 1300 919 663."
        secondaryLink={{ text: 'Enquire About Aged Care', href: '/contact' }}
      />
    </>
  )
}
