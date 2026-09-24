import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle2, ArrowRight, Wrench } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import LeadBannerCTA from '@/components/common/LeadBannerCTA';
import SchemaOrg from '@/components/common/SchemaOrg';
import { SERVICES_DATA, COMPANY_CONFIG } from '@/config/companyConfig';

const service = SERVICES_DATA.find((s) => s.slug === 'structural-framing')!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: `https://calgaryhomeframing.ca/services/${service.slug}`,
  },
};

export default function StructuralFramingPage() {
  return (
    <>
      <SchemaOrg
        type="Service"
        title={service.title}
        description={service.fullDescription}
        url={`https://calgaryhomeframing.ca/services/${service.slug}`}
        image={service.image}
      />

      <section className="section-sm" style={{ backgroundColor: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: service.title },
            ]}
          />
          <span className="section-tag">Engineered Wood Systems</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            {service.title} in Calgary & Area
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
            {service.shortDescription}
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-sidebar">
            <div>
              <div style={{ position: 'relative', height: '420px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
                <Image
                  src={service.image}
                  alt={`${service.title} in Calgary construction`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <h2 style={{ fontSize: '1.85rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
                Engineered Floor Systems, Roof Trusses & Structural Load Paths
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {service.fullDescription}
              </p>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
                  Structural Framing Specializations
                </h3>
                <div className="grid-2" style={{ gap: '1rem' }}>
                  {service.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', backgroundColor: 'var(--bg-light)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                      <CheckCircle2 size={18} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--text-dark)' }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
                  Installation Standards
                </h3>
                <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-dark-secondary)' }}>
                  {service.scope.map((step, idx) => (
                    <li key={idx} style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', marginBottom: '2.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
                  Ideal For:
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {service.idealFor}
                </p>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div>
              <div className="sticky-sidebar-box" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="card" style={{ padding: '2rem', backgroundColor: '#0D1117', color: '#FFFFFF', border: '1px solid #1F2633' }}>
                  <span className="badge badge-orange" style={{ marginBottom: '0.75rem' }}>
                    Engineered Plans
                  </span>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                    Need Structural Framing?
                  </h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    We frame according to complex engineer schedules, truss profiles, and Simpson hardware notes.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <Link href="/quote" className="btn btn-primary btn-block">
                      <span>Request a Quote</span>
                      <ArrowRight size={16} />
                    </Link>
                    <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="btn btn-outline-white btn-block">
                      <span>Call {COMPANY_CONFIG.phone}</span>
                    </a>
                  </div>
                </div>

                <div className="card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-light)' }}>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
                    Related Framing Services
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {SERVICES_DATA.filter((s) => s.slug !== service.slug).slice(0, 4).map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        style={{ fontSize: '0.875rem', color: 'var(--text-dark-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.35rem 0' }}
                      >
                        <span>{s.title}</span>
                        <ArrowRight size={13} color="var(--accent-primary)" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadBannerCTA />
    </>
  );
}
