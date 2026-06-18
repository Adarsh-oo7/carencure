'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const PHONE_NUMBER = '1300 919 663'
const PHONE_HREF = 'tel:1300919663'

const serviceLinks = [
  { label: 'Post-Hospital Recovery Care', href: '/post-hospital-care' },
  { label: 'Private Nursing at Home', href: '/private-nursing' },
  { label: 'Registered Nurses Clinical care Services', href: '/registered-nurses-clinical-care-services' },
  { label: 'Support at home', href: '/support-at-home' },
  { label: 'Homecare packages', href: '/homecare-packages' },
  { label: 'Wound Care at Home', href: '/wound-care' },
  { label: 'Medication Management', href: '/medication-management' },
  { label: 'Mobility Support', href: '/mobility-support' },
  { label: 'Companion Care', href: '/companion-care' },
]

const locationLinks = [
  { label: 'All Perth Suburbs', href: '/locations' },
  { label: 'Nedlands', href: '/locations/nedlands' },
  { label: 'Subiaco', href: '/locations/subiaco' },
  { label: 'City of Gosnells', href: '/locations/gosnells' },
  { label: 'City of Armadale', href: '/locations/armadale' },
  { label: 'Rockingham', href: '/locations/rockingham' },
  { label: 'Applecross', href: '/locations/applecross' },
  { label: 'Mount Lawley', href: '/locations/mount-lawley' },
  { label: 'Fremantle', href: '/locations/fremantle' },
  { label: 'South Perth', href: '/locations/south-perth' },
]

const topBarItems = [
  { text: 'Locally Owned & Operated' },
  { text: 'Led by Perth Registered Nurses' },
  { text: 'Support at Home Provider' },
  { text: 'Partnering with Trilogy Care' },
  { text: 'Call Us Today: 1300 919 663', isPhone: true },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false)

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const locationsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    
    const handleOpen = () => {
      window.location.href = PHONE_HREF
    }
    window.addEventListener('open-phone-modal', handleOpen)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('open-phone-modal', handleOpen)
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current)
      if (locationsTimeoutRef.current) clearTimeout(locationsTimeoutRef.current)
    }
  }, [])

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current)
    setServicesOpen(true)
  }

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false)
    }, 150)
  }

  const handleLocationsMouseEnter = () => {
    if (locationsTimeoutRef.current) clearTimeout(locationsTimeoutRef.current)
    setLocationsOpen(true)
  }

  const handleLocationsMouseLeave = () => {
    locationsTimeoutRef.current = setTimeout(() => {
      setLocationsOpen(false)
    }, 150)
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
        style={{ overflow: 'visible' }}
      >
        {/* Top phone bar / Sliding Marquee */}
        <div className="bg-navy text-white py-2.5 overflow-hidden select-none relative z-50 border-b border-navy-light group-marquee">
          <a
            href={PHONE_HREF}
            className="block hover:text-teal-300 transition-colors cursor-pointer text-white font-medium text-xs tracking-wider"
            id="nav-phone-top"
            style={{ minHeight: 'auto' }}
          >
            <div className="flex whitespace-nowrap">
              <div className="flex shrink-0 animate-marquee items-center gap-8 min-w-full justify-around pr-8">
                {[...topBarItems, ...topBarItems, ...topBarItems].map((item, index) => (
                  <div key={`marquee-1-${index}`} className="flex items-center gap-8 flex-shrink-0">
                    {item.isPhone ? (
                      <span className="flex items-center gap-1.5 font-bold text-teal-accent flex-shrink-0">
                        <Phone className="w-3.5 h-3.5 text-teal-accent flex-shrink-0" />
                        CALL: 1300 919 663
                      </span>
                    ) : (
                      <span className="uppercase flex-shrink-0 text-white/90">{item.text}</span>
                    )}
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-accent flex-shrink-0" />
                  </div>
                ))}
              </div>
              <div className="flex shrink-0 animate-marquee items-center gap-8 min-w-full justify-around pr-8" aria-hidden="true">
                {[...topBarItems, ...topBarItems, ...topBarItems].map((item, index) => (
                  <div key={`marquee-2-${index}`} className="flex items-center gap-8 flex-shrink-0">
                    {item.isPhone ? (
                      <span className="flex items-center gap-1.5 font-bold text-teal-accent flex-shrink-0">
                        <Phone className="w-3.5 h-3.5 text-teal-accent flex-shrink-0" />
                        CALL: 1300 919 663
                      </span>
                    ) : (
                      <span className="uppercase flex-shrink-0 text-white/90">{item.text}</span>
                    )}
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-accent flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </a>
        </div>

        <nav
          className="w-full border-b border-border"
          style={{ background: '#FFFFFF', overflow: 'visible' }}
          role="navigation"
          aria-label="Main navigation"
        >
        <div className="section-container overflow-visible">
          <div className="flex items-center justify-between h-16 sm:h-20 overflow-visible">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3.5 flex-shrink-0" aria-label="Care N Cure — Home">
              <div className="bg-navy rounded-xl p-1 flex items-center justify-center transition-transform duration-200 hover:scale-105 w-11 h-11 sm:w-14 sm:h-14">
                <Image
                  src="/logo.png"
                  alt="Care N Cure logo"
                  width={48}
                  height={48}
                  className="w-9 h-9 sm:w-12 sm:h-12 object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="font-extrabold text-base sm:text-xl leading-tight text-navy tracking-tight">Care N Cure</div>
                <div className="text-[9px] sm:text-xs text-teal-600 font-bold leading-tight">The Nurse Who Knows You</div>
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
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
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
                    className="absolute top-full left-0 w-72 card-base py-2 mt-1 shadow-xl z-50"
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
                onMouseEnter={handleLocationsMouseEnter}
                onMouseLeave={handleLocationsMouseLeave}
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
                    className="absolute top-full left-0 w-56 card-base py-2 mt-1 shadow-xl z-50"
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
                className="btn-phone text-sm cursor-pointer inline-flex items-center gap-2"
                id="nav-call-cta"
                style={{ whiteSpace: 'nowrap' }}
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                Call Us Today
              </a>
            </div>

            {/* Mobile: phone + hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-1.5 bg-navy text-white text-sm font-semibold px-3 py-2 rounded-lg cursor-pointer"
                id="nav-mobile-call"
                aria-label="Call Us Today"
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
          <div className="lg:hidden border-t border-border bg-white max-h-[75vh] overflow-y-auto">
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
              <Link href="/testimonials" className="px-3 py-3 text-body font-medium hover:bg-surface hover:text-navy rounded-lg transition-colors" onClick={() => setIsOpen(false)}>Quality & Feedback</Link>
              <Link href="/faq" className="px-3 py-3 text-body font-medium hover:bg-surface hover:text-navy rounded-lg transition-colors" onClick={() => setIsOpen(false)}>FAQ</Link>
              <Link href="/contact" className="px-3 py-3 text-body font-medium hover:bg-surface hover:text-navy rounded-lg transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>

              <div className="pt-3 border-t border-border mt-2">
                <a
                  href={PHONE_HREF}
                  className="btn-phone w-full justify-center cursor-pointer inline-flex items-center gap-2"
                  id="nav-mobile-call-full"
                >
                  <Phone className="w-5 h-5" />
                  Call Us Today
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
      </header>
    </>
  )
}
