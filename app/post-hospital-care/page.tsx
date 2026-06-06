import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema, FAQPageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { ClipboardCheck, Heart, Shield, RefreshCw, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'In-Home Post-Hospital Recovery Care Perth | The Nurse Who Knows You',
  description: 'Registered nurses helping patients transition safely from hospital to home in Perth. Post-surgical wound care, vitals, medication checks.',
  alternates: { canonical: 'https://carencure.com.au/post-hospital-care' },
}

const faqs = [
  {
    question: 'How soon can post-hospital care start?',
    answer: 'We coordinate with hospital discharge teams (Fiona Stanley, Sir Charles Gairdner, Royal Perth, etc.) to start care the very day you return home, or within 24 hours of discharge.',
  },
  {
    question: 'Do you manage medication changes after hospital discharge?',
    answer: 'Yes. Our registered nurses do a complete medication reconciliation, checking new hospital prescriptions against your existing home medications to prevent dangerous double-dosing or omissions.',
  },
  {
    question: 'Can you communicate with my GP or surgeon?',
    answer: 'Absolutely. We document every clinical sign and provide clean, concise clinical handovers directly to your GP or surgical team as needed, ensuring continuity of care.',
  },
]

export default function PostHospitalCare() {
  return (
    <>
      <ServicePageSchema
        serviceName="Post-Hospital Recovery Care"
        description="Transition safely from hospital to home. Wound checks, medication reconciliation, vitals tracking, and specialist/GP handovers by registered nurses in Perth, WA."
        url="/post-hospital-care"
      />
      <FAQPageSchema faqs={faqs} />

      <PageHeader
        title="Post-Hospital Recovery Care"
        subtitle="Transition safely from hospital back to the comfort of your Perth home."
        breadcrumbItems={[
          { name: 'Services', href: '/#services' },
          { name: 'Post-Hospital Care', href: '/post-hospital-care' },
        ]}
        label="Clinical Transition Care"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="section-label mb-2">Safe Discharges</p>
                <h2 className="text-navy text-3xl font-bold">Reducing readmissions through qualified clinical oversight</h2>
                <div className="section-divider" />
                <p className="text-body text-lg leading-relaxed mt-4">
                  The first 72 hours after leaving a Perth hospital are the most critical. Research shows that post-hospital complications, medication errors, and unexpected readmissions are heavily reduced when a Registered Nurse manages the transition home.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-navy text-2xl font-bold">Our Post-Hospital Clinical Support</h3>
                <p className="text-body">
                  Whether recovering from major orthopaedic surgery, cardiac procedures, or general medical admissions, we provide a dedicated, consistent Registered Nurse to support your recovery.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div className="card-base p-5 flex gap-4">
                    <ClipboardCheck className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Medication Reconciliation</h4>
                      <p className="text-body text-sm">Reviewing hospital discharge medications against your existing home medications to prevent dangerous interactions.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <Heart className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Vital Signs Monitoring</h4>
                      <p className="text-body text-sm">Tracking temperature, blood pressure, heart rate, blood sugar, and oxygen levels to catch complications early.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <Shield className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Surgical Wound Management</h4>
                      <p className="text-body text-sm">Professional dressing changes, drain management, and active monitoring for any signs of wound infection.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <RefreshCw className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">GP & Specialist Handovers</h4>
                      <p className="text-body text-sm">Documenting recovery progress and coordinating with your general practitioner and surgeons.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-2xl border border-border">
                <h3 className="text-navy text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-accent" />
                  What to expect on your first visit
                </h3>
                <ul className="space-y-3 text-body text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Full clinical assessment:</strong> Thorough physical assessment and vitals check.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Environment safety review:</strong> Assessing mobility hazards to prevent falls at home.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Discharge plan review:</strong> Ensuring all instructions from the hospital are carefully implemented.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Ongoing plan:</strong> Scheduling regular nurse visits matched to your surgical guidelines.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <ContactForm
                  title="Enquire About Post-Hospital Care"
                  subtitle="Fill in your details below and a registered nurse will call you back to discuss your recovery plan."
                  defaultService="Post-Hospital Recovery Care"
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

      <CTASection
        title="Discharged soon? Plan ahead today."
        description="Secure your nurse before discharge. We speak directly with hospital discharge teams to ensure everything is ready when you arrive home."
        secondaryLink={{ text: 'Contact Us Now', href: '/contact' }}
      />
    </>
  )
}
