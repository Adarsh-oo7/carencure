import Link from 'next/link'
import { ArrowRight, AlertTriangle } from 'lucide-react'

const founders = [
  {
    id: 'founder-jinu',
    name: 'Jinu Maecheril Sukumaran',
    credential: 'Registered Nurse (RN)',
    ahpra: '[AHPRA Number — to be confirmed]',
    experience: '10+ years nursing experience',
    background: 'Based in Harrisdale, WA — caring for Perth families',
    bio: 'Jinu brings over a decade of clinical nursing experience across hospital and community settings. His approach to care is built on clinical precision and genuine empathy — qualities he now brings directly to Perth families through Care N Cure.',
    photoPlaceholder: true,
  },
  {
    id: 'founder-zuhair',
    name: 'Mohamed Zuhair Parayil Ummer',
    credential: 'Registered Nurse (RN)',
    ahpra: '[AHPRA Number — to be confirmed]',
    experience: '10+ years nursing experience',
    background: 'Based in Harrisdale, WA — dedicated to Perth’s community',
    bio: 'Zuhair\'s nursing career spans over ten years in clinical environments. He co-founded Care N Cure after recognising that Perth families deserved a more consistent, trustworthy model of private nursing — where the same qualified nurse builds a real relationship with every client.',
    photoPlaceholder: true,
  },
]

export function FoundersPreview() {
  return (
    <section className="section-py bg-white" aria-labelledby="founders-heading">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Our Founders</p>
          <h2 id="founders-heading" className="text-navy mb-4">
            Meet Jinu & Zuhair
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-body max-w-2xl mx-auto text-lg">
            Care N Cure was founded by two registered nurses with over 10 years of clinical experience each. We started this practice because we saw first-hand how hard it is to get reliable, qualified nursing care at home in Perth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {founders.map(({ id, name, credential, ahpra, experience, background, bio, photoPlaceholder }) => (
            <div key={id} id={id} className="card-base overflow-hidden flex flex-col">
              {/* Photo area */}
              <div
                className="relative h-56 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #091E30, #1A3D5C)' }}
              >
                {photoPlaceholder && (
                  <div className="flex flex-col items-center gap-3 text-center px-6">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold"
                      style={{ background: 'rgba(197,238,228,0.2)', color: 'var(--teal)', border: '2px dashed rgba(197,238,228,0.4)' }}
                    >
                      {name.charAt(0)}
                    </div>
                    <div className="placeholder-banner text-xs">
                      ⚠ PLACEHOLDER — Replace with real photo of {name.split(' ')[0]} before launch
                    </div>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="text-navy" style={{ fontSize: '1.1rem' }}>{name}</h3>
                  <p className="font-semibold text-sm" style={{ color: 'var(--teal-accent)' }}>{credential}</p>
                </div>
                <div className="flex flex-col gap-1.5 text-sm text-body">
                  <div>✓ {experience}</div>
                  <div>✓ {background}</div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>AHPRA: {ahpra}</div>
                </div>
                <p className="text-body text-sm leading-relaxed flex-1">{bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-semibold text-navy hover:text-teal-accent transition-colors"
            style={{ color: 'var(--navy)' }}
          >
            Read our full story
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
