'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQPageSchema } from '@/components/schema'

interface FAQ {
  id: string
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
  title?: string
  subtitle?: string
  dark?: boolean
}

export function FAQSection({ faqs, title = 'Common questions', subtitle, dark = false }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId(openId === id ? null : id)

  const schemFaqs = faqs.map(({ question, answer }) => ({ question, answer }))

  return (
    <section
      className="section-py"
      style={{ background: dark ? 'var(--navy)' : 'var(--white)' }}
      aria-labelledby="faq-heading"
    >
      <FAQPageSchema faqs={schemFaqs} />
      <div className="section-container">
        <div className="text-center mb-10">
          <p className="section-label mb-3" style={{ color: dark ? 'var(--teal-accent)' : 'var(--teal-accent)' }}>
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mb-4"
            style={{ color: dark ? 'white' : 'var(--navy)' }}
          >
            {title}
          </h2>
          <div className="section-divider mx-auto" />
          {subtitle && (
            <p
              className="max-w-xl mx-auto text-lg"
              style={{ color: dark ? 'rgba(255,255,255,0.75)' : 'var(--text-body)' }}
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className="max-w-3xl mx-auto" role="list">
          {faqs.map(({ id, question, answer }) => (
            <div
              key={id}
              className="faq-item"
              role="listitem"
              style={{ borderColor: dark ? 'rgba(255,255,255,0.1)' : 'var(--border-light)' }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                onClick={() => toggle(id)}
                aria-expanded={openId === id}
                aria-controls={`faq-answer-${id}`}
                id={`faq-question-${id}`}
              >
                <span
                  className="font-semibold text-base leading-snug"
                  style={{ color: dark ? 'white' : 'var(--navy)' }}
                >
                  {question}
                </span>
                <ChevronDown
                  className="w-5 h-5 flex-shrink-0 transition-transform duration-200"
                  style={{
                    color: dark ? 'var(--teal-accent)' : 'var(--teal-accent)',
                    transform: openId === id ? 'rotate(180deg)' : 'rotate(0)',
                  }}
                />
              </button>
              {openId === id && (
                <div
                  id={`faq-answer-${id}`}
                  role="region"
                  aria-labelledby={`faq-question-${id}`}
                  className="pb-5"
                >
                  <p
                    className="leading-relaxed"
                    style={{ color: dark ? 'rgba(255,255,255,0.78)' : 'var(--text-body)' }}
                  >
                    {answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
