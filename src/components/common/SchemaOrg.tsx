import React from 'react';
import { COMPANY_CONFIG } from '@/config/companyConfig';

interface SchemaOrgProps {
  type?: 'LocalBusiness' | 'Contractor' | 'Service' | 'FAQPage';
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  faqList?: { question: string; answer: string }[];
}

export default function SchemaOrg({
  type = 'Contractor',
  title,
  description,
  url,
  image,
  faqList,
}: SchemaOrgProps) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type === 'Service' ? 'Service' : 'HomeAndConstructionBusiness',
    '@id': `${COMPANY_CONFIG.meta.siteUrl}/#contractor`,
    name: title || COMPANY_CONFIG.name,
    legalName: COMPANY_CONFIG.legalName,
    url: url || COMPANY_CONFIG.meta.siteUrl,
    telephone: COMPANY_CONFIG.phone,
    email: COMPANY_CONFIG.email,
    description: description || COMPANY_CONFIG.meta.defaultDescription,
    image: image ? `${COMPANY_CONFIG.meta.siteUrl}${image}` : `${COMPANY_CONFIG.meta.siteUrl}/images/hero-calgary-framing.jpg`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Calgary',
      addressRegion: 'AB',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.0447,
      longitude: -114.0719,
    },
    areaServed: [
      { '@type': 'City', name: 'Calgary' },
      { '@type': 'City', name: 'Airdrie' },
      { '@type': 'City', name: 'Cochrane' },
      { '@type': 'City', name: 'Chestermere' },
      { '@type': 'City', name: 'Okotoks' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:00',
      },
    ],
  };

  const schemaList: object[] = [baseSchema];

  if (faqList && faqList.length > 0) {
    schemaList.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqList.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaList) }}
    />
  );
}
