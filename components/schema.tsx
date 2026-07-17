// ============================================================
// Care N Cure — Complete Schema Markup Suite
// All JSON-LD structured data for Google Rich Results
// ============================================================

const SITE_URL = 'https://carencure.com.au'
const PHONE = '1300 919 663'
const PHONE_SCHEMA = '+611300919663'
const EMAIL = 'hello@carencure.com.au'
const ADDRESS = {
  addressLocality: 'Perth',
  addressRegion: 'WA',
  postalCode: '6000',
  addressCountry: 'AU',
}
const AREA_SERVED = [
  'Perth', 'Nedlands', 'Subiaco', 'Cottesloe', 'Claremont',
  'Mount Lawley', 'Inglewood', 'Gosnells', 'Armadale',
  'Rockingham', 'Fremantle', 'South Perth', 'Mount Pleasant',
  'Wembley', 'Floreat', 'Leederville', 'Victoria Park',
  'Joondalup', 'Midland', 'Booragoon', 'Canning Vale',
  'Applecross',
]

// ── MedicalOrganization (Homepage primary schema) ──────────────────────────
export function MedicalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalOrganization',
        '@id': `${SITE_URL}/#medicalorg`,
        name: 'Care N Cure',
        alternateName: 'The Nurse Who Knows You',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/logo.png`,
          width: 512,
          height: 512,
        },
        image: `${SITE_URL}/og-image.jpg`,
        description:
          'Perth-based registered nurse home care services. Dedicated nurse coordinators providing private nursing, wound care, medication management, and post-hospital care across Perth, WA.',
        slogan: 'One Client. One Nurse Coordinator. One Trusted Relationship.',
        telephone: PHONE_SCHEMA,
        email: EMAIL,
        address: {
          '@type': 'PostalAddress',
          ...ADDRESS,
        },
        priceRange: '$$',
        currenciesAccepted: 'AUD',
        paymentAccepted: 'Cash, Credit Card, Home Care Package, NDIS, DVA',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday', 'Sunday'],
            opens: '09:00',
            closes: '17:00',
          },
        ],
        areaServed: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: -31.9505,
            longitude: 115.8605,
          },
          geoRadius: '50000',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Nursing Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'MedicalProcedure',
                name: 'Private Nursing',
                url: `${SITE_URL}/private-nursing`,
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'MedicalProcedure',
                name: 'Wound Care',
                url: `${SITE_URL}/wound-care`,
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'MedicalProcedure',
                name: 'Registered Nurse Clinical Care',
                url: `${SITE_URL}/registered-nurses-clinical-care-services`,
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'MedicalProcedure',
                name: 'Medication Management',
                url: `${SITE_URL}/medication-management`,
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'MedicalProcedure',
                name: 'Post-Hospital Care',
                url: `${SITE_URL}/post-hospital-care`,
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'MedicalProcedure',
                name: 'Home Care Packages',
                url: `${SITE_URL}/homecare-packages`,
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'MedicalProcedure',
                name: 'Mobility Support',
                url: `${SITE_URL}/mobility-support`,
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'MedicalProcedure',
                name: 'Companion Care',
                url: `${SITE_URL}/companion-care`,
              },
            },
          ],
        },
        founder: [
          {
            '@type': 'Person',
            name: 'Jinu Maecheril Sukumaran',
            jobTitle: 'Registered Nurse (RN)',
            description: 'Co-founder with 10+ years clinical nursing experience',
            hasCredential: {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: 'Professional Registration',
              name: 'Registered Nurse',
              recognizedBy: {
                '@type': 'Organization',
                name: 'Australian Health Practitioner Regulation Agency (AHPRA)',
              },
            },
          },
          {
            '@type': 'Person',
            name: 'Mohamed Zuhair Parayil Ummer',
            jobTitle: 'Registered Nurse (RN)',
            description: 'Co-founder with 15+ years critical care nursing experience',
            hasCredential: {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: 'Professional Registration',
              name: 'Registered Nurse',
              recognizedBy: {
                '@type': 'Organization',
                name: 'Australian Health Practitioner Regulation Agency (AHPRA)',
              },
            },
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Care N Cure',
        publisher: {
          '@id': `${SITE_URL}/#medicalorg`,
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

// ── Organization schema ────────────────────────────────────────────────────
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
      width: 512,
      height: 512,
    },
    description:
      'Founder-led private nursing practice in Perth, WA. Registered nurses providing in-home clinical care for post-hospital recovery, wound care, and chronic disease management.',
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

