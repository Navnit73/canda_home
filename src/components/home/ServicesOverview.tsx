import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '@/config/companyConfig';

export default function ServicesOverview() {
  return (
    <section className="section section-subtle" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            Complete Framing Solutions
          </div>
          <h2 className="section-title">
            Home Framing Services in Calgary
          </h2>
          <p className="section-subtitle">
            From ground-up single family builds to custom architectural timber packages, basements, and structural renovations — we frame with precision.
          </p>
        </div>

        <div className="grid-3" style={{ gap: '2rem' }}>
          {SERVICES_DATA.map((service) => (
            <div key={service.slug} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ position: 'relative', height: '220px', width: '100%', overflow: 'hidden' }}>
                <Image
                  src={service.image}
                  alt={`${service.title} in Calgary, Alberta`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover', transition: 'transform var(--transition-smooth)' }}
                  className="service-card-img"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    zIndex: 2,
                  }}
                >
                  <span className="badge badge-dark">
                    Calgary, AB
                  </span>
                </div>
              </div>

              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                    {service.shortDescription}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} style={{ fontSize: '0.8125rem', color: 'var(--text-dark-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                        <Check size={14} color="var(--accent-primary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="btn btn-outline btn-block btn-sm"
                    style={{ justifyContent: 'space-between' }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Link href="/quote" className="btn btn-primary btn-lg">
            <span>Get a Free Framing Quote</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
