import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema, FAQPageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { Activity, ShieldCheck, HeartPulse, UserCheck, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Registered Nurses Clinical care Services Perth | The Nurse Who Knows You',
  description: 'In-home clinical care by registered nurses in Perth. Customised nursing assessments, chronic illness support, respite, and long-term care.',
  alternates: { canonical: 'https://carencure.com.au/registered-nurses-clinical-care-services' },
}

const faqs = [
  {
    question: 'How is private nursing different from general care support?',
    answer: 'General care support is provided by support workers or assistants in nursing (AINs) who help with non-clinical tasks (showering, cleaning). Private nursing is provided strictly by licensed Registered Nurses (RNs) who can perform clinical duties like administering injections, wound management, catheter care, and vital signs monitoring.',
  },
  {
    question: 'Can I choose the time of the nurse visits?',
    answer: 'Yes. We work directly with you and your family to establish a visit schedule that fits your preferences and medical requirements. We maintain high consistency so you get the same nurse at the agreed time.',
  },
  {
    question: 'Do you offer respite nursing for families?',
    answer: 'Yes. We provide nursing-led respite care. This gives family caregivers peace of mind knowing that their relative with complex clinical needs is under the direct, expert supervision of a registered nurse.',
  },
]

export default function ClinicalCareServices() {
  return (
    <>
      <ServicePageSchema
        serviceName="Registered Nurses Clinical care Services"
        description="A registered nurse, at your home, on your schedule. Personalised clinical assessments, chronic condition monitoring, respite nursing, and expert clinical advocacy in Perth."
        url="/registered-nurses-clinical-care-services"
      />
      <FAQPageSchema faqs={faqs} />

      <PageHeader
        title="Registered Nurses Clinical care Services"
        subtitle="Professional, registered nursing care in the quiet privacy of your own home."
        breadcrumbItems={[
          { name: 'Services', href: '/#services' },
          { name: 'Clinical Care Services', href: '/registered-nurses-clinical-care-services' },
        ]}
        label="Professional In-Home Care"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="section-label mb-2">Dedicated Nursing</p>
                <h2 className="text-navy text-3xl font-bold">University-trained Registered Nurses</h2>
                <div className="section-divider" />
                <p className="text-body text-lg leading-relaxed mt-4">
                  For complex medical conditions, ageing family members, or long-term illness, standard care agencies are often insufficient. We provide dedicated Registered Nurses who bring clinical knowledge, assessment skills, and medical authority directly to your doorstep.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-navy text-2xl font-bold">Personalised Clinical Care Services</h3>
                <p className="text-body">
                  We create a comprehensive clinical profile for every client. Our founders oversee every assessment to ensure the highest standards of safety, dignity, and clinical accuracy.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div className="card-base p-5 flex gap-4">
                    <Activity className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Clinical Assessment</h4>
                      <p className="text-body text-sm">Regular comprehensive health checks, monitoring vital organs, fluid balance, and physical status.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <HeartPulse className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Chronic Disease Care</h4>
                      <p className="text-body text-sm">Proactive management and symptom monitoring for diabetes, heart failure, COPD, Parkinson&apos;s, and dementia.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <ShieldCheck className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Respite & Crisis Support</h4>
                      <p className="text-body text-sm">Giving family caregivers essential respite, knowing a qualified nurse is watching over their loved one.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <UserCheck className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Same Nurse Consistency</h4>
                      <p className="text-body text-sm">Enjoy absolute peace of mind with the same nurse attending every visit, building real clinical trust.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-2xl border border-border">
                <h3 className="text-navy text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-accent" />
                  What is included in our clinical care?
                </h3>
                <ul className="space-y-3 text-body text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Accurate documentation:</strong> Maintain detailed clinical charts at home for medical reviews.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Proactive GP contact:</strong> Fast escalation and coordination if symptoms drift.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Clinical advocacy:</strong> Assistance in clarifying complex diagnoses and hospital directions for the family.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <ContactForm
                  title="Enquire About Clinical Care"
                  subtitle="Provide your contact details below. A registered nurse will call you back to discuss how we can support you."
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
        title="Arrange your free initial telephone consult."
        description="Speak directly with our co-founders to review your in-home nursing needs and design a regular schedule."
        secondaryLink={{ text: 'Contact Us Now', href: '/contact' }}
      />
    </>
  )
}