// ── LocalBusiness (Homepage) ───────────────────────────────────────────────
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'MedicalBusiness'],
    '@id': `${SITE_URL}/#local-business`,
    name: 'Care N Cure Nursing Care Services',
    description:
      'In-home nursing care by registered nurses. Perth, WA. Dedicated nurse coordinators for private nursing, wound care, medication management, and post-hospital support.',
    url: SITE_URL,
    image: `${SITE_URL}/logo.png`,
    telephone: PHONE_SCHEMA,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      ...ADDRESS,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -31.9505,
      longitude: 115.8605,
    },
    priceRange: '$$',
    areaServed: AREA_SERVED.map((area) => ({
      '@type': 'City',
      name: area,
      containedInPlace: { '@type': 'State', name: 'Western Australia' },
    })),
    openingHours: ['Mo-Fr 09:00-18:00', 'Sa-Su 09:00-17:00'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ── FAQPage schema (reusable) ──────────────────────────────────────────────
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

// ── Person schema (founders) ───────────────────────────────────────────────
export function PersonSchema({
  name,
  jobTitle,
  description,
}: {
  name: string
  jobTitle: string
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
      name: 'Registered Nurse',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nursing and Midwifery Board of Australia',
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

// ── MedicalWebPage + MedicalProcedure schema (service pages) ──────────────
export function ServicePageSchema({
  serviceName,
  description,
  url,
  procedureType,
  faqs,
  breadcrumb,
}: {
  serviceName: string
  description: string
  url: string
  procedureType?: string
  faqs?: { question: string; answer: string }[]
  breadcrumb?: { name: string; item: string }[]
}) {
  const pageId = `${SITE_URL}${url}#webpage`
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': pageId,
        url: `${SITE_URL}${url}`,
        name: serviceName,
        description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: {
          '@type': 'MedicalProcedure',
          name: serviceName.split(' | ')[0],
          procedureType: procedureType ?? 'In-Home Nursing Care',
          followup: 'Regular home visits by dedicated nurse coordinator',
          howPerformed:
            'Registered Nurse visits patient at home for clinical assessments, medication management, wound care, and care coordination',
          preparation: 'Free in-home clinical assessment scheduled within 24-48 hours',
        },
        ...(faqs && faqs.length > 0
          ? {
              mainEntity: {
                '@type': 'FAQPage',
                mainEntity: faqs.map(({ question, answer }) => ({
                  '@type': 'Question',
                  name: question,
                  acceptedAnswer: { '@type': 'Answer', text: answer },
                })),
              },
            }
          : {}),
        provider: {
          '@id': `${SITE_URL}/#medicalorg`,
        },
      },
      ...(breadcrumb && breadcrumb.length > 0
        ? [
            {
              '@type': 'BreadcrumbList',
              itemListElement: breadcrumb.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                item: item.item,
              })),
            },
          ]
        : []),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ── Breadcrumb schema (standalone, reusable) ───────────────────────────────
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

// ── Suburb LocalBusiness schema (location pages) ───────────────────────────
interface SuburbGeoData {
  lat: number
  lng: number
  postCode: string
  nearbySuburbs: string
}

