import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema, FAQPageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { Pill, ShieldCheck, Heart, FileSpreadsheet, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'In-Home Medication Management Perth | The Nurse Who Knows You',
  description: 'Registered nurses managing complex medications, Webster packs, and administering injections at home in Perth. Safe medication reconciliation.',
  alternates: { canonical: 'https://carencure.com.au/medication-management' },
}

const faqs = [
  {
    question: 'Can your registered nurses administer injections?',
    answer: 'Yes. As Registered Nurses, we are fully licensed to administer all subcutaneous and intramuscular injections including insulin, anticoagulants (blood thinners like Clexane), vitamin B12, osteoporosis injections, and palliative medications.',
  },
  {
    question: 'What is medication reconciliation?',
    answer: 'It is a formal process where we cross-reference your newly issued hospital discharge medication sheet against your previous home medications. This is vital to spot duplicate prescriptions, discontinued drugs, or incorrect doses which frequently occur during hospital handovers.',
  },
  {
    question: 'Do you help set up Webster-packs?',
    answer: 'Yes. We work closely with your local Perth pharmacy and your GP to coordinate the packaging of medications into multi-dose Webster-packs, making daily administration simple and error-free.',
  },
]

export default function MedicationManagement() {
  return (
    <>
      <ServicePageSchema
        serviceName="Medication Management"
        description="Medication administration, subcutaneous/intramuscular injections, complex schedule tracking, and medication reconciliation by registered nurses in Perth, WA."
        url="/medication-management"
      />
      <FAQPageSchema faqs={faqs} />

      <PageHeader
        title="Medication Management"
        subtitle="Safe, accurate medication administration and clinical oversight in your own home."
        breadcrumbItems={[
          { name: 'Services', href: '/#services' },
          { name: 'Medication Management', href: '/medication-management' },
        ]}
        label="Clinical Medication Care"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="section-label mb-2">Clinical Oversight</p>
                <h2 className="text-navy text-3xl font-bold">Preventing medication errors through strict professional controls</h2>
                <div className="section-divider" />
                <p className="text-body text-lg leading-relaxed mt-4">
                  Managing complex medication regimens after a hospital stay or when living with a chronic disease can be overwhelming. Double-dosing, missed doses, and dangerous drug-drug interactions are common causes of emergency hospital admissions.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-navy text-2xl font-bold">Our Medication Safety Services</h3>
                <p className="text-body">
                  Our Registered Nurses ensure that all medications are managed, recorded, and administered in strict accordance with your doctor&apos;s prescribing instructions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div className="card-base p-5 flex gap-4">
                    <Pill className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Injections & Clinical Admin</h4>
                      <p className="text-body text-sm">Professional administration of subcutaneous and intramuscular injections, including precise blood glucose/insulin tracking.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <ShieldCheck className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Medication Reconciliation</h4>
                      <p className="text-body text-sm">Complete audit of discharge drugs, identifying discrepancies, obsolete prescriptions, and updating GP records.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <FileSpreadsheet className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Webster-Pack Coordination</h4>
                      <p className="text-body text-sm">Liaising with your GP and local pharmacist to arrange blister packing and home delivery for simple daily compliance.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <Heart className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Side Effect Monitoring</h4>
                      <p className="text-body text-sm">Active assessment for drug adverse reactions, allergies, blood pressure drops, dizziness, and cognitive shifts.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-2xl border border-border">
                <h3 className="text-navy text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-accent" />
                  Our Medication Safeguards
                </h3>
                <ul className="space-y-3 text-body text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Accurate charts:</strong> We log every single dose on a professional clinical Medication Administration Record (MAR).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>GP liaison:</strong> Proactive consultation with your doctor to request reviews if symptoms or secondary indicators change.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Education:</strong> Educating the client and their family on why each drug is prescribed and what to monitor.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <ContactForm
                  title="Enquire About Medication Care"
                  subtitle="Fill out the form below. A registered nurse will call you back to discuss your medication support needs."
                  defaultService="Medication Management"
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
        title="Concerned about complex new medication schedules?"
        description="Let our registered nurses take the stress away. We perform detailed assessments and monitor compliance safely at home."
        secondaryLink={{ text: 'Enquire Online Today', href: '/contact' }}
      />
    </>
  )
}
