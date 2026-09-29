import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import LeadBannerCTA from '@/components/common/LeadBannerCTA';
import AreasSection from '@/components/home/AreasSection';

export const metadata: Metadata = {
  title: 'Service Areas | Residential Framing Contractor Calgary & Region',
  description: 'Residential home framing contractor serving Calgary, Airdrie, Cochrane, Chestermere, Okotoks, and Foothills County. Request your regional framing quote.',
  alternates: {
    canonical: 'https://calgaryhomeframing.ca/areas',
  },
};

export default function ServiceAreasIndexPage() {
  return (
    <>
      <section className="section-sm" style={{ backgroundColor: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Service Areas' }]} />
          <span className="section-tag">Regional Service Coverage</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Home Framing Services Across Calgary & Surrounding Communities
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
            Our framing crews operate throughout the greater Calgary metropolitan area, delivering quality residential wood framing for builders, contractors, and homeowners.
          </p>
        </div>
      </section>

      <AreasSection />

      <LeadBannerCTA
        headline="Building in Calgary or Surrounding Foothills?"
        copy="Contact our team to verify scheduling availability for your build location and receive a free quote."
      />
    </>
  );
}
