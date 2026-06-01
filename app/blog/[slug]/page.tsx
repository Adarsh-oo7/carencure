import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getBlogPost, getAllBlogPosts, getBlogPostsByCategory } from '@/lib/blog-data'
import { Button } from '@/components/ui/button'
import { Calendar, User, Clock, ArrowLeft, Tag } from 'lucide-react'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: `${post.title} - Care N Cure Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://carencare.com/blog/${post.slug}`,
      images: [{ url: post.image }],
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getBlogPostsByCategory(post.category)
    .filter((p) => p.id !== post.id)
    .slice(0, 3)

  return (
    <main>
      {/* Blog Post Header */}
      <section className="bg-secondary text-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-background/80 hover:text-background mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-background/20 text-background text-xs font-semibold rounded-full mb-4">
              {post.category}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-background">{post.title}</h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-background/90 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative h-96 md:h-[500px] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Blog Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <div className="text-foreground leading-relaxed whitespace-pre-wrap mb-8">
                  {post.content}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-8 border-t border-border">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-secondary text-sm rounded-full"
                  >
                    <Tag className="w-4 h-4" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author Bio */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold text-secondary mb-2">About the Author</h3>
                <p className="text-foreground/80">
                  {post.author} is a healthcare professional with extensive experience in patient care and medical services at Care N Cure.
                </p>
              </div>

              {/* CTA Section */}
              <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-secondary mb-3">Need Professional Healthcare?</h3>
                <p className="text-foreground/80 mb-6">
                  If you found this article helpful, our team of professionals is ready to assist you with personalized healthcare services.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#consultation">Book Consultation</Link>
                  </Button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Newsletter */}
              <div className="bg-card rounded-lg p-6 border border-border mb-8">
                <h3 className="text-lg font-semibold text-secondary mb-4">Subscribe to Our Blog</h3>
                <p className="text-sm text-foreground/80 mb-4">Get the latest health tips and nursing advice delivered to your inbox.</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold text-secondary mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        href={`/blog/${relatedPost.slug}`}
                        className="block group"
                      >
                        <h4 className="font-medium text-secondary group-hover:text-primary transition-colors line-clamp-2 mb-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">{new Date(relatedPost.date).toLocaleDateString()}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* All Blog Posts CTA */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Explore More Articles</h2>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Read more expert articles on healthcare, nursing care, and wellness tips.
          </p>
          <Button asChild size="lg">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
