'use client'

import { Phone, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const PHONE_NUMBER = '0481 748 516'
const PHONE_HREF = 'tel:+61481748516'

export function CTASection() {
  const chooseUsReasons = [
    'One person who knows their loved one',
    'Less confusion and fewer handovers',
    'Better communication',
    'Clinical eyes on important health issues',
    'Confidence that nothing is missed',
    'Support that actually feels personal',
  ]

  const promisePoints = [
    { label: 'Personal', sub: 'not transactional' },
    { label: 'Continuous', sub: 'not fragmented' },
    { label: 'Clinical', sub: 'but also compassionate' },
    { label: 'Clear', sub: 'not confusing' },
  ]

  return (
    <section className="bg-slate-50 border-t border-slate-200" aria-labelledby="choose-us-heading">
      <div className="section-container py-20">
        
        {/* Row 1: Why Families Choose Us & For Families */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          
          {/* Left Column: Why Families Choose Us */}
          <div className="card-base p-8 sm:p-10 bg-white border border-slate-100 shadow-sm rounded-3xl animate-fade-in">
            <h3 id="choose-us-heading" className="text-navy font-bold text-2xl mb-6">
              Why Families Choose Us
            </h3>
            <p className="text-body text-base mb-6 font-medium text-slate-500">
              Because they want:
            </p>
            <ul className="space-y-4">
              {chooseUsReasons.map((reason, i) => (
                <li key={i} className="flex items-start gap-3 text-body text-base">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-50 text-teal-accent flex items-center justify-center font-bold text-xs mt-0.5 border border-teal-100">
                    ✓
                  </span>
                  <span className="font-medium">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: For Families */}
          <div className="flex flex-col justify-center h-full lg:pt-6">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 bg-teal-100 text-teal-accent self-start">
              For Families
            </div>
            <h3 className="text-navy font-bold text-3xl mb-6 leading-tight">
              We understand how stressful it can be trying to support an ageing parent.
            </h3>
            <div className="space-y-4 text-body text-lg leading-relaxed">
              <p>You want reassurance.</p>
              <p>You want clarity.</p>
              <p className="font-semibold text-teal-accent">
                You want someone who notices changes before they become problems.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: Our Promise: You Will Never Feel Like Just Another Client */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 mb-20 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="section-label mb-2">Our Core Promise</p>
            <h3 className="text-navy font-bold text-3xl">
              You Will Never Feel Like Just Another Client
            </h3>
            <p className="text-body mt-4 text-base">
              We believe care should feel:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {promisePoints.map((pt, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center">
                <span className="block text-teal-accent font-bold text-xl mb-1">{pt.label}</span>
                <span className="block text-body text-sm font-medium text-slate-500">{pt.sub}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 max-w-2xl mx-auto border-t border-slate-100 pt-6">
            <p className="font-bold text-navy text-lg">
              Because older Australians deserve care that actually feels like care.
            </p>
          </div>
        </div>

        {/* Row 3: Bottom Action Callout Block */}
        <div
          className="rounded-3xl p-10 sm:p-16 text-center text-white shadow-xl relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #091E30 0%, #0D2B45 60%, #1A3D5C 100%)' }}
        >
          {/* Decorative gradients */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-teal-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-teal-accent/10 rounded-full blur-3xl pointer-events-none" />

          <p className="text-teal-accent text-sm font-bold uppercase tracking-widest mb-4">
            The Nurse Who Knows You
          </p>
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto leading-tight mb-4">
            Helping Australians Stay Safe, Supported, and Independent at Home
          </h2>
          <p className="text-teal-100 text-lg sm:text-xl font-medium max-w-2xl mx-auto mb-10">
            One Client. One Nurse Coordinator. One Trusted Relationship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="btn-phone text-lg w-full sm:w-auto justify-center"
              id="cta-book-btn"
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('open-phone-modal'));
              }}
              className="btn-outline-white text-lg w-full sm:w-auto justify-center cursor-pointer"
              id="cta-call-btn"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              Call Us Today
            </button>
          </div>

          <p className="mt-8 text-xs text-white/40">
            AHPRA Registered Nurse Coordinators · Customised Care Plans · Compassionate In-Home Care
          </p>
        </div>

      </div>
    </section>
  )
}
