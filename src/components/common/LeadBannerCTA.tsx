import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/companyConfig';

interface LeadBannerCTAProps {
  headline?: string;
  copy?: string;
}

export default function LeadBannerCTA({
  headline = 'Planning a New Home, Garage, or Renovation in Calgary?',
  copy = 'Tell us about your project scope and timelines. Our framing team will review your plans and provide a clear, itemized quote.',
}: LeadBannerCTAProps) {
  return (
    <section
      style={{
        backgroundColor: '#11161F',
        borderTop: '1px solid #1E2736',
        borderBottom: '1px solid #1E2736',
        position: 'relative',
        overflow: 'hidden',
        padding: '5rem 0',
      }}
    >
      {/* Decorative accent glow */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,89,12,0.15) 0%, rgba(232,89,12,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            alignItems: 'center',
            gap: '3rem',
          }}
        >
          <div>
            <div className="section-tag section-tag-dark" style={{ marginBottom: '1rem' }}>
              Calgary & Area Framing
            </div>
            <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
              {headline}
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.1rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              {copy}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', color: '#94A3B8', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <CheckCircle2 size={17} color="var(--accent-primary)" />
                <span>Alberta Code Compliant</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <CheckCircle2 size={17} color="var(--accent-primary)" />
                <span>Detailed Plan Takeoffs</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <CheckCircle2 size={17} color="var(--accent-primary)" />
                <span>Reliable Crew Scheduling</span>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#18202C',
              padding: '2.25rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center',
            }}
          >
            <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '0.5rem' }}>
              Ready to Discuss Your Build?
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
              Upload your plans or schedule a preliminary framing consultation today.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <Link href="/quote" className="btn btn-primary btn-lg btn-block">
                <span>Request a Free Quote</span>
                <ArrowRight size={18} />
              </Link>
              <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="btn btn-outline-white btn-block">
                <Phone size={16} color="var(--accent-primary)" />
                <span>Call {COMPANY_CONFIG.phone}</span>
              </a>
            </div>

            <div style={{ marginTop: '1.25rem', fontSize: '0.75rem', color: '#64748B' }}>
              No obligation • Clear itemized scope estimates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
