import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema, FAQPageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { Bandage, ShieldAlert, Award, Stethoscope, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Wound Care Perth | Home Wound Dressing | Care N Cure',
  },
  description: 'Professional sterile wound management at home. Post-surgical dressings, chronic ulcer care, infection monitoring by AHPRA-registered nurses. Perth-wide service.',
  alternates: { canonical: 'https://carencure.com.au/wound-care' },
}


const faqs = [
  {
    question: 'How often does a wound dressing need changing?',
    answer: 'This depends entirely on the wound type, the level of exudate (discharge), and the surgeon or nurse specialist&apos;s recommendations. It can range from daily changes to once or twice a week. We establish a clear plan during our first visit.',
  },
  {
    question: 'How do you prevent wound infections?',
    answer: 'We strictly practice aseptic technique (sterile conditions) during every dressing change. Our registered nurses assess for early systemic and local infection signs, such as increased redness, swelling, warmth, pain, or fever, and escalate to your GP/surgeon immediately if required.',
  },
  {
    question: 'Can you care for complex diabetic ulcers or surgical drains?',
    answer: 'Yes. Our co-founders are highly experienced clinical nurses with hospital backgrounds. We are fully trained in complex wound therapies including compression therapy, diabetic foot ulcer management, skin tear repair, and surgical drain monitoring.',
  },
]

export default function WoundCare() {
  return (
    <>
      <ServicePageSchema
        serviceName="Wound Care Perth | Home Wound Dressing | Care N Cure"
        description="Professional sterile wound management at home. Post-surgical dressings, chronic ulcer care, infection monitoring by AHPRA-registered nurses. Perth-wide service."
        url="/wound-care"
        procedureType="Wound Care"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Services', item: 'https://carencure.com.au/services' },
          { name: 'Wound Care', item: 'https://carencure.com.au/wound-care' },
        ]}
      />


      <PageHeader
        title="Wound Care & Dressing"
        subtitle="Sterile, professional wound management in the comfort and hygiene of your home."
        breadcrumbItems={[
          { name: 'Services', href: '/#services' },
          { name: 'Wound Care', href: '/wound-care' },
        ]}
        label="Clinical Wound Care"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="section-label mb-2">Sterile Technique</p>
                <h2 className="text-navy text-3xl font-bold">Expert dressing management to support rapid, infection-free healing</h2>
                <div className="section-divider" />
                <p className="text-body text-lg leading-relaxed mt-4">
                  Improper wound care is one of the leading causes of infection and readmission after surgery. Our Registered Nurses use strict aseptic techniques and premium, clinically-appropriate dressings to ensure your wound heals safely and cleanly.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-navy text-2xl font-bold">Our Wound Management Expertise</h3>
                <p className="text-body">
                  We handle everything from simple post-operative sutures and skin tears to complex, slow-healing chronic ulcers, ensuring optimal moisture and protection for the tissues.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div className="card-base p-5 flex gap-4">
                    <Bandage className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Post-Surgical Dressing</h4>
                      <p className="text-body text-sm">Safe removal of staples/sutures, drain management, and replacing waterproof or absorbent surgical dressings.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <ShieldAlert className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Infection Vigilance</h4>
                      <p className="text-body text-sm">Active clinical tracking for cellulitis, exudate changes, local inflammation, and body temperature spikes.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <Award className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Chronic Ulcer Care</h4>
                      <p className="text-body text-sm">Aesthetic dressing and compression management for venous stasis ulcers, pressure injuries, and diabetic wounds.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <Stethoscope className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Skin Tear Management</h4>
                      <p className="text-body text-sm">Gentle cleansing, approximating skin flaps, and applying non-adherent protective dressings on fragile elderly skin.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-2xl border border-border">
                <h3 className="text-navy text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-accent" />
                  How we ensure superior wound outcomes
                </h3>
                <ul className="space-y-3 text-body text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Accurate documentation:</strong> We take sequential measurements and photograph progress to keep doctors fully updated.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Premium wound products:</strong> Using advanced dressings (hydrocolloids, alginates, foams) rather than generic cotton pads.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Nutritional oversight:</strong> Advising on protein and fluid targets required for healthy tissue synthesis.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <ContactForm
                  title="Enquire About Wound Care"
                  subtitle="Please fill out the form below. A registered nurse will contact you to discuss your wound care needs."
                  defaultService="Wound Care at Home"
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
              { label: 'Private Nursing', href: '/private-nursing' },
              { label: 'Clinical Oversight', href: '/registered-nurses-clinical-care-services' },
              { label: 'Post-Surgical Care', href: '/post-hospital-care' },
              { label: 'Medication Management', href: '/medication-management' },
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
        title="Need a wound dressing change? Avoid long hospital queues."
        description="Our registered nurses carry out home visits across all Perth suburbs, saving you painful trips and hours of waiting in medical clinics."
        secondaryLink={{ text: 'Call Us Now', href: '/contact' }}
      />
    </>
  )
}
