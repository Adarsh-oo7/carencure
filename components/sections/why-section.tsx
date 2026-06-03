import { UserCheck, ShieldCheck, MessageSquareHeart, Banknote, Clock, Phone } from 'lucide-react'

const differentiators = [
  {
    id: 'why-one-nurse',
    icon: UserCheck,
    title: 'One Nurse. Not a Roster.',
    description:
      'Your dedicated nurse conducts your assessment, writes your care plan, and remains your consistent point of contact — not whoever happens to be available that week.',
    colour: '#EAF6F0',
    iconColour: '#0d9488',
  },
  {
    id: 'why-clinical',
    icon: ShieldCheck,
    title: 'Clinical Oversight at Every Visit',
    description:
      'Every visit is led by an AHPRA-registered nurse. We catch changes in your condition early — before they become hospital readmissions.',
    colour: '#E8F4FD',
    iconColour: '#2980B9',
  },
  {
    id: 'why-family',
    icon: MessageSquareHeart,
    title: 'Your Family Is Kept Informed',
    description:
      'Your dedicated nurse communicates directly with your nominated family members. One number. One nurse. Clear updates every visit.',
    colour: '#F5EEF8',
    iconColour: '#8E44AD',
  },
  {
    id: 'why-funded',
    icon: Banknote,
    title: 'Funded Care Navigation',
    description:
      'We help you access Home Care Packages and transition care funding — so professional nursing care doesn\'t have to mean a large out-of-pocket cost.',
    colour: '#FEF9E7',
    iconColour: '#D4AC0D',
  },
  {
    id: 'why-fast',
    icon: Clock,
    title: 'Fast Response After Discharge',
    description:
      'We aim to have your first nursing visit within 24–48 hours of hospital discharge. No waiting weeks for support to begin.',
    colour: '#FEF3F3',
    iconColour: '#E74C3C',
  },
  {
    id: 'why-founders',
    icon: Phone,
    title: 'Founders You Can Call Directly',
    description:
      'Jinu and Zuhair are the founders — and registered nurses. When you call Care N Cure, you may speak with them personally. That\'s how different we are.',
    colour: '#EAF6F0',
    iconColour: '#27AE60',
  },
]

export function WhySection() {
  return (
    <section className="section-py bg-white" aria-labelledby="why-heading">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: heading */}
          <div>
            <p className="section-label mb-3">Why Care N Cure</p>
            <h2 id="why-heading" className="text-navy mb-4">
              What makes us different
            </h2>
            <div className="section-divider" />
            <p className="text-body text-lg leading-relaxed mb-6">
              Australians look after each other — it is who we are. When someone you love comes home from hospital, they deserve more than a roster of strangers. They deserve a nurse who shows up, knows their name, and genuinely cares.
            </p>
            <p className="text-body leading-relaxed mb-6">
              Care N Cure was built by two registered nurses who spent over a decade in Perth hospitals. They saw how hard it was for families to find <strong>qualified, consistent nursing care</strong> at home after discharge. So they built the practice they wished existed.
            </p>
            <p className="text-body leading-relaxed">
              A practice built on the values that matter most to Australian families — honesty, reliability, dignity, and genuine human connection.
            </p>

            {/* Australian values promise strip */}
            <div className="mt-6 flex flex-col gap-2">
              {[
                'Your nurse knows you — no strangers at the door',
                'Honest, straight-talking communication always',
                'Respect for your home, your routines, and your choices',
                'Real clinical accountability, not just good intentions',
              ].map((promise) => (
                <div key={promise} className="flex items-center gap-2 text-sm text-body">
                  <span className="text-base font-bold" style={{ color: 'var(--teal-accent)' }}>✓</span>
                  {promise}
                </div>
              ))}
            </div>
          </div>

          {/* Right: differentiator cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentiators.map(({ id, icon: Icon, title, description, colour, iconColour }) => (
              <div key={id} id={id} className="card-base p-5 flex flex-col gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: colour }}
                >
                  <Icon className="w-5 h-5" style={{ color: iconColour }} />
                </div>
                <div>
                  <h3 className="text-navy mb-1" style={{ fontSize: '1rem' }}>{title}</h3>
                  <p className="text-body text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
