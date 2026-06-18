'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight } from 'lucide-react'

const PHONE_NUMBER = '1300 919 663'
const PHONE_HREF = 'tel:1300919663'

interface HeroProps {
  headline: string;
  subheadline: React.ReactNode;
  ctaPrimary?: { text: string; href: string; isPhone?: boolean };
  ctaSecondary?: { text: string; href: string; isPhone?: boolean };
  badge?: string;
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
      itemScope
      itemType="https://schema.org/MedicalBusiness"
    >
      {/* ── Background image — full bleed ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/herobg.jpeg"
          alt="Registered nurse providing compassionate in-home care to an elderly patient in Perth, WA — The Nurse Who Knows You"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />

        {/* Mobile overlay */}
        <div
          className="absolute inset-0 block sm:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(9,30,48,0.70) 0%, rgba(9,30,48,0.45) 55%, rgba(9,30,48,0.15) 100%)',
          }}
        />

        {/* Desktop overlay */}
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            background:
              'linear-gradient(90deg, rgba(9,30,48,0.82) 0%, rgba(9,30,48,0.55) 40%, rgba(9,30,48,0.15) 70%, transparent 100%)',
          }}
        />
      </div>

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(197,238,228,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(197,238,228,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative section-container pt-20 pb-36 sm:pt-36 sm:pb-48 z-10">

        {/* Text content — constrained to 640px */}
        <div style={{ maxWidth: '640px' }} className="animate-fade-in">
          <div className="h-2 sm:h-14" />

          {badge && (
            <div className="trust-badge mb-6 inline-flex" role="note" aria-label="Credential badge">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: 'var(--teal-accent)' }}
              />
              {badge}
            </div>
          )}

          <h1
            id="hero-heading"
            className="text-white mb-4 sm:mb-6"
            itemProp="name"
            style={{
              fontSize: 'clamp(1.6rem, 5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              textShadow: '0 2px 25px rgba(0,0,0,0.65)',
            }}
          >
            {headline}
          </h1>

          <p
            className="block sm:hidden mb-6 text-white/90 leading-relaxed"
            style={{ fontSize: '1rem', textShadow: '0 1px 12px rgba(0,0,0,0.6)' }}
            itemProp="description"
          >
            Because the people you love deserve to stay home — safe, properly cared for, and with a nurse who actually knows them.
          </p>
          <div
            className="hidden sm:block mb-10"
            itemProp="description"
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.95)',
              textShadow: '0 1px 12px rgba(0,0,0,0.6)',
            }}
          >
            {subheadline}
          </div>
        </div>
        {/* End constrained text block */}

        {/* CTA row — full width, stacks vertically below 900px, horizontal above */}
        <div
          className="flex flex-col w-full mt-0 gap-6"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <style>{`
            @media (min-width: 900px) {
              .cta-row {
                flex-direction: row !important;
                align-items: center !important;
                justify-content: space-between !important;
              }
              .logo-block {
                align-items: flex-end !important;
              }
            }
          `}</style>

          <div
            className="cta-row flex w-full gap-6"
            style={{ flexDirection: 'column' }}
          >
            {/* Left: buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4">
              {ctaPrimary && (
                ctaPrimary.isPhone ? (
                  <a
                    href={PHONE_HREF}
                    className="btn-phone cursor-pointer inline-flex items-center gap-2"
                    id="hero-call-cta"
                    aria-label={ctaPrimary.text}
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    {ctaPrimary.text}
                  </a>
                ) : (
                  <Link
                    href={ctaPrimary.href}
                    className="btn-phone"
                    id="hero-primary-cta"
                    aria-label={ctaPrimary.text}
                  >
                    {ctaPrimary.text}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                )
              )}
              {ctaSecondary && (
                ctaSecondary.isPhone ? (
                  <a
                    href={PHONE_HREF}
                    className="btn-outline-white cursor-pointer animate-fade-in inline-flex items-center gap-2"
                    id="hero-secondary-cta"
                    aria-label={ctaSecondary.text}
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    {ctaSecondary.text}
                  </a>
                ) : (
                  <Link
                    href={ctaSecondary.href}
                    className="btn-outline-white"
                    id="hero-secondary-cta"
                    aria-label={ctaSecondary.text}
                  >
                    {ctaSecondary.text}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                )
              )}
            </div>

            {/* Right: logo + text — below buttons under 900px, far right above 900px */}
            <div
              className="logo-block flex flex-col gap-2"
              style={{ alignItems: 'flex-start' }}
            >
              <span
                className="text-xs font-semibold tracking-wide text-white/90"
                style={{
                  lineHeight: 1.35,
                  textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                }}
              >
                PARTNERING WITH
              </span>
              <div className="bg-white/5 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-white/10 flex items-center justify-center">
                <Image
                  src="/trilogylogo.png"
                  alt="Trilogy logo"
                  width={110}
                  height={32}
                  style={{
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
                  }}
                  className="h-7 w-auto"
                />
              </div>
            </div>

          </div>
        </div>
        {/* End CTA row */}

        {/* Trust / value props strip */}
        <div className="mt-6 sm:mt-8 mb-12 sm:mb-0 flex flex-row flex-wrap gap-y-2.5 gap-x-4 sm:gap-x-6 relative z-10" role="list" aria-label="Key credentials">
          {[
            '✓ Registered Nurses',
            '✓ Visits within 24–48 hrs',
          ].map((item) => (
            <span
              key={item}
              role="listitem"
              className="text-xs sm:text-sm font-semibold text-teal-accent"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Trust ribbon */}
        <div className="hidden sm:flex mt-8 items-center gap-3 flex-wrap">
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{ background: 'rgba(197,238,228,0.15)', border: '1px solid rgba(197,238,228,0.3)', color: 'rgba(197,238,228,0.95)' }}
          >
            🏠 Home Care Package Provider
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