import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight } from 'lucide-react'

const PHONE_NUMBER = '0481 748 516'
const PHONE_HREF = 'tel:+61481748516'

interface HeroProps {
  headline: string
  subheadline: string
  ctaPrimary?: { text: string; href: string; isPhone?: boolean }
  ctaSecondary?: { text: string; href: string }
  badge?: string
}

export function HeroSection({
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  badge,
}: HeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '85vh', background: '#091E30' }}
      aria-labelledby="hero-heading"
    >
      {/* ── Background image — full bleed ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/hero-bg.jpg"
          alt="Registered nurse caring for a patient at home in Perth"
          fill
          priority
          quality={90}
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
        />

        {/* Mobile overlay: smooth, light vertical gradient for clear photo visibility */}
        <div
          className="absolute inset-0 block sm:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(9,30,48,0.65) 0%, rgba(9,30,48,0.35) 60%, rgba(9,30,48,0.1) 100%)',
          }}
        />

        {/* Desktop overlay: smooth, light horizontal gradient for clear photo visibility */}
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            background:
              'linear-gradient(90deg, rgba(9,30,48,0.72) 0%, rgba(9,30,48,0.4) 45%, rgba(9,30,48,0.08) 75%, transparent 100%)',
          }}
        />
      </div>

      {/* Grid lines — very subtle, only visible over dark zone */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(197,238,228,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(197,238,228,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div
        className="relative section-container pt-28 pb-36 sm:pt-36 sm:pb-48"
      >
        <div style={{ maxWidth: '640px' }} className="animate-fade-in">
          {/* Dynamic spacer to guarantee excellent vertical breathing room below the sticky header */}
          <div className="h-8 sm:h-14" />

          {badge && (
            <div className="trust-badge mb-6 inline-flex">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: 'var(--teal-accent)' }}
              />
              {badge}
            </div>
          )}

          <h1
            id="hero-heading"
            className="text-white mb-6"
            style={{
              fontSize: 'clamp(2.1rem, 5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              textShadow: '0 2px 25px rgba(0,0,0,0.65)',
            }}
          >
            {headline}
          </h1>

          <p
            className="mb-10"
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.95)',
              textShadow: '0 1px 12px rgba(0,0,0,0.6)',
            }}
          >
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-">
            {ctaPrimary && (
              ctaPrimary.isPhone ? (
                <a
                  href={PHONE_HREF}
                  className="btn-phone"
                  id="hero-call-cta"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  Call Us Now — {PHONE_NUMBER}
                </a>
              ) : (
                <Link href={ctaPrimary.href} className="btn-phone" id="hero-primary-cta">
                  {ctaPrimary.text}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              )
            )}
            {ctaSecondary && (
              <Link href={ctaSecondary.href} className="btn-outline-white" id="hero-secondary-cta">
                {ctaSecondary.text}
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
          </div>

          {/* Value props strip */}
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-y-2 gap-x-6">
            {[
              '✓ AHPRA Registered Nurses — not support workers',
              '✓ Same nurse, every visit — a face you know and trust',
              '✓ Care that respects your dignity and independence',
            ].map((item) => (
              <span
                key={item}
                className="text-sm font-medium"
                style={{ color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '60px' }}
        >
          <path
            d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z"
            fill="var(--surface)"
          />
        </svg>
      </div>
    </section>
  )
}
