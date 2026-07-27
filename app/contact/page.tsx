import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { Phone, Mail, MapPin, ShieldCheck, Navigation, MessageCircle, Send, Linkedin, Instagram, Clock, ArrowRight } from 'lucide-react'
import { MedicalBusinessSchema } from '@/components/schema'

export const metadata: Metadata = {
  title: {
    absolute: 'Contact Care N Cure | Direct Nurse Reach Out | Perth',
  },
  description: 'Connect directly with an AHPRA registered nurse in Perth via Phone, WhatsApp, SMS, Instagram, or Email. 50km service radius with zero travel charges.',
  alternates: { canonical: 'https://carencure.com.au/contact' },
}

const EMAIL = 'hello@carencure.com.au'
const PHONE = '1300 919 663'
const PHONE_HREF = 'tel:1300919663'
const WHATSAPP_HREF = 'https://wa.me/61481748516?text=Hi%20Care%20N%20Cure%2C%20I%20would%20like%20to%20enquire%20about%20your%20nursing%20services.'
const SMS_HREF = 'sms:+61481748516'
const INSTAGRAM_HREF = 'https://www.instagram.com/carencurenursing/?utm_source=ig_web_button_share_sheet'
const LINKEDIN_HREF = 'https://www.linkedin.com/company/care-n-cure-nursing-care-services/'

