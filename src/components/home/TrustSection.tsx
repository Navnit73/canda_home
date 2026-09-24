import React from 'react';
import { Hammer, MessageSquare, HardHat, Home, Shield, Star, CheckCircle } from 'lucide-react';
import { TRUST_POINTS, COMPANY_CONFIG } from '@/config/companyConfig';

export default function TrustSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer': return Hammer;
      case 'MessageSquare': return MessageSquare;
      case 'HardHat': return HardHat;
      default: return Home;
    }
  };

  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Top Trust Points Grid */}
        <div className="section-header">
          <div className="section-tag">
            Proven Calgary Craftsmanship
          </div>
          <h2 className="section-title">
            Built Right From the Ground Up
          </h2>
          <p className="section-subtitle">
            Framing is the structural backbone of your home. We approach every residential build in Calgary with strict adherence to the Alberta Building Code, structural engineering specifications, and precision carpentry tolerances.
          </p>
        </div>

        <div className="grid-4" style={{ marginBottom: '4rem' }}>
          {TRUST_POINTS.map((pt, idx) => {
            const Icon = getIcon(pt.icon);
            return (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '2rem 1.5rem',
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-light)',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--accent-primary-subtle)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  <Icon size={24} />
                </div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem', color: 'var(--text-dark)' }}>
                  {pt.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Why Builders & Homeowners Choose Us Info Box */}
        <div
          style={{
            backgroundColor: '#0D1117',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2.5rem',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: '-50px',
              right: '-50px',
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              backgroundColor: 'rgba(197, 138, 75, 0.08)',
              pointerEvents: 'none',
            }}
          />

          <div className="grid-2" style={{ alignItems: 'center', gap: '2.5rem' }}>
            <div>
              <span className="badge badge-wood" style={{ marginBottom: '0.85rem' }}>
                Local Calgary Framing
              </span>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.75rem', marginBottom: '1rem', lineHeight: 1.3 }}>
                Why General Contractors & Homeowners Count On Our Framing Crews
              </h3>
              <p style={{ color: '#CBD5E1', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                A straight, plumb, and square framing job prevents costly delays down the road for electricians, plumbers, insulation contractors, and drywallers. We coordinate directly with your site superintendent or project manager to ensure framing passes municipal inspection without hitches.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.875rem', color: '#E2E8F0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <CheckCircle size={16} color="var(--accent-primary)" />
                  <span>Strict Blueprint Compliance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <CheckCircle size={16} color="var(--accent-primary)" />
                  <span>Alberta Code Compliant</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <CheckCircle size={16} color="var(--accent-primary)" />
                  <span>Clean Jobsite Practices</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <CheckCircle size={16} color="var(--accent-primary)" />
                  <span>Direct Communication</span>
                </div>
              </div>
            </div>

            {/* Clearly marked placeholder for verified customer reviews */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1.5px dashed rgba(255, 255, 255, 0.2)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                textAlign: 'center',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '0.85rem' }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={20} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                Verified Client Reviews
              </h4>
              <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '1.25rem', fontStyle: 'italic' }}>
                [Add verified customer testimonials here from Calgary homeowners, builders, and developers]
              </p>
              <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                {COMPANY_CONFIG.licensePlaceholder}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
