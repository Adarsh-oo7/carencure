import { Phone, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const PHONE_NUMBER = '(08) XXXX XXXX'
const PHONE_HREF = 'tel:+618XXXXXXXX'

interface CTAProps {
  title?: string
  description?: string
  secondaryLink?: { text: string; href: string }
}

export function CTASection({
  title = 'Ready to talk?',
  description = "Call us now — we answer every call. If you'd prefer, fill in our contact form and we'll be back in touch within 2 hours during business hours.",
  secondaryLink,
}: CTAProps) {
  return (
    <section
      className="section-py"
      style={{ background: 'linear-gradient(135deg, #091E30 0%, #0D2B45 60%, #1A3D5C 100%)' }}
      aria-labelledby="cta-heading"
    >
      <div className="section-container text-center">
        <h2 id="cta-heading" className="text-white mb-4">{title}</h2>
        <p
          className="mb-10 max-w-xl mx-auto text-lg"
          style={{ color: 'rgba(255,255,255,0.78)' }}
        >
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={PHONE_HREF}
            className="btn-phone text-lg"
            id="cta-call-btn"
          >
            <Phone className="w-6 h-6 flex-shrink-0" />
            Call Us Now — {PHONE_NUMBER}
          </a>
          {secondaryLink && (
            <Link
              href={secondaryLink.href}
              className="btn-outline-white"
              id="cta-secondary-btn"
            >
              {secondaryLink.text}
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </div>

        <p className="mt-8 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Mon–Fri 8am–6pm · Sat 9am–1pm · AHPRA Registered Nurses · Perth, WA
        </p>
      </div>
    </section>
  )
}
