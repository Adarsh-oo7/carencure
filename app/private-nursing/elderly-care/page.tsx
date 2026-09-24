import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema, FAQPageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import {
  Heart,
  ShieldCheck,
  HeartPulse,
  UserCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Stethoscope,
  Sparkles,
  Award,
  Navigation,
} from 'lucide-react'
import { CtaUncertaintyReducer } from '@/components/sections/cta-uncertainty-reducer'

export const metadata: Metadata = {
  title: {
    absolute: 'Private In-Home Care for the Elderly Perth | Aged Care Nursing | Care N Cure',
  },
  description:
    'Dedicated private in-home care for the elderly across Perth. AHPRA-registered nurse coordinators providing wound care, medication safety, chronic disease support & HCP funding compatibility. Call 1300 919 663.',
  keywords: [
    'private in home care for the elderly',
    'nursing care at home service',
    'private nurse home',
    'home nursing care services',
    'private nurses for home care',
    'nurses for home care',
    'private nurses for elderly perth',
    'in home aged care perth',
    'home care packages perth',
    'support at home perth',
    'elderly care nursing perth',
  ],
  alternates: { canonical: 'https://carencure.com.au/private-nursing/elderly-care' },
  openGraph: {
    title: 'Private In-Home Care for the Elderly Perth | Aged Care Nursing | Care N Cure',
    description:
      'Compassionate, registered-nurse-led elderly care at home in Perth. Dedicated nurse coordinators, medication management, wound care, and seamless Home Care Package funding.',
    url: 'https://carencure.com.au/private-nursing/elderly-care',
  },
}

const faqs = [
  {
    question: 'How do I hire a private nurse for an elderly parent in Perth?',
    answer:
      'Hiring a private nurse for your elderly parent is simple with Care N Cure. Call our nursing intake line on 1300 919 663 or message us on WhatsApp (+61 481 748 516). You will speak directly with an AHPRA Registered Nurse coordinator—not a call centre operator. We conduct a thorough clinical intake, review your parent\'s medical history, liaise with their GP, and organize an in-home assessment within 24 to 48 hours.',
  },
  {
    question: 'Can private nursing care be covered by Home Care Packages (HCP) or Support at Home?',
    answer:
      'Yes. Most elderly clients fund their nursing visits through a Home Care Package (HCP Levels 1 to 4) or the Australian Support at Home program. We work seamlessly with self-managed and plan-managed package providers (including Trilogy Care) with zero lock-in contracts. If you are waiting for an ACAT assessment or government package assignment, you can also fund private nursing visits on an affordable fee-for-service basis.',
  },
  {
    question: 'What is the difference between a support worker and a private registered nurse for elderly care?',
    answer:
      'A support worker provides essential domestic assistance (cooking, cleaning, companionship), but cannot legally perform clinical treatments or make clinical diagnostic assessments. An AHPRA-Registered Nurse holds a university degree and is qualified to administer prescription medications, manage sterile wound dressings, monitor vital signs, detect early clinical deterioration (preventing hospital admissions), and coordinate directly with your parent\'s doctor.',
  },
  {
    question: 'What is the benefit of having One Dedicated Nurse Coordinator for an elderly parent?',
    answer:
      'Traditional aged care agencies rotate casual carers, requiring elderly individuals and their families to repeat their medical history at every visit. At Care N Cure, your parent is assigned One Dedicated Nurse Coordinator. This single nurse knows your parent\'s baseline health, notices subtle changes early, coordinates medications, and provides direct, transparent updates to family members after every visit.',
  },
  {
    question: 'Which Perth suburbs do your nurses visit, and are there travel charges?',
    answer:
      'We service the entire Perth metropolitan area within a 50km radius with zero transportation or travel surcharges for clients. Our key communities include Harrisdale (our registered headquarters), Armadale, Byford, Canning Vale, Piara Waters, Gosnells, South Perth, Nedlands, Subiaco, Applecross, Fremantle, and Joondalup.',
  },
  {
    question: 'Can private nurses help with hospital discharge and recovery at home for seniors?',
    answer:
      'Yes. Post-hospital transitions are critical for elderly patients. We coordinate handovers directly with discharging hospital wards across SCGH, Fiona Stanley Hospital, SJOG, and Armadale Health Service to arrange sterile wound care, medication reconciliation, and mobility support immediately upon arriving home.',
  },
]

