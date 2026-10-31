import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema } from '@/components/schema'
import { GuideLeadForm } from '@/components/forms/guide-lead-form'
import { AGED_CARE_REGISTRATION } from '@/lib/registration'
import { BookOpen, CheckCircle, AlertTriangle, ArrowRight, Phone } from 'lucide-react'

const PAGE_TITLE = 'Support at Home Guide for Perth Families (2026) | Care N Cure'
const PAGE_DESC =
  'Plain-English 2026 guide to Support at Home in Perth: assessments, classifications, quarterly budgets, what clinical nursing costs, and getting care while you wait. Free from Care N Cure.'

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESC,
  keywords: [
    'support at home guide',
    'support at home perth',
    'support at home 2026',
    'how does support at home work',
    'home care packages replaced support at home',
    'my aged care assessment perth',
    'support at home nursing contribution',
  ],
  alternates: { canonical: 'https://carencure.com.au/support-at-home-guide' },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: 'https://carencure.com.au/support-at-home-guide',
    type: 'article',
    locale: 'en_AU',
  },
}

const steps = [
  {
    title: '1. Register with My Aged Care',
    text: 'Call My Aged Care on 1800 200 422 or apply online at myagedcare.gov.au. A family member can do this on your behalf with consent.',
  },
  {
    title: '2. Have an aged care assessment',
    text: 'An assessor visits to understand health, daily living needs and goals. Have a medication list, recent discharge summaries and GP details ready.',
  },
  {
    title: '3. Receive your classification',
    text: 'Support at Home has eight ongoing classifications, each with a quarterly budget. Short-term pathways also exist, such as restorative care and end-of-life support.',
  },
  {
    title: '4. Wait for your budget to be assigned',
    text: 'There can be a wait between approval and funding being available. This is where many families arrange private care so nothing is missed in the meantime.',
  },
  {
    title: '5. Choose a registered provider',
    text: 'Your registered Support at Home provider manages your budget and agreement. You can ask them to engage specific associated providers — such as a nursing service you trust.',
  },
]

const faqs = [
  {
    question: 'Did Support at Home replace Home Care Packages?',
    answer:
      'Yes. On 1 November 2025, Home Care Packages were replaced by the Support at Home program. Existing package holders moved across automatically. The Commonwealth Home Support Programme (CHSP) continues until at least July 2027.',
  },
  {
    question: 'Do I pay a contribution for nursing under Support at Home?',
    answer:
      'Clinical care, such as registered nursing, does not attract a participant contribution under Support at Home. Contributions may apply to independence and everyday-living supports depending on your circumstances. Confirm your own situation with My Aged Care or your provider.',
  },
  {
    question: 'Can we get nursing before our Support at Home budget starts?',
    answer:
      'Yes. Many Perth families start with private Registered Nurse visits while waiting, then continue with the same nurse once their budget is assigned through their provider.',
  },
  {
    question: 'Is Care N Cure a registered Support at Home provider?',
    answer: `No. Care N Cure delivers nursing as an associated provider through your registered provider — for example ${AGED_CARE_REGISTRATION.partnerExample} — or privately. Your registered provider stays responsible for your budget and agreement; we provide the Registered Nurse.`,
  },
]

