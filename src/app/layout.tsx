import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyMobileBar from '@/components/layout/StickyMobileBar';
import SchemaOrg from '@/components/common/SchemaOrg';
import { COMPANY_CONFIG } from '@/config/companyConfig';

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_CONFIG.meta.siteUrl),
  title: {
    default: COMPANY_CONFIG.meta.defaultTitle,
    template: `%s | ${COMPANY_CONFIG.name}`,
  },
  description: COMPANY_CONFIG.meta.defaultDescription,
  keywords: [
    'home framing Calgary',
    'framing contractor Calgary',
    'house framing Calgary',
    'residential framing Calgary',
    'new home framing Calgary',
    'custom home framing Calgary',
    'basement framing Calgary',
    'garage framing Calgary',
    'framing contractor near Calgary',
    'Alberta wood framing contractor',
  ],
  authors: [{ name: COMPANY_CONFIG.name }],
  creator: COMPANY_CONFIG.name,
  publisher: COMPANY_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: COMPANY_CONFIG.meta.siteUrl,
    title: COMPANY_CONFIG.meta.defaultTitle,
    description: COMPANY_CONFIG.meta.defaultDescription,
    siteName: COMPANY_CONFIG.meta.siteName,
    images: [
      {
        url: '/images/hero-calgary-framing.jpg',
        width: 1200,
        height: 675,
        alt: `${COMPANY_CONFIG.name} - Residential Home Framing Contractor in Calgary, Alberta`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: COMPANY_CONFIG.meta.defaultTitle,
    description: COMPANY_CONFIG.meta.defaultDescription,
    images: ['/images/hero-calgary-framing.jpg'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <SchemaOrg />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
