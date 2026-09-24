import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { COMPANY_CONFIG } from '@/config/companyConfig';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Residential Framing Calgary',
  description: 'Terms and conditions governing the use of our residential framing contractor website and estimation requests.',
  alternates: {
    canonical: 'https://calgaryhomeframing.ca/terms',
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="section-sm" style={{ backgroundColor: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container-narrow">
          <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />
          <h1 style={{ fontSize: '2.4rem', marginBottom: '0.5rem' }}>Terms & Conditions</h1>
          <p style={{ color: 'var(--text-muted)' }}>Last updated: January 2025</p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', fontSize: '1rem', color: 'var(--text-dark-secondary)', lineHeight: 1.75 }}>
          <p>
            Welcome to the official website of <strong>{COMPANY_CONFIG.name}</strong>. By accessing this website or submitting a quote request, you agree to comply with and be bound by the following terms.
          </p>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginTop: '1rem' }}>1. Framing Estimates & Quotations</h2>
          <p>
            All estimates provided through our online quote builder or direct communication are preliminary and subject to formal contract review, signed framing scopes, verified site access, and final approved engineering drawings.
          </p>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginTop: '1rem' }}>2. Blueprint Submission & Intellectual Property</h2>
          <p>
            Any blueprints, drawings, or project files uploaded to our website remain the property of the client or respective architect/designer. We use these files solely for estimation and construction planning.
          </p>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginTop: '1rem' }}>3. Jurisdiction</h2>
          <p>
            These terms and any framing service agreements are governed by and construed in accordance with the laws of the Province of Alberta and the applicable laws of Canada.
          </p>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginTop: '1rem' }}>4. Questions</h2>
          <p>
            For any questions regarding our terms, please contact us at {COMPANY_CONFIG.email}.
          </p>
        </div>
      </section>
    </>
  );
}
