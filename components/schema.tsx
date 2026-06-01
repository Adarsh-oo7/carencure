// ============================================================
// Care N Cure — Complete Schema Markup Suite
// All JSON-LD structured data for Google Rich Results
// ============================================================

const SITE_URL = 'https://carencure.com.au'
const PHONE = '0481 748 516'
const PHONE_SCHEMA = '+61481748516'
const EMAIL = 'hello@carencure.com.au'
const ADDRESS = {
  streetAddress: '15 Rockefellerway',
  addressLocality: 'Harrisdale',
  addressRegion: 'WA',
  postalCode: '6112',
  addressCountry: 'AU',
}
const AREA_SERVED = [
  'Perth', 'Nedlands', 'Subiaco', 'Cottesloe', 'Claremont',
  'Mount Lawley', 'Inglewood', 'Joondalup', 'Edgewater',
  'Applecross', 'Booragoon', 'Harrisdale', 'Canning Vale',
  'Midland', 'Fremantle', 'South Perth', 'Mount Pleasant',
  'Wembley', 'Floreat', 'Leederville',
]

export function MedicalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${SITE_URL}/#medical-business`,
    name: 'Care N Cure Nursing Care Services',
    alternateName: 'Care N Cure',
    description: 'Registered nurses providing in-home nursing care across Perth, WA. Post-hospital recovery, wound care, medication management.',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    telephone: PHONE_SCHEMA,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      ...ADDRESS,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -32.1087,
      longitude: 115.9028,
    },
    areaServed: AREA_SERVED.map((area) => ({
      '@type': 'City',
      name: area,
      containedInPlace: { '@type': 'State', name: 'Western Australia' },
    })),
    medicalSpecialty: 'Nursing',
    availableService: [
      { '@type': 'MedicalTherapy', name: 'Post-Hospital Recovery Care' },
      { '@type': 'MedicalTherapy', name: 'Private Nursing at Home' },
      { '@type': 'MedicalTherapy', name: 'Wound Care and Dressing' },
      { '@type': 'MedicalTherapy', name: 'Medication Management' },
      { '@type': 'MedicalTherapy', name: 'Mobility and Rehabilitation Support' },
      { '@type': 'MedicalTherapy', name: 'Companion Care' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '13:00',
      },
    ],
    founder: [
      {
        '@type': 'Person',
        name: 'Jinu Maecheril Sukumaran',
        jobTitle: 'Registered Nurse',
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'AHPRA Registration',
          recognizedBy: { '@type': 'Organization', name: 'Australian Health Practitioner Regulation Agency' },
        },
      },
      {
        '@type': 'Person',
        name: 'Mohamed Zuhair Parayil Ummer',
        jobTitle: 'Registered Nurse',
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'AHPRA Registration',
          recognizedBy: { '@type': 'Organization', name: 'Australian Health Practitioner Regulation Agency' },
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Care N Cure Nursing Care Services',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
      width: 200,
      height: 200,
    },
    description: 'Founder-led private nursing practice in Perth, WA. AHPRA registered nurses providing in-home care.',
    telephone: PHONE_SCHEMA,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      ...ADDRESS,
    },
    legalName: 'Care N Cure Nursing Care Services',
    taxID: '87152479362',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: PHONE_SCHEMA,
      email: EMAIL,
      availableLanguage: 'English',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
    '@id': `${SITE_URL}/#local-business`,
    name: 'Care N Cure Nursing Care Services',
    description: 'In-home nursing care by AHPRA registered nurses. Perth, WA.',
    url: SITE_URL,
    telephone: PHONE_SCHEMA,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      ...ADDRESS,
    },
    priceRange: '$$',
    servesCuisine: undefined,
    areaServed: AREA_SERVED,
    openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-13:00'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Reusable FAQPage schema
export function FAQPageSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Person schema for founders
export function PersonSchema({
  name,
  jobTitle,
  ahpraNumber,
  description,
}: {
  name: string
  jobTitle: string
  ahpraNumber?: string
  description?: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    worksFor: {
      '@type': 'Organization',
      name: 'Care N Cure Nursing Care Services',
      url: SITE_URL,
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional Registration',
      name: ahpraNumber ? `AHPRA Registration ${ahpraNumber}` : 'AHPRA Registered Nurse',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Australian Health Practitioner Regulation Agency',
        url: 'https://www.ahpra.gov.au',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Service page schema
export function ServicePageSchema({
  serviceName,
  description,
  url,
}: {
  serviceName: string
  description: string
  url: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      '@type': 'MedicalBusiness',
      name: 'Care N Cure Nursing Care Services',
      '@id': `${SITE_URL}/#medical-business`,
    },
    areaServed: AREA_SERVED.map((a) => ({ '@type': 'City', name: a })),
    serviceType: 'Home Nursing',
    category: 'Healthcare',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Breadcrumb schema
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; href: string }[]
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Suburb page schema
export function SuburbPageSchema({ suburb, url }: { suburb: string; url: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Home Nursing in ${suburb}, Perth`,
    description: `Care N Cure provides in-home nursing care in ${suburb}, Perth WA. AHPRA registered nurses for post-hospital recovery, wound care, and medication management.`,
    url: `${SITE_URL}${url}`,
    provider: {
      '@type': 'MedicalBusiness',
      name: 'Care N Cure Nursing Care Services',
      '@id': `${SITE_URL}/#medical-business`,
    },
    areaServed: { '@type': 'City', name: suburb, containedInPlace: { '@type': 'City', name: 'Perth' } },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Legacy export for any existing imports
export function ServiceSchema() {
  return null
}
