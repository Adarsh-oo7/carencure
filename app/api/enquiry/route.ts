import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      formType = 'contact',
      name = '',
      phone = '',
      email = '',
      suburb = '',
      service = '',
      funding = '',
      message = '',
      // Referral specific
      referrerName = '',
      referrerEmail = '',
      referrerPhone = '',
      patientName = '',
      patientEmail = '',
      patientPhone = '',
      relationship = '',
    } = body

    const enquiryRecord = {
      id: `enquiry_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      timestamp: new Date().toISOString(),
      formType,
      data: {
        name: name || referrerName || patientName,
        phone: phone || referrerPhone || patientPhone,
        email: email || referrerEmail || patientEmail,
        suburb,
        service,
        funding,
        message,
        referrer: {
          name: referrerName,
          email: referrerEmail,
          phone: referrerPhone,
          relationship,
        },
        patient: {
          name: patientName,
          email: patientEmail,
          phone: patientPhone,
        },
      },
    }

    // Persist to local data directory so no lead is EVER lost
    try {
      const dataDir = path.join(process.cwd(), 'data')
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true })
      }
      const filePath = path.join(dataDir, 'enquiries.json')
      let existing: any[] = []
      if (fs.existsSync(filePath)) {
        try {
          existing = JSON.parse(fs.readFileSync(filePath, 'utf8'))
        } catch {
          existing = []
        }
      }
      existing.unshift(enquiryRecord)
      fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), 'utf8')
    } catch (saveError) {
      console.error('Failed to save enquiry to data/enquiries.json:', saveError)
    }

    // Forward via FormSubmit for instant email dispatch
    const primaryToken = process.env.FORMSUBMIT_TOKEN || 'a9d6b96eba2c033545f0f8f196ac6e70'
    const ccEmail = process.env.NOTIFICATION_CC_EMAIL || 'hello@carencure.com.au'

    const emailSubject = formType === 'hospital_referral'
      ? `🚨 New Hospital Referral: ${patientName || referrerName || 'Patient'} (${relationship || 'Provider'})`
      : `🚨 New Care Enquiry: ${name || 'Client'} - ${service || formType} (${suburb || 'Perth'})`

    const formSubmitPayload = {
      _subject: emailSubject,
      _template: 'table',
      _captcha: 'false',
      _cc: ccEmail,
      ...(email ? { _replyto: email } : referrerEmail ? { _replyto: referrerEmail } : {}),
      'Form Type': formType,
      'Client / Enquirer Name': name || patientName || 'N/A',
      'Contact Phone': phone || referrerPhone || patientPhone || 'N/A',
      'Contact Email': email || referrerEmail || patientEmail || 'N/A',
      'Suburb / Location': suburb || 'Perth Metropolitan Area',
      'Service Requested': service || 'Aged Care & In-Home Nursing',
      'Funding Pathway': funding || 'Not specified',
      'Details / Clinical Notes': message || 'None provided',
      ...(formType === 'hospital_referral' ? {
        'Referrer Name': referrerName,
        'Referrer Organization / Role': relationship,
        'Referrer Phone': referrerPhone,
        'Referrer Email': referrerEmail,
        'Patient Full Name': patientName,
        'Patient Phone': patientPhone,
        'Patient Email': patientEmail,
      } : {}),
      'Submitted At (Perth AWST)': new Date().toLocaleString('en-AU', { timeZone: 'Australia/Perth' }),
    }

    try {
      const emailRes = await fetch(`https://formsubmit.co/ajax/${primaryToken}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': 'https://carencure.com.au',
          'Referer': 'https://carencure.com.au/',
        },
        body: JSON.stringify(formSubmitPayload),
      })
      const emailJson = await emailRes.json().catch(() => ({}))
      if (!emailRes.ok) {
        console.warn('FormSubmit email notice:', emailJson)
      }
    } catch (emailErr) {
      console.error('Failed to dispatch FormSubmit email notification:', emailErr)
    }

    // Optional webhook or external forwarding if configured
    if (process.env.ENQUIRY_WEBHOOK_URL) {
      try {
        await fetch(process.env.ENQUIRY_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(enquiryRecord),
        })
      } catch (webhookError) {
        console.error('Webhook notification error:', webhookError)
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry received and notification dispatched',
      id: enquiryRecord.id,
    })
  } catch (error: any) {
    console.error('Enquiry API Error:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to process enquiry' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // Safe endpoint for admins to inspect enquiry count
  try {
    const filePath = path.join(process.cwd(), 'data', 'enquiries.json')
    if (fs.existsSync(filePath)) {
      const list = JSON.parse(fs.readFileSync(filePath, 'utf8'))
      return NextResponse.json({
        totalEnquiries: list.length,
        recent: list.slice(0, 5),
      })
    }
    return NextResponse.json({ totalEnquiries: 0, recent: [] })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
