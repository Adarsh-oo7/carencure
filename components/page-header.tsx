import { Breadcrumb } from '@/components/breadcrumb'

interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumbItems: { name: string; href: string }[]
  label?: string
}

export function PageHeader({ title, subtitle, breadcrumbItems, label }: PageHeaderProps) {
  return (
    <section
      className="relative overflow-hidden pt-14 pb-16"
      style={{ background: 'linear-gradient(135deg, #091E30 0%, #0D2B45 60%, #1A3D5C 100%)' }}
    >
      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #C5EEE4, transparent)', transform: 'translate(30%, -30%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none opacity-8"
        style={{ background: 'radial-gradient(circle, #4DBBA5, transparent)', transform: 'translate(-30%, 30%)' }}
        aria-hidden="true"
      />

      <div className="relative section-container">
        <div className="mb-5">
          <Breadcrumb items={breadcrumbItems} dark />
        </div>
        {label && (
          <p
            className="text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: 'var(--teal-accent)' }}
          >
            {label}
          </p>
        )}
        <h1 className="text-white mb-4" style={{ maxWidth: '720px' }}>
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.78)', maxWidth: '600px' }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '50px' }}
        >
          <path d="M0 50L1440 50L1440 15C1200 50 960 0 720 15C480 30 240 0 0 15L0 50Z" fill="var(--surface)" />
        </svg>
      </div>
    </section>
  )
}
