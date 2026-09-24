'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, FileText } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/companyConfig';

export default function StickyMobileBar() {
  return (
    <div className="sticky-mobile-bar" role="region" aria-label="Quick mobile contact actions">
      <a
        href={`tel:${COMPANY_CONFIG.phoneRaw}`}
        className="btn btn-secondary btn-sm"
        style={{ flex: 1, padding: '0.7rem 0.5rem', fontSize: '0.85rem' }}
      >
        <Phone size={15} color="var(--accent-primary)" />
        <span>Call Now</span>
      </a>
      <Link
        href="/quote"
        className="btn btn-primary btn-sm"
        style={{ flex: 1, padding: '0.7rem 0.5rem', fontSize: '0.85rem' }}
      >
        <FileText size={15} />
        <span>Get a Quote</span>
      </Link>
    </div>
  );
}
