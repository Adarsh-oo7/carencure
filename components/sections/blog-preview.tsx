import Link from 'next/link'
import Image from 'next/image'
import { getAllBlogPosts } from '@/lib/blog-data'
import { Button } from '@/components/ui/button'
import { Calendar, Clock } from 'lucide-react'

export function BlogPreviewSection() {
  const recentPosts = getAllBlogPosts().slice(0, 3)

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Health Insights
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-4 text-balance">
            Latest Articles & Tips
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Expert advice on healthcare, recovery tips, and wellness strategies from our team of healthcare professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post) => (
            <article
              key={post.id}
              className="bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-secondary mb-2 hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-foreground/80 text-sm mb-4 flex-1 line-clamp-2">{post.excerpt}</p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 border-t border-border pt-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime} min</span>
                  </div>
                </div>

                <Button asChild variant="outline" className="w-full">
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
