'use client'

// GA4 conversion tracking helper for Care N Cure
// Safely checks window.gtag before dispatching custom events

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

// Predefined safe category mappings (avoid free-text medical details in GA4)
const SAFE_SERVICE_MAP: Record<string, string> = {
  'post-hospital': 'post-hospital',
  'post-hospital recovery care': 'post-hospital',
  'private nursing': 'private-nursing',
  'private nursing at home': 'private-nursing',
  'community nursing': 'community-nursing',
  'community nursing care': 'community-nursing',
  'registered nurses clinical care services': 'clinical-nursing',
  'support at home': 'support-at-home',
  'homecare packages': 'hcp-funding',
  'wound care': 'wound-care',
  'wound care at home': 'wound-care',
  'medication management': 'medication-support',
  'mobility & rehabilitation support': 'mobility-support',
  'companion care': 'companion-care',
}

function sanitizeService(service?: string): string {
  if (!service) return 'general-enquiry'
  const normalized = service.toLowerCase().trim()
  return SAFE_SERVICE_MAP[normalized] || 'general-care'
}

function sanitizeLocation(location?: string): string {
  if (!location) return 'perth-metro'
  // Only allow lowercase alphanumeric characters, no free text, notes, or addresses
  const clean = location.toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 30)
  return clean || 'perth-metro'
}

export function trackPhoneClick(location: string = 'header') {
  trackEvent('phone_click', {
    event_category: 'conversion',
    event_label: '1300919663',
    click_location: sanitizeLocation(location),
  })
}

export function trackWhatsAppClick(location: string = 'unknown') {
  trackEvent('whatsapp_click', {
    event_category: 'conversion',
    click_location: sanitizeLocation(location),
  })
}

export function trackSmsClick(location: string = 'unknown') {
  trackEvent('sms_click', {
    event_category: 'conversion',
    click_location: sanitizeLocation(location),
  })
}

export function trackFormStart(formName: string = 'contact_form') {
  trackEvent('form_start', {
    form_name: formName,
  })
}

export function trackFormSubmit(formName: string = 'contact_form', rawService?: string, rawSuburb?: string) {
  // Only send high-level broad categories, NEVER free-text messages, medical notes, or personal identifiers
  trackEvent('form_submit', {
    form_name: formName,
    service_category: sanitizeService(rawService),
    location: sanitizeLocation(rawSuburb),
    lead_type: 'family-enquiry',
  })
}

export function trackConsultationRequest(service?: string) {
  trackEvent('consultation_request', {
    service_category: sanitizeService(service),
  })
}
