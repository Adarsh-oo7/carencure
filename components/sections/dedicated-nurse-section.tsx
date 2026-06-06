import Image from 'next/image'
import { Check } from 'lucide-react'

const checklistItems = [
  'Visits you regularly at home',
  'Gets to know your health, routine, and preferences',
  'Oversees wound care and clinical concerns',
  'Monitors changes in your wellbeing',
  'Coordinates support workers and allied health',
  'Communicates with your GP and family',
  'Helps prevent avoidable hospital visits',
  'Stays with you throughout your care journey',
]

export function DedicatedNurseSection() {
  return (
    <section
      className="py-20 bg-slate-50 border-t border-slate-100"
      aria-labelledby="dedicated-nurse-heading"
    >
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Our Dedicated Model</p>
          <h2 id="dedicated-nurse-heading" className="text-navy mb-4">
            One Client. One Nurse Coordinator.
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-body text-lg max-w-xl mx-auto font-medium text-teal-accent">
            Because continuity changes everything.
          </p>
        </div>

        {/* Visual trust image */}
        <div className="relative w-full h-72 rounded-3xl overflow-hidden mb-12 shadow-lg">
          <Image
            src="/nurse-home-visit.jpg"
            alt="Registered nurse conducting a home health assessment and coordinating services for an elderly client — The Nurse Who Knows You model"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, rgba(9,30,48,0.7) 0%, rgba(9,30,48,0.2) 60%, transparent 100%)' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex items-center px-8 sm:px-12">
            <blockquote className="text-white max-w-md">
              <p className="text-xl sm:text-2xl font-bold leading-snug mb-2 text-white">&ldquo;We Don&apos;t Just Coordinate Care. We Know You.&rdquo;</p>
              <cite className="text-teal-200 text-sm not-italic font-medium">The Nurse Who Knows You Promise</cite>
            </blockquote>
          </div>
        </div>

        {/* Two-column layout: Left Promise, Right Duties checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Our Promise */}
          <div className="bg-navy rounded-3xl p-8 sm:p-10 text-white flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-accent/5 rounded-full blur-3xl pointer-events-none" />
            <div>
              <p className="text-teal-accent text-sm font-semibold uppercase tracking-widest mb-3">
                Our Promise
              </p>
              <h3 className="text-white font-bold text-2xl sm:text-3xl mb-6 leading-tight">
                We Don&apos;t Just Coordinate Care.<br />We Know You.
              </h3>
              <div className="space-y-4 text-white/95 leading-relaxed text-base sm:text-lg">
                <p className="text-white/90">
                  Your dedicated nurse learns your goals, preferences, routines, and health needs.
                </p>
                <p className="font-semibold text-teal-accent">
                  That means better communication, better continuity, and better outcomes.
                </p>
              </div>
            </div>
            <div className="border-t border-navy-light pt-6 mt-8">
              <p className="italic text-teal-100/70 text-sm">
                Care should never feel like you&apos;re just another file in the system.
              </p>
            </div>
          </div>

          {/* Right: Duties checklist */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <h3 className="text-navy font-bold text-xl sm:text-2xl mb-6">
                Your dedicated Nurse Coordinator:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                {checklistItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-50 text-teal-accent flex items-center justify-center font-bold text-xs mt-0.5 border border-teal-100">
                      ✓
                    </span>
                    <span className="text-body text-sm leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-400 font-medium">
              Registered nurse coordination & clinical oversight.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
