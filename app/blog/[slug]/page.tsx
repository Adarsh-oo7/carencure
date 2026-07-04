import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog-data'
import { Button } from '@/components/ui/button'
import { Calendar, User, Clock, Tag, ArrowLeft, ArrowRight } from 'lucide-react'

// Pre-build all blog post pages at build time (SSG)
export function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export const dynamic = 'force-static'

// Dynamic metadata per post
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return { title: 'Post Not Found | Care N Cure Blog' }
  }

  return {
    title: `${post.title} | Care N Cure Blog`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    keywords: post.tags,
    alternates: {
      canonical: `https://carencure.com.au/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://carencure.com.au/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 800,
          height: 400,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  // Article JSON-LD schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: {
      '@type': 'Person',
      name: post.author,
      worksFor: {
        '@type': 'Organization',
        name: 'Care N Cure Nursing Care Services',
        url: 'https://carencure.com.au',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Care N Cure Nursing Care Services',
      url: 'https://carencure.com.au',
      logo: {
        '@type': 'ImageObject',
        url: 'https://carencure.com.au/logo.png',
        width: 200,
        height: 200,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://carencure.com.au/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    inLanguage: 'en-AU',
    about: {
      '@type': 'MedicalBusiness',
      name: 'Care N Cure Nursing Care Services',
    },
  }

  const contentParagraphs = post.content.split('\n\n').filter((p) => p.trim())

  return (
    <>
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="section-container max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-accent/20 text-teal-accent">
              {post.category}
            </span>
          </div>

          <h1 className="text-white font-bold text-3xl sm:text-4xl leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-white/80 text-lg leading-relaxed mb-8">{post.excerpt}</p>

          <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm border-t border-white/10 pt-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-AU', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="relative h-64 sm:h-80 max-w-4xl mx-auto">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Body */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            {/* Content */}
            <article className="lg:col-span-8 prose max-w-none">
              <div className="space-y-5">
                {contentParagraphs.map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-navy text-2xl font-bold mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-navy text-xl font-bold mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    )
                  }
                  if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter((item) => item.trim())
                    return (
                      <ul key={index} className="space-y-2 text-body">
                        {items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-teal-accent mt-1 font-bold flex-shrink-0">•</span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: item
                                  .replace(/^\d+\.\s/, '')
                                  .replace(/^-\s/, '')
                                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                              }}
                            />
                          </li>
                        ))}
                      </ul>
                    )
                  }
                  return (
                    <p
                      key={index}
                      className="text-body leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                      }}
                    />
                  )
                })}
              </div>

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-body" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-surface border border-border text-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className="card-base p-6 border-2 border-teal-accent/30">
                  <h3 className="text-navy font-bold text-lg mb-2">Need nursing care at home?</h3>
                  <p className="text-body text-sm mb-4 leading-relaxed">
                    Care N Cure provides in-home nursing services across Perth. Speak directly with a
                    registered nurse today.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center flex items-center justify-center gap-2"
                  >
                    Book a free consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:1300919663"
                    className="mt-3 flex items-center justify-center gap-2 text-sm text-teal-accent font-semibold hover:underline"
                  >
                    Or call 1300 919 663
                  </a>
                </div>

                {/* Related services */}
                <div className="card-base p-6">
                  <h4 className="text-navy font-bold mb-4">Our Services</h4>
                  <ul className="space-y-2">
                    {[
                      { label: 'Post-Hospital Care', href: '/post-hospital-care' },
                      { label: 'Wound Care & Dressing', href: '/wound-care' },
                      { label: 'Medication Management', href: '/medication-management' },
                      { label: 'Private Nursing', href: '/private-nursing' },
                      { label: 'Home Care Packages', href: '/homecare-packages' },
                    ].map(({ label, href }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          className="text-sm text-body hover:text-teal-accent flex items-center gap-1 transition-colors"
                        >
                          <ArrowRight className="w-3 h-3" />
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Back to blog */}
      <section className="py-10 bg-surface border-t border-border">
        <div className="section-container text-center">
          <Link href="/blog" className="btn-outline inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
        </div>
      </section>
    </>
  )
}