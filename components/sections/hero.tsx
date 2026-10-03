'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight } from 'lucide-react'
import { trackPhoneClick, trackConsultationRequest } from '@/lib/analytics'

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
          src="/herobg.webp"
          alt="Registered nurse providing compassionate in-home care to an elderly patient in Perth, WA — The Nurse Who Knows You"
          fill
          priority
          quality={80}
          sizes="(max-width: 768px) 100vw, 100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
        />

        {/* Mobile overlay */}
        <div
          className="absolute inset-0 block sm:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(9,30,48,0.85) 0%, rgba(9,30,48,0.70) 55%, rgba(9,30,48,0.40) 100%)',
          }}
        />

        {/* Desktop overlay — strong dark gradient on left for crystal-clear readability while keeping nurse & patient visible on right */}
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            background:
              'linear-gradient(90deg, rgba(9,30,48,0.95) 0%, rgba(9,30,48,0.88) 42%, rgba(9,30,48,0.50) 70%, rgba(9,30,48,0.20) 100%)',
          }}
        />
      </div>

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(197,238,228,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(197,238,228,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* ── Content — Balanced padding so CTAs are visible above the fold on all laptop screens ── */}
      <div className="relative section-container pt-8 pb-16 sm:pt-12 sm:pb-20 z-10">

        {/* Text content — constrained to 660px */}
        <div style={{ maxWidth: '660px' }} className="animate-fade-in">

          {badge && (
            <div className="trust-badge mb-3 sm:mb-4 inline-flex items-center gap-2" role="note" aria-label="Credential badge">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse"
                style={{ background: 'var(--teal-accent)' }}
              />
              {badge}
            </div>
          )}

          <h1
            id="hero-heading"
            className="text-white mb-3 sm:mb-4"
            itemProp="name"
            style={{
              fontSize: 'clamp(1.75rem, 3.6vw, 2.85rem)',
              fontWeight: 800,
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              textShadow: '0 2px 20px rgba(0,0,0,0.7)',
            }}
          >
            {headline}
          </h1>

          <div
            className="mb-6 sm:mb-7"
            itemProp="description"
            style={{
              fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.95)',
              textShadow: '0 1px 10px rgba(0,0,0,0.6)',
            }}
          >
            {subheadline}
          </div>
        </div>
        {/* End constrained text block */}

        {/* CTA buttons & Partner badge row */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 mt-6 mb-6">
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {ctaPrimary && (
              ctaPrimary.isPhone ? (
                <a
                  href={PHONE_HREF}
                  onClick={() => trackPhoneClick('hero_primary')}
                  className="btn-phone cursor-pointer inline-flex items-center justify-center gap-2 text-sm sm:text-base font-bold shadow-lg"
                  id="hero-call-cta"
                  aria-label={ctaPrimary.text}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  {ctaPrimary.text}
                </a>
              ) : (
                <Link
                  href={ctaPrimary.href}
                  onClick={() => trackConsultationRequest('hero_primary')}
                  className="btn-phone inline-flex items-center justify-center gap-2 text-sm sm:text-base font-bold shadow-lg"
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
                  onClick={() => trackPhoneClick('hero_secondary')}
                  className="btn-outline-white cursor-pointer inline-flex items-center justify-center gap-2 text-sm sm:text-base font-bold"
                  id="hero-secondary-cta"
                  aria-label={ctaSecondary.text}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  {ctaSecondary.text}
                </a>
              ) : (
                <Link
                  href={ctaSecondary.href}
                  onClick={() => trackConsultationRequest('hero_secondary')}
                  className="btn-outline-white inline-flex items-center justify-center gap-2 text-sm sm:text-base font-bold"
                  id="hero-secondary-cta"
                  aria-label={ctaSecondary.text}
                >
                  {ctaSecondary.text}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )
            )}
          </div>

          {/* Partner badge */}
          <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 w-fit">
            <span
              className="text-[11px] font-semibold tracking-wider uppercase text-white/80"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
            >
              Partnering with
            </span>
            <Image
              src="/trilogylogo.png"
              alt="Trilogy Care logo"
              width={88}
              height={24}
              style={{
                objectFit: 'contain',
                filter: 'brightness(0) invert(1)',
                width: 'auto',
              }}
              className="h-5 sm:h-6 w-auto"
            />
          </div>
        </div>
        {/* End CTA row */}

        {/* Trust / value props strip */}
        <div className="flex flex-row flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 relative z-10" role="list" aria-label="Key credentials">
          {[
            '✓ AHPRA-Registered Nurses',
            '✓ Dedicated Nurse Coordinator',
            '✓ 24–48-Hour Assessment',
            '✓ Perth Metro Coverage',
          ].map((item) => (
            <span
              key={item}
              role="listitem"
              className="text-xs sm:text-sm font-bold text-teal-accent"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Who we help micro-row */}
        <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/75 relative z-10">
          <span className="font-semibold text-teal-accent">Who we help:</span>
          <span>Older parents</span>
          <span className="text-white/40">•</span>
          <span>Post-hospital recovery</span>
          <span className="text-white/40">•</span>
          <span>Wound care</span>
          <span className="text-white/40">•</span>
          <span>Medication safety</span>
          <span className="text-white/40">•</span>
          <span>Chronic health conditions</span>
        </div>

        {/* Emergency disclaimer */}
        <div className="mt-3 flex items-center gap-2 text-[11px] text-white/70 relative z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
          <span>Not for emergencies. In a medical emergency, immediately call <strong>000</strong>.</span>
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