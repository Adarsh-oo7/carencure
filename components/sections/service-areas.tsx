import Link from 'next/link'
import { MapPin, ArrowRight, ShieldCheck, Navigation } from 'lucide-react'

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
  { name: 'Joondalup', href: '/locations/joondalup' },
  { name: 'Midland', href: '/locations/midland' },
  { name: 'Scarborough', href: '/locations/scarborough' },
  { name: 'Sorrento', href: '/locations/sorrento' },
  { name: 'Duncraig', href: '/locations/duncraig' },
  { name: 'Karrinyup', href: '/locations/karrinyup' },
  { name: 'Como', href: '/locations/como' },
  { name: 'Bicton', href: '/locations/bicton' },
  { name: 'East Fremantle', href: '/locations/east-fremantle' },
  { name: 'Shenton Park', href: '/locations/shenton-park' },
  { name: 'Dalkeith', href: '/locations/dalkeith' },
  { name: 'City Beach', href: '/locations/city-beach' },
]

export function ServiceAreas() {
  return (
    <section className="section-py" style={{ background: 'var(--navy)' }} aria-labelledby="areas-heading">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-3" style={{ background: 'rgba(45, 212, 191, 0.15)', border: '1px solid rgba(45, 212, 191, 0.3)' }}>
            <Navigation className="w-4 h-4 text-teal-accent" />
            <span className="text-sm font-bold uppercase tracking-wider text-teal-accent">
              50km Service Radius — NO Transportation Charges
            </span>
          </div>
          <h2 id="areas-heading" className="text-white text-3xl font-bold mb-4">Perth Metropolitan Suburbs We Cover</h2>
          <div className="w-12 h-1 rounded-full mx-auto mb-5" style={{ background: 'var(--teal-accent)' }} />
          <p style={{ color: 'rgba(255,255,255,0.85)' }} className="max-w-2xl mx-auto text-lg leading-relaxed">
            Care N Cure provides registered nurse home visits within a <strong>50km radius</strong> of our Perth headquarters with <strong>ZERO travel or transportation surcharges</strong> for our clients.
          </p>
        </div>

        {/* Embedded Interactive Google Map */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.6854087778297!2d115.92314007624874!3d-32.131797273939895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b2039026a9c40ab%3A0x33a1d36ebabfec5b!2sCARE%20N%20CURE%20NURSING%20CARE%20SERVICES!5e0!3m2!1sen!2sin!4v1785132131562!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Care N Cure Nursing Care Services Perth Location & 50km Service Area"
            className="w-full h-[380px] md:h-[450px]"
          />
        </div>

        {/* Suburb Pills */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-10">
          {suburbs.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className="suburb-pill hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.9)',
                borderRadius: '9999px',
                padding: '0.45rem 1.1rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'all 0.2s ease',
              }}
            >
              <MapPin className="w-3.5 h-3.5 text-teal-accent" />
              {name}
            </Link>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="text-center space-y-4 pt-4 border-t border-white/10">
          <p className="text-white/80 text-sm font-medium">
            ✨ <strong>Transparent Local Coverage:</strong> Dedicated registered nurse home visits across the Perth metropolitan area with travel terms confirmed upfront during intake.
          </p>
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl transition-all shadow-lg hover:brightness-110"
            style={{ background: 'var(--teal-accent)', color: 'var(--navy-dark)', minHeight: 48 }}
          >
            Explore all Perth locations
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  )
}
