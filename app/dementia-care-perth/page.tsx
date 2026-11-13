import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { CtaUncertaintyReducer } from '@/components/sections/cta-uncertainty-reducer'
import { AGED_CARE_REGISTRATION } from '@/lib/registration'
import { Brain, ShieldCheck, UserCheck, CheckCircle2, HeartHandshake, Pill } from 'lucide-react'

const PAGE_TITLE = 'Dementia Care at Home Perth | Nurse-Led Memory Support | Care N Cure'
const PAGE_DESC =
  'Calm, familiar dementia & Alzheimer’s nursing care at home in Perth. One Dedicated AHPRA Registered Nurse every visit — no rotating strangers. Medication safety, UTI/delirium screening & Support at Home. Call 1300 919 663.'

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESC,
  keywords: [
    'dementia care at home perth',
    'in home dementia nursing perth',
    'alzheimers care at home perth',
    'memory support care perth',
    'private dementia nurse perth',
    'respite dementia care at home perth',
  ],
  alternates: { canonical: 'https://carencure.com.au/dementia-care-perth' },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: 'https://carencure.com.au/dementia-care-perth',
    type: 'website',
    siteName: 'Care N Cure Nursing Care Services',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
  },
}

const faqs = [
  {
    question: 'Why does seeing the same nurse matter so much for someone living with dementia?',
    answer:
      'For a person experiencing memory loss or cognitive decline, having different unfamiliar workers enter their home triggers confusion, anxiety, and sundowning distress. Under Care N Cure’s One Dedicated Nurse Coordinator model, your parent builds trust with one familiar Registered Nurse who understands their personality, calming routines, and communication style.',
  },
  {
    question: 'Can a Registered Nurse detect delirium, UTIs, or medication side effects early?',
    answer:
      'Yes. Sudden worsening confusion, agitation, or falls in dementia are frequently caused by treatable clinical issues such as urinary tract infections, dehydration, constipation, or overlapping medications. An AHPRA Registered Nurse checks vitals, hydration, and clinical indicators early and communicates promptly with your parent’s GP.',
  },
  {
    question: 'Can Support at Home or Home Care Packages pay for dementia nursing at home?',
    answer:
      `Yes. Care N Cure provides registered nursing and nurse-supervised dementia care via private pay ($110–$160/hr weekdays) or as an associated provider under your registered Support at Home provider (for example ${AGED_CARE_REGISTRATION.partnerExample}). Clinical nursing under Support at Home attracts 0% participant co-payment.`,
  },
  {
    question: 'How fast can you start dementia support visits in Perth?',
    answer:
      'After a gentle phone triage on 1300 919 663, we arrange an in-home clinical assessment within 24–48 hours across metropolitan Perth with $0 travel fees within 50km of our Gosnells headquarters.',
  },
]

