import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema, FAQPageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { Activity, ShieldCheck, HeartPulse, UserCheck, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Private Nurse Perth | In-Home Registered Nursing | Care N Cure',
  },
  description: 'Hire a qualified private nurse in Perth. AHPRA-registered RNs for in-home clinical care, post-surgery recovery & chronic disease management. Same nurse, every visit.',
  alternates: { canonical: 'https://carencure.com.au/private-nursing' },
}


const faqs = [
  {
    question: 'How do I hire a private nurse in Perth?',
    answer: 'Hiring a private nurse with Care N Cure is simple. Call us directly on 1300 919 663 to speak with a Registered Nurse co-founder. We discuss your clinical needs, contact your medical team if required, and schedule a free in-home clinical assessment to begin services.',
  },
  {
    question: 'Can I hire a private nurse for post-surgical recovery?',
    answer: 'Yes. We specialize in post-operative recovery care at home. A private Registered Nurse can visit to manage surgical dressings, remove sutures or staples, manage drains, administer injections, and closely monitor for signs of infection or complications.',
  },
  {
    question: 'Is private nurse hire covered by Home Care Packages (HCP) or NDIS?',
    answer: 'Yes. Private nursing can be funded through your Home Care Package (HCP) Level 1–4, NDIS (plan-managed or self-managed), DVA, or through private pay. Speak to your care manager or contact us directly to coordinate funding.',
  },
  {
    question: 'What does a private nurse at home do compared to standard support workers?',
    answer: 'A private nurse at home from Care N Cure is a university-qualified Registered Nurse (RN) registered with AHPRA. Unlike standard support workers, an in home nurse can perform sterile wound care, complex medication management, clinical health assessments, and liaise directly with your GP or surgeon to catch changes in your condition early.',
  },
]


export default function PrivateNursing() {
  return (
    <>
      <ServicePageSchema
        serviceName="Private Nurse Perth | In-Home Registered Nursing | Care N Cure"
        description="Hire a qualified private nurse in Perth. AHPRA-registered nurses for in-home clinical care, post-surgical recovery, and chronic disease management. Same nurse, every visit."
        url="/private-nursing"
        procedureType="In-Home Nursing Care"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Services', item: 'https://carencure.com.au/services' },
          { name: 'Private Nursing', item: 'https://carencure.com.au/private-nursing' },
        ]}
      />


      <PageHeader
        title="Private Nurse Hire & In-Home Care"
        subtitle="Professional, registered nursing care on your schedule, in the quiet privacy of your own home."
        breadcrumbItems={[
          { name: 'Services', href: '/services' },
          { name: 'Private Nurse Hire', href: '/private-nursing' },
        ]}
        label="Private Registered Nurses"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="section-label mb-2">Dedicated Nursing Support</p>
                <h2 className="text-navy text-3xl font-bold">Hire a qualified private nurse for personalized home care</h2>
                <div className="section-divider" />
                <p className="text-body text-lg leading-relaxed mt-4">
                  For complex medical needs, ageing family members, or post-surgical recovery, generic care agencies often fall short. We make it simple to find professional <strong>nurse at home care</strong>. We connect you with a dedicated <strong>in home nurse</strong> who brings clinical expertise, health assessment skills, and consistent coordination directly to you.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">Private Nurses for Home Care in Perth</h2>
                <p className="text-body leading-relaxed">
                  Navigating clinical needs without hospital readmissions is a primary goal for many families. Our <strong>private nurses for home care</strong> provide high-level clinical governance. From clinical assessments and medication safety to liaison with GPs and discharge teams, your care is fully managed by university-trained Registered Nurses.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-navy text-xl font-bold">Our Private Nursing Services include:</h3>
                <p className="text-body">
                  Every client receives a custom care plan overseen by our clinical founders. We ensure you get professional, consistent care from the same nurse at every visit.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div className="card-base p-5 flex gap-4">
                    <Activity className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">In-Home Clinical Visits</h4>
                      <p className="text-body text-sm">Flexible home visits by a Registered Nurse for clinical tasks, health monitoring, vital checks, and medication safety.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <HeartPulse className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">In-Home Respite & Support</h4>
                      <p className="text-body text-sm">Giving family caregivers essential respite, knowing their loved one is in the hands of a qualified AHPRA Registered Nurse.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <ShieldCheck className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Post-Operative Recovery</h4>
                      <p className="text-body text-sm">Active clinical oversight following major hospital discharges — managing dressings, stitches, and physical therapy exercise compliance.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <UserCheck className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">One Dedicated Nurse Coordinator</h4>
                      <p className="text-body text-sm">No roster surprises or strangers. Your dedicated nurse coordinator handles your case from start to finish.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-2xl border border-border">
                <h3 className="text-navy text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-accent" />
                  Benefits of hiring a private nurse
                </h3>
                <ul className="space-y-3 text-body text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Tailored Scheduling:</strong> Arrange visits when they suit you best, with options for hourly clinical checks or extended care.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>GP and Specialist Liaison:</strong> We handle complex updates to doctors and surgeons, ensuring seamless continuity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>A Professional Clinical Partner:</strong> Direct access to your registered nurse coordinator without passing through call center receptionists.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <ContactForm
                  title="Enquire About Private Nursing"
                  subtitle="Provide your contact details below. A registered nurse co-founder will call you back shortly to discuss how we can support you."
                  defaultService="Private Nursing at Home"
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
              { label: 'Clinical Nursing Support', href: '/registered-nurses-clinical-care-services' },
              { label: 'Wound Care Services', href: '/wound-care' },
              { label: 'Medication Monitoring', href: '/medication-management' },
              { label: 'Post-Surgery Recovery', href: '/post-hospital-care' },
              { label: 'Funded Care Options', href: '/homecare-packages' },
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
        title="Looking for a trusted private nurse in Perth?"
        description="Call us directly to speak to our registered nurse founders, or request a callback using our secure enquiry form."
        secondaryLink={{ text: 'Contact Us Now', href: '/contact' }}
      />
    </>
  )
}
