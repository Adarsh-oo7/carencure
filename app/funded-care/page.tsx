import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'Home Care Funding | HCP, NDIS & CHSP | Care N Cure Perth',
  description:
    'Care N Cure supports clients through NDIS, Home Care Packages, CHSP, and post-hospital transition care. Perth home care funding explained simply.',
  alternates: { canonical: 'https://carencure.com.au/funded-care' },
}

const fundingCards = [
  {
    id: 'hcp',
    title: 'Home Care Packages (HCP)',
    whatItIs:
      'A government-funded program for older Australians (65+) who need coordinated support at home. Packages are available at four levels — from basic support (Level 1) to high-level care needs (Level 4). Funding is managed by an approved provider like Care N Cure.',
    whoIsEligible:
      'Australians aged 65 and over (50+ for Aboriginal and Torres Strait Islander people) assessed as needing coordinated care at home.',
    whatItCovers: [
      'Registered nursing visits',
      'Wound care and medication management',
      'Personal care and hygiene support',
      'Allied health and mobility support',
      'Care coordination and case management',
    ],
    howToAccess:
      'Register with My Aged Care at myagedcare.gov.au or call 1800 200 422 to request an ACAT assessment.',
    howWeHelp:
      'We are an approved Home Care Package provider. Once your package is assigned, we can begin services immediately and help you get maximum value from your funding.',
  },
  {
    id: 'ndis',
    title: 'NDIS Support',
    whatItIs:
      'The National Disability Insurance Scheme funds support for Australians under 65 with a permanent and significant disability. Nursing and clinical care can be funded under specific support categories within your NDIS plan.',
    whoIsEligible:
      'Australians under 65 with a permanent and significant disability that affects their daily life. Eligibility is assessed by the NDIS.',
    whatItCovers: [
      'In-home registered nursing care',
      'Complex wound care and catheter management',
      'Medication administration and health monitoring',
      'Assistance with daily living (health-related tasks)',
      'Improved health and wellbeing supports',
    ],
    howToAccess:
      'Contact the NDIS on 1800 800 110 or visit ndis.gov.au to start your access request.',
    howWeHelp:
      'We are a registered NDIS provider. We work within your NDIS plan and coordinate directly with your support coordinator to ensure seamless, nurse-led care.',
  },
  {
    id: 'chsp',
    title: 'Commonwealth Home Support Programme (CHSP)',
    whatItIs:
      'The CHSP is the entry point into the aged care system for older Australians who need a little help to stay independent at home. It provides subsidised, basic support services funded by the Australian Government.',
    whoIsEligible:
      'Australians aged 65 and over (50+ for Aboriginal and Torres Strait Islander people) who need entry-level support. Also available to some younger people with specific needs.',
    whatItCovers: [
      'Basic nursing and personal care',
      'Domestic assistance',
      'Allied health and transport',
      'Social support and respite',
    ],
    howToAccess:
      'Contact My Aged Care on 1800 200 422 to request a Regional Assessment Service (RAS) assessment.',
    howWeHelp:
      'CHSP is an excellent bridge if you\'re waiting for a Home Care Package. We can provide private nursing in the interim and help guide you through the assessment process.',
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
    title: 'My Aged Care / NDIS Assessment',
    body: 'We guide you through the government assessment process and support your application.',
  },
  {
    id: 'nav-step-4',
    step: '4',
    title: 'Provider Agreement',
    body: 'Once approved, you sign a provider agreement with Care N Cure and we begin care planning.',
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
    question: 'Can I use my Home Care Package with Care N Cure?',
    answer:
      'Yes. We are an approved Home Care Package provider. Once your package is assigned through My Aged Care, we can begin delivering services under your funding immediately.',
  },
  {
    id: 'fq-no-package',
    question: "What if I don't have a package yet?",
    answer:
      "We can provide private nursing while you wait for your package to be approved — packages can take time to be assigned. We'll also guide you through the My Aged Care registration and assessment process step by step.",
  },
  {
    id: 'fq-ndis-nursing',
    question: 'Does NDIS cover nursing care at home?',
    answer:
      'Yes. NDIS can fund registered nursing services under Assistance with Daily Life and Improved Health and Wellbeing. We are a registered NDIS provider and work within your existing NDIS plan.',
  },
  {
    id: 'fq-chsp',
    question: 'What is CHSP and am I eligible?',
    answer:
      "The Commonwealth Home Support Programme provides entry-level support for Australians aged 65+. It's a great starting point if your needs are lower, or as a bridge while you wait for a Home Care Package to be assigned.",
  },
  {
    id: 'fq-timeline',
    question: 'How long does funding approval take?',
    answer:
      'It varies. NDIS assessments can take several weeks to months. Home Care Package waitlists can be significant. CHSP is generally faster to access. We recommend starting the process early — and we can provide private nursing in the interim.',
  },
]

export default function FundedCarePage() {
  return (
    <>
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
                  {/* How Care N Cure helps — teal callout */}
                  <div className="bg-teal-50 border-t border-teal-200 px-8 py-5">
                    <p className="text-teal-700 text-sm font-semibold uppercase tracking-wide mb-2">
                      How Care N Cure helps
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
