// ============================================================
// Funded-care landing pages (NDIS + Support at Home)
// Each page targets ONE distinct search intent to avoid cannibalisation.
// Rendered by components/funded-landing.tsx via:
//   app/ndis-nursing/[slug]/page.tsx
//   app/support-at-home/[slug]/page.tsx
// ============================================================

import { NDIS_STATUS_LINE, AGED_CARE_REGISTRATION } from './registration'

export type LandingSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export type LandingPage = {
  slug: string
  hub: 'ndis' | 'sah'
  metaTitle: string
  metaDescription: string
  label: string
  h1: string
  subtitle: string
  /** Answer-first summary: what Google / AI assistants should quote. */
  answer: string
  sections: LandingSection[]
  steps?: { title: string; text: string }[]
  faqs: { question: string; answer: string }[]
  related: { label: string; href: string }[]
  formService: string
  procedureType: string
}

const NDIS_RELATED = [
  { label: 'NDIS Nursing Care (overview)', href: '/ndis-nursing' },
  { label: 'Using NDIS funding for nursing', href: '/ndis-nursing/funding-guide' },
  { label: 'For Support Coordinators', href: '/ndis-nursing/support-coordinators' },
  { label: 'Your Dedicated Nurse model', href: '/your-dedicated-nurse' },
]

const SAH_RELATED = [
  { label: 'Support at Home (overview)', href: '/support-at-home' },
  { label: 'Support at Home clinical nursing', href: '/support-at-home/clinical-nursing' },
  { label: 'Self-managed Support at Home', href: '/support-at-home/self-managed' },
  { label: 'Choosing a provider in Perth', href: '/support-at-home/choosing-a-provider' },
]

const SAH_STATUS =
  `Care N Cure is not a registered Support at Home provider. We deliver nursing as an associated provider (subcontractor) through your registered provider — for example ${AGED_CARE_REGISTRATION.partnerExample} — or privately. Your registered provider stays responsible for your budget and agreement; we provide the Registered Nurse.`

