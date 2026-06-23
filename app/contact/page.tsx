import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react'
import { MedicalBusinessSchema } from '@/components/schema'

export const metadata: Metadata = {
  title: 'Contact | The Nurse Who Knows You Perth WA',
  description: 'Speak directly with our registered nurse coordinators in Perth. Call 1300 919 663, or send an enquiry today.',
  alternates: { canonical: 'https://carencure.com.au/contact' },
}

const EMAIL = 'hello@carencure.com.au'

export default function ContactPage() {
  return (
    <>
      <MedicalBusinessSchema />

      <PageHeader
        title="Contact Us"
        subtitle="Speak directly with a registered nurse. No call centres, just professional guidance."
        breadcrumbItems={[{ name: 'Contact', href: '/contact' }]}
        label="Get in Touch"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details (Left Column) */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <p className="section-label mb-2">Perth Nursing Office</p>
                <h2 className="text-navy text-3xl font-bold">We are ready to support your family</h2>
                <div className="section-divider" />
                <p className="text-body text-base leading-relaxed mt-4">
                  Whether your family member is recovering from surgery, managing a chronic illness, or preparing for hospital discharge, we are available to answer your questions and perform a clinical consult.
                </p>
              </div>

              <div className="space-y-6">
                
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-teal-accent flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-navy text-lg font-bold">Call Us Directly</h3>
                    <p className="text-body text-sm mt-1">Speak directly to a registered nurse.</p>
                    <div className="flex flex-col gap-2 mt-2">
                      <a href="tel:1300919663" className="text-navy font-bold text-lg hover:text-teal-accent transition-colors block">
                        1300 919 663
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-teal-accent flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-navy text-lg font-bold">Email Our Practice</h3>
                    <p className="text-body text-sm mt-1">We respond to every digital enquiry within 24 hours.</p>
                    <a href={`mailto:${EMAIL}`} className="text-navy font-bold hover:text-teal-accent transition-colors">
                      {EMAIL}
                    </a>
                  </div>
                </div>

                {/* Service Area */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-teal-accent flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-navy text-lg font-bold">Service Area</h3>
                    <p className="text-body text-sm mt-1">Serving Nedlands, Subiaco, Gosnells, Armadale, Rockingham, and all Perth metro.</p>
                  </div>
                </div>

                {/* Direct Messaging & Socials */}
                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <h4 className="text-navy font-bold text-sm uppercase tracking-wider">Direct Messaging & Socials</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/61481748516?text=Hi%20Care%20N%20Cure%2C%20I%20would%20like%20to%20enquire%20about%20your%20nursing%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 p-3.5 bg-slate-50 hover:bg-emerald-50/50 border border-slate-150 rounded-2xl transition-all duration-250 group shadow-xs"
                      style={{ minHeight: '64px' }}
                    >
                      <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-200">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.489.002 9.961-4.47 9.964-9.96.002-2.66-1.023-5.158-2.884-7.02C16.49 1.76 13.992.73 11.33.73c-5.49 0-9.962 4.471-9.965 9.961-.001 1.93.52 3.473 1.503 5.062L1.87 21.08l5.46-1.432zM17.18 14.86c-.305-.153-1.802-.888-2.083-.99-.281-.102-.485-.153-.687.153-.202.305-.783.99-.96 1.194-.177.203-.355.228-.66.076-.305-.152-1.287-.475-2.451-1.513-.906-.808-1.517-1.807-1.695-2.112-.178-.305-.019-.47.133-.621.137-.136.305-.355.457-.533.153-.177.203-.305.305-.508.102-.203.05-.381-.026-.533-.076-.152-.687-1.656-.94-2.266-.247-.595-.499-.513-.687-.523-.178-.01-.381-.01-.584-.01-.203 0-.533.076-.812.381-.28.305-1.066 1.042-1.066 2.541s1.091 2.946 1.243 3.149c.153.203 2.15 3.284 5.207 4.603.727.314 1.294.5 1.737.641.73.232 1.393.197 1.917.12.584-.087 1.802-.736 2.056-1.447.253-.71.253-1.32.177-1.447-.076-.127-.28-.203-.584-.355z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-navy text-sm leading-tight">WhatsApp Chat</h5>
                        <p className="text-[11px] text-slate-500 mt-1 leading-none">+61 481 748 516</p>
                      </div>
                    </a>

                    {/* SMS Messages */}
                    <a
                      href="sms:+61481748516"
                      className="flex items-center gap-3.5 p-3.5 bg-slate-50 hover:bg-sky-50/50 border border-slate-150 rounded-2xl transition-all duration-250 group shadow-xs"
                      style={{ minHeight: '64px' }}
                    >
                      <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-200">
                        <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-navy text-sm leading-tight">SMS Messages</h5>
                        <p className="text-[11px] text-slate-500 mt-1 leading-none">Text coordinators directly</p>
                      </div>
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/carencurenursing/?utm_source=ig_web_button_share_sheet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 p-3.5 bg-slate-50 hover:bg-pink-50/50 border border-slate-150 rounded-2xl transition-all duration-250 group sm:col-span-2 shadow-xs"
                      style={{ minHeight: '64px' }}
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-200" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-navy text-sm leading-tight">Instagram Feed</h5>
                        <p className="text-[11px] text-slate-500 mt-1 leading-none">Follow updates @carencurenursing</p>
                      </div>
                    </a>
                  </div>
                </div>

              </div>

              {/* Security Shield Card */}
              <div className="card-base p-6 bg-surface border border-border flex gap-4 items-start">
                <ShieldCheck className="w-6 h-6 text-teal-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-navy font-bold text-sm">Clinical Duty of Care</h4>
                  <p className="text-body text-xs mt-1 leading-relaxed">
                    The Nurse Who Knows You (registered as Care N Cure Nursing Care Services, ABN 87 152 479 362) is a registered healthcare business in Western Australia. All professional patient consultations and medical data are secured in strict compliance with the Australian Privacy Act 1988.
                  </p>
                </div>
              </div>

            </div>

            {/* Contact Form (Right Column) */}
            <div className="lg:col-span-6">
              <div className="card-base overflow-hidden">
                <div className="p-1 bg-teal-accent" />
                <ContactForm
                  title="Send us a message"
                  subtitle="Provide your details below, and one of our registered nurse founders will review your enquiry and contact you personally."
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
