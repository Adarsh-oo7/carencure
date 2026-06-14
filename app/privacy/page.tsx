import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Nurse Who Knows You Perth WA',
  description: 'Confidentiality and Privacy Policy. How we collect, store, protect, and handle your personal and clinical medical information under the Australian Privacy Act 1988.',
  alternates: { canonical: 'https://carencure.com.au/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="How we collect, manage, and safeguard your clinical and personal health records."
        breadcrumbItems={[{ name: 'Privacy Policy', href: '/privacy' }]}
        label="Confidentiality & Compliance"
      />

      <section className="section-py bg-white">
        <div className="section-container max-w-3xl">
          
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-teal-accent flex-shrink-0" />
            <h2 className="text-navy text-2xl font-bold" style={{ fontSize: '1.5rem' }}>Your clinical privacy is our professional duty</h2>
          </div>

          <div className="space-y-6 text-body text-sm leading-relaxed">
            <p>
              This Privacy Policy explains how <strong>The Nurse Who Knows You</strong> (registered as Care N Cure Nursing Care Services, ABN 87 152 479 362) collects, stores, uses, and discloses your personal and clinical health information. We are bound by the Australian Privacy Principles (APPs) contained in the <em>Privacy Act 1988 (Cth)</em> and strict professional confidentiality obligations applicable to registered nursing practitioners.
            </p>

            <hr className="border-border my-6" />

            <h3 className="text-navy text-lg font-bold">1. Clinical Information We Collect</h3>
            <p>
              To provide safe and effective nursing care, we must collect relevant personal and highly sensitive health data. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact details (name, home address, email, and phone number).</li>
              <li>Date of birth, gender, and contact information for next-of-kin or emergency contacts.</li>
              <li>Medical histories, hospital discharge summaries, specialist directives, and doctor details.</li>
              <li>Clinical charts, vital signs, wound descriptions/photographs, and medication lists.</li>
              <li>Details of other healthcare professionals involved in your care.</li>
            </ul>

            <h3 className="text-navy text-lg font-bold">2. How We Collect Information</h3>
            <p>
              We collect information directly from you, your family members, or your legally authorized representatives during initial assessments and ongoing nursing visits. We may also collect details from hospital discharge teams, surgeons, or your General Practitioner, but only with your explicit consent or where permitted under Australian healthcare regulations.
            </p>

            <h3 className="text-navy text-lg font-bold">3. Use and Disclosure of Information</h3>
            <p>
              Your clinical health records are treated with the highest degree of confidentiality. We use this information solely to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Plan, deliver, and evaluate your clinical nursing care at home.</li>
              <li>Coordinate with your doctors, surgeons, or allied health professionals to ensure recovery continuity.</li>
              <li>Document mandatory clinical records required under Australian nursing regulations.</li>
              <li>Respond to clinical emergencies by providing accurate charts to paramedic and hospital teams.</li>
            </ul>
            <p>
              We **never** sell, rent, or disclose your clinical or personal records to third-party marketing companies. Disclosure only occurs where required by law or with your direct permission.
            </p>

            <h3 className="text-navy text-lg font-bold">4. Data Storage and Security</h3>
            <p>
              We use secure, Australian-hosted digital platforms that meet the strict health record security requirements. Electronic files are encrypted, protected by multi-factor authentication, and are only accessible by authorized clinical staff. Any physical charts or documents are kept secure and are shredded when no longer legally required.
            </p>

            <h3 className="text-navy text-lg font-bold">5. Accessing and Correcting Your Records</h3>
            <p>
              You have a legal right to request access to the personal and clinical health records we hold about you. You may also request corrections if you believe the information is out-of-date or inaccurate. To do so, please contact our founders directly using the contact details below.
            </p>

            <h3 className="text-navy text-lg font-bold">6. Contact and Enquiries</h3>
            <p>
              If you have any questions, concerns, or complaints regarding how your clinical data is handled, please contact us at:
            </p>
            <div className="bg-surface p-5 rounded-xl border border-border mt-3 text-xs space-y-1">
              <p><strong>Privacy Officer:</strong> The Nurse Who Knows You (Care N Cure Nursing Care Services)</p>
              <p><strong>Address:</strong> Perth WA</p>
              <p><strong>Email:</strong> hello@carencure.com.au</p>
              <p><strong>Phone:</strong> 0403 760 159, 0481 748 516 or 0412 593 102</p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
