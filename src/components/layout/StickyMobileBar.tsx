'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, FileText } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/companyConfig';

export default function StickyMobileBar() {
  return (
    <aside className="sticky-mobile-bar" role="region" aria-label="Quick mobile contact actions">
      <a
        href={`tel:${COMPANY_CONFIG.phoneRaw}`}
        className="btn btn-secondary btn-sm"
        style={{
          flex: 1,
          padding: '0.75rem 0.5rem',
          fontSize: '0.875rem',
          fontWeight: 700,
          gap: '0.45rem',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
        }}
      >
        <Phone size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
        <span>Call Now</span>
      </a>
      <Link
        href="/quote"
        className="btn btn-primary btn-sm"
        style={{
          flex: 1.25,
          padding: '0.75rem 0.5rem',
          fontSize: '0.875rem',
          fontWeight: 700,
          gap: '0.45rem',
          borderRadius: '8px',
          boxShadow: '0 4px 14px rgba(255, 90, 31, 0.4)',
        }}
      >
        <FileText size={15} />
        <span>Get Free Quote</span>
      </Link>
    </aside>
  );
}
