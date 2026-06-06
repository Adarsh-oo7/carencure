import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

const suburbs = [
  { name: 'Nedlands', href: '/locations/nedlands' },
  { name: 'Subiaco', href: '/locations/subiaco' },
  { name: 'Cottesloe', href: '/locations/cottesloe' },
  { name: 'Claremont', href: '/locations/claremont' },
  { name: 'Mount Lawley', href: '/locations/mount-lawley' },
  { name: 'Inglewood', href: '/locations/inglewood' },
  { name: 'City of Gosnells', href: '/locations/gosnells' },
  { name: 'City of Armadale', href: '/locations/armadale' },
  { name: 'Applecross', href: '/locations/applecross' },
  { name: 'Booragoon', href: '/locations/booragoon' },
  { name: 'Canning Vale', href: '/locations/canning-vale' },
  { name: 'Rockingham', href: '/locations/rockingham' },
  { name: 'Fremantle', href: '/locations/fremantle' },
  { name: 'South Perth', href: '/locations/south-perth' },
  { name: 'Wembley', href: '/locations/wembley' },
  { name: 'Floreat', href: '/locations/floreat' },
  { name: 'Mount Pleasant', href: '/locations/mount-pleasant' },
  { name: 'Leederville', href: '/locations/leederville' },
  { name: 'Victoria Park', href: '/locations/victoria-park' },
]

export function ServiceAreas() {
  return (
    <section className="section-py" style={{ background: 'var(--navy)' }} aria-labelledby="areas-heading">
      <div className="section-container">
        <div className="text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--teal-accent)' }}>
            Where We Serve
          </p>
          <h2 id="areas-heading" className="text-white mb-4">Perth suburbs we cover</h2>
          <div className="w-12 h-1 rounded-full mx-auto mb-5" style={{ background: 'var(--teal-accent)' }} />
          <p style={{ color: 'rgba(255,255,255,0.75)' }} className="max-w-xl mx-auto text-lg">
            We provide in-home nursing across Perth metro and surrounding areas.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {suburbs.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className="suburb-pill"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.85)',
                borderRadius: '9999px',
                padding: '0.4rem 1rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              <MapPin className="w-3 h-3 opacity-60" />
              {name}
            </Link>
          ))}
        </div>

        <div className="text-center">
          <p className="mb-5" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Not sure if we cover your suburb?
          </p>
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl transition-colors"
            style={{ background: 'var(--teal-accent)', color: 'var(--navy-dark)', minHeight: 48 }}
          >
            View all locations
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
