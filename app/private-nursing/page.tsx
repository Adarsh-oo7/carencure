import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { Activity, ShieldCheck, HeartPulse, UserCheck, CheckCircle2, Stethoscope, Phone, Award, Clock, DollarSign, MapPin, AlertCircle } from 'lucide-react'

import { CtaUncertaintyReducer } from '@/components/sections/cta-uncertainty-reducer'

export const metadata: Metadata = {
  title: {
    absolute: 'Private Nurse Perth | In-Home Registered Nursing Care | Care N Cure',
  },
  description: 'Need a private nurse at home in Perth? Discuss wound care, medication support, injections, recovery and elderly care with a dedicated Nurse Coordinator.',
  alternates: { canonical: 'https://carencure.com.au/private-nursing' },
}

const faqs = [
  {
    question: "How much does private nursing cost in Perth?",
    answer: "Private Registered Nurse visits in Perth range from $110 to $160 per hour for standard weekday clinical care, depending on care complexity. Weekend, after-hours, and public holiday visits range between $160 and $220 per hour. Detailed pricing is available on our pricing schedule, and services can be self-funded or funded through NDIS or Home Care Packages.",
  },
  {
    question: "Do you accept NDIS or Home Care Packages (HCP)?",
    answer: "Yes. Care N Cure is fully compatible with NDIS funding (under Capacity Building and Core Supports) and Home Care Packages (Levels 1 to 4). We also support self-managed participants, plan-managed participants, and private fee-for-service clients.",
  },
  {
    question: "Can I get extended private nursing care in Perth?",
    answer: "Yes. We offer flexible schedule coverage ranging from short clinical visits for wound care or injection administration to extended day shifts and overnight nursing support for complex post-operative recovery or palliative support, subject to scheduling availability.",
  },
  {
    question: "Do I need a doctor's referral to hire a private nurse?",
    answer: "No referral is required for private-pay care. You or a family member can contact Care N Cure directly on 1300 919 663. However, if you are transitioning from hospital or require prescription treatments, we liaise closely with your treating GP or surgeon with your consent.",
  },
  {
    question: "What is the difference between a Registered Nurse (RN) and a home carer?",
    answer: "A Registered Nurse (RN) holds an accredited university degree, is licensed by AHPRA, and is authorized to perform complex clinical procedures such as sterile wound dressing, urinary catheterization, IV medication administration, and clinical health assessments. A support worker or home carer provides non-clinical assistance such as light housework, companionship, and basic personal hygiene.",
  },
  {
    question: "Can private nursing be claimed on private health insurance?",
    answer: "Depending on your private health fund and extras policy, clinical nursing services ordered by a doctor may qualify for partial or full rebates. We supply itemized invoices to assist you in making claims with your insurer.",
  },
  {
    question: "How quickly can in-home private nursing care start in Perth?",
    answer: "In most cases across metropolitan Perth, an initial clinical assessment can be arranged within 24 to 48 hours following your intake enquiry. For urgent post-hospital discharge situations, call 1300 919 663 and we will prioritise your intake.",
  },
  {
    question: "What happens if my dedicated nurse is sick or on leave?",
    answer: "While you are assigned a primary dedicated Nurse Coordinator for continuity, Care N Cure maintains a small, closely acquainted team of secondary Registered Nurses. In the event of planned leave or illness, your hand-off is managed seamlessly by an RN who has already reviewed your medical history.",
  },
]

