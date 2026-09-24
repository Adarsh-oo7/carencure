import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { FAQPageSchema } from '@/components/schema'
import { FAQSection } from '@/components/sections/faq-section'

export const metadata: Metadata = {
  title: {
    absolute: 'In-Home Nurse Perth FAQ | How to Hire Home Care Nurses | Care N Cure',
  },
  description: 'Frequently asked questions about hiring an in-home nurse in Perth. Learn about registered nurse home visits, aged care packages, clinical costs & 24/7 care. Call 1300 919 663.',
  alternates: { canonical: 'https://carencure.com.au/faq' },
}

const allFaqs = [
  {
    id: 'faq-hire-nurse',
    question: 'How do I hire an in-home nurse in Perth?',
    answer: 'Hiring an in-home Registered Nurse with Care N Cure is direct and rapid. You can call our nursing coordinator directly on 1300 919 663 or complete our online enquiry form. We conduct a free clinical triage over the phone, agree on a transparent care plan and fee structure, and can schedule your dedicated AHPRA Registered Nurse home visit within 24 to 48 hours across the Perth metro area.',
  },
  {
    id: 'faq-nurse-day',
    question: 'Can I hire a private nurse for a single day or short-term recovery?',
    answer: 'Yes. We offer flexible nurse hire arrangements ranging from a single clinical visit (for sterile wound dressing, IV antibiotic administration, or catheter changes) to full-day or multi-day bedside recovery support following hospital discharge. There are no lock-in contracts.',
  },
  {
    id: 'faq-nurse-cost',
    question: 'How much does it cost to hire a private nurse for home care in Perth?',
    answer: 'In Perth, standard weekday private Registered Nurse visits range between $110 and $160 per hour depending on clinical complexity. Evening, weekend, and public holiday rates range from $160 to $240 per hour. Care N Cure provides clear, upfront pricing with zero hidden travel surcharges for metro Perth.',
  },
  {
    id: 'faq-1',
    question: 'What is the Support at Home program in 2026?',
    answer:
      "It's the Australian Government's main program for in-home aged care in 2026. It replaced Home Care Packages on 1 November 2025 and introduced eight classification levels with quarterly budgets.",
  },
  {
    id: 'faq-2',
    question: 'What is a private nurse at home?',
    answer: 'A private nurse at home is a registered nurse who visits you in your own residence to deliver clinical nursing care. This includes wound dressings, injections, medication management, and health tracking. It is different from support work or personal caring — registered nurses have university-level medical training, clinical reasoning skills, and are fully licensed to perform medical duties.',
  },
  {
    id: 'faq-3',
    question: 'Are your nurses fully registered?',
    answer: 'Yes. Every nurse at our practice is a fully registered nurse. Our founder, Jinu, is a registered nurse with over a decade of clinical experience in Perth hospital and community settings. Registration ensures the practitioner is subject to strict professional and national standards.',
  },
  {
    id: 'faq-4',
    question: 'How quickly can a nursing visit be arranged?',
    answer: 'We aim to coordinate and conduct an initial telephone or home assessment within 24–48 hours of your enquiry. Depending on the complexity of care and roster availability, nursing visits can often begin within a few days. For urgent post-discharge needs, call us directly and we will make every effort to accommodate you quickly.',
  },
  {
    id: 'faq-5',
    question: 'How do I apply for Support at Home funding?',
    answer:
      'To apply, you need to contact Care n Cure and request an assessment. This can be done online or over the phone. Once eligible, you’ll be booked for an home care assessment to determine your support needs.',
  },
  {
    id: 'faq-6',
    question: 'How do I start using my funding once it’s approved?',
    answer:
      'Once funding is assigned, you’ll receive a referral code. You can give this code to your chosen provider to activate your services and begin care.',
  },
  {
    id: 'faq-7',
    question: 'Can someone help me through the process?',
    answer:
      'Yes. You can speak with a provider directly, and they can guide you through each step — from assessment to starting your services.',
  },
  {
    id: 'faq-8',
    question: 'What Perth suburbs do you service?',
    answer: 'We service the entire Perth metropolitan area, including Nedlands, Subiaco, Cottesloe, Applecross, South Perth, City of Gosnells, City of Armadale, Rockingham, Mount Lawley, Fremantle, and all surrounding areas. If you are unsure whether we cover your location, please call us directly.',
  },
  {
    id: 'faq-9',
    question: 'What are the costs for private nursing?',
    answer: 'Costs vary depending on the type of clinical care required, the frequency of visits, and the duration. We provide a transparent, upfront quote during your initial care assessment — there are absolutely no hidden fees. Note that private nursing is generally not covered by Medicare, but private funding options or some insurance providers may cover specific treatments.',
  },


  {
    id: 'faq-10',
    question: 'What clinical tasks can your registered nurses perform?',
    answer: 'Our Registered Nurses can perform a wide range of clinical duties, including post-surgical wound care, complex dressing changes, staple and suture removal, drain management, subcutaneous/intramuscular injections, insulin administration, catheter care, vital signs tracking, and complete medication reconciliation.',
  },
  {
    id: 'faq-11',
    question: 'Did you know you can change aged care providers?',
    answer:
      "Many people don't realise that if their current provider isn't the right fit, they have the right to choose a different one. We often speak with families who feel stuck, believing that changing providers will be difficult, stressful, or mean losing their funding. In reality, the process is often much simpler than people expect.",
  }

]

export default function FAQPage() {
  return (
    <>
      <FAQPageSchema faqs={allFaqs} />

      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Honest, simple, and detailed answers to the questions Perth families ask us most."
        breadcrumbItems={[{ name: 'FAQ', href: '/faq' }]}
        label="Common Questions"
      />

      <div className="bg-white">
        <FAQSection
          faqs={allFaqs}
          title="All FAQ Categories"
          subtitle="Everything you need to know about our home nursing practice in Western Australia."
        />
      </div>

      <CTASection
        title="Still have a question? Ask our founder."
        description="Jinu is available to answer any clinical or pricing questions. No call centres, just direct professional advice."
        secondaryLink={{ text: 'Send an Enquiry', href: '/contact' }}
      />
    </>
  )
}
