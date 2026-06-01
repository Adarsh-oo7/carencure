import type { Metadata } from 'next'
import { Gift, Users, Heart, Award } from 'lucide-react'
import { HeroSection } from '@/components/sections/hero'
import { ValuesSection } from '@/components/sections/values'
import { CTASection } from '@/components/sections/cta'
import { ReferralForm } from '@/components/forms/referral-form'

export const metadata: Metadata = {
  title: 'Referral Program | Care N Cure',
  description: 'Refer a friend or family member to Care N Cure and help them get the healthcare they deserve.',
}

export default function ReferralsPage() {
  const benefits = [
    {
      icon: Gift,
      title: 'Exclusive Rewards',
      description: 'Get special rewards and discounts for every successful referral you make.',
    },
    {
      icon: Heart,
      title: 'Help Others',
      description: 'Share quality healthcare with friends and family members who need it.',
    },
    {
      icon: Users,
      title: 'Build Community',
      description: 'Be part of our growing community of satisfied patients and supporters.',
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Earn recognition as a valued member of the Care N Cure family.',
    },
  ]

  return (
    <main>
      <HeroSection
        title="Share Quality Healthcare"
        subtitle="Referral Program"
        description="Know someone who deserves excellent healthcare? Refer them to Care N Cure and help them join our community of satisfied patients."
        imageUrl="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=800&fit=crop"
        imageAlt="Share your healthcare experience"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm md:text-base font-semibold text-primary mb-2">
              How It Works
            </p>
            <h2 className="text-secondary mb-6">Simple Referral Process</h2>
            <p className="text-lg text-foreground leading-relaxed">
              Making a referral is easy. Just provide your friend&apos;s information, and we&apos;ll take care of the rest. Both you and your friend will enjoy benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Fill Referral Form', description: 'Tell us about your friend' },
              { step: '2', title: 'We Contact Them', description: 'We reach out with special offer' },
              { step: '3', title: 'First Appointment', description: 'They visit Care N Cure' },
              { step: '4', title: 'Get Rewards', description: 'You earn benefits' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-secondary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ValuesSection
        title="Referral Benefits"
        subtitle="What You Get"
        values={benefits}
      />

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-secondary text-center mb-8">Submit a Referral</h2>
            <div className="bg-background rounded-lg border border-border p-8">
              <ReferralForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-secondary text-center mb-12">FAQ</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {[
              {
                question: 'Who can I refer?',
                answer: 'You can refer anyone including family members, friends, colleagues, or acquaintances who would benefit from our healthcare services.',
              },
              {
                question: 'What rewards do I get?',
                answer: 'For each successful referral, you receive discounts on services, special gifts, and exclusive access to our premium wellness programs.',
              },
              {
                question: 'Is there a limit to referrals?',
                answer: 'No! You can refer as many people as you like. The more referrals you make, the more rewards you earn.',
              },
              {
                question: 'Do they know I referred them?',
                answer: 'We will mention your name as their referrer, but we can keep your details private if you prefer.',
              },
              {
                question: 'When do I get rewards?',
                answer: 'After your referred person completes their first appointment with us, your rewards will be credited within 7-10 business days.',
              },
            ].map((item, index) => (
              <div key={index} className="border-b border-border pb-6 last:border-0">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {item.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Help Someone Get Better Healthcare"
        description="Make a referral today and both you and your friend will enjoy our special referral benefits."
        ctaText="Make a Referral"
        ctaHref="#"
        isDark={false}
      />
    </main>
  )
}
