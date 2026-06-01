import { RefreshCw, ShieldCheck, Heart, MessageSquareHeart } from 'lucide-react'

const differentiators = [
  {
    id: 'why-same-nurse',
    icon: RefreshCw,
    title: 'Same nurse, every visit',
    description:
      'You won\'t be explaining your story to a stranger each time. We believe in continuity — your nurse gets to know you, your routine, and what matters most to you. That\'s how real care works.',
    colour: '#EAF6F0',
    iconColour: '#27AE60',
  },
  {
    id: 'why-registered',
    icon: ShieldCheck,
    title: 'AHPRA Registered Nurses only',
    description:
      'Every nurse at Care N Cure is AHPRA registered with years of real hospital experience. There\'s a meaningful clinical difference between a registered nurse and a support worker — and it matters for your loved one\'s safety and recovery.',
    colour: '#E8F4FD',
    iconColour: '#2980B9',
  },
  {
    id: 'why-dignity',
    icon: Heart,
    title: 'Care with dignity',
    description:
      'Every Australian deserves to be treated with respect in their own home — not managed, not processed. We take the time to listen, to understand, and to deliver care that honours your independence and your family.',
    colour: '#FEF3F3',
    iconColour: '#E74C3C',
  },
  {
    id: 'why-family',
    icon: MessageSquareHeart,
    title: 'We look after the whole family',
    description:
      'When a loved one comes home from hospital, the whole family is affected. We keep everyone in the loop — in plain language, without medical jargon. Because looking after each other is what Australians do.',
    colour: '#F5EEF8',
    iconColour: '#8E44AD',
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
