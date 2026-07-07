import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema, FAQPageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { Activity, ShieldCheck, HeartPulse, UserCheck, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Registered Nurse Clinical Care Services Perth | Care N Cure',
  description: 'In-home clinical care by Registered Nurses in Perth, WA. Comprehensive nursing assessments, chronic disease monitoring, wound care, catheter care, and GP coordination.',
  alternates: { canonical: 'https://carencure.com.au/registered-nurses-clinical-care-services' },
}

const faqs = [
  {
    question: 'What are clinical nursing services at home?',
    answer: 'Clinical nursing services include tasks that require the formal qualifications and registration of a Registered Nurse (RN). This includes sterile wound dressing, administration of subcutaneous and intramuscular injections, catheter care, medication reconciliation, and vital signs monitoring. It is different from personal care or support work.',
  },
  {
    question: 'How do you coordinate care with my GP or surgeon?',
    answer: 'We maintain professional clinical records of every visit. If we identify any changes in your vitals, wounds, or general status, we write a concise handover report and contact your GP or surgical team directly to ensure immediate medical adjustment.',
  },
  {
    question: 'Can clinical nursing be funded through a Home Care Package (HCP)?',
    answer: 'Yes. Clinical nursing care is a primary service funded under Home Care Packages (Level 1–4). Care N Cure coordinates directly with your package provider (such as Trilogy Care) to deliver RN visits funded by your package.',
  },
]

export default function ClinicalCareServices() {
  return (
    <>
      <ServicePageSchema
        serviceName="Registered Nurse Clinical Care Services"
        description="In-home clinical care, complex nursing tasks, chronic disease management, assessments, and GP handovers by registered nurses in Perth, WA."
        url="/registered-nurses-clinical-care-services"
      />
      <FAQPageSchema faqs={faqs} />

      <PageHeader
        title="Registered Nurse Clinical Care Services"
        subtitle="AHPRA-registered clinical nursing care delivered in the hygiene and comfort of your home."
        breadcrumbItems={[
          { name: 'Services', href: '/services' },
          { name: 'Clinical Care Services', href: '/registered-nurses-clinical-care-services' },
        ]}
        label="Clinical Home Care"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="section-label mb-2">Qualified Clinical Care</p>
                <h2 className="text-navy text-3xl font-bold">University-trained Registered Nurses delivering complex care</h2>
                <div className="section-divider" />
                <p className="text-body text-lg leading-relaxed mt-4">
                  Clinical procedures require formal training and strict medical oversight. Our team consists entirely of university-qualified Registered Nurses (RNs) licensed under AHPRA. We deliver complex clinical procedures, vital signs tracking, and chronic disease support directly at home.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-navy text-2xl font-bold">In-Home Clinical Nursing Capabilities</h3>
                <p className="text-body">
                  We work closely with your GP, hospital discharge team, and specialist coordinators to ensure all care complies with your medical guidelines.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div className="card-base p-5 flex gap-4">
                    <Activity className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Clinical Assessments</h4>
                      <p className="text-body text-sm">Comprehensive health reviews, monitoring vital organs, oxygen levels, fluid balance, and physical status.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <HeartPulse className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Complex Care Delivery</h4>
                      <p className="text-body text-sm">Sterile wound dressing changes, catheter management, subcutaneous injections (e.g. Clexane, insulin), and vitals tracking.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <ShieldCheck className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Chronic Illness Monitoring</h4>
                      <p className="text-body text-sm">Ongoing management and symptom tracking for diabetes, congestive heart failure, COPD, and neurological conditions.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <UserCheck className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">GP & Specialist Liaison</h4>
                      <p className="text-body text-sm">Writing concise handover reports, performing medication reconciliations, and reporting changes immediately to your doctors.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-2xl border border-border">
                <h3 className="text-navy text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-accent" />
                  Our Clinical Safeguards
                </h3>
                <ul className="space-y-3 text-body text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Formal Documentation:</strong> Every procedure is charted on a professional Medication Administration Record (MAR) or clinical progress note.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Infection Control:</strong> Absolute adherence to sterile and clean techniques to prevent wound infections and cellulitis.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Professional Advocacy:</strong> Helping you and your family clarify complex clinical diagnoses and follow hospital directions.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <ContactForm
                  title="Enquire About Clinical Care"
                  subtitle="Provide your contact details below. A registered nurse co-founder will call you back shortly to discuss how we can support you."
                  defaultService="Registered Nurses Clinical care Services"
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
        title="Arrange clinical home care visits with a Registered Nurse."
        description="Call us today to discuss your medical guidelines and set up a clinical assessment in Perth."
        secondaryLink={{ text: 'Contact Us Now', href: '/contact' }}
      />
    </>
  )
}
