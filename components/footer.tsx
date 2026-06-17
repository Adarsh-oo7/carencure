import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Shield, ExternalLink, Linkedin } from 'lucide-react'

const PHONE_NUMBER = '1300 919 663'
const PHONE_HREF = 'tel:1300919663'
const EMAIL = 'hello@carencure.com.au'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="pt-16 pb-8" style={{ background: 'var(--navy)' }}>
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-white/10 rounded-lg p-1.5 flex items-center justify-center" style={{ width: 48, height: 48 }}>
                <Image
                  src="/logo.png"
                  alt="Care N Cure logo"
                  width={36}
                  height={36}
                  className="h-8 w-auto"
                />
              </div>
              <div>
                <div className="font-bold text-white text-base leading-tight">Care N Cure</div>
                <div className="text-white/60 text-xs leading-tight">The Nurse Who Knows You</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              One Client. One Dedicated Nurse Coordinator. Helping Australians stay safe, supported, and independent at home.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--teal-accent)' }} />
                <span className="text-white/70">ABN: 87 152 479 362</span>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--teal-accent)' }} />
                <span className="text-white/70">ASIC Registered — 13 March 2026</span>
              </div>
            </div>
          </div>

          {/* Services + Key Pages */}
          <div>
            <h4 className="font-semibold text-white text-base mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Post-Hospital Recovery Care', href: '/post-hospital-care' },
                { label: 'Private Nursing at Home', href: '/private-nursing' },
                { label: 'Registered Nurses Clinical care Services', href: '/registered-nurses-clinical-care-services' },
                { label: 'Support at home', href: '/support-at-home' },
                { label: 'Homecare packages', href: '/homecare-packages' },
                { label: 'Wound Care at Home', href: '/wound-care' },
                { label: 'Medication Management', href: '/medication-management' },
                { label: 'Mobility Support', href: '/mobility-support' },
                { label: 'Companion Care', href: '/companion-care' },
                { label: 'Your Dedicated Nurse™', href: '/your-dedicated-nurse' },
                { label: 'Funded Care (HCP)', href: '/funded-care' },
                { label: 'Hospital to Home', href: '/post-hospital-care' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold text-white text-base mb-4">Perth Locations</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Nedlands', href: '/locations/nedlands' },
                { label: 'Subiaco', href: '/locations/subiaco' },
                { label: 'City of Gosnells', href: '/locations/gosnells' },
                { label: 'City of Armadale', href: '/locations/armadale' },
                { label: 'Rockingham', href: '/locations/rockingham' },

                { label: 'Fremantle', href: '/locations/fremantle' },
                { label: 'South Perth', href: '/locations/south-perth' },
                { label: 'All Suburbs →', href: '/locations' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-base mb-4">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--teal-accent)' }} />
                <div className="flex flex-col gap-2">
                  <div>
                    <a
                      href="tel:1300919663"
                      className="text-white font-semibold hover:text-teal-200 transition-colors block"
                    >
                      1300 919 663
                    </a>
                  </div>
                  <span className="text-white/50 text-xs mt-1">We answer every call</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--teal-accent)' }} />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white/70 hover:text-white transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--teal-accent)' }} />
                <span className="text-white/70">
                  Perth, WA
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--teal-accent)' }} />
                <div className="text-white/70">
                  <div>Monday – Friday: 9:00am – 6:00pm</div>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <a
                  href="https://www.linkedin.com/company/carencure-au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Care N Cure on LinkedIn"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                >
                  <Linkedin className="w-4 h-4" style={{ color: 'var(--teal-accent)' }} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-8" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-white/50 text-sm">
                © {year} Care N Cure. ABN 87 152 479 362. All rights reserved.
              </p>
              <p className="text-teal-200/60 text-xs mt-1">
                The Nurse Who Knows You™ · One Client. One Nurse Coordinator. One Trusted Relationship.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="/about" className="text-white/50 hover:text-white text-sm transition-colors">About</Link>
              <Link href="/contact" className="text-white/50 hover:text-white text-sm transition-colors">Contact</Link>
              <Link href="/faq" className="text-white/50 hover:text-white text-sm transition-colors">FAQ</Link>
              <Link href="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            </div>
          </div>
          <p className="text-white/30 text-xs text-center mt-4">
            Care N Cure is a registered nursing practice. Our nurses are fully registered. 
            This website does not provide medical advice — please consult your doctor for medical concerns.
          </p>
        </div>
      </div>
    </footer>
  )
}
