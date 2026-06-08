import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { FAQPageSchema } from '@/components/schema'
import { FAQSection } from '@/components/sections/faq-section'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | The Nurse Who Knows You',
  description: 'Find honest, clear answers to common questions about private home nursing in Perth. Costs, areas served, and hospital discharges.',
  alternates: { canonical: 'https://carencure.com.au/faq' },
}

const allFaqs = [
  {
    id: 'faq-1',
    question: 'What is the Support at Home program in 2026 ?',
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
    answer: 'Yes. Every nurse at our practice is a fully registered nurse. Our founders, Jinu and Zuhair, are registered nurses with over a decade of clinical experience in Perth hospital and community settings. Registration ensures the practitioner is subject to strict professional and national standards.',
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
        title="Still have a question? Ask our founders."
        description="Jinu and Zuhair are available to answer any clinical or pricing questions. No call centres, just direct professional advice."
        secondaryLink={{ text: 'Send an Enquiry', href: '/contact' }}
      />
    </>
  )
}
