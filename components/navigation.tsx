'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const PHONE_NUMBER = '1300 919 663'
const PHONE_HREF = 'tel:1300919663'

const clinicalServices = [
  { label: 'Registered Nurses Clinical Care', href: '/registered-nurses-clinical-care-services', desc: 'Complex wound, injections, vitals & clinical reviews' },
  { label: 'Private Nursing at Home', href: '/private-nursing', desc: '1-on-1 dedicated clinical nursing visits' },
  { label: 'Wound Care at Home', href: '/wound-care', desc: 'Sterile surgical & chronic wound dressings' },
  { label: 'Medication Management', href: '/medication-management', desc: 'Administration, Webster-pak & safety reviews' },
  { label: 'Post-Hospital Recovery Care', href: '/post-hospital-care', desc: 'Safe transitions home after hospital stay' },
  { label: 'Mobility & Rehab Support', href: '/mobility-support', desc: 'Gentle rehabilitation & fall prevention' },
  { label: 'NDIS Nursing Care', href: '/ndis-nursing', desc: 'Clinical care for NDIS participants' },
]

const agedCareServices = [
  { label: 'Aged Care at Home Perth', href: '/aged-care-at-home-perth', desc: 'Comprehensive senior home care in Perth' },
  { label: 'Support at Home (2026)', href: '/support-at-home', desc: 'Guidance & care under the new framework' },
  { label: 'Home Care Packages (HCP)', href: '/homecare-packages', desc: 'Self-managed & provider-managed support' },
  { label: 'Elderly Care at Home', href: '/private-nursing/elderly-care', desc: 'Dedicated senior nurse companion & checks' },
  { label: 'Personal Care at Home', href: '/personal-care', desc: 'Dignified showering, grooming & daily tasks' },
  { label: 'Companion Care', href: '/companion-care', desc: 'Friendly visits, social outings & respite' },
  { label: 'Physiotherapy & Nutrition', href: '/physiotherapy', desc: 'In-home allied health support' },
  { label: 'Pricing & Transparent Rates', href: '/pricing', desc: 'Clear hourly rates with zero hidden fees' },
]

// Flat list for mobile & fallbacks
const serviceLinks = [...clinicalServices, ...agedCareServices, { label: 'Healthcare Referrals', href: '/referrals' }]

const baseSuburbs = [
  { label: 'Harrisdale (HQ)', href: '/locations/harrisdale' },
  { label: 'Piara Waters', href: '/locations/piara-waters' },
  { label: 'Southern River', href: '/locations/southern-river' },
  { label: 'Canning Vale', href: '/locations/canning-vale' },
  { label: 'Thornlie', href: '/locations/thornlie' },
  { label: 'City of Gosnells', href: '/locations/gosnells' },
  { label: 'City of Armadale', href: '/locations/armadale' },
  { label: 'Byford', href: '/locations/byford' },
]

const metroSuburbs = [
  { label: 'Rockingham & Baldivis', href: '/locations/rockingham' },
  { label: 'Nedlands & Subiaco', href: '/locations/nedlands' },
  { label: 'Cottesloe & Claremont', href: '/locations/cottesloe' },
  { label: 'Applecross & Melville', href: '/locations/applecross' },
  { label: 'South Perth & Como', href: '/locations/south-perth' },
  { label: 'Cockburn Central', href: '/locations/cockburn-central' },
  { label: 'Willetton & Bull Creek', href: '/locations/willetton' },
  { label: 'Joondalup (North)', href: '/locations/joondalup' },
]

