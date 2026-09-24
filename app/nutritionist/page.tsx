import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema, FAQPageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { Salad, CheckCircle, HeartPulse, ShieldCheck, ArrowRight, Scale, Apple } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Home Nutritionist Perth | In-Home Dietitian & Nutrition Support | Care N Cure',
  },
  description:
    'Accredited nutritionists and dietitians visiting your home across Perth. NDIS, Home Care Package & aged care nutrition support. Meal planning, weight management & chronic disease. Call 1300 919 663.',
  keywords: [
    'home nutritionist perth',
    'dietitian home visit perth',
    'in home nutritionist perth',
    'mobile dietitian perth',
    'aged care nutritionist perth',
    'ndis nutritionist perth',
    'nutritionist home visit wa',
    'dietitian home visit wa',
    'home dietitian perth',
    'nutrition support at home perth',
    'aged care dietitian perth',
  ],
  alternates: { canonical: 'https://carencure.com.au/nutritionist' },
}

const faqs = [
  {
    question: 'Can a nutritionist or dietitian visit my home in Perth?',
    answer:
      'Yes. Care N Cure coordinates Accredited Practising Dietitians (APDs) who conduct home visits across the Perth metropolitan area. Whether you or a family member has a complex medical condition, aged care nutritional needs, or NDIS dietary goals, we can arrange a qualified nutritionist to come to you.',
  },
  {
    question: 'What is the difference between a nutritionist and a dietitian?',
    answer:
      'An Accredited Practising Dietitian (APD) is a university-trained health professional regulated by Dietitians Australia who can provide medical nutrition therapy for complex health conditions. A nutritionist provides general dietary advice and wellness planning. For clients with medical conditions like diabetes, kidney disease, or malnutrition, an APD is recommended.',
  },
  {
    question: 'Is home nutrition support covered by NDIS or Home Care Packages?',
    answer:
      'Yes. Dietitian and nutrition services are fundable under NDIS (Capacity Building – Improved Daily Living or Improved Health and Wellbeing) and Home Care Packages (HCP Levels 1–4). The Support at Home program also includes allied health nutrition services. Private health extras may also provide rebates for dietitian visits.',
  },
  {
    question: 'What conditions does a home dietitian help with?',
    answer:
      'Our home dietitians support: Type 2 diabetes and pre-diabetes meal management, chronic kidney disease renal diets, malnutrition and unintentional weight loss in elderly clients, dysphagia (swallowing difficulties) and texture-modified diets, cardiovascular disease and cholesterol management, and NDIS nutrition and growth goals.',
  },
  {
    question: 'How is nutrition coordinated with the nursing team?',
    answer:
      'This is a key advantage of Care N Cure. Your home dietitian works in direct communication with your assigned Registered Nurse Coordinator. This means nutritional changes are tracked clinically — for example, if your nurse notes weight loss or poor appetite during a visit, this is immediately communicated to your dietitian for plan adjustment.',
  },
]

