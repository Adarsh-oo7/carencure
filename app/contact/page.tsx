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

                {/* Opening Hours */}
                {/* <div className="flex gap-4">
                  <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-teal-accent flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-navy text-lg font-bold">Business Hours</h3>
                    <p className="text-body text-sm mt-1">Our telephones are monitored for client care assessments during:</p>
                    <p className="text-navy font-semibold text-sm">Monday – Friday: 8:00 AM – 6:00 PM</p>
                    <p className="text-navy font-semibold text-sm">Saturday: 9:00 AM – 1:00 PM</p>
                    <p className="text-muted-brand text-xs italic">Closed Sundays & Public Holidays</p>
                  </div>
                </div> */}

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
