import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { MedicalBusinessSchema, PersonSchema } from '@/components/schema'
import { Shield, Heart, Users, ClipboardCheck, BadgeCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: "About Care N Cure — Perth's Founder-Led Private Nursing Practice",
  description:
    'Care N Cure was founded by two registered nurses with 10+ years of clinical experience. Based in Perth.',
  alternates: { canonical: 'https://carencure.com.au/about' },
}

const values = [
  { id: 'value-dignity', icon: Heart, title: 'Patient dignity', description: 'We enter every home as guests. We treat every client with the same respect we would want for our own parents.', colour: '#FDE8EF', iconColour: '#C0392B' },
  { id: 'value-clinical', icon: ClipboardCheck, title: 'Clinical accuracy', description: 'Nursing decisions are made on clinical evidence. We do not cut corners on assessments, documentation, or escalation.', colour: '#E8F4FD', iconColour: '#2980B9' },
  { id: 'value-family', icon: Users, title: 'Family communication', description: 'The whole family deserves to know what is happening. We communicate clearly, without jargon, after every visit.', colour: '#EAF6F0', iconColour: '#27AE60' },
  { id: 'value-continuity', icon: Shield, title: 'Continuity of care', description: 'The same nurse, building a real relationship. Not a rotating roster. Not a stranger at the door each visit.', colour: '#F5EEF8', iconColour: '#8E44AD' },
]

