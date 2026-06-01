interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  title: string
  subtitle?: string
  items: TimelineItem[]
}

export function TimelineSection({
  title,
  subtitle,
  items,
}: TimelineProps) {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
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

        <div className="max-w-3xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="flex gap-6 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-background font-bold text-sm">
                  {index + 1}
                </div>
                {index < items.length - 1 && (
                  <div className="w-1 h-16 bg-primary/30 mt-4" />
                )}
              </div>

              <div className="pb-8">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold mb-2">
                  {item.year}
                </span>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
