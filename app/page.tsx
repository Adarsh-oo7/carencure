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

export const metadata: Metadata = {
  title: 'Private Nursing at Home in Perth | Care N Cure Nursing Care Services',
  description:
    'Registered nurses providing in-home nursing care across Perth, WA. Post-hospital recovery, wound care, medication management. Call our founders directly.',
  keywords: [
    'private nursing Perth',
    'home nursing Perth WA',
    'registered nurse home visit Perth',
    'post hospital care Perth',
    'AHPRA registered nurse Perth',
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
        badge="AHPRA Registered Nurses · Perth, WA"
        headline="Trusted Nursing Care, At Home. For the Australians Who Deserve It Most."
        subheadline="When someone you love comes home from hospital, they need more than good intentions. They need a qualified nurse who shows up, knows their name, and genuinely cares. That’s exactly what we provide."
        ctaPrimary={{ text: 'Call Us Now', href: '#', isPhone: true }}
        ctaSecondary={{ text: 'See Our Services', href: '#services' }}
      />

      <TrustBar />

      <div id="services">
        <ServicesGrid />
      </div>

      <WhySection />

      <HowItWorks />

      <FoundersPreview />

      <ServiceAreas />

      <FAQSection
        faqs={homeFaqs}
        title="Questions we hear most"
        subtitle="Honest answers about private nursing in Perth — no jargon."
      />

      <CTASection
        title="Ready to talk? We’re here when it matters most."
        description="Call us directly — you’ll speak with a registered nurse, not a receptionist or call centre. If your loved one has just come home from hospital, don’t wait. We’re here to help, and we answer every call."
        secondaryLink={{ text: 'Send an enquiry', href: '/contact' }}
      />
    </>
  )
}
