import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { CtaUncertaintyReducer } from '@/components/sections/cta-uncertainty-reducer'
import { AGED_CARE_REGISTRATION } from '@/lib/registration'
import { Heart, ShieldCheck, HeartPulse, CheckCircle2, Phone, Stethoscope, Clock } from 'lucide-react'

const PAGE_TITLE = 'Palliative Care at Home Perth | Private End-of-Life Nursing | Care N Cure'
const PAGE_DESC =
  'Compassionate palliative & end-of-life nursing care at home in Perth. AHPRA Registered Nurses for pain & symptom monitoring, syringe driver checks, family respite & Support at Home. Start in 24–48h. Call 1300 919 663.'

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESC,
  keywords: [
    'palliative care at home perth',
    'private palliative nurse perth',
    'end of life nursing care perth',
    'palliative home nursing perth wa',
    'in home palliative care perth',
    'respite palliative nursing perth',
  ],
  alternates: { canonical: 'https://carencure.com.au/palliative-care-perth' },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: 'https://carencure.com.au/palliative-care-perth',
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
    question: 'Can Care N Cure provide palliative nursing at home alongside a community palliative team?',
    answer:
      'Yes. With your consent, our AHPRA Registered Nurses work side-by-side with your GP, hospital palliative specialist, and existing community palliative care services in Perth to deliver consistent daily clinical visits, comfort monitoring, and family support.',
  },
  {
    question: 'Do your Registered Nurses support pain medication and syringe driver monitoring?',
    answer:
      'Yes. Under clear written medical orders from your GP or palliative specialist, our Registered Nurses perform pain and symptom assessments, administer prescribed subcutaneous medications, monitor syringe drivers, and escalate any breakthrough symptoms promptly to your treating doctor.',
  },
  {
    question: 'How is palliative nursing at home funded in WA?',
    answer:
      `Care can be funded privately ($110–$160/hr weekday RN rates, $0 travel fees within 50km of Gosnells) or through the Support at Home End-of-Life Pathway and quarterly budgets — delivered as an associated provider alongside your registered provider (such as ${AGED_CARE_REGISTRATION.partnerExample}). Clinical care attracts 0% participant contribution under Support at Home.`,
  },
  {
    question: 'Why does One Dedicated Nurse Coordinator matter in palliative care?',
    answer:
      'End-of-life care is deeply personal. Having rotating strangers walk into the bedroom adds exhaustion and distress. Our One Dedicated Nurse Coordinator model ensures the same calm, experienced Registered Nurse knows your loved one’s comfort preferences, routine, and family wishes.',
  },
]

