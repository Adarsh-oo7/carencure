import { LucideIcon } from 'lucide-react'

interface Value {
  icon: LucideIcon
  title: string
  description: string
}

interface ValuesProps {
  title: string
  subtitle?: string
  values: Value[]
}

export function ValuesSection({
  title,
  subtitle,
  values,
}: ValuesProps) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          {subtitle && (
            <p className="text-sm md:text-base font-semibold text-primary mb-2">
              {subtitle}
            </p>
          )}
          <h2 className="text-secondary">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
