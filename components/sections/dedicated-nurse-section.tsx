import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const checklistItems = [
  'Conducts your initial assessment at home',
  'Writes and owns your personal care plan',
  'Coordinates with your GP and hospital team',
  'Knows your medication history, preferences, and goals',
  'Calls your family — by name — with updates',
  'Spots changes in health before they become emergencies',
  'Is there at every visit, not a different face each week',
]

const stats = [
  { value: '10+ Years', label: 'Clinical Experience (Founders)' },
  { value: '24–48hrs', label: 'First Visit After Enquiry' },
  { value: '1 Nurse', label: 'Assigned to You, Always' },
]

export function DedicatedNurseSection() {
  return (
    <section
      className="py-20 bg-slate-50 border-t-4 border-teal-600"
      aria-labelledby="dedicated-nurse-heading"
    >
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="section-label mb-3">What Makes Us Different</p>
          <h2 id="dedicated-nurse-heading" className="text-navy mb-4">
            The Dedicated Nurse Difference
          </h2>
          <p className="text-body text-lg max-w-xl mx-auto">
            Unlike any other home care provider in Perth.
          </p>
        </div>

        {/* Visual trust image */}
        <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-10 shadow-md">
          <Image
            src="/nurse-home-visit.jpg"
            alt="AHPRA registered nurse conducting a home health assessment in Perth — Care N Cure Your Dedicated Nurse model"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, rgba(13,148,136,0.65) 0%, rgba(13,148,136,0.10) 60%, transparent 100%)' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex items-center px-8">
            <blockquote className="text-white max-w-sm">
              <p className="text-xl font-bold leading-snug mb-1">&ldquo;You call us. You get your nurse.&rdquo;</p>
              <cite className="text-teal-200 text-sm not-italic">The Care N Cure Promise · Perth, WA</cite>
            </blockquote>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Left: what families usually face */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
            <h3 className="text-navy font-semibold text-lg mb-6">
              What families usually face
            </h3>
            <div className="space-y-4">
              {[
                'Every time I call, I speak to a different person.',
                "I have to explain Mum's history again and again.",
                "I don't know who's coming tomorrow.",
              ].map((quote, i) => (
                <blockquote
                  key={i}
                  className="pl-4 border-l-4 border-teal-600 italic text-slate-500 leading-relaxed"
                >
                  &ldquo;{quote}&rdquo;
                </blockquote>
              ))}
            </div>
          </div>

          {/* Right: with Your Dedicated Nurse */}
          <div className="bg-teal-700 rounded-2xl p-8 text-white">
            <p className="text-teal-300 text-sm font-semibold uppercase tracking-wide mb-2">
              With Your Dedicated Nurse™
            </p>
            <h3 className="text-white font-bold text-2xl mb-6">
              One nurse. Assigned to you. From day one.
            </h3>
            <ul className="space-y-3 mb-6">
              {checklistItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-teal-600 pt-5">
              <p className="italic text-teal-100 text-sm">
                &ldquo;You call us. You get your nurse.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Stat bar */}
        <div className="bg-teal-700 rounded-2xl px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-teal-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
