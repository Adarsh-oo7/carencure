import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/hero'
import { TrustBar } from '@/components/sections/trust-bar'
import { ServicesGrid } from '@/components/sections/services-grid'
import { WhySection } from '@/components/sections/why-section'
import { HowItWorks } from '@/components/sections/how-it-works'
import { FoundersPreview } from '@/components/sections/founders-preview'
import { ServiceAreas } from '@/components/sections/service-areas'
import { FAQSection } from '@/components/sections/faq-section'
import { CTASection } from '@/components/sections/cta'
import { MedicalBusinessSchema, OrganizationSchema, LocalBusinessSchema, FAQPageSchema, HowToSchema } from '@/components/schema'
import { DedicatedNurseSection } from '@/components/sections/dedicated-nurse-section'
import { PatientStorySection } from '@/components/sections/patient-story-section'
import { FundedCareSection } from '@/components/sections/funded-care-section'

import { DecisionBlock } from '@/components/sections/decision-block'
import { CtaUncertaintyReducer } from '@/components/sections/cta-uncertainty-reducer'

export const metadata: Metadata = {
  title: {
    absolute: 'At Home Nurse Perth | Aged Care In-Home Support & Home Care Services WA | Care N Cure',
  },
  description:
    'Need an at-home nurse near you in Perth? AHPRA Registered Nurses for aged care in-home support, home care services WA, wound care & post-hospital recovery. Call 1300 919 663.',
  keywords: [
    'at home nurse near me',
    'at home nurse service perth',
    'at home nurse care',
    'aged care in home support',
    'aged care in home services',
    'aged home care services',
    'aged care agency perth',
    'home care services wa',
    'home care services',
    'aged care near me perth',
    'aged care nursing services',
    'best home care package providers',
    'private nurse perth',
    'home care packages Perth',
    'Care N Cure',
  ],
  alternates: { canonical: 'https://carencure.com.au' },
  openGraph: {
    title: 'At Home Nurse Perth | Aged Care In-Home Support & Home Care Services WA | Care N Cure',
    description:
      'Need an at-home nurse near you in Perth? AHPRA Registered Nurses for aged care in-home support, home care services WA, wound care & post-hospital recovery. Call 1300 919 663.',
    url: 'https://carencure.com.au',
  },
}

const homeFaqs = [
  {
    id: 'faq-at-home-nurse',
    question: 'Is there an at-home nurse near me in Perth?',
    answer:
      'Yes. Care N Cure is a Perth-based in-home nursing practice with AHPRA Registered Nurses visiting clients across the entire metropolitan area — from Joondalup and Rockingham to Armadale, Claremont, and South Perth. No GP referral is needed. Simply call 1300 919 663 and we arrange a clinical intake assessment within 24–48 hours.',
  },
  {
    id: 'faq-aged-care-support',
    question: 'What aged care in-home support do you provide?',
    answer:
      'We provide clinical aged care in-home support for seniors across Perth, delivered by AHPRA Registered Nurses. This includes comprehensive health assessments, wound dressing and staple removal, medication management and injections, catheter care, vital signs monitoring, and coordination with GPs and specialists. Services are available privately, or funded through Home Care Packages (HCP Levels 1–4), Support at Home, or NDIS.',
  },
  {
    id: 'faq-aged-care-agency',
    question: 'Are you an aged care agency in Perth?',
    answer:
      'Care N Cure is a registered nurse-led in-home aged care practice based in Harrisdale, Perth. Unlike traditional aged care agencies that dispatch rotating support workers, every Care N Cure client is assigned a dedicated Registered Nurse Coordinator who attends every visit. We are AHPRA-registered and provide clinical nursing — not just personal care or domestic support.',
  },
  {
    id: 'faq-what-private-nurse',
    question: 'What is a private nurse at home?',
    answer:
      'A private nurse at home is a registered nurse who visits you in your own home to provide clinical nursing care. This includes post-surgical wound care, medication administration, health monitoring, and supporting recovery after a hospital stay. It is different from a support worker or carer — a registered nurse has university-level clinical training and is fully licensed to perform clinical duties.',
  },
  {
    id: 'faq-registration',
    question: 'Are your nurses fully registered?',
    answer:
      'Yes. Every nurse at Care N Cure is an AHPRA-registered nurse. Our founder, Jinu, is a registered nurse with over a decade of clinical experience. Registration means a nurse has completed an accredited nursing degree, passed national standards, and is subject to ongoing professional regulation.',
  },
  {
    id: 'faq-how-quickly',
    question: 'How quickly can a nurse visit?',
    answer:
      'We arrange an initial clinical assessment within 24–48 hours of your enquiry. Depending on your location and scheduling, nursing visits can often begin shortly thereafter. For urgent post-discharge situations, please call us directly on 1300 919 663 and we will prioritise your intake.',
  },
  {
    id: 'faq-suburb',
    question: 'Do you service my Perth suburb?',
    answer:
      'We cover Perth metropolitan suburbs and surrounding areas within our 50km service radius, including Armadale, Nedlands, Subiaco, Applecross, Mount Lawley, Fremantle, South Perth, Cottesloe, City of Gosnells, Rockingham, Canning Vale, Midland, and Joondalup. If you are unsure whether we cover your area, call 1300 919 663.',
  },
  {
    id: 'faq-cost',
    question: 'What does it cost?',
    answer:
      'Standard weekday clinical nurse visits typically range from $110 to $160 per hour, depending on care complexity. We provide clear, itemised pricing during your initial assessment with zero hidden administrative fees. Services can be privately funded or supported through Home Care Packages and NDIS plans.',
  },
  {
    id: 'faq-aged-care',
    question: 'Is this different from residential aged care?',
    answer:
      'Yes. Care N Cure provides in-home nursing care, not residential aged care. You remain in the comfort of your own home — our nurses come to you. We provide clinical nursing care by registered nurses, which differs from general personal care or domestic support.',
  },
]