export default function PrivateNursing() {
  return (
    <>
      <ServicePageSchema
        serviceName="Private Nurse Perth | In-Home Registered Nursing Care | Care N Cure"
        description="Need a private nurse at home in Perth? Discuss wound care, medication support, injections, recovery and elderly care with a dedicated Nurse Coordinator."
        url="/private-nursing"
        procedureType="In-Home Clinical Nursing Care"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Services', item: 'https://carencure.com.au/services' },
          { name: 'Private Nursing', item: 'https://carencure.com.au/private-nursing' },
        ]}
      />

      <PageHeader
        title="Private Nursing Care at Home in Perth"
        subtitle="AHPRA-registered nurses providing personalized, clinical care in the comfort and privacy of your own home."
        breadcrumbItems={[
          { name: 'Services', href: '/services' },
          { name: 'Private Nursing', href: '/private-nursing' },
        ]}
        label="Professional In-Home Clinical Care"
      />

      {/* Answer-First Section */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Answer-First Summary Box */}
              <div>
                <p className="section-label mb-2">Dedicated Registered Nursing</p>
                <h1 className="text-navy text-3xl md:text-4xl font-bold leading-tight">
                  Private Nursing Care at Home in Perth
                </h1>
                <div className="section-divider my-4" />
                <div className="bg-teal-subtle/50 p-6 rounded-2xl border border-teal-border">
                  <p className="text-navy font-semibold text-lg leading-relaxed">
                    <strong>Private nursing in Perth</strong> is specialized, in-home clinical healthcare delivered by qualified AHPRA-Registered Nurses (RNs) without public waiting lists or government aged care delays. Care N Cure provides dedicated Nurse Coordinators for complex wound management, post-surgical recovery, medication administration, and chronic disease support across all Perth metropolitan suburbs. Families and self-funded individuals can initiate clinical nursing visits within 24 to 48 hours.
                  </p>
                </div>
              </div>

              {/* H2: What Does In-Home Private Nursing Cover in Perth? */}
              <div className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">What Does In-Home Private Nursing Cover in Perth?</h2>
                <p className="text-body leading-relaxed">
                  Unlike non-clinical home care services that focus solely on housework or companionship, <strong>private nursing care</strong> provides licensed medical treatment in the home. When health conditions require expert clinical judgment, hiring a private nurse ensures safety, accurate health tracking, and professional treatment execution.
                </p>
                <p className="text-body leading-relaxed">
                  Our Registered Nurses perform a comprehensive array of clinical procedures, including:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-surface p-5 rounded-xl border border-border space-y-2">
                    <div className="flex items-center gap-2 text-teal-accent font-bold">
                      <Stethoscope className="w-5 h-5" />
                      <span>Complex Wound Care</span>
                    </div>
                    <p className="text-body text-sm">
                      Sterile surgical dressing changes, pressure injury therapy, vacuum-assisted closure (VAC), and skin tear management. Learn about our specialized <Link href="/wound-care" className="text-teal-text font-semibold hover:underline">sterile wound care services</Link>.
                    </p>
                  </div>

                  <div className="bg-surface p-5 rounded-xl border border-border space-y-2">
                    <div className="flex items-center gap-2 text-teal-accent font-bold">
                      <ShieldCheck className="w-5 h-5" />
                      <span>Medication Administration</span>
                    </div>
                    <p className="text-body text-sm">
                      IV antibiotic infusions, subcutaneous injections, complex dosing management, and liaising with community pharmacies for <Link href="/medication-management" className="text-teal-text font-semibold hover:underline">medication management</Link>.
                    </p>
                  </div>

                  <div className="bg-surface p-5 rounded-xl border border-border space-y-2">
                    <div className="flex items-center gap-2 text-teal-accent font-bold">
                      <HeartPulse className="w-5 h-5" />
                      <span>Post-Hospital Recovery</span>
                    </div>
                    <p className="text-body text-sm">
                      Post-operative vital sign monitoring, drain care, pain management, and early detection of surgical complications. Explore our <Link href="/post-hospital-care" className="text-teal-text font-semibold hover:underline">post-hospital care</Link>.
                    </p>
                  </div>

                  <div className="bg-surface p-5 rounded-xl border border-border space-y-2">
                    <div className="flex items-center gap-2 text-teal-accent font-bold">
                      <Activity className="w-5 h-5" />
                      <span>Catheter & Continence Care</span>
                    </div>
                    <p className="text-body text-sm">
                      Insertion, flushing, and ongoing management of indwelling catheters (IDC), suprapubic catheters (SPC), and continence assessments.
                    </p>
                  </div>
                </div>
              </div>

              {/* H2: Who Is Private Nursing For? */}
              <div className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">Who Needs a Private Nurse at Home?</h2>
                <p className="text-body leading-relaxed">
                  Private nursing care is designed for individuals and families who require professional clinical management outside of a hospital environment. It is ideal for:
                </p>
                <ul className="space-y-3 text-body">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-1" />
                    <span><strong>Surgical Patients:</strong> Individuals returning home after major orthopedic, cardiac, or general surgery needing skilled wound care and pain management.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-1" />
                    <span><strong>Seniors Waiting for Aged Care Funding:</strong> Older Perth residents bridging the multi-month waiting list for government Home Care Packages (HCP).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-1" />
                    <span><strong>Elderly Care & Geriatric Support:</strong> Seniors needing specialized support at home for chronic conditions, mobility, cognitive tracking, and general wellbeing. Read more about our <Link href="/private-nursing/elderly-care" className="text-teal-text font-semibold hover:underline">Elderly Care at Home</Link> services.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-1" />
                    <span><strong>NDIS Participants (Self & Plan Managed):</strong> Individuals with disability requiring high-intensity clinical interventions. Check our dedicated <Link href="/ndis-nursing" className="text-teal-text font-semibold hover:underline">NDIS Nursing Care</Link> page.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-1" />
                    <span><strong>Families Seeking Peace of Mind:</strong> Relatives who live interstate or work full-time and need a qualified clinician overseeing their parent's health.</span>
                  </li>
                </ul>
              </div>

              {/* H2: The Dedicated Nurse Advantage: Why Roster Continuity Matters */}
              <div className="space-y-4 bg-teal-subtle/30 p-8 rounded-2xl border border-teal-border">
                <div className="flex items-center gap-3">
                  <UserCheck className="w-7 h-7 text-teal-accent" />
                  <h2 className="text-navy text-2xl font-bold">The Dedicated Nurse Advantage: Why Roster Continuity Matters</h2>
                </div>
                <p className="text-body leading-relaxed">
                  Standard nursing agencies in Perth often rely on rotating rosters, sending different temporary or casual nurses on every visit. This constant turnover forces clients to repeat their medical history repeatedly, increases the risk of missed clinical nuances, and disrupts personal comfort.
                </p>
                <p className="text-body leading-relaxed">
                  Care N Cure operates under a strict <strong>One Dedicated Nurse Coordinator model</strong>. You are assigned a single primary Registered Nurse who conducts your baseline clinical assessment and returns for every scheduled visit. This creates trust, enables early detection of subtle health changes, and provides a direct point of contact for your GP and family. Read more about how our <Link href="/your-dedicated-nurse" className="text-teal-text font-semibold hover:underline">dedicated Nurse Coordinator model</Link> sets us apart.
                </p>
              </div>

              {/* H2: How Much Does a Private Nurse Cost in Perth? */}
              <div className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">How Much Does a Private Nurse Cost in Perth?</h2>
                <p className="text-body leading-relaxed">
                  Private nursing rates in Perth are structured transparently without hidden booking fees. Costs vary depending on schedule requirements and clinical complexity:
                </p>
                
                <div className="overflow-x-auto border border-border rounded-xl">
                  <table className="w-full text-left text-sm text-body">
                    <thead className="bg-navy text-white text-xs uppercase">
                      <tr>
                        <th className="p-4">Service Tier</th>
                        <th className="p-4">Hourly Rate (AUD)</th>
                        <th className="p-4">Inclusions & Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-white">
                      <tr>
                        <td className="p-4 font-semibold text-navy">Weekday Clinical Care (8am–6pm)</td>
                        <td className="p-4 font-bold text-teal-accent">$110 – $160 / hr</td>
                        <td className="p-4 text-xs">AHPRA RN home visit, sterile dressing, catheter care, health checks.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-navy">After-Hours & Evening Care</td>
                        <td className="p-4 font-bold text-teal-accent">$160 – $195 / hr</td>
                        <td className="p-4 text-xs">Evening injections, pain management, post-discharge evening checks.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-navy">Weekend & Public Holidays</td>
                        <td className="p-4 font-bold text-teal-accent">$180 – $240 / hr</td>
                        <td className="p-4 text-xs">Weekend clinical support & rapid emergency response.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-navy">24-Hour Shift / Overnight Care</td>
                        <td className="p-4 font-bold text-teal-accent">Custom Quote</td>
                        <td className="p-4 text-xs">Continuous clinical oversight for high-dependency recovery. See our full <Link href="/pricing" className="text-teal-text font-semibold hover:underline">pricing breakdown</Link>.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* H2: Funding Options: NDIS, HCP, and Private Insurance */}
              <div className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">Funding Options: NDIS, Home Care Packages & Health Insurance</h2>
                <p className="text-body leading-relaxed">
                  While many clients pay out-of-pocket for private nursing to receive immediate support without waiting lists, several funding pathways are available to reduce or cover care costs:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="p-4 bg-surface rounded-xl border border-border space-y-1">
                    <h3 className="font-bold text-navy">NDIS Funding</h3>
                    <p className="text-xs text-body">Covered under Capacity Building or Core Supports for eligible participants.</p>
                  </div>
                  <div className="p-4 bg-surface rounded-xl border border-border space-y-1">
                    <h3 className="font-bold text-navy">Home Care Packages</h3>
                    <p className="text-xs text-body">Sub-contracted clinical nursing under HCP Levels 1, 2, 3, and 4.</p>
                  </div>
                  <div className="p-4 bg-surface rounded-xl border border-border space-y-1">
                    <h3 className="font-bold text-navy">Private Health Extras</h3>
                    <p className="text-xs text-body">Rebates available from selected private health funds with GP referral.</p>
                  </div>
                </div>
              </div>

              {/* H2: Service Areas Across Metropolitan Perth */}
              <div className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">Private Nursing Service Areas in Perth</h2>
                <p className="text-body leading-relaxed">
                  Care N Cure provides mobile in-home private nursing visits across all Perth metropolitan suburbs. Our primary service hubs include:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['Nedlands', 'Subiaco', 'Cottesloe', 'Claremont', 'South Perth', 'Applecross', 'Joondalup', 'Fremantle', 'Mount Lawley', 'Midland', 'Canning Vale', 'Armadale', 'Rockingham'].map((suburb, i) => (
                    <Link
                      key={i}
                      href={`/locations/${suburb.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-3 py-1.5 bg-surface text-navy font-semibold text-xs rounded-lg border border-border hover:border-teal-accent transition-colors flex items-center gap-1"
                    >
                      <MapPin className="w-3 h-3 text-teal-accent" /> {suburb} Private Nurse
                    </Link>
                  ))}
                </div>
                <p className="text-body text-sm pt-2">
                  Visiting clients near major healthcare institutions including <em>Sir Charles Gairdner Hospital, Hollywood Private Hospital, St John of God Subiaco & Murdoch, and Joondalup Health Campus</em>. Explore our <Link href="/locations/joondalup" className="text-teal-text font-semibold hover:underline">Northern Perth community nursing care</Link>.
                </p>
              </div>

              {/* FAQs Section */}
              <div className="space-y-6 pt-6">
                <h2 className="text-navy text-2xl font-bold">Frequently Asked Questions</h2>
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

            {/* Sticky Sidebar Form */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm space-y-6">
                <div className="space-y-2">
                  <span className="px-3 py-1 bg-teal-subtle text-teal-text text-xs font-bold rounded-full uppercase tracking-wider">Clinical Intake</span>
                  <h3 className="text-navy text-xl font-bold">Book a Private Nurse Consultation</h3>
                  <p className="text-body text-sm">
                    Speak directly with a Registered Nurse about your in-home clinical care requirements across Perth.
                  </p>
                </div>
                <ContactForm defaultService="Private Nursing at Home" />
                <div className="pt-4 border-t border-border space-y-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-accent" />
                    <span>AHPRA-Registered Nurses Only</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-teal-accent" />
                    <span>Call 1300 919 663 for clinical triage</span>
                  </div>
                </div>
              </div>

              {/* Uncertainty Reducer */}
              <CtaUncertaintyReducer />
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
