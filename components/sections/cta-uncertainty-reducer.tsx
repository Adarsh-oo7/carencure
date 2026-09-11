import Link from 'next/link'
import { UserCheck, Clock, DollarSign, MapPin, AlertCircle } from 'lucide-react'

export function CtaUncertaintyReducer() {
  return (
    <div className="bg-teal-50/70 border border-teal-border rounded-2xl p-6 sm:p-8 space-y-6">
      <div className="border-b border-teal-200/60 pb-3">
        <h4 className="text-navy font-bold text-lg">
          What to expect when you contact Care N Cure
        </h4>
        <p className="text-body text-xs mt-1">
          Honest, transparent clinical care with no hidden surprises.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex gap-3.5">
          <div className="w-9 h-9 rounded-lg bg-white border border-teal-border flex items-center justify-center text-teal-text shrink-0 shadow-xs">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-navy font-bold text-sm">Who will I speak to?</h5>
            <p className="text-body text-xs leading-relaxed mt-1">
              You will connect directly with a qualified Registered Nurse coordinator who understands clinical care, not an off-site call centre.
            </p>
          </div>
        </div>

        <div className="flex gap-3.5">
          <div className="w-9 h-9 rounded-lg bg-white border border-teal-border flex items-center justify-center text-teal-text shrink-0 shadow-xs">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-navy font-bold text-sm">What happens next?</h5>
            <p className="text-body text-xs leading-relaxed mt-1">
              We arrange an initial clinical assessment within 24–48 hours across Perth. We review history, medications, and set up your ongoing care plan.
            </p>
          </div>
        </div>

        <div className="flex gap-3.5">
          <div className="w-9 h-9 rounded-lg bg-white border border-teal-border flex items-center justify-center text-teal-text shrink-0 shadow-xs">
            <DollarSign className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-navy font-bold text-sm">How much does it cost?</h5>
            <p className="text-body text-xs leading-relaxed mt-1">
              Standard weekday clinical visits typically range from $110 to $160/hr. Final quotes depend on care complexity.{' '}
              <Link href="/pricing" className="text-teal-text underline font-semibold hover:text-navy">
                View pricing schedule
              </Link>.
            </p>
          </div>
        </div>

        <div className="flex gap-3.5">
          <div className="w-9 h-9 rounded-lg bg-white border border-teal-border flex items-center justify-center text-teal-text shrink-0 shadow-xs">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-navy font-bold text-sm">Where do you visit?</h5>
            <p className="text-body text-xs leading-relaxed mt-1">
              We visit throughout metropolitan Perth and Armadale within our 50km service radius, with no travel surcharges.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2.5 pt-2 border-t border-teal-200/50 text-xs text-navy/80 bg-white/80 p-3 rounded-xl">
        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <p>
          <strong>Medical Notice:</strong> This practice is not an emergency medical service. In a medical emergency or life-threatening situation, immediately call <strong>000</strong>.
        </p>
      </div>
    </div>
  )
}
