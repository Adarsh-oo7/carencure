import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { ServicePageSchema } from '@/components/schema'

export const metadata: Metadata = {
  title: {
    absolute: 'Support at Home and Nursing Funding Perth | Care N Cure',
  },
  description: 'Understand private pay, Support at Home, CHSP, DVA and NDIS nursing pathways in Perth. We explain next steps without promising funding approval.',
  alternates: { canonical: 'https://carencure.com.au/funded-care' },
}

const fundingCards = [
  {
    id: 'hcp',
    title: 'Support at Home & Home Care Packages (HCP)',
    whatItIs:
      'Government funding for older Australians who need clinical nursing and personal support to stay safely at home. As the Commonwealth transitions from Home Care Packages to the Support at Home program, clinical nursing remains an approved core service.',
    whoIsEligible:
      'Australians aged 65 and over (50+ for First Nations people) assessed via My Aged Care (ACAT or regional assessment).',
    whatItCovers: [
      'Registered nursing visits and health monitoring',
      'Complex wound care and aseptic dressing changes',
      'Medication oversight and administration',
      'Catheter care and clinical assessments',
      'Care coordination and liaison with treating GPs',
    ],
    howToAccess:
      'Register with My Aged Care at myagedcare.gov.au or call 1800 200 422 to request an ACAT assessment.',
    howWeHelp:
      'We deliver registered nursing care for self-managed package holders and subcontract with approved care management providers such as Trilogy Care. We help families understand their clinical budget without promising funding approval.',
  },

  {
    id: 'transition',
    title: 'Post-Hospital Transition Care',
    whatItIs:
      'Short-term government-funded support to help you recover and regain independence after a hospital stay. Transition care is designed to reduce the pressure of choosing long-term care options immediately after discharge.',
    whoIsEligible:
      'Older Australians leaving hospital who need more time to recover before they can return home safely or before long-term care is arranged. A hospital social worker or discharge planner organises access.',
    whatItCovers: [
      'Nursing and therapy support at home',
      'Personal care during early recovery',
      'Support while longer-term arrangements are made',
    ],
    howToAccess:
      'Ask your hospital social worker or discharge planner to refer you for Transition Care before you leave hospital.',
    howWeHelp:
      'We bridge the gap between hospital and home. Your dedicated nurse can begin visits within 24–48 hours of discharge, supporting your recovery from the first day you\'re home.',
  },
]

const navigationSteps = [
  {
    id: 'nav-step-1',
    step: '1',
    title: 'Enquiry',
    body: 'You call or contact us online. We talk through your situation in plain language.',
  },
  {
    id: 'nav-step-2',
    step: '2',
    title: 'Eligibility Check',
    body: "A registered nurse helps you understand which funding options you're likely eligible for — at no cost.",
  },
  {
    id: 'nav-step-3',
    step: '3',
    title: 'My Aged Care Assessment',
    body: 'We guide you through the government assessment process and support your application.',
  },
  {
    id: 'nav-step-4',
    step: '4',
    title: 'Provider Agreement',
    body: 'Once approved, you sign an agreement with our practice and we begin care planning.',
  },
  {
    id: 'nav-step-5',
    step: '5',
    title: 'Care Begins',
    body: 'Your dedicated nurse is assigned. Your first visit is scheduled within 24–48 hours.',
  },
]

const faqs = [
  {
    id: 'fq-hcp',
    question: 'Can I use my Home Care Package or Support at Home funds with Care N Cure?',
    answer:
      'Yes. If you self-manage your package or your approved care management provider (such as Trilogy Care) allows choice of clinical subcontractor, our registered nurses can deliver your clinical care under your approved budget.',
  },
  {
    id: 'fq-no-package',
    question: "What if I don't have a package yet?",
    answer:
      "We provide private nursing while you wait for your assessment or assignment through My Aged Care. We can outline the assessment steps without charging administration fees for basic advice.",
  },
  {
    id: 'fq-timeline',
    question: 'How long does funding approval take?',
    answer:
      'Approval and package assignment timeframes depend entirely on the Commonwealth My Aged Care queue. Because waiting periods can take months, many families start with private nursing visits to manage immediate clinical needs.',
  },
]

