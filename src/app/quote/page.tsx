import React from 'react';
import { Metadata } from 'next';
import { CheckCircle2, Clock, FileText } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import MultiStepQuoteWizard from '@/components/forms/MultiStepQuoteWizard';
import { COMPANY_CONFIG } from '@/config/companyConfig';

export const metadata: Metadata = {
  title: 'Request a Free Framing Quote | Calgary Residential Contractors',
  description: 'Get an itemized framing estimate for your new home, custom build, basement development, garage, or addition in Calgary, AB.',
  alternates: {
    canonical: 'https://calgaryhomeframing.ca/quote',
  },
};

export default function QuotePage() {
  return (
    <>
      <section className="section-sm" style={{ backgroundColor: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
            <Breadcrumbs items={[{ label: 'Request a Quote' }]} />
          </div>
          <span className="section-tag">Framing Estimate Builder</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Request Your Framing Quote
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
            Complete the 3 quick steps below to send us your project scope and blueprint files for a detailed, itemized framing takeoff.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              marginTop: '1.5rem',
              fontSize: '0.875rem',
              color: 'var(--text-dark)',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="var(--accent-primary)" />
              <span>No Obligation</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={16} color="var(--accent-primary)" />
              <span>Prompt Review</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <FileText size={16} color="var(--accent-primary)" />
              <span>Plan Takeoff Included</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <MultiStepQuoteWizard />

          <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Prefer to discuss your project directly with an estimator?{' '}
            <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>
              Call {COMPANY_CONFIG.phone}
            </a>{' '}
            or email{' '}
            <a href={`mailto:${COMPANY_CONFIG.email}`} style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>
              {COMPANY_CONFIG.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
