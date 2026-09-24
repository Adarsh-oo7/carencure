import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema, FAQPageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { Activity, CheckCircle, HeartPulse, ShieldCheck, Dumbbell, ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Home Physiotherapist Perth | In-Home Physio & Allied Health | Care N Cure',
  },
  description:
    'Experienced physiotherapists visiting your home across Perth. Post-surgery rehab, mobility improvement, falls prevention & chronic pain management. NDIS, HCP & private. Call 1300 919 663.',
  keywords: [
    'home physiotherapist perth',
    'physiotherapist home visit perth',
    'in home physio perth',
    'mobile physiotherapist perth',
    'at home physiotherapy perth',
    'home physio perth',
    'physiotherapy home visit wa',
    'ndis physiotherapist perth',
    'aged care physiotherapist perth',
    'physio home visit perth',
  ],
  alternates: { canonical: 'https://carencure.com.au/physiotherapy' },
}

const faqs = [
  {
    question: 'Can a physiotherapist visit my home in Perth?',
    answer:
      'Yes. Care N Cure coordinates experienced mobile physiotherapists who travel to your home across the Perth metropolitan area. No need to arrange painful car trips to a clinic — your physio comes to you. Home physiotherapy is available for aged care, NDIS, post-surgical recovery, and private fee-for-service clients.',
  },
  {
    question: 'What conditions can an in-home physiotherapist treat?',
    answer:
      'Our home physiotherapists treat a wide range of conditions including post-surgical rehabilitation (hip, knee, shoulder), stroke recovery and neurological rehab, falls prevention in elderly clients, chronic pain including lower back pain and arthritis, Parkinson\'s disease mobility management, and COPD/respiratory exercises.',
  },
  {
    question: 'Is home physiotherapy covered by NDIS or Home Care Packages?',
    answer:
      'Yes. Physiotherapy is an eligible support under NDIS (under Capacity Building – Improved Daily Living) and can be funded through Home Care Packages (HCP Levels 1–4) and the Support at Home program. We can help you understand your funding options. Private health extras with physiotherapy cover may also apply.',
  },
  {
    question: 'How often do I need physio sessions at home?',
    answer:
      'Session frequency depends on your condition, goals, and funding. Post-surgical patients often benefit from 2–3 sessions per week in the early recovery phase. Chronic condition management and falls prevention may be once weekly or fortnightly. Your physiotherapist will design a personalised treatment plan at the first session.',
  },
  {
    question: 'How quickly can a home physio visit be arranged?',
    answer:
      'We aim to arrange your first physiotherapy home visit within 48–72 hours of your enquiry. For urgent post-hospital discharge situations, call 1300 919 663 and we will prioritise your intake.',
  },
]