export default function FundedCarePage() {
  return (
    <>
      <ServicePageSchema
        serviceName="Support at Home and Nursing Funding Perth | Care N Cure"
        description="Understand private pay, Support at Home, CHSP, DVA and NDIS nursing pathways in Perth. We explain next steps without promising funding approval."
        url="/funded-care"
        procedureType="Funded Home Care Guidance"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Funded Care', item: 'https://carencure.com.au/funded-care' },
        ]}
      />
      {/* SECTION 1 — HERO */}
      <section
        className="py-24 text-center"
        style={{ background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 60%, #14b8a6 100%)' }}
        aria-labelledby="funded-care-h1"
      >
        <div className="section-container max-w-3xl mx-auto">
          <h1
            id="funded-care-h1"
            className="text-white font-extrabold mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: 1.1 }}
          >
            Your Care, Funded.
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
            Many Perth families don&apos;t realise they&apos;re eligible for government-funded
            nursing and support at home. We help you understand your options — and access what
            you&apos;re entitled to.
          </p>
        </div>
      </section>

      {/* SECTION 2 — EXPANDED FUNDING CARDS */}
      <section className="py-20 bg-white" aria-labelledby="funding-options-heading">
        <div className="section-container">
          <h2 id="funding-options-heading" className="text-navy text-center mb-12">
            Funding Options Explained
          </h2>
          <div className="space-y-8">
            {fundingCards.map(
              ({ id, title, whatItIs, whoIsEligible, whatItCovers, howToAccess, howWeHelp }) => (
                <div
                  key={id}
                  id={`funded-card-${id}`}
                  className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden"
                >
                  <div className="p-8">
                    <h3 className="text-navy font-bold text-2xl mb-6">{title}</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-5">
                        <div>
                          <h4 className="text-teal-700 font-semibold text-sm uppercase tracking-wide mb-2">
                            What it is
                          </h4>
                          <p className="text-body text-sm leading-relaxed">{whatItIs}</p>
                        </div>
                        <div>
                          <h4 className="text-teal-700 font-semibold text-sm uppercase tracking-wide mb-2">
                            Who is eligible
                          </h4>
                          <p className="text-body text-sm leading-relaxed">{whoIsEligible}</p>
                        </div>
                        <div>
                          <h4 className="text-teal-700 font-semibold text-sm uppercase tracking-wide mb-2">
                            How to access
                          </h4>
                          <p className="text-body text-sm leading-relaxed">{howToAccess}</p>
                        </div>
                      </div>
                      <div className="space-y-5">
                        <div>
                          <h4 className="text-teal-700 font-semibold text-sm uppercase tracking-wide mb-2">
                            What it can cover
                          </h4>
                          <ul className="space-y-2">
                            {whatItCovers.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-body text-sm"
                              >
                                <span className="text-teal-600 font-bold mt-0.5">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* How we help — teal callout */}
                  <div className="bg-teal-50 border-t border-teal-200 px-8 py-5">
                    <p className="text-teal-700 text-sm font-semibold uppercase tracking-wide mb-2">
                      How we help
                    </p>
                    <p className="text-teal-900 text-sm leading-relaxed">{howWeHelp}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* SECTION 3 — FUNDING NAVIGATION TIMELINE */}
      <section className="py-20 bg-slate-50" aria-labelledby="nav-timeline-heading">
        <div className="section-container">
          <h2 id="nav-timeline-heading" className="text-navy text-center mb-14">
            How We Help You Navigate Funding
          </h2>

          {/* Desktop: horizontal stepper */}
          <div className="hidden lg:flex items-start gap-0 max-w-5xl mx-auto">
            {navigationSteps.map(({ id, step, title, body }, idx) => (
              <div key={id} id={id} className="flex-1 relative flex flex-col items-center text-center px-4">
                {/* Connector line */}
                {idx < navigationSteps.length - 1 && (
                  <div
                    className="absolute top-6 left-1/2 w-full h-0.5"
                    style={{ background: 'rgba(13,148,136,0.3)' }}
                    aria-hidden="true"
                  />
                )}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-lg relative z-10 mb-4"
                  style={{ background: '#0d9488', color: '#fff' }}
                >
                  {step}
                </div>
                <h4 className="text-navy font-bold text-sm mb-2">{title}</h4>
                <p className="text-body text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical stepper */}
          <div className="lg:hidden space-y-6 max-w-xl mx-auto">
            {navigationSteps.map(({ id, step, title, body }) => (
              <div key={id} id={`mobile-${id}`} className="flex gap-5 items-start">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold flex-shrink-0"
                  style={{ background: '#0d9488', color: '#fff' }}
                >
                  {step}
                </div>
                <div>
                  <h4 className="text-navy font-bold mb-1">{title}</h4>
                  <p className="text-body text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — FAQ ACCORDION */}
      <section className="py-20 bg-white" aria-labelledby="funded-faq-heading">
        <div className="section-container max-w-3xl mx-auto">
          <h2 id="funded-faq-heading" className="text-navy text-center mb-10">
            Funding Questions Answered
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map(({ id, question, answer }) => (
              <AccordionItem
                key={id}
                value={id}
                className="border border-border rounded-xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-navy font-semibold text-left py-5">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-body leading-relaxed pb-5">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-center">
            <p className="text-xs text-amber-900 leading-relaxed">
              <strong>Medical Disclaimer:</strong> In-home care services are not an emergency service. If the person requiring care is acutely unwell or experiencing a life-threatening medical emergency, call <strong>000</strong> immediately.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — BOTTOM CTA */}
      <section
        className="py-20 text-center"
        style={{ background: 'linear-gradient(135deg, #091E30 0%, #0D2B45 60%, #1A3D5C 100%)' }}
        aria-labelledby="funded-care-cta-heading"
      >
        <div className="section-container">
          <h2 id="funded-care-cta-heading" className="text-white mb-4">
            Speak with a nurse about your funding options.
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.78)' }}>
            We&apos;ll explain your options clearly, at no cost. No jargon. No pressure.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-teal-400 text-navy font-bold px-8 py-4 rounded-xl hover:bg-teal-300 transition-colors text-lg"
            id="funded-care-book-cta"
          >
            Book a Free Funding Chat
          </Link>
        </div>
      </section>
    </>
  )
}
