import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ServicePageSchema, FAQPageSchema } from '@/components/schema'
import { ContactForm } from '@/components/contact-form'
import { Smile, ShieldCheck, Heart, Sparkles, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Companion Care Perth | Home Companion Services | Care N Cure',
  },
  description: 'Meaningful companionship with nurse-led oversight. Social engagement, meal support & wellbeing checks by caring professionals. Serving Perth & surrounds.',
  alternates: { canonical: 'https://carencure.com.au/companion-care' },
}


const faqs = [
  {
    question: 'How is nurse-led companion care different from regular companion care?',
    answer: 'Regular companion care is delivered by support workers without medical training. Our companion care is managed and delivered under the active supervision of Registered Nurses. During each social visit, we perform subtle clinical observations of cognitive function, hydration, gait stability, and mood, catching potential medical risks before they escalate.',
  },
  {
    question: 'What activities do you do during companion visits?',
    answer: 'Activities are fully tailored to our clients. We do cognitive engagement exercises, discuss current events, enjoy shared hobbies, go for light accompanied walks, play memory games, or share quiet conversation over tea.',
  },
  {
    question: 'Can you provide regular progress updates to families?',
    answer: 'Yes. Communication is a core value for us. After every single companion care visit, we send a detailed, clear update to designated family members, giving you complete peace of mind about your loved one&apos;s physical and emotional health.',
  },
]

export default function CompanionCare() {
  return (
    <>
      <ServicePageSchema
        serviceName="Companion Care Perth | Home Companion Services | Care N Cure"
        description="Meaningful companionship with nurse-led oversight. Social engagement, meal support & wellbeing checks by caring professionals. Serving Perth & surrounds."
        url="/companion-care"
        procedureType="Companion Care"
        faqs={faqs}
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Services', item: 'https://carencure.com.au/services' },
          { name: 'Companion Care', item: 'https://carencure.com.au/companion-care' },
        ]}
      />


      <PageHeader
        title="Companion Care"
        subtitle="Enriching, nurse-led companionship and social connection for Perth seniors."
        breadcrumbItems={[
          { name: 'Services', href: '/#services' },
          { name: 'Companion Care', href: '/companion-care' },
        ]}
        label="Clinical Companionship"
      />

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="section-label mb-2">Social Connection</p>
                <h2 className="text-navy text-3xl font-bold">Blending genuine social connection with professional clinical vigilance</h2>
                <div className="section-divider" />
                <p className="text-body text-lg leading-relaxed mt-4">
                  Loneliness and social isolation are major risk factors for cognitive decline, depression, and physical frailty in older adults. Our companion care combines warm, engaging social interactions with the reassuring safety net of professional nursing observation.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-navy text-2xl font-bold">Our Nursing-Led Companionship Services</h3>
                <p className="text-body">
                  We believe that good healthcare treats the whole person — their emotional and social needs are just as vital as their clinical prescriptions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div className="card-base p-5 flex gap-4">
                    <Smile className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Cognitive Engagement</h4>
                      <p className="text-body text-sm">Gentle memory stimulation, sharing stories, puzzles, and pursuing personal creative hobbies or interests.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <ShieldCheck className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Subtle Clinical Monitoring</h4>
                      <p className="text-body text-sm">Quietly observing fluid intake, nutritional balance, physical balance, and any changes in cognitive focus or mood.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <Heart className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Social Companionship</h4>
                      <p className="text-body text-sm">Enjoying conversation over tea, talking about news and history, and providing supportive social contact.</p>
                    </div>
                  </div>

                  <div className="card-base p-5 flex gap-4">
                    <Sparkles className="w-8 h-8 text-teal-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold mb-1">Detailed Family Updates</h4>
                      <p className="text-body text-sm">Sending regular, comprehensive reports after each visit so the family is always connected and reassured.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-2xl border border-border">
                <h3 className="text-navy text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-accent" />
                  What makes our approach unique?
                </h3>
                <ul className="space-y-3 text-body text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Consistent friendly faces:</strong> No rotating doors. The same nurse visits each time, building a real friendship.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Clinical clinical support:</strong> We notice early signs of urinary tract infections, cognitive changes, or medication slips.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-accent font-bold">•</span>
                    <span><strong>Empathetic listening:</strong> Valuing the client&apos;s history, opinions, and legacy with complete respect.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <ContactForm
                  title="Enquire About Companion Care"
                  subtitle="Please fill out the form below. A registered nurse will call you back to discuss how we can support your loved one."
                  defaultService="Companion Care"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section-py bg-surface border-t border-border">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-navy font-bold">Frequently Asked Questions</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="card-base p-6 divide-y divide-border">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4 first:pt-0 last:pb-0">
                <h4 className="text-navy font-bold mb-2">{faq.question}</h4>
                <p className="text-body text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-white border-t border-border">
        <div className="section-container max-w-4xl">
          <h2 className="text-navy font-bold text-xl mb-6">Related Nursing Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Support at Home', href: '/support-at-home' },
              { label: 'Mobility Support', href: '/mobility-support' },
              { label: 'Private Nursing', href: '/private-nursing' },
              { label: 'Home Care Packages', href: '/homecare-packages' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="card-base p-4 text-sm font-semibold text-navy hover:text-teal-accent flex items-center gap-2 transition-colors"
              >
                <span className="text-teal-accent">→</span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for reliable, nurse-led companionship for a parent?"
        description="Speak with co-founders Jinu and Zuhair to coordinate a regular and caring companion plan today."
        secondaryLink={{ text: 'Call Us Now', href: '/contact' }}
      />
    </>
  )
}
