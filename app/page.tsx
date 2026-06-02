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
import { MedicalBusinessSchema, OrganizationSchema, LocalBusinessSchema } from '@/components/schema'
import { DedicatedNurseSection } from '@/components/sections/dedicated-nurse-section'
import { PatientStorySection } from '@/components/sections/patient-story-section'
import { FundedCareSection } from '@/components/sections/funded-care-section'

export const metadata: Metadata = {
  title: 'Your Dedicated Nurse at Home | Care N Cure Perth WA',
  description:
    "Perth's first dedicated nurse model — one registered nurse for each client. Post-hospital recovery, NDIS, Home Care Packages. AHPRA registered nurses. Harrisdale, Perth WA.",
  keywords: [
    'private nursing Perth',
    'home nursing Perth WA',
    'registered nurse home visit Perth',
    'post hospital care Perth',
    'AHPRA registered nurse Perth',
    'dedicated nurse Perth',
    'one nurse one client Perth',
    'home care packages Perth',
    'NDIS nursing Perth',
    'post hospital care Perth WA',
  ],
  alternates: { canonical: 'https://carencure.com.au' },
  openGraph: {
    title: 'Private Nursing at Home in Perth | Care N Cure',
    description: 'Registered nurses for in-home care across Perth, WA.',
    url: 'https://carencure.com.au',
  },
}

const homeFaqs = [
  {
    id: 'faq-what-private-nurse',
    question: 'What is a private nurse at home?',
    answer:
      'A private nurse at home is an AHPRA-registered nurse who visits you in your own home to provide clinical nursing care. This includes post-surgical wound care, medication administration, health monitoring, and supporting recovery after a hospital stay. It is different from a support worker or carer — a registered nurse has university-level clinical training and is licensed by AHPRA.',
  },
  {
    id: 'faq-ahpra',
    question: 'Are your nurses AHPRA registered?',
    answer:
      'Yes. Every nurse at Care N Cure is AHPRA registered. Our founders, Jinu and Zuhair, are both registered nurses with 10+ years of clinical experience. AHPRA registration means a nurse has completed an accredited nursing degree, passed national standards, and is subject to ongoing professional regulation.',
  },
  {
    id: 'faq-how-quickly',
    question: 'How quickly can a nurse visit?',
    answer:
      'We aim to arrange an initial care assessment within 24–48 hours of your enquiry. Depending on your location and scheduling, nursing visits can often begin within a few days. For urgent post-discharge situations, please call us directly and we will do our best to accommodate you promptly.',
  },
  {
    id: 'faq-suburb',
    question: 'Do you service my Perth suburb?',
    answer:
      'We cover Perth metro and surrounding areas including Nedlands, Subiaco, Joondalup, Applecross, Mount Lawley, Harrisdale, Fremantle, South Perth, Cottesloe, Midland, and many more. If you are unsure whether we cover your area, please call us and we will let you know.',
  },
  {
    id: 'faq-cost',
    question: 'What does it cost?',
    answer:
      'Costs vary depending on the type of care, visit frequency, and duration. We provide clear pricing during your free care assessment — no hidden fees. Private nursing is not usually covered by Medicare, but some services may be covered through NDIS, DVA, or private health insurance. Please call us to discuss your situation.',
  },
  {
    id: 'faq-aged-care',
    question: 'Is this different from aged care?',
    answer:
      'Yes. We are an in-home private nursing practice, not an aged care facility. You stay in your own home — we come to you. We are not a government-operated aged care service. We provide clinical nursing care by registered nurses, which is different from aged care support work or personal care. Many of our clients are elderly, but we also serve adults of all ages recovering from surgery, illness, or managing a chronic condition.',
  },
]

export default function HomePage() {
  return (
    <>
      <MedicalBusinessSchema />
      <OrganizationSchema />
      <LocalBusinessSchema />

      <HeroSection
        badge="Perth's First Dedicated Nurse Model"
        headline="Your Dedicated Nurse™ — One Client. One Nurse."
        subheadline="When someone you love comes home from hospital, they deserve one nurse who knows them by name — their history, their family, their goals. Not a roster. Not a call centre. One dedicated registered nurse, every time."
        ctaPrimary={{ text: 'Meet Your Dedicated Nurse', href: '/your-dedicated-nurse' }}
        ctaSecondary={{ text: 'How It Works', href: '#how-it-works' }}
      />

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

      <CTASection
        title="Ready to meet your nurse?"
        description="Call us directly — you'll speak with a registered nurse, not a receptionist. If your loved one has just come home from hospital, don't wait. We answer every call."
        secondaryLink={{ text: 'Send an enquiry', href: '/contact' }}
      />
    </>
  )
}