export const fundedPages: LandingPage[] = [
  // ───────────────────────────── NDIS ─────────────────────────────
  {
    slug: 'funding-guide',
    hub: 'ndis',
    metaTitle: 'Using NDIS Funding for Nursing in Perth | Agency, Plan & Self-Managed | Care N Cure',
    metaDescription:
      'How NDIS participants in Perth use their plan for in-home Registered Nurse care: which budget, Agency vs Plan vs Self-managed, service agreements and what to ask your planner.',
    label: 'NDIS Participant Guide',
    h1: 'How to Use Your NDIS Plan for In-Home Nursing in Perth',
    subtitle:
      'A plain-English guide for participants, families and carers: what NDIS nursing covers, which part of your plan pays, and how to get started.',
    answer: `NDIS participants can use their plan for in-home nursing when the care is related to their disability and needs a Registered or Enrolled Nurse — for example catheter care, PEG feeding, complex bowel care, wound and pressure care, or insulin management. These are usually funded as Disability-Related Health Supports from your Core or Capacity Building budget. ${NDIS_STATUS_LINE}`,
    sections: [
      {
        heading: 'What counts as NDIS nursing?',
        paragraphs: [
          'The NDIS funds nursing that is linked to how your disability affects your daily life. The National Disability Insurance Agency (NDIA) calls these Disability-Related Health Supports. Health care that anyone might need — such as a GP visit or treatment for a short illness — is generally funded through Medicare and the health system instead.',
        ],
        bullets: [
          'Urinary catheter care (indwelling and suprapubic)',
          'Enteral (PEG / PEJ) feeding and stoma care',
          'Complex bowel care',
          'Wound and pressure injury care',
          'Diabetes and insulin management',
          'Medication administration and nurse training for support workers',
        ],
      },
      {
        heading: 'Agency-managed, Plan-managed or Self-managed — what changes?',
        paragraphs: [
          'Agency-managed (NDIA-managed): the NDIA pays providers directly from the NDIS portal. You can only use NDIS registered providers.',
          'Plan-managed: a plan manager pays invoices on your behalf. You can use registered or unregistered providers, and prices must stay within the NDIS Pricing Arrangements and Price Limits.',
          'Self-managed: you pay the provider and claim back through the my NDIS portal. You have the most flexibility over who you choose.',
          NDIS_STATUS_LINE,
        ],
      },
      {
        heading: 'What to ask for at your plan meeting or reassessment',
        bullets: [
          'Bring a letter from your GP or specialist describing the nursing you need and how often.',
          'Ask for nursing to be included as a Disability-Related Health Support.',
          'Include time for a Registered Nurse to train and supervise your support workers, if you rely on them for daily tasks.',
          'Ask your Support Coordinator (if you have one) to help gather evidence and request quotes.',
        ],
      },
      {
        heading: 'Why a dedicated nurse matters for NDIS participants',
        paragraphs: [
          'For many participants — especially people with complex health needs, sensory sensitivities or communication differences — a new nurse every visit increases anxiety and clinical risk. At Care N Cure, one Registered Nurse leads your assessment, care plan and visits, with a small familiar back-up team for leave.',
        ],
      },
    ],
    steps: [
      { title: 'Call or send an enquiry', text: 'Tell us about your plan type, the supports you need and your suburb.' },
      { title: 'Free nursing assessment', text: 'A Registered Nurse visits to understand your needs and agree the care plan with you.' },
      { title: 'Service agreement', text: 'We explain hours, costs and which budget each support is billed to — before care starts.' },
      { title: 'Care begins', text: 'Visits can usually begin within 24–48 hours of the agreement being signed.' },
    ],
    faqs: [
      {
        question: 'Which part of my NDIS plan pays for nursing?',
        answer:
          'Most in-home nursing is claimed as a Disability-Related Health Support, usually from your Core Supports (Assistance with Daily Life) budget, and sometimes from Capacity Building. Your plan, planner or Support Coordinator can confirm what is funded in your plan.',
      },
      {
        question: 'Can Care N Cure support Agency-managed (NDIA-managed) participants?',
        answer: NDIS_STATUS_LINE,
      },
      {
        question: 'Do you charge more than the NDIS price limits?',
        answer:
          'No. For Agency-managed and Plan-managed participants we bill at or below the limits in the current NDIS Pricing Arrangements and Price Limits. We give you a written quote before care begins.',
      },
      {
        question: 'Do I need a GP referral?',
        answer:
          'Not to contact us. However, medical orders are needed for some procedures (for example medications or wound treatment plans), and a GP or specialist letter helps when requesting nursing funding in your plan.',
      },
      {
        question: 'What if my NDIS plan does not include nursing yet?',
        answer:
          'Talk to us anyway. We can explain what evidence is usually needed, and you can ask for a plan reassessment if your health needs have changed.',
      },
    ],
    related: [
      { label: 'NDIS Nursing Care (overview)', href: '/ndis-nursing' },
      { label: 'Catheter & continence care', href: '/ndis-nursing/catheter-care' },
      { label: 'PEG & enteral feeding', href: '/ndis-nursing/peg-feeding' },
      { label: 'For Support Coordinators', href: '/ndis-nursing/support-coordinators' },
    ],
    formService: 'NDIS Nursing & Clinical Support',
    procedureType: 'NDIS Disability-Related Health Supports',
  },
  {
    slug: 'support-coordinators',
    hub: 'ndis',
    metaTitle: 'NDIS Nursing Referrals Perth | For Support Coordinators & Plan Managers | Care N Cure',
    metaDescription:
      'Refer NDIS participants to a Perth Registered Nurse team. Fast nursing assessments, clear quotes within NDIS price limits, written clinical reports and one dedicated nurse per participant.',
    label: 'For Support Coordinators',
    h1: 'NDIS Nursing Referrals in Perth for Support Coordinators',
    subtitle:
      'A reliable Registered Nurse partner for participants with complex health needs — with clear communication back to you.',
    answer: `Care N Cure accepts NDIS nursing referrals from Support Coordinators, Specialist Support Coordinators, plan managers, hospital discharge teams and allied health professionals across metropolitan Perth. Each participant gets one dedicated Registered Nurse, a written care plan and clear quotes within NDIS price limits. ${NDIS_STATUS_LINE}`,
    sections: [
      {
        heading: 'What we can help your participants with',
        bullets: [
          'Catheter, continence and bowel care',
          'PEG / enteral feeding and stoma care',
          'Wound and pressure injury care',
          'Diabetes and insulin management',
          'Medication administration and support-worker training',
          'Nursing assessments and reports to support plan reviews',
        ],
      },
      {
        heading: 'What you can expect from us',
        bullets: [
          'Referral acknowledged within one business day',
          'Nursing assessment usually within 24–48 hours of consent',
          'Written quote and service agreement before care begins',
          'One named Registered Nurse per participant — no rotating strangers',
          'Clinical updates when needs change, and reports for plan reviews',
          'Metropolitan Perth coverage from our Harrisdale base',
        ],
      },
      {
        heading: 'Information that speeds up a referral',
        bullets: [
          'Participant name, suburb and best contact (or nominee)',
          'Plan management type and relevant budget',
          'Nursing supports needed and frequency',
          'Any GP or specialist orders, discharge summary or current care plan',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do I refer a participant?',
        answer:
          'Call 1300 919 663 or use the form on this page. Include the participant\'s plan type, suburb and the nursing supports needed. We confirm receipt within one business day.',
      },
      {
        question: 'Which plan types can you work with?',
        answer: NDIS_STATUS_LINE,
      },
      {
        question: 'Do you provide reports for plan reviews?',
        answer:
          'Yes. Our Registered Nurses can prepare nursing assessments and progress reports describing the participant\'s needs, the supports delivered and recommendations for the next plan.',
      },
      {
        question: 'Can you train the participant\'s support workers?',
        answer:
          'Yes. Where it is clinically safe, a Registered Nurse can train and supervise support workers in tasks such as PEG feeding or catheter care, with competency checks documented.',
      },
    ],
    related: [
      { label: 'Professional referrals', href: '/referrals' },
      { label: 'Using NDIS funding for nursing', href: '/ndis-nursing/funding-guide' },
      { label: 'Complex bowel care', href: '/ndis-nursing/bowel-care' },
      { label: 'NDIS Nursing Care (overview)', href: '/ndis-nursing' },
    ],
    formService: 'NDIS Nursing & Clinical Support',
    procedureType: 'NDIS Nursing Referral',
  },
  {
    slug: 'catheter-care',
    hub: 'ndis',
    metaTitle: 'NDIS Catheter Care Perth | Suprapubic & Indwelling Catheter Nurse | Care N Cure',
    metaDescription:
      'In-home catheter and continence care for NDIS participants in Perth. Registered Nurses for suprapubic (SPC) and indwelling catheter changes, site care, continence assessments and carer training.',
    label: 'NDIS Clinical Support',
    h1: 'NDIS Catheter & Continence Care at Home in Perth',
    subtitle:
      'Suprapubic and indwelling catheter care, delivered at home by a Registered Nurse who gets to know you.',
    answer: `Care N Cure Registered Nurses provide in-home catheter and continence care for NDIS participants across Perth, including suprapubic (SPC) and indwelling catheter changes, site care, bladder management and continence assessments. Care is usually funded as a Disability-Related Health Support. ${NDIS_STATUS_LINE}`,
    sections: [
      {
        heading: 'Catheter and continence supports we provide',
        bullets: [
          'Scheduled suprapubic (SPC) and indwelling catheter changes, as ordered by your doctor',
          'Catheter site care and monitoring for infection or blockage',
          'Bladder management plans and bag / valve education',
          'Continence assessments and product advice',
          'Training and supervision for support workers and family carers',
        ],
      },
      {
        heading: 'Why consistency matters for catheter care',
        paragraphs: [
          'Catheter changes are personal and can be uncomfortable. Having the same Registered Nurse each time means they know your history, notice early signs of infection or blockage, and can talk to your GP or urologist when something changes.',
        ],
      },
      {
        heading: 'When to call your nurse or doctor urgently',
        bullets: [
          'No urine draining, or a full and painful bladder',
          'Fever, chills or confusion',
          'Blood or heavy sediment in the urine',
          'The catheter has come out',
        ],
        paragraphs: ['If someone is very unwell, call 000.'],
      },
    ],
    faqs: [
      {
        question: 'Does the NDIS pay for catheter care at home?',
        answer:
          'Catheter care related to your disability is usually funded as a Disability-Related Health Support in your NDIS plan. Check your plan or ask your Support Coordinator what is included.',
      },
      {
        question: 'How often does a suprapubic catheter need changing?',
        answer:
          'It depends on the catheter type and your doctor\'s orders — commonly every few weeks. Your Registered Nurse follows the schedule set by your doctor or urologist.',
      },
      {
        question: 'Can my support workers help with catheter care?',
        answer:
          'Support workers can often help with routine tasks such as emptying bags after training. Catheter changes are done by a nurse. We can train and check the competency of your support team.',
      },
    ],
    related: NDIS_RELATED,
    formService: 'NDIS Nursing & Clinical Support',
    procedureType: 'Urinary Catheter Care',
  },
  {
    slug: 'peg-feeding',
    hub: 'ndis',
    metaTitle: 'NDIS PEG Feeding Nurse Perth | Enteral Nutrition & Stoma Care at Home | Care N Cure',
    metaDescription:
      'In-home PEG and enteral feeding support for NDIS participants in Perth. Registered Nurses for feeds, flushes, stoma site care, medication via tube and support-worker training.',
    label: 'NDIS Clinical Support',
    h1: 'NDIS PEG & Enteral Feeding Support at Home in Perth',
    subtitle:
      'Safe tube feeding, stoma care and carer training from a dedicated Registered Nurse.',
    answer: `Care N Cure provides in-home PEG and enteral feeding support for NDIS participants in Perth. Our Registered Nurses manage feeds and flushes, stoma site care, medication via the tube and training for support workers, working with your dietitian and doctor. ${NDIS_STATUS_LINE}`,
    sections: [
      {
        heading: 'Enteral feeding supports we provide',
        bullets: [
          'PEG, PEJ and gastrostomy feeding as per your dietitian\'s plan',
          'Tube flushing and medication administration via tube',
          'Stoma site care, skin checks and early detection of infection',
          'Pump and gravity feed set-up and troubleshooting',
          'Training and competency checks for support workers and family',
        ],
      },
      {
        heading: 'Working with your dietitian and medical team',
        paragraphs: [
          'Your dietitian sets the feeding regime; your doctor orders medications. Your Care N Cure nurse follows these plans, records intake and tolerance, and lets your team know about weight changes, vomiting, blockages or site problems.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is PEG feeding covered by the NDIS?',
        answer:
          'Nursing support for enteral feeding that is related to your disability is generally funded as a Disability-Related Health Support. Feeding formula and equipment may be funded differently — ask your planner or Support Coordinator.',
      },
      {
        question: 'Can support workers do PEG feeds?',
        answer:
          'Often yes, once they have been trained and assessed as competent for that participant. A Registered Nurse provides the training, supervision and reviews.',
      },
      {
        question: 'What happens if the tube is blocked or comes out?',
        answer:
          'Follow the emergency plan from your medical team. A dislodged gastrostomy tube needs urgent attention because the stoma can begin to close. Call your nurse or doctor, or 000 if the person is unwell.',
      },
    ],
    related: NDIS_RELATED,
    formService: 'NDIS Nursing & Clinical Support',
    procedureType: 'Enteral Feeding Management',
  },
  {
    slug: 'bowel-care',
    hub: 'ndis',
    metaTitle: 'NDIS Complex Bowel Care Perth | In-Home Registered Nurse | Care N Cure',
    metaDescription:
      'Complex bowel care at home for NDIS participants in Perth, including people with spinal cord injury or neurological conditions. Dignified, consistent care from a dedicated Registered Nurse.',
    label: 'NDIS Clinical Support',
    h1: 'NDIS Complex Bowel Care at Home in Perth',
    subtitle:
      'Respectful, consistent bowel management for people with spinal cord injury, neurological or other complex conditions.',
    answer: `Care N Cure Registered Nurses deliver complex bowel care at home for NDIS participants in Perth, including people with spinal cord injury, multiple sclerosis and other neurological conditions. We follow your bowel management plan, monitor for complications and train your support team. ${NDIS_STATUS_LINE}`,
    sections: [
      {
        heading: 'Bowel care supports we provide',
        bullets: [
          'Following an individual bowel management plan ordered by your doctor',
          'Routine bowel care at a consistent time that suits your day',
          'Monitoring for constipation, impaction and autonomic dysreflexia risk',
          'Stoma (colostomy / ileostomy) care',
          'Training and supervision for support workers',
        ],
      },
      {
        heading: 'Dignity and routine come first',
        paragraphs: [
          'Bowel care is deeply personal. We keep the same small team, agree preferences in advance and fit care around your routine, work and social life — not the other way around.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is complex bowel care funded by the NDIS?',
        answer:
          'Complex bowel care related to your disability is usually funded as a Disability-Related Health Support. Check your plan or ask your Support Coordinator.',
      },
      {
        question: 'Can a support worker provide bowel care?',
        answer:
          'Some routine tasks can be delegated to trained support workers. A Registered Nurse assesses risk, writes the plan and provides training and supervision.',
      },
    ],
    related: NDIS_RELATED,
    formService: 'NDIS Nursing & Clinical Support',
    procedureType: 'Complex Bowel Care',
  },
  {
    slug: 'diabetes-insulin',
    hub: 'ndis',
    metaTitle: 'NDIS Diabetes & Insulin Nurse Perth | In-Home Diabetes Management | Care N Cure',
    metaDescription:
      'In-home diabetes and insulin support for NDIS participants in Perth. Registered Nurses for insulin administration, blood glucose monitoring, hypo plans and support-worker training.',
    label: 'NDIS Clinical Support',
    h1: 'NDIS Diabetes & Insulin Support at Home in Perth',
    subtitle:
      'Safe insulin administration and blood glucose monitoring for participants who need nursing support.',
    answer: `Care N Cure Registered Nurses help NDIS participants in Perth manage diabetes at home when their disability makes self-management difficult — including insulin administration, blood glucose monitoring, hypoglycaemia plans and support-worker training. ${NDIS_STATUS_LINE}`,
    sections: [
      {
        heading: 'Diabetes supports we provide',
        bullets: [
          'Insulin administration as ordered by your doctor',
          'Blood glucose and ketone monitoring and recording',
          'Hypo / hyper action plans and responses',
          'Foot and skin checks to catch problems early',
          'Liaison with your GP, endocrinologist or diabetes educator',
          'Training and supervision for support workers',
        ],
      },
      {
        heading: 'When nursing support is needed',
        paragraphs: [
          'Many people manage diabetes independently. NDIS nursing support is usually considered when a disability — for example an intellectual disability, acquired brain injury or limited hand function — means someone cannot safely manage insulin or monitoring on their own.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does the NDIS fund diabetes nursing?',
        answer:
          'The NDIS may fund diabetes support where your disability affects your ability to manage it yourself. General diabetes care is usually funded through the health system. Ask your planner or Support Coordinator what applies to you.',
      },
      {
        question: 'Can support workers give insulin?',
        answer:
          'In some situations, trained support workers can assist with pre-filled insulin pens under a nurse-developed plan. A Registered Nurse assesses whether this is safe and provides training.',
      },
    ],
    related: [
      ...NDIS_RELATED.slice(0, 2),
      { label: 'Medication management', href: '/medication-management' },
      { label: 'For Support Coordinators', href: '/ndis-nursing/support-coordinators' },
    ],
    formService: 'NDIS Nursing & Clinical Support',
    procedureType: 'Diabetes Management',
  },
  {
    slug: 'wound-pressure-care',
    hub: 'ndis',
    metaTitle: 'NDIS Wound & Pressure Injury Care Perth | In-Home Nurse | Care N Cure',
    metaDescription:
      'In-home wound and pressure injury care for NDIS participants in Perth. Registered Nurses for dressings, pressure area prevention, skin checks and support-worker training.',
    label: 'NDIS Clinical Support',
    h1: 'NDIS Wound & Pressure Injury Care at Home in Perth',
    subtitle:
      'Prevent and treat pressure injuries and wounds with consistent nursing at home.',
    answer: `Care N Cure Registered Nurses provide wound and pressure injury care at home for NDIS participants in Perth, including dressings, pressure area prevention plans, skin integrity checks and training for support workers on repositioning and skin care. ${NDIS_STATUS_LINE}`,
    sections: [
      {
        heading: 'Wound and skin supports we provide',
        bullets: [
          'Wound assessment and dressings as ordered by your doctor',
          'Pressure injury prevention plans and repositioning schedules',
          'Skin integrity checks for people with limited mobility or sensation',
          'Liaison with your GP, occupational therapist and equipment suppliers',
          'Photo-documented progress shared with your care team (with consent)',
        ],
      },
      {
        heading: 'Prevention is the priority',
        paragraphs: [
          'For people who use a wheelchair or spend long periods in bed, a pressure injury can lead to months of treatment or hospital stays. Regular checks by the same nurse — who knows what your skin normally looks like — help catch early warning signs.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does the NDIS fund wound care?',
        answer:
          'Wound and pressure care related to your disability — for example due to limited mobility — is usually funded as a Disability-Related Health Support. Short-term wounds from an illness or surgery are usually funded through the health system.',
      },
      {
        question: 'Do you also provide private wound care?',
        answer: 'Yes. See our general wound care service for private and post-surgical clients.',
      },
    ],
    related: [
      ...NDIS_RELATED.slice(0, 2),
      { label: 'Wound care (private clients)', href: '/wound-care' },
      { label: 'For Support Coordinators', href: '/ndis-nursing/support-coordinators' },
    ],
    formService: 'NDIS Nursing & Clinical Support',
    procedureType: 'Wound and Pressure Injury Care',
  },

  // ─────────────────────────── SUPPORT AT HOME ───────────────────────────
  {
    slug: 'clinical-nursing',
    hub: 'sah',
    metaTitle: 'Support at Home Clinical Nursing Perth | No Client Contribution | Care N Cure',
    metaDescription:
      'Get Registered Nurse care at home through Support at Home in Perth. Clinical care has no client contribution. Learn how to ask your provider for Care N Cure nurses.',
    label: 'Support at Home — Clinical Care',
    h1: 'Support at Home Clinical Nursing in Perth',
    subtitle:
      'Registered Nurse care at home, funded through your Support at Home budget — with no client contribution for clinical care.',
    answer: `Under the Australian Government's Support at Home program (which began on 1 November 2025), clinical supports such as nursing care do not attract a client contribution. That means wound care, medication management, continence care and other nursing can be delivered at home in Perth from your budget at no extra cost to you. ${SAH_STATUS}`,
    sections: [
      {
        heading: 'Clinical nursing you can use your Support at Home budget for',
        bullets: [
          'Wound care and dressings',
          'Medication management and administration',
          'Continence and catheter care',
          'Diabetes and insulin management',
          'Health monitoring and clinical reviews after hospital',
          'Nurse care planning and liaison with your GP',
        ],
      },
      {
        heading: 'How client contributions work (in simple terms)',
        paragraphs: [
          'Support at Home groups services into three types. Clinical supports (like nursing) have no client contribution. Independence supports (like personal care) and everyday living supports (like cleaning) have contributions that depend on your pension or income status, as set by the government.',
          'Rules differ for people who had a Home Care Package or were assessed before 12 September 2024 — your provider or My Aged Care can confirm what applies to you.',
        ],
      },
      {
        heading: 'How to get Care N Cure nurses through your provider',
        paragraphs: [SAH_STATUS],
        bullets: [
          'Ask your Support at Home provider or care partner whether they can engage Care N Cure as an associated provider for your nursing.',
          'If you self-manage, tell your provider you would like Care N Cure to deliver your clinical care.',
          'Not funded yet? We can help you understand the My Aged Care assessment process, and offer private nursing while you wait.',
        ],
      },
    ],
    steps: [
      { title: 'Talk to us', text: 'Tell us your provider, your classification (if known) and the nursing you need.' },
      { title: 'We contact your provider', text: 'With your consent, we arrange to be engaged for your clinical care.' },
      { title: 'Nursing assessment', text: 'A Registered Nurse visits to agree your care plan.' },
      { title: 'Care begins', text: 'Usually within 24–48 hours of approval from your provider.' },
    ],
    faqs: [
      {
        question: 'Do I pay anything for nursing under Support at Home?',
        answer:
          'Clinical supports such as nursing have no client contribution under Support at Home. The cost comes from your Support at Home budget. Other services, such as cleaning or personal care, may have a contribution.',
      },
      {
        question: 'Is Care N Cure a registered Support at Home provider?',
        answer: SAH_STATUS,
      },
      {
        question: 'Can I keep my current provider and still have Care N Cure nurses?',
        answer:
          'Often, yes. Many registered providers engage specialist nursing services as associated providers. Ask your provider, or let us contact them for you.',
      },
      {
        question: 'What if I am still waiting for Support at Home funding?',
        answer:
          'You can use private nursing in the meantime. Once your funding is available, we can help you move the clinical part of your care onto your Support at Home budget through your provider.',
      },
    ],
    related: [
      { label: 'Support at Home (overview)', href: '/support-at-home' },
      { label: 'Self-managed Support at Home', href: '/support-at-home/self-managed' },
      { label: 'Wound care', href: '/wound-care' },
      { label: 'Medication management', href: '/medication-management' },
    ],
    formService: 'Support at Home Program',
    procedureType: 'Support at Home Clinical Nursing',
  },
  {
    slug: 'self-managed',
    hub: 'sah',
    metaTitle: 'Self-Managed Support at Home & Home Care Package Nurse Perth | Care N Cure',
    metaDescription:
      'Self-managing your Support at Home or Home Care Package in Perth? Choose your own Registered Nurse. Care N Cure works with registered self-management providers such as Trilogy Care.',
    label: 'Self-Managed Aged Care',
    h1: 'Self-Managed Support at Home & Home Care Packages: Choose Your Own Nurse in Perth',
    subtitle:
      'Self-management lets you choose who comes into your home. Choose a Registered Nurse who will get to know you.',
    answer: `If you self-manage your Support at Home budget (or a transitioned Home Care Package) in Perth, you can usually ask your registered provider to engage the workers you choose. Care N Cure Registered Nurses work with self-managing clients through registered providers such as ${AGED_CARE_REGISTRATION.partnerExample}, delivering clinical care — which has no client contribution — while you stay in control.`,
    sections: [
      {
        heading: 'What self-management means under Support at Home',
        paragraphs: [
          'You still need a registered Support at Home provider — they hold your agreement and budget and stay responsible for the quality and safety of your care. Self-management means you take a bigger role in choosing workers, booking services and managing your schedule, and you usually pay a lower care management cost.',
        ],
      },
      {
        heading: 'Why families in Perth choose Care N Cure when they self-manage',
        bullets: [
          'One dedicated Registered Nurse who knows your health history',
          'Clinical care delivered as an associated provider, invoiced to your provider',
          'Clear written quotes before care begins',
          'Metropolitan Perth coverage from our Harrisdale base',
          'Private top-up visits available if you need more than your budget allows',
        ],
      },
      {
        heading: 'Getting started',
        paragraphs: [SAH_STATUS],
        bullets: [
          'Tell your self-management provider you want Care N Cure for your nursing.',
          'We send the details they need to engage us.',
          'A Registered Nurse visits for a free assessment and care plan.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I self-manage a Support at Home budget?',
        answer:
          'Yes, if your registered provider offers self-management. You still sign an agreement with that provider, and they remain responsible for your care.',
      },
      {
        question: 'Do you work with Trilogy Care?',
        answer: `Yes — we work with self-managing clients through registered providers such as ${AGED_CARE_REGISTRATION.partnerExample}. Ask us about your provider.`,
      },
      {
        question: 'I still have a Home Care Package. Does this apply to me?',
        answer:
          'Home Care Packages moved to Support at Home on 1 November 2025. If you self-managed your package, talk to your provider about how self-management works for you now.',
      },
    ],
    related: [
      { label: 'Support at Home clinical nursing', href: '/support-at-home/clinical-nursing' },
      { label: 'Home Care Packages', href: '/homecare-packages' },
      { label: 'Funded care options', href: '/funded-care' },
      { label: 'Choosing a provider in Perth', href: '/support-at-home/choosing-a-provider' },
    ],
    formService: 'Support at Home Program',
    procedureType: 'Self-Managed Support at Home Nursing',
  },
  {
    slug: 'choosing-a-provider',
    hub: 'sah',
    metaTitle: 'How to Choose a Support at Home Provider in Perth | 2026 Checklist | Care N Cure',
    metaDescription:
      'A practical checklist for choosing a Support at Home or aged care provider in Perth: questions to ask about fees, nurse access, staff consistency, coverage of your suburb and how to switch.',
    label: 'Family Guide',
    h1: 'How to Choose a Support at Home Provider in Perth',
    subtitle:
      'A practical checklist for older people and families comparing aged care at home providers in Perth.',
    answer:
      'To choose a Support at Home provider in Perth, check that they are registered with the Aged Care Quality and Safety Commission, ask for their prices and care management charges in writing, confirm they actually staff your suburb, ask how often you will see the same workers, and find out how quickly a Registered Nurse can visit when your health changes. You can compare registered providers on the My Aged Care website.',
    sections: [
      {
        heading: '1. Check registration and compare on My Aged Care',
        paragraphs: [
          'Support at Home services must come from a registered provider (or an associated provider working for them). Use the My Aged Care "Find a provider" tool to see registered providers that service your area and compare published prices.',
        ],
      },
      {
        heading: '2. Ask these questions before you sign',
        bullets: [
          'What are your prices for each service, and what do you charge for care management?',
          'Do you staff my suburb directly, or will workers travel from elsewhere? Are there travel charges?',
          'How often will I see the same support worker and the same nurse?',
          'How quickly can a Registered Nurse visit if my health changes?',
          'Can I choose or request specific workers or a specialist nursing service?',
          'How do I raise a concern, and how do I leave if I am unhappy?',
        ],
      },
      {
        heading: '3. Think about clinical care, not just domestic help',
        paragraphs: [
          'Many older people start with cleaning or personal care, but health needs can change quickly — after a fall, a hospital stay or a new diagnosis. Clinical supports such as nursing have no client contribution under Support at Home, so it is worth asking how each provider delivers nursing and how quickly.',
        ],
      },
      {
        heading: '4. Where Care N Cure fits',
        paragraphs: [
          `Care N Cure is a nurse-led service based in Harrisdale. ${SAH_STATUS} Many Perth families keep their existing Support at Home provider and ask them to engage Care N Cure for nursing, or use us privately while waiting for funding.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I change Support at Home providers?',
        answer:
          'Yes. You can change providers. Check your current agreement for notice periods, then agree a start date with your new provider so there is no gap in care.',
      },
      {
        question: 'Where can I see a list of Support at Home providers in Perth?',
        answer:
          'The My Aged Care website has a "Find a provider" tool listing registered providers by location, with their published prices.',
      },
      {
        question: 'Do I need a registered provider to get nursing at home?',
        answer:
          'To use Support at Home funding, yes — care must be arranged through a registered provider, who may engage a specialist nursing service like Care N Cure as an associated provider. Without funding, you can engage private nursing directly.',
      },
    ],
    related: [
      { label: 'Support at Home (overview)', href: '/support-at-home' },
      { label: 'Support at Home clinical nursing', href: '/support-at-home/clinical-nursing' },
      { label: 'Aged care at home in Perth', href: '/aged-care-at-home-perth' },
      { label: 'Pricing', href: '/pricing' },
    ],
    formService: 'Support at Home Program',
    procedureType: 'Aged Care Provider Guidance',
  },
]

export const getFundedPage = (hub: LandingPage['hub'], slug: string) =>
  fundedPages.find((p) => p.hub === hub && p.slug === slug)

export const getFundedPagesByHub = (hub: LandingPage['hub']) => fundedPages.filter((p) => p.hub === hub)

export const hubPath = (hub: LandingPage['hub']) => (hub === 'ndis' ? '/ndis-nursing' : '/support-at-home')