export default function Nutritionist() {
  return (
    <>
      <ServicePageSchema
        serviceName="Home Nutritionist Perth | In-Home Dietitian & Nutrition Support"
        description="Accredited nutritionists and dietitians visiting your home across Perth. NDIS, Home Care Package & aged care nutrition support."
        url="/nutritionist"
        procedureType="Nutrition Therapy"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Services', item: 'https://carencure.com.au/services' },
          { name: 'Nutritionist', item: 'https://carencure.com.au/nutritionist' },
        ]}
      />

      <PageHeader
        title="Home Nutritionist & Dietitian in Perth"
        subtitle="Accredited Practising Dietitians and nutritionists providing in-home nutrition consultations, meal planning, and chronic disease dietary management across Perth."
        breadcrumbItems={[
          { name: 'Services', href: '/#services' },
          { name: 'Nutritionist at Home', href: '/nutritionist' },
        ]}
        label="Allied Health at Home"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8">

              <div>
                <p className="section-label mb-2">Mobile Allied Health</p>
                <h2 className="text-navy text-3xl font-bold">In-Home Nutritionist & Dietitian Services in Perth WA</h2>
                <div className="section-divider" />
                <p className="text-body text-lg leading-relaxed mt-4">
                  Poor nutrition is one of the leading causes of hospitalisation and slow recovery in elderly Australians. Care N Cure coordinates <strong>Accredited Practising Dietitians (APDs)</strong> and nutritionists who visit your home across Perth, providing personalised dietary support for aged care, NDIS, and private clients.
                </p>
              </div>

              {/* CTA box */}
              <div className="bg-teal-subtle/40 p-5 rounded-xl border border-teal-border">
                <p className="text-navy font-semibold text-sm leading-relaxed">
                  <strong>Need a nutritionist or dietitian at home in Perth?</strong> Call <a href="tel:1300919663" className="text-teal-text font-bold hover:underline">1300 919 663</a>. We coordinate APD home visits within 48–72 hours. NDIS, Home Care Package & private welcome.
                </p>
              </div>

              {/* Conditions */}
              <div className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">Nutrition Conditions We Support at Home</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Scale, title: 'Malnutrition & Weight Loss', desc: 'Assessment and intervention for unintentional weight loss, frailty, and cachexia in elderly clients.' },
                    { icon: HeartPulse, title: 'Diabetes Management', desc: 'Carbohydrate-controlled meal plans, blood sugar monitoring guidance, and insulin-appropriate diets.' },
                    { icon: ShieldCheck, title: 'Renal (Kidney) Diets', desc: 'Phosphorus, potassium, and sodium management for CKD and dialysis clients.' },
                    { icon: Apple, title: 'Dysphagia & Texture Modified Diets', desc: 'IDDSI-compliant texture-modified meal planning for clients with swallowing difficulties.' },
                    { icon: HeartPulse, title: 'Cardiovascular Disease', desc: 'Heart-healthy diets, cholesterol management, and sodium reduction planning.' },
                    { icon: Salad, title: 'NDIS Nutrition Goals', desc: 'Dietary assessment and meal planning tailored to NDIS participant capacity building goals.' },
                  ].map((item, i) => (
                    <div key={i} className="card-base p-5 flex gap-4">
                      <item.icon className="w-7 h-7 text-teal-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-navy font-bold mb-1 text-sm">{item.title}</h3>
                        <p className="text-body text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Funding Options */}
              <div className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">Funding for Home Dietitian Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="p-4 bg-surface rounded-xl border border-border space-y-1">
                    <h3 className="font-bold text-navy">NDIS</h3>
                    <p className="text-xs text-body">Improved Daily Living or Improved Health & Wellbeing support categories.</p>
                  </div>
                  <div className="p-4 bg-surface rounded-xl border border-border space-y-1">
                    <h3 className="font-bold text-navy">Home Care Packages</h3>
                    <p className="text-xs text-body">Allied health dietitian support under HCP Levels 1–4 and Support at Home.</p>
                  </div>
                  <div className="p-4 bg-surface rounded-xl border border-border space-y-1">
                    <h3 className="font-bold text-navy">Private / Health Fund</h3>
                    <p className="text-xs text-body">Self-funded and private health extras rebates for registered dietitian visits.</p>
                  </div>
                </div>
              </div>

              {/* Integrated care box */}
              <div className="bg-surface p-6 rounded-2xl border border-border space-y-3">
                <h2 className="text-navy text-xl font-bold">Integrated: Nutrition + Nursing Care</h2>
                <p className="text-body text-sm leading-relaxed">
                  A unique advantage of Care N Cure is that your dietitian works alongside your assigned <strong>Registered Nurse Coordinator</strong>. Weight loss, appetite changes, hydration status, and swallowing difficulties observed by your nurse are immediately communicated to your dietitian for plan adjustments — ensuring your nutrition care is clinically integrated, not isolated.
                </p>
                <ul className="space-y-2 text-sm text-body">
                  {[
                    'Nurse observes appetite/weight change → dietitian notified same visit day.',
                    'Dietitian changes meal texture → nurse ensures correct texture at every visit.',
                    'Combined clinical notes shared with your GP with client consent.',
                  ].map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Services */}
              <div className="space-y-3">
                <h2 className="text-navy text-xl font-bold">Related Services</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: 'Aged Care In-Home Support', href: '/aged-care' },
                    { label: 'Home Physiotherapy', href: '/physiotherapy' },
                    { label: 'NDIS Nursing Care', href: '/ndis-nursing' },
                    { label: 'Companion Care', href: '/companion-care' },
                    { label: 'Home Care Packages', href: '/homecare-packages' },
                  ].map((s, i) => (
                    <Link key={i} href={s.href} className="flex items-center gap-1 text-xs font-semibold text-teal-text border border-teal-border bg-teal-subtle/30 px-3 py-2 rounded-lg hover:bg-teal-subtle transition-colors">
                      <ArrowRight className="w-3 h-3" />
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <ContactForm
                  title="Book a Home Nutritionist"
                  subtitle="Tell us about your dietary support needs. A coordinator will contact you to arrange a qualified APD home visit."
                  defaultService="Home Nutritionist"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-surface border-t border-border">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-navy font-bold text-2xl">Home Nutritionist & Dietitian FAQs</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="card-base p-6 divide-y divide-border">
            {faqs.map((faq, i) => (
              <div key={i} className="py-4 first:pt-0 last:pb-0">
                <h3 className="text-navy font-bold mb-2 text-sm">{faq.question}</h3>
                <p className="text-body text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Book a Home Nutritionist or Dietitian in Perth"
        description="Accredited Practising Dietitians visiting your home across Perth metro. NDIS, Home Care Package & private clients welcome. Call 1300 919 663 to arrange your first visit."
        secondaryLink={{ text: 'Enquire Online', href: '/contact' }}
      />
    </>
  )
}
