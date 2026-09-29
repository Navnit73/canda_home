import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ArrowRight, Check } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import LeadBannerCTA from '@/components/common/LeadBannerCTA';
import { SERVICES_DATA } from '@/config/companyConfig';

export const metadata: Metadata = {
  title: 'Residential Framing Services Calgary | Wood Framing Contractors',
  description: 'Explore our residential framing services in Calgary: new homes, custom builds, basements, detached garages, additions, and structural renovation framing.',
  alternates: {
    canonical: 'https://calgaryhomeframing.ca/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-sm" style={{ backgroundColor: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Services' }]} />
          <span className="section-tag">Framing Services</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Home Framing Services in Calgary & Area
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
            Professional residential framing solutions tailored for homeowners, custom home builders, general contractors, and developers across the Calgary metropolitan region.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {SERVICES_DATA.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="card"
                  style={{
                    padding: '2.5rem',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <div
                    className="grid-2"
                    style={{
                      alignItems: 'center',
                      gap: '3rem',
                    }}
                  >
                    {/* Image Column */}
                    <div
                      style={{
                        position: 'relative',
                        height: '340px',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        order: isEven ? 2 : 1,
                      }}
                    >
                      <Image
                        src={service.image}
                        alt={`${service.title} in Calgary, Alberta`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>

                    {/* Content Column */}
                    <div style={{ order: isEven ? 1 : 2 }}>
                      <span className="badge badge-orange" style={{ marginBottom: '0.75rem' }}>
                        Service 0{index + 1}
                      </span>
                      <h2 style={{ fontSize: '1.85rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
                        {service.title}
                      </h2>
                      <p style={{ color: 'var(--text-dark-secondary)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                        {service.fullDescription}
                      </p>

                      <div style={{ marginBottom: '1.75rem' }}>
                        <h4 style={{ fontSize: '0.95rem', marginBottom: '0.6rem', color: 'var(--text-dark)' }}>
                          Key Service Inclusions:
                        </h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.45rem' }}>
                          {service.features.slice(0, 4).map((feat, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                              <Check size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link href={`/services/${service.slug}`} className="btn btn-outline btn-sm">
                          <span>View Full Specs & Scope</span>
                          <ArrowRight size={15} />
                        </Link>
                        <Link href="/quote" className="btn btn-primary btn-sm">
                          <span>Get a Quote</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <LeadBannerCTA />
    </>
  );
}