export default function HomePage() {
  return (
    <>
      <MedicalBusinessSchema />
      <OrganizationSchema />
      <LocalBusinessSchema />
      <HowToSchema />
      <FAQPageSchema faqs={homeFaqs.map(faq => ({ question: faq.question, answer: faq.answer }))} />

      <HeroSection
        badge="The Nurse Who Knows You"
        headline="Home Nursing Care in Perth by a Dedicated Registered Nurse"
        subheadline={
          <div className="space-y-4">
            <h2 className="text-teal-accent text-xl sm:text-2xl font-bold">
              One Client. One Dedicated Nurse Coordinator. One Trusted Relationship.
            </h2>
            <p className="text-white/95 text-lg leading-relaxed">
              A trusted Perth nurse at home for clinical care, recovery, aged care and ongoing health support—with one consistent point of contact for your family.
            </p>
            <p className="font-semibold text-teal-accent text-base sm:text-lg leading-relaxed">
              No rotating casual rosters. No repeating your medical story at every visit. Just a qualified nurse who genuinely knows your situation.
            </p>
          </div>
        }
        ctaPrimary={{ text: 'Call 1300 919 663', href: 'tel:1300919663', isPhone: true }}
        ctaSecondary={{ text: 'Book a free nurse consultation', href: '/contact' }}
      />

      {/* Decision Block: What kind of support are you looking for? */}
      <DecisionBlock />

      {/* Strong Positioning Statement Callout */}
      <section className="bg-teal-50 py-10 border-b border-teal-100" aria-label="Positioning statement">
        <div className="section-container text-center max-w-4xl">
          <p className="text-navy font-semibold text-lg sm:text-xl leading-relaxed">
            &ldquo;Unlike traditional agencies that rotate casual carers, every Care N Cure client is supported by a dedicated Nurse Coordinator providing regular home visits, clinical oversight, and a single trusted point of contact for both clients and families.&rdquo;
          </p>
        </div>
      </section>

      <TrustBar />

      <div id="services">
        <ServicesGrid />
      </div>

      <FundedCareSection />

      <WhySection />

      <DedicatedNurseSection />

      <div id="how-it-works">
        <HowItWorks />
      </div>

      <FoundersPreview />

      <PatientStorySection />

      <ServiceAreas />

      <FAQSection
        faqs={homeFaqs}
        title="Questions we hear most"
        subtitle="Honest answers about private nursing in Perth — no jargon."
      />

      <section className="py-10 bg-white" aria-label="What to expect when contacting Care N Cure">
        <div className="section-container max-w-4xl">
          <CtaUncertaintyReducer />
        </div>
      </section>

      <CTASection
        title="Ready to discuss in-home nursing for your family?"
        description="Call 1300 919 663 to speak directly with our nursing intake team. We arrange comprehensive in-home clinical assessments within 24–48 hours across metropolitan Perth."
        secondaryLink={{ text: 'Book a free nurse consultation', href: '/contact' }}
      />
    </>
  )
}
