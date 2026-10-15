'use client'

import { useState } from 'react'
import { Phone, Send } from 'lucide-react'
import { trackFormSubmit, trackPhoneClick } from '@/lib/analytics'

const PHONE_HREF = 'tel:1300919663'
const PHONE_NUMBER = '1300 919 663'

const serviceOptions = [
  'Aged Care at Home / Elderly Support',
  'Private Nursing at Home',
  'NDIS Nursing & Clinical Support',
  'Post-Hospital Recovery Care',
  'Home Care Packages (HCP) Guidance',
  'Support at Home Program',
  'Registered Nurses Clinical Care',
  'Wound Care at Home',
  'Medication Management',
  'Personal Care Assistance',
  'Physiotherapy at Home',
  'Nutritionist & Dietetics at Home',
  'Mobility & Rehabilitation Support',
  'Companion Care',
  'Not sure — need clinical advice',
]

const fundingOptions = [
  'Private / Self-Funded',
  'Home Care Package (HCP)',
  'Support at Home Program',
  'NDIS (Self or Plan Managed)',
  'DVA / Veterans Affairs',
  'Hospital Transition / Discharge',
  'Not sure / Need guidance',
]

interface ContactFormProps {
  title?: string
  subtitle?: string
  defaultService?: string
  defaultSuburb?: string
}

export function ContactForm({
  title,
  subtitle,
  defaultService = '',
  defaultSuburb = '',
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submittedData, setSubmittedData] = useState<{
    name: string
    suburb: string
    service: string
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    const name = (formData.get('name') as string) || ''
    const phone = (formData.get('phone') as string) || ''
    const suburb = (formData.get('suburb') as string) || defaultSuburb
    const service = (formData.get('service') as string) || defaultService
    const funding = (formData.get('funding') as string) || ''
    const message = (formData.get('message') as string) || ''

    trackFormSubmit('contact_form', service, suburb, funding)

    try {
      await fetch('https://formsubmit.co/ajax/a9d6b96eba2c033545f0f8f196ac6e70', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `🚨 New Care Enquiry: ${name || 'Client'} - ${service || 'Home Care'} (${suburb || 'Perth'})`,
          _template: 'table',
          _captcha: 'false',
          _cc: 'hello@carencure.com.au',
          'Full Name': name,
          'Phone Number': phone,
          'Suburb / Location': suburb || 'Perth Metro',
          'Service Needed': service || 'Aged Care & In-Home Nursing',
          'Funding Pathway': funding || 'Not specified',
          'Message / Details': message || 'None provided',
          'Submitted At': new Date().toLocaleString('en-AU', { timeZone: 'Australia/Perth' }),
        }),
      })
    } catch (err) {
      console.warn('Form submission network notice:', err)
    }

    setSubmittedData({ name, suburb, service })
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    const waText = encodeURIComponent(
      `Hi Care N Cure, I just submitted an enquiry for ${submittedData?.name || 'care'} in ${
        submittedData?.suburb || 'Perth'
      }${submittedData?.service ? ` regarding ${submittedData.service}` : ''}. Would love to speak with a Registered Nurse coordinator.`
    )
    const waUrl = `https://wa.me/61481748516?text=${waText}`

    return (
      <div
        className="card-base p-8 text-center flex flex-col items-center gap-4 bg-white"
        role="alert"
        aria-live="polite"
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold"
          style={{ background: 'var(--teal)', color: 'var(--navy)' }}
        >
          ✓
        </div>
        <h3 className="text-navy font-bold text-xl">Thank you — we&apos;ll be in touch soon</h3>
        <p className="text-body text-sm max-w-md">
          Your enquiry has been logged directly with our Perth Registered Nurse intake team. We aim to respond within 2 hours during business hours.
        </p>

        <div className="w-full flex flex-col sm:flex-row gap-3 mt-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 font-semibold py-3 px-4 rounded-xl text-white transition-all shadow-sm"
            style={{ backgroundColor: '#25D366' }}
          >
            <span>💬 Chat on WhatsApp</span>
          </a>
          <a
            href={PHONE_HREF}
            className="flex-1 flex items-center justify-center gap-2 font-semibold py-3 px-4 rounded-xl text-white transition-all shadow-sm"
            style={{ backgroundColor: 'var(--navy)' }}
          >
            <Phone className="w-4 h-4" />
            <span>Call 1300 919 663</span>
          </a>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card-base p-8 flex flex-col gap-5 bg-white"
      id="contact-form"
      aria-label="Contact enquiry form"
      noValidate
    >
      {(title || subtitle) && (
        <div className="flex flex-col gap-1.5 border-b border-border pb-4 mb-2">
          {title && <h3 className="text-navy text-xl font-bold leading-tight">{title}</h3>}
          {subtitle && <p className="text-body text-xs leading-relaxed">{subtitle}</p>}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="text-sm font-semibold text-navy">
            Your name <span aria-hidden="true" style={{ color: '#C0392B' }}>*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="e.g. Sarah Johnson"
            className="border border-border rounded-lg px-4 py-3 text-body bg-white focus:outline-none focus:ring-2 w-full"
            style={{ fontSize: '1rem', minHeight: '48px' }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-phone" className="text-sm font-semibold text-navy">
            Phone number <span aria-hidden="true" style={{ color: '#C0392B' }}>*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            placeholder="e.g. 0412 345 678"
            className="border border-border rounded-lg px-4 py-3 text-body bg-white focus:outline-none focus:ring-2 w-full"
            style={{ fontSize: '1rem', minHeight: '48px' }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-suburb" className="text-sm font-semibold text-navy">
            Your suburb
          </label>
          <input
            id="contact-suburb"
            name="suburb"
            type="text"
            defaultValue={defaultSuburb}
            placeholder="e.g. Harrisdale, Nedlands"
            className="border border-border rounded-lg px-4 py-3 text-body bg-white focus:outline-none focus:ring-2 w-full"
            style={{ fontSize: '1rem', minHeight: '48px' }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-service" className="text-sm font-semibold text-navy">
            Service needed
          </label>
          <select
            id="contact-service"
            name="service"
            defaultValue={defaultService}
            className="border border-border rounded-lg px-4 py-3 text-body bg-white focus:outline-none focus:ring-2 w-full"
            style={{ fontSize: '1rem', minHeight: '48px' }}
          >
            <option value="">Select a service…</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-funding" className="text-sm font-semibold text-navy">
          Funding Pathway <span className="text-xs font-normal text-slate-500">(Optional)</span>
        </label>
        <select
          id="contact-funding"
          name="funding"
          defaultValue=""
          className="border border-border rounded-lg px-4 py-3 text-body bg-white focus:outline-none focus:ring-2 w-full"
          style={{ fontSize: '1rem', minHeight: '48px' }}
        >
          <option value="">Select funding type (e.g. HCP, NDIS, Private, DVA)…</option>
          {fundingOptions.map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-semibold text-navy">
          Tell us a bit about the situation
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="e.g. My mum was just discharged from Fiona Stanley after hip surgery and needs daily wound care and medication oversight…"
          className="border border-border rounded-lg px-4 py-3 text-body bg-white focus:outline-none focus:ring-2 w-full resize-none"
          style={{ fontSize: '1rem' }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 font-semibold py-3.5 px-6 rounded-xl transition-all w-full"
        style={{
          background: loading ? 'var(--text-muted)' : 'var(--navy)',
          color: 'white',
          fontSize: '1rem',
          minHeight: '52px',
        }}
        id="contact-submit-btn"
      >
        {loading ? (
          'Sending…'
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Enquiry
          </>
        )}
      </button>

      <div className="pt-2 border-t border-border/60 flex flex-col gap-2.5 text-xs text-body/80">
        <div className="flex items-center justify-between gap-2 bg-teal-50/60 p-2.5 rounded-lg border border-teal-100/60">
          <span className="font-semibold text-teal-800 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            24–48-Hour Assessment Response
          </span>
          <span className="text-navy font-medium">Direct RN Intake</span>
        </div>
        
        {/* Emergency disclaimer required for healthcare compliance */}
        <p className="text-[11px] text-amber-800 bg-amber-50/80 p-2.5 rounded-lg border border-amber-200/60 leading-relaxed">
          <strong>Medical Notice:</strong> This form is not for emergencies. If someone is seriously unwell or in immediate danger, call <strong>000</strong> or contact your treating medical service.
        </p>

        {/* Privacy notice */}
        <p className="text-[11px] text-body/70 text-center leading-relaxed">
          <strong>Privacy Notice:</strong> We collect your contact details and a general summary of care requirements to arrange an initial clinical assessment. For privacy protection, please do not include sensitive medical records in this initial web form; detailed clinical discharge summaries can be provided directly to your Registered Nurse coordinator during intake. By submitting, you agree to our <a href="/privacy" className="underline hover:text-navy">privacy policy</a>.
        </p>

        <p className="text-center text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
          Prefer to call?{' '}
          <a
            href={PHONE_HREF}
            onClick={() => trackPhoneClick('contact_form_footer')}
            className="font-bold text-navy underline cursor-pointer inline font-inherit"
            style={{ minHeight: 'auto' }}
          >
            Call 1300 919 663
          </a>{' '}
          — speak directly with a Registered Nurse.
        </p>
      </div>
    </form>
  )
}
