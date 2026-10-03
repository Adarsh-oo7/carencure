import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema, FAQPageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import {
  Heart,
  HeartPulse,
  ShieldCheck,
  ArrowRight,
  Home,
  Clock,
  MapPin,
  FileCheck,
  UserCheck,
} from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Aged Care at Home Perth | Local Nurse-Led Aged Care Agency WA | Care N Cure',
  },
  description:
    'Local, nurse-led aged care agency in Perth (Harrisdale). Same Registered Nurse every visit, Support at Home & private care, start in 24–48h while you wait for My Aged Care. 5.0★ Google. Call 1300 919 663.',
  keywords: [
    'aged care at home perth',
    'aged care agency perth',
    'aged care agency perth wa',
    'age care agency in perth',
    'aged care agencies perth',
    'aged care providers perth',
    'aged care in home support',
    'aged care in home services perth',
    'in home aged care perth',
    'aged care support at home perth',
    'aged care near me perth',
    'aged care wa',
    'carers for elderly perth',
    'aged care canning vale',
    'aged care at home harrisdale',
    'elderly care at home perth',
    'support at home providers perth',
    'support at home perth',
    'private aged care perth',
    'home nursing for elderly perth',
  ],
  alternates: { canonical: 'https://carencure.com.au/aged-care-at-home-perth' },
  openGraph: {
    title: 'Aged Care at Home Perth | Local Nurse-Led Aged Care Agency WA | Care N Cure',
    description:
      'Local nurse-led aged care in Perth. Same Registered Nurse every visit, Support at Home & private care, 24–48h start. Call 1300 919 663.',
    url: 'https://carencure.com.au/aged-care-at-home-perth',
  },
}

const faqs = [
  {
    question: 'How do I arrange aged care at home for my elderly parent in Perth?',
    answer:
      'Call Care N Cure on 1300 919 663 to speak with a Registered Nurse. If your parent already has a Support at Home budget (formerly a Home Care Package), or you prefer to pay privately, we complete an in-home assessment and can start care within 24 to 48 hours. If you have not yet applied, register with My Aged Care (1800 200 422) — we guide your family through each step.',
  },
  {
    question: 'Is Care N Cure an aged care agency in Perth?',
    answer:
      'Care N Cure is a local, nurse-led aged care and home nursing practice based in Harrisdale, Perth. Unlike a traditional agency that sends whoever is available, every family is matched with one dedicated Registered Nurse who coordinates their care, talks to their GP, and visits on a predictable schedule.',
  },
  {
    question: 'Why choose nurse-led home care over a standard aged care agency?',
    answer:
      'Standard agencies typically send rotating support workers with varying experience. At Care N Cure, every family is assigned One Dedicated Registered Nurse Coordinator. Your coordinator oversees clinical health, coordinates with your parent’s GP and specialists, monitors chronic conditions, administers medications, dresses complex wounds, and provides a continuous trusted relationship for your family.',
  },
  {
    question: 'Home Care Packages changed to Support at Home — what does that mean for us?',
    answer:
      'On 1 November 2025, Home Care Packages were replaced by the Support at Home program. People now receive one of eight funding classifications, managed as quarterly budgets. Existing package holders moved across automatically. Under Support at Home, clinical care such as registered nursing does not attract a participant contribution. The Commonwealth Home Support Programme (CHSP) continues until at least July 2027. We work with your Support at Home provider or self-managed arrangement — including our partnership with Trilogy Care.',
  },
  {
    question: 'Do you offer aged care at home in Harrisdale, Piara Waters, and surrounding suburbs?',
    answer:
      'Yes. Our practice is based at 15 Rockefeller Way, Harrisdale WA 6112. We provide in-home aged care across Harrisdale, Piara Waters, Southern River, Forrestdale, Canning Vale, Thornlie, Gosnells, Armadale, Kelmscott, Byford, Willetton, Cockburn Central and Bull Creek, plus most Perth metropolitan suburbs within 50km.',
  },
  {
    question: 'Can private nursing care start immediately while we wait for My Aged Care approval?',
    answer:
      'Absolutely. Assessments and funding can take months. Many Perth families engage Care N Cure for private in-home nursing or personal care on an interim basis, then continue with the same nurse once their Support at Home budget is assigned.',
  },
]

