import Link from 'next/link'
import Image from 'next/image'

export function PatientStorySection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="patient-story-heading">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="section-label mb-3">Stories From Home</p>
          <h2 id="patient-story-heading" className="text-navy">
            Real recoveries. Real families. Real nurses.
          </h2>
        </div>

        {/* Visual trust image strip */}
        <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-10 shadow-lg">
          <Image
            src="/family-care-consult.jpg"
            alt="Care N Cure registered nurse Jinu sitting with an elderly patient and her daughter at a kitchen table in their Perth home, explaining the care plan — Your Dedicated Nurse model in practice"
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(9,30,48,0.60) 0%, rgba(9,30,48,0.20) 50%, transparent 100%)',
            }}
            aria-hidden="true"
          />
          <div className="absolute bottom-4 left-6">
            <p className="text-white font-semibold text-sm">
              &ldquo;One nurse. From day one.&rdquo;
            </p>
            <p className="text-teal-200 text-xs mt-1">Care N Cure · Harrisdale, Perth WA</p>
          </div>
        </div>

        {/* 3-column grid: primary story (2 cols) + secondary story (1 col) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Primary Story — 2 of 3 columns */}
          <div className="lg:col-span-2 bg-white border border-border rounded-2xl p-8 shadow-sm border-l-4 border-l-teal-600 relative">
            {/* Decorative quote mark */}
            <div
              className="absolute top-6 left-8 text-8xl leading-none font-serif select-none pointer-events-none"
              style={{ color: 'rgba(13,148,136,0.08)' }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <h3 className="text-navy font-bold text-xl mb-5 relative">
              Margaret came home from hospital on a Thursday.
            </h3>

            <div className="space-y-4 text-body leading-relaxed relative">
              <p>
                Her daughter Sarah had taken the week off work. The discharge papers listed six
                medications, two wound dressings, and a follow-up appointment three weeks away.
                Nobody explained what to watch for in between.
              </p>
              <p>
                That evening, they called Care N Cure. The next morning, Registered Nurse Jinu
                arrived — not a stranger, but the same nurse who would visit Margaret every week.
                Jinu assessed the wound, set up a medication schedule on the fridge, and sat with
                Sarah at the kitchen table to explain the warning signs: what was normal, what
                wasn&apos;t, and exactly when to call.
              </p>
              <p>
                Three weeks later, Margaret attended her follow-up. No readmission. No panic. Just
                a steady recovery — with one nurse who knew her name from day one.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-teal-700 text-sm font-bold mb-3">
                This is what Your Dedicated Nurse™ looks like in practice.
              </p>
              <Link
                href="/testimonials"
                className="text-teal-700 hover:text-teal-900 text-sm font-medium transition-colors"
              >
                Read more recovery stories →
              </Link>
            </div>
          </div>

          {/* Secondary Story — 1 of 3 columns */}
          <div className="bg-teal-50 rounded-2xl p-8 flex flex-col">
            <h3 className="text-navy font-bold text-lg mb-4">
              David&apos;s return home after cardiac surgery
            </h3>
            <p className="text-body leading-relaxed text-sm flex-1">
              David&apos;s wife had one number to call. One nurse who picked up. One person who knew
              his medications, his fears, and his progress. That&apos;s the Care N Cure promise.
            </p>
            <div className="mt-6 pt-4 border-t border-teal-200">
              <span className="text-teal-700 text-xs font-bold uppercase tracking-widest">
                Your Dedicated Nurse™ Model
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
