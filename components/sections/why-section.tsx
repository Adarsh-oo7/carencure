import { X, Check } from 'lucide-react'

export function WhySection() {
  return (
    <section className="section-py bg-white" aria-labelledby="why-heading">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Model Comparison</p>
          <h2 id="why-heading" className="text-navy mb-4">
            How We Are Different
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-body max-w-2xl mx-auto text-lg">
            Unlike traditional care agencies, our model revolves around consistency, clinical expertise, and real human connection.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Traditional Home Care */}
          <div className="card-base p-8 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-slate-500 font-bold text-xl mb-6 flex items-center gap-2">
                Traditional Home Care
              </h3>
              <ul className="space-y-4">
                {[
                  'Different coordinators over time',
                  'Limited face-to-face contact',
                  'Reactive care',
                  'Families repeating information',
                  'Support workers managed remotely',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-base">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold text-xs mt-0.5">
                      ✕
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200/60 text-xs text-slate-400 font-medium">
              Common industry standards
            </div>
          </div>

          {/* Our Nurse-Led Model */}
          <div className="card-base p-8 bg-navy text-white border-0 shadow-lg rounded-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Visual glow indicator */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-accent/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 bg-teal-accent text-navy">
                Our Model
              </div>
              <h3 className="text-white font-bold text-2xl mb-6">
                Our Nurse-Led Model
              </h3>
              <ul className="space-y-4">
                {[
                  'Dedicated Nurse Coordinator',
                  'Regular home visits',
                  'Ongoing clinical oversight',
                  'Personal relationship with client and family',
                  'Proactive health monitoring',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90 text-base">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-accent/20 text-teal-accent flex items-center justify-center font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-navy-light text-xs text-teal-accent/80 font-semibold tracking-wider uppercase">
              The Nurse Who Knows You Promise
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
