import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { CtaUncertaintyReducer } from '@/components/sections/cta-uncertainty-reducer'
import { AGED_CARE_REGISTRATION, NDIS_STATUS_LINE } from '@/lib/registration'
import { ShieldCheck, CheckCircle2, Stethoscope, Activity, ClipboardCheck } from 'lucide-react'

const PAGE_TITLE = 'Catheter Care at Home Perth | IDC, SPC & Continence Nurse | Care N Cure'
const PAGE_DESC =
  'In-home catheter & continence nursing in Perth by AHPRA Registered Nurses. Scheduled & urgent indwelling (IDC) & suprapubic (SPC) catheter changes, bladder flushes & CAUTI prevention. From $110/hr or Support at Home. Call 1300 919 663.'

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESC,
  keywords: [
    'catheter care at home perth',
    'in home urinary catheter change perth',
    'suprapubic catheter nurse perth',
    'indwelling catheter care perth',
    'private catheter nurse perth',
    'continence nursing perth',
  ],
  alternates: { canonical: 'https://carencure.com.au/catheter-care-perth' },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: 'https://carencure.com.au/catheter-care-perth',
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
    question: 'Do your nurses perform both indwelling (IDC) and suprapubic (SPC) catheter changes at home?',
    answer:
      'Yes. Our AHPRA Registered Nurses hold verified catheter competencies and perform routine aseptic indwelling (urethral) and suprapubic catheter changes, bag/valve changes, securement, and catheter site care in your Perth home in accordance with your GP or urologist care plan.',
  },
  {
    question: 'Can you help avoid painful hospital emergency waits for scheduled catheter care?',
    answer:
      'For routine planned catheter changes, flush protocols, and early urinary tract infection (CAUTI) screening, in-home RN visits prevent uncomfortable travel and clinic queues. Note: acute urinary retention, severe haematuria, trauma, or systemic sepsis requires urgent medical/emergency assessment (call 000 or attend ED).',
  },
  {
    question: 'Can Support at Home, NDIS, or private pay cover catheter nursing?',
    answer:
      `Yes. Catheter management can be funded privately ($110–$160/hr weekdays, $0 travel fee within 50km of Gosnells), through Support at Home ($0 clinical contribution via your registered provider such as ${AGED_CARE_REGISTRATION.partnerExample}), or through Plan-Managed / Self-Managed NDIS funding.`,
  },
  {
    question: 'Do you also assist with Trial Without Catheter (TWOC) and stoma oversight?',
    answer:
      'Yes. Following hospital or urologist instructions, we support home-based Trial Without Catheter monitoring, fluid balance tracking, residual output checks, and stoma bag/skin care with prompt GP reporting.',
  },
]

