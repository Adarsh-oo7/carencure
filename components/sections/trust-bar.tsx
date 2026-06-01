import { ShieldCheck, MapPin, Users, BadgeCheck, Heart } from 'lucide-react'

const trustItems = [
  {
    icon: ShieldCheck,
    label: 'AHPRA Registered Nurses',
    sub: 'All nurses AHPRA verified',
    id: 'trust-ahpra',
  },
  {
    icon: BadgeCheck,
    label: 'ASIC Registered Business',
    sub: 'ABN: 87 152 479 362',
    id: 'trust-asic',
  },
  {
    icon: Heart,
    label: 'Care with Dignity',
    sub: 'Your home, your way, always',
    id: 'trust-dignity',
  },
  {
    icon: MapPin,
    label: 'Perth-Based Team',
    sub: 'Harrisdale, WA 6112',
    id: 'trust-perth',
  },
  {
    icon: Users,
    label: 'Founder-Led Practice',
    sub: 'Same nurse, every visit',
    id: 'trust-founders',
  },
]

export function TrustBar() {
  return (
    <section className="py-8 bg-white border-b border-border" aria-label="Trust credentials">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {trustItems.map(({ icon: Icon, label, sub, id }) => (
            <div key={id} id={id} className="flex flex-col items-center text-center gap-2 py-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--teal)', color: 'var(--navy)' }}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-sm text-navy leading-tight">{label}</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
