import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { CheckCircle2, ShieldCheck, Phone, HelpCircle, DollarSign, Award, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Private Nursing Rates & Care Pricing Perth | Care N Cure',
  },
  description: 'Transparent private nursing rates in Perth. Fee structure for registered nurse home visits, NDIS price guide alignment, Home Care Packages, and private health rebates.',
  alternates: { canonical: 'https://carencure.com.au/pricing' },
}

const faqs = [
  {
    question: "How much does a private nurse visit cost in Perth?",
    answer: "Private Registered Nurse clinical visits typically range from $110 to $160 per hour for standard weekday care, depending on clinical complexity (such as sterile wound care, catheter changes, or intravenous management). After-hours, weekend, and public holiday rates apply.",
  },
  {
    question: "Can I use NDIS or Home Care Package (HCP) funding?",
    answer: "Yes. Care N Cure services are fully compatible with NDIS funding (Capacity Building and Core Supports) and Home Care Packages (Levels 1 through 4). We work directly with plan managers, self-managed participants, and HCP providers.",
  },
  {
    question: "Is there a minimum commitment or lock-in contract?",
    answer: "No. You can book single short-term clinical visits (e.g. post-hospital discharge wound dressing) or ongoing weekly nursing appointments without long-term contracts.",
  },
  {
    question: "Can I claim private nursing on private health insurance?",
    answer: "Depending on your private health insurance policy and level of extras cover, nursing services prescribed by a doctor or hospital specialist may be eligible for partial or full rebates. We recommend checking with your insurer.",
  },
]

export default function PricingPage() {
  return (
    <>
      <ServicePageSchema
        serviceName="Private Nursing Rates & Care Pricing Perth | Care N Cure"
        description="Transparent private nursing rates in Perth. Fee structure for registered nurse home visits, NDIS price guide alignment, Home Care Packages, and private health rebates."
        url="/pricing"
        procedureType="Clinical Nursing Pricing & Rates"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Pricing', item: 'https://carencure.com.au/pricing' },
        ]}
      />

      <PageHeader
        title="Transparent Private Nursing Rates & Pricing"
        subtitle="Clear, predictable fee structures for in-home registered nursing care across Perth, WA."
        breadcrumbItems={[
          { name: 'Pricing', href: '/pricing' },
        ]}
        label="Fees & Funding Compatibility"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="section-label mb-2">Clear & Honest Pricing</p>
                <h1 className="text-navy text-3xl md:text-4xl font-bold leading-tight">
                  In-Home Registered Nurse Rates & Funding Options in Perth
                </h1>
                <div className="section-divider my-4" />
                <div className="bg-teal-subtle/40 p-6 rounded-2xl border border-teal-border space-y-3">
                  <p className="text-navy font-semibold text-lg leading-relaxed">
                    At Care N Cure, we believe families deserve complete clarity when hiring a <strong>private nurse in Perth</strong>. Our clinical fees reflect high-level care delivered exclusively by AHPRA-Registered Nurses—with no hidden administration surcharges, no lock-in contracts, and full compatibility with NDIS, Home Care Packages, and self-funded private care.
                  </p>
                  <div className="pt-2 border-t border-teal-border/60 flex items-center gap-2 text-teal-accent font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>50km Service Radius — 0 Transportation / Travel Charges for Perth Metro Clients!</span>
                  </div>
                </div>
              </div>

              {/* Pricing Cards Tiers */}
              <div className="space-y-6">
                <h2 className="text-navy text-2xl font-bold">Standard Fee Structure</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  <div className="bg-surface p-6 rounded-2xl border border-border space-y-4 shadow-sm">
                    <div className="flex items-center gap-2 text-teal-accent font-bold text-sm uppercase tracking-wide">
                      <Clock className="w-4 h-4" /> Weekday Clinical Visit
                    </div>
                    <div className="text-navy">
                      <span className="text-4xl font-extrabold">$110 – $160</span>
                      <span className="text-slate-500 text-sm"> / hour</span>
                    </div>
                    <p className="text-body text-xs leading-relaxed">
                      Standard daytime visits (8am – 6pm, Mon – Fri) for <Link href="/wound-care" className="text-teal-text font-semibold hover:underline">sterile wound management</Link>, medication administration, catheter changes, and clinical health checks.
                    </p>
                    <ul className="text-xs text-slate-600 space-y-2 border-t border-border pt-3">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-accent" /> Qualified AHPRA Registered Nurse</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-accent" /> Dedicated Nurse Coordinator</li>
                    </ul>
                  </div>

                  <div className="bg-surface p-6 rounded-2xl border border-border space-y-4 shadow-sm">
                    <div className="flex items-center gap-2 text-teal-accent font-bold text-sm uppercase tracking-wide">
                      <Clock className="w-4 h-4" /> Weekend & After-Hours
                    </div>
                    <div className="text-navy">
                      <span className="text-4xl font-extrabold">$160 – $220</span>
                      <span className="text-slate-500 text-sm"> / hour</span>
                    </div>
                    <p className="text-body text-xs leading-relaxed">
                      Evening care, weekend appointments, and urgent hospital discharge care. Tailored for families requiring rapid clinical intervention outside normal hours.
                    </p>
                    <ul className="text-xs text-slate-600 space-y-2 border-t border-border pt-3">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-accent" /> Priority intake assessment (24–48 hrs)</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-accent" /> Direct Nurse Coordinator communication</li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* Funding Options */}
              <div className="space-y-4 pt-4">
                <h2 className="text-navy text-2xl font-bold">Funding Categories & Payment Methods</h2>
                <div className="space-y-3">
                  <div className="p-4 bg-surface rounded-xl border border-border">
                    <h3 className="text-navy font-bold text-base">1. Self-Funded Private Care</h3>
                    <p className="text-body text-sm mt-1">Direct fee-for-service with itemized invoices. No government queue required; visits scheduled subject to clinician availability.</p>
                  </div>
                  <div className="p-4 bg-surface rounded-xl border border-border">
                    <h3 className="text-navy font-bold text-base">2. NDIS Participant Funding</h3>
                    <p className="text-body text-sm mt-1">Direct billing under NDIS Community Nursing price guide line items. Compatible with self-managed and plan-managed participants. Explore our <Link href="/ndis-nursing" className="text-teal-text font-semibold hover:underline">NDIS Nursing Care</Link>.</p>
                  </div>
                  <div className="p-4 bg-surface rounded-xl border border-border">
                    <h3 className="text-navy font-bold text-base">3. Home Care Packages (Level 1–4)</h3>
                    <p className="text-body text-sm mt-1">We sub-contract with your HCP provider to supply clinical nursing visits directly under your allocated government package.</p>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="space-y-6 pt-6">
                <h2 className="text-navy text-2xl font-bold">Frequently Asked Questions About Rates</h2>
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

            {/* Sidebar Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-surface p-6 rounded-2xl border border-border shadow-sm space-y-6">
                <div className="space-y-2">
                  <h3 className="text-navy text-xl font-bold">Request a Custom Care Quote</h3>
                  <p className="text-body text-sm">
                    Contact us for a detailed fee assessment tailored to your clinical requirements.
                  </p>
                </div>
                <ContactForm defaultService="Pricing Quote" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
