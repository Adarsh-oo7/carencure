'use client'

import { useState } from 'react'
import { Star, ExternalLink, MessageSquare, Send, CheckCircle2, Copy, Sparkles, UserCheck, Shield } from 'lucide-react'

interface ReviewFunnelProps {
  googleReviewUrl: string
}

export function ReviewFunnel({ googleReviewUrl }: ReviewFunnelProps) {
  const [rating, setRating] = useState<number>(5)
  const [hoverRating, setHoverRating] = useState<number>(0)
  const [copiedTip, setCopiedTip] = useState<string | null>(null)

  // Staff generator state
  const [clientName, setClientName] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [showStaffTool, setShowStaffTool] = useState(false)

  const reviewTips = [
    'The registered nurse arrived punctually and explained our wound care clearly.',
    'Care N Cure made our transition home from the hospital smooth and safe.',
    'Compassionate, respectful in-home nursing support in Perth.',
    'Highly recommend for NDIS clinical nursing and medication oversight.',
  ]

  const handleCopyTip = (tip: string) => {
    navigator.clipboard.writeText(tip)
    setCopiedTip(tip)
    setTimeout(() => setCopiedTip(null), 2500)
  }

  const cleanPhone = clientPhone.replace(/\s+/g, '').replace(/^0/, '+61')
  const reviewMessage = `Hi ${clientName ? clientName : 'there'}, thank you for trusting Care N Cure with your home nursing care. Would you mind sharing a quick review of your experience on Google? It means the world to our nursing team and helps local Perth families find trusted care: https://carencure.com.au/review`

  const whatsappUrl = `https://wa.me/${cleanPhone.replace('+', '')}?text=${encodeURIComponent(reviewMessage)}`
  const smsUrl = `sms:${cleanPhone}?&body=${encodeURIComponent(reviewMessage)}`

  return (
    <div className="space-y-8">
      {/* Primary Card */}
      <div className="card-base p-8 md:p-10 text-center bg-white border border-border shadow-md">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-accent/10 text-teal-accent border border-teal-accent/20 mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Quick Google Review (Takes 30 Seconds)
        </span>
        <h2 className="text-navy text-2xl md:text-3xl font-black mb-3">
          How would you rate your experience?
        </h2>
        <p className="text-body text-sm max-w-lg mx-auto mb-6">
          Your feedback helps other Western Australian seniors, participants, and families find high-quality registered nurse care at home.
        </p>

        {/* Interactive Star Rating */}
        <div className="flex justify-center items-center gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1 transition-transform hover:scale-110 focus:outline-none"
              aria-label={`Rate ${star} stars`}
            >
              <Star
                className={`w-10 h-10 transition-colors ${
                  (hoverRating || rating) >= star
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-slate-200 fill-slate-100'
                }`}
              />
            </button>
          ))}
        </div>

        {rating >= 4 ? (
          <div className="animate-in fade-in duration-300">
            <p className="text-emerald-700 font-semibold text-sm mb-4">
              Thank you so much! Click below to open Google and publish your review:
            </p>
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-navy hover:bg-navy-dark text-white font-bold text-base shadow-lg hover:shadow-xl transition-all group"
            >
              <Star className="w-5 h-5 fill-amber-400 text-amber-400 group-hover:rotate-12 transition-transform" />
              Write Google Review Now
              <ExternalLink className="w-4 h-4 text-teal-accent" />
            </a>
            <p className="text-[11px] text-slate-400 mt-2">
              Opens directly in Google Maps / Google Reviews
            </p>
          </div>
        ) : (
          <div className="animate-in fade-in duration-300 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-left max-w-md mx-auto">
            <p className="font-bold text-navy text-sm mb-1">We value your honest feedback</p>
            <p className="text-xs text-amber-900 leading-relaxed mb-3">
              We strive for exceptional nursing standards. Please let our Clinical Director know directly so we can resolve any issues right away:
            </p>
            <div className="flex gap-2">
              <a
                href="tel:1300919663"
                className="px-3 py-1.5 bg-navy text-white text-xs font-bold rounded-lg hover:bg-navy-dark transition-colors"
              >
                Call 1300 919 663
              </a>
              <a
                href="mailto:hello@carencure.com.au?subject=Client%20Feedback"
                className="px-3 py-1.5 bg-white border border-amber-300 text-navy text-xs font-semibold rounded-lg hover:bg-amber-100 transition-colors"
              >
                Email Management
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Thought Starters / Tips */}
      <div className="card-base p-6 bg-surface border border-border">
        <h3 className="text-navy font-bold text-base mb-2 flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-teal-accent" /> Helpful ideas for your review
        </h3>
        <p className="text-xs text-body mb-4">
          Unsure what to write? Mentioning your Perth suburb or the type of nursing care (e.g. wound care, hospital recovery, NDIS) helps other families find us:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {reviewTips.map((tip, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-white border border-border flex items-start justify-between gap-3 text-xs text-slate-700 hover:border-teal-accent/40 transition-colors"
            >
              <span className="italic leading-relaxed">“{tip}”</span>
              <button
                type="button"
                onClick={() => handleCopyTip(tip)}
                className="shrink-0 text-slate-400 hover:text-teal-accent p-1 transition-colors"
                title="Copy text to clipboard"
              >
                {copiedTip === tip ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Staff & Nurse Referral Request Tool */}
      <div className="p-6 rounded-2xl bg-teal-subtle/30 border border-teal-border">
        <button
          type="button"
          onClick={() => setShowStaffTool(!showStaffTool)}
          className="w-full flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-2.5">
            <UserCheck className="w-5 h-5 text-teal-accent" />
            <div>
              <p className="text-sm font-bold text-navy">Care N Cure Staff & Nurse Tool</p>
              <p className="text-xs text-body">
                Send a 1-tap review invite to a satisfied client via WhatsApp or SMS.
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-teal-accent hover:underline">
            {showStaffTool ? 'Hide Tool' : 'Open Invite Tool'}
          </span>
        </button>

        {showStaffTool && (
          <div className="mt-5 pt-4 border-t border-teal-border space-y-4 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Client / Family First Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Margaret"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 bg-white text-navy focus:outline-none focus:ring-1 focus:ring-teal-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile Number
                </label>
                <input
                  type="text"
                  placeholder="e.g. 0412 345 678"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 bg-white text-navy focus:outline-none focus:ring-1 focus:ring-teal-accent"
                />
              </div>
            </div>

            <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-600">
              <span className="font-semibold text-navy">Message preview: </span>
              {reviewMessage}
            </div>

            <div className="flex flex-wrap gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
              >
                <Send className="w-3.5 h-3.5" /> Send via WhatsApp
              </a>
              <a
                href={smsUrl}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-navy hover:bg-navy-dark text-white text-xs font-bold transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" /> Send via SMS (Mobile)
              </a>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(reviewMessage)
                  alert('Message copied to clipboard!')
                }}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
              >
                <Copy className="w-3.5 h-3.5" /> Copy Message
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
