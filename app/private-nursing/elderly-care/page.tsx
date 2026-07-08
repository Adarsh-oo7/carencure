import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { Heart, ShieldCheck, HeartPulse, UserCheck, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Private Nurses for Elderly Perth | In-Home Elderly Care | Care N Cure',
  },
  description: 'Professional private nurses for elderly care in Perth. AHPRA-registered Registered Nurse coordinators for medication safety, respite, and chronic disease support.',
  alternates: { canonical: 'https://carencure.com.au/private-nursing/elderly-care' },
}

const faqs = [
  {
    question: 'How do I hire private nurses for elderly care in Perth?',
    answer: 'Hiring private nurses for elderly family members is direct with Care N Cure. Call us on 1300 919 663. A Registered Nurse coordinator will discuss your clinical and daily care needs, coordinate with current doctors, and organize a free in-home consultation.',
  },
  {
    question: 'Can private nursing care be covered by Home Care Packages?',
    answer: 'Yes. Most elderly clients use their Home Care Package (HCP) Level 1–4, NDIS funding, or DVA benefits to cover the cost of in-home nursing care. We partner with self-managed and fully managed packages to coordinate clinical nursing seamlessly.',
  },
  {
    question: 'What is the benefit of having a dedicated nurse coordinator for an elderly parent?',
    answer: 'Traditional agencies send a rotating roster of different support workers. Care N Cure assigns a single dedicated Registered Nurse coordinator to your parent. This nurse performs regular clinical checks, reconciles medications, communicates with GPs, and catches subtle health changes early, keeping the family fully updated.',
  },
]

export default function ElderlyPrivateNursing() {
  return (
    <>
      <ServicePageSchema
        serviceName="Private Nurses for Elderly Perth | In-Home Elderly Care | Care N Cure"
        description="Professional private nurses for elderly care in Perth. Dedicated Registered Nurse coordinators for medication safety, respite, and chronic disease support."
        url="/private-nursing/elderly-care"
        procedureType="Elderly Private Nursing Care"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Services', item: 'https://carencure.com.au/services' },
          { name: 'Private Nursing', item: 'https://carencure.com.au/private-nursing' },
          { name: 'Elderly Care', item: 'https://carencure.com.au/private-nursing/elderly-care' },
        ]}
      />

      <PageHeader
        title="Private Nurses for Elderly"
        subtitle="Dedicated Registered Nurse coordinators providing premium clinical care and companionship at home for Perth seniors."
        breadcrumbItems={[
          { name: 'Services', href: '/services' },
          { name: 'Private Nursing', href: '/private-nursing' },
          { name: 'Elderly Care', href: '/private-nursing/elderly-care' },
        ]}
        label="Elderly Private Nursing"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="section-label mb-2">Elderly Home Nursing</p>
                <h2 className="text-navy text-3xl font-bold">Premium private nurses for hire in Perth</h2>
                <div className="section-divider" />
                <p className="text-body text-lg leading-relaxed mt-4">
                  As our parents and loved ones age, their clinical care needs often become more complex. Standard aged care agencies and general support workers cannot administer clinical procedures or monitor health changes with a clinical eye. We provide access to professional, dedicated <strong>private nurses for elderly</strong> care, offering peace of mind to families across Perth.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">In-Home Nursing Care You Can Trust</h2>
                <p className="text-body leading-relaxed">
                  Choosing <strong>in-home nursing care</strong> allows your loved one to remain comfortable in their own home while receiving the clinical oversight they need. Whether they are transitioning back home after a hospital stay, managing a chronic illness like diabetes or cardiovascular disease, or needing medication safety reviews, having an experienced <strong>in home nurse</strong> guarantees that their clinical needs are proactively managed.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-navy text-xl font-bold">Private Clinical Support for Seniors</h3>
                <p className="text-body">
                  Our co-founders and nurse coordinators are AHPRA-registered Registered Nurses with extensive backgrounds in acute and community care. We coordinate directly with your parent&apos;s GP, write clear care logs, and ensure that they receive consistent care.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div className="card-base p-5 flex gap-4">
                    <Heart className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Clinical Oversight</h4>
                      <p className="text-body text-sm">Regular vital monitoring, health assessments, and early change detection to prevent unnecessary hospital readmissions.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <HeartPulse className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Medication Safety</h4>
                      <p className="text-body text-sm">Webster-pack coordination, administration of subcutaneous injections, and rigorous reconciliation of schedules.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <ShieldCheck className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Wound &amp; Skin Care</h4>
                      <p className="text-body text-sm">Sterile dressings for surgical wounds, skin tears, and chronic pressure ulcers managed by experienced clinical hands.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <UserCheck className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Family Updates</h4>
                      <p className="text-body text-sm">Direct, clear clinical communication with family members after visits, keeping everyone informed and aligned.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-2xl border border-border">
                <h3 className="text-navy text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-accent" />
                  Why Hire a Private Nurse for Your Parents?
                </h3>
                <ul className="space-y-3 text-body text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Consistent Care Relationship:</strong> We assign the same Registered Nurse coordinator to every client. No roster surprises or unfamiliar faces.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Clinical Governance:</strong> High standards of clinical safety, infection control, and professional advocacy in the Perth healthcare system.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Funding Integration:</strong> Simple coordination with Home Care Package (HCP) case managers, NDIS plan managers, or private payments.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <ContactForm
                  title="Hire a Private Nurse"
                  subtitle="Speak directly with a Registered Nurse founder. Let us know how we can support your parent at home in Perth."
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

      {/* Related Services Links */}
      <section className="section-py bg-white border-t border-border">
        <div className="section-container max-w-4xl">
          <h2 className="text-navy font-bold text-xl mb-6">Related Nursing Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Private Nursing', href: '/private-nursing' },
              { label: 'Clinical Nursing Support', href: '/registered-nurses-clinical-care-services' },
              { label: 'Medication Monitoring', href: '/medication-management' },
              { label: 'Support at Home', href: '/support-at-home' },
              { label: 'Home Care Packages', href: '/homecare-packages' },
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
        title="Hire a Trusted Private Nurse in Perth"
        description="Call us on 1300 919 663 to speak directly with our registered nurse founders, or request a call back online."
        secondaryLink={{ text: 'Contact Us Now', href: '/contact' }}
      />
    </>
  )
}
