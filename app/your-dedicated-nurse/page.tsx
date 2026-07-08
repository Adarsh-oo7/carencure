import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, XCircle } from 'lucide-react'

import { ServicePageSchema } from '@/components/schema'

export const metadata: Metadata = {
  title: 'Your Dedicated Nurse | Personal Nurse Coordinator Perth | Care N Cure',
  description: 'One nurse coordinator assigned to you for the entire care journey. Consistent, personalised nursing care across Perth. Call 1300 919 663.',
  alternates: { canonical: 'https://carencure.com.au/your-dedicated-nurse' },
}


const timelineSteps = [
  {
    id: 'step-enquiry',
    step: '1',
    title: 'We receive your enquiry',
    body: 'You call or enquire online. Within 24 hours, a registered nurse from our team contacts you directly — not a receptionist.',
  },
  {
    id: 'step-assigned',
    step: '2',
    title: 'Your Dedicated Nurse is assigned',
    body: 'Before your first visit, we match you with your dedicated nurse based on your care needs, location, and clinical requirements.',
  },
  {
    id: 'step-assessment',
    step: '3',
    title: 'Initial home assessment',
    body: 'Your nurse visits your home, meets you and your family, reviews your medical history, discharge summary, medications, and home environment.',
  },
  {
    id: 'step-care-plan',
    step: '4',
    title: 'Your personalised care plan is created',
    body: 'Your nurse writes a care plan tailored to your specific needs. It covers clinical care, goals, family communication, and escalation protocols.',
  },
  {
    id: 'step-ongoing',
    step: '5',
    title: 'Ongoing care and monitoring',
    body: 'Your nurse visits regularly. They notice changes early, adjust the plan when needed, and coordinate with your GP and specialists.',
  },
  {
    id: 'step-family',
    step: '6',
    title: 'Family kept in the loop',
    body: 'Your nurse communicates with nominated family members. When you call, you speak with your nurse — not whoever happens to answer.',
  },
]

const otherProviders = [
  'A different carer at each visit',
  'Care managed from an office, not your home',
  'Family must re-explain history on every call',
  'Clinical changes noticed late',
  'Generic care plan, reviewed rarely',
]

const dedicatedNurse = [
  'Same nurse for every clinical visit',
  'Nurse is present, in your home, managing care',
  'Family has one number, one nurse, one relationship',
  'Changes in condition caught early',
  'Care plan updated and reviewed at every visit',
]

export default function YourDedicatedNursePage() {
  return (
    <>
      <ServicePageSchema
        serviceName="Your Dedicated Nurse | Personal Nurse Coordinator Perth | Care N Cure"
        description="One nurse coordinator assigned to you for the entire care journey. Consistent, personalised nursing care across Perth. Call 1300 919 663."
        url="/your-dedicated-nurse"
        procedureType="Personal Nurse Coordinator Model"
        breadcrumb={[
          { name: 'Home', item: 'https://carencure.com.au/' },
          { name: 'Your Dedicated Nurse', item: 'https://carencure.com.au/your-dedicated-nurse' },
        ]}
      />
      {/* SECTION 1 — HERO */}
      <section
        className="py-24"
        style={{ background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 60%, #14b8a6 100%)' }}
        aria-labelledby="dedicated-nurse-h1"
      >
        <div className="section-container text-center">
          <p className="text-teal-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Our Care Model
          </p>
          <h1
            id="dedicated-nurse-h1"
            className="text-white font-extrabold mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', lineHeight: 1.1 }}
          >
            Your Dedicated Nurse™
          </h1>
          <p className="text-teal-100 text-xl font-medium mb-6">
            One Client. One Nurse. From your first call to your last visit.
          </p>
          <p
            className="max-w-2xl mx-auto text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.88)' }}
          >
            Unlike traditional home care where a roster of different workers arrives each week,
            every client is assigned one dedicated Registered Nurse. This nurse knows
            you — your medical history, your preferences, your family, your goals. They stay with
            you throughout your entire care journey.
          </p>
        </div>
      </section>

      {/* SECTION 2 — JOURNEY TIMELINE */}
      <section className="py-20 bg-slate-50" aria-labelledby="journey-heading">
        <div className="section-container">
          <h2 id="journey-heading" className="text-navy text-center mb-14">
            How Your Dedicated Nurse Journey Works
          </h2>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical connector line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5 hidden sm:block"
              style={{ background: 'rgba(13,148,136,0.2)' }}
              aria-hidden="true"
            />
            <div className="space-y-8">
              {timelineSteps.map(({ id, step, title, body }) => (
                <div key={id} id={id} className="flex gap-6 items-start relative">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-lg flex-shrink-0 relative z-10"
                    style={{ background: '#0d9488', color: '#fff' }}
                  >
                    {step}
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-border flex-1">
                    <h3 className="text-navy font-bold text-lg mb-2">{title}</h3>
                    <p className="text-body leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CONTRAST */}
      <section className="py-20 bg-white" aria-labelledby="contrast-heading">
        <div className="section-container">
          <h2 id="contrast-heading" className="text-navy text-center mb-12">
            What Makes This Different
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left: other providers */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-border">
              <h3 className="text-slate-700 font-bold text-lg mb-6">What most providers do</h3>
              <ul className="space-y-4">
                {otherProviders.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-body text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Your Dedicated Nurse */}
            <div className="bg-teal-700 rounded-2xl p-8 text-white">
              <h3 className="text-white font-bold text-lg mb-6">
                What Your Dedicated Nurse™ does
              </h3>
              <ul className="space-y-4">
                {dedicatedNurse.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FOUNDERS */}
      <section className="py-20 bg-slate-50" aria-labelledby="founders-heading">
        <div className="section-container max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-border text-center">
            <h2 id="founders-heading" className="text-navy mb-5">
              Built by Nurses. For Families.
            </h2>
            <p className="text-body text-lg leading-relaxed mb-8">
              Our practice was founded by Jinu and Zuhair — two registered nurses with over a decade
              of clinical experience each in Australian hospitals and home care settings. They built
              the Dedicated Nurse model because they saw firsthand what happens when continuity of
              care breaks down after hospital discharge. Every nurse at our practice follows the same
              model they designed.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-teal-800 transition-colors"
              id="founders-about-cta"
            >
              Meet Jinu and Zuhair
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — BOTTOM CTA */}
      <section
        className="py-20 text-center"
        style={{ background: 'linear-gradient(135deg, #091E30 0%, #0D2B45 60%, #1A3D5C 100%)' }}
        aria-labelledby="dedicated-nurse-cta-heading"
      >
        <div className="section-container">
          <h2 id="dedicated-nurse-cta-heading" className="text-white mb-4">
            Ready to meet your nurse?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.78)' }}>
            Call us today. You&apos;ll speak with a registered nurse — not a receptionist.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-teal-400 text-navy font-bold px-8 py-4 rounded-xl hover:bg-teal-300 transition-colors text-lg"
            id="dedicated-nurse-book-cta"
          >
            Book a Free Assessment
          </Link>
        </div>
      </section>
    </>
  )
}
