import type { Metadata } from 'next'
import Link from 'next/link'
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
    question: "What's the difference between private nursing and a home care package?",
    answer: "Private nursing is paid directly by you or your family, with no waitlist or government assessment — care can often start within 24–48 hours. A Home Care Package (HCP) is government-funded and requires a My Aged Care assessment first. We support both, and many families use private nursing to bridge the gap while waiting on a package.",
  },
  {
    question: "Do I need a referral to get a private nurse at home?",
    answer: "No. You can call us directly, or your GP or hospital discharge team can refer you — either way works.",
  },
  {
    question: "Are your private nurses fully registered?",
    answer: "Yes. Every nurse is registered with AHPRA (Australian Health Practitioner Regulation Agency). We don't use support workers or assistants in nursing for clinical tasks — only Registered Nurses.",
  },
  {
    question: "How is this different from private nursing care through an agency?",
    answer: "Most agencies assign whichever nurse is available that day. We assign one dedicated Nurse Coordinator to you for the life of your care — the same person who did your first assessment is the one who shows up next time.",
  },
  {
    question: "Can private nursing be claimed on private health insurance?",
    answer: "Many of our clinical services can be claimed through private health insurance extras, depending on your policy. We're happy to help you check what's covered.",
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
                <h3 className="text-navy text-2xl font-bold">What Is a Private Nurse at Home?</h3>
                <p className="text-body leading-relaxed">
                  A private nurse at home is a fully Registered Nurse (RN) who provides clinical care in your own home — not a support worker, not a carer, a registered clinical professional. That means <Link href="/wound-care" className="text-teal-text hover:underline font-semibold">sterile wound care</Link>, <Link href="/medication-management" className="text-teal-text hover:underline font-semibold">medication management</Link>, injections, catheter care, and health monitoring, delivered by someone qualified to notice when something's wrong and act on it.
                </p>
                <p className="text-body leading-relaxed">
                  At Care N Cure, private nursing means one more thing most agencies don't offer: the same nurse, every visit. Your dedicated Nurse Coordinator learns your medical history, your routine, and your family — so nothing gets lost between visits. We offer consistent visiting routes throughout areas such as <Link href="/locations/nedlands" className="text-teal-text hover:underline font-semibold">Nedlands</Link> and <Link href="/locations/claremont" className="text-teal-text hover:underline font-semibold">Claremont</Link>.
                </p>
                <div className="bg-surface p-6 rounded-2xl border border-border">
                  <p className="text-navy font-bold mb-2">Private nursing at home is right for you if:</p>
                  <ul className="space-y-3 text-body text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-accent font-bold">•</span>
                      <span>You're recovering from surgery or a hospital stay and need clinical <Link href="/post-hospital-care" className="text-teal-text hover:underline font-semibold">post-hospital care</Link> without readmission.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-accent font-bold">•</span>
                      <span>You or a family member is managing a chronic condition (diabetes, COPD, heart failure, Parkinson's, dementia) and needs regular clinical eyes at home.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-accent font-bold">•</span>
                      <span>You want nursing care without the wait times of the public system or a My Aged Care assessment.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-accent font-bold">•</span>
                      <span>You've been let down by rotating support workers and want consistency, clinical accountability, or extra <Link href="/support-at-home" className="text-teal-text hover:underline font-semibold">support at home</Link>.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-teal-50/50 p-6 rounded-2xl border border-teal-100 space-y-3">
                <h3 className="text-navy text-xl font-bold">Private Nursing Pricing</h3>
                <p className="text-body text-sm leading-relaxed">
                  Every situation is different, so we quote after a free assessment — but as a guide, Perth's Registered Nurse clinical care starts from <strong>$100*</strong>, with the exact cost depending on visit frequency, complexity, and time of day. We're consistently one of the more affordable private nursing options in Perth because we don't carry the overhead of a large call-centre agency.
                </p>
                <p className="text-body text-sm leading-relaxed">
                  We'll always tell you the cost upfront, in writing, before care begins — no surprises on the invoice.
                </p>
                <p className="text-body text-xs italic text-gray-500 mt-2">
                  *Indicative starting price. Confirmed during your free care assessment.
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
