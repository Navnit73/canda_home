'use client';

import React, { useState } from 'react';
import { Hammer, MessageSquare, HardHat, Home, Star, CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { TRUST_POINTS, TESTIMONIALS_DATA } from '@/config/companyConfig';
import Link from 'next/link';

export default function TrustSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer': return Hammer;
      case 'MessageSquare': return MessageSquare;
      case 'HardHat': return HardHat;
      default: return Home;
    }
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const currentT = TESTIMONIALS_DATA[activeTestimonial];

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

        {/* 4 Trust Pillars */}
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
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--accent-primary-subtle)',
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                      border: '1px solid rgba(255, 90, 31, 0.2)',
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
              </div>
            );
          })}
        </div>

        {/* STATS & SOCIAL PROOF SPOTLIGHT */}
        <div
          style={{
            backgroundColor: '#0A0E17',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(1.5rem, 4vw, 3.25rem)',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            border: '1px solid #1E293B',
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-80px',
              right: '-80px',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,90,31,0.18) 0%, rgba(255,90,31,0) 70%)',
              pointerEvents: 'none',
            }}
          />

          <div className="grid-2" style={{ alignItems: 'center', gap: 'clamp(1.75rem, 4vw, 3rem)' }}>
            {/* Left Column: Why Builders Rely on Us */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
                <span className="badge badge-orange">
                  Local Calgary Framing
                </span>
                <span className="badge badge-live">
                  <span className="live-dot" style={{ width: '6px', height: '6px' }} />
                  <span>Licensed & WCB Insured</span>
                </span>
              </div>

              <h3 style={{ color: '#FFFFFF', fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', marginBottom: '1rem', lineHeight: 1.25 }}>
                Why General Contractors & Homeowners Count On Our Framing Crews
              </h3>

              <p style={{ color: '#CBD5E1', fontSize: '0.925rem', marginBottom: '1.5rem', lineHeight: 1.65 }}>
                A straight, plumb, and square framing job prevents costly delays down the road for electricians, plumbers, insulation contractors, and drywallers. We coordinate directly with your site superintendent or project manager to ensure framing passes municipal inspection without hitches.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', fontSize: '0.85rem', color: '#E2E8F0', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <CheckCircle size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: 600 }}>Strict Blueprint Compliance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <CheckCircle size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: 600 }}>Alberta Code Compliant</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <CheckCircle size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: 600 }}>Clean Daily Jobsite Cleanup</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <CheckCircle size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: 600 }}>Direct Site Communication</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="/quote" className="btn btn-primary btn-sm btn-mobile-block">
                  <span>Get an Estimate</span>
                  <ArrowRight size={15} />
                </Link>
                <Link href="/projects" className="btn btn-outline-white btn-sm btn-mobile-block">
                  <span>View Project Gallery</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Verified Customer Testimonial Slider Card */}
            <div
              style={{
                backgroundColor: 'rgba(22, 32, 50, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(1.25rem, 3.5vw, 2rem)',
                backdropFilter: 'blur(12px)',
                position: 'relative',
                width: '100%',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.2rem' }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  <button
                    onClick={prevTestimonial}
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      cursor: 'pointer',
                      flexShrink: 0,
                    }}
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      cursor: 'pointer',
                      flexShrink: 0,
                    }}
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <span className="badge badge-wood" style={{ marginBottom: '0.75rem', maxWidth: '100%', whiteSpace: 'normal', lineHeight: 1.3 }}>
                {currentT.highlight}
              </span>

              <p style={{ color: '#E2E8F0', fontSize: '0.9rem', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                &ldquo;{currentT.quote}&rdquo;
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.85rem' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#FFFFFF' }}>
                    {currentT.author}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                    {currentT.role} • {currentT.location}
                  </div>
                </div>

                <span style={{ fontSize: '0.72rem', color: 'var(--accent-primary)', fontWeight: 600, backgroundColor: 'rgba(255, 90, 31, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                  {currentT.projectType}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
