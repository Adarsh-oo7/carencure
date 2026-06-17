import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CTASection } from '@/components/sections/cta'
import { ShieldCheck, HeartPulse, FileText, ClipboardList, HelpCircle, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Clinical Quality & Feedback Policy | Care N Cure',
  description: 'Our commitment to clinical governance, transparency, and continuous quality improvement for in-home nursing care in Perth.',
  alternates: { canonical: 'https://carencure.com.au/testimonials' },
}

export default function QualityFeedbackPage() {
  return (
    <>
      <PageHeader
        title="Quality & Feedback"
        subtitle="Our commitment to clinical excellence and transparency."
        breadcrumbItems={[{ name: 'Quality & Feedback', href: '/testimonials' }]}
        label="Clinical Governance"
      />

      <section className="section-py bg-white">
        <div className="section-container max-w-4xl">
          
          {/* Compliance Statement Alert */}
          <div className="card-base p-8 mb-12 border-2 border-dashed border-teal-accent bg-surface/50" id="compliance-statement">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-10 h-10 text-teal-accent flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-navy text-xl font-bold mb-3" style={{ fontSize: '1.25rem' }}>
                  Testimonials & Advertising Compliance
                </h2>
                <p className="text-body text-sm leading-relaxed mb-4">
                  In Australia, Registered Nurses are regulated health practitioners. Under Section 133 of the <em>Health Practitioner Regulation National Law</em>, it is an offence to advertise a regulated health service using testimonials or clinical reviews on platforms controlled by the practice.
                </p>
                <p className="text-body text-sm leading-relaxed">
                  To maintain complete compliance and professional integrity, <strong>Care N Cure</strong> does not publish client testimonials or clinical reviews on this website. We believe health services should be chosen based on objective clinical qualifications, credentials, registration status, and quality framework standards.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            
            {/* Our Quality Framework */}
            <div>
              <h3 className="text-navy text-2xl font-bold mb-6 text-center lg:text-left">Our Clinical Quality Framework</h3>
              <p className="text-body text-sm leading-relaxed mb-6">
                We maintain a rigorous framework to ensure the safety, effectiveness, and clinical appropriateness of all nursing services delivered across Perth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="card-base p-6 border border-border flex gap-4">
                  <HeartPulse className="w-8 h-8 text-teal-accent flex-shrink-0" />
                  <div>
                    <h4 className="text-navy font-bold mb-2 text-base">Registered Nurses Only</h4>
                    <p className="text-body text-xs leading-relaxed">
                      All clinical assessments, wound care, and medication administrations are performed strictly by university-trained Registered Nurses, never delegated to support workers.
                    </p>
                  </div>
                </div>

                <div className="card-base p-6 border border-border flex gap-4">
                  <ClipboardList className="w-8 h-8 text-teal-accent flex-shrink-0" />
                  <div>
                    <h4 className="text-navy font-bold mb-2 text-base">Active Clinical Oversight</h4>
                    <p className="text-body text-xs leading-relaxed">
                      Our co-founders, Jinu and Zuhair, review care plans, coordinate handovers with discharging hospitals, and maintain direct contact with your local General Practitioners.
                    </p>
                  </div>
                </div>

                <div className="card-base p-6 border border-border flex gap-4">
                  <FileText className="w-8 h-8 text-teal-accent flex-shrink-0" />
                  <div>
                    <h4 className="text-navy font-bold mb-2 text-base">Roster Continuity Guarantee</h4>
                    <p className="text-body text-xs leading-relaxed">
                      We pair every client with a dedicated Nurse Coordinator, guaranteeing you see the same nurse who understands your health journey inside-out.
                    </p>
                  </div>
                </div>

                <div className="card-base p-6 border border-border flex gap-4">
                  <ShieldCheck className="w-8 h-8 text-teal-accent flex-shrink-0" />
                  <div>
                    <h4 className="text-navy font-bold mb-2 text-base">Australian Privacy Compliance</h4>
                    <p className="text-body text-xs leading-relaxed">
                      All clinical records, medication charts, and communication logs are stored in encrypted, secure systems compliant with the <em>Privacy Act 1988 (Cth)</em>.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* How We Collect & Use Feedback */}
            <div className="bg-surface p-8 rounded-3xl border border-border">
              <h3 className="text-navy text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-teal-accent" />
                How to Provide Feedback
              </h3>
              <p className="text-body text-sm leading-relaxed mb-6">
                Your feedback is essential to our continuous clinical improvement. Whether you wish to share a suggestion, compliment our team, or raise a concern, we provide multiple direct channels:
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 items-start border-b border-border pb-4">
                  <span className="w-6 h-6 rounded-full bg-teal-accent/10 text-teal-accent flex items-center justify-center font-bold text-xs mt-0.5">1</span>
                  <div>
                    <h4 className="text-navy font-bold text-sm">Direct Phone Discussion</h4>
                    <p className="text-body text-xs mt-1">
                      Call our nursing directors directly on <strong>1300 919 663</strong>. We discuss all feedback personally and resolve matters promptly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start border-b border-border pb-4">
                  <span className="w-6 h-6 rounded-full bg-teal-accent/10 text-teal-accent flex items-center justify-center font-bold text-xs mt-0.5">2</span>
                  <div>
                    <h4 className="text-navy font-bold text-sm">Written Feedback or Enquiry</h4>
                    <p className="text-body text-xs mt-1">
                      Email our management team at <a href="mailto:hello@carencure.com.au" className="text-teal-600 font-semibold hover:underline">hello@carencure.com.au</a> with details of your experience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start pb-2">
                  <span className="w-6 h-6 rounded-full bg-teal-accent/10 text-teal-accent flex items-center justify-center font-bold text-xs mt-0.5">3</span>
                  <div>
                    <h4 className="text-navy font-bold text-sm">Independent Business Reviews</h4>
                    <p className="text-body text-xs mt-1 text-balance">
                      While our guidelines prohibit us from publishing clinical reviews on our own website, patients are welcome to share their general feedback on independent public platforms (such as Google Reviews) where reviews are managed independently without our influence or moderation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formal Complaints Resolution */}
            <div className="space-y-4">
              <h3 className="text-navy text-xl font-bold flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-teal-accent" />
                Formal Complaints & Advocacy
              </h3>
              <p className="text-body text-xs leading-relaxed">
                If you have a concern regarding our nursing care that has not been satisfactorily resolved by our directors, you have the right to seek independent advocacy or file a formal complaint with the <strong>Health and Disability Services Complaints Office (HaDSCO)</strong> in Western Australia. HaDSCO is an independent statutory authority providing a free complaint resolution service.
              </p>
              <p className="text-body text-xs leading-relaxed">
                Learn more at the <a href="https://www.hadsco.wa.gov.au" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-semibold hover:underline">HaDSCO Website</a> or call <strong>(08) 6551 7600</strong>.
              </p>
            </div>

          </div>

        </div>
      </section>

      <CTASection
        title="Speak directly with our nursing founders today."
        description="Whether you need post-hospital recovery in Rockingham or wound management in Cottesloe, call us directly to discuss your clinical needs."
        secondaryLink={{ text: 'Contact Us Now', href: '/contact' }}
      />
    </>
  )
}
