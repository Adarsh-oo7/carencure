import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema, FAQPageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { HeartHandshake, ShieldCheck, Home, Car, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Support at Home Perth | Home Care Assistance | Care N Cure',
  },
  description: 'Nurse-led companion and domestic care under clinical oversight. Personal care, social support & daily living assistance in Perth. AHPRA-registered nurses.',
  alternates: { canonical: 'https://carencure.com.au/support-at-home' },
}


const faqs = [
  {
    question: 'What types of activities are covered under support at home?',
    answer: 'Support at home covers a wide range of daily living assistance, including personal care (showering, dressing, grooming), domestic assistance (light cleaning, laundry, meal preparation), transport (doctor visits, grocery shopping), and social companionship.',
  },
  {
    question: 'How does nursing oversight benefit standard home support?',
    answer: 'While support workers assist with daily tasks, having our Registered Nurse co-founders oversee the care plan ensures that any changes in physical health, cognitive patterns, or wound healing are identified early and escalated appropriately before a crisis occurs.',
  },
  {
    question: 'Can I use government funding for support at home?',
    answer: 'Yes. Support at home is one of the most common services funded through Home Care Packages (HCP). We can deliver these services using your government funding or on a private fee-for-service basis.',
  },
]

export default function SupportAtHome() {
  return (
    <>
      <ServicePageSchema
        serviceName="Support at Home Perth | Home Care Assistance | Care N Cure"
        description="Nurse-led companion and domestic care under clinical oversight. Personal care, social support & daily living assistance in Perth. AHPRA-registered nurses."
        url="/support-at-home"
        procedureType="Home Support"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Services', item: 'https://carencure.com.au/services' },
          { name: 'Support at Home', item: 'https://carencure.com.au/support-at-home' },
        ]}
      />


      <PageHeader
        title="Support at Home"
        subtitle="Respectful, high-quality daily support to help you live independently and safely in your own home."
        breadcrumbItems={[
          { name: 'Services', href: '/#services' },
          { name: 'Support at Home', href: '/support-at-home' },
        ]}
        label="In-Home Daily Support"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="section-label mb-2">Daily Assistance</p>
                <h2 className="text-navy text-3xl font-bold">Helping you live comfortably and independently</h2>
                <div className="section-divider" />
                <p className="text-body text-lg leading-relaxed mt-4">
                  Remaining in your own home as you age should not mean struggling with daily tasks or feeling isolated. If you need a professional <strong>nurse for home</strong> care or general daily support, our services are designed to assist you with the practical aspects of daily life while ensuring your health is monitored by qualified nursing professionals.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-navy text-2xl font-bold">Our Home Support Services</h3>
                <p className="text-body">
                  We match you with consistent, caring support workers, and our Registered Nurse coordinators supervise your care plan to ensure your peace of mind.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div className="card-base p-5 flex gap-4">
                    <HeartHandshake className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Personal Care</h4>
                      <p className="text-body text-sm">Compassionate assistance with showering, dressing, grooming, and personal hygiene with absolute dignity.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <Home className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Domestic Assistance</h4>
                      <p className="text-body text-sm">Light housekeeping, changing bed linens, laundry, and cooking nutritious, delicious meals.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <Car className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Transport & Outings</h4>
                      <p className="text-body text-sm">Safe travel to general practitioner appointments, local pharmacies, supermarkets, and social gatherings.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <ShieldCheck className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Respite Support</h4>
                      <p className="text-body text-sm">Giving primary family members and carers a regular break, knowing their loved one is in safe hands.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-2xl border border-border">
                <h3 className="text-navy text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-accent" />
                  What makes our support at home different?
                </h3>
                <ul className="space-y-3 text-body text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Nurse-managed care:</strong> Every support plan is designed and regularly reviewed by a Registered Nurse, not just an administrator.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Familiar faces:</strong> We prioritize roster consistency, ensuring you see the same familiar staff members every week.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Clinical backing:</strong> If your health needs change, our nursing team can step in immediately to adjust care or coordinate with your doctor.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <ContactForm
                  title="Enquire About Home Support"
                  subtitle="Provide your contact details below. A coordinator will call you back to discuss how we can support you at home."
                  defaultService="Support at home"
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
              { label: 'Companion Care', href: '/companion-care' },
              { label: 'Mobility Support', href: '/mobility-support' },
              { label: 'Private Nursing', href: '/private-nursing' },
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
        title="Start with a free in-home consultation."
        description="Speak directly with our nurse co-founders to review your daily routine and design a comfortable support schedule."
        secondaryLink={{ text: 'Contact Us Now', href: '/contact' }}
      />
    </>
  )
}
