import Image from 'next/image'
import { Star } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  content: string
  imageUrl: string
  rating: number
}

interface TestimonialsProps {
  title: string
  subtitle?: string
  testimonials: Testimonial[]
}

export function TestimonialsSection({
  title,
  subtitle,
  testimonials,
}: TestimonialsProps) {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-secondary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
