import type { Metadata } from 'next'
import { PrintReferralForm } from '@/components/forms/print-referral-form'

export const metadata: Metadata = {
  title: 'Printable Clinical Referral Form | Hospital & GP In-Home Nursing Perth | Care N Cure',
  description:
    'Download and print the official Care N Cure clinical referral form for hospital discharge coordinators, GPs, and specialists in Perth, WA.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrintReferralPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-6 px-4 sm:px-6 print:bg-white print:p-0">
      <PrintReferralForm />
    </main>
  )
}
