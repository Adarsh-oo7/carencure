'use client'

import { useState, useEffect, useRef } from 'react'
import { Phone, MessageSquare, X, MessageCircle } from 'lucide-react'

const PHONE_NUMBER = '1300 919 663'
const PHONE_HREF = 'tel:1300919663'
const WHATSAPP_NUMBER = '+61 481 748 516'
const WHATSAPP_HREF = 'https://wa.me/61481748516?text=Hi%20Care%20N%20Cure%2C%20I%20would%20like%20to%20enquire%20about%20your%20nursing%20care%20services.'
const INSTAGRAM_HREF = 'https://www.instagram.com/carencurenursing/?utm_source=ig_web_button_share_sheet'
const SMS_HREF = 'sms:+61481748516'

export function PersistentUI() {
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const widgetRef = useRef<HTMLDivElement>(null)

  // Show tooltip after 3 seconds on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans" ref={widgetRef}>
      {/* Floating Chat Card */}
      {isOpen && (
        <div
          className="absolute bottom-16 right-0 mb-3 w-[350px] max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl bg-white border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300 origin-bottom-right"
          role="dialog"
          aria-label="Contact channels popup"
        >
          {/* Header */}
          <div className="p-5 bg-gradient-to-r from-emerald-600 to-teal-500 text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white cursor-pointer"
              aria-label="Close panel"
              style={{ minHeight: 'auto' }}
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="flex items-center gap-3.5">
              {/* Overlapping Initials Avatars (representing Jinu & Zuhair) */}
              <div className="flex -space-x-3.5">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-navy flex items-center justify-center font-bold text-xs shadow-sm text-teal-accent">
                  JS
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-teal-accent flex items-center justify-center font-bold text-xs shadow-sm text-navy">
                  ZU
                </div>
              </div>
              <div>
                <h4 className="font-bold text-base leading-tight text-white m-0">Care N Cure Support</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1.5 font-medium m-0 mt-0.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse inline-block" />
                  Online · Replies within minutes
                </p>
              </div>
            </div>
            
            <p className="text-xs text-emerald-55/90 mt-4 leading-relaxed m-0 font-medium">
              Hello! Speak directly with a Perth Registered Nurse. Ask us about home care, wound management, or packages.
            </p>
          </div>

          {/* Body with channels */}
          <div className="p-4 bg-slate-50 flex flex-col gap-3">
            {/* WhatsApp */}
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 bg-white hover:bg-emerald-50/40 border border-slate-100 rounded-xl transition-all duration-200 group shadow-sm"
              style={{ minHeight: '56px' }}
            >
              <div className="w-11 h-11 bg-emerald-500 rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-200">
                {/* Custom WhatsApp Icon */}
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.489.002 9.961-4.47 9.964-9.96.002-2.66-1.023-5.158-2.884-7.02C16.49 1.76 13.992.73 11.33.73c-5.49 0-9.962 4.471-9.965 9.961-.001 1.93.52 3.473 1.503 5.062L1.87 21.08l5.46-1.432zM17.18 14.86c-.305-.153-1.802-.888-2.083-.99-.281-.102-.485-.153-.687.153-.202.305-.783.99-.96 1.194-.177.203-.355.228-.66.076-.305-.152-1.287-.475-2.451-1.513-.906-.808-1.517-1.807-1.695-2.112-.178-.305-.019-.47.133-.621.137-.136.305-.355.457-.533.153-.177.203-.305.305-.508.102-.203.05-.381-.026-.533-.076-.152-.687-1.656-.94-2.266-.247-.595-.499-.513-.687-.523-.178-.01-.381-.01-.584-.01-.203 0-.533.076-.812.381-.28.305-1.066 1.042-1.066 2.541s1.091 2.946 1.243 3.149c.153.203 2.15 3.284 5.207 4.603.727.314 1.294.5 1.737.641.73.232 1.393.197 1.917.12.584-.087 1.802-.736 2.056-1.447.253-.71.253-1.32.177-1.447-.076-.127-.28-.203-.584-.355z" />
                </svg>
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-slate-800 text-sm leading-tight m-0">Chat on WhatsApp</h5>
                <p className="text-xs text-slate-500 m-0 mt-0.5">Instant message coordinators</p>
              </div>
              <span className="text-slate-350 group-hover:translate-x-1 transition-transform duration-200 text-sm font-bold">→</span>
            </a>

            {/* SMS Message */}
            <a
              href={SMS_HREF}
              className="flex items-center gap-4 p-3 bg-white hover:bg-sky-50/40 border border-slate-100 rounded-xl transition-all duration-200 group shadow-sm"
              style={{ minHeight: '56px' }}
            >
              <div className="w-11 h-11 bg-sky-500 rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-200">
                <MessageSquare className="w-5.5 h-5.5 fill-current text-white" />
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-slate-800 text-sm leading-tight m-0">Text SMS Message</h5>
                <p className="text-xs text-slate-500 m-0 mt-0.5">Send a mobile text message</p>
              </div>
              <span className="text-slate-350 group-hover:translate-x-1 transition-transform duration-200 text-sm font-bold">→</span>
            </a>

            {/* Instagram */}
            <a
              href={INSTAGRAM_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 bg-white hover:bg-pink-50/40 border border-slate-100 rounded-xl transition-all duration-200 group shadow-sm"
              style={{ minHeight: '56px' }}
            >
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-200" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
                <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-slate-800 text-sm leading-tight m-0">Instagram Profile</h5>
                <p className="text-xs text-slate-500 m-0 mt-0.5">Follow @carencurenursing</p>
              </div>
              <span className="text-slate-350 group-hover:translate-x-1 transition-transform duration-200 text-sm font-bold">→</span>
            </a>

            {/* Direct Phone Call */}
            <a
              href={PHONE_HREF}
              className="flex items-center gap-4 p-3 bg-white hover:bg-teal-50/40 border border-slate-100 rounded-xl transition-all duration-200 group shadow-sm"
              style={{ minHeight: '56px' }}
            >
              <div className="w-11 h-11 bg-navy rounded-full flex items-center justify-center text-teal-accent shrink-0 group-hover:scale-105 transition-transform duration-200">
                <Phone className="w-5.5 h-5.5" />
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-slate-800 text-sm leading-tight m-0">Call Nurse Coordinator</h5>
                <p className="text-xs text-slate-500 m-0 mt-0.5">Dial office phone ({PHONE_NUMBER})</p>
              </div>
              <span className="text-slate-350 group-hover:translate-x-1 transition-transform duration-200 text-sm font-bold">→</span>
            </a>
          </div>
          
          <div className="p-3 text-center border-t border-slate-100 bg-white">
            <p className="text-[10px] text-slate-400 m-0">
              Care N Cure Nursing Care Services · Perth, WA
            </p>
          </div>
        </div>
      )}

      {/* Floating Action Button (Trigger) */}
      <div className="relative flex items-center justify-end">
        {/* Tooltip */}
        {showTooltip && !isOpen && (
          <div className="absolute right-16 bg-navy text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl whitespace-nowrap animate-in fade-in slide-in-from-right-3 duration-300 flex items-center gap-2 border border-navy-light/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Chat with a Nurse Coordinator</span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setShowTooltip(false)
              }}
              className="ml-2 text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="Close message bubble"
              style={{ minHeight: 'auto' }}
            >
              <X className="w-3 h-3" />
            </button>
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-navy rotate-45 border-r border-t border-navy-light/10" />
          </div>
        )}

        {/* WhatsApp Icon FAB Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen)
            setShowTooltip(false)
          }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center text-white cursor-pointer shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/25 active:scale-95 border-none outline-none z-50"
          style={{
            background: isOpen ? 'var(--navy)' : '#25D366',
            boxShadow: isOpen ? '0 10px 25px -5px rgba(13, 43, 69, 0.4)' : '0 10px 25px -5px rgba(37, 211, 102, 0.4)',
          }}
          aria-label={isOpen ? "Close messaging menu" : "Open messaging menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="w-6 h-6 animate-in spin-in-90 duration-300" />
          ) : (
            <>
              {/* WhatsApp Icon */}
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current animate-in zoom-in-50 duration-300">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.489.002 9.961-4.47 9.964-9.96.002-2.66-1.023-5.158-2.884-7.02C16.49 1.76 13.992.73 11.33.73c-5.49 0-9.962 4.471-9.965 9.961-.001 1.93.52 3.473 1.503 5.062L1.87 21.08l5.46-1.432zM17.18 14.86c-.305-.153-1.802-.888-2.083-.99-.281-.102-.485-.153-.687.153-.202.305-.783.99-.96 1.194-.177.203-.355.228-.66.076-.305-.152-1.287-.475-2.451-1.513-.906-.808-1.517-1.807-1.695-2.112-.178-.305-.019-.47.133-.621.137-.136.305-.355.457-.533.153-.177.203-.305.305-.508.102-.203.05-.381-.026-.533-.076-.152-.687-1.656-.94-2.266-.247-.595-.499-.513-.687-.523-.178-.01-.381-.01-.584-.01-.203 0-.533.076-.812.381-.28.305-1.066 1.042-1.066 2.541s1.091 2.946 1.243 3.149c.153.203 2.15 3.284 5.207 4.603.727.314 1.294.5 1.737.641.73.232 1.393.197 1.917.12.584-.087 1.802-.736 2.056-1.447.253-.71.253-1.32.177-1.447-.076-.127-.28-.203-.584-.355z" />
              </svg>
              {/* Notification Badge */}
              <span className="absolute -top-1 -right-1 w-5.5 h-5.5 bg-rose-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-extrabold text-white animate-bounce">
                1
              </span>
              {/* Pulse animation rings */}
              <span className="absolute -z-10 inset-0 rounded-full bg-emerald-500/30 animate-ping opacity-75" />
            </>
          )}
        </button>
      </div>
    </div>
  )
}