export default function SupportAtHomeGuidePage() {
  return (
    <>
      <ServicePageSchema
        serviceName="Support at Home Guide for Perth Families"
        description={PAGE_DESC}
        url="/support-at-home-guide"
        procedureType="Aged Care Guidance"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Support at Home', item: 'https://carencure.com.au/support-at-home' },
          { name: 'Family Guide', item: 'https://carencure.com.au/support-at-home-guide' },
        ]}
      />

      <PageHeader
        title="The Perth Family Guide to Support at Home (2026)"
        subtitle="What changed, how to get assessed, what nursing costs, and how to keep your parent safe while you wait — in plain English."
        breadcrumbItems={[
          { name: 'Support at Home', href: '/support-at-home' },
          { name: 'Family Guide', href: '/support-at-home-guide' },
        ]}
        label="Free Family Guide"
      />

      <section className="section-py bg-white">
        <div className="section-container grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Guide body */}
          <article className="lg:col-span-2 space-y-10">
            <div className="space-y-4">
              <h2 className="text-navy font-bold text-2xl md:text-3xl">The Short Version</h2>
              <div className="section-divider" />
              <ul className="space-y-3">
                {[
                  'Support at Home replaced Home Care Packages on 1 November 2025.',
                  'Everything starts with a My Aged Care assessment (1800 200 422).',
                  'Funding is a quarterly budget based on one of eight classifications.',
                  'Clinical nursing has no participant contribution under Support at Home.',
                  'You can arrange private nursing now and keep the same nurse once funding starts.',
                ].map((p) => (
                  <li key={p} className="flex gap-3 items-start text-body">
                    <CheckCircle className="w-5 h-5 text-teal-text shrink-0 mt-0.5" /> {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-navy font-bold text-2xl">Step by Step: From First Call to Care at Home</h2>
              <div className="space-y-4">
                {steps.map((s) => (
                  <div key={s.title} className="card-base p-5">
                    <h3 className="text-navy font-bold">{s.title}</h3>
                    <p className="text-body text-sm leading-relaxed mt-1">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-navy font-bold text-2xl">Why Clinical Nursing Matters in Your Plan</h2>
              <p className="text-body leading-relaxed">
                Many families start with cleaning, shopping or personal care. But health needs often change quickly — after a fall, a hospital stay or a new diagnosis. A Registered Nurse can manage medications, wounds, diabetes, catheters and injections, and spot early warning signs before they become a hospital admission. Because clinical care does not attract a participant contribution, it is worth asking every provider how — and how quickly — they deliver nursing.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-amber-200 bg-amber-50 flex gap-3 items-start">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm text-navy space-y-1">
                <p className="font-bold">Questions to ask any Support at Home provider</p>
                <ul className="list-disc pl-5 text-body space-y-1">
                  <li>Who delivers nursing — your own Registered Nurses or subcontractors?</li>
                  <li>Will we see the same nurse each visit?</li>
                  <li>How long from request to first nursing visit?</li>
                  <li>What are your care management and package management fees?</li>
                  <li>Can we use a nursing provider we already trust as an associated provider?</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-navy font-bold text-2xl">Frequently Asked Questions</h2>
              {faqs.map((f) => (
                <div key={f.question}>
                  <h3 className="text-navy font-bold">{f.question}</h3>
                  <p className="text-body text-sm leading-relaxed mt-1">{f.answer}</p>
                </div>
              ))}
              <p className="text-xs text-body/80">
                This guide is general information only and reflects program rules as we understand them at the time of writing. Always confirm your eligibility and costs with My Aged Care or your registered provider.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              <Link href="/support-at-home" className="inline-flex items-center gap-1 text-teal-text font-semibold hover:underline">Support at Home nursing <ArrowRight className="w-3.5 h-3.5" /></Link>
              <Link href="/support-at-home/self-managed" className="inline-flex items-center gap-1 text-teal-text font-semibold hover:underline">Self-managed Support at Home <ArrowRight className="w-3.5 h-3.5" /></Link>
              <Link href="/aged-care-at-home-perth" className="inline-flex items-center gap-1 text-teal-text font-semibold hover:underline">Aged care at home Perth <ArrowRight className="w-3.5 h-3.5" /></Link>
              <Link href="/hospital-discharge-care-perth" className="inline-flex items-center gap-1 text-teal-text font-semibold hover:underline">Hospital discharge nursing <ArrowRight className="w-3.5 h-3.5" /></Link>
            </div>
          </article>

          {/* Sticky lead capture */}
          <aside className="lg:sticky lg:top-28 card-base p-6 bg-white border-2 border-teal-accent/40 shadow-lg">
            <div className="flex items-center gap-2 text-teal-text font-bold text-xs uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4" /> Free family guide
            </div>
            <h2 className="text-navy font-bold text-xl mb-1">Get this guide by email</h2>
            <p className="text-body text-sm mb-5">Save it, share it with siblings, and optionally book a free call with a Registered Nurse.</p>
            <GuideLeadForm />
            <a href="tel:1300919663" id="guide-call" className="mt-5 flex items-center justify-center gap-2 text-navy font-semibold text-sm hover:text-teal-text">
              <Phone className="w-4 h-4" /> Prefer to talk? 1300 919 663
            </a>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  )
}