export default function ContactPage() {
  return (
    <>
      <MedicalBusinessSchema />

      <PageHeader
        title="Direct Reach Out & Contact Hub"
        subtitle="Connect instantly with an AHPRA Registered Nurse Coordinator via Call, WhatsApp, SMS, or Socials."
        breadcrumbItems={[{ name: 'Contact', href: '/contact' }]}
        label="Instant Direct Communication"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Communication Hub */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="section-label mb-2">Instant Clinical Connect</p>
                <h1 className="text-navy text-3xl md:text-4xl font-bold leading-tight">
                  Reach Out Directly to Our Nursing Team
                </h1>
                <div className="section-divider my-4" />
                <p className="text-body text-base leading-relaxed">
                  No call centres or delayed ticketing systems. Speak or message directly with our registered nurse founders, <strong>Jinu & Zuhair</strong>, for immediate clinical guidance, hospital discharge support, or care bookings.
                </p>
              </div>

              {/* 50km Zero Travel Guarantee Banner */}
              <div className="p-4 bg-teal-subtle/50 border border-teal-border rounded-2xl flex items-center gap-3 shadow-xs">
                <Navigation className="w-6 h-6 text-teal-accent shrink-0" />
                <div>
                  <h4 className="font-bold text-navy text-sm">50km Service Radius — 0 Transportation Charges</h4>
                  <p className="text-body text-xs mt-0.5">We cover all Perth metropolitan suburbs within 50km with zero travel surcharges for clients.</p>
                </div>
              </div>

              {/* Direct Reach Out Action Grid */}
              <div className="space-y-4 pt-2">
                <h3 className="text-navy text-xl font-bold">Choose Your Preferred Direct Channel</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Direct Call Button */}
                  <a
                    href={PHONE_HREF}
                    className="p-5 rounded-2xl border-2 border-teal-accent bg-teal-subtle/30 hover:bg-teal-subtle transition-all duration-200 flex items-center gap-4 group shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-teal-accent text-navy-dark flex items-center justify-center font-bold shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-teal-text">Immediate Call</span>
                      <h4 className="text-navy text-lg font-bold leading-tight">Call 1300 919 663</h4>
                      <p className="text-body text-xs mt-0.5">Speak with an AHPRA RN</p>
                    </div>
                  </a>

                  {/* WhatsApp Instant Chat */}
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-100/50 transition-all duration-200 flex items-center gap-4 group shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">Instant Chat</span>
                      <h4 className="text-navy text-lg font-bold leading-tight">WhatsApp Chat</h4>
                      <p className="text-body text-xs mt-0.5">+61 481 748 516</p>
                    </div>
                  </a>

                  {/* SMS Texting */}
                  <a
                    href={SMS_HREF}
                    className="p-5 rounded-2xl border border-sky-200 bg-sky-50/50 hover:bg-sky-100/50 transition-all duration-200 flex items-center gap-4 group shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Send className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-sky-700">Direct SMS</span>
                      <h4 className="text-navy text-lg font-bold leading-tight">Text Us (SMS)</h4>
                      <p className="text-body text-xs mt-0.5">Mobile: 0481 748 516</p>
                    </div>
                  </a>

                  {/* Direct Email */}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="p-5 rounded-2xl border border-slate-200 bg-surface hover:bg-slate-100/80 transition-all duration-200 flex items-center gap-4 group shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Email Consult</span>
                      <h4 className="text-navy text-base font-bold leading-tight truncate">{EMAIL}</h4>
                      <p className="text-body text-xs mt-0.5">24-hour digital response</p>
                    </div>
                  </a>

                  {/* Instagram DM */}
                  <a
                    href={INSTAGRAM_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl border border-pink-200 bg-pink-50/40 hover:bg-pink-100/50 transition-all duration-200 flex items-center gap-4 group shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
                      <Instagram className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-pink-700">Social Media</span>
                      <h4 className="text-navy text-lg font-bold leading-tight">Instagram DM</h4>
                      <p className="text-body text-xs mt-0.5">@carencurenursing</p>
                    </div>
                  </a>

                  {/* LinkedIn Professional Network */}
                  <a
                    href={LINKEDIN_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl border border-blue-200 bg-blue-50/40 hover:bg-blue-100/50 transition-all duration-200 flex items-center gap-4 group shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700">Professional</span>
                      <h4 className="text-navy text-lg font-bold leading-tight">LinkedIn Page</h4>
                      <p className="text-body text-xs mt-0.5">Connect with RN Founders</p>
                    </div>
                  </a>

                </div>
              </div>

              {/* Office Location & Map */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-teal-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="text-navy text-lg font-bold">Practice Location</h3>
                    <p className="text-navy font-semibold text-sm mt-0.5">15 Rockefeller Way, Harrisdale WA 6112</p>
                    <p className="text-body text-xs mt-0.5">Serving Harrisdale, Nedlands, Subiaco, Gosnells, Armadale, Rockingham, Joondalup, Midland, Fremantle, and all Perth metro suburbs within 50km.</p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.6854087778297!2d115.92314007624874!3d-32.131797273939895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b2039026a9c40ab%3A0x33a1d36ebabfec5b!2sCARE%20N%20CURE%20NURSING%20CARE%20SERVICES!5e0!3m2!1sen!2sin!4v1785132131562!5m2!1sen!2sin"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Care N Cure Nursing Care Services Perth Location Map"
                  />
                </div>
              </div>

              {/* Security Shield Card */}
              <div className="card-base p-6 bg-surface border border-border flex gap-4 items-start">
                <ShieldCheck className="w-6 h-6 text-teal-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-navy font-bold text-sm">Clinical Duty of Care & Privacy</h4>
                  <p className="text-body text-xs mt-1 leading-relaxed">
                    Care N Cure Nursing Care Services (ABN 87 152 479 362) is a registered healthcare business in Western Australia. All professional patient consultations and medical data are secured in strict compliance with the Australian Privacy Act 1988.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Direct Callback / Booking Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <div className="card-base overflow-hidden border border-border shadow-sm">
                  <div className="p-1.5 bg-teal-accent" />
                  <ContactForm
                    title="Request a Care Callback"
                    subtitle="If you prefer us to contact you, leave your details below and a Registered Nurse Coordinator will call you back."
                  />
                </div>

                <div className="bg-surface p-6 rounded-2xl border border-border space-y-3">
                  <div className="flex items-center gap-2 text-navy font-bold text-sm">
                    <Clock className="w-4 h-4 text-teal-accent" />
                    <span>Rapid Care Dispatch</span>
                  </div>
                  <p className="text-body text-xs leading-relaxed">
                    In-home nursing care assessments and visits can commence within <strong>24 to 48 hours</strong> of booking across all Perth suburbs. Emergency discharge support available.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
