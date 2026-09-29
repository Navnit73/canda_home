import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { HardHat, MessageSquare, Ruler, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import LeadBannerCTA from '@/components/common/LeadBannerCTA';
import { COMPANY_CONFIG } from '@/config/companyConfig';

export const metadata: Metadata = {
  title: 'About Us | Calgary Residential Framing Contractors',
  description: 'Learn about Calgary Home Framing. Dedicated to precision residential wood framing, Alberta Building Code standards, and reliable builder communication across Calgary and surrounding areas.',
  alternates: {
    canonical: 'https://calgaryhomeframing.ca/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="section-sm" style={{ backgroundColor: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
          <span className="section-tag">About {COMPANY_CONFIG.name}</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.25rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Calgary Home Framing Built on Craftsmanship & Reliability
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '800px', lineHeight: 1.65 }}>
            Specializing in high-precision residential wood framing for custom homes, new subdivisions, inner-city infills, garages, and additions throughout the Calgary region.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem', marginBottom: '4.5rem' }}>
            <div>
              <span className="section-tag">Who We Are</span>
              <h2 style={{ fontSize: '2.35rem', marginBottom: '1.25rem' }}>
                Dedicated Residential Wood Framing Specialists
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-secondary)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                {COMPANY_CONFIG.name} is a Calgary-based residential framing contractor focused on delivering structural wood framing packages that meet the highest standards of safety, blueprint accuracy, and structural integrity.
              </p>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.7 }}>
                With extensive on-site experience across inner-city infills in Marda Loop and Altadore, sprawling foothills estates in Bearspaw and Springbank, and suburban family builds in Airdrie and Mahogany, our crew brings trade discipline, laser leveling, and clean jobsite standards to every build.
              </p>

              <div
                style={{
                  backgroundColor: 'var(--bg-subtle)',
                  borderLeft: '4px solid var(--accent-primary)',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                  marginBottom: '2rem',
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
                  Direct On-Site Leadership & Quality Control:
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-dark-secondary)', lineHeight: 1.5 }}>
                  Every project is led by a dedicated site supervisor with continuous oversight on all sill anchorings, wall layouts, continuous load path transfers, and Alberta Safety Code enforcement.
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/quote" className="btn btn-primary btn-lg">
                  <span>Request a Free Quote</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/projects" className="btn btn-outline btn-lg">
                  <span>View Project Portfolio</span>
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative', height: '480px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--border-light)' }}>
              <Image
                src="/images/crew-jobsite.jpg"
                alt="Framing crew reviewing architectural blueprints on a Calgary jobsite"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Pillars of our Approach */}
          <div style={{ marginBottom: '4.5rem' }}>
            <div className="section-header">
              <span className="section-tag">Our Philosophy</span>
              <h2 className="section-title">Our Framing Standards & Approach</h2>
              <p className="section-subtitle">
                How we deliver quality, predictability, and efficiency on every residential framing project.
              </p>
            </div>

            <div className="grid-3" style={{ gap: '2rem' }}>
              <div className="card" style={{ padding: '2.25rem', backgroundColor: 'var(--bg-light)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: 'var(--accent-primary-subtle)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Ruler size={24} />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>Precision Workmanship</h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  We measure twice, cut once, and verify every wall with laser levels. From continuous load paths to properly aligned joist hangers and subfloor adhesive schedules, we ensure subsequent trades can work effortlessly.
                </p>
              </div>

              <div className="card" style={{ padding: '2.25rem', backgroundColor: 'var(--bg-light)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: 'var(--accent-primary-subtle)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <HardHat size={24} />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>Safety & Jobsite Standards</h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  A safe jobsite is an efficient jobsite. We enforce strict personal protective equipment (PPE), engineered fall protection, organized lumber staging, and daily site cleanup to prevent hazards and material damage.
                </p>
              </div>

              <div className="card" style={{ padding: '2.25rem', backgroundColor: 'var(--bg-light)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: 'var(--accent-primary-subtle)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <MessageSquare size={24} />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>Clear Communication</h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  No unanswered calls or surprise schedule slips. We provide proactive milestone updates, coordinate delivery drops with suppliers, and keep project managers and homeowners informed every step of the way.
                </p>
              </div>
            </div>
          </div>

          {/* Compliance & Code Box */}
          <div
            style={{
              backgroundColor: '#0A0E17',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              border: '1px solid #1E293B',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            }}
          >
            <div className="grid-2" style={{ alignItems: 'center', gap: '2.5rem' }}>
              <div>
                <span className="badge badge-wood" style={{ marginBottom: '0.85rem' }}>
                  Professional Compliance
                </span>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.65rem', marginBottom: '0.85rem' }}>
                  Alberta Building Code & Safety Assurance
                </h3>
                <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  All framing work is constructed strictly to municipal codes and structural engineer specifications. We coordinate directly with City of Calgary safety code officers for prompt framing sign-offs.
                </p>
                <div style={{ fontSize: '0.875rem', color: '#94A3B8' }}>
                  • {COMPANY_CONFIG.licensePlaceholder}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', alignItems: 'flex-start' }}>
                <Link href="/contact" className="btn btn-primary btn-lg">
                  <span>Get in Touch With Our Team</span>
                  <ArrowRight size={18} />
                </Link>
                <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="btn btn-outline-white">
                  <span>Direct Estimator: {COMPANY_CONFIG.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadBannerCTA
        headline="Ready to Frame Your Next Calgary Project?"
        copy="Tell us about your blueprints and target schedule. Our framing supervisors will review your scope and provide a clear, itemized quote."
      />
    </>
  );
}
