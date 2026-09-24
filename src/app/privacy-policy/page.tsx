import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { COMPANY_CONFIG } from '@/config/companyConfig';

export const metadata: Metadata = {
  title: 'Privacy Policy | Residential Framing Calgary',
  description: 'Privacy policy and information handling practices for our Calgary residential home framing website.',
  alternates: {
    canonical: 'https://calgaryhomeframing.ca/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="section-sm" style={{ backgroundColor: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container-narrow">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <h1 style={{ fontSize: '2.4rem', marginBottom: '0.5rem' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-muted)' }}>Last updated: January 2025</p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', fontSize: '1rem', color: 'var(--text-dark-secondary)', lineHeight: 1.75 }}>
          <p>
            At <strong>{COMPANY_CONFIG.name}</strong>, we respect your privacy and are committed to protecting the personal information you share with us through our website.
          </p>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginTop: '1rem' }}>1. Information We Collect</h2>
          <p>
            When you request a framing quote or contact our team, we may collect personal information including your name, telephone number, email address, project location, building drawings/blueprints, and project specifications.
          </p>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginTop: '1rem' }}>2. How We Use Your Information</h2>
          <p>
            We use the information you provide solely to:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <li>Prepare and deliver accurate framing estimates and blueprint takeoffs</li>
            <li>Coordinate project scheduling and site visits</li>
            <li>Communicate with you regarding your framing inquiry or active build</li>
            <li>Comply with applicable legal and municipal requirements in Alberta</li>
          </ul>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginTop: '1rem' }}>3. Information Sharing & Security</h2>
          <p>
            We do not sell, rent, or trade your personal information to third parties. We implement industry-standard safeguards to maintain the confidentiality of your data and construction drawings.
          </p>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginTop: '1rem' }}>4. Contact Us</h2>
          <p>
            If you have questions regarding our privacy practices, please contact us at {COMPANY_CONFIG.email} or call {COMPANY_CONFIG.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
