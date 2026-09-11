import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema, FAQPageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { CtaUncertaintyReducer } from '@/components/sections/cta-uncertainty-reducer'
import {
  Stethoscope,
  ShieldCheck,
  HeartPulse,
  Bandage,
  Activity,
  AlertCircle,
  Building2,
  CheckCircle2,
  Phone,
} from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Community Nursing Care Perth | Registered Nurse Home Visits | Care N Cure',
  },
  description:
    'Community nursing in Perth for clinical support at home, including monitoring, wound care, medication support and post-hospital recovery. Ask about availability.',
  alternates: { canonical: 'https://carencure.com.au/community-nursing' },
  openGraph: {
    title: 'Community Nursing Care Perth | Registered Nurse Home Visits | Care N Cure',
    description:
      'Community nursing in Perth for clinical support at home, including monitoring, wound care, medication support and post-hospital recovery. Ask about availability.',
    url: 'https://carencure.com.au/community-nursing',
  },
}

const faqs = [
  {
    question: 'What does community nursing involve?',
    answer:
      'Community nursing provides qualified clinical healthcare directly in your home. This includes sterile wound dressings, urinary catheter maintenance, injection administration, vital signs tracking, and chronic illness oversight. All clinical procedures are performed by AHPRA-registered nurses.',
  },
  {
    question: 'How do you coordinate with my GP or hospital discharge team?',
    answer:
      'With your consent, our registered nurses provide clean clinical notes and handover reports directly to your GP, surgeon, or hospital discharge team (such as at Fiona Stanley, SCGH, Royal Perth, or Armadale Health Service) following visits.',
  },
  {
    question: 'Can community nursing be funded under NDIS or Home Care Packages?',
    answer:
      'Yes. Community nursing can be funded through Self-Managed and Plan-Managed NDIS plans (under Capacity Building or Core Supports) and Home Care Packages (Levels 1–4). Private fee-for-service options are also available without government waiting times.',
  },
  {
    question: 'Do I need a doctor referral for community nursing?',
    answer:
      'No doctor referral is required to initiate private clinical assessments. However, if your care requires prescription medications or specific post-surgical protocols, we will request your discharge summary or doctor orders to ensure exact compliance.',
  },
]

const scopeItems = [
  {
    service: 'Wound Care & Sterile Dressings',
    provider: 'AHPRA-Registered Nurse',
    assessmentRequired: 'Yes — baseline wound staging & tissue assessment',
    limitations: 'Aseptic cleansing and dressing. Does not perform deep surgical debridement or change surgeon care protocols without instruction.',
    escalation: 'Spreading erythema, systemic fever, or sudden deterioration escalated to treating GP or hospital emergency department.',
  },
  {
    service: 'Medication Administration & Injections',
    provider: 'AHPRA-Registered Nurse',
    assessmentRequired: 'Yes — medication reconciliation against prescriber order',
    limitations: 'Administered strictly to valid written medical practitioner orders. Prescription and dosage changes remain with prescriber.',
    escalation: 'Adverse drug reactions or medication discrepancies reported immediately to prescribing doctor or 000.',
  },
  {
    service: 'Urinary Catheter Care (IDC / SPC)',
    provider: 'AHPRA-Registered Nurse with verified catheter competencies',
    assessmentRequired: 'Yes — clinical suitability and equipment check',
    limitations: 'Catheter flushes, bag changes, routine re-catheterisation. Complex trauma or resistance requires urology specialist referral.',
    escalation: 'Hematuria, severe pain, blockage, or signs of autonomic dysreflexia trigger immediate hospital/medical escalation.',
  },
  {
    service: 'Vital Signs & Health Monitoring',
    provider: 'AHPRA-Registered Nurse',
    assessmentRequired: 'Yes — baseline parameters established during intake',
    limitations: 'Monitoring blood pressure, glucose, SpO2, heart rate. Does not provide independent diagnostic imaging or pathology tests.',
    escalation: 'Vital signs outside agreed parameters escalated to client’s GP, treating specialist, or emergency services.',
  },
  {
    service: 'Enteral (PEG) Nutrition Support',
    provider: 'Registered Nurse with verified enteral competencies',
    assessmentRequired: 'Yes — clinical dietitian / physician feeding protocol review',
    limitations: 'Flushes, formula administration, and stoma site care. Tube displacement requires emergency medical department review.',
    escalation: 'Tube blockage, aspiration signs, or peristomal skin breakdown escalated immediately to medical care team.',
  },
]

