import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })
const _playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Vandhanaa Metal Mart - Premium Metal Vessels Wholesale & Export in Chennai',
  description: 'Leading wholesale supplier and exporter of premium metal vessels in Chennai. Serving Sri Lanka, Malaysia, Singapore, and Dubai. 25+ years experience. Located near MGR Central Railway Station, Park Town, Chennai.',
  keywords: [
    'Vandhanaa Metal Mart',
    'Vandhanaa vessels',
    'vessel exports Chennai',
    'vessel shops Chennai',
    'vessel wholesale Chennai',
    'metal vessels Chennai',
    'stainless steel vessels Chennai',
    'wholesale vessels Park Town',
    'vessel exporters India',
    'metal vessel suppliers Chennai',
    'commercial vessels Chennai',
    'bulk vessels Chennai',
    'vessel manufacturers Chennai',
    'Mint Street vessels',
    'Chennai vessel wholesale market'
  ],
  authors: [{ name: 'Vandhanaa Metal Mart' }],
  creator: 'Vandhanaa Metal Mart',
  publisher: 'Vandhanaa Metal Mart',
  generator: 'BKB Incorporation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vandhanaa-metal-mart.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vandhanaa Metal Mart - Premium Metal Vessels Wholesale & Export in Chennai',
    description: 'Leading wholesale supplier and exporter of premium metal vessels in Chennai. 25+ years experience. Serving international markets.',
    url: 'https://vandhanaa-metal-mart.netlify.app',
    siteName: 'Vandhanaa Metal Mart',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/assets/vessel-16.jpg',
        width: 1200,
        height: 630,
        alt: 'Vandhanaa Metal Mart - Premium Metal Vessels',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vandhanaa Metal Mart - Premium Metal Vessels Wholesale & Export',
    description: 'Leading wholesale supplier and exporter of premium metal vessels in Chennai. 25+ years experience.',
    images: ['/assets/vessel-16.jpg'],
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
  verification: {
    // Add your Google Search Console verification code here after setting up
    // google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      {
        url: "/assets/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/assets/logo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/assets/logo.png",
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://vandhanaa-metal-mart.netlify.app',
    name: 'Vandhanaa Metal Mart',
    alternateName: 'Vandhanaa Vessels',
    description: 'Leading wholesale supplier and exporter of premium metal vessels in Chennai',
    url: 'https://vandhanaa-metal-mart.netlify.app',
    telephone: '+91-8838-169-177',
    email: 'Vanthanaametalmart@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No 257, Mint Street',
      addressLocality: 'Park Town',
      addressRegion: 'Tamil Nadu',
      postalCode: '600003',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.0878,
      longitude: 80.2785,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: 'Wholesale',
    image: 'https://vandhanaa-metal-mart.netlify.app/assets/vessel-16.jpg',
    logo: 'https://vandhanaa-metal-mart.netlify.app/assets/logo.png',
    sameAs: [
      'https://www.instagram.com/bkb_incorporation',
      'https://www.instagram.com/brandspark.in',
    ],
    areaServed: [
      {
        '@type': 'Country',
        name: 'India',
      },
      {
        '@type': 'Country',
        name: 'Sri Lanka',
      },
      {
        '@type': 'Country',
        name: 'Malaysia',
      },
      {
        '@type': 'Country',
        name: 'Singapore',
      },
      {
        '@type': 'Country',
        name: 'United Arab Emirates',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Metal Vessels',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Premium Metal Vessels',
            description: 'High-quality stainless steel vessels for commercial and wholesale use',
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className={_playfair.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
