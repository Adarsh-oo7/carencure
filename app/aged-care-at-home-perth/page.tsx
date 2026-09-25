import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema, FAQPageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import {
  Heart,
  HeartPulse,
  ShieldCheck,
  ArrowRight,
  Home,
  Clock,
  MapPin,
  FileCheck,
  UserCheck,
} from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Aged Care at Home in Perth | Home Care Packages | Care N Cure',
  },
  description:
    'Registered nurse-led aged care at home in Perth and Harrisdale. Compassionate in-home elderly care, Home Care Package guidance, Support at Home, medication oversight, and dedicated nurse coordinators. Call 1300 919 663.',
  keywords: [
    'aged care at home perth',
    'aged care at home harrisdale',
    'elderly care at home perth',
    'home care packages harrisdale',
    'support at home perth',
    'private aged care perth',
    'home nursing for elderly perth',
    'aged care provider near piara waters',
    'in home aged care perth',
    'aged care support at home perth',
    'registered nurse elderly care perth',
  ],
  alternates: { canonical: 'https://carencure.com.au/aged-care-at-home-perth' },
}

const faqs = [
  {
    question: 'How do I arrange aged care at home for my elderly parent in Perth?',
    answer:
      'Arranging care is straightforward. You can call Care N Cure directly on 1300 919 663 to speak with a Registered Nurse Coordinator. If your parent has an existing Home Care Package (HCP Levels 1–4) or wishes to self-fund private nursing, we can complete an in-home assessment and start care within 24 to 48 hours. If you have not yet applied through My Aged Care, our team guides your family step-by-step through the assessment process.',
  },
  {
    question: 'Why choose nurse-led home care over a standard aged care agency?',
    answer:
      'Standard agencies typically send rotating support workers with varying experience. At Care N Cure, every family is assigned One Dedicated Registered Nurse Coordinator. Your coordinator oversees clinical health, coordinates with your parent’s GP and specialists, monitors chronic conditions, administers medications, dresses complex wounds, and provides a continuous trusted relationship for your family.',
  },
  {
    question: 'Can we use Home Care Package (HCP) or Support at Home funding?',
    answer:
      'Yes. Care N Cure works with self-managed and plan-managed Home Care Package providers (including our partnership with Trilogy Care) and is fully aligned with the Australian Government Support at Home program. We ensure transparent pricing with zero travel fees across our 50km Perth metro radius.',
  },
  {
    question: 'Do you offer aged care at home in Harrisdale, Piara Waters, and surrounding suburbs?',
    answer:
      'Yes. Our practice headquarters is located at 15 Rockefeller Way, Harrisdale WA 6112. We provide immediate in-home aged care coverage across Harrisdale, Piara Waters, Canning Vale, Southern River, Armadale, Gosnells, Cockburn, South Perth, Nedlands, and all Perth metropolitan suburbs within 50km.',
  },
  {
    question: 'Can private nursing care start immediately while we wait for My Aged Care approval?',
    answer:
      'Absolutely. My Aged Care approvals can take months. Many Perth families engage Care N Cure for private in-home nursing or personal care on an interim basis, and then transition seamlessly to government funding once their package is assigned.',
  },
]