export default function PalliativeCarePerthPage() {
  return (
    <>
      <ServicePageSchema
        serviceName="Palliative Care at Home Perth"
        description={PAGE_DESC}
        url="/palliative-care-perth"
        procedureType="Palliative & End-of-Life In-Home Nursing"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Services', item: 'https://carencure.com.au/services' },
          { name: 'Palliative Care Perth', item: 'https://carencure.com.au/palliative-care-perth' },
        ]}
      />

      <PageHeader
        title="Palliative & End-of-Life Home Nursing in Perth"
        subtitle="Compassionate, dignified clinical nursing at home — pain & symptom monitoring, comfort care, and gentle respite for Perth families."
        breadcrumbItems={[
          { name: 'Services', href: '/services' },
          { name: 'Palliative Care Perth', href: '/palliative-care-perth' },
        ]}
        label="Compassionate Clinical Care"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="section-label mb-2">Dignity at Home</p>
                <h2 className="text-navy text-3xl font-bold">
                  Comfort-Focused Registered Nursing Without Rotating Strangers
                </h2>
                <div className="section-divider" />
                <div className="bg-teal-subtle/40 p-6 rounded-2xl border border-teal-border mt-4">
                  <p className="text-navy font-semibold text-base leading-relaxed">
                    When someone you love wishes to remain in their own bed surrounded by family, steady clinical nursing makes all the difference. Care N Cure assigns <strong>One Dedicated AHPRA Registered Nurse Coordinator</strong> who visits within 24–48 hours across Perth and coordinates directly with your GP and palliative specialist.
                  </p>
                </div>
                <p className="text-xs text-amber-900 bg-amber-50 p-3 rounded-lg border border-amber-200/80 leading-relaxed mt-4">
                  <strong>Medical Notice:</strong> Care N Cure works alongside your GP and specialist palliative team and is not an emergency medical service. In any urgent crisis or acute emergency, call <strong>000</strong>.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-navy text-2xl font-bold">How Our Palliative Home Nurses Support Your Family</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="card-base p-5 flex gap-4">
                    <HeartPulse className="w-7 h-7 text-teal-accent shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold text-sm mb-1">Pain &amp; Symptom Comfort Checks</h4>
                      <p className="text-body text-xs leading-relaxed">
                        Assessment of pain, nausea, breathlessness, hydration, and restfulness with prescribed subcutaneous medication support and syringe driver checks.
                      </p>
                    </div>
                  </div>
                  <div className="card-base p-5 flex gap-4">
                    <Stethoscope className="w-7 h-7 text-teal-accent shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold text-sm mb-1">Pressure Injury &amp; Skin Protection</h4>
                      <p className="text-body text-xs leading-relaxed">
                        Gentle repositioning guidance, sterile wound protection, mouth care, and continence comfort including <Link href="/catheter-care-perth" className="text-teal-text font-semibold hover:underline">catheter care</Link>.
                      </p>
                    </div>
                  </div>
                  <div className="card-base p-5 flex gap-4">
                    <Heart className="w-7 h-7 text-teal-accent shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold text-sm mb-1">Carer Guidance &amp; Respite</h4>
                      <p className="text-body text-xs leading-relaxed">
                        Calm bedside nursing blocks so spouses and adult children can rest safely, plus practical guidance on what to expect next.
                      </p>
                    </div>
                  </div>
                  <div className="card-base p-5 flex gap-4">
                    <Clock className="w-7 h-7 text-teal-accent shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold text-sm mb-1">24–48h Priority Intake</h4>
                      <p className="text-body text-xs leading-relaxed">
                        Speak directly with a Registered Nurse coordinator on <a href="tel:1300919663" className="text-teal-text font-semibold hover:underline">1300 919 663</a> with $0 travel fees within 50km of Gosnells.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-2xl border border-border space-y-3">
                <div className="flex items-center gap-2 text-navy font-bold text-lg">
                  <ShieldCheck className="w-5 h-5 text-teal-accent shrink-0" />
                  <span>Funding Options: Support at Home End-of-Life &amp; Private Care</span>
                </div>
                <p className="text-body text-sm leading-relaxed">
                  Under the Australian Government’s <Link href="/support-at-home" className="text-teal-text font-semibold hover:underline">Support at Home program</Link>, clinical nursing carries <strong>0% participant co-payment</strong>. Care N Cure delivers nursing as an associated provider through your registered provider (for example {AGED_CARE_REGISTRATION.partnerExample}) or on a transparent private fee-for-service basis ($110–$160/hr weekdays) to supplement community palliative visits whenever families need dedicated extra hours.
                </p>
                <ul className="space-y-2 text-xs text-navy font-medium pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>Also see: <Link href="/dementia-care-perth" className="text-teal-text hover:underline">Dementia &amp; Memory Support Nursing</Link></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>Also see: <Link href="/aged-care-at-home-perth" className="text-teal-text hover:underline">Aged Care at Home Perth</Link> &amp; <Link href="/private-nursing" className="text-teal-text hover:underline">Private Nursing</Link></span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-navy text-2xl font-bold">Palliative Home Nursing FAQs</h3>
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
                  title="Discuss Palliative Support"
                  subtitle="Speak confidentially with an AHPRA Registered Nurse coordinator about comfort care at home."
                  defaultService="Palliative Nursing Care"
                />
                <CtaUncertaintyReducer />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Compassionate clinical nursing in your family home"
        description="Call 1300 919 663 to speak directly with a caring Registered Nurse coordinator — priority assessments within 24–48 hours across Perth."
        secondaryLink={{ text: 'View Pricing & Funding', href: '/pricing', isPhone: false }}
      />
    </>
  )
}

