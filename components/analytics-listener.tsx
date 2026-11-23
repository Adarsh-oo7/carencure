'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackPhoneClick, trackWhatsAppClick, trackSmsClick, trackFormStart, trackEvent } from '@/lib/analytics'

const ALREADY_TRACKED_IDS = new Set(['hero-call-cta', 'cta-call-btn', 'cta-whatsapp-btn'])

export function AnalyticsListener() {
  const pathname = usePathname()

  useEffect(() => {
    const startedForms = new Set<string>()

    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null
      const anchor = target?.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href') || ''
      const id = anchor.getAttribute('id') || ''
      if (id && ALREADY_TRACKED_IDS.has(id)) return
      if (anchor.dataset.gaTracked === 'true') return

      const locationTag = id || pathname || 'site'

      if (href.startsWith('tel:')) {
        trackPhoneClick(locationTag)
      } else if (href.includes('wa.me/')) {
        trackWhatsAppClick(locationTag)
      } else if (href.startsWith('sms:')) {
        trackSmsClick(locationTag)
      } else if (href.includes('share.google')) {
        trackEvent('google_review_click', { click_location: locationTag })
      }
    }

    function handleFocusIn(event: FocusEvent) {
      const target = event.target as HTMLElement | null
      const form = target?.closest('form')
      if (!form) return

      const formId = form.getAttribute('id') || 'contact_form'
      if (startedForms.has(formId)) return
      startedForms.add(formId)
      trackFormStart(formId)
    }

    document.addEventListener('click', handleClick)
    document.addEventListener('focusin', handleFocusIn)
    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('focusin', handleFocusIn)
    }
  }, [pathname])

  return null
}
