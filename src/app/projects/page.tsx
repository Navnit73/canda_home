import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import LeadBannerCTA from '@/components/common/LeadBannerCTA';
import ProjectsPortfolio from '@/components/home/ProjectsPortfolio';
import { COMPANY_CONFIG } from '@/config/companyConfig';

export const metadata: Metadata = {
  title: 'Recent Home Framing Projects Calgary | Construction Portfolio',
  description: 'View our residential framing project portfolio in Calgary and surrounding areas: new custom homes, infills, detached garages, and structural renovations.',
  alternates: {
    canonical: 'https://calgaryhomeframing.ca/projects',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="section-sm" style={{ backgroundColor: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Recent Projects' }]} />
          <span className="section-tag">Framing Portfolio</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Our Recent Framing Projects in Calgary & Area
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
            Browse a selection of custom residences, new home builds, detached garage packages, and structural renovations completed by our framing crew.
          </p>
        </div>
      </section>

      <ProjectsPortfolio />

      <LeadBannerCTA
        headline="Have a Similar Framing Project in Calgary?"
        copy="Send us your blueprints or sketches and our framing estimators will prepare a comprehensive takeoff and project quote."
      />
    </>
  );
}
