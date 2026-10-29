import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { CheckCircle2, ShieldCheck, Phone, ArrowRight } from 'lucide-react'
import { type LandingPage, hubPath, getFundedPagesByHub } from '@/lib/funded-pages'
import { NDIS_REGISTRATION } from '@/lib/registration'

const SITE = 'https://carencure.com.au'

export function FundedLanding({ page }: { page: LandingPage }) {
  const base = hubPath(page.hub)
  const url = `${base}/${page.slug}`
  const hubName = page.hub === 'ndis' ? 'NDIS Nursing Care' : 'Support at Home'
  const siblings = getFundedPagesByHub(page.hub).filter((p) => p.slug !== page.slug)

  return (
    <>
      <ServicePageSchema
        serviceName={page.metaTitle}
        description={page.metaDescription}
        url={url}
        procedureType={page.procedureType}
        faqs={page.faqs}
        breadcrumb={[
          { name: 'Home', item: `${SITE}/` },
          { name: hubName, item: `${SITE}${base}` },
          { name: page.h1, item: `${SITE}${url}` },
        ]}
      />

      <PageHeader
        title={page.h1}
        subtitle={page.subtitle}
        label={page.label}
        breadcrumbItems={[
          { name: hubName, href: base },
          { name: page.label, href: url },
        ]}
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <article className="lg:col-span-7 space-y-10">
              {/* Answer-first summary (quoted by Google & AI assistants) */}
              <div className="bg-teal-subtle/40 p-6 rounded-2xl border border-teal-border">
                <p className="section-label mb-2">The short answer</p>
                <p className="text-navy font-medium text-lg leading-relaxed">{page.answer}</p>
              </div>

              {page.hub === 'ndis' && NDIS_REGISTRATION.isRegistered && NDIS_REGISTRATION.registrationNumber && (
                <div className="flex items-start gap-3 bg-surface p-4 rounded-xl border border-border text-sm text-body">
                  <ShieldCheck className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                  <p>
                    NDIS registration ID <strong>{NDIS_REGISTRATION.registrationNumber}</strong>. Verify on the{' '}
                    <a href={NDIS_REGISTRATION.registerUrl} target="_blank" rel="noopener noreferrer" className="text-teal-text font-semibold hover:underline">
                      NDIS Commission provider register
                    </a>
                    .
                  </p>
                </div>
              )}

              {page.sections.map((s) => (
                <section key={s.heading} className="space-y-4">
                  <h2 className="text-navy text-2xl font-bold">{s.heading}</h2>
                  {s.paragraphs?.map((p, i) => (
                    <p key={i} className="text-body leading-relaxed">{p}</p>
                  ))}
                  {s.bullets && (
                    <ul className="grid grid-cols-1 gap-3">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 bg-surface p-4 rounded-xl border border-border">
                          <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                          <span className="text-body text-sm leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {page.steps && (
                <section className="space-y-4">
                  <h2 className="text-navy text-2xl font-bold">How to get started</h2>
                  <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {page.steps.map((st, i) => (
                      <li key={st.title} className="card-base p-5">
                        <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-teal-subtle text-teal-text font-bold text-sm mb-3">
                          {i + 1}
                        </span>
                        <h3 className="text-navy font-bold mb-1">{st.title}</h3>
                        <p className="text-body text-sm leading-relaxed">{st.text}</p>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              <section className="space-y-4">
                <h2 className="text-navy text-2xl font-bold">Frequently asked questions</h2>
                <div className="card-base p-6 divide-y divide-border">
                  {page.faqs.map((f) => (
                    <div key={f.question} className="py-4 first:pt-0 last:pb-0">
                      <h3 className="text-navy font-bold mb-2">{f.question}</h3>
                      <p className="text-body text-sm leading-relaxed">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </article>

            <aside className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <ContactForm
                  title={page.hub === 'ndis' ? 'Talk to an NDIS Nurse' : 'Ask About Support at Home Nursing'}
                  subtitle="Leave your details and a Registered Nurse will call you back. No obligation."
                  defaultService={page.formService}
                />
                <a
                  href="tel:1300919663"
                  className="flex items-center justify-center gap-2 card-base p-4 text-navy font-bold hover:text-teal-accent transition-colors"
                >
                  <Phone className="w-5 h-5 text-teal-accent" /> Call 1300 919 663
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-py bg-surface border-t border-border">
        <div className="section-container max-w-5xl space-y-8">
          <div>
            <h2 className="text-navy font-bold text-xl mb-4">Related pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {page.related.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="card-base p-4 text-sm font-semibold text-navy hover:text-teal-accent flex items-center gap-2 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 text-teal-accent shrink-0" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-navy font-bold text-xl mb-4">More {hubName} information</h2>
            <ul className="flex flex-wrap gap-2">
              {siblings.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`${base}/${p.slug}`}
                    className="inline-block px-4 py-2 rounded-full bg-white border border-border text-sm text-navy hover:border-teal-accent hover:text-teal-text transition-colors"
                  >
                    {p.metaTitle.split(' | ')[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