export default function CatheterCarePerthPage() {
  return (
    <>
      <ServicePageSchema
        serviceName="Catheter Care at Home Perth"
        description={PAGE_DESC}
        url="/catheter-care-perth"
        procedureType="Urinary Catheter & Continence Clinical Nursing"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Services', item: 'https://carencure.com.au/services' },
          { name: 'Catheter Care Perth', item: 'https://carencure.com.au/catheter-care-perth' },
        ]}
      />

      <PageHeader
        title="Catheter & Continence Care at Home in Perth"
        subtitle="Sterile indwelling (IDC) & suprapubic (SPC) catheter changes, irrigation protocols, and discreet clinical nursing in your own home."
        breadcrumbItems={[
          { name: 'Services', href: '/services' },
          { name: 'Catheter Care Perth', href: '/catheter-care-perth' },
        ]}
        label="Aseptic Clinical Procedure Care"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="section-label mb-2">Dignified Home Procedure</p>
                <h2 className="text-navy text-3xl font-bold">
                  Aseptic IDC &amp; SPC Catheter Management Without Clinic Queues
                </h2>
                <div className="section-divider" />
                <div className="bg-teal-subtle/40 p-6 rounded-2xl border border-teal-border mt-4">
                  <p className="text-navy font-semibold text-base leading-relaxed">
                    Managing a long-term or post-surgical urinary catheter requires strict sterile technique and clinician continuity. Care N Cure sends <strong>one dedicated AHPRA Registered Nurse</strong> to your home across Perth for routine IDC and SPC catheter replacements, patency checks, and early infection prevention — saving uncomfortable clinic transfers.
                  </p>
                </div>
                <p className="text-xs text-amber-900 bg-amber-50 p-3 rounded-lg border border-amber-200/80 leading-relaxed mt-4">
                  <strong>Clinical Notice:</strong> Complex catheter resistance, acute trauma, or medical emergencies require immediate emergency evaluation (call <strong>000</strong> or attend the nearest hospital emergency department).
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-navy text-2xl font-bold">What Our Catheter Nurses Deliver</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="card-base p-5 flex gap-4">
                    <Stethoscope className="w-7 h-7 text-teal-accent shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold text-sm mb-1">IDC &amp; SPC Catheter Changes</h4>
                      <p className="text-body text-xs leading-relaxed">
                        Scheduled sterile replacements on a predictable 4–12 week cycle following your GP or urologist’s clinical directive.
                      </p>
                    </div>
                  </div>
                  <div className="card-base p-5 flex gap-4">
                    <Activity className="w-7 h-7 text-teal-accent shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold text-sm mb-1">Flushing &amp; Securement</h4>
                      <p className="text-body text-xs leading-relaxed">
                        Maintenance flushes where prescribed, StatLock/grip securement, drainage bag swaps, and stoma/SPC exit-site skin care.
                      </p>
                    </div>
                  </div>
                  <div className="card-base p-5 flex gap-4">
                    <ClipboardCheck className="w-7 h-7 text-teal-accent shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold text-sm mb-1">CAUTI Screening &amp; TWOC Support</h4>
                      <p className="text-body text-xs leading-relaxed">
                        Early checks for sediment, fever, or urinary tract infection signs, urine specimen collection, and home Trial Without Catheter monitoring.
                      </p>
                    </div>
                  </div>
                  <div className="card-base p-5 flex gap-4">
                    <ShieldCheck className="w-7 h-7 text-teal-accent shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold text-sm mb-1">GP &amp; Urologist Liaison</h4>
                      <p className="text-body text-xs leading-relaxed">
                        Clear documentation of catheter size, balloon volume, residual output, and clinical status sent directly to your doctor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-2xl border border-border space-y-3">
                <h3 className="text-navy font-bold text-lg">Funding: Private, Support at Home &amp; NDIS</h3>
                <p className="text-body text-sm leading-relaxed">
                  Private weekday Registered Nurse catheter visits are billed transparently at $110–$160/hr with $0 travel surcharges within 50km of Gosnells. Support at Home participants enjoy <strong>0% clinical co-payment</strong> when delivered via your registered provider (e.g. {AGED_CARE_REGISTRATION.partnerExample}).
                </p>
                <p className="text-body text-xs leading-relaxed">{NDIS_STATUS_LINE}</p>
                <ul className="space-y-2 text-xs text-navy font-medium pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>NDIS participant? See our dedicated <Link href="/ndis-nursing/catheter-care" className="text-teal-text hover:underline">NDIS Catheter Care Perth guide</Link></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>Also see: <Link href="/wound-care" className="text-teal-text hover:underline">Sterile Wound Care</Link> &amp; <Link href="/post-hospital-care" className="text-teal-text hover:underline">Post-Hospital Recovery</Link></span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-navy text-2xl font-bold">Catheter Care FAQs</h3>
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
              <div className="sticky top-24 space-y-6">
                <ContactForm
                  title="Book Catheter Nursing"
                  subtitle="Speak with a Registered Nurse coordinator to schedule a sterile in-home catheter visit."
                  defaultService="Catheter & Continence Care"
                />
                <CtaUncertaintyReducer />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Discreet catheter care in the comfort of home"
        description="Call 1300 919 663 to book an AHPRA Registered Nurse anywhere within 50km of Perth metro — zero travel fees."
        secondaryLink={{ text: 'View Pricing & Rates', href: '/pricing', isPhone: false }}
      />
    </>
  )
}