const suburbGeo: Record<string, SuburbGeoData> = {
  nedlands:        { lat: -31.982,  lng: 115.806,  postCode: '6009', nearbySuburbs: 'Dalkeith, Crawley, Shenton Park' },
  subiaco:         { lat: -31.948,  lng: 115.826,  postCode: '6008', nearbySuburbs: 'Jolimont, West Perth, Daglish' },
  cottesloe:       { lat: -31.993,  lng: 115.756,  postCode: '6011', nearbySuburbs: 'Swanbourne, Peppermint Grove, Mosman Park' },
  gosnells:        { lat: -32.080,  lng: 116.005,  postCode: '6110', nearbySuburbs: 'Maddington, Kenwick, Thornlie' },
  armadale:        { lat: -32.149,  lng: 116.013,  postCode: '6112', nearbySuburbs: 'Kelmscott, Byford, Seville Grove' },
  rockingham:      { lat: -32.280,  lng: 115.729,  postCode: '6168', nearbySuburbs: 'Baldivis, Safety Bay, Port Kennedy' },
  applecross:      { lat: -32.012,  lng: 115.840,  postCode: '6153', nearbySuburbs: 'Mount Pleasant, Ardross, Myaree' },
  'mount-lawley':  { lat: -31.930,  lng: 115.878,  postCode: '6050', nearbySuburbs: 'Highgate, Inglewood, Maylands' },
  fremantle:       { lat: -32.056,  lng: 115.747,  postCode: '6160', nearbySuburbs: 'East Fremantle, South Fremantle, White Gum Valley' },
  'south-perth':   { lat: -31.978,  lng: 115.858,  postCode: '6151', nearbySuburbs: 'Como, Kensington, Victoria Park' },
  claremont:       { lat: -31.981,  lng: 115.783,  postCode: '6010', nearbySuburbs: 'Karrakatta, Mount Claremont, Swanbourne' },
  inglewood:       { lat: -31.919,  lng: 115.876,  postCode: '6052', nearbySuburbs: 'Maylands, Bedford, Mount Lawley' },
  booragoon:       { lat: -32.027,  lng: 115.833,  postCode: '6154', nearbySuburbs: 'Myaree, Kardinya, Bull Creek' },
  'canning-vale':  { lat: -32.079,  lng: 115.933,  postCode: '6155', nearbySuburbs: 'Willetton, Riverton, Thornlie' },
  wembley:         { lat: -31.928,  lng: 115.820,  postCode: '6014', nearbySuburbs: 'Jolimont, Wembley Downs, City Beach' },
  floreat:         { lat: -31.936,  lng: 115.800,  postCode: '6014', nearbySuburbs: 'Perry Lakes, City Beach, Wembley' },
  'mount-pleasant':{ lat: -32.010,  lng: 115.846,  postCode: '6153', nearbySuburbs: 'Brentwood, Applecross, Ardross' },
  leederville:     { lat: -31.927,  lng: 115.843,  postCode: '6007', nearbySuburbs: 'West Leederville, North Perth, Mount Hawthorn' },
  'victoria-park': { lat: -31.978,  lng: 115.884,  postCode: '6100', nearbySuburbs: 'Lathlain, East Victoria Park, Carlisle' },
  joondalup:       { lat: -31.745,  lng: 115.766,  postCode: '6027', nearbySuburbs: 'Edgewater, Kingsley, Beldon' },
  midland:         { lat: -31.889,  lng: 116.002,  postCode: '6056', nearbySuburbs: 'Guildford, Swan Valley, Bassendean' },
}

export function SuburbPageSchema({ suburb, url }: { suburb: string; url: string }) {
  const slug = url.replace('/locations/', '')
  const geo = suburbGeo[slug]

  if (!geo) {
    // Fallback to generic Service schema if suburb not in geo map
    const fallback = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Home Nursing in ${suburb}, Perth`,
      description: `Care N Cure provides in-home nursing care in ${suburb}, Perth WA. Registered nurses for post-hospital recovery, wound care, and medication management.`,
      url: `${SITE_URL}${url}`,
      provider: {
        '@type': 'MedicalOrganization',
        name: 'Care N Cure',
        '@id': `${SITE_URL}/#medicalorg`,
      },
      areaServed: { '@type': 'City', name: suburb, containedInPlace: { '@type': 'City', name: 'Perth' } },
    }
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fallback) }}
      />
    )
  }

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'MedicalBusiness'],
        '@id': `${SITE_URL}${url}#localbusiness`,
        name: `Care N Cure - Private Nursing ${suburb}`,
        alternateName: `The Nurse Who Knows You - ${suburb}`,
        url: `${SITE_URL}${url}`,
        description: `Registered nurse home care services in ${suburb}, Perth WA. Private nursing, wound care, and medication management with dedicated nurse coordinators serving ${suburb} and nearby ${geo.nearbySuburbs}.`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: suburb,
          addressRegion: 'WA',
          addressCountry: 'AU',
          postalCode: geo.postCode,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: geo.lat,
          longitude: geo.lng,
        },
        telephone: PHONE_SCHEMA,
        email: EMAIL,
        areaServed: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: geo.lat,
            longitude: geo.lng,
          },
          geoRadius: '8000',
          description: `${suburb}, ${geo.nearbySuburbs}`,
        },
        priceRange: '$$',
        openingHours: ['Mo-Fr 09:00-18:00', 'Sa-Su 09:00-17:00'],
        hasMap: `https://www.google.com/maps/search/Care+N+Cure+${encodeURIComponent(suburb)}+Perth`,
        parentOrganization: {
          '@id': `${SITE_URL}/#medicalorg`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: `${SITE_URL}/locations` },
          { '@type': 'ListItem', position: 3, name: suburb, item: `${SITE_URL}${url}` },
        ],
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

// ── Legacy export for any existing imports ─────────────────────────────────
export function ServiceSchema() {
  return null
}
