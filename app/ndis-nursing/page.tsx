import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { ShieldCheck, HeartPulse, CheckCircle2, UserCheck, Stethoscope, FileText, Phone, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'NDIS Nursing Care Perth | Self & Plan Managed In-Home Care | Care N Cure',
  },
  description: 'In-home NDIS nursing care in Perth for Self-Managed & Plan-Managed participants. AHPRA qualified RNs for wound care, catheter care, enteral feeding & medication administration.',
  alternates: { canonical: 'https://carencure.com.au/ndis-nursing' },
}

const faqs = [
  {
    question: "Can I use my NDIS funding for Care N Cure nursing care in Perth?",
    answer: "Yes! If your NDIS plan is Self-Managed or Plan-Managed, you can use your NDIS budget (under Capacity Building or Core Supports) for registered nurse clinical care with Care N Cure. We issue itemized invoices directly to your plan manager or to you for easy portal reimbursement.",
  },
  {
    question: "Do I need to be with an NDIS registered provider to hire a private nurse?",
    answer: "No. If you are Self-Managed or Plan-Managed, NDIS rules allow you the flexibility to choose qualified unregistered providers. Every nurse at Care N Cure is individually registered with AHPRA (Australian Health Practitioner Regulation Agency) and highly experienced in clinical community nursing.",
  },
  {
    question: "What NDIS clinical nursing services does Care N Cure provide?",
    answer: "Our AHPRA-registered nurses provide sterile wound care, urinary catheter management (SPC and indwelling), enteral (PEG) feeding management, tracheostomy care, subcutaneous injections, complex bowel care, diabetes management, and medication administration.",
  },
  {
    question: "How does billing work for Plan-Managed and Self-Managed participants?",
    answer: "For Plan-Managed participants, we send itemized invoices directly to your NDIS Plan Manager for prompt payment under NDIS Price Guide line items. For Self-Managed participants, we provide tax invoices that you can upload to your NDIS myplace portal for reimbursement.",
  },
  {
    question: "How quickly can NDIS nursing care start in Perth?",
    answer: "Once a service agreement or care plan is finalized, we can initiate clinical assessments and home visits within 24 to 48 hours across all Perth metropolitan suburbs.",
  },
]

