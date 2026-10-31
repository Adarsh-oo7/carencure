'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { trackFormSubmit } from '@/lib/analytics'

const GUIDE_URL = 'https://carencure.com.au/support-at-home-guide'

const situations = [
  'Waiting for My Aged Care assessment',
  'Assessed — waiting for a Support at Home budget',
  'Already have Support at Home / HCP — want nursing',
  'Parent just discharged from hospital',
  'Just researching for now',
]

export function GuideLeadForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const fd = new FormData(e.currentTarget)
    const name = (fd.get('name') as string) || ''
    const email = (fd.get('email') as string) || ''
    const phone = (fd.get('phone') as string) || ''
    const suburb = (fd.get('suburb') as string) || ''
    const situation = (fd.get('situation') as string) || ''
    const callback = fd.get('callback') ? 'Yes' : 'No'

    trackFormSubmit('support_at_home_guide', 'Support at Home Guide', suburb, situation)

    try {
      await fetch('https://formsubmit.co/ajax/a9d6b96eba2c033545f0f8f196ac6e70', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `📘 Guide Lead: ${name || 'Family'} (${suburb || 'Perth'}) — callback: ${callback}`,
          _template: 'table',
          _captcha: 'false',
          _autoresponse: `Hi ${name || 'there'}, thank you for requesting the Care N Cure Support at Home family guide. You can read and bookmark it any time here: ${GUIDE_URL} — If you would like to talk it through with a Registered Nurse, call 1300 919 663 (Mon–Fri 9am–6pm AWST). Care N Cure Nursing Care Services, 2232B Albany Hwy, Gosnells WA 6110.`,
          'Full Name': name,
          email,
          'Phone Number': phone || 'Not provided',
          Suburb: suburb || 'Not provided',
          Situation: situation || 'Not specified',
          'Wants RN callback': callback,
          Source: 'Support at Home Guide page',
          'Submitted At': new Date().toLocaleString('en-AU', { timeZone: 'Australia/Perth' }),
        }),
      })
    } catch (err) {
      console.warn('Guide form network notice:', err)
    }
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center space-y-3 py-6" role="alert" aria-live="polite">
        <CheckCircle className="w-12 h-12 text-teal-accent mx-auto" />
        <h3 className="text-navy font-bold text-xl">Check your inbox</h3>
        <p className="text-body text-sm">
          We&apos;ve emailed you a link to this guide. If you asked for a callback, a Registered Nurse will be in touch within one business day.
        </p>
      </div>
    )
  }

  const input = 'w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-accent'

  return (
    <form onSubmit={handleSubmit} className="space-y-4" id="guide-lead-form">
      <input name="name" required placeholder="Your name *" className={input} id="guide-name" aria-label="Your name" />
      <input name="email" type="email" required placeholder="Email *" className={input} id="guide-email" aria-label="Email" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="phone" type="tel" placeholder="Phone (optional)" className={input} id="guide-phone" aria-label="Phone" />
        <input name="suburb" placeholder="Suburb" className={input} id="guide-suburb" aria-label="Suburb" />
      </div>
      <select name="situation" className={input} id="guide-situation" aria-label="Your situation" defaultValue="">
        <option value="" disabled>Where are you up to?</option>
        {situations.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <label className="flex items-start gap-2 text-sm text-body cursor-pointer">
        <input type="checkbox" name="callback" className="mt-1 accent-teal-600" id="guide-callback" />
        Yes, I&apos;d like a free call with a Registered Nurse to talk through our options.
      </label>
      <button
        type="submit"
        disabled={loading}
        id="guide-submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-teal-accent hover:bg-teal-dark text-navy font-bold px-5 py-3.5 rounded-xl transition-colors disabled:opacity-60"
      >
        <Send className="w-4 h-4" /> {loading ? 'Sending…' : 'Email Me the Guide'}
      </button>
      <p className="text-[11px] text-body/80 text-center">We only use your details to respond to this request. See our <a href="/privacy" className="underline">privacy policy</a>.</p>
    </form>
  )
}
