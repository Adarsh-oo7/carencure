import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllBlogPosts, getCategories } from '@/lib/blog-data'
import { Button } from '@/components/ui/button'
import { Calendar, User, Clock, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Home Care Blog | Nursing Tips & Advice | Care N Cure Perth',
  },
  description:
    'Expert advice from Perth registered nurses. Articles on home care, wound management, chronic disease support & navigating aged care funding in Australia.',
  keywords: [
    'home nursing blog Perth',
    'nursing care tips',
    'post-surgery recovery Perth',
    'wound care advice',
    'chronic disease management',
    'Perth healthcare',
    'registered nurse advice',
  ],
  alternates: {
    canonical: 'https://carencure.com.au/blog',
  },
  openGraph: {
    title: 'Home Care Blog | Nursing Tips & Advice | Care N Cure Perth',
    description:
      'Expert advice from Perth registered nurses. Articles on home care, wound management, chronic disease support & navigating aged care funding in Australia.',
    type: 'website',
    url: 'https://carencure.com.au/blog',
  },
}


export default function BlogPage() {
  const posts = getAllBlogPosts()
  const categories = getCategories()

  return (
    <main>
      {/* Blog Hero */}
      <section className="bg-gradient-to-b from-secondary to-secondary/90 text-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-background">
              Health Insights & Nursing Tips
            </h1>
            <p className="text-lg text-background/90 text-pretty">
              Expert advice from our healthcare professionals on managing your health, recovery tips, and wellness strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-card rounded-lg p-6 border border-border sticky top-20">
                <h3 className="text-lg font-semibold text-secondary mb-4">Categories</h3>
                <div className="space-y-2">
                  <Link
                    href="/blog"
                    className="block px-3 py-2 rounded text-sm text-secondary hover:bg-primary/10 transition-colors"
                  >
                    All Articles
                  </Link>
                  {categories.map((category) => (
                    <div
                      key={category}
                      className="px-3 py-2 rounded text-sm text-secondary hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              {posts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No blog posts available yet.</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {posts.map((post) => (
                    <article
                      key={post.id}
                      className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-card"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        {/* Image */}
                        <div className="relative h-48 md:h-auto md:col-span-1 overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-6 md:col-span-2 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                                {post.category}
                              </span>
                            </div>

                            <h2 className="text-2xl font-bold text-secondary mb-2 hover:text-primary transition-colors">
                              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                            </h2>

                            <p className="text-foreground/80 mb-4 line-clamp-2">{post.excerpt}</p>

                            {/* Meta Info */}
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime} min read</span>
                              </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-secondary text-xs rounded"
                                >
                                  <Tag className="w-3 h-3" />
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Read More Button */}
                          <Button asChild className="w-full sm:w-auto">
                            <Link href={`/blog/${post.slug}`}>Read Article</Link>
                          </Button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Stay Updated with Health Tips
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Subscribe to our blog for the latest healthcare advice and nursing tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary flex-1 sm:flex-none"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
