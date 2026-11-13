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
      className="relative overflow-hidden min-h-[540px] sm:min-h-[600px] lg:min-h-[78vh] flex items-center"
      style={{ background: '#091E30' }}
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
      <div className="relative section-container w-full pt-10 pb-20 sm:pt-14 sm:pb-24 md:pt-16 md:pb-28 z-10">
        <div style={{ maxWidth: '600px' }} className="animate-fade-in">

          {/* Credential Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 max-w-full px-3 sm:px-3.5 py-1.5 rounded-full bg-teal-accent/20 border border-teal-accent/40 text-teal-accent text-[11px] sm:text-xs font-bold tracking-wide uppercase mb-3 sm:mb-4 backdrop-blur-md shadow-sm leading-snug">
              <span className="w-2 h-2 rounded-full bg-teal-accent animate-pulse shrink-0" />
              <span>{badge}</span>
            </div>
          )}

          {/* Main SEO H1 */}
          <h1
            id="hero-heading"
            className="text-white mb-3 sm:mb-4 tracking-tight font-extrabold"
            itemProp="name"
            style={{
              fontSize: 'clamp(1.5rem, 3.2vw, 2.65rem)',
              lineHeight: 1.16,
              textShadow: '0 2px 20px rgba(0,0,0,0.85)',
            }}
          >
            {headline}
          </h1>

          {/* Subheadline & Value Prop */}
          <div
            className="mb-5 sm:mb-6 text-white/95 text-sm sm:text-base md:text-lg leading-relaxed"
            itemProp="description"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}
          >
            {subheadline}
          </div>

          {/* CTA Actions Group — Visible across mobile & desktop for maximum direct nurse bookings */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            {ctaPrimary && (
              <a
                href={PHONE_HREF}
                onClick={() => trackPhoneClick('hero_primary')}
                className="inline-flex btn-phone cursor-pointer items-center justify-center gap-2.5 h-[50px] text-base sm:text-lg font-extrabold px-6 rounded-xl shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 shrink-0"
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
                className="inline-flex items-center justify-center gap-2 h-[48px] sm:h-[50px] text-sm sm:text-base font-bold px-6 rounded-xl shadow-xl transition-all duration-200 bg-white text-navy hover:bg-teal-50 hover:shadow-2xl hover:scale-[1.02] active:scale-95 shrink-0 border-2 border-white cursor-pointer"
                id="hero-secondary-cta"
                aria-label={ctaSecondary.text}
              >
                <span>{ctaSecondary.text}</span>
                <ArrowRight className="w-4 h-4 text-navy shrink-0" />
              </Link>
            )}
          </div>

          <p className="text-[11px] sm:text-xs text-teal-100/90 font-medium mb-4 sm:mb-5">
            No GP referral required · Speak directly with a Registered Nurse ·{' '}
            <a
              href="https://wa.me/61481748516?text=Hi%20Care%20N%20Cure%2C%20I%20would%20like%20to%20enquire%20about%20in-home%20nursing%20care%20in%20Perth."
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-teal-accent hover:text-white font-semibold"
            >
              Chat on WhatsApp →
            </a>
          </p>

          {/* Reassurance Grid — Top 4 Client & Pricing Proof Points */}
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2 sm:gap-2.5 pt-4 border-t border-white/20 max-w-[560px]">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 bg-white/12 backdrop-blur-md px-3 sm:px-3.5 py-2.5 rounded-xl border border-white/20 text-white text-xs font-semibold shadow-xs leading-tight">
              <ShieldCheck className="w-4 h-4 text-teal-accent shrink-0" />
              <span>From $110/hr · $0 Travel</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 bg-white/12 backdrop-blur-md px-3 sm:px-3.5 py-2.5 rounded-xl border border-white/20 text-white text-xs font-semibold shadow-xs leading-tight">
              <UserCheck className="w-4 h-4 text-teal-accent shrink-0" />
              <span>1 Dedicated AHPRA RN</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 bg-white/12 backdrop-blur-md px-3 sm:px-3.5 py-2.5 rounded-xl border border-white/20 text-white text-xs font-semibold shadow-xs leading-tight">
              <Clock className="w-4 h-4 text-teal-accent shrink-0" />
              <span>24–48h Home Start</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 bg-white/12 backdrop-blur-md px-3 sm:px-3.5 py-2.5 rounded-xl border border-white/20 text-white text-xs font-semibold shadow-xs leading-tight">
              <MapPin className="w-4 h-4 text-teal-accent shrink-0" />
              <span>0% SaH Clinical Co-Pay</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave transition into page content */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-0" aria-hidden="true">
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