const locationLinks = [...baseSuburbs, ...metroSuburbs]

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
        {/* Top Utility / Credential Bar — Clean, Stable & Responsive */}
        <div className="bg-navy-dark text-white py-1.5 px-4 text-xs border-b border-navy-light/40 relative z-50">
          <div className="section-container flex items-center justify-between gap-3">
            {/* Left: Key Credentials */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6 text-[11px] lg:text-xs text-white/90 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-accent" />
                Led by Perth Registered Nurses
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-accent" />
                Support at Home & HCP Provider
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-accent" />
                Partnering with Trilogy Care
              </span>
            </div>

            {/* Mobile / Tablet Left */}
            <div className="flex md:hidden items-center gap-1.5 text-[11px] text-white/90 font-medium truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-accent shrink-0" />
              <span className="truncate">Perth Nurse-Led Home Care</span>
            </div>

            {/* Right: Phone & Location Quick Info */}
            <div className="flex items-center gap-3 lg:gap-5 text-[11px] lg:text-xs font-semibold shrink-0">
              <span className="hidden sm:inline text-white/70">Harrisdale HQ • All Perth Suburbs</span>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-1.5 text-teal-accent hover:text-white transition-colors cursor-pointer"
                id="nav-phone-top"
                aria-label="Direct Nurse Intake: 1300 919 663"
              >
                <Phone className="w-3.5 h-3.5 text-teal-accent shrink-0" />
                <span>Call: 1300 919 663</span>
              </a>
            </div>
          </div>
        </div>

        <nav
          className="w-full border-b border-border bg-white"
          style={{ overflow: 'visible' }}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="section-container overflow-visible">
            <div className="flex items-center justify-between h-16 sm:h-20 overflow-visible gap-2">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Care N Cure — Home">
                <div className="bg-navy rounded-xl p-1 flex items-center justify-center transition-transform duration-200 hover:scale-105 w-11 h-11 sm:w-13 sm:h-13">
                  <Image
                    src="/logo.png"
                    alt="Care N Cure logo"
                    width={48}
                    height={48}
                    style={{ width: 'auto', height: 'auto' }}
                    className="w-9 h-9 sm:w-11 sm:h-11 object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-extrabold text-base sm:text-xl leading-tight text-navy tracking-tight">Care N Cure</div>
                  <div className="text-[9px] sm:text-xs text-teal-600 font-bold leading-tight uppercase tracking-wider">Nursing Care Services</div>
                </div>
              </Link>

              {/* Desktop Nav Links */}
              <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                <Link
                  href="/"
                  className="px-2.5 py-1.5 text-sm font-semibold text-body hover:text-navy hover:bg-surface rounded-lg transition-colors"
                >
                  Home
                </Link>

                {/* Services Mega Dropdown */}
                <div
                  className="relative group"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <button
                    className={`px-2.5 py-1.5 text-sm font-semibold rounded-lg transition-colors flex items-center gap-1 ${
                      servicesOpen ? 'text-navy bg-surface' : 'text-body hover:text-navy hover:bg-surface'
                    }`}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    id="services-menu-btn"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    Services
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-navy' : 'text-muted-brand'}`} />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full -left-12 pt-2 z-50">
                      <div
                        className="w-[620px] bg-white rounded-2xl p-5 shadow-2xl border border-border animate-in fade-in slide-in-from-top-1 duration-150"
                        role="menu"
                        aria-labelledby="services-menu-btn"
                      >
                        <div className="grid grid-cols-2 gap-5">
                          {/* Clinical Care Column */}
                          <div>
                            <div className="text-[11px] font-bold uppercase tracking-wider text-teal-text pb-2 mb-2 border-b border-border flex items-center justify-between">
                              <span>Clinical Nursing Care</span>
                              <span className="text-[10px] text-muted-brand font-normal">AHPRA RNs</span>
                            </div>
                            <div className="flex flex-col gap-1">
                              {clinicalServices.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className="px-2.5 py-2 rounded-lg hover:bg-surface transition-colors group/item block"
                                  role="menuitem"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  <div className="text-xs font-bold text-navy group-hover/item:text-teal-text transition-colors">
                                    {link.label}
                                  </div>
                                  <div className="text-[11px] text-body line-clamp-1">
                                    {link.desc}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Aged Care & Support Column */}
                          <div>
                            <div className="text-[11px] font-bold uppercase tracking-wider text-teal-text pb-2 mb-2 border-b border-border flex items-center justify-between">
                              <span>Aged Care & Support</span>
                              <span className="text-[10px] text-muted-brand font-normal">At Home</span>
                            </div>
                            <div className="flex flex-col gap-1">
                              {agedCareServices.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className="px-2.5 py-2 rounded-lg hover:bg-surface transition-colors group/item block"
                                  role="menuitem"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  <div className="text-xs font-bold text-navy group-hover/item:text-teal-text transition-colors">
                                    {link.label}
                                  </div>
                                  <div className="text-[11px] text-body line-clamp-1">
                                    {link.desc}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Bottom strip */}
                        <div className="pt-3 mt-3 border-t border-border flex items-center justify-between text-xs">
                          <span className="text-muted-brand text-[11px]">No GP referral required to start care</span>
                          <Link
                            href="/services"
                            className="text-teal-text font-bold hover:underline"
                            onClick={() => setServicesOpen(false)}
                          >
                            Explore All Services Overview →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Locations Dropdown */}
                <div
                  className="relative group"
                  onMouseEnter={handleLocationsMouseEnter}
                  onMouseLeave={handleLocationsMouseLeave}
                >
                  <button
                    className={`px-2.5 py-1.5 text-sm font-semibold rounded-lg transition-colors flex items-center gap-1 ${
                      locationsOpen ? 'text-navy bg-surface' : 'text-body hover:text-navy hover:bg-surface'
                    }`}
                    aria-haspopup="true"
                    aria-expanded={locationsOpen}
                    id="locations-menu-btn"
                    onClick={() => setLocationsOpen(!locationsOpen)}
                  >
                    Locations
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${locationsOpen ? 'rotate-180 text-navy' : 'text-muted-brand'}`} />
                  </button>
                  {locationsOpen && (
                    <div className="absolute top-full -left-20 pt-2 z-50">
                      <div
                        className="w-[490px] bg-white rounded-2xl p-4 shadow-2xl border border-border animate-in fade-in slide-in-from-top-1 duration-150"
                        role="menu"
                        aria-labelledby="locations-menu-btn"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          {/* Home Base Column */}
                          <div>
                            <div className="text-[11px] font-bold uppercase tracking-wider text-teal-text pb-1.5 mb-1.5 border-b border-border">
                              South-East & Base
                            </div>
                            <div className="flex flex-col gap-0.5">
                              {baseSuburbs.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className="px-2.5 py-1.5 text-xs text-body hover:bg-surface hover:text-navy rounded font-medium transition-colors"
                                  role="menuitem"
                                  onClick={() => setLocationsOpen(false)}
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Greater Perth Column */}
                          <div>
                            <div className="text-[11px] font-bold uppercase tracking-wider text-teal-text pb-1.5 mb-1.5 border-b border-border">
                              Greater Perth Metro
                            </div>
                            <div className="flex flex-col gap-0.5">
                              {metroSuburbs.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className="px-2.5 py-1.5 text-xs text-body hover:bg-surface hover:text-navy rounded font-medium transition-colors"
                                  role="menuitem"
                                  onClick={() => setLocationsOpen(false)}
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Bottom link */}
                        <div className="pt-2.5 mt-2 border-t border-border flex items-center justify-between text-xs">
                          <span className="text-[11px] text-muted-brand">Zero travel fees within 50km</span>
                          <Link
                            href="/locations"
                            className="text-teal-text font-bold hover:underline"
                            onClick={() => setLocationsOpen(false)}
                          >
                            View All 43+ Suburbs →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/about"
                  className="px-2.5 py-1.5 text-sm font-semibold text-body hover:text-navy hover:bg-surface rounded-lg transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/referrals"
                  className="px-2.5 py-1.5 text-sm font-semibold text-body hover:text-navy hover:bg-surface rounded-lg transition-colors"
                >
                  Referrals
                </Link>
                <Link
                  href="/testimonials"
                  className="px-2.5 py-1.5 text-sm font-semibold text-body hover:text-navy hover:bg-surface rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Reviews</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">5.0★</span>
                </Link>
                <Link
                  href="/faq"
                  className="px-2.5 py-1.5 text-sm font-semibold text-body hover:text-navy hover:bg-surface rounded-lg transition-colors"
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="px-2.5 py-1.5 text-sm font-semibold text-body hover:text-navy hover:bg-surface rounded-lg transition-colors"
                >
                  Contact
                </Link>
              </div>

              {/* Desktop CTA — Clinical Phone Action */}
              <div className="hidden lg:flex items-center shrink-0">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2.5 bg-teal-accent hover:bg-teal-dark text-navy font-bold text-sm px-4 py-2 rounded-xl shadow-sm hover:shadow transition-all group shrink-0 cursor-pointer"
                  id="nav-call-cta"
                  aria-label="Call Registered Nurse Team: 1300 919 663"
                >
                  <div className="w-8 h-8 rounded-lg bg-navy/10 flex items-center justify-center group-hover:bg-navy/15 transition-colors shrink-0">
                    <Phone className="w-4 h-4 text-navy" />
                  </div>
                  <div className="flex flex-col text-left leading-tight">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy/70">Nurse Intake 24/7</span>
                    <span className="text-sm font-extrabold text-navy tracking-tight">1300 919 663</span>
                  </div>
                </a>
              </div>

              {/* Mobile: Direct Call Button + Hamburger */}
              <div className="flex lg:hidden items-center gap-2">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-1.5 bg-navy text-white text-xs sm:text-sm font-bold px-3 py-2 rounded-xl cursor-pointer hover:bg-navy-light transition-colors"
                  id="nav-mobile-call"
                  aria-label="Call 1300 919 663"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-accent" />
                  <span>1300 919 663</span>
                </a>
                <button
                  className="p-2 rounded-xl hover:bg-surface transition-colors text-navy"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label={isOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={isOpen}
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                  className="px-3 py-2.5 text-body font-medium hover:bg-surface hover:text-navy rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                {/* Mobile Services */}
                <div>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2.5 text-body font-medium hover:bg-surface rounded-lg transition-colors"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 mt-1 flex flex-col gap-1">
                      {serviceLinks.map((link) => (
                        <Link
                          key={`${link.href}-${link.label}`}
                          href={link.href}
                          className="px-3 py-2 text-sm text-body hover:text-navy font-medium border-l-2 border-teal transition-colors"
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
                    className="w-full flex items-center justify-between px-3 py-2.5 text-body font-medium hover:bg-surface rounded-lg transition-colors"
                    onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                  >
                    Locations
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileLocationsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileLocationsOpen && (
                    <div className="pl-4 mt-1 flex flex-col gap-1">
                      {locationLinks.map((link) => (
                        <Link
                          key={`${link.href}-${link.label}`}
                          href={link.href}
                          className="px-3 py-2 text-sm text-body hover:text-navy font-medium border-l-2 transition-colors"
                          onClick={() => setIsOpen(false)}
                          style={{ borderColor: 'var(--teal-accent)' }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link href="/about" className="px-3 py-2.5 text-body font-medium hover:bg-surface hover:text-navy rounded-lg transition-colors" onClick={() => setIsOpen(false)}>About</Link>
                <Link href="/referrals" className="px-3 py-2.5 text-body font-medium hover:bg-surface hover:text-navy rounded-lg transition-colors" onClick={() => setIsOpen(false)}>Healthcare Referrals</Link>
                <Link href="/testimonials" className="px-3 py-2.5 text-body font-medium hover:bg-surface hover:text-navy rounded-lg transition-colors" onClick={() => setIsOpen(false)}>Reviews (5.0★)</Link>
                <Link href="/faq" className="px-3 py-2.5 text-body font-medium hover:bg-surface hover:text-navy rounded-lg transition-colors" onClick={() => setIsOpen(false)}>FAQ</Link>
                <Link href="/contact" className="px-3 py-2.5 text-body font-medium hover:bg-surface hover:text-navy rounded-lg transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>

                <div className="pt-3 border-t border-border mt-2">
                  <a
                    href={PHONE_HREF}
                    className="btn-phone w-full justify-center cursor-pointer inline-flex items-center gap-2"
                    id="nav-mobile-call-full"
                  >
                    <Phone className="w-5 h-5" />
                    Call Nurse Intake: 1300 919 663
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
