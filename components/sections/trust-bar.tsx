import { CheckCircle2 } from 'lucide-react'

const trustItems = [
  {
    icon: CheckCircle2,
    label: 'Home Care Package Provider',
    sub: 'Approved HCP provider',
    id: 'trust-hcp',
  },
  {
    icon: CheckCircle2,
    label: 'Your Dedicated Nurse™ Model',
    sub: 'One nurse coordinator, assigned to you',
    id: 'trust-dedicated',
  },
  {
    icon: CheckCircle2,
    label: 'Perth-Based',
    sub: 'Local community nursing',
    id: 'trust-perth',
  },
  {
    icon: CheckCircle2,
    label: 'Registered Nursing from $100',
    sub: 'Pricing tailored case by case',
    id: 'trust-pricing',
  },
  {
    icon: CheckCircle2,
    label: 'Lower-Cost Home Care Provider',
    sub: 'One of Australia’s more affordable home care options',
    id: 'trust-cost',
  },

]

export function TrustBar() {
  return (
    <section className="py-8 bg-white border-b border-border" aria-label="Trust credentials">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {trustItems.map(({ icon: Icon, label, sub, id }) => (
            <div key={id} id={id} className="flex flex-col items-center text-center gap-2 py-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--teal)', color: 'var(--navy)' }}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-sm text-navy leading-tight">{label}</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