export default function CommunityNursingPage() {
  return (
    <>
      <ServicePageSchema
        serviceName="Community Nursing Care Perth | Registered Nurse Home Visits | Care N Cure"
        description="Community nursing in Perth for clinical support at home, including monitoring, wound care, medication support and post-hospital recovery. Ask about availability."
        url="/community-nursing"
        procedureType="Community Nursing Care"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Services', item: 'https://carencure.com.au/services' },
          { name: 'Community Nursing', item: 'https://carencure.com.au/community-nursing' },
        ]}
      />
      <FAQPageSchema faqs={faqs} />

      <PageHeader
        title="Community Nursing Care Perth"
        subtitle="AHPRA-registered nurses delivering clinical treatments, health assessments, and ongoing care at home."
        breadcrumbItems={[
          { name: 'Services', href: '/services' },
          { name: 'Community Nursing', href: '/community-nursing' },
        ]}
        label="Clinical Home Care"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Main Content Column */}
            <div className="lg:col-span-7 space-y-10">

              <div>
                <p className="section-label mb-2">Registered Nurse Care in the Community</p>
                <h1 className="text-navy text-3xl md:text-4xl font-bold leading-tight">
                  Community Nursing Care in Perth by AHPRA-Registered Nurses
                </h1>
                <div className="section-divider my-4" />
                <div className="bg-teal-subtle/50 p-6 rounded-2xl border border-teal-border">
                  <p className="text-navy font-semibold text-lg leading-relaxed">
                    <strong>Community nursing</strong> brings hospital-grade clinical oversight directly into your home across Perth. When an individual requires sterile wound management, regular subcutaneous injections, catheter care, or ongoing vital sign tracking, Care N Cure provides a dedicated Nurse Coordinator who visits regularly, knows your history, and liaises directly with your treating GP.
                  </p>
                </div>
              </div>

              {/* Who Community Nursing Suits */}
              <div className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">Who Community Nursing Is For</h2>
                <p className="text-body leading-relaxed">
                  Our community nursing service is designed for individuals who require professional clinical care but want to remain safe and supported in their own homes:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    'Older adults requiring regular clinical observations and health monitoring',
                    'Patients recovering at home after hospital discharge or elective surgery',
                    'Individuals managing complex chronic illnesses (diabetes, COPD, heart failure)',
                    'NDIS participants requiring clinical nursing supports under their plan',
                    'Home Care Package recipients needing subcontracted registered nurse visits',
                    'Families seeking a consistent, trusted nurse rather than rotating casual carers',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-surface p-4 rounded-xl border border-border">
                      <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                      <span className="text-body text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Scope Table */}
              <div className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">
                  Clinical Services & Practitioner-Scope Table
                </h2>
                <p className="text-body text-sm leading-relaxed">
                  Reviewed by Care N Cure’s clinical lead. The table below explains who delivers each service, assessment requirements, scope boundaries, and clinical escalation pathways:
                </p>
                <div className="overflow-x-auto border border-border rounded-xl">
                  <table className="w-full text-left text-xs sm:text-sm text-body">
                    <thead className="bg-surface text-navy font-bold border-b border-border">
                      <tr>
                        <th className="p-3">Service</th>
                        <th className="p-3">Clinician & Assessment</th>
                        <th className="p-3">Scope & Boundaries</th>
                        <th className="p-3">Escalation & Referral</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {scopeItems.map((row, idx) => (
                        <tr key={idx} className="hover:bg-teal-50/30 transition-colors">
                          <td className="p-3 font-semibold text-navy align-top">{row.service}</td>
                          <td className="p-3 align-top text-xs">
                            <span className="font-medium text-navy block">{row.provider}</span>
                            <span className="text-slate-500 text-[11px] block mt-0.5">{row.assessmentRequired}</span>
                          </td>
                          <td className="p-3 align-top text-xs leading-relaxed">{row.limitations}</td>
                          <td className="p-3 align-top text-xs text-amber-900 bg-amber-50/40 leading-relaxed">{row.escalation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Outside of Scope Notice */}
              <div className="p-5 bg-amber-50/80 border border-amber-200/80 rounded-2xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-navy font-bold text-sm">Services Outside Scope</h4>
                  <p className="text-body text-xs leading-relaxed">
                    Care N Cure does not provide emergency medical services, diagnostic pathology without doctor orders, surgical procedures, or changes to medication regimens without prescriber authorisation. In urgent medical situations, immediately call <strong>000</strong>.
                  </p>
                </div>
              </div>

              {/* FAQs */}
              <div className="space-y-6 pt-4">
                <h2 className="text-navy text-2xl font-bold">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-surface p-6 rounded-xl border border-border space-y-2">
                      <h3 className="text-navy font-bold text-base sm:text-lg">{faq.question}</h3>
                      <p className="text-body text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm space-y-6">
                <div className="space-y-2">
                  <span className="px-3 py-1 bg-teal-subtle text-teal-text text-xs font-bold rounded-full uppercase tracking-wider">
                    Community Intake
                  </span>
                  <h3 className="text-navy text-xl font-bold">Enquire About Community Nursing</h3>
                  <p className="text-body text-sm">
                    Connect with a Registered Nurse coordinator to discuss your clinical needs across Perth.
                  </p>
                </div>
                <ContactForm defaultService="Community Nursing Care" />
                <div className="pt-4 border-t border-border space-y-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-accent" />
                    <span>AHPRA-Registered Nurses Only</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-teal-accent" />
                    <span>Call 1300 919 663 for advice</span>
                  </div>
                </div>
              </div>

              <CtaUncertaintyReducer />
            </div>

          </div>
        </div>
      </section>

      <CTASection
        title="Need community nursing support at home?"
        description="Speak with our registered nursing intake team today. We coordinate in-home clinical assessments within 24–48 hours across metropolitan Perth."
        secondaryLink={{ text: 'Book a free nurse consultation', href: '/contact' }}
      />
    </>
  )
}
