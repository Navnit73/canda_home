import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import LeadBannerCTA from '@/components/common/LeadBannerCTA';
import SchemaOrg from '@/components/common/SchemaOrg';
import { SERVICE_AREAS_DATA, COMPANY_CONFIG, SERVICES_DATA } from '@/config/companyConfig';

const area = SERVICE_AREAS_DATA.find((a) => a.slug === 'chestermere')!;

export const metadata: Metadata = {
  title: area.metaTitle,
  description: area.metaDescription,
  alternates: {
    canonical: `https://calgaryhomeframing.ca/areas/${area.slug}`,
  },
};

export default function ChestermereAreaPage() {
  return (
    <>
      <SchemaOrg
        type="LocalBusiness"
        title={area.name}
        description={area.description}
        url={`https://calgaryhomeframing.ca/areas/${area.slug}`}
      />

      <section className="section-sm" style={{ backgroundColor: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Service Areas', href: '/areas' },
              { label: `${area.name} Framing` },
            ]}
          />
          <span className="section-tag">Chestermere & East Region</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Residential Home Framing Contractor in Chestermere, AB
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
            {area.tagline}. High-quality wood framing for lakefront custom homes, secondary suites, and spacious detached garages.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-sidebar">
            <div>
              <div style={{ position: 'relative', height: '380px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
                <Image
                  src="/images/service-new-home.jpg"
                  alt="Residential framing in Chestermere Alberta"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <h2 style={{ fontSize: '1.85rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
                Reliable Framing for Chestermere Residential Developments & Renovations
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {area.description} Whether framing an open-concept custom home near the lake or completing a lower-level basement development, our crew works with precision, clean jobsite discipline, and strict Alberta building code compliance.
              </p>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
                  Chestermere Communities Served
                </h3>
                <div className="grid-2" style={{ gap: '0.75rem' }}>
                  {area.communities.map((comm, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--bg-light)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)' }}>
                      <MapPin size={16} color="var(--accent-primary)" />
                      <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>{comm}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
                  Chestermere Framing Details
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {area.framingConsiderations.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle2 size={18} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.925rem', color: 'var(--text-dark-secondary)', lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
                  Popular Framing Services in Chestermere
                </h3>
                <div className="grid-2" style={{ gap: '1rem' }}>
                  {SERVICES_DATA.slice(0, 4).map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="card"
                      style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'var(--bg-light)' }}
                    >
                      <h4 style={{ fontSize: '1.05rem', marginBottom: '0.35rem', color: 'var(--text-dark)' }}>{s.title}</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>{s.shortDescription.slice(0, 80)}...</p>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--accent-primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                        View Service <ArrowRight size={13} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div>
              <div className="sticky-sidebar-box" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="card" style={{ padding: '2rem', backgroundColor: '#0D1117', color: '#FFFFFF', border: '1px solid #1F2633' }}>
                  <span className="badge badge-orange" style={{ marginBottom: '0.75rem' }}>
                    Chestermere Quote
                  </span>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                    Building in Chestermere?
                  </h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Send us your drawings or project notes for a prompt framing estimate.
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
                    Other Service Areas
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {SERVICE_AREAS_DATA.filter((a) => a.slug !== area.slug).map((a) => (
                      <Link
                        key={a.slug}
                        href={`/areas/${a.slug}`}
                        style={{ fontSize: '0.875rem', color: 'var(--text-dark-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.35rem 0' }}
                      >
                        <span>{a.name} Framing</span>
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

      <LeadBannerCTA
        headline="Starting a Framing Build in Chestermere?"
        copy="Contact our framing team today for an accurate project takeoff and quote."
      />
    </>
  );
}
