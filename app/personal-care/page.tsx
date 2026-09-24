import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { Heart, CheckCircle, HeartPulse, ShieldCheck, ArrowRight, UserCheck, Sparkles, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Personal Care at Home Perth | In-Home Personal Care Services WA | Care N Cure',
  },
  description:
    'Professional personal care services at home in Perth. Nurse-supervised bathing, grooming, dressing & continence care for elderly & NDIS clients. Call 1300 919 663.',
  keywords: [
    'personal care at home perth',
    'personal care services perth',
    'in home personal care perth',
    'home personal care perth',
    'personal care worker perth',
    'aged care personal care perth',
    'ndis personal care perth',
    'personal care support worker perth',
    'home care personal services wa',
    'daily personal care at home',
    'private personal care perth',
    'personal care for elderly perth',
  ],
  alternates: { canonical: 'https://carencure.com.au/personal-care' },
}

const faqs = [
  {
    question: 'What personal care services do you provide at home in Perth?',
    answer:
      'Care N Cure provides a full range of personal care services delivered in your home across Perth: showering and bathing assistance, grooming (hair, oral care, shaving), dressing and undressing support, continence management and hygiene care, toileting assistance, skin integrity checks, and morning/evening routines. All personal care is delivered under Registered Nurse clinical oversight.',
  },
  {
    question: 'Who delivers personal care — a nurse or support worker?',
    answer:
      'Personal care activities (bathing, dressing, grooming, continence) can be delivered by trained support workers under the supervision of your assigned Care N Cure Registered Nurse Coordinator. For personal care tasks that have a clinical component (e.g., skin integrity assessment, catheter hygiene, wound-adjacent cleaning), your Registered Nurse attends directly.',
  },
  {
    question: 'Is personal care at home funded by NDIS or Home Care Packages?',
    answer:
      'Yes. Personal care is a core support under NDIS (Core Supports – Daily Activities) and is included in Home Care Packages (HCP Levels 1–4) and the Support at Home program. Many clients combine nurse-delivered clinical care with personal care support, all coordinated by Care N Cure for seamless service delivery.',
  },
  {
    question: 'How do you ensure dignity during personal care?',
    answer:
      'Dignity, privacy, and respect are non-negotiable at Care N Cure. We match clients with the same personal care provider at every visit. We encourage client-directed care — you tell us exactly how you prefer your routine to be done. Our coordinator monitors all feedback and immediately addresses any concerns.',
  },
  {
    question: 'Can you provide personal care alongside nursing care?',
    answer:
      'Absolutely. This integrated approach is one of our key advantages. Your Registered Nurse Coordinator oversees both clinical nursing (wound care, medication, injections) and personal care in a coordinated care plan, ensuring nothing is missed and your GP receives complete clinical updates.',
  },
]

const services = [
  { icon: Sparkles, title: 'Showering & Bathing', desc: 'Safe bathing and showering assistance with appropriate aids, warm water, and personal preferences respected.' },
  { icon: UserCheck, title: 'Grooming & Hygiene', desc: 'Hair care, oral hygiene, shaving, nail care (non-podiatric), and skincare routines.' },
  { icon: Heart, title: 'Dressing & Undressing', desc: 'Assistance choosing appropriate clothing and dressing/undressing, including compression stockings.' },
  { icon: ShieldCheck, title: 'Continence Care', desc: 'Toileting support, pad/pad changing, continence hygiene, and catheter bag emptying.' },
  { icon: HeartPulse, title: 'Skin Integrity Checks', desc: 'Visual skin assessments during personal care visits to detect pressure injuries or skin breakdown early.' },
  { icon: Clock, title: 'Morning & Evening Routines', desc: 'Scheduled morning preparation and/or evening wind-down routines tailored to your preferences.' },
]

