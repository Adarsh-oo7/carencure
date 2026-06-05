import { Phone, ClipboardList, HeartPulse } from 'lucide-react'

const steps = [
  {
    id: 'step-1',
    number: '1',
    icon: Phone,
    title: 'Call or enquire',
    description:
      'Call us directly or fill in our short enquiry form. You\'ll speak with a registered nurse — not a receptionist. We listen, we ask the right questions, and we understand your situation.',
  },
  {
    id: 'step-2',
    number: '2',
    icon: ClipboardList,
    title: 'Free care assessment',
    description:
      'We arrange a free care assessment — either by phone or in person. We\'ll talk through what\'s needed, when, and how often. No commitment required. No pressure. Just an honest conversation about whether we\'re the right fit.',
  },
  {
    id: 'step-3',
    number: '3',
    icon: HeartPulse,
    title: 'Nursing care begins',
    description:
      'Your dedicated Nurse Coordinator takes full ownership of your care — scheduling, clinical oversight, GP communication, and family updates. One person. One point of contact. You never repeat yourself, and nothing falls through the cracks.',
  },
]

export function HowItWorks() {
  return (
    <section className="section-py" style={{ background: 'var(--surface)' }} aria-labelledby="how-heading">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Getting Started</p>
          <h2 id="how-heading" className="text-navy mb-4">How it works</h2>
          <div className="section-divider mx-auto" />
          <p className="text-body max-w-xl mx-auto text-lg">
            Three simple steps. No complicated intake forms. No waiting weeks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 -z-0"
            style={{ background: 'var(--teal)', top: '2rem', left: '20%', right: '20%' }}
            aria-hidden="true"
          />

          {steps.map(({ id, number, icon: Icon, title, description }) => (
            <div key={id} id={id} className="flex flex-col items-center text-center gap-4 relative z-10">
              {/* Step number circle */}
              <div className="relative">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl text-white shadow-lg"
                  style={{ background: 'var(--navy)' }}
                >
                  {number}
                </div>
                <div
                  className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--teal)', color: 'var(--navy)' }}
                >
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-navy mb-2" style={{ fontSize: '1.1rem' }}>{title}</h3>
                <p className="text-body text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
