'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, ShieldCheck, UserCheck, Clock, MapPin } from 'lucide-react'
import { trackPhoneClick, trackConsultationRequest } from '@/lib/analytics'

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
      style={{ minHeight: '82vh', background: '#091E30' }}
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
          quality={85}
          sizes="(max-width: 768px) 100vw, 100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 22%' }}
        />

        {/* Mobile overlay: deeper dark gradient so white text is 100% legible without glare */}
        <div
          className="absolute inset-0 block sm:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(9,30,48,0.92) 0%, rgba(9,30,48,0.85) 65%, rgba(9,30,48,0.55) 100%)',
          }}
        />

        {/* Desktop overlay — soft directional gradient allowing nurse & patient on right to shine while text on left has ultra-high contrast */}
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            background:
              'linear-gradient(90deg, rgba(9,30,48,0.96) 0%, rgba(9,30,48,0.88) 46%, rgba(9,30,48,0.45) 75%, rgba(9,30,48,0.15) 100%)',
          }}
        />
      </div>

      {/* Subtle medical grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(197,238,228,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(197,238,228,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* ── Content Container ── */}
      <div className="relative section-container pt-10 pb-20 sm:pt-16 sm:pb-24 z-10">
        <div style={{ maxWidth: '580px' }} className="animate-fade-in">

          {/* Credential Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-accent/15 border border-teal-accent/30 text-teal-accent text-xs font-bold tracking-wide uppercase mb-3 sm:mb-4 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-accent animate-pulse" />
              <span>{badge}</span>
            </div>
          )}

          {/* Main SEO H1 */}
          <h1
            id="hero-heading"
            className="text-white mb-3 sm:mb-4 tracking-tight font-extrabold"
            itemProp="name"
            style={{
              fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)',
              lineHeight: 1.15,
              textShadow: '0 2px 20px rgba(0,0,0,0.8)',
            }}
          >
            {headline}
          </h1>

          {/* Subheadline & Value Prop */}
          <div
            className="mb-5 sm:mb-6 text-white/95 text-base sm:text-lg leading-relaxed"
            itemProp="description"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}
          >
            {subheadline}
          </div>

          {/* CTA Actions Group with matched heights */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            {ctaPrimary && (
              <a
                href={PHONE_HREF}
                onClick={() => trackPhoneClick('hero_primary')}
                className="btn-phone cursor-pointer inline-flex items-center justify-center gap-2.5 h-[50px] text-base sm:text-lg font-extrabold px-6 rounded-xl shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 shrink-0"
                id="hero-call-cta"
                aria-label={ctaPrimary.text}
              >
                <Phone className="w-5 h-5 flex-shrink-0 text-navy" />
                <span>{ctaPrimary.text}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse ml-1" />
              </a>
            )}

            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                onClick={() => trackConsultationRequest('hero_secondary')}
                className="btn-outline-white inline-flex items-center justify-center gap-2 h-[50px] text-sm sm:text-base font-bold px-6 rounded-xl backdrop-blur-md transition-all duration-200 hover:bg-white/15 shrink-0"
                id="hero-secondary-cta"
                aria-label={ctaSecondary.text}
              >
                <span>{ctaSecondary.text}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>

          {/* Reassurance Grid — Balanced 2x2 Grid with Full Legibility */}
          <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-4 border-t border-white/15 max-w-[540px]">
            <div className="flex items-center gap-2 sm:gap-2.5 bg-white/10 backdrop-blur-md px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl border border-white/15 text-white text-[11px] sm:text-xs font-semibold shadow-xs">
              <ShieldCheck className="w-4 h-4 text-teal-accent shrink-0" />
              <span className="truncate sm:overflow-visible">AHPRA Nurses</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-2.5 bg-white/10 backdrop-blur-md px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl border border-white/15 text-white text-[11px] sm:text-xs font-semibold shadow-xs">
              <UserCheck className="w-4 h-4 text-teal-accent shrink-0" />
              <span className="truncate sm:overflow-visible">Dedicated RN</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-2.5 bg-white/10 backdrop-blur-md px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl border border-white/15 text-white text-[11px] sm:text-xs font-semibold shadow-xs">
              <Clock className="w-4 h-4 text-teal-accent shrink-0" />
              <span className="truncate sm:overflow-visible">24–48h Intake</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-2.5 bg-white/10 backdrop-blur-md px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl border border-white/15 text-white text-[11px] sm:text-xs font-semibold shadow-xs">
              <MapPin className="w-4 h-4 text-teal-accent shrink-0" />
              <span className="truncate sm:overflow-visible">All Perth Suburbs</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave transition into page content */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '48px' }}
        >
          <path
            d="M0 48L1440 48L1440 16C1080 48 720 0 0 24L0 48Z"
            fill="var(--surface)"
          />
        </svg>
      </div>
    </section>
  )
}