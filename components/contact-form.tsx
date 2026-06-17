'use client'

import { useState } from 'react'
import { Phone, Send } from 'lucide-react'

const PHONE_HREF = 'tel:1300919663'
const PHONE_NUMBER = '1300 919 663'

const serviceOptions = [
  'Post-Hospital Recovery Care',
  'Private Nursing at Home',
  'Registered Nurses Clinical care Services',
  'Support at home',
  'Homecare packages',
  'Wound Care at Home',
  'Medication Management',
  'Mobility & Rehabilitation Support',
  'Companion Care',
  'Not sure — need advice',
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // Placeholder: wire up to your form backend (e.g. Formspree, Netlify Forms)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
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
        <p className="text-body text-sm">
          We aim to respond within 2 hours during business hours. For urgent care needs, please{' '}
          <a
            href={PHONE_HREF}
            className="font-semibold text-navy underline cursor-pointer inline font-inherit"
            style={{ minHeight: 'auto' }}
          >
            call us directly
          </a>.
        </p>
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
            placeholder="e.g. Nedlands"
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

      <p className="text-sm text-center" style={{ color: 'var(--text-muted)' }}>
        Prefer to call?{' '}
        <a
          href={PHONE_HREF}
          className="font-semibold text-navy underline cursor-pointer inline font-inherit"
          style={{ minHeight: 'auto' }}
        >
          Call Us directly
        </a>{' '}
        — we answer every call.
      </p>
    </form>
  )
}
