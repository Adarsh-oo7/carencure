import type { Metadata } from 'next'
import { Stethoscope, Heart, Shield, Users, Pill, Activity } from 'lucide-react'
import { HeroSection } from '@/components/sections/hero'
import { ServicesGrid } from '@/components/sections/services-grid'
import { CTASection } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'Our Services | Care N Cure',
  description: 'Explore our comprehensive healthcare services including general practice, preventive care, emergency services, and more.',
}

export default function ServicesPage() {
  const services = [
    {
      icon: Stethoscope,
      title: 'General Practice',
      description: 'Comprehensive health consultations for acute and chronic conditions. Our experienced doctors provide diagnosis and treatment plans.',
    },
    {
      icon: Heart,
      title: 'Preventive Care',
      description: 'Regular health screenings and wellness programs designed to maintain your health and prevent diseases.',
    },
    {
      icon: Shield,
      title: 'Emergency Services',
      description: '24/7 emergency care with fully equipped facilities. Fast response times and expert trauma management.',
    },
    {
      icon: Users,
      title: 'Family Healthcare',
      description: 'Complete healthcare solutions for your entire family including pediatric and geriatric services.',
    },
    {
      icon: Pill,
      title: 'Diagnostic Services',
      description: 'Advanced laboratory tests and diagnostic imaging using modern equipment for accurate health assessment.',
    },
    {
      icon: Activity,
      title: 'Wellness Programs',
      description: 'Personalized fitness and nutrition counseling to help you achieve your health and wellness goals.',
    },
  ]

  const specializedServices = [
    {
      title: 'Surgical Services',
      description: 'Our surgical team performs both routine and complex procedures with precision and care.',
    },
    {
      title: 'Pediatric Care',
      description: 'Specialized healthcare for infants, children, and adolescents with a friendly, child-focused approach.',
    },
    {
      title: 'Geriatric Care',
      description: 'Specialized services for elderly patients addressing age-related health conditions and mobility issues.',
    },
    {
      title: 'Maternal Health',
      description: 'Comprehensive prenatal, natal, and postnatal care for expectant mothers.',
    },
    {
      title: 'Chronic Disease Management',
      description: 'Long-term management plans for conditions like diabetes, hypertension, and heart disease.',
    },
    {
      title: 'Vaccination Services',
      description: 'Complete immunization programs for children and adults following international standards.',
    },
  ]

  return (
    <main>
      <HeroSection
        title="Our Healthcare Services"
        subtitle="Services"
        description="Comprehensive medical services designed to meet all your healthcare needs. From preventive care to emergency services, we&apos;re here for you."
        imageUrl="https://images.unsplash.com/photo-1631217314831-c6227db76b6e?w=1200&h=800&fit=crop"
        imageAlt="Healthcare services"
      />

      <ServicesGrid
        title="Core Services"
        subtitle="What We Offer"
        services={services}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm md:text-base font-semibold text-primary mb-2">
              Specialized Services
            </p>
            <h2 className="text-secondary">
              Specialized Care Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedServices.map((service, index) => (
              <div
                key={index}
                className="bg-background rounded-lg border border-border p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-secondary text-center mb-8">Service Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Expert Medical Team', description: 'Experienced doctors and healthcare professionals' },
                { title: 'Modern Equipment', description: 'State-of-the-art diagnostic and treatment facilities' },
                { title: 'Patient Comfort', description: 'Comfortable facilities with patient-centered care' },
                { title: 'Quick Appointments', description: 'Convenient scheduling and minimal wait times' },
                { title: 'Affordable Pricing', description: 'Transparent and competitive healthcare costs' },
                { title: 'Follow-up Care', description: 'Comprehensive post-treatment support and monitoring' },
              ].map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        description="Choose the service that&apos;s right for you and schedule an appointment with our healthcare team."
        ctaText="Book Appointment"
        ctaHref="/"
      />
    </main>
  )
}
