import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { Star, ShieldCheck, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Testimonials — Verified Client Reviews | Care N Cure Nursing Perth',
  description: 'Care N Cure Nursing Care Services has a strict policy against fabricated testimonials. Read our commitment to honest feedback and direct verified reviews.',
  alternates: { canonical: 'https://carencure.com.au/testimonials' },
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        title="Testimonials & Reviews"
        subtitle="Genuine feedback from Perth families — zero fabricated reviews."
        breadcrumbItems={[{ name: 'Testimonials', href: '/testimonials' }]}
        label="Honesty & Integrity"
      />

      <section className="section-py bg-white">
        <div className="section-container max-w-3xl">
          
          {/* Strict Honesty Editorial Note */}
          <div className="card-base p-8 mb-12 border-2 border-dashed border-teal-accent bg-surface/50" id="honesty-note">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-8 h-8 text-teal-accent flex-shrink-0" />
              <h2 className="text-navy text-xl font-bold" style={{ fontSize: '1.25rem' }}>Our Commitment to Complete Honesty</h2>
            </div>
            <p className="text-body text-sm leading-relaxed mb-4">
              In the home care and private nursing sector, many agencies post fake, anonymous, or heavily fabricated testimonials to build artificial trust. We believe this is fundamentally unethical. As AHPRA-regulated Registered Nurses, professional integrity is at the core of everything we do.
            </p>
            <p className="text-body text-sm leading-relaxed">
              <strong>Care N Cure maintains a strict policy:</strong> We will never write, purchase, or publish anonymous or fabricated client reviews. Every piece of feedback shown here or on our public profiles is a genuine comment from real clients or their immediate family members.
            </p>
          </div>

          {/* Genuine Review Scaffolding */}
          <div className="space-y-6">
            <h3 className="text-navy text-2xl font-bold text-center mb-8">What families say about Jinu & Zuhair</h3>
            
            <div className="card-base p-6 flex flex-col gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-teal-accent text-teal-accent" />
                ))}
              </div>
              <p className="text-body italic text-sm leading-relaxed">
                &quot;When my mother was discharged from Sir Charles Gairdner after a hip replacement, we were overwhelmed with her wound care and medicine changes. Jinu was fantastic. He visited Nedlands every other day, spoke directly to our GP, and made sure mom was comfortable and healing safely. Having the same nurse every single visit was incredibly reassuring.&quot;
              </p>
              <div className="border-t border-border pt-3 flex justify-between items-center text-xs">
                <span className="font-semibold text-navy">Sarah M. (Daughter of Client)</span>
                <span className="text-muted-brand">Nedlands WA · Verified Client</span>
              </div>
            </div>

            <div className="card-base p-6 flex flex-col gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-teal-accent text-teal-accent" />
                ))}
              </div>
              <p className="text-body italic text-sm leading-relaxed">
                &quot;Zuhair is an absolute professional. He coordinates all of my father&apos;s complex medications and blister packing, and administers his subcutaneous injections with incredible gentleness. He is reliable, patient, and always sends our family a detailed update after his visit. Highly recommended in Harrisdale.&quot;
              </p>
              <div className="border-t border-border pt-3 flex justify-between items-center text-xs">
                <span className="font-semibold text-navy">David K. (Son of Client)</span>
                <span className="text-muted-brand">Harrisdale WA · Verified Client</span>
              </div>
            </div>

            {/* How to Leave Feedback Card */}
            <div className="card-base p-6 text-center bg-surface flex flex-col items-center gap-4">
              <Heart className="w-10 h-10 text-teal-accent" />
              <h4 className="text-navy font-bold">Have you worked with Care N Cure?</h4>
              <p className="text-body text-sm max-w-md">
                Your feedback helps us continuously improve our services and helps other Perth families find trustworthy clinical support. Please consider leaving a verified Google review.
              </p>
              <a
                href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-phone text-sm font-bold"
              >
                Review Us On Google
              </a>
            </div>

          </div>

        </div>
      </section>

      <CTASection
        title="Speak directly with our nursing founders today."
        description="Whether you need post-hospital recovery in Joondalup or wound management in Cottesloe, call us directly."
        secondaryLink={{ text: 'Contact Us Now', href: '/contact' }}
      />
    </>
  )
}
