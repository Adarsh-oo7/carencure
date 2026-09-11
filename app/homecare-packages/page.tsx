import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema, FAQPageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { Award, ShieldCheck, HeartPulse, UserCheck, CheckCircle, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Home Care Packages Perth | Self-Managed HCP Nursing Support',
  },
  description: 'Nurse-led Home Care Package support in Perth, including clinical nursing, wound care and care coordination for HCP Levels 1–4 and self-managed plans. Call 1300 919 663.',
  alternates: { canonical: 'https://carencure.com.au/homecare-packages' },
}


const faqs = [
  {
    question: 'How do I apply for a Home Care Package or Support at Home?',
    answer: 'You can apply by contacting My Aged Care on 1800 200 422 or visiting myagedcare.gov.au to request an ACAT assessment. We can help guide you through what clinical evidence is helpful to prepare for your assessment.',
  },
  {
    question: 'Can I use Care N Cure for clinical nursing with a self-managed package?',
    answer: 'Yes! We actively support self-managed Home Care Package clients (including participants partnering with Trilogy Care or other approved management platforms). You can engage our AHPRA-registered nurses directly for wound care, medication oversight, and clinical visits, paying via your package funds.',
  },
  {
    question: 'What is the transition from Home Care Packages to Support at Home?',
    answer: 'The Australian Government is transitioning aged care at home to the Support at Home program. If you currently hold a Home Care Package (Levels 1–4), your existing funding and service continuity remain protected, and Care N Cure provides seamless nursing support across both systems.',
  },
]

export default function HomecarePackages() {
  return (
    <>
      <ServicePageSchema
        serviceName="Home Care Packages Perth | Self-Managed HCP Nursing Support"
        description="Nurse-led Home Care Package support in Perth, including clinical nursing, wound care and care coordination for HCP Levels 1–4 and self-managed plans. Call 1300 919 663."
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
        title="Home Care Packages & Support at Home Perth"
        subtitle="Clinical registered nursing care and case coordination for HCP Levels 1–4 and self-managed packages."
        breadcrumbItems={[
          { name: 'Services', href: '/#services' },
          { name: 'Home Care Packages', href: '/homecare-packages' },
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
                  A Home Care Package (HCP) allows you to choose your own provider to coordinate your services. At Care N Cure, we believe that aged care coordination should be run by clinicians, not administrative staff. Our co-founders oversee your care plan, budget, and services to ensure you get the absolute best outcomes, integrating clinical oversight seamlessly with your everyday <Link href="/support-at-home" className="text-teal-text hover:underline font-semibold">support at home</Link>.
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
                    <span><strong>Home and daily support:</strong> Personal care, hygiene support, and everyday <Link href="/support-at-home" className="text-teal-text hover:underline font-semibold">support at home</Link>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Allied health & equipment:</strong> Physiotherapy, occupational therapy assessments, and mobility aids.</span>
                  </li>
                </ul>
              </div>

              {/* H2: Clinical Oversight Included */}
              <div className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">Clinical Nursing Included in Your Package</h2>
                <p className="text-body leading-relaxed">
                  Most HCP providers charge exorbitant administration fees and subcontract clinical nursing at marked-up rates. Because Care N Cure is an independent registered nursing practice, clinical care is built directly into our service DNA.
                </p>
                <p className="text-body leading-relaxed">
                  Your package funds can cover:
                </p>
                <ul className="space-y-3 text-body">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-1" />
                    <span><strong>Complex Wound Care:</strong> Surgical dressings, ulcer management, and skin tear therapy by an AHPRA Registered Nurse.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-1" />
                    <span><strong>Medication Management:</strong> Dose administration aid setups, injections, and liaising with your prescribing GP.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-1" />
                    <span><strong>Continence & Catheter Care:</strong> Catheter changes, hygiene plans, and continence product supply management.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-1" />
                    <span><strong>Post-Hospital Support:</strong> Smooth discharge planning to prevent re-admission following hospital stays.</span>
                  </li>
                </ul>
              </div>

              {/* H2: Support at Home Transition */}
              <div className="space-y-4 bg-teal-subtle/30 p-8 rounded-2xl border border-teal-border">
                <h2 className="text-navy text-2xl font-bold">Transitioning to Support at Home (July 2025 Reform)</h2>
                <p className="text-body leading-relaxed">
                  The Australian Government is replacing Home Care Packages with the new <strong>Support at Home program</strong>. Care N Cure is fully aligned with these upcoming reforms to ensure your care funding continues without interruption.
                </p>
                <p className="text-body leading-relaxed">
                  Whether you currently hold a Home Care Package or are waiting for an ACAT assessment, our Registered Nurse team helps you navigate funding rules so you receive maximum clinical value from your allocation. Read more on our dedicated <Link href="/support-at-home" className="text-teal-text font-semibold hover:underline">Support at Home reforms guide</Link>.
                </p>
              </div>

              {/* H2: Why Choose Care N Cure for Your Package? */}
              <div className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">Why Choose Care N Cure for Your Home Care Package?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-surface rounded-xl border border-border space-y-2">
                    <div className="flex items-center gap-2 font-bold text-navy">
                      <UserCheck className="w-5 h-5 text-teal-accent" />
                      <span>Dedicated Nurse Coordinator</span>
                    </div>
                    <p className="text-body text-xs leading-relaxed">
                      You are matched with one primary Registered Nurse who conducts visits and oversees your care plan — no revolving door of staff.
                    </p>
                  </div>
                  <div className="p-5 bg-surface rounded-xl border border-border space-y-2">
                    <div className="flex items-center gap-2 font-bold text-navy">
                      <ShieldCheck className="w-5 h-5 text-teal-accent" />
                      <span>Low Admin Fees</span>
                    </div>
                    <p className="text-body text-xs leading-relaxed">
                      We keep management fees low so more of your package funding goes directly toward clinical visits and hands-on care.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="space-y-6 pt-6">
                <h2 className="text-navy text-2xl font-bold">Home Care Package FAQs</h2>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-surface p-6 rounded-xl border border-border space-y-2">
                      <h3 className="text-navy font-bold text-lg">{faq.question}</h3>
                      <p className="text-body text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar Contact Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-surface p-6 rounded-2xl border border-border shadow-sm space-y-6">
                <div className="space-y-2">
                  <span className="px-3 py-1 bg-teal-subtle text-teal-text text-xs font-bold rounded-full uppercase tracking-wider font-sans">Package Support</span>
                  <h3 className="text-navy text-xl font-bold">Maximise Your Care Package</h3>
                  <p className="text-body text-sm">
                    Speak directly with a Registered Nurse about allocating your HCP or Support at Home funds.
                  </p>
                </div>
                <ContactForm
                  defaultService="Home Care Packages"
                  subtitle="Provide your details below. Our Registered Nurse founder will call you to discuss your package options."
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
