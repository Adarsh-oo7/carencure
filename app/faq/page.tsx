import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { FAQPageSchema } from '@/components/schema'
import { FAQSection } from '@/components/sections/faq-section'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Care N Cure Nursing Perth',
  description: 'Find honest, clear answers to common questions about private home nursing in Perth. AHPRA, costs, areas served, and hospital discharges.',
  alternates: { canonical: 'https://carencure.com.au/faq' },
}

const allFaqs = [
  {
    id: 'faq-1',
    question: 'What is a private nurse at home?',
    answer: 'A private nurse at home is an AHPRA-registered nurse who visits you in your own residence to deliver clinical nursing care. This includes wound dressings, injections, medication management, and health tracking. It is different from support work or personal caring — registered nurses have university-level medical training, clinical reasoning skills, and are fully licensed to perform medical duties.',
  },
  {
    id: 'faq-2',
    question: 'Are your nurses AHPRA registered?',
    answer: 'Yes. Every nurse at Care N Cure is AHPRA registered. Our founders, Jinu and Zuhair, are registered nurses with over a decade of clinical experience in Perth hospital and community settings. AHPRA registration ensures the practitioner is subject to strict professional and national standards.',
  },
  {
    id: 'faq-3',
    question: 'How quickly can a nursing visit be arranged?',
    answer: 'We aim to coordinate and conduct an initial telephone or home assessment within 24–48 hours of your enquiry. Depending on the complexity of care and roster availability, nursing visits can often begin within a few days. For urgent post-discharge needs, call us directly and we will make every effort to accommodate you quickly.',
  },
  {
    id: 'faq-4',
    question: 'What Perth suburbs do you service?',
    answer: 'We service the entire Perth metropolitan area, including Nedlands, Subiaco, Cottesloe, Applecross, South Perth, Joondalup, Mount Lawley, Midland, Fremantle, Harrisdale, and all surrounding areas. If you are unsure whether we cover your location, please call us directly.',
  },
  {
    id: 'faq-5',
    question: 'What are the costs for private nursing?',
    answer: 'Costs vary depending on the type of clinical care required, the frequency of visits, and the duration. We provide a transparent, upfront quote during your initial care assessment — there are absolutely no hidden fees. Note that private nursing is generally not covered by Medicare, but private funding options or some insurance providers may cover specific treatments.',
  },
  {
    id: 'faq-6',
    question: 'Do you support NDIS or DVA participants?',
    answer: 'Yes. We provide clinical nursing services for self-managed or plan-managed NDIS participants requiring specialized home nursing care, as well as Department of Veterans&apos; Affairs (DVA) cardholders. Please let our founders know your package type during your consult.',
  },
  {
    id: 'faq-7',
    question: 'Can you coordinate directly with my hospital discharge team?',
    answer: 'Yes. We are very familiar with Perth hospital discharge processes. We can liaise directly with discharge coordinators, clinical nurses, and surgeons at Fiona Stanley, Royal Perth, Sir Charles Gairdner, Hollywood Private, and other hospitals to ensure a seamless handoff.',
  },
  {
    id: 'faq-8',
    question: 'What clinical tasks can your registered nurses perform?',
    answer: 'Our Registered Nurses can perform a wide range of clinical duties, including post-surgical wound care, complex dressing changes, staple and suture removal, drain management, subcutaneous/intramuscular injections, insulin administration, catheter care, vital signs tracking, and complete medication reconciliation.',
  },
  {
    id: 'faq-9',
    question: 'Will I get the same nurse every visit?',
    answer: 'Yes. Continuity of care is one of our primary core values. We do not use rotating rosters or send random agency staff. You will see the same registered nurse for every visit, building absolute trust and ensuring they know your health progress perfectly.',
  },
  {
    id: 'faq-10',
    question: 'What happens in a clinical emergency?',
    answer: 'While we provide professional clinical care, we are not an emergency service. In the event of a acute medical emergency (such as severe chest pain, breathing difficulties, or severe bleeding), standard procedures must be followed: dial 000 immediately for an ambulance. Our nurses are fully trained in advanced first aid and CPR, and will actively coordinate with paramedics if present.',
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
        description="Jinu and Zuhair are available to answer any clinical or pricing questions. No call centers, just direct professional advice."
        secondaryLink={{ text: 'Send an Enquiry', href: '/contact' }}
      />
    </>
  )
}
