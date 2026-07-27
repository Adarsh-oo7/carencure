import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { Phone, Mail, MapPin, Clock, ShieldCheck, Navigation } from 'lucide-react'
import { MedicalBusinessSchema } from '@/components/schema'

export const metadata: Metadata = {
  title: {
    absolute: 'Contact Care N Cure | Book Free Nursing Assessment | Perth',
  },
  description: 'Book a free care assessment with a registered nurse. Call 1300 919 663 or enquire online. 50km Perth service radius with zero travel charges.',
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

              {/* 50km Travel Guarantee Badge */}
              <div className="p-4 bg-teal-subtle/50 border border-teal-border rounded-2xl flex items-center gap-3">
                <Navigation className="w-6 h-6 text-teal-accent shrink-0" />
                <div>
                  <h4 className="font-bold text-navy text-sm">50km Service Radius — 0 Transportation Charges</h4>
                  <p className="text-body text-xs mt-0.5">We cover all Perth metropolitan suburbs within 50km with zero travel surcharges for clients.</p>
                </div>
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
                    <h3 className="text-navy text-lg font-bold">Practice Address & Service Radius</h3>
                    <p className="text-navy font-semibold text-sm mt-1">15 Rockefeller Way, Harrisdale WA 6112</p>
                    <p className="text-body text-xs mt-0.5">Serving Harrisdale, Nedlands, Subiaco, Gosnells, Armadale, Rockingham, Joondalup, Midland, Fremantle, and all Perth metro suburbs within 50km.</p>
                  </div>
                </div>

                {/* Embedded Map */}
                <div className="pt-2">
                  <h4 className="text-navy font-bold text-sm uppercase tracking-wider mb-3">Our Practice Location</h4>
                  <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.6854087778297!2d115.92314007624874!3d-32.131797273939895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b2039026a9c40ab%3A0x33a1d36ebabfec5b!2sCARE%20N%20CURE%20NURSING%20CARE%20SERVICES!5e0!3m2!1sen!2sin!4v1785132131562!5m2!1sen!2sin"
                      width="100%"
                      height="260"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="Care N Cure Nursing Care Services Perth Map"
                    />
                  </div>
                </div>

              </div>

              {/* Security Shield Card */}
              <div className="card-base p-6 bg-surface border border-border flex gap-4 items-start">
                <ShieldCheck className="w-6 h-6 text-teal-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-navy font-bold text-sm">Clinical Duty of Care</h4>
                  <p className="text-body text-xs mt-1 leading-relaxed">
                    Care N Cure Nursing Care Services (ABN 87 152 479 362) is a registered healthcare business in Western Australia. All professional patient consultations and medical data are secured in strict compliance with the Australian Privacy Act 1988.
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