const founders = [
  {
    id: 'about-founder-jinu',
    name: 'Jinu Maecheril Sukumaran',
    credential: 'Registered Nurse (RN)',
    ahpra: '[AHPRA Number — to be confirmed]',
    bio: [
      'Jinu is a registered nurse with over 10 years of clinical experience across hospital and community settings. He is based in Perth, Western Australia, and has built his career caring for Australians across some of Perth’s busiest health environments.',
      'His clinical background spans acute nursing, post-surgical recovery, wound management, and patient education. He co-founded Care N Cure because every Australian deserves a nurse who truly knows them — not a different stranger at every visit.',
    ],
  },
  {
    id: 'about-founder-zuhair',
    name: 'Mohamed Zuhair Parayil Ummer',
    credential: 'Registered Nurse (RN)',
    ahpra: '[AHPRA Number — to be confirmed]',
    bio: [
      'Zuhair is a registered nurse with more than 10 years of clinical experience. Based in Perth, Western Australia, he has dedicated his career to supporting Australians through some of their most vulnerable moments.',
      'Over his career, Zuhair has developed deep expertise in medication management, chronic condition monitoring, and post-hospital recovery. He co-founded Care N Cure because he believes every person — regardless of their situation — deserves consistent, dignified care at home.',
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      <MedicalBusinessSchema />
      <PersonSchema name="Jinu Maecheril Sukumaran" jobTitle="Registered Nurse, Co-Founder" description="Co-founder of Care N Cure. 10+ years nursing experience. AHPRA registered." />
      <PersonSchema name="Mohamed Zuhair Parayil Ummer" jobTitle="Registered Nurse, Co-Founder" description="Co-founder of Care N Cure. 10+ years nursing experience. AHPRA registered." />

      <PageHeader
        title="About Care N Cure"
        subtitle="Founder-led private nursing care, built in Perth for Perth families."
        breadcrumbItems={[{ name: 'About', href: '/about' }]}
        label="Our Story"
      />

      {/* Our Story */}
      <section className="section-py bg-surface">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <p className="section-label mb-3">Our Story</p>
            <h2 className="text-navy mb-4">Why we built Care N Cure</h2>
            <div className="section-divider" />
            <div className="space-y-5">
              <p className="text-body text-lg leading-relaxed">
                Jinu and Zuhair are registered nurses who spent over a decade working across Perth’s hospital network. Time and again, they watched the same thing unfold — Australians discharged from Sir Charles Gairdner, Royal Perth, Fiona Stanley, and Joondalup Health Campus, sent home with complex needs and no reliable nursing support waiting for them.
              </p>
              <p className="text-body leading-relaxed">
                Families did everything right — they searched online, called agencies, asked their GPs — and still ended up with support workers who were caring and well-meaning, but not clinically qualified to manage what their loved one actually needed. The gap between hospital and home was real. And it was leaving too many Australians without proper care during their most vulnerable moments.
              </p>
              <p className="text-body leading-relaxed">
                In March 2026, Jinu and Zuhair registered Care N Cure with ASIC to close that gap. Not an agency. Not a directory. A proper nursing practice — where registered nurses take personal responsibility for the clinical care of every client they are assigned.
              </p>
              <p className="text-body leading-relaxed font-medium text-navy">
                We believe every Australian deserves to recover at home with dignity, surrounded by people who genuinely know and care for them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-py bg-white" id="founders">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Meet the Founders</p>
            <h2 className="text-navy mb-4">Jinu & Zuhair</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {founders.map(({ id, name, credential, ahpra, bio }) => (
              <div key={id} id={id} className="card-base overflow-hidden">
                {/* <div className="relative h-52 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #091E30, #1A3D5C)' }}>
                  <div className="flex flex-col items-center gap-3 text-center px-8">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold" style={{ background: 'rgba(197,238,228,0.15)', color: 'var(--teal)', border: '2px dashed rgba(197,238,228,0.4)' }}>
                      {name.charAt(0)}
                    </div>
                    <div className="text-xs px-3 py-1.5 rounded font-semibold" style={{ background: '#FFF3CD', color: '#856404', border: '1.5px dashed #F0A500' }}>
                      ⚠ PLACEHOLDER — Replace with real photo before launch
                    </div>
                  </div>
                </div> */}
                <div className="p-6 flex flex-col gap-4">
                  <div>
                    <h3 className="text-navy" style={{ fontSize: '1.1rem' }}>{name}</h3>
                    <p className="font-semibold text-sm" style={{ color: 'var(--teal-accent)' }}>{credential}</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>AHPRA: {ahpra}</p>
                  </div>
                  <div className="space-y-3">
                    {bio.map((para, i) => <p key={i} className="text-body text-sm leading-relaxed">{para}</p>)}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BadgeCheck className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--teal-accent)' }} />
                    <span className="text-body">AHPRA Registered Nurse · 10+ years experience</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-surface">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="section-label mb-3">What We Believe</p>
            <h2 className="text-navy mb-4">Our values</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ id, icon: Icon, title, description, colour, iconColour }) => (
              <div key={id} id={id} className="card-base p-6 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: colour }}>
                  <Icon className="w-6 h-6" style={{ color: iconColour }} />
                </div>
                <div>
                  <h3 className="text-navy mb-2" style={{ fontSize: '1rem' }}>{title}</h3>
                  <p className="text-body text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* ASIC Registration */}
      {/* <section className="py-12 bg-white">
        <div className="section-container">
          <div className="max-w-xl mx-auto card-base p-8 text-center" id="asic-registration">
            <Shield className="w-10 h-10 mx-auto mb-4" style={{ color: 'var(--teal-accent)' }} />
            <h3 className="text-navy mb-4">ASIC Registered Business</h3>
            <div className="space-y-2 text-body text-sm">
              <p><strong>Business Name:</strong> Care N Cure Nursing Care Services</p>
              <p><strong>ABN:</strong> 87 152 479 362</p>
              <p><strong>Holder Type:</strong> Partnership</p>
              <p><strong>Registered:</strong> 13 March 2026</p>
              <p><strong>Address:</strong> Perth WA</p>
            </div>
          </div>
        </div>
      </section> */}

      <CTASection
        title="Want to speak with Jinu or Zuhair directly?"
        description="Call us now. As founders, we are involved in every care assessment. You will speak with a registered nurse, not a receptionist."
        secondaryLink={{ text: 'Contact us', href: '/contact' }}
      />
    </>
  )
}
