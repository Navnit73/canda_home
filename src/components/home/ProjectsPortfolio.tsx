'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Tag } from 'lucide-react';
import { PROJECTS_DATA } from '@/config/companyConfig';

export default function ProjectsPortfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'new-home', label: 'New Home Framing' },
    { id: 'custom-home', label: 'Custom Homes' },
    { id: 'garage', label: 'Garages' },
    { id: 'renovation', label: 'Renovations & Beams' },
  ];

  return (
    <section className="section" id="projects" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            Quality Portfolio
          </div>
          <h2 className="section-title">
            Our Recent Framing Projects
          </h2>
          <p className="section-subtitle">
            Explore a selection of residential wood framing projects built across Calgary, Airdrie, Cochrane, and Foothills communities.
          </p>

          {/* Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '1.75rem',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: '1.5px solid',
                  borderColor: activeCategory === cat.id ? 'var(--accent-primary)' : 'var(--border-light)',
                  backgroundColor: activeCategory === cat.id ? 'var(--accent-primary)' : '#FFFFFF',
                  color: activeCategory === cat.id ? '#FFFFFF' : 'var(--text-dark)',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid-2" style={{ gap: '2rem' }}>
          {filteredProjects.map((project) => (
            <div key={project.slug} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '300px', width: '100%', overflow: 'hidden' }}>
                <Image
                  src={project.image}
                  alt={`${project.title} - Framing Project in Calgary`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover', transition: 'transform var(--transition-smooth)' }}
                  className="project-card-img"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    zIndex: 2,
                  }}
                >
                  <span className="badge badge-orange">
                    {project.categoryLabel}
                  </span>
                </div>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    <MapPin size={14} color="var(--accent-primary)" />
                    <span>{project.location}</span>
                  </div>

                  <h3 style={{ fontSize: '1.45rem', marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
                    {project.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {project.shortDescription}
                  </p>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="btn btn-outline btn-sm"
                  >
                    <span>View Project Case Study</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/quote"
                    style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600 }}
                  >
                    Get Similar Quote →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Link href="/projects" className="btn btn-secondary btn-lg">
            <span>View All Framing Projects</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