export default function NdisNursingPage() {
  return (
    <>
      <ServicePageSchema
        serviceName="NDIS Nursing Care Perth | Self & Plan Managed In-Home Care | Care N Cure"
        description="In-home NDIS nursing care in Perth for Self-Managed & Plan-Managed participants. AHPRA qualified RNs for complex clinical care, wound management, catheter care & medication administration."
        url="/ndis-nursing"
        procedureType="NDIS Community Nursing Care"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Services', item: 'https://carencure.com.au/services' },
          { name: 'NDIS Nursing Care', item: 'https://carencure.com.au/ndis-nursing' },
        ]}
      />

      <PageHeader
        title="NDIS Nursing Care in Perth (Self-Managed & Plan-Managed)"
        subtitle="Specialized in-home clinical nursing for NDIS participants, delivered by dedicated AHPRA-registered nurses."
        breadcrumbItems={[
          { name: 'Services', href: '/services' },
          { name: 'NDIS Nursing Care', href: '/ndis-nursing' },
        ]}
        label="Self-Managed & Plan-Managed NDIS Care"
      />

      {/* Answer-First Section */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="section-label mb-2">NDIS Clinical Support</p>
                <h2 className="text-navy text-3xl md:text-4xl font-bold leading-tight">
                  Qualified In-Home NDIS Nursing Care Across Metropolitan Perth
                </h2>
                <div className="section-divider my-4" />
                <div className="bg-teal-subtle/40 p-6 rounded-2xl border border-teal-border">
                  <p className="text-navy font-semibold text-lg leading-relaxed">
                    Care N Cure provides specialized <strong>NDIS nursing care in Perth</strong> for <strong>Self-Managed</strong> and <strong>Plan-Managed NDIS participants</strong>. Our team of qualified AHPRA-registered nurses delivers sterile wound dressing, catheter management, medication administration, PEG feeding, and bowel care directly in your home. You get the flexibility to choose your care provider alongside our signature One Dedicated Nurse model for maximum continuity and clinical safety.
                  </p>
                </div>
              </div>

              {/* NDIS Plan Flexibility Box */}
              <div className="bg-surface p-6 rounded-2xl border border-border space-y-3">
                <div className="flex items-center gap-2 text-navy font-bold text-lg">
                  <ShieldCheck className="w-6 h-6 text-teal-accent" />
                  <span>How NDIS Funding Works With Care N Cure</span>
                </div>
                <p className="text-body text-sm leading-relaxed">
                  Under NDIS guidelines, participants with <strong>Self-Managed</strong> or <strong>Plan-Managed</strong> funding have full choice and control to engage independent nursing services. While Care N Cure is an independent provider, every nurse on our team holds active <strong>AHPRA registration</strong> and extensive hospital or community nursing experience.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-navy">
                  <li className="flex items-center gap-2 bg-white p-3 rounded-xl border border-border">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>Plan-Managed: Direct billing to your plan manager</span>
                  </li>
                  <li className="flex items-center gap-2 bg-white p-3 rounded-xl border border-border">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>Self-Managed: Simple portal invoice reimbursement</span>
                  </li>
                </ul>
              </div>

              {/* What We Cover */}
              <div className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">Clinical Nursing Supports Covered</h2>
                <p className="text-body leading-relaxed">
                  When health needs exceed the scope of general support workers, qualified clinical nursing intervention is necessary. Under NDIS Disability-Related Health Supports, our AHPRA-Registered Nurses perform essential medical procedures directly in your home, including:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-surface p-5 rounded-xl border border-border space-y-2">
                    <div className="flex items-center gap-2 text-teal-accent font-bold">
                      <Stethoscope className="w-5 h-5" />
                      <span>Complex Wound Care</span>
                    </div>
                    <p className="text-body text-sm">
                      Sterile dressing changes, pressure injury management, surgical wound monitoring, and skin integrity assessments. See our <Link href="/wound-care" className="text-teal-text hover:underline font-semibold">wound care services</Link>.
                    </p>
                  </div>

                  <div className="bg-surface p-5 rounded-xl border border-border space-y-2">
                    <div className="flex items-center gap-2 text-teal-accent font-bold">
                      <HeartPulse className="w-5 h-5" />
                      <span>Catheter & Continence Care</span>
                    </div>
                    <p className="text-body text-sm">
                      Suprapubic (SPC) and indwelling catheter maintenance, flushing, stoma hygiene, and continence assessments.
                    </p>
                  </div>

                  <div className="bg-surface p-5 rounded-xl border border-border space-y-2">
                    <div className="flex items-center gap-2 text-teal-accent font-bold">
                      <ShieldCheck className="w-5 h-5" />
                      <span>Medication & Injections</span>
                    </div>
                    <p className="text-body text-sm">
                      Administration of complex pharmaceuticals, subcutaneous injections, dose administration aids (Webster-pak), and <Link href="/medication-management" className="text-teal-text hover:underline font-semibold">medication supervision</Link>.
                    </p>
                  </div>

                  <div className="bg-surface p-5 rounded-xl border border-border space-y-2">
                    <div className="flex items-center gap-2 text-teal-accent font-bold">
                      <UserCheck className="w-5 h-5" />
                      <span>PEG & Enteral Nutrition</span>
                    </div>
                    <p className="text-body text-sm">
                      Percutaneous Endoscopic Gastrostomy (PEG) tube flushes, feed administration, site care, and stoma hygiene.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dedicated Nurse Model Section */}
              <div className="space-y-4 pt-4">
                <h2 className="text-navy text-2xl font-bold">The Dedicated Nurse Advantage for NDIS Participants</h2>
                <p className="text-body leading-relaxed">
                  Many agency providers assign whichever casual worker or nurse is available on a given day. For NDIS participants with complex medical needs, spinal injuries, or sensory sensitivities, unfamiliar staff can cause anxiety and increase clinical risk.
                </p>
                <p className="text-body leading-relaxed">
                  Care N Cure guarantees the <strong>One Dedicated Nurse model</strong>. The same Registered Nurse Coordinator conducts your clinical assessment, designs your care plan, and visits you on every scheduled appointment. Explore our <Link href="/your-dedicated-nurse" className="text-teal-text hover:underline font-semibold">dedicated nurse model</Link> to see how care continuity improves outcomes.
                </p>
              </div>

              {/* Service Areas */}
              <div className="space-y-4 pt-4">
                <h2 className="text-navy text-2xl font-bold">NDIS Nursing Service Areas in Perth</h2>
                <p className="text-body leading-relaxed">
                  Our Registered Nurses provide in-home NDIS clinical visits across all Perth regions, including the Western Suburbs, Northern Perth, Eastern Corridor, and Southern Suburbs. Learn more about our localized care in <Link href="/locations/joondalup" className="text-teal-text hover:underline font-semibold">Joondalup</Link>, <Link href="/locations/canning-vale" className="text-teal-text hover:underline font-semibold">Canning Vale</Link>, <Link href="/locations/midland" className="text-teal-text hover:underline font-semibold">Midland</Link>, and <Link href="/locations/armadale" className="text-teal-text hover:underline font-semibold">Armadale</Link>.
                </p>
              </div>

              {/* FAQs */}
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

            {/* Sidebar Contact Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-surface p-6 rounded-2xl border border-border shadow-sm space-y-6">
                <div className="space-y-2">
                  <span className="px-3 py-1 bg-teal-subtle text-teal-text text-xs font-bold rounded-full uppercase tracking-wider">Self & Plan Managed</span>
                  <h3 className="text-navy text-xl font-bold">Request NDIS Nursing Care</h3>
                  <p className="text-body text-sm">
                    Speak with an AHPRA Registered Nurse about your NDIS care requirements. We respond within 2 hours during business hours.
                  </p>
                </div>
                <ContactForm defaultService="NDIS Nursing Care" />
                <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-teal-accent" /> AHPRA Qualified RNs</span>
                  <span className="flex items-center gap-1"><Phone className="w-4 h-4 text-teal-accent" /> 1300 919 663</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