export default function AgedCareAtHomePerthPage() {
  return (
    <>
      <ServicePageSchema
        serviceName="Aged Care at Home in Perth"
        description="Compassionate, Registered Nurse-led aged care at home across Perth and Harrisdale. Dedicated nurse coordinators, Home Care Packages, and Support at Home."
        url="/aged-care-at-home-perth"
        procedureType="Aged Care at Home & Nurse Coordination"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Aged Care at Home Perth', item: 'https://carencure.com.au/aged-care-at-home-perth' },
        ]}
      />
      <FAQPageSchema faqs={faqs} />

      {/* Page Header */}
      <PageHeader
        title="Aged Care at Home in Perth — A Local, Nurse-Led Team"
        subtitle="Based in Harrisdale and rated 5.0 on Google by local families. One dedicated Registered Nurse, plain-English help with Support at Home, and care that can start in 24–48 hours."
        breadcrumbItems={[
          { name: 'Services', href: '/services' },
          { name: 'Aged Care at Home Perth', href: '/aged-care-at-home-perth' },
        ]}
        label="Nurse-Led Senior Care"
      />

      {/* Hero Family Intent Section */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
                <Heart className="w-3.5 h-3.5 text-teal-600" />
                <span>Supporting Perth Families & Seniors Since Day One</span>
              </div>

              <h2 className="text-navy text-2xl sm:text-3xl font-extrabold leading-tight">
                Helping Mum or Dad Live Safely, Comfortably & Independently at Home
              </h2>

              <p className="text-body text-base leading-relaxed">
                Watching an ageing parent struggle with daily routines, medications, or mobility is challenging. You want the highest standard of dignified care, but residential aged care is often not what your loved one wants.
              </p>

              <p className="text-body text-base leading-relaxed">
                <strong>Care N Cure Nursing Care Services</strong> brings high-level, clinical-grade care into your family’s home across Perth and Harrisdale. Under our signature <em>Your Dedicated Nurse™</em> model, your family never gets passed between strangers. A single, qualified Registered Nurse coordinator manages clinical health, personal care, and wellbeing.
              </p>

              {/* 4 Core Pillars for Families */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-border bg-surface flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <UserCheck className="w-5 h-5 text-teal-accent shrink-0" />
                    <h3 className="font-bold text-navy text-sm">One Dedicated Nurse</h3>
                  </div>
                  <p className="text-xs text-body">
                    The same AHPRA Registered Nurse visits each time, knowing your parent’s history, routines, and preferences intimately.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-border bg-surface flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <FileCheck className="w-5 h-5 text-teal-accent shrink-0" />
                    <h3 className="font-bold text-navy text-sm">Support at Home &amp; Private</h3>
                  </div>
                  <p className="text-xs text-body">
                    Works with Support at Home budgets (formerly Home Care Packages), private pay, NDIS and DVA. No participant contribution for clinical nursing under Support at Home.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-border bg-surface flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <HeartPulse className="w-5 h-5 text-teal-accent shrink-0" />
                    <h3 className="font-bold text-navy text-sm">Clinical & Complex Care</h3>
                  </div>
                  <p className="text-xs text-body">
                    From wound dressing and catheter care to insulin administration, diabetes oversight, and post-hospital recovery.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-border bg-surface flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-5 h-5 text-teal-accent shrink-0" />
                    <h3 className="font-bold text-navy text-sm">50km Zero Travel Fee</h3>
                  </div>
                  <p className="text-xs text-body">
                    Based at 15 Rockefeller Way, Harrisdale. We service all Perth metro suburbs within 50km with zero travel surcharges.
                  </p>
                </div>
              </div>

              {/* Related Service Links */}
              <div className="pt-4 border-t border-border">
                <h4 className="text-navy font-bold text-sm mb-3">Explore Specific Aged Care Support Options:</h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/homecare-packages"
                    className="px-3 py-1.5 rounded-lg bg-teal-50 text-teal-800 font-semibold hover:bg-teal-100 transition-colors border border-teal-200"
                  >
                    Home Care Packages (HCP) →
                  </Link>
                  <Link
                    href="/support-at-home"
                    className="px-3 py-1.5 rounded-lg bg-teal-50 text-teal-800 font-semibold hover:bg-teal-100 transition-colors border border-teal-200"
                  >
                    Support at Home Guidance →
                  </Link>
                  <Link
                    href="/private-nursing"
                    className="px-3 py-1.5 rounded-lg bg-teal-50 text-teal-800 font-semibold hover:bg-teal-100 transition-colors border border-teal-200"
                  >
                    Private In-Home Nursing →
                  </Link>
                  <Link
                    href="/post-hospital-care"
                    className="px-3 py-1.5 rounded-lg bg-teal-50 text-teal-800 font-semibold hover:bg-teal-100 transition-colors border border-teal-200"
                  >
                    Post-Hospital Recovery →
                  </Link>
                  <Link
                    href="/medication-management"
                    className="px-3 py-1.5 rounded-lg bg-teal-50 text-teal-800 font-semibold hover:bg-teal-100 transition-colors border border-teal-200"
                  >
                    Medication Oversight →
                  </Link>
                  <Link
                    href="/personal-care"
                    className="px-3 py-1.5 rounded-lg bg-teal-50 text-teal-800 font-semibold hover:bg-teal-100 transition-colors border border-teal-200"
                  >
                    Personal Care Assistance →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Callback & Enquiry Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <div className="card-base overflow-hidden border border-border shadow-md">
                  <div className="p-1.5 bg-teal-accent" />
                  <ContactForm
                    title="Speak with a Perth Nurse Coordinator"
                    subtitle="Have questions about aged care at home for yourself or a parent? Leave your details for a caring callback."
                    defaultService="Aged Care at Home / Elderly Support"
                  />
                </div>

                <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200 text-xs text-navy space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm text-teal-900">
                    <Clock className="w-4 h-4 text-teal-600" />
                    <span>Immediate Start Available</span>
                  </div>
                  <p className="text-body leading-relaxed">
                    No waiting lists for private home nursing. We can conduct an in-home assessment and start care within 24–48 hours across Perth.
                  </p>
                  <div className="pt-2 border-t border-teal-200 flex items-center justify-between">
                    <span className="font-semibold text-slate-700">Need urgent advice?</span>
                    <a href="tel:1300919663" className="font-bold text-teal-800 underline hover:text-navy">
                      Call 1300 919 663
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown for Seniors */}
      <section className="section-py bg-surface border-y border-border">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="section-label">Tailored Elderly Support</p>
            <h2 className="text-navy text-2xl sm:text-3xl font-extrabold mt-1">
              Comprehensive In-Home Care for Perth Seniors
            </h2>
            <p className="text-body text-sm mt-3">
              Every senior’s needs are unique. We create a customised care plan coordinated with your parent&apos;s doctor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-base p-6 bg-white border border-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-subtle text-navy flex items-center justify-center mb-4">
                  <HeartPulse className="w-6 h-6 text-teal-accent" />
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">Clinical Registered Nursing</h3>
                <p className="text-xs text-body leading-relaxed mb-4">
                  Delivered exclusively by AHPRA Registered Nurses: complex wound care, catheter and stoma care, subcutaneous and intramuscular injections, chronic illness monitoring, and clinical reviews.
                </p>
              </div>
              <Link href="/registered-nurses-clinical-care-services" className="text-teal-text text-xs font-bold hover:underline flex items-center gap-1">
                Clinical Services Details <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="card-base p-6 bg-white border border-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-subtle text-navy flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-teal-accent" />
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">Medication Management & Safety</h3>
                <p className="text-xs text-body leading-relaxed mb-4">
                  Webster-pak administration, dose reminders, prescription renewals, insulin management, and liaising with community pharmacies in Harrisdale and Perth.
                </p>
              </div>
              <Link href="/medication-management" className="text-teal-text text-xs font-bold hover:underline flex items-center gap-1">
                Medication Support <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="card-base p-6 bg-white border border-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-subtle text-navy flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-teal-accent" />
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">Personal Care & Daily Support</h3>
                <p className="text-xs text-body leading-relaxed mb-4">
                  Assistance with showering, dressing, grooming, mobility and transfers, meal preparation, companion care, and gentle fall-prevention exercises.
                </p>
              </div>
              <Link href="/personal-care" className="text-teal-text text-xs font-bold hover:underline flex items-center gap-1">
                Personal Care Support <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Perth families choose — addresses the local decision mindset */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="section-label">Choosing an Aged Care Provider in Perth</p>
            <h2 className="text-navy text-2xl sm:text-3xl font-extrabold mt-1">
              Large Aged Care Agency or Local Nurse-Led Team?
            </h2>
            <p className="text-body text-sm mt-3">
              Perth families searching for aged care usually compare a few big providers with smaller local teams. Here is an honest comparison to help you decide.
            </p>
          </div>
          <div className="overflow-x-auto max-w-4xl mx-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead className="bg-surface text-navy">
                <tr>
                  <th scope="col" className="text-left p-4 font-bold">What families ask</th>
                  <th scope="col" className="text-left p-4 font-bold">Typical large agency</th>
                  <th scope="col" className="text-left p-4 font-bold text-teal-text">Care N Cure (Harrisdale)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-body">
                <tr>
                  <td className="p-4 font-semibold text-navy">Who visits Mum?</td>
                  <td className="p-4">Whoever is rostered that week</td>
                  <td className="p-4">The same dedicated Registered Nurse</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-navy">Who do I call?</td>
                  <td className="p-4">A central call centre</td>
                  <td className="p-4">Your nurse coordinator, directly</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-navy">How fast can care start?</td>
                  <td className="p-4">Often a waitlist for new clients</td>
                  <td className="p-4">Assessment within 24–48 hours</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-navy">Clinical skills</td>
                  <td className="p-4">Mostly support workers, nurses on request</td>
                  <td className="p-4">AHPRA Registered Nurses for clinical care</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-navy">Waiting for My Aged Care?</td>
                  <td className="p-4">Usually need funding first</td>
                  <td className="p-4">Start privately now, keep the same nurse later</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="max-w-4xl mx-auto mt-8 p-6 rounded-2xl bg-teal-50/60 border border-teal-200 text-sm text-body leading-relaxed">
            <h3 className="text-navy font-bold text-base mb-2">Support at Home in plain English (WA, 2026)</h3>
            <ul className="space-y-1.5 list-disc pl-5">
              <li>Home Care Packages were replaced by <strong>Support at Home</strong> on 1 November 2025.</li>
              <li>Funding is now one of <strong>eight classifications</strong>, managed as <strong>quarterly budgets</strong>.</li>
              <li><strong>Clinical care</strong> (such as registered nursing) has <strong>no participant contribution</strong>.</li>
              <li>Existing package holders moved across automatically; CHSP continues until at least July 2027.</li>
              <li>Start with <strong>My Aged Care: 1800 200 422</strong>. Waiting? We can start private visits now.</li>
            </ul>
            <Link href="/support-at-home" className="inline-flex items-center gap-1 mt-3 text-teal-text font-bold hover:underline">
              Full Support at Home guide <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Suburb Coverage Map / Focus */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-navy to-navy-light text-white">
            <div className="max-w-3xl">
              <span className="text-teal-accent font-bold text-xs uppercase tracking-wider">Local Perth Presence</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 mb-4 text-white">
                Caring for Seniors in Harrisdale & Across Greater Perth
              </h2>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Based at 15 Rockefeller Way, Harrisdale WA 6112, our nursing team regularly visits elderly clients throughout the South-East corridor (Harrisdale, Piara Waters, Southern River, Forrestdale, Canning Vale, Thornlie, Gosnells, Armadale, Kelmscott, Byford, Willetton) and the southern suburbs (Cockburn Central, Bull Creek, Melville, Baldivis), as well as Nedlands, Claremont, Fremantle, Rockingham, South Perth, and Joondalup.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/locations/harrisdale"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  Harrisdale Aged Care →
                </Link>
                <Link
                  href="/locations/canning-vale"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  Canning Vale →
                </Link>
                <Link
                  href="/locations/armadale"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  City of Armadale →
                </Link>
                <Link
                  href="/locations/gosnells"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  City of Gosnells →
                </Link>
                <Link
                  href="/locations/south-perth"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  South Perth →
                </Link>
                {[
                  ['piara-waters', 'Piara Waters'],
                  ['southern-river', 'Southern River'],
                  ['thornlie', 'Thornlie'],
                  ['kelmscott', 'Kelmscott'],
                  ['willetton', 'Willetton'],
                  ['cockburn-central', 'Cockburn Central'],
                  ['melville', 'Melville'],
                  ['baldivis', 'Baldivis'],
                ].map(([slug, name]) => (
                  <Link
                    key={slug}
                    href={`/locations/${slug}`}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                  >
                    {name} →
                  </Link>
                ))}
                <Link
                  href="/locations"
                  className="px-4 py-2 rounded-xl bg-teal-accent text-navy font-bold text-xs hover:bg-teal-300 transition-colors"
                >
                  View All Perth Suburbs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-py bg-surface border-t border-border">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-10">
            <p className="section-label">Questions & Answers</p>
            <h2 className="text-navy text-2xl sm:text-3xl font-extrabold mt-1">
              Frequently Asked Questions About Aged Care at Home
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card-base p-6 bg-white border border-border">
                <h3 className="font-bold text-navy text-base mb-2">{faq.question}</h3>
                <p className="text-body text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Speak with a Perth Registered Nurse Today"
        description="Call 1300 919 663 or send an enquiry to discuss how we can support your parent to live comfortably at home."
      />
    </>
  )
}
