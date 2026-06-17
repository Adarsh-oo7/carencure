'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const PHONE_NUMBER = '0403 760 159'
const PHONE_HREF = 'tel:+61403760159'

const serviceLinks = [
  { label: 'Post-Hospital Recovery Care', href: '/post-hospital-care' },
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

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false)
  const [phoneModalOpen, setPhoneModalOpen] = useState(false)

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const locationsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    
    const handleOpen = () => setPhoneModalOpen(true)
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
        {/* Top phone bar */}
        <div className="bg-navy text-white py-1.5 text-center px-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              setPhoneModalOpen(true);
            }}
            className="inline-flex items-center justify-center gap-2 hover:text-teal-300 transition-colors max-w-full cursor-pointer bg-transparent border-none p-0 font-inherit text-white font-medium"
            id="nav-phone-top"
            style={{ minHeight: 'auto' }}
          >
            <Phone className="w-3.5 h-3.5 flex-shrink-0 text-teal-accent" />
            <span className="sm:hidden text-xs leading-normal font-medium">
              Call: <strong>0403 760 159</strong>, <strong>0481 748 516</strong> or <strong>0412 593 102</strong>
            </span>
            <span className="hidden sm:inline text-sm leading-normal font-medium">
              Perth&apos;s Registered Nursing Team — Call: <strong>0403 760 159</strong>, <strong>0481 748 516</strong> or <strong>0412 593 102</strong>
            </span>
          </button>
        </div>

        <nav
          className="w-full border-b border-border"
          style={{ background: '#FFFFFF', overflow: 'visible' }}
          role="navigation"
          aria-label="Main navigation"
        >
        <div className="section-container overflow-visible">
          <div className="flex items-center justify-between h-16 overflow-visible">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Care N Cure — Home">
              <div className="bg-navy rounded-lg p-1.5 flex items-center justify-center" style={{ width: 44, height: 44 }}>
                <Image
                  src="/logo.png"
                  alt="Care N Cure logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-base leading-tight text-navy">Care N Cure</div>
                <div className="text-xs text-teal-600 font-semibold leading-tight">The Nurse Who Knows You</div>
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
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setPhoneModalOpen(true);
                }}
                className="btn-phone text-sm cursor-pointer"
                id="nav-call-cta"
                style={{ whiteSpace: 'nowrap' }}
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                Call Us Today
              </button>
            </div>

            {/* Mobile: phone + hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setPhoneModalOpen(true);
                }}
                className="flex items-center gap-1.5 bg-navy text-white text-sm font-semibold px-3 py-2 rounded-lg cursor-pointer"
                id="nav-mobile-call"
                aria-label="Call Us Today"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Call Us</span>
              </button>
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
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setPhoneModalOpen(true);
                  }}
                  className="btn-phone w-full justify-center cursor-pointer"
                  id="nav-mobile-call-full"
                >
                  <Phone className="w-5 h-5" />
                  Call Us Today
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      </header>

      {/* Select Call Number Modal popup */}
      {phoneModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-fade-in"
          onClick={() => setPhoneModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 flex flex-col gap-6 text-center animate-scale-up"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-teal-accent/10 text-teal-accent flex items-center justify-center mb-1">
                <Phone className="w-6 h-6 text-[#4DBBA5]" />
              </div>
              <h3 id="modal-title" className="font-bold text-2xl leading-tight" style={{ color: '#0D2B45' }}>
                Call Us Today
              </h3>
              <p className="text-slate-600 text-sm mt-1 font-medium">
                Please select a phone number to dial:
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+61403760159"
                className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-[#4DBBA5] hover:bg-slate-50 transition-all text-left cursor-pointer"
                onClick={() => setPhoneModalOpen(false)}
                style={{ textDecoration: 'none' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-accent/10 text-teal-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#4DBBA5]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg leading-tight text-slate-900" style={{ color: '#0D2B45' }}>0403 760 159</span>
                    <span className="text-slate-500 text-xs mt-0.5 font-medium">Primary nursing line</span>
                  </div>
                </div>
                <span className="w-8 h-8 rounded-full bg-[#4DBBA5]/10 text-[#4DBBA5] flex items-center justify-center font-bold text-sm hover:bg-[#4DBBA5] hover:text-white transition-colors">
                  ➔
                </span>
              </a>

              <a
                href="tel:+61481748516"
                className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-[#4DBBA5] hover:bg-slate-50 transition-all text-left cursor-pointer"
                onClick={() => setPhoneModalOpen(false)}
                style={{ textDecoration: 'none' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-accent/10 text-teal-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#4DBBA5]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg leading-tight text-slate-900" style={{ color: '#0D2B45' }}>0481 748 516</span>
                    <span className="text-slate-500 text-xs mt-0.5 font-medium">Alternate nursing line</span>
                  </div>
                </div>
                <span className="w-8 h-8 rounded-full bg-[#4DBBA5]/10 text-[#4DBBA5] flex items-center justify-center font-bold text-sm hover:bg-[#4DBBA5] hover:text-white transition-colors">
                  ➔
                </span>
              </a>

              <a
                href="tel:+61412593102"
                className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-[#4DBBA5] hover:bg-slate-50 transition-all text-left cursor-pointer"
                onClick={() => setPhoneModalOpen(false)}
                style={{ textDecoration: 'none' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-accent/10 text-teal-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#4DBBA5]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg leading-tight text-slate-900" style={{ color: '#0D2B45' }}>0412 593 102</span>
                    <span className="text-slate-500 text-xs mt-0.5 font-medium">Alternate nursing line</span>
                  </div>
                </div>
                <span className="w-8 h-8 rounded-full bg-[#4DBBA5]/10 text-[#4DBBA5] flex items-center justify-center font-bold text-sm hover:bg-[#4DBBA5] hover:text-white transition-colors">
                  ➔
                </span>
              </a>
            </div>

            <button
              onClick={() => setPhoneModalOpen(false)}
              className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-colors cursor-pointer border-none"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  )
}
