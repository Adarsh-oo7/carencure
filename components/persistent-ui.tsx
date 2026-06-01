'use client'

import { Phone } from 'lucide-react'

const PHONE_NUMBER = '0481 748 516'
const PHONE_HREF = 'tel:+61481748516'

export function PersistentUI() {
  return (
    <>
      {/* Floating phone button — mobile only, visible when scrolled */}
      <a
        href={PHONE_HREF}
        id="persistent-call-fab"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 shadow-2xl font-semibold text-sm md:hidden"
        style={{
          background: 'var(--teal-accent)',
          color: 'var(--navy-dark)',
          borderRadius: '9999px',
          padding: '0.75rem 1.25rem',
          minHeight: '52px',
          boxShadow: '0 4px 24px rgba(13,43,69,0.35)',
        }}
        aria-label={`Call Care N Cure: ${PHONE_NUMBER}`}
      >
        <Phone className="w-5 h-5 flex-shrink-0" />
        <span>Call Us Now</span>
      </a>
    </>
  )
}
