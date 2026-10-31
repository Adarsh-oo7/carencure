import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema } from '@/components/schema'
import { ReferralForm } from '@/components/forms/referral-form'
import { Phone, Hospital, ClipboardCheck, Pill, Bandage, Activity, ArrowRight, CheckCircle, MapPin } from 'lucide-react'

const PAGE_TITLE = 'Hospital Discharge Nursing Perth | Nurse at Home After Hospital | Care N Cure'
const PAGE_DESC =
  'Leaving Fiona Stanley, Armadale, Royal Perth, Bentley or SJOG? A Registered Nurse at home within 24–48 hours: wound care, medication checks & IV support. Call 1300 919 663.'

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESC,
  keywords: [
    'hospital discharge nursing perth',
    'nurse at home after hospital perth',
    'post discharge nursing care perth',
    'fiona stanley hospital discharge home nurse',
    'armadale hospital discharge nursing',
    'transition care at home perth',
    'home nurse after surgery perth',
  ],
  alternates: { canonical: 'https://carencure.com.au/hospital-discharge-care-perth' },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: 'https://carencure.com.au/hospital-discharge-care-perth',
    type: 'website',
    locale: 'en_AU',
  },
}

const hospitals = [
  { name: 'Fiona Stanley Hospital', area: 'Murdoch', suburbs: 'Cockburn, Bull Creek, Willetton, Melville' },
  { name: 'Armadale Kelmscott Memorial Hospital', area: 'Mount Nasura', suburbs: 'Gosnells, Armadale, Kelmscott, Byford' },
  { name: 'Bentley Hospital', area: 'Bentley', suburbs: 'Cannington, Beckenham, Kenwick, Victoria Park' },
  { name: 'St John of God Murdoch', area: 'Murdoch', suburbs: 'Southern suburbs & Canning Vale' },
  { name: 'Royal Perth Hospital', area: 'Perth CBD', suburbs: 'Inner city, South Perth, Mount Lawley' },
  { name: 'Sir Charles Gairdner Hospital', area: 'Nedlands', suburbs: 'Western suburbs, Subiaco, Claremont' },
  { name: 'Rockingham General Hospital', area: 'Cooloongup', suburbs: 'Rockingham, Baldivis, Safety Bay' },
  { name: 'Joondalup Health Campus', area: 'Joondalup', suburbs: 'Northern suburbs' },
]

const firstWeekRisks = [
  { icon: Pill, title: 'Medication changes', text: 'New tablets, stopped tablets and changed doses are the most common source of errors after discharge. We reconcile the discharge summary against what is actually in the home.' },
  { icon: Bandage, title: 'Surgical wounds', text: 'Sterile dressing changes, drain and staple/suture care, and early detection of infection — with photo-documented healing shared with your GP or surgeon (with consent).' },
  { icon: Activity, title: 'Warning signs', text: 'Vital signs, pain, fluid intake, breathlessness and confusion are checked each visit so concerns are escalated early to the GP or hospital team.' },
  { icon: ClipboardCheck, title: 'Follow-up plan', text: 'We make sure outpatient appointments, pathology and GP reviews are understood and booked, and that family carers know what to watch for.' },
]

const faqs = [
  {
    question: 'How quickly can a nurse visit after my parent leaves hospital?',
    answer:
      'Referrals are acknowledged within 24 hours, and an in-home Registered Nurse assessment is usually arranged within 24–48 hours. If discharge is happening today or tomorrow, call 1300 919 663 directly so we can prioritise scheduling.',
  },
  {
    question: 'Do we need a GP or hospital referral?',
    answer:
      'No. Families can contact us directly for private nursing. Discharge planners, social workers and GPs are also welcome to refer using the form on this page. A discharge summary is helpful but not required to get started.',
  },
  {
    question: 'Who pays for nursing after hospital discharge?',
    answer:
      'Care can be private (self-funded), delivered through an existing Support at Home or Home Care Package provider as an associated provider, or funded through an NDIS plan for eligible participants. We explain costs in writing before care begins.',
  },
  {
    question: 'Which hospitals do your patients come home from?',
    answer:
      'We visit patients across Perth metro returning home from public and private hospitals including Fiona Stanley, Armadale Kelmscott Memorial, Bentley, St John of God Murdoch, Royal Perth, Sir Charles Gairdner, Rockingham General and Joondalup Health Campus.',
  },
  {
    question: 'What does the nurse do on the first visit?',
    answer:
      'A full clinical assessment: medication reconciliation against the discharge summary, wound review, vital signs, falls and home-safety check, and a written care plan agreed with the client and family.',
  },
]