export default function AgedCareAtHomePerthPage() {
  return (
    <>
      <ServicePageSchema
        serviceName="Aged Care at Home in Perth"
        description="Compassionate, Registered Nurse-led aged care at home across Perth and Harrisdale. Dedicated nurse coordinators, Home Care Packages, and Support at Home."
        url="/aged-care-at-home-perth"
        procedureType="Aged Care at Home & Nurse Coordination"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Aged Care at Home Perth', item: 'https://carencure.com.au/aged-care-at-home-perth' },
        ]}
      />
      <FAQPageSchema faqs={faqs} />

      {/* Page Header */}
      <PageHeader
        title="Aged Care at Home in Perth and Harrisdale"
        subtitle="Compassionate, nurse-led in-home care for your loved ones. One dedicated nurse coordinator, transparent Home Care Package support, and clinical excellence."
        breadcrumbItems={[
          { name: 'Services', href: '/services' },
          { name: 'Aged Care at Home Perth', href: '/aged-care-at-home-perth' },
        ]}
        label="Nurse-Led Senior Care"
      />

      {/* Hero Family Intent Section */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
                <Heart className="w-3.5 h-3.5 text-teal-600" />
                <span>Supporting Perth Families & Seniors Since Day One</span>
              </div>

              <h2 className="text-navy text-2xl sm:text-3xl font-extrabold leading-tight">
                Helping Mum or Dad Live Safely, Comfortably & Independently at Home
              </h2>

              <p className="text-body text-base leading-relaxed">
                Watching an ageing parent struggle with daily routines, medications, or mobility is challenging. You want the highest standard of dignified care, but residential aged care is often not what your loved one wants.
              </p>

              <p className="text-body text-base leading-relaxed">
                <strong>Care N Cure Nursing Care Services</strong> brings high-level, clinical-grade care into your family’s home across Perth and Harrisdale. Under our signature <em>Your Dedicated Nurse™</em> model, your family never gets passed between strangers. A single, qualified Registered Nurse coordinator manages clinical health, personal care, and wellbeing.
              </p>

              {/* 4 Core Pillars for Families */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-border bg-surface flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <UserCheck className="w-5 h-5 text-teal-accent shrink-0" />
                    <h3 className="font-bold text-navy text-sm">One Dedicated Nurse</h3>
                  </div>
                  <p className="text-xs text-body">
                    The same AHPRA Registered Nurse visits each time, knowing your parent’s history, routines, and preferences intimately.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-border bg-surface flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <FileCheck className="w-5 h-5 text-teal-accent shrink-0" />
                    <h3 className="font-bold text-navy text-sm">HCP & Support at Home</h3>
                  </div>
                  <p className="text-xs text-body">
                    Transparent pricing compatible with Home Care Packages (Levels 1–4) and the new Support at Home framework.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-border bg-surface flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <HeartPulse className="w-5 h-5 text-teal-accent shrink-0" />
                    <h3 className="font-bold text-navy text-sm">Clinical & Complex Care</h3>
                  </div>
                  <p className="text-xs text-body">
                    From wound dressing and catheter care to insulin administration, diabetes oversight, and post-hospital recovery.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-border bg-surface flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-5 h-5 text-teal-accent shrink-0" />
                    <h3 className="font-bold text-navy text-sm">50km Zero Travel Fee</h3>
                  </div>
                  <p className="text-xs text-body">
                    Based at 15 Rockefeller Way, Harrisdale. We service all Perth metro suburbs within 50km with zero travel surcharges.
                  </p>
                </div>
              </div>

              {/* Related Service Links */}
              <div className="pt-4 border-t border-border">
                <h4 className="text-navy font-bold text-sm mb-3">Explore Specific Aged Care Support Options:</h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/homecare-packages"
                    className="px-3 py-1.5 rounded-lg bg-teal-50 text-teal-800 font-semibold hover:bg-teal-100 transition-colors border border-teal-200"
                  >
                    Home Care Packages (HCP) →
                  </Link>
                  <Link
                    href="/support-at-home"
                    className="px-3 py-1.5 rounded-lg bg-teal-50 text-teal-800 font-semibold hover:bg-teal-100 transition-colors border border-teal-200"
                  >
                    Support at Home Guidance →
                  </Link>
                  <Link
                    href="/private-nursing"
                    className="px-3 py-1.5 rounded-lg bg-teal-50 text-teal-800 font-semibold hover:bg-teal-100 transition-colors border border-teal-200"
                  >
                    Private In-Home Nursing →
                  </Link>
                  <Link
                    href="/post-hospital-care"
                    className="px-3 py-1.5 rounded-lg bg-teal-50 text-teal-800 font-semibold hover:bg-teal-100 transition-colors border border-teal-200"
                  >
                    Post-Hospital Recovery →
                  </Link>
                  <Link
                    href="/medication-management"
                    className="px-3 py-1.5 rounded-lg bg-teal-50 text-teal-800 font-semibold hover:bg-teal-100 transition-colors border border-teal-200"
                  >
                    Medication Oversight →
                  </Link>
                  <Link
                    href="/personal-care"
                    className="px-3 py-1.5 rounded-lg bg-teal-50 text-teal-800 font-semibold hover:bg-teal-100 transition-colors border border-teal-200"
                  >
                    Personal Care Assistance →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Callback & Enquiry Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <div className="card-base overflow-hidden border border-border shadow-md">
                  <div className="p-1.5 bg-teal-accent" />
                  <ContactForm
                    title="Speak with a Perth Nurse Coordinator"
                    subtitle="Have questions about aged care at home for yourself or a parent? Leave your details for a caring callback."
                    defaultService="Aged Care at Home / Elderly Support"
                  />
                </div>

                <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200 text-xs text-navy space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm text-teal-900">
                    <Clock className="w-4 h-4 text-teal-600" />
                    <span>Immediate Start Available</span>
                  </div>
                  <p className="text-body leading-relaxed">
                    No waiting lists for private home nursing. We can conduct an in-home assessment and start care within 24–48 hours across Perth.
                  </p>
                  <div className="pt-2 border-t border-teal-200 flex items-center justify-between">
                    <span className="font-semibold text-slate-700">Need urgent advice?</span>
                    <a href="tel:1300919663" className="font-bold text-teal-800 underline hover:text-navy">
                      Call 1300 919 663
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown for Seniors */}
      <section className="section-py bg-surface border-y border-border">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="section-label">Tailored Elderly Support</p>
            <h2 className="text-navy text-2xl sm:text-3xl font-extrabold mt-1">
              Comprehensive In-Home Care for Perth Seniors
            </h2>
            <p className="text-body text-sm mt-3">
              Every senior’s needs are unique. We create a customised care plan coordinated with your parent&apos;s doctor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-base p-6 bg-white border border-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-subtle text-navy flex items-center justify-center mb-4">
                  <HeartPulse className="w-6 h-6 text-teal-accent" />
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">Clinical Registered Nursing</h3>
                <p className="text-xs text-body leading-relaxed mb-4">
                  Delivered exclusively by AHPRA Registered Nurses: complex wound care, catheter and stoma care, subcutaneous and intramuscular injections, chronic illness monitoring, and clinical reviews.
                </p>
              </div>
              <Link href="/registered-nurses-clinical-care-services" className="text-teal-text text-xs font-bold hover:underline flex items-center gap-1">
                Clinical Services Details <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="card-base p-6 bg-white border border-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-subtle text-navy flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-teal-accent" />
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">Medication Management & Safety</h3>
                <p className="text-xs text-body leading-relaxed mb-4">
                  Webster-pak administration, dose reminders, prescription renewals, insulin management, and liaising with community pharmacies in Harrisdale and Perth.
                </p>
              </div>
              <Link href="/medication-management" className="text-teal-text text-xs font-bold hover:underline flex items-center gap-1">
                Medication Support <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="card-base p-6 bg-white border border-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-subtle text-navy flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-teal-accent" />
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">Personal Care & Daily Support</h3>
                <p className="text-xs text-body leading-relaxed mb-4">
                  Assistance with showering, dressing, grooming, mobility and transfers, meal preparation, companion care, and gentle fall-prevention exercises.
                </p>
              </div>
              <Link href="/personal-care" className="text-teal-text text-xs font-bold hover:underline flex items-center gap-1">
                Personal Care Support <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Suburb Coverage Map / Focus */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-navy to-navy-light text-white">
            <div className="max-w-3xl">
              <span className="text-teal-accent font-bold text-xs uppercase tracking-wider">Local Perth Presence</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 mb-4 text-white">
                Caring for Seniors in Harrisdale & Across Greater Perth
              </h2>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Based at 15 Rockefeller Way, Harrisdale WA 6112, our nursing team regularly visits elderly clients throughout the South-East corridor (Harrisdale, Piara Waters, Canning Vale, Armadale, Gosnells, Thornlie) as well as Nedlands, Claremont, Cottesloe, Fremantle, Rockingham, South Perth, and Joondalup.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/locations/harrisdale"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  Harrisdale Aged Care →
                </Link>
                <Link
                  href="/locations/canning-vale"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  Canning Vale →
                </Link>
                <Link
                  href="/locations/armadale"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  City of Armadale →
                </Link>
                <Link
                  href="/locations/gosnells"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  City of Gosnells →
                </Link>
                <Link
                  href="/locations/south-perth"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  South Perth →
                </Link>
                <Link
                  href="/locations"
                  className="px-4 py-2 rounded-xl bg-teal-accent text-navy font-bold text-xs hover:bg-teal-300 transition-colors"
                >
                  View All Perth Suburbs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-py bg-surface border-t border-border">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-10">
            <p className="section-label">Questions & Answers</p>
            <h2 className="text-navy text-2xl sm:text-3xl font-extrabold mt-1">
              Frequently Asked Questions About Aged Care at Home
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card-base p-6 bg-white border border-border">
                <h3 className="font-bold text-navy text-base mb-2">{faq.question}</h3>
                <p className="text-body text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Speak with a Perth Registered Nurse Today"
        subtitle="Call 1300 919 663 or send an enquiry to discuss how we can support your parent to live comfortably at home."
      />
    </>
  )
}
