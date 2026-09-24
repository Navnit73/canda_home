import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, MessageSquare, Wrench, Sparkles, Ruler } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/companyConfig';

export default function WhyChooseUs() {
  const benefits = [
    {
      title: 'Precise Workmanship',
      desc: 'Plumb walls, square corners, and level subfloors built strictly to engineered blueprint tolerances.',
      icon: Ruler,
    },
    {
      title: 'Clear Communication',
      desc: 'Direct updates throughout framing milestones, proactive coordination with other trades and supers.',
      icon: MessageSquare,
    },
    {
      title: 'Reliable Scheduling',
      desc: 'Committed crew start dates and realistic completion timelines to keep your overall build on schedule.',
      icon: Clock,
    },
    {
      title: 'Attention to Structural Details',
      desc: 'Proper continuous load paths, correct hanger nailing schedules, and robust shear-wall fastening.',
      icon: Wrench,
    },
    {
      title: 'Clean & Organized Worksites',
      desc: 'Tidy lumber stacking, daily scrap sorting, and strict jobsite safety standards enforced at all times.',
      icon: Sparkles,
    },
    {
      title: 'Residential Construction Experience',
      desc: 'Specialized focus on Alberta single-family homes, infills, custom estates, and suburban developments.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
          {/* Left Column: Copy & Benefits */}
          <div>
            <span className="section-tag">
              The Framing Standard
            </span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)', marginBottom: '1.25rem' }}>
              Why Calgary Homeowners & Builders Choose {COMPANY_CONFIG.name}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              A home’s finish quality starts with the structural skeleton. We build with pride, precision, and dependable trade communication so your next stage trades can do their best work without delays.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} style={{ display: 'flex', gap: '0.85rem' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--accent-primary-subtle)',
                        color: 'var(--accent-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <Icon size={19} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--text-dark)' }}>
                        {b.title}
                      </h4>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                        {b.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link href="/contact" className="btn btn-primary btn-lg">
              <span>Talk About Your Project</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right Column: Large Project Photography */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                height: '520px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid var(--border-light)',
              }}
            >
              <Image
                src="/images/crew-jobsite.jpg"
                alt="Professional framing crew on Calgary job site"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Overlaid Floating Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '20px',
                backgroundColor: '#0D1117',
                color: '#FFFFFF',
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid #1F2633',
                maxWidth: '300px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                <CheckCircle2 size={16} />
                <span>Alberta Safety & Code</span>
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#CBD5E1', lineHeight: 1.4 }}>
                Continuous load paths and engineering specifications verified on every frame.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
