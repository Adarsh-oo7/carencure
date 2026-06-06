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
  title: 'The Nurse Who Knows You | Home Care That Feels Personal Again',
  description:
    'One Client. One Dedicated Nurse Coordinator. Helping Australians stay safe, supported, and independent at home. Book a free consultation today.',
  keywords: [
    'private nursing Perth',
    'home nursing Perth WA',
    'dedicated nurse coordinator',
    'The Nurse Who Knows You',
    'one client one nurse',
    'registered nurse home visit Perth',
    'home care packages Perth',
    'aged care Perth',
  ],
  alternates: { canonical: 'https://carencure.com.au' },
  openGraph: {
    title: 'The Nurse Who Knows You | Home Care That Feels Personal Again',
    description: 'One Client. One Dedicated Nurse Coordinator. Helping Australians stay safe, supported, and independent at home.',
    url: 'https://carencure.com.au',
  },
}

const homeFaqs = [
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
      'Yes. Every nurse at Care N Cure is a fully registered nurse. Our founders, Jinu and Zuhair, are both registered nurses with 10+ years of clinical experience. Registration means a nurse has completed an accredited nursing degree, passed national standards, and is subject to ongoing professional regulation.',
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
      'We cover Perth metro and surrounding areas including Nedlands, Subiaco, Applecross, Mount Lawley, Fremantle, South Perth, Cottesloe, City of Gosnells, City of Armadale, Rockingham, and many more. If you are unsure whether we cover your area, please call us and we will let you know.',
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
        badge="Your Dedicated Nurse"
        headline="One Client. One Nurse Coordinator. One Trusted Relationship."
        subheadline={
          <div className="space-y-4">
            <p className="text-white/90 text-lg leading-relaxed">
              When someone you love needs care at home, the last thing you want is a stranger from a call centre who&apos;s juggling 300 other families — reading your mum&apos;s notes for the first time at the front door.
            </p>
            <p className="font-semibold text-teal-accent text-lg leading-relaxed">
              At Care N Cure, your family gets one dedicated Registered Nurse who shows up, learns your situation properly, and stays with you — not just for the first visit, but every single time.
            </p>
            <p className="font-medium text-white/85 leading-relaxed">
              No handoffs. No repeating yourself. Just a nurse who genuinely knows you.
            </p>
          </div>
        }
        ctaPrimary={{ text: 'Book a Free Consultation', href: '/contact' }}
        ctaSecondary={{ text: 'Call Us Today', href: 'tel:+61481748516', isPhone: true }}
      />

      {/* Strong Positioning Statement Callout */}
      <section className="bg-teal-50 py-12 border-b border-teal-100" aria-label="Positioning statement">
        <div className="section-container text-center max-w-4xl">
          <p className="text-navy font-semibold text-lg sm:text-xl leading-relaxed">
            &ldquo;Unlike traditional home care providers, every client receives a dedicated nurse coordinator who provides regular home visits, clinical oversight, and a single trusted point of contact for both clients and families.&rdquo;
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

      <CTASection
        title="Ready to meet your nurse?"
        description="Call us directly — you'll speak with a registered nurse, not a receptionist. If your loved one has just come home from hospital, don't wait. We answer every call."
        secondaryLink={{ text: 'Send an enquiry', href: '/contact' }}
      />
    </>
  )
}
