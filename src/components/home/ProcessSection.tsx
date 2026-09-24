import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Search, CalendarCheck, Hammer } from 'lucide-react';
import { PROCESS_STEPS } from '@/config/companyConfig';

export default function ProcessSection() {
  const stepIcons = [FileText, Search, CalendarCheck, Hammer];

  return (
    <section className="section section-dark" id="process">
      <div className="container">
        <div className="section-header">
          <div className="section-tag section-tag-dark">
            How It Works
          </div>
          <h2 className="section-title" style={{ color: '#FFFFFF' }}>
            Simple, Transparent 4-Step Framing Process
          </h2>
          <p className="section-subtitle" style={{ color: '#94A3B8' }}>
            From initial blueprint takeoff to final inspection sign-off, our structured process keeps your framing build straightforward and on schedule.
          </p>
        </div>

        <div className="grid-4" style={{ gap: '1.5rem', marginBottom: '3.5rem' }}>
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || Hammer;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#161B22',
                  border: '1px solid #262F3E',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem 1.5rem',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: '2.5rem',
                      color: 'rgba(232, 89, 12, 0.25)',
                      lineHeight: 1,
                      marginBottom: '1rem',
                    }}
                  >
                    {step.number}
                  </div>

                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '0.6rem' }}>
                    {step.title}
                  </h3>

                  <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/quote" className="btn btn-primary btn-lg">
            <span>Start Your Project</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
