import Link from 'next/link'
import { ArrowRight, ShieldCheck, Quote } from 'lucide-react'

const founders = [
  {
    id: 'founder-jinu',
    initials: 'JM',
    name: 'Jinu Maecheril Sukumaran',
    credential: 'Registered Nurse (RN)',
    ahpra: 'AHPRA Registered · NMW-class',
    experience: '10+ years nursing experience',
    background: 'Based in Perth — caring for Perth families',
    quote: 'I became a nurse to make a difference in people’s lives — and the best way to do that at home is to be the same face every visit. That’s why we built our practice around one nurse, one client.',
    bio: 'Jinu brings over a decade of clinical nursing experience across hospital and community settings. His approach to care is built on clinical precision and genuine empathy — qualities he now brings directly to Perth families through The Nurse Who Knows You.',
  },
  {
    id: 'founder-zuhair',
    initials: 'MZ',
    name: 'Mohamed Zuhair Parayil Ummer',
    credential: 'Registered Nurse (RN)',
    ahpra: 'AHPRA Registered · NMW-class',
    experience: '10+ years nursing experience',
    background: 'Based in Perth — dedicated to Perth’s community',
    quote: 'Families deserve one nurse who knows them — their medications, their fears, their progress. Not a different face each week. That continuity is what changes outcomes.',
    bio: 'Zuhair\'s nursing career spans over ten years in clinical environments. He co-founded our practice after recognising that Perth families deserved a more consistent, trustworthy model of private nursing — where the same qualified nurse builds a real relationship with every client.',
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
            Our practice was founded by two registered nurses with over 10 years of clinical experience each. We started this because we saw first-hand how hard it is to get reliable, qualified nursing care at home in Perth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {founders.map(({ id, initials, name, credential, ahpra, experience, background, quote, bio }) => (
            <div
              key={id}
              id={id}
              className="card-base overflow-hidden flex flex-col"
              itemScope
              itemType="https://schema.org/Person"
            >
              {/* Quote / Header area */}
              <div
                className="relative px-7 pt-8 pb-6"
                style={{ background: 'linear-gradient(135deg, #091E30 0%, #0D2B45 60%, #1A3D5C 100%)' }}
              >
                {/* Decorative large quote icon */}
                <Quote
                  className="absolute top-4 right-5 opacity-10"
                  style={{ width: 56, height: 56, color: 'var(--teal)' }}
                  aria-hidden="true"
                />

                {/* Avatar + name row */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-lg flex-shrink-0"
                    style={{ background: 'rgba(197,238,228,0.18)', color: 'var(--teal)', border: '2px solid rgba(197,238,228,0.35)' }}
                    aria-hidden="true"
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight" itemProp="name">{name}</p>
                    <p className="text-teal-300 text-xs mt-0.5" itemProp="jobTitle">{credential}</p>
                  </div>
                </div>

                {/* Personal quote */}
                <blockquote className="relative">
                  <p className="text-white/90 text-sm leading-relaxed italic">
                    &ldquo;{quote}&rdquo;
                  </p>
                </blockquote>

                {/* AHPRA badge */}
                <div className="flex items-center gap-2 mt-5">
                  <ShieldCheck className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span className="text-teal-300 text-xs font-semibold">{ahpra}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex flex-col gap-1.5 text-sm text-body">
                  <div>✓ {experience}</div>
                  <div>✓ {background}</div>
                </div>
                <p className="text-body text-sm leading-relaxed flex-1" itemProp="description">{bio}</p>
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
