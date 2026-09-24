import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://calgaryhomeframing.ca',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        ...(item.href ? { item: `https://calgaryhomeframing.ca${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
          <Home size={14} />
          <span>Home</span>
        </Link>
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <ChevronRight size={13} className="breadcrumbs-separator" />
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
}
