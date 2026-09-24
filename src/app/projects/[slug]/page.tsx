import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MapPin, ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Building, Calendar } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import LeadBannerCTA from '@/components/common/LeadBannerCTA';
import SchemaOrg from '@/components/common/SchemaOrg';
import { PROJECTS_DATA, COMPANY_CONFIG } from '@/config/companyConfig';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | Calgary Framing Case Study`,
    description: `${project.shortDescription} Located in ${project.location}. Quality residential framing by ${COMPANY_CONFIG.name}.`,
    alternates: {
      canonical: `https://calgaryhomeframing.ca/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SchemaOrg
        type="Contractor"
        title={project.title}
        description={project.shortDescription}
        url={`https://calgaryhomeframing.ca/projects/${project.slug}`}
        image={project.image}
      />

      <section className="section-sm" style={{ backgroundColor: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Projects', href: '/projects' },
              { label: project.title },
            ]}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <span className="badge badge-orange">{project.categoryLabel}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <MapPin size={14} color="var(--accent-primary)" />
              {project.location}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            {project.title}
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
            {project.shortDescription}
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-sidebar">
            {/* Main Project Breakdown */}
            <div>
              {/* Main Hero Image */}
              <div style={{ position: 'relative', height: '460px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
                <Image
                  src={project.image}
                  alt={`${project.title} - Calgary Framing`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Project Overview */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.85rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
                  Project Overview
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-secondary)', lineHeight: 1.7 }}>
                  {project.overview}
                </p>
              </div>

              {/* Scope of Work */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
                  Scope of Framing Work
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {project.scopeOfWork.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', backgroundColor: 'var(--bg-light)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)' }}>
                      <CheckCircle2 size={18} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-dark)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Construction Details */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
                  Construction & Blueprint Details
                </h3>
                <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--text-dark-secondary)' }}>
                  {project.framingDetails.map((detail, idx) => (
                    <li key={idx} style={{ fontSize: '0.925rem', lineHeight: 1.6 }}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ backgroundColor: '#FFF5F0', border: '1px solid #FFDEC9', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>
                    <ShieldAlert size={18} />
                    <span>Framing Challenge</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-dark-secondary)', lineHeight: 1.6 }}>
                    {project.challenges}
                  </p>
                </div>

                <div style={{ backgroundColor: '#F0FDF4', border: '1px solid #DCFCE7', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#16A34A', fontWeight: 700, marginBottom: '0.5rem' }}>
                    <Sparkles size={18} />
                    <span>Framer Solution</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-dark-secondary)', lineHeight: 1.6 }}>
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Final Result */}
              <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
                  Final Result
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-dark-secondary)', lineHeight: 1.6 }}>
                  {project.finalResult}
                </p>
              </div>

              {/* Photo Gallery */}
              {project.gallery.length > 1 && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
                    Framing Gallery
                  </h3>
                  <div className="grid-2" style={{ gap: '1rem' }}>
                    {project.gallery.map((img, i) => (
                      <div key={i} style={{ position: 'relative', height: '220px', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                        <Image
                          src={img}
                          alt={`${project.title} photo ${i + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar with Specs & CTA */}
            <div>
              <div className="sticky-sidebar-box" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Project Specs Card */}
                <div className="card" style={{ padding: '1.75rem', backgroundColor: 'var(--bg-light)' }}>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '1.25rem', color: 'var(--text-dark)' }}>
                    Project Specifications
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {project.specs.map((spec, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.6rem', fontSize: '0.875rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>{spec.label}:</span>
                        <strong style={{ color: 'var(--text-dark)', textAlign: 'right' }}>{spec.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote Trigger Card */}
                <div className="card" style={{ padding: '2rem', backgroundColor: '#0D1117', color: '#FFFFFF', border: '1px solid #1F2633' }}>
                  <span className="badge badge-orange" style={{ marginBottom: '0.75rem' }}>
                    Calgary Estimating
                  </span>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                    Have a Similar Project?
                  </h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Request an itemized framing estimate for your upcoming build or development.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <Link href="/quote" className="btn btn-primary btn-block">
                      <span>Get a Quote</span>
                      <ArrowRight size={16} />
                    </Link>
                    <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="btn btn-outline-white btn-block">
                      <span>Call {COMPANY_CONFIG.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadBannerCTA
        headline="Have a Similar Project in Mind?"
        copy="Contact our framing team today to discuss blueprints, scheduling, and project specifications."
      />
    </>
  );
}