export default function HospitalDischargeCarePage() {
  return (
    <>
      <ServicePageSchema
        serviceName="Hospital Discharge Nursing Perth"
        description={PAGE_DESC}
        url="/hospital-discharge-care-perth"
        procedureType="Post-Hospital Discharge Nursing"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Services', item: 'https://carencure.com.au/services' },
          { name: 'Hospital Discharge Nursing', item: 'https://carencure.com.au/hospital-discharge-care-perth' },
        ]}
      />

      <PageHeader
        title="Hospital Discharge Nursing in Perth"
        subtitle="A Registered Nurse at home in the critical first days after hospital — so recovery continues safely and readmission is less likely."
        breadcrumbItems={[
          { name: 'Services', href: '/services' },
          { name: 'Hospital Discharge Nursing', href: '/hospital-discharge-care-perth' },
        ]}
        label="Hospital-to-Home Transition"
      />

      {/* Urgent strip */}
      <section className="bg-teal-50 border-b border-teal-100">
        <div className="section-container py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy font-semibold text-sm md:text-base text-center md:text-left">
            <strong>Discharge happening today or tomorrow?</strong> Call our nurse intake line so we can prioritise your first visit.
          </p>
          <a
            href="tel:1300919663"
            id="discharge-urgent-call"
            className="inline-flex items-center gap-2 bg-navy text-white font-bold px-5 py-3 rounded-xl hover:bg-navy-light transition-colors shrink-0"
          >
            <Phone className="w-4 h-4" /> Call 1300 919 663
          </a>
        </div>
      </section>

      {/* Why first week matters */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-navy font-bold text-2xl md:text-3xl">Why the First Week Home Matters Most</h2>
            <div className="section-divider mx-auto" />
            <p className="text-body text-base leading-relaxed">
              Many problems after discharge — medication mix-ups, wound infections, dehydration and falls — show up in the first few days. A Registered Nurse visiting during this window catches them early and keeps the GP and hospital team informed.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {firstWeekRisks.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card-base p-6 flex gap-4 items-start hover:shadow-lg transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-teal-subtle flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-teal-text" />
                </div>
                <div>
                  <h3 className="text-navy font-bold text-lg">{title}</h3>
                  <p className="text-body text-sm leading-relaxed mt-1">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitals */}
      <section className="section-py bg-surface">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-navy font-bold text-2xl md:text-3xl">Coming Home From a Perth Hospital</h2>
            <div className="section-divider mx-auto" />
            <p className="text-body text-base leading-relaxed">
              Our nurses visit homes across metropolitan Perth from our headquarters at <strong>2232B Albany Hwy, Gosnells</strong>, with $0 travel surcharge within 50km.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {hospitals.map((h) => (
              <div key={h.name} className="bg-white rounded-2xl border border-border p-5 shadow-sm">
                <Hospital className="w-5 h-5 text-teal-accent mb-2" />
                <h3 className="text-navy font-bold text-sm">{h.name}</h3>
                <p className="text-xs text-body mt-0.5">{h.area}</p>
                <p className="text-xs text-body mt-2 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-accent shrink-0 mt-0.5" />
                  {h.suburbs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works + referral form */}
      <section className="section-py bg-white" id="refer">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-navy font-bold text-2xl md:text-3xl">How a Discharge Referral Works</h2>
            <div className="section-divider" />
            <ol className="space-y-4">
              {[
                'Family, discharge planner, social worker or GP sends the referral (form or phone).',
                'We acknowledge within 24 hours and confirm consent, address and funding pathway.',
                'A Registered Nurse visits for a full assessment — usually within 24–48 hours.',
                'A written care plan is agreed, and the same dedicated nurse continues the visits.',
                'With consent, updates are shared with the GP, surgeon or hospital team.',
              ].map((step, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-7 h-7 rounded-full bg-teal-accent text-navy font-bold text-sm flex items-center justify-center shrink-0">{i + 1}</span>
                  <span className="text-body text-sm leading-relaxed pt-1">{step}</span>
                </li>
              ))}
            </ol>
            <div className="p-5 rounded-2xl bg-teal-subtle/40 border border-teal-border space-y-2">
              <p className="text-navy font-bold text-sm">Funding options</p>
              {[
                'Private / self-funded — no referral required',
                'Existing Support at Home or Home Care Package provider (we work as an associated provider)',
                'NDIS plan- or self-managed participants',
              ].map((f) => (
                <p key={f} className="text-body text-sm flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-teal-text shrink-0 mt-0.5" /> {f}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link href="/post-hospital-care" className="inline-flex items-center gap-1 text-teal-text font-semibold hover:underline">Post-hospital recovery care <ArrowRight className="w-3.5 h-3.5" /></Link>
              <Link href="/wound-care" className="inline-flex items-center gap-1 text-teal-text font-semibold hover:underline">Wound care at home <ArrowRight className="w-3.5 h-3.5" /></Link>
              <Link href="/medication-management" className="inline-flex items-center gap-1 text-teal-text font-semibold hover:underline">Medication management <ArrowRight className="w-3.5 h-3.5" /></Link>
              <Link href="/referrals" className="inline-flex items-center gap-1 text-teal-text font-semibold hover:underline">Clinician referral info <ArrowRight className="w-3.5 h-3.5" /></Link>
              <Link href="/referrals/print" className="inline-flex items-center gap-1 text-teal-text font-semibold hover:underline">Printable hospital referral slip (PDF) <ArrowRight className="w-3.5 h-3.5" /></Link>
            </div>
          </div>
          <div className="card-base p-6 md:p-8 bg-white">
            <h2 className="text-navy font-bold text-xl mb-1">Send a Discharge Referral</h2>
            <p className="text-body text-sm mb-6">For families and health professionals. Acknowledged within 24 hours.</p>
            <ReferralForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-surface">
        <div className="section-container max-w-3xl">
          <h2 className="text-navy font-bold text-2xl md:text-3xl text-center">Hospital Discharge Nursing — FAQs</h2>
          <div className="section-divider mx-auto" />
          <div className="space-y-4 mt-8">
            {faqs.map((faq) => (
              <details key={faq.question} className="bg-white rounded-2xl border border-border p-5 group">
                <summary className="text-navy font-bold cursor-pointer list-none flex justify-between gap-4">
                  {faq.question}
                  <span className="text-teal-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-body text-sm leading-relaxed mt-3">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
