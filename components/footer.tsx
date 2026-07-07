import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Shield, ExternalLink, Linkedin, MessageSquare } from 'lucide-react'

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
                { label: 'Cottesloe', href: '/locations/cottesloe' },
                { label: 'City of Gosnells', href: '/locations/gosnells' },
                { label: 'City of Armadale', href: '/locations/armadale' },
                { label: 'Rockingham', href: '/locations/rockingham' },
                { label: 'Fremantle', href: '/locations/fremantle' },
                { label: 'South Perth', href: '/locations/south-perth' },
                { label: 'Joondalup', href: '/locations/joondalup' },
                { label: 'Midland', href: '/locations/midland' },
                { label: 'Claremont', href: '/locations/claremont' },
                { label: 'Canning Vale', href: '/locations/canning-vale' },
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
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider">Connect With Us</p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                  <a
                    href="https://www.linkedin.com/company/carencure-au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Care N Cure on LinkedIn"
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs"
                  >
                    <Linkedin className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--teal-accent)' }} />
                    <span>LinkedIn</span>
                  </a>
                  
                  <a
                    href="https://www.instagram.com/carencurenursing/?utm_source=ig_web_button_share_sheet"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Care N Cure on Instagram"
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current flex-shrink-0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--teal-accent)' }}>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span>Instagram</span>
                  </a>
                  
                  <a
                    href="https://wa.me/61481748516?text=Hi%20Care%20N%20Cure%2C%20I%27d%20like%20to%20enquire%20about%20your%20nursing%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Care N Cure on WhatsApp"
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0" style={{ color: 'var(--teal-accent)' }}>
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.489.002 9.961-4.47 9.964-9.96.002-2.66-1.023-5.158-2.884-7.02C16.49 1.76 13.992.73 11.33.73c-5.49 0-9.962 4.471-9.965 9.961-.001 1.93.52 3.473 1.503 5.062L1.87 21.08l5.46-1.432zM17.18 14.86c-.305-.153-1.802-.888-2.083-.99-.281-.102-.485-.153-.687.153-.202.305-.783.99-.96 1.194-.177.203-.355.228-.66.076-.305-.152-1.287-.475-2.451-1.513-.906-.808-1.517-1.807-1.695-2.112-.178-.305-.019-.47.133-.621.137-.136.305-.355.457-.533.153-.177.203-.305.305-.508.102-.203.05-.381-.026-.533-.076-.152-.687-1.656-.94-2.266-.247-.595-.499-.513-.687-.523-.178-.01-.381-.01-.584-.01-.203 0-.533.076-.812.381-.28.305-1.066 1.042-1.066 2.541s1.091 2.946 1.243 3.149c.153.203 2.15 3.284 5.207 4.603.727.314 1.294.5 1.737.641.73.232 1.393.197 1.917.12.584-.087 1.802-.736 2.056-1.447.253-.71.253-1.32.177-1.447-.076-.127-.28-.203-.584-.355z" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                  
                  <a
                    href="sms:+61481748516"
                    aria-label="Care N Cure via SMS"
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs"
                  >
                    <MessageSquare className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--teal-accent)' }} />
                    <span>SMS Message</span>
                  </a>
                </div>
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
                <span className="mx-2 text-white/20">|</span>
                <span className="text-white/40">
                  Developed by{' '}
                  <a
                    href="https://www.digitalproductsolutions.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white underline transition-colors"
                  >
                    Digital Product Solutions
                  </a>
                </span>
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
