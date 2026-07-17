import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PersistentUI } from '@/components/persistent-ui'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://carencure.com.au'),
  title: {
    default: 'Private Nurse Perth | Home Nursing Care | Care N Cure',
    template: '%s | Care N Cure',
  },
  description: "Perth's trusted registered nurse home care service. Dedicated nurse coordinators for private nursing, wound care & post-hospital support. Call 1300 919 663.",
  keywords: [
    'private nursing Perth',
    'home nursing Perth',
    'registered nurse home visit Perth',
    'dedicated nurse coordinator',
    'Care N Cure Perth',
    'The Nurse Who Knows You',
    'in-home nursing Perth WA',
  ],
  authors: [
    { name: 'Jinu Maecheril Sukumaran, RN' },
    { name: 'Mohamed Zuhair Parayil Ummer, RN' },
  ],
  creator: 'Care N Cure',
  publisher: 'Care N Cure',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://carencure.com.au',
    siteName: 'Care N Cure — The Nurse Who Knows You',
    title: 'Private Nurse Perth | Home Nursing Care | Care N Cure',
    description: "Perth's trusted registered nurse home care service. Dedicated nurse coordinators for private nursing, wound care & post-hospital support. Call 1300 919 663.",
    images: [
      {
        url: 'https://carencure.com.au/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Care N Cure — The Nurse Who Knows You — Perth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Nurse Perth | Home Nursing Care | Care N Cure',
    description: "Perth's trusted registered nurse home care service. Dedicated nurse coordinators for private nursing, wound care & post-hospital support. Call 1300 919 663.",
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
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
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
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://vitals.vercel-insights.com https://*.vercel-analytics.com https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net; font-src 'self' data:;"
        />
        {/* Google Analytics 4 — G-STW2MFLRC5 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-STW2MFLRC5" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-STW2MFLRC5', {
                'anonymize_ip': true,
                'cookie_flags': 'SameSite=None;Secure'
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen bg-surface`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-navy focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navigation />
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
