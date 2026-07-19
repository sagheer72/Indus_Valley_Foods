import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const SITE_URL = 'https://indusvalley-foods.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Indus Valley Foods | Direct Basmati Rice & Himalayan Pink Salt Exporter from Pakistan — Worldwide Shipping',
    template: '%s | Indus Valley Foods',
  },
  description:
    'Indus Valley Foods is a direct exporter of Sortex-cleaned Super Kernel & 1121 Basmati rice and verified Himalayan pink salt from Karachi, Pakistan, shipping worldwide — including UAE, Saudi Arabia, Qatar, Europe, Africa, Central Asia, and the Americas. FOB/CIF terms, bulk container supply, free samples via DHL/FedEx.',
  keywords: [
    'Pakistan rice exporter worldwide',
    'Basmati rice international export',
    'IRRI-9 Non-Basmati rice exporter Pakistan',
    'IRRI-9 long grain rice Gulf market',
    'Direct Basmati Rice Exporters from Pakistan to Dubai',
    'Verified Pakistan Himalayan Pink Salt Suppliers Saudi Arabia',
    'Bulk Agro Commodities Exporter Pakistan',
    'Global agro commodities exporter Pakistan',
    'Indus Valley Foods Pakistan',
    'Basmati rice exporter Karachi',
    'Pakistan rice supplier Gulf Europe Africa',
    'Himalayan pink salt bulk exporter worldwide',
    'Rice exporter UAE Qatar Kuwait Europe USA',
    'FOB CIF rice export Pakistan',
  ],
  authors: [{ name: 'Sagheer Ahmed', url: SITE_URL }],
  creator: 'Indus Valley Foods',
  publisher: 'Indus Valley Foods',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title:
      'Indus Valley Foods | Direct Pakistani Rice & Pink Salt Exporter — Worldwide Shipping',
    description:
      'Sortex-cleaned Basmati rice and authentic Himalayan pink salt, exported directly from Karachi, Pakistan to buyers worldwide on FOB/CIF terms.',
    url: SITE_URL,
    siteName: 'Indus Valley Foods',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indus Valley Foods | Direct Pakistani Rice & Pink Salt Exporter',
    description:
      'Direct exporter of Basmati rice and Himalayan pink salt from Karachi, Pakistan, shipping worldwide. FOB/CIF terms, bulk supply.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  other: {
    'geo.region': 'PK-SD',
    'geo.placename': 'Karachi, Pakistan',
    'geo.position': '24.8607;67.0011',
    ICBM: '24.8607, 67.0011',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Indus Valley Foods',
  alternateName: 'Indus Valley Foods Pakistan',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description:
    'Direct exporter of Sortex-cleaned Basmati rice and authentic Himalayan pink salt from Karachi, Pakistan, supplying wholesale and bulk buyers worldwide — including the UAE, Saudi Arabia, Qatar, Europe, Africa, and beyond — on FOB and CIF terms.',
  foundingLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karachi',
      addressRegion: 'Sindh',
      addressCountry: 'PK',
    },
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Karachi',
    addressRegion: 'Sindh',
    addressCountry: 'PK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.8607,
    longitude: 67.0011,
  },
  areaServed: [
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'Qatar' },
    { '@type': 'Country', name: 'Kuwait' },
    { '@type': 'Country', name: 'Oman' },
    { '@type': 'Country', name: 'Bahrain' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'China' },
    { '@type': 'Country', name: 'South Africa' },
    { '@type': 'Place', name: 'Worldwide' },
  ],
  founder: {
    '@type': 'Person',
    name: 'Sagheer Ahmed',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+92-312-3059907',
      email: 'indusvalleyfoods.pk@gmail.com',
      areaServed: ['AE', 'SA', 'QA', 'KW', 'OM', 'BH', 'PK'],
      availableLanguage: ['English', 'Urdu', 'Arabic'],
    },
  ],
  sameAs: [],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: 'Indus Valley Foods',
  image: `${SITE_URL}/opengraph-image`,
  description:
    'Direct exporter of Sortex-cleaned Basmati rice and Himalayan pink salt based in Karachi, Pakistan, serving wholesale and bulk buyers worldwide.',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Karachi',
    addressRegion: 'Sindh',
    addressCountry: 'PK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.8607,
    longitude: 67.0011,
  },
  telephone: '+92-312-3059907',
  email: 'indusvalleyfoods.pk@gmail.com',
  url: SITE_URL,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  // Once your Google Business Profile is live, replace this with your
  // actual Maps share link, e.g. "https://maps.app.goo.gl/xxxxxxxx"
  hasMap: 'https://www.google.com/maps/place/Karachi,+Pakistan',
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Product',
      position: 1,
      name: 'Super Kernel & 1121 Basmati Rice',
      description:
        'Sortex-cleaned, double-polished, extra-long grain Basmati rice exported in bulk from Karachi, Pakistan.',
      brand: { '@type': 'Brand', name: 'Indus Valley Foods' },
      countryOfOrigin: 'PK',
    },
    {
      '@type': 'Product',
      position: 2,
      name: 'IRRI-9 Non-Basmati Long Grain Rice',
      description:
        'High-volume bulk export quality IRRI-9 Non-Basmati long grain rice from Pakistan, Sortex-cleaned and moisture-controlled.',
      brand: { '@type': 'Brand', name: 'Indus Valley Foods' },
      countryOfOrigin: 'PK',
    },
    {
      '@type': 'Product',
      position: 3,
      name: 'Himalayan Pink Salt',
      description:
        'Hand-mined, unrefined Himalayan pink salt in fine powder, granule, and cooking block form, exported from Pakistan.',
      brand: { '@type': 'Brand', name: 'Indus Valley Foods' },
      countryOfOrigin: 'PK',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <meta name="geo.region" content="PK-SD" />
        <meta name="geo.placename" content="Karachi, Pakistan" />
        <meta name="geo.position" content="24.8607;67.0011" />
        <meta name="ICBM" content="24.8607, 67.0011" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <body className="bg-slate-50 font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