export default function Physiotherapy() {
  return (
    <>
      <ServicePageSchema
        serviceName="Home Physiotherapist Perth | In-Home Physio & Allied Health"
        description="Experienced physiotherapists visiting your home across Perth. Post-surgery rehab, mobility improvement, falls prevention & chronic pain management."
        url="/physiotherapy"
        procedureType="Physiotherapy"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Services', item: 'https://carencure.com.au/services' },
          { name: 'Physiotherapy', item: 'https://carencure.com.au/physiotherapy' },
        ]}
      />

      <PageHeader
        title="Home Physiotherapy in Perth"
        subtitle="Experienced physiotherapists visiting your home for post-surgical rehab, mobility support, falls prevention & chronic pain — no clinic trip needed."
        breadcrumbItems={[
          { name: 'Services', href: '/#services' },
          { name: 'Physiotherapy at Home', href: '/physiotherapy' },
        ]}
        label="Allied Health at Home"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8">

              <div>
                <p className="section-label mb-2">Mobile Allied Health</p>
                <h2 className="text-navy text-3xl font-bold">In-Home Physiotherapy for Perth Residents</h2>
                <div className="section-divider" />
                <p className="text-body text-lg leading-relaxed mt-4">
                  Travelling to a physiotherapy clinic can be painful, exhausting, and impractical — especially following surgery, for elderly Australians, or for NDIS participants with mobility challenges. Care N Cure coordinates experienced <strong>mobile physiotherapists who visit your home</strong> across Perth, bringing professional rehabilitation directly to you.
                </p>
              </div>

              {/* Direct CTA */}
              <div className="bg-teal-subtle/40 p-5 rounded-xl border border-teal-border">
                <p className="text-navy font-semibold text-sm leading-relaxed">
                  <strong>Need a physiotherapist at home in Perth?</strong> Call <a href="tel:1300919663" className="text-teal-text font-bold hover:underline">1300 919 663</a> to arrange a home physio visit within 48–72 hours. NDIS, Home Care Package & private clients welcome.
                </p>
              </div>

              {/* Conditions Treated */}
              <div className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">Conditions Treated by Our Home Physiotherapists</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Activity, title: 'Post-Surgical Rehabilitation', desc: 'Hip, knee and shoulder replacement recovery, orthopaedic fractures, abdominal surgery.' },
                    { icon: HeartPulse, title: 'Stroke & Neurological Rehab', desc: 'Balance and coordination retraining, upper limb function, walking aids assessment.' },
                    { icon: Dumbbell, title: 'Falls Prevention', desc: 'Strength and balance exercises for elderly clients to reduce fall risk at home.' },
                    { icon: ShieldCheck, title: 'Chronic Pain Management', desc: 'Lower back pain, arthritis, osteoporosis, and fibromyalgia management.' },
                    { icon: Activity, title: "Parkinson's & Dementia", desc: 'Mobility maintenance, freezing of gait management, carer education.' },
                    { icon: HeartPulse, title: 'Respiratory Physiotherapy', desc: 'COPD breathing exercises, airway clearance techniques, and chest physiotherapy.' },
                  ].map((item, i) => (
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

              {/* Funding Options */}
              <div className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">Funding Options for Home Physiotherapy</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="p-4 bg-surface rounded-xl border border-border space-y-1">
                    <h3 className="font-bold text-navy">NDIS</h3>
                    <p className="text-xs text-body">Under Capacity Building – Improved Daily Living for eligible NDIS participants.</p>
                  </div>
                  <div className="p-4 bg-surface rounded-xl border border-border space-y-1">
                    <h3 className="font-bold text-navy">Home Care Packages</h3>
                    <p className="text-xs text-body">Allied health including physiotherapy under HCP Levels 1–4 and Support at Home.</p>
                  </div>
                  <div className="p-4 bg-surface rounded-xl border border-border space-y-1">
                    <h3 className="font-bold text-navy">Private / Health Insurance</h3>
                    <p className="text-xs text-body">Private self-funding or private health extras rebates depending on your fund.</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-surface p-6 rounded-2xl border border-border space-y-3">
                <h2 className="text-navy text-xl font-bold">Why Choose In-Home Physiotherapy Over a Clinic?</h2>
                <ul className="space-y-2 text-body text-sm">
                  {[
                    'No painful transfers or stressful drives — treatment happens in your own environment.',
                    'Your physiotherapist assesses your home hazards and designs environment-specific exercises.',
                    'Family members can be present and educated on safe assist techniques.',
                    'Integrated coordination with your Care N Cure Registered Nurse for holistic recovery.',
                    'All exercises demonstrated and documented with progress photos for your GP/specialist.',
                  ].map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Services */}
              <div className="space-y-3">
                <h2 className="text-navy text-xl font-bold">Related Services</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: 'Aged Care In-Home Support', href: '/aged-care' },
                    { label: 'NDIS Nursing Care', href: '/ndis-nursing' },
                    { label: 'Mobility Support', href: '/mobility-support' },
                    { label: 'Home Care Packages', href: '/homecare-packages' },
                    { label: 'Nutritionist at Home', href: '/nutritionist' },
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
                  title="Book a Home Physiotherapist"
                  subtitle="Tell us about your physiotherapy needs. A coordinator will contact you to confirm availability and arrange your home visit."
                  defaultService="Home Physiotherapy"
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
            <h2 className="text-navy font-bold text-2xl">Home Physiotherapy FAQs</h2>
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
        title="Book a Home Physiotherapist in Perth Today"
        description="Our mobile physiotherapists cover the entire Perth metro area. NDIS, Home Care Package and private clients welcome. Call 1300 919 663 to arrange your first visit within 48–72 hours."
        secondaryLink={{ text: 'Enquire Online', href: '/contact' }}
      />
    </>
  )
}