export default function ElderlyPrivateNursing() {
  return (
    <>
      <ServicePageSchema
        serviceName="Private In-Home Care for the Elderly Perth | Aged Care Nursing | Care N Cure"
        description="Registered nursing support for elderly parents in Perth, including medication safety, wound care, chronic-condition monitoring and recovery at home."
        url="/private-nursing/elderly-care"
        procedureType="Elderly In-Home Clinical Nursing & Aged Care"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Services', item: 'https://carencure.com.au/services' },
          { name: 'Private Nursing', item: 'https://carencure.com.au/private-nursing' },
          { name: 'Elderly Care', item: 'https://carencure.com.au/private-nursing/elderly-care' },
        ]}
      />
      <FAQPageSchema faqs={faqs} />

      <PageHeader
        title="Private In-Home Care for the Elderly in Perth"
        subtitle="Dedicated Registered Nurse coordinators providing clinical care, medication safety, and health monitoring so your loved ones can age safely with dignity at home."
        breadcrumbItems={[
          { name: 'Services', href: '/services' },
          { name: 'Private Nursing', href: '/private-nursing' },
          { name: 'Elderly Care', href: '/private-nursing/elderly-care' },
        ]}
        label="Elderly In-Home Nursing & Aged Care"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Introduction & Value Proposition */}
              <div>
                <p className="section-label mb-2">Dedicated Registered Nursing</p>
                <h2 className="text-navy text-3xl md:text-4xl font-bold leading-tight">
                  Private In-Home Nursing Care for Elderly Parents &amp; Seniors in Perth
                </h2>
                <div className="section-divider my-4" />
                <div className="bg-teal-subtle/40 p-6 rounded-2xl border border-teal-border space-y-4">
                  <p className="text-navy font-semibold text-lg leading-relaxed">
                    When an aging parent or loved one begins to experience declining mobility, complex medication regimens, or fragile health, families often face an overwhelming dilemma: residential aged care or struggling alone at home.
                  </p>
                  <p className="text-body text-base leading-relaxed">
                    <strong>Care N Cure delivers the safe, dignified alternative.</strong> Through our specialized <strong>private in-home care for the elderly</strong>, your parent is assigned a dedicated AHPRA-Registered Nurse Coordinator who delivers qualified clinical oversight, coordinates with their GP, and keeps your family informed—right in the familiar comfort of their Perth home.
                  </p>
                  <div className="pt-2 border-t border-teal-border/60 flex items-center gap-2 text-teal-accent font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Intake assessments arranged within 24–48 hours · 0 travel fees within 50km radius</span>
                  </div>
                </div>
              </div>

              {/* Direct Reach Out Action Bar */}
              <div className="bg-surface p-6 rounded-2xl border border-border space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-navy text-xl font-bold flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-teal-accent" />
                    Need to Arrange Care for an Aging Parent?
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-1 bg-teal-subtle text-teal-accent rounded-full">
                    Fast 24-48h Assessment
                  </span>
                </div>
                <p className="text-body text-sm leading-relaxed">
                  Speak directly with an AHPRA Registered Nurse coordinator today to discuss your parent&apos;s clinical needs, Home Care Package compatibility, or urgent post-hospital discharge support.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href="tel:1300919663"
                    className="p-3.5 rounded-xl bg-teal-accent text-navy font-bold flex items-center justify-center gap-2 shadow-sm hover:opacity-90 transition-opacity text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call 1300 919 663</span>
                  </a>
                  <a
                    href="https://wa.me/61481748516?text=Hi%20Care%20N%20Cure%2C%20I%20would%20like%20to%20enquire%20about%20in-home%20nursing%20care%20for%20an%20elderly%20family%20member."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-emerald-100 transition-colors text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Nursing Team</span>
                  </a>
                </div>
              </div>

              {/* Comparison: Care N Cure vs Traditional Agencies */}
              <div className="space-y-4">
                <h3 className="text-navy text-2xl font-bold">Why Families Choose Care N Cure Over Traditional Agencies</h3>
                <p className="text-body text-sm leading-relaxed">
                  Most aged care providers operate like roster agencies, sending different casual carers to your parent&apos;s home each week. We do the opposite:
                </p>
                
                <div className="overflow-x-auto rounded-2xl border border-border">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="p-4 font-bold">Care Factor</th>
                        <th className="p-4 font-bold text-teal-accent">Care N Cure Model</th>
                        <th className="p-4 font-bold text-slate-300">Typical Aged Care Agency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-white">
                      <tr>
                        <td className="p-4 font-semibold text-navy">Caregiver Continuity</td>
                        <td className="p-4 text-navy bg-teal-50/40 font-medium">One Dedicated Nurse Coordinator who knows your parent</td>
                        <td className="p-4 text-slate-600">Rotating casual workers; repeating medical stories</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-navy">Clinical Qualifications</td>
                        <td className="p-4 text-navy bg-teal-50/40 font-medium">100% University-Trained AHPRA Registered Nurses</td>
                        <td className="p-4 text-slate-600">Support workers without clinical diagnostic training</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-navy">Response &amp; Intake</td>
                        <td className="p-4 text-navy bg-teal-50/40 font-medium">In-home clinical assessment within 24–48 hours</td>
                        <td className="p-4 text-slate-600">Weeks of bureaucratic waiting and onboarding delays</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-navy">Doctor &amp; Hospital Liaison</td>
                        <td className="p-4 text-navy bg-teal-50/40 font-medium">Direct GP communication and post-discharge handovers</td>
                        <td className="p-4 text-slate-600">Families left to manage medical coordination alone</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-navy">Travel &amp; Admin Fees</td>
                        <td className="p-4 text-navy bg-teal-50/40 font-medium">0 Travel surcharges within 50km Perth radius; no hidden fees</td>
                        <td className="p-4 text-slate-600">Hefty package management, mileage, and admin deductions</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Clinical Procedures & Services for Aging Parents */}
              <div className="space-y-6">
                <h3 className="text-navy text-2xl font-bold">Comprehensive Clinical In-Home Care for Seniors</h3>
                <p className="text-body text-sm leading-relaxed">
                  Our Registered Nurses have acute hospital and community care backgrounds. We deliver essential clinical services that non-clinical support workers are not permitted to perform:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="card-base p-5 flex gap-4">
                    <Stethoscope className="w-8 h-8 text-teal-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Clinical Health Monitoring</h4>
                      <p className="text-body text-xs leading-relaxed">
                        Regular blood pressure, blood glucose, oxygen saturation, and temperature checks. Detecting subtle health deterioration before it causes emergency hospital admissions.
                      </p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <HeartPulse className="w-8 h-8 text-teal-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Medication Safety &amp; Injections</h4>
                      <p className="text-body text-xs leading-relaxed">
                        Rigorous Webster-pack administration, insulin and subcutaneous injections (e.g. Clexane), and medication reconciliation with treating GPs and pharmacists.
                      </p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <ShieldCheck className="w-8 h-8 text-teal-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Sterile Wound &amp; Skin Care</h4>
                      <p className="text-body text-xs leading-relaxed">
                        Aseptic dressing changes for surgical incisions, diabetic foot ulcers, chronic leg ulcers, and fragile aging skin tears, promoting healing and infection prevention.
                      </p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <Heart className="w-8 h-8 text-teal-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Chronic Disease Management</h4>
                      <p className="text-body text-xs leading-relaxed">
                        Personalized clinical care for seniors living with cardiovascular conditions, diabetes, respiratory illness (COPD), Parkinson&apos;s disease, and mild cognitive decline.
                      </p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <Award className="w-8 h-8 text-teal-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Catheter &amp; Continence Care</h4>
                      <p className="text-body text-xs leading-relaxed">
                        Professional indwelling and suprapubic catheter management, catheter flushes, bag changes, and discreet continence support in absolute privacy.
                      </p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <UserCheck className="w-8 h-8 text-teal-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Direct Family Updates</h4>
                      <p className="text-body text-xs leading-relaxed">
                        Clear clinical handover notes sent directly to designated adult children or guardians after each visit, providing genuine peace of mind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Funding & Payment Options */}
              <div className="bg-surface p-6 rounded-2xl border border-border space-y-4">
                <h3 className="text-navy text-xl font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-accent" />
                  Funding Options: Home Care Packages, Support at Home &amp; Private Pay
                </h3>
                <p className="text-body text-sm leading-relaxed">
                  We believe navigating aged care funding should be transparent and stress-free. Care N Cure accommodates all primary funding streams:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="p-4 bg-white rounded-xl border border-border space-y-2">
                    <h5 className="font-bold text-navy text-sm">Home Care Packages (HCP)</h5>
                    <p className="text-body text-xs">
                      Fully compatible with Level 1, 2, 3, and 4 packages. We partner with self-managed platforms (like Trilogy Care) and traditional providers.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-border space-y-2">
                    <h5 className="font-bold text-navy text-sm">Support at Home Program</h5>
                    <p className="text-body text-xs">
                      Seamless transition under the Australian Government&apos;s new Support at Home system, ensuring uninterrupted clinical nursing continuity.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-border space-y-2">
                    <h5 className="font-bold text-navy text-sm">Self-Funded Private Care</h5>
                    <p className="text-body text-xs">
                      No waiting lists, no lock-in contracts. Pay per visit while awaiting ACAT assessments or as an immediate top-up to existing care.
                    </p>
                  </div>
                </div>
              </div>

              {/* Geographic Reach */}
              <div className="p-5 bg-teal-subtle/30 rounded-2xl border border-teal-border/70 flex items-start gap-4">
                <Navigation className="w-6 h-6 text-teal-accent shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-navy text-base">Serving Metropolitan Perth with 0 Travel Surcharges</h4>
                  <p className="text-body text-xs leading-relaxed">
                    Based in <Link href="/locations/harrisdale" className="text-teal-text font-semibold hover:underline">Harrisdale</Link>, our nurses regularly visit seniors across <Link href="/locations/armadale" className="text-teal-text font-semibold hover:underline">Armadale</Link>, <Link href="/locations/byford" className="text-teal-text font-semibold hover:underline">Byford</Link>, <Link href="/locations/canning-vale" className="text-teal-text font-semibold hover:underline">Canning Vale</Link>, <Link href="/locations/gosnells" className="text-teal-text font-semibold hover:underline">Gosnells</Link>, <Link href="/locations/south-perth" className="text-teal-text font-semibold hover:underline">South Perth</Link>, <Link href="/locations/applecross" className="text-teal-text font-semibold hover:underline">Applecross</Link>, <Link href="/locations/nedlands" className="text-teal-text font-semibold hover:underline">Nedlands</Link>, <Link href="/locations/subiaco" className="text-teal-text font-semibold hover:underline">Subiaco</Link>, and <Link href="/locations/joondalup" className="text-teal-text font-semibold hover:underline">Joondalup</Link>.
                  </p>
                </div>
              </div>

            </div>

            {/* Sidebar Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-6">
                <ContactForm
                  title="Enquire About In-Home Elderly Care"
                  subtitle="Speak directly with our registered nurse founder. Let us know how we can support your parent at home in Perth."
                  defaultService="Private Nursing at Home"
                />

                {/* Direct Help Callout */}
                <div className="card-base p-6 border border-border bg-surface text-center space-y-3">
                  <p className="text-navy font-bold text-sm">Need immediate clinical guidance?</p>
                  <a
                    href="tel:1300919663"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-navy text-white rounded-xl font-bold hover:bg-navy/90 transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4 text-teal-accent" />
                    <span>Call Nurse Jinu: 1300 919 663</span>
                  </a>
                  <p className="text-slate-500 text-xs">
                    Monday to Friday 9:00am – 6:00pm · Urgent inquiries prioritized
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Uncertainty Reducer */}
      <section className="py-12 bg-surface border-t border-border" aria-label="What to expect when contacting Care N Cure">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-8">
            <p className="section-label mb-2">Stress-Free Onboarding</p>
            <h3 className="text-navy text-2xl font-bold">What to Expect When You Contact Care N Cure</h3>
            <div className="section-divider mx-auto my-3" />
          </div>
          <CtaUncertaintyReducer />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-py bg-white border-t border-border">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-10">
            <p className="section-label mb-2">Helpful Guidance</p>
            <h3 className="text-navy text-2xl sm:text-3xl font-bold">Frequently Asked Questions: In-Home Elderly Care</h3>
            <div className="section-divider mx-auto my-3" />
            <p className="text-body text-sm">
              Clear, transparent answers about private nursing and aged care support in Perth.
            </p>
          </div>
          <div className="card-base p-6 sm:p-8 divide-y divide-border border border-border">
            {faqs.map((faq, index) => (
              <div key={index} className="py-5 first:pt-0 last:pb-0 space-y-2">
                <h4 className="text-navy font-bold text-base">{faq.question}</h4>
                <p className="text-body text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-py bg-surface border-t border-border">
        <div className="section-container max-w-4xl">
          <h3 className="text-navy font-bold text-xl mb-6">Explore Related Home Nursing Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Private Nursing at Home', href: '/private-nursing' },
              { label: 'Home Care Packages (HCP)', href: '/homecare-packages' },
              { label: 'Support at Home Program', href: '/support-at-home' },
              { label: 'Post-Hospital Care', href: '/post-hospital-care' },
              { label: 'Medication Management', href: '/medication-management' },
              { label: 'Sterile Wound Care', href: '/wound-care' },
              { label: 'Community Nursing', href: '/community-nursing' },
              { label: 'Private Rates & Pricing', href: '/pricing' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="card-base p-4 text-sm font-semibold text-navy hover:text-teal-accent flex items-center justify-between transition-colors border border-border bg-white shadow-xs"
              >
                <span>{label}</span>
                <span className="text-teal-accent font-bold">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Give Your Aging Parents the Dignity of Professional Home Care"
        description="Call 1300 919 663 to speak directly with our registered nurse intake team. We arrange comprehensive in-home clinical assessments within 24–48 hours across metropolitan Perth."
        secondaryLink={{ text: 'Request Consultation Online', href: '/contact' }}
      />
    </>
  )
}
