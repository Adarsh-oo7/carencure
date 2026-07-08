import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema, FAQPageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { PersonStanding, ShieldCheck, HeartPulse, Sparkles, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Mobility Support Perth | Home Mobility Assistance | Care N Cure',
  },
  description: 'Safe mobility support at home with clinical oversight. Fall prevention, transfer assistance & equipment guidance from registered nurses across Perth.',
  alternates: { canonical: 'https://carencure.com.au/mobility-support' },
}


const faqs = [
  {
    question: 'How do you coordinate with physiotherapists?',
    answer: 'We review the physical therapy (PT) or occupational therapy (OT) plan provided by your therapists. Our registered nurses then monitor and assist you with these exercises during our visits, ensuring you practice them safely and with the correct alignment.',
  },
  {
    question: 'Do you perform home safety audits to prevent falls?',
    answer: 'Yes. Every mobility care assessment includes a comprehensive home safety review. We examine flooring, lighting, bathroom fixtures, and pathways to identify slip or trip hazards, recommending specific modifications or equipment.',
  },
  {
    question: 'Can you assist with complex hoist or slide sheet transfers?',
    answer: 'Yes. As registered nurses, we are fully trained in manual handling guidelines and can safely operate standing hoists, full-body hoists, slide sheets, and other slide/transfer boards.',
  },
]

export default function MobilitySupport() {
  return (
    <>
      <ServicePageSchema
        serviceName="Mobility Support Perth | Home Mobility Assistance | Care N Cure"
        description="Safe mobility support at home with clinical oversight. Fall prevention, transfer assistance & equipment guidance from registered nurses across Perth."
        url="/mobility-support"
        procedureType="Mobility & Rehab Support"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Services', item: 'https://carencure.com.au/services' },
          { name: 'Mobility Support', item: 'https://carencure.com.au/mobility-support' },
        ]}
      />


      <PageHeader
        title="Mobility & Rehab Support"
        subtitle="Regain your independence, strength, and confidence safely in your own Perth home."
        breadcrumbItems={[
          { name: 'Services', href: '/#services' },
          { name: 'Mobility Support', href: '/mobility-support' },
        ]}
        label="Clinical Mobility Support"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="section-label mb-2">Safe Recovery</p>
                <h2 className="text-navy text-3xl font-bold">Rebuilding strength and safety after surgery or prolonged illness</h2>
                <div className="section-divider" />
                <p className="text-body text-lg leading-relaxed mt-4">
                  A loss of mobility after a joint replacement, stroke, or illness can severely damage a person&apos;s independence and mental well-being. Our Registered Nurse-led mobility support focuses on building strength steadily while maintaining absolute clinical safety.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-navy text-2xl font-bold">Our Rehabilitation & Mobility Services</h3>
                <p className="text-body">
                  We don&apos;t just complete tasks for you — we actively support and encourage you to safely regain your motor skills, physical capacity, and daily function.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div className="card-base p-5 flex gap-4">
                    <PersonStanding className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Safe Transfer Practice</h4>
                      <p className="text-body text-sm">Clinical assistance with sitting, standing, and bed transfers, using correct anatomical positioning to protect joints.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <ShieldCheck className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Fall Risk Auditing</h4>
                      <p className="text-body text-sm">Detailed physical and environmental home inspections, assessing lighting, footwear, rugs, and bathroom rails.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <HeartPulse className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Therapeutic Exercise Oversight</h4>
                      <p className="text-body text-sm">Supervising joint range-of-motion, balance, and gait training routines prescribed by your physical therapists.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <Sparkles className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Mobility Aid Assessment</h4>
                      <p className="text-body text-sm">Evaluating and advising on the appropriate selection and adjustment of walkers, walking sticks, and shower chairs.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-2xl border border-border">
                <h3 className="text-navy text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-accent" />
                  Our Safety Standards
                </h3>
                <ul className="space-y-3 text-body text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Manual handling safety:</strong> Using professional, body-mechanics-based techniques to eliminate strain.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Cardiovascular checks:</strong> Reviewing vital stats before and after physical exertion.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Incremental goals:</strong> Designing measurable weekly milestones (e.g. walking distance, unassisted standing).</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <ContactForm
                  title="Enquire About Mobility Care"
                  subtitle="Please fill out your details below. A registered nurse will call you back to discuss your rehabilitation plan."
                  defaultService="Mobility Support"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section-py bg-surface border-t border-border">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-navy font-bold">Frequently Asked Questions</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="card-base p-6 divide-y divide-border">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4 first:pt-0 last:pb-0">
                <h4 className="text-navy font-bold mb-2">{faq.question}</h4>
                <p className="text-body text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-white border-t border-border">
        <div className="section-container max-w-4xl">
          <h2 className="text-navy font-bold text-xl mb-6">Related Nursing Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Post-Hospital Care', href: '/post-hospital-care' },
              { label: 'Private Nursing', href: '/private-nursing' },
              { label: 'Support at Home', href: '/support-at-home' },
              { label: 'Companion Care', href: '/companion-care' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="card-base p-4 text-sm font-semibold text-navy hover:text-teal-accent flex items-center gap-2 transition-colors"
              >
                <span className="text-teal-accent">→</span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to rebuild your strength safely?"
        description="Our Perth-based co-founders will design a customised mobility and exercise monitoring framework with you."
        secondaryLink={{ text: 'Contact Us Now', href: '/contact' }}
      />
    </>
  )
}
