import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

interface SuburbCardProps {
  name: string
  href: string
  description?: string
  distance?: string
}

export function SuburbCard({ name, href, description, distance }: SuburbCardProps) {
  return (
    <Link
      href={href}
      className="card-base p-6 hover:border-teal-accent hover:shadow-md transition-all group flex flex-col justify-between h-full bg-white"
    >
      <div>
        <div className="flex justify-between items-start mb-3">
          <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center text-teal-accent group-hover:bg-navy group-hover:text-white transition-colors">
            <MapPin className="w-5 h-5" />
          </div>
          {distance && (
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-brand bg-surface px-2.5 py-1 rounded">
              {distance}
            </span>
          )}
        </div>
        <h3 className="text-navy font-bold group-hover:text-teal-accent transition-colors" style={{ fontSize: '1.15rem' }}>
          {name}
        </h3>
        <p className="text-body text-xs leading-relaxed mt-2">
          {description || `Professional registered nursing services delivered in the comfort of your home in ${name}, WA.`}
        </p>
      </div>
      <div className="flex items-center gap-1 text-xs font-bold text-teal-accent mt-4 group-hover:gap-2 transition-all">
        View Suburb Care <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </Link>
  )
}