export default function DementiaCarePerthPage() {
  return (
    <>
      <ServicePageSchema
        serviceName="Dementia Care at Home Perth"
        description={PAGE_DESC}
        url="/dementia-care-perth"
        procedureType="Dementia & Cognitive Support In-Home Nursing"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Services', item: 'https://carencure.com.au/services' },
          { name: 'Dementia Care Perth', item: 'https://carencure.com.au/dementia-care-perth' },
        ]}
      />

      <PageHeader
        title="Dementia & Memory Support Nursing at Home in Perth"
        subtitle="Consistent, reassuring care from One Dedicated Registered Nurse — avoiding the stress of rotating agency strangers."
        breadcrumbItems={[
          { name: 'Services', href: '/services' },
          { name: 'Dementia Care Perth', href: '/dementia-care-perth' },
        ]}
        label="Familiar Nurse-Led Memory Care"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="section-label mb-2">Stability &amp; Clinical Insight</p>
                <h2 className="text-navy text-3xl font-bold">
                  Why Familiar Nurse Continuity Protects Dignity in Dementia Care
                </h2>
                <div className="section-divider" />
                <div className="bg-teal-subtle/40 p-6 rounded-2xl border border-teal-border mt-4">
                  <p className="text-navy font-semibold text-base leading-relaxed">
                    People living with Alzheimer’s disease or dementia thrive on predictable routines and familiar faces. Instead of revolving rosters, Care N Cure assigns <strong>One Dedicated AHPRA Registered Nurse Coordinator</strong> who monitors clinical health, medication adherence, nutrition, and subtle signs of delirium or infection — keeping Perth parents safely at home longer.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-navy text-2xl font-bold">Nurse-Led Dementia Care Capabilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="card-base p-5 flex gap-4">
                    <UserCheck className="w-7 h-7 text-teal-accent shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold text-sm mb-1">Same Dedicated Nurse</h4>
                      <p className="text-body text-xs leading-relaxed">
                        Reduces anxiety, refusal of care, and confusion by building genuine familiarity visit after visit.
                      </p>
                    </div>
                  </div>
                  <div className="card-base p-5 flex gap-4">
                    <Brain className="w-7 h-7 text-teal-accent shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold text-sm mb-1">Delirium &amp; UTI Early Screening</h4>
                      <p className="text-body text-xs leading-relaxed">
                        RNs spot acute infections, dehydration, and blood pressure drops that often look like sudden dementia progression.
                      </p>
                    </div>
                  </div>
                  <div className="card-base p-5 flex gap-4">
                    <Pill className="w-7 h-7 text-teal-accent shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold text-sm mb-1">Safe Medication &amp; Webster-Pak Checks</h4>
                      <p className="text-body text-xs leading-relaxed">
                        Ensuring complex doses are never doubled or missed — backed by our <Link href="/medication-management" className="text-teal-text font-semibold hover:underline">medication management</Link> service.
                      </p>
                    </div>
                  </div>
                  <div className="card-base p-5 flex gap-4">
                    <HeartHandshake className="w-7 h-7 text-teal-accent shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold text-sm mb-1">Family Updates &amp; Carer Respite</h4>
                      <p className="text-body text-xs leading-relaxed">
                        Clear clinical notes shared with adult children and spouses, plus gentle <Link href="/companion-care" className="text-teal-text font-semibold hover:underline">companion &amp; personal care</Link> supervision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-2xl border border-border space-y-3">
                <div className="flex items-center gap-2 text-navy font-bold text-lg">
                  <ShieldCheck className="w-5 h-5 text-teal-accent shrink-0" />
                  <span>Flexible Private Care &amp; Support at Home Integration</span>
                </div>
                <p className="text-body text-sm leading-relaxed">
                  Engage us immediately while waiting for My Aged Care ($110–$160/hr weekdays, $0 travel surcharge within 50km) or connect Care N Cure as an associated clinical nursing provider under your existing <Link href="/support-at-home" className="text-teal-text font-semibold hover:underline">Support at Home</Link> arrangement (with registered providers such as {AGED_CARE_REGISTRATION.partnerExample}).
                </p>
                <ul className="space-y-2 text-xs text-navy font-medium pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>Explore: <Link href="/aged-care-at-home-perth" className="text-teal-text hover:underline">Aged Care Agency Perth</Link> &amp; <Link href="/private-nursing/elderly-care" className="text-teal-text hover:underline">Elderly Care at Home</Link></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>Need physical rehab too? See <Link href="/mobility-support" className="text-teal-text hover:underline">Mobility &amp; Falls Prevention</Link></span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-navy text-2xl font-bold">Dementia Home Care FAQs</h3>
                <div className="divide-y divide-border card-base p-6">
                  {faqs.map((f) => (
                    <div key={f.question} className="py-4 first:pt-0 last:pb-0">
                      <h4 className="text-navy font-bold text-base mb-1.5">{f.question}</h4>
                      <p className="text-body text-sm leading-relaxed">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="lg:sticky lg:top-28 space-y-6">
                <ContactForm
                  title="Arrange Dementia Care"
                  subtitle="Speak directly with an AHPRA Registered Nurse coordinator about familiar home memory support."
                  defaultService="Dementia Nursing Care"
                />
                <CtaUncertaintyReducer />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="One familiar nurse who knows your parent’s routine"
        description="Call 1300 919 663 to arrange an in-home assessment across Perth within 24–48 hours — zero lock-in contracts."
        secondaryLink={{ text: 'View Pricing & Rates', href: '/pricing', isPhone: false }}
      />
    </>
  )
}

