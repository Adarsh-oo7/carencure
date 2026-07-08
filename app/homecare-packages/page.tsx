import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema, FAQPageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { Award, ShieldCheck, HeartPulse, UserCheck, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Home Care Packages Perth | HCP Nursing | Care N Cure',
  },
  description: 'Navigate Home Care Packages Levels 1-4 with RN case managers. We coordinate nursing visits, wound care & clinical oversight. Perth-based, locally owned.',
  alternates: { canonical: 'https://carencure.com.au/homecare-packages' },
}


const faqs = [
  {
    question: 'How do I apply for a Home Care Package?',
    answer: 'You can apply by contacting My Aged Care on 1800 200 422 or visiting myagedcare.gov.au to request an Aged Care Assessment Team (ACAT) assessment. We can help guide you through this process and help prepare you for the assessment.',
  },
  {
    question: 'What are the charges for package and care management?',
    answer: 'We believe in absolute financial transparency. We charge competitive, flat fees for care management and package administration, with no hidden costs, exit fees, or basic daily fee charges. This ensures a larger percentage of your package budget is spent on direct care services.',
  },
  {
    question: 'Can I transfer my existing Home Care Package to Care N Cure?',
    answer: 'Yes. Switching providers is straightforward. You will need to contact My Aged Care to reactivate your referral code, notify your current provider of your intent to exit (checking your current agreement for notice periods), and sign a new agreement with us. We will assist you with every step to ensure continuity of care.',
  },
]

export default function HomecarePackages() {
  return (
    <>
      <ServicePageSchema
        serviceName="Home Care Packages Perth | HCP Nursing | Care N Cure"
        description="Navigate Home Care Packages Levels 1-4 with RN case managers. We coordinate nursing visits, wound care & clinical oversight. Perth-based, locally owned."
        url="/homecare-packages"
        procedureType="Home Care Packages Co-ordination"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Services', item: 'https://carencure.com.au/services' },
          { name: 'Home Care Packages', item: 'https://carencure.com.au/homecare-packages' },
        ]}
      />


      <PageHeader
        title="Home Care Packages"
        subtitle="Government-funded support (HCP Levels 1–4) coordinated by dedicated Registered Nurses."
        breadcrumbItems={[
          { name: 'Services', href: '/#services' },
          { name: 'Homecare Packages', href: '/homecare-packages' },
        ]}
        label="Funded Care Packages"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="section-label mb-2">Government Funding</p>
                <h2 className="text-navy text-3xl font-bold">Maximise your care with nurse-led package management</h2>
                <div className="section-divider" />
                <p className="text-body text-lg leading-relaxed mt-4">
                  A Home Care Package (HCP) allows you to choose your own provider to coordinate your services. At Care N Cure, we believe that aged care coordination should be run by clinicians, not administrative staff. Our co-founders oversee your care plan, budget, and services to ensure you get the absolute best outcomes.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-navy text-2xl font-bold">Our Package Management Services</h3>
                <p className="text-body">
                  Whether you have a Level 1 package (basic support) or a Level 4 package (high-level care), we customize our services to match your needs and funding parameters.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div className="card-base p-5 flex gap-4">
                    <Award className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Levels 1 to 4 Support</h4>
                      <p className="text-body text-sm">Flexible coordination covering domestic assistance, social support, mobility aids, transport, and clinical care.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <HeartPulse className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Nurse Case Managers</h4>
                      <p className="text-body text-sm">A qualified Registered Nurse as your primary contact, overseeing clinical quality and coordinate care schedules.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <ShieldCheck className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Fee Transparency</h4>
                      <p className="text-body text-sm">Clear, low package fees, no exit fees, and no hidden charges so that more of your funding goes to support.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <UserCheck className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Care Continuity</h4>
                      <p className="text-body text-sm">The same staff and nurses visiting your home, building long-term, trusted, and personal relationships.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-2xl border border-border">
                <h3 className="text-navy text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-accent" />
                  What can your package cover with us?
                </h3>
                <ul className="space-y-3 text-body text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Clinical services:</strong> Post-surgical wound care, health checkups, medication management, and nursing visits.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Home and daily support:</strong> Showers, light cleaning, washing, dressing, cooking, and shopping trips.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Allied health & equipment:</strong> Physiotherapy, occupational therapy assessments, walker selection, and bathroom rails.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <ContactForm
                  title="Enquire About Packages"
                  subtitle="Provide your details below. Our Registered Nurse co-founders will call you to discuss your package options."
                  defaultService="Homecare packages"
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
              { label: 'Wound Care Services', href: '/wound-care' },
              { label: 'Post-Hospital Care', href: '/post-hospital-care' },
              { label: 'Support at Home', href: '/support-at-home' },
              { label: 'Funded Care Options', href: '/funded-care' },
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
        title="Get a free funding and care review."
        description="Speak with our nursing team to learn how to access, switch, or optimize your Home Care Package budget today."
        secondaryLink={{ text: 'Contact Us Now', href: '/contact' }}
      />
    </>
  )
}
