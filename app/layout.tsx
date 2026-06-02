import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
// import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PersistentUI } from '@/components/persistent-ui'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://carencure.com.au'),
  title: {
    default: 'Private Nursing at Home in Perth | Care N Cure Nursing Care Services',
    template: '%s | Care N Cure Nursing Care Services',
  },
  description: 'Registered nurses providing in-home nursing care across Perth, WA. Post-hospital recovery, wound care, medication management. Call our founders directly.',
  keywords: [
    'private nursing Perth',
    'home nursing Perth',
    'registered nurse home visit Perth',
    'post hospital care Perth',
    'wound care at home Perth',
    'medication management Perth',
    'in-home nursing Perth WA',
    'AHPRA registered nurse Perth',
    'Care N Cure nursing',
    'Harrisdale nursing care',
  ],
  authors: [
    { name: 'Jinu Maecheril Sukumaran, RN' },
    { name: 'Mohamed Zuhair Parayil Ummer, RN' },
  ],
  creator: 'Care N Cure Nursing Care Services',
  publisher: 'Care N Cure Nursing Care Services',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://carencure.com.au',
    siteName: 'Care N Cure Nursing Care Services',
    title: 'Private Nursing at Home in Perth | Care N Cure',
    description: 'Registered nurses providing in-home nursing care across Perth, WA. Post-hospital recovery, wound care, medication management.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Care N Cure Nursing Care Services — Perth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Nursing at Home in Perth | Care N Cure',
    description: 'Registered nurses providing in-home nursing care across Perth, WA.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: './logo.png', sizes: '32x32', type: 'image/png' },
      { url: './logo.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: './logo.png',
    apple: './logo.png',
  },
  alternates: {
    canonical: 'https://carencure.com.au',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* GA4 — replace G-XXXXXXXXXX with real Measurement ID */}
        {/* 
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'custom_map': {'dimension1': 'suburb_page', 'dimension2': 'service_page'}
          });
        `}} />
        */}
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen bg-surface">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-navy focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        {/* <Navigation /> */}
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <Footer />
        <PersistentUI />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