export default function PersonalCare() {
  return (
    <>
      <ServicePageSchema
        serviceName="Personal Care at Home Perth | In-Home Personal Care Services WA"
        description="Professional personal care services at home in Perth. Nurse-supervised bathing, grooming, dressing & continence care for elderly & NDIS clients."
        url="/personal-care"
        procedureType="Personal Care"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Services', item: 'https://carencure.com.au/services' },
          { name: 'Personal Care', item: 'https://carencure.com.au/personal-care' },
        ]}
      />

      <PageHeader
        title="Personal Care at Home in Perth"
        subtitle="Nurse-supervised personal care services delivered in your home across Perth — bathing, grooming, dressing, continence management and daily routines for elderly and NDIS clients."
        breadcrumbItems={[
          { name: 'Services', href: '/#services' },
          { name: 'Personal Care at Home', href: '/personal-care' },
        ]}
        label="In-Home Personal Care Perth"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8">

              <div>
                <p className="section-label mb-2">Nurse-Supervised Personal Care</p>
                <h2 className="text-navy text-3xl font-bold">In-Home Personal Care Services in Perth WA</h2>
                <div className="section-divider" />
                <p className="text-body text-lg leading-relaxed mt-4">
                  Maintaining independence at home begins with dignified, reliable daily personal care. Care N Cure provides <strong>professional personal care services at home</strong> across Perth, with a key advantage: all personal care is delivered under the clinical oversight of your assigned <strong>AHPRA Registered Nurse Coordinator</strong>, ensuring safety, dignity, and clinical continuity.
                </p>
              </div>

              {/* Intent match CTA */}
              <div className="bg-teal-subtle/40 p-5 rounded-xl border border-teal-border">
                <p className="text-navy font-semibold text-sm leading-relaxed">
                  <strong>Need personal care at home in Perth?</strong> Call <a href="tel:1300919663" className="text-teal-text font-bold hover:underline">1300 919 663</a>. We arrange in-home personal care services within 24–48 hours. NDIS, Home Care Package & private clients welcome.
                </p>
              </div>

              {/* Services Grid */}
              <div className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">Personal Care Services We Provide at Home</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((item, i) => (
                    <div key={i} className="card-base p-5 flex gap-4">
                      <item.icon className="w-7 h-7 text-teal-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-navy font-bold mb-1 text-sm">{item.title}</h3>
                        <p className="text-body text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Difference */}
              <div className="bg-surface p-6 rounded-2xl border border-border space-y-4">
                <h2 className="text-navy text-xl font-bold">Nurse-Led Personal Care: The Care N Cure Difference</h2>
                <p className="text-body text-sm leading-relaxed">
                  Most personal care providers send unchecked support workers to your home. At Care N Cure, every personal care client has an AHPRA Registered Nurse Coordinator who:
                </p>
                <ul className="space-y-2 text-body text-sm">
                  {[
                    'Conducts an initial in-home clinical assessment before personal care begins.',
                    'Creates a personalised care plan aligned with your medical needs, GP instructions, and preferences.',
                    'Reviews and signs off on any changes to care routines.',
                    'Performs routine clinical observations during or after personal care visits.',
                    'Communicates any skin concerns, falls risks, or health changes directly to your GP.',
                  ].map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Funding */}
              <div className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">Funding for Personal Care at Home</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { title: 'NDIS', desc: 'Core Supports – Daily Activities for eligible NDIS participants.' },
                    { title: 'Home Care Packages', desc: 'Personal care under HCP Levels 1–4 and the Support at Home program.' },
                    { title: 'Private Self-Funded', desc: 'No waiting lists — immediate access to nurse-supervised personal care.' },
                  ].map((f, i) => (
                    <div key={i} className="p-4 bg-surface rounded-xl border border-border space-y-1">
                      <h3 className="font-bold text-navy text-sm">{f.title}</h3>
                      <p className="text-xs text-body">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related */}
              <div className="space-y-3">
                <h2 className="text-navy text-xl font-bold">Related Services</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: 'Aged Care at Home', href: '/aged-care' },
                    { label: 'Companion Care', href: '/companion-care' },
                    { label: 'NDIS Nursing Care', href: '/ndis-nursing' },
                    { label: 'Home Care Packages', href: '/homecare-packages' },
                    { label: 'Medication Management', href: '/medication-management' },
                  ].map((s, i) => (
                    <Link key={i} href={s.href} className="flex items-center gap-1 text-xs font-semibold text-teal-text border border-teal-border bg-teal-subtle/30 px-3 py-2 rounded-lg hover:bg-teal-subtle transition-colors">
                      <ArrowRight className="w-3 h-3" />
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <ContactForm
                  title="Enquire About Personal Care"
                  subtitle="Tell us about your personal care needs. Our team will contact you to discuss the right care plan, services, and funding options."
                  defaultService="Personal Care at Home"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-surface border-t border-border">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-navy font-bold text-2xl">Personal Care at Home FAQs</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="card-base p-6 divide-y divide-border">
            {faqs.map((faq, i) => (
              <div key={i} className="py-4 first:pt-0 last:pb-0">
                <h3 className="text-navy font-bold mb-2 text-sm">{faq.question}</h3>
                <p className="text-body text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Arrange Personal Care at Home in Perth"
        description="Professional in-home personal care under Registered Nurse supervision. NDIS, Home Care Package & private clients. Call 1300 919 663 for a 24–48h intake."
        secondaryLink={{ text: 'Enquire About Personal Care', href: '/contact' }}
      />
    </>
  )
}
