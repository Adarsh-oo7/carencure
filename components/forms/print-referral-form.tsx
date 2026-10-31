'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Printer, ArrowLeft, RotateCcw, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react'

export function PrintReferralForm() {
  const [formData, setFormData] = useState({
    urgency: 'Routine (Within 24–48 hours)',
    clientName: '',
    clientDob: '',
    medicareNo: '',
    ndisNo: '',
    address: '',
    suburb: '',
    phone: '',
    emergencyContact: '',
    emergencyPhone: '',
    fundingType: 'NDIS (Plan-managed / Self-managed)',
    clinicalSummary: '',
    medications: '',
    allergies: 'NKDA',
    woundCareNeeded: false,
    woundDetails: '',
    medAdminNeeded: false,
    postSurgNeeded: false,
    continenceNeeded: false,
    vitalSignsNeeded: false,
    palliativeNeeded: false,
    referrerName: '',
    referrerRole: '',
    referrerFacility: '',
    referrerProviderNo: '',
    referrerPhone: '',
    referrerEmail: '',
    referrerDate: new Date().toISOString().split('T')[0],
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print()
    }
  }

  const handleReset = () => {
    if (window.confirm('Reset all fields to blank form?')) {
      setFormData({
        urgency: 'Routine (Within 24–48 hours)',
        clientName: '',
        clientDob: '',
        medicareNo: '',
        ndisNo: '',
        address: '',
        suburb: '',
        phone: '',
        emergencyContact: '',
        emergencyPhone: '',
        fundingType: 'NDIS (Plan-managed / Self-managed)',
        clinicalSummary: '',
        medications: '',
        allergies: 'NKDA',
        woundCareNeeded: false,
        woundDetails: '',
        medAdminNeeded: false,
        postSurgNeeded: false,
        continenceNeeded: false,
        vitalSignsNeeded: false,
        palliativeNeeded: false,
        referrerName: '',
        referrerRole: '',
        referrerFacility: '',
        referrerProviderNo: '',
        referrerPhone: '',
        referrerEmail: '',
        referrerDate: new Date().toISOString().split('T')[0],
      })
    }
  }

  return (
    <div className="max-w-[850px] mx-auto">
      {/* Top Controls - Hidden on Print */}
      <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <div className="flex items-center gap-3">
          <Link
            href="/referrals"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-navy transition-colors bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Referrals
          </Link>
          <span className="text-xs text-slate-400">|</span>
          <p className="text-xs text-slate-600">
            Fill on-screen or print a blank slip for clinical rounds.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-rose-600 transition-colors bg-slate-100 hover:bg-rose-50 px-3 py-2 rounded-lg"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-navy hover:bg-navy-dark transition-all px-4 py-2 rounded-lg shadow-sm hover:shadow"
          >
            <Printer className="w-4 h-4 text-teal-accent" />
            Print / Save as PDF
          </button>
        </div>
      </div>

      {/* A4 Document Container */}
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-md border border-slate-200 print:shadow-none print:border-none print:p-0 print:rounded-none">
        {/* Header with Letterhead */}
        <div className="border-b-2 border-navy pb-4 mb-5 flex flex-wrap justify-between items-start gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl font-black tracking-tight text-navy">CARE N CURE</span>
              <span className="text-xs px-2 py-0.5 rounded bg-teal-50 text-teal-accent border border-teal-200 font-bold uppercase tracking-wide">
                Nursing Practice
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-600">
              Community & In-Home Registered Nursing Services Perth, WA
            </p>
            <p className="text-[11px] text-slate-500">
              ABN: 87 152 479 362 • Clinical Director: Jinu (RN WA, AHPRA Registered)
            </p>
          </div>

          <div className="text-right text-[11px] text-slate-600 space-y-0.5">
            <p className="flex items-center justify-end gap-1 font-semibold text-navy">
              <Phone className="w-3 h-3 text-teal-accent" /> 1300 919 663 (Intake Hotline)
            </p>
            <p className="flex items-center justify-end gap-1">
              <Mail className="w-3 h-3 text-teal-accent" /> hello@carencure.com.au
            </p>
            <p className="flex items-center justify-end gap-1">
              <MapPin className="w-3 h-3 text-teal-accent" /> 2232B Albany Hwy, Gosnells WA 6110
            </p>
            <p className="text-[10px] text-slate-400">Web: carencure.com.au</p>
          </div>
        </div>

        {/* Title & Urgency */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
          <div>
            <h1 className="text-base font-bold text-navy uppercase tracking-wide">
              Clinical In-Home Nursing Referral Form
            </h1>
            <p className="text-[11px] text-slate-500">
              For Hospital Discharge Coordinators, GPs, Nurse Practitioners & Care Managers
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-navy">Urgency:</span>
            <select
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              className="text-xs border border-slate-300 rounded-md px-2 py-1 font-semibold bg-white text-navy focus:outline-none focus:ring-1 focus:ring-teal-accent"
            >
              <option>Hospital Discharge (Today / Tomorrow)</option>
              <option>Urgent Clinical Need (Within 24 hours)</option>
              <option>Routine (Within 24–48 hours)</option>
            </select>
          </div>
        </div>

        {/* Section 1: Patient Details */}
        <div className="mb-5">
          <div className="text-xs font-bold text-navy uppercase tracking-wider bg-slate-100 px-3 py-1.5 rounded mb-3 flex items-center justify-between">
            <span>1. Patient Demographics</span>
            <span className="text-[10px] text-slate-500 normal-case font-normal">
              Zero travel surcharges within 50km of Gosnells HQ
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="sm:col-span-2">
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                Full Patient Name *
              </label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                placeholder="e.g. Margaret Smith"
                className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-xs text-navy focus:outline-none focus:border-teal-accent"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                Date of Birth *
              </label>
              <input
                type="text"
                name="clientDob"
                value={formData.clientDob}
                onChange={handleChange}
                placeholder="DD/MM/YYYY"
                className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-xs text-navy focus:outline-none focus:border-teal-accent"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                Residential Address *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street Address, Unit / Apt"
                className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-xs text-navy focus:outline-none focus:border-teal-accent"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                Suburb & Postcode *
              </label>
              <input
                type="text"
                name="suburb"
                value={formData.suburb}
                onChange={handleChange}
                placeholder="e.g. Gosnells WA 6110"
                className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-xs text-navy focus:outline-none focus:border-teal-accent"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                Patient Contact Phone *
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="04xx xxx xxx"
                className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-xs text-navy focus:outline-none focus:border-teal-accent"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                Medicare Number
              </label>
              <input
                type="text"
                name="medicareNo"
                value={formData.medicareNo}
                onChange={handleChange}
                placeholder="xxxx xxxxx x (Ref #)"
                className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-xs text-navy focus:outline-none focus:border-teal-accent"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                NDIS / HCP Reference (if applicable)
              </label>
              <input
                type="text"
                name="ndisNo"
                value={formData.ndisNo}
                onChange={handleChange}
                placeholder="NDIS / HCP ID"
                className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-xs text-navy focus:outline-none focus:border-teal-accent"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                Next of Kin / Carer Name
              </label>
              <input
                type="text"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                placeholder="Carer / Family contact"
                className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-xs text-navy focus:outline-none focus:border-teal-accent"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                Carer Phone Number
              </label>
              <input
                type="text"
                name="emergencyPhone"
                value={formData.emergencyPhone}
                onChange={handleChange}
                placeholder="04xx xxx xxx"
                className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-xs text-navy focus:outline-none focus:border-teal-accent"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                Funding Pathway *
              </label>
              <select
                name="fundingType"
                value={formData.fundingType}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded px-2 py-1.5 text-xs text-navy bg-white focus:outline-none focus:border-teal-accent font-medium"
              >
                <option>NDIS (Plan-managed / Self-managed)</option>
                <option>Support at Home / HCP (Associated Provider)</option>
                <option>Private Self-Funded Care</option>
                <option>DVA (Department of Veterans Affairs)</option>
                <option>Hospital In-Home Recovery Subcontract</option>
                <option>Worker Compensation / Insurance</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: Clinical Services Requested */}
        <div className="mb-5">
          <div className="text-xs font-bold text-navy uppercase tracking-wider bg-slate-100 px-3 py-1.5 rounded mb-3">
            2. Clinical Services Requested (Select all that apply)
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs mb-3">
            <label className="flex items-center gap-2 cursor-pointer p-2 rounded border border-slate-200 hover:bg-slate-50">
              <input
                type="checkbox"
                name="woundCareNeeded"
                checked={formData.woundCareNeeded}
                onChange={handleChange}
                className="rounded text-teal-accent focus:ring-0"
              />
              <span className="font-semibold text-navy">Complex Wound Care</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer p-2 rounded border border-slate-200 hover:bg-slate-50">
              <input
                type="checkbox"
                name="medAdminNeeded"
                checked={formData.medAdminNeeded}
                onChange={handleChange}
                className="rounded text-teal-accent focus:ring-0"
              />
              <span className="font-semibold text-navy">Medication Management</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer p-2 rounded border border-slate-200 hover:bg-slate-50">
              <input
                type="checkbox"
                name="postSurgNeeded"
                checked={formData.postSurgNeeded}
                onChange={handleChange}
                className="rounded text-teal-accent focus:ring-0"
              />
              <span className="font-semibold text-navy">Post-Surgical Recovery</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer p-2 rounded border border-slate-200 hover:bg-slate-50">
              <input
                type="checkbox"
                name="continenceNeeded"
                checked={formData.continenceNeeded}
                onChange={handleChange}
                className="rounded text-teal-accent focus:ring-0"
              />
              <span className="font-semibold text-navy">Catheter / Continence Care</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer p-2 rounded border border-slate-200 hover:bg-slate-50">
              <input
                type="checkbox"
                name="vitalSignsNeeded"
                checked={formData.vitalSignsNeeded}
                onChange={handleChange}
                className="rounded text-teal-accent focus:ring-0"
              />
              <span className="font-semibold text-navy">Vital Signs & Chronic Care</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer p-2 rounded border border-slate-200 hover:bg-slate-50">
              <input
                type="checkbox"
                name="palliativeNeeded"
                checked={formData.palliativeNeeded}
                onChange={handleChange}
                className="rounded text-teal-accent focus:ring-0"
              />
              <span className="font-semibold text-navy">Palliative Home Nursing</span>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                Primary Diagnosis & Reason for In-Home Referral *
              </label>
              <textarea
                name="clinicalSummary"
                rows={3}
                value={formData.clinicalSummary}
                onChange={handleChange}
                placeholder="Include diagnosis, surgery date, clinical goals, frequency of visits requested..."
                className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-xs text-navy focus:outline-none focus:border-teal-accent"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                Wound Specs / Dressing Protocol / Medications (if applicable)
              </label>
              <textarea
                name="woundDetails"
                rows={3}
                value={formData.woundDetails}
                onChange={handleChange}
                placeholder="Wound location, dressing regime, exudate, sutures/staples removal date, or IV/subcut medications..."
                className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-xs text-navy focus:outline-none focus:border-teal-accent"
              />
            </div>
          </div>

          <div className="mt-2 flex gap-4 text-xs">
            <div className="w-1/2">
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                Known Allergies (or NKDA)
              </label>
              <input
                type="text"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded px-2.5 py-1 text-xs text-navy"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                Safety Alerts / Infection Control (e.g. MRSA, VRE, Pets, Access)
              </label>
              <input
                type="text"
                name="medications"
                value={formData.medications}
                onChange={handleChange}
                placeholder="Nil or specify"
                className="w-full border border-slate-300 rounded px-2.5 py-1 text-xs text-navy"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Referrer Details */}
        <div className="mb-5">
          <div className="text-xs font-bold text-navy uppercase tracking-wider bg-slate-100 px-3 py-1.5 rounded mb-3">
            3. Referring Clinician / Hospital Coordinator Details
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                Referrer Name *
              </label>
              <input
                type="text"
                name="referrerName"
                value={formData.referrerName}
                onChange={handleChange}
                placeholder="e.g. Dr. / RN / Coordinator"
                className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-xs text-navy focus:outline-none focus:border-teal-accent"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                Role / Title
              </label>
              <input
                type="text"
                name="referrerRole"
                value={formData.referrerRole}
                onChange={handleChange}
                placeholder="e.g. Discharge Planner / GP"
                className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-xs text-navy focus:outline-none focus:border-teal-accent"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                Hospital / Practice Name *
              </label>
              <input
                type="text"
                name="referrerFacility"
                value={formData.referrerFacility}
                onChange={handleChange}
                placeholder="e.g. Fiona Stanley / GP Clinic"
                className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-xs text-navy focus:outline-none focus:border-teal-accent"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                Direct Phone / Extension *
              </label>
              <input
                type="text"
                name="referrerPhone"
                value={formData.referrerPhone}
                onChange={handleChange}
                placeholder="Direct line or mobile"
                className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-xs text-navy focus:outline-none focus:border-teal-accent"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                Email Address (for clinical notes) *
              </label>
              <input
                type="text"
                name="referrerEmail"
                value={formData.referrerEmail}
                onChange={handleChange}
                placeholder="clinic@health.wa.gov.au"
                className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-xs text-navy focus:outline-none focus:border-teal-accent"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                Provider No. (if applicable)
              </label>
              <input
                type="text"
                name="referrerProviderNo"
                value={formData.referrerProviderNo}
                onChange={handleChange}
                placeholder="AHPRA / Provider #"
                className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-xs text-navy focus:outline-none focus:border-teal-accent"
              />
            </div>
          </div>
        </div>

        {/* Signature & Submission Instructions */}
        <div className="pt-3 border-t border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end mb-4">
            <div>
              <p className="text-[11px] text-slate-500 mb-4">
                By submitting this referral, the referring clinician confirms that patient or guardian consent has been obtained for Care N Cure to conduct in-home nursing assessment and coordinate care with the treating medical team.
              </p>
              <div className="border-b border-slate-400 pb-1 flex justify-between items-end">
                <span className="text-[11px] font-semibold text-slate-600">Referrer Signature:</span>
                <span className="text-[10px] text-slate-400">Date: {formData.referrerDate}</span>
              </div>
            </div>

            <div className="bg-teal-50/70 p-3 rounded-xl border border-teal-200 text-xs text-slate-700 space-y-1">
              <p className="font-bold text-navy flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-accent" /> How to Submit This Form:
              </p>
              <p className="text-[11px]">
                <strong>Option 1 (Fastest):</strong> Email scanned/saved form + discharge summary to{' '}
                <a href="mailto:hello@carencure.com.au" className="text-teal-accent underline font-semibold">
                  hello@carencure.com.au
                </a>
              </p>
              <p className="text-[11px]">
                <strong>Option 2:</strong> Call nurse triage directly on{' '}
                <a href="tel:1300919663" className="text-teal-accent underline font-semibold">
                  1300 919 663
                </a>{' '}
                for immediate verbal intake.
              </p>
              <p className="text-[10px] text-slate-500 mt-1">
                Clinical intake is acknowledged within 24 hours. Emergency: Call 000.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
