import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, Check } from 'lucide-react';
import { SERVICE_AREAS_DATA } from '@/config/companyConfig';

export default function AreasSection() {
  return (
    <section className="section section-subtle" id="areas">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            Local Coverage
          </div>
          <h2 className="section-title">
            Home Framing Services Across Calgary & Area
          </h2>
          <p className="section-subtitle">
            We provide residential framing crews for builders and homeowners across Calgary and neighboring communities.
          </p>
        </div>

        <div className="grid-3" style={{ gap: '1.75rem' }}>
          {SERVICE_AREAS_DATA.map((area) => (
            <div
              key={area.slug}
              className="card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#FFFFFF',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>
                  <MapPin size={20} />
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Alberta Region
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
                  {area.name} Framing
                </h3>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  {area.description}
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                    Key Communities Served:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {area.communities.slice(0, 4).map((c, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.75rem',
                          backgroundColor: 'var(--bg-subtle)',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          color: 'var(--text-dark-secondary)',
                        }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="btn btn-outline btn-block btn-sm"
                  style={{ justifyContent: 'space-between' }}
                >
                  <span>{area.name} Framing Info</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}

          {/* Custom Regional Box */}
          <div
            className="card"
            style={{
              padding: '2rem',
              backgroundColor: '#0D1117',
              color: '#FFFFFF',
              border: '1px solid #1F2633',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <span className="badge badge-wood" style={{ marginBottom: '0.85rem' }}>
                Foothills & Surrounding
              </span>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '0.75rem' }}>
                Acreages & Custom Builds
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Building an acreage home or workshop outside the immediate city limits? We service Bearspaw, Springbank, Bragg Creek, and surrounding Foothills County.
              </p>
            </div>

            <Link href="/contact" className="btn btn-primary btn-sm btn-block">
              <span>Inquire About Your Location</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
