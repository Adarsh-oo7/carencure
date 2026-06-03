'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const PHONE_NUMBER = '0481 748 516'
const PHONE_HREF = 'tel:+61481748516'

const serviceLinks = [
  { label: 'Post-Hospital Recovery Care', href: '/post-hospital-care' },
  { label: 'Private Nursing at Home', href: '/private-nursing' },
  { label: 'Wound Care at Home', href: '/wound-care' },
  { label: 'Medication Management', href: '/medication-management' },
  { label: 'Mobility Support', href: '/mobility-support' },
  { label: 'Companion Care', href: '/companion-care' },
]

const locationLinks = [
  { label: 'All Perth Suburbs', href: '/locations' },
  { label: 'Nedlands', href: '/locations/nedlands' },
  { label: 'Subiaco', href: '/locations/subiaco' },
  { label: 'Joondalup', href: '/locations/joondalup' },
  { label: 'Applecross', href: '/locations/applecross' },
  { label: 'Mount Lawley', href: '/locations/mount-lawley' },
  { label: 'Fremantle', href: '/locations/fremantle' },
  { label: 'South Perth', href: '/locations/south-perth' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top phone bar */}
      <div className="bg-navy text-white py-1.5 text-center text-sm font-medium">
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 hover:text-teal-300 transition-colors"
          id="nav-phone-top"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Perth&apos;s Registered Nursing Team — Call Us: <strong>{PHONE_NUMBER}</strong></span>
        </a>
      </div>

      <nav
        className={`sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
        style={{ background: '#FFFFFF', overflow: 'visible' }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="section-container overflow-visible">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Care N Cure — Home">
              <div className="bg-navy rounded-lg p-1.5 flex items-center justify-center" style={{ width: 44, height: 44 }}>
                <Image
                  src="./logo.png"
                  alt="Care N Cure logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-base leading-tight text-navy">Care N Cure</div>
                <div className="text-xs text-muted-brand leading-tight">Nursing Care Services</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-5">
              <Link href="/" className="text-sm font-medium text-body hover:text-navy transition-colors" style={{ lineHeight: 1, padding: '4px 0' }}>
                Home
              </Link>

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium text-body hover:text-navy transition-colors"
                  style={{ lineHeight: 1, padding: '4px 0', background: 'none', border: 'none', cursor: 'pointer' }}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  id="services-menu-btn"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div
                    className="absolute top-full left-0 w-72 card-base py-2 mt-1"
                    role="menu"
                    aria-labelledby="services-menu-btn"
                  >
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm text-body hover:bg-surface hover:text-navy font-medium transition-colors"
                        role="menuitem"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Locations dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setLocationsOpen(true)}
                onMouseLeave={() => setLocationsOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium text-body hover:text-navy transition-colors"
                  style={{ lineHeight: 1, padding: '4px 0', background: 'none', border: 'none', cursor: 'pointer' }}
                  aria-haspopup="true"
                  aria-expanded={locationsOpen}
                  id="locations-menu-btn"
                >
                  Locations
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${locationsOpen ? 'rotate-180' : ''}`} />
                </button>
                {locationsOpen && (
                  <div
                    className="absolute top-full left-0 w-56 card-base py-2 mt-1"
                    role="menu"
                    aria-labelledby="locations-menu-btn"
                  >
                    {locationLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm text-body hover:bg-surface hover:text-navy font-medium transition-colors"
                        role="menuitem"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about" className="text-sm font-medium text-body hover:text-navy transition-colors" style={{ lineHeight: 1, padding: '4px 0' }}>
                About
              </Link>
              <Link href="/faq" className="text-sm font-medium text-body hover:text-navy transition-colors" style={{ lineHeight: 1, padding: '4px 0' }}>
                FAQ
              </Link>
              <Link href="/contact" className="text-sm font-medium text-body hover:text-navy transition-colors" style={{ lineHeight: 1, padding: '4px 0' }}>
                Contact
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <a
                href={PHONE_HREF}
                className="btn-phone text-sm"
                id="nav-call-cta"
                style={{ whiteSpace: 'nowrap' }}
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                Call {PHONE_NUMBER}
              </a>
            </div>

            {/* Mobile: phone + hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-1.5 bg-navy text-white text-sm font-semibold px-3 py-2 rounded-lg"
                id="nav-mobile-call"
                aria-label={`Call ${PHONE_NUMBER}`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Call Us</span>
              </a>
              <button
                className="p-2 rounded-lg hover:bg-surface transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6 text-navy" /> : <Menu className="w-6 h-6 text-navy" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="section-container py-4 flex flex-col gap-1">
              <Link
                href="/"
                className="px-3 py-3 text-body font-medium hover:bg-surface hover:text-navy rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  className="w-full flex items-center justify-between px-3 py-3 text-body font-medium hover:bg-surface rounded-lg transition-colors"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 mt-1 flex flex-col gap-1">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="px-3 py-2.5 text-sm text-body hover:text-navy font-medium border-l-2 border-teal transition-colors"
                        onClick={() => setIsOpen(false)}
                        style={{ borderColor: 'var(--teal-accent)' }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Locations */}
              <div>
                <button
                  className="w-full flex items-center justify-between px-3 py-3 text-body font-medium hover:bg-surface rounded-lg transition-colors"
                  onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                >
                  Locations
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileLocationsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileLocationsOpen && (
                  <div className="pl-4 mt-1 flex flex-col gap-1">
                    {locationLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="px-3 py-2.5 text-sm text-body hover:text-navy font-medium border-l-2 transition-colors"
                        onClick={() => setIsOpen(false)}
                        style={{ borderColor: 'var(--teal-accent)' }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about" className="px-3 py-3 text-body font-medium hover:bg-surface hover:text-navy rounded-lg transition-colors" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/testimonials" className="px-3 py-3 text-body font-medium hover:bg-surface hover:text-navy rounded-lg transition-colors" onClick={() => setIsOpen(false)}>Testimonials</Link>
              <Link href="/faq" className="px-3 py-3 text-body font-medium hover:bg-surface hover:text-navy rounded-lg transition-colors" onClick={() => setIsOpen(false)}>FAQ</Link>
              <Link href="/contact" className="px-3 py-3 text-body font-medium hover:bg-surface hover:text-navy rounded-lg transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>

              <div className="pt-3 border-t border-border mt-2">
                <a
                  href={PHONE_HREF}
                  className="btn-phone w-full justify-center"
                  id="nav-mobile-call-full"
                >
                  <Phone className="w-5 h-5" />
                  Call Us: {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
