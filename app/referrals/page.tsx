import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema, FAQPageSchema } from '@/components/schema'
import { Stethoscope, Building2, Heart, ClipboardList, Phone, Mail, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Healthcare Referrals | Partner With Care N Cure | Perth Nurses',
  },
  description:
    'Refer your patients to Perth\'s dedicated nurse coordinators. Seamless care transitions, clinical oversight & GP communication. Partner with Care N Cure.',
  alternates: { canonical: 'https://carencure.com.au/referrals' },
  openGraph: {
    title: 'Healthcare Referrals | Partner With Care N Cure | Perth Nurses',
    description:
      'Streamlined referral process for GPs, hospitals, and discharge coordinators in Perth. Our registered nurses follow up within 24 hours.',
    url: 'https://carencure.com.au/referrals',
  },
}


const faqs = [
  {
    question: 'How quickly will Care N Cure respond to a referral?',
    answer:
      'We aim to contact the patient or their family within 24 hours of receiving a referral. For urgent post-discharge situations, please call us directly on 1300 919 663 and we will prioritise the response.',
  },
  {
    question: 'What information do you need to process a referral?',
    answer:
      "We need the patient's name, contact number, suburb, reason for referral, and any relevant clinical information (diagnosis, medications, wound type, etc.). A discharge summary or GP letter is helpful but not required to initiate contact.",
  },
  {
    question: 'Can families self-refer without a GP?',
    answer:
      'Yes. Families can contact us directly — no GP referral is required for private nursing services. We conduct our own initial nursing assessment and communicate back to the treating team as appropriate.',
  },
  {
    question: 'Do you accept NDIS, DVA, and Home Care Package referrals?',
    answer:
      'Yes. We accept referrals for private-pay clients, NDIS participants, DVA recipients, and clients with active Home Care Packages (HCP Levels 1–4). Please indicate the funding type in your referral so we can prepare the relevant paperwork.',
  },
]

const referralTypes = [
  {
    id: 'referral-hospital',
    icon: Building2,
    title: 'Hospital Discharge Teams',
    description:
      'Working directly with discharge coordinators at Fiona Stanley, Sir Charles Gairdner, Royal Perth, and Rockingham General. We take clinical handovers seriously and will have a nurse ready before your patient arrives home.',
  },
  {
    id: 'referral-gp',
    icon: Stethoscope,
    title: 'GPs & Specialists',
    description:
      'Trusted by Perth GPs for post-procedure recovery, wound dressing, medication initiation, and chronic condition monitoring. We report back with clinical notes after every visit.',
  },
  {
    id: 'referral-family',
    icon: Heart,
    title: 'Family Members',
    description:
      'No referral required. If you are a son, daughter, or carer who needs nursing support for a loved one, call or email us directly. We will conduct a free initial assessment and propose a care plan.',
  },
  {
    id: 'referral-allied',
    icon: ClipboardList,
    title: 'Allied Health Professionals',
    description:
      'Physiotherapists, occupational therapists, and social workers can refer clients requiring nursing oversight alongside their existing allied health care. We integrate into your team seamlessly.',
  },
]

export default function ReferralsPage() {
  return (
    <>
      <ServicePageSchema
        serviceName="Healthcare Referrals | Partner With Care N Cure | Perth Nurses"
        description="Refer your patients to Perth's dedicated nurse coordinators. Seamless care transitions, clinical oversight & GP communication. Partner with Care N Cure."
        url="/referrals"
        procedureType="Clinical Referral Coordination"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Referrals', item: 'https://carencure.com.au/referrals' },
        ]}
      />

      <PageHeader
        title="Refer a Patient"
        subtitle="Fast, clinician-to-clinician referrals for in-home nursing care across Perth, WA."
        breadcrumbItems={[{ name: 'Referrals', href: '/referrals' }]}
        label="Healthcare Referrals"
      />

      {/* Intro */}
      <section className="section-py bg-surface">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="section-label mb-2">Referral Process</p>
                <h2 className="text-navy text-3xl font-bold">
                  A nursing practice that speaks your clinical language
                </h2>
                <div className="section-divider" />
                <p className="text-body text-lg leading-relaxed mt-4">
                  Care N Cure was founded by two experienced registered nurses — Jinu and Zuhair — who
                  spent over a decade working inside Perth's hospital network. We understand what a
                  good discharge looks like, and we make it our job to ensure it goes smoothly.
                </p>
                <p className="text-body leading-relaxed mt-3">
                  Whether you are a hospital discharge coordinator, a GP, or a family member seeking
                  care, our referral process is straightforward. We respond fast, we document
                  thoroughly, and we communicate back to the treating team.
                </p>
              </div>

              {/* Who Can Refer */}
              <div>
                <h3 className="text-navy text-2xl font-bold mb-6">Who can refer?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {referralTypes.map(({ id, icon: Icon, title, description }) => (
                    <div key={id} id={id} className="card-base p-5 flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-teal-accent" />
                      </div>
                      <div>
                        <h4 className="text-navy font-bold mb-1">{title}</h4>
                        <p className="text-body text-sm leading-relaxed">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to Refer */}
              <div className="bg-surface p-6 rounded-2xl border border-border">
                <h3 className="text-navy text-xl font-bold mb-4">How to make a referral</h3>
                <ol className="space-y-4">
                  {[
                    {
                      step: '1',
                      title: 'Call or email us',
                      detail:
                        "Contact us directly on 1300 919 663 or hello@carencure.com.au with the patient's name, contact details, suburb, and reason for referral.",
                    },
                    {
                      step: '2',
                      title: 'Send clinical information',
                      detail:
                        'Discharge summary, care plan, or GP letter can be emailed or faxed. Not mandatory but helps us prepare a targeted nursing assessment.',
                    },
                    {
                      step: '3',
                      title: 'We contact the patient within 24 hours',
                      detail:
                        'Our registered nurse founders make first contact, conduct an initial needs assessment, and agree a care schedule with the patient and family.',
                    },
                    {
                      step: '4',
                      title: 'Care begins — you receive a clinical update',
                      detail:
                        'After each visit we document our findings and communicate back to the referring clinician where appropriate. You stay informed.',
                    },
                  ].map(({ step, title, detail }) => (
                    <li key={step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-teal-accent/10 text-teal-accent font-bold flex items-center justify-center flex-shrink-0 text-sm">
                        {step}
                      </div>
                      <div>
                        <p className="text-navy font-semibold text-sm">{title}</p>
                        <p className="text-body text-sm leading-relaxed">{detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Contact Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-6">
                <div className="card-base p-6">
                  <h3 className="text-navy font-bold text-xl mb-4">Contact us to refer</h3>
                  <div className="space-y-4">
                    <a
                      href="tel:1300919663"
                      id="referral-phone-cta"
                      className="flex items-center gap-3 p-4 rounded-xl border border-teal-accent/30 bg-teal-accent/5 hover:bg-teal-accent/10 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-teal-accent/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-teal-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-body font-medium">Call us directly</p>
                        <p className="text-navy font-bold">1300 919 663</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-teal-accent ml-auto group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="mailto:hello@carencure.com.au"
                      id="referral-email-cta"
                      className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-teal-accent/30 hover:bg-surface transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center">
                        <Mail className="w-5 h-5 text-teal-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-body font-medium">Email a referral</p>
                        <p className="text-navy font-bold text-sm">hello@carencure.com.au</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-teal-accent ml-auto group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <Link
                      href="/contact"
                      id="referral-contact-form-cta"
                      className="btn-primary w-full text-center flex items-center justify-center gap-2"
                    >
                      Use our contact form
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="bg-surface p-5 rounded-2xl border border-border text-sm text-body space-y-2">
                  <p className="font-semibold text-navy text-base">Service Areas</p>
                  <p>We accept referrals for patients in all Perth metro suburbs and surrounding areas, including Nedlands, Subiaco, Fremantle, South Perth, Applecross, Mount Lawley, Gosnells, Armadale, Rockingham, and Cottesloe.</p>
                  <Link href="/locations" className="text-teal-accent font-semibold text-sm hover:underline">
                    View all service areas →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-white border-t border-border">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-navy font-bold">Referral FAQs</h2>
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
        title="Ready to refer? We'll take it from here."
        description="Call 1300 919 663 or email hello@carencure.com.au. A registered nurse will respond within 24 hours and personally manage the patient's care pathway."
        secondaryLink={{ text: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
