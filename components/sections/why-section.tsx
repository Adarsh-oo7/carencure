import Link from 'next/link'
import { Phone, Check, X, ShieldCheck } from 'lucide-react'

export function WhySection() {
  return (
    <section className="section-py bg-white" aria-labelledby="why-heading">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Local Perth Comparison</p>
          <h2 id="why-heading" className="text-navy mb-4 font-bold text-2xl md:text-3xl">
            Why Perth Families Choose Care N Cure Over Traditional Agencies
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-body max-w-2xl mx-auto text-base md:text-lg">
            Unlike large corporate agencies that rotate casual carers, our model provides one dedicated Registered Nurse coordinator who knows your loved one personally.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Traditional Home Care */}
          <div className="card-base p-7 sm:p-8 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 bg-slate-200 text-slate-700">
                Traditional Corporate Agencies
              </div>
              <h3 className="text-slate-700 font-bold text-xl mb-6 flex items-center gap-2">
                What Most Families Experience
              </h3>
              <ul className="space-y-4">
                {[
                  'Rotating casual roster — a different stranger arrives every week',
                  'Long 4–12 week waitlists while waiting for My Aged Care ACAT',
                  'Support workers only — cannot dress sterile wounds or give injections',
                  'Impersonal call center triage with long hold times',
                  'Hidden travel fees and rigid, unmovable booking windows',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm sm:text-base">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs mt-0.5">
                      ✕
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200/80 text-xs text-slate-500 font-medium">
              Common challenges with high-turnover agencies
            </div>
          </div>

          {/* Our Nurse-Led Model */}
          <div className="card-base p-7 sm:p-8 bg-navy text-white border-2 border-teal-accent/30 shadow-xl rounded-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Visual glow indicator */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-accent/15 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-teal-accent text-navy">
                Care N Cure Model
              </div>
              <h3 className="text-white font-bold text-2xl mb-6">
                The Dedicated Nurse Who Knows You
              </h3>
              <ul className="space-y-4">
                {[
                  'Same dedicated AHPRA Registered Nurse coordinator every visit',
                  'Immediate start within 24–48 hours — no waitlist or GP referral needed',
                  'Clinical-grade expertise — sterile dressings, injections, vitals & meds',
                  'Direct mobile & WhatsApp line directly to your nurse coordinator',
                  'Zero travel surcharges within 50km of our Harrisdale base',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/95 text-sm sm:text-base">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-teal-accent/25 text-teal-accent flex items-center justify-center font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-5 border-t border-navy-light flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-teal-accent font-bold tracking-wider uppercase">
                15 Rockefeller Way, Harrisdale HQ
              </span>
              <a
                href="tel:1300919663"
                className="inline-flex items-center gap-2 bg-teal-accent hover:bg-teal-dark text-navy font-bold text-xs px-3.5 py-2 rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Call 1300 919 663
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
