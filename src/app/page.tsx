import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
  HardHat,
  ArrowRight,
  CheckCircle2,
  Star,
} from 'lucide-react';
import HeroQuoteCard from '@/components/forms/HeroQuoteCard';
import TrustSection from '@/components/home/TrustSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProcessSection from '@/components/home/ProcessSection';
import ProjectsPortfolio from '@/components/home/ProjectsPortfolio';
import AreasSection from '@/components/home/AreasSection';
import HomeFAQ from '@/components/home/HomeFAQ';
import LeadBannerCTA from '@/components/common/LeadBannerCTA';

export const metadata: Metadata = {
  title: 'Quality Residential Home Framing Contractor Calgary, AB',
  description: 'Professional residential framing contractor in Calgary & surrounding area. New home framing, custom architectural builds, basements, detached garages, additions, and structural LVL beams. Request a free takeoff quote today.',
  alternates: {
    canonical: 'https://calgaryhomeframing.ca',
  },
};

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-wrapper">
        <Image
          src="/images/hero-calgary-framing.jpg"
          alt="Quality residential wood frame house construction in Calgary Alberta"
          fill
          priority
          sizes="100vw"
          className="hero-bg-image"
        />
        <div className="hero-overlay" />

        <div className="container hero-content" style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 3vw, 1.5rem)' }}>
          <div className="hero-grid" style={{ width: '100%' }}>
            {/* Left Hero Content */}
            <div style={{ maxWidth: '640px', width: '100%' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  backgroundColor: 'rgba(255, 90, 31, 0.18)',
                  border: '1px solid rgba(255, 90, 31, 0.35)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'clamp(0.72rem, 2vw, 0.825rem)',
                  fontWeight: 700,
                  color: '#FFA472',
                  marginBottom: '1.15rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  maxWidth: '100%',
                  lineHeight: 1.3,
                }}
              >
                <HardHat size={15} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                <span>Calgary & Area Residential Framing</span>
              </div>

              <h1 style={{ color: '#FFFFFF', marginBottom: '1.25rem', fontWeight: 800 }}>
                Quality Home Framing Built for <span className="text-gradient">Calgary Homes</span>
              </h1>

              <p style={{ color: '#E2E8F0', fontSize: 'clamp(1rem, 2.2vw, 1.15rem)', lineHeight: 1.65, marginBottom: '2rem' }}>
                Professional residential timber framing for new homes, custom estate builds, detached garages, legal basement suites, additions, and engineered beam installations.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '2.25rem' }}>
                <Link href="/quote" className="btn btn-primary btn-lg btn-mobile-block">
                  <span>Get a Free Framing Quote</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/projects" className="btn btn-outline-white btn-lg btn-mobile-block">
                  <span>View Our Work</span>
                </Link>
              </div>

              {/* Trust Indicators Underneath Hero */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '0.75rem 1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                  paddingTop: '1.25rem',
                }}
              >
                {[
                  'Alberta Building Code Compliant',
                  'Calgary & Surrounding Area',
                  'WCB Alberta & $5M Insured',
                  'Itemized Blueprint Takeoffs',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#CBD5E1', fontSize: '0.825rem' }}>
                    <CheckCircle2 size={15} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                    <span style={{ fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Lead Capture Form */}
            <div style={{ maxWidth: '460px', justifySelf: 'center', width: '100%' }}>
              <HeroQuoteCard />
            </div>
          </div>
        </div>
      </section>

      {/* METRIC HIGHLIGHTS STRIP */}
      <section
        style={{
          backgroundColor: '#1C263A',
          borderBottom: '1px solid #2B3D5C',
          padding: '1.75rem 0',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.5rem',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1 }}>
                250+
              </div>
              <div style={{ fontSize: '0.825rem', color: '#94A3B8', fontWeight: 600, marginTop: '0.35rem' }}>
                Alberta Homes Framed
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>
                100%
              </div>
              <div style={{ fontSize: '0.825rem', color: '#94A3B8', fontWeight: 600, marginTop: '0.35rem' }}>
                Municipal Code Inspection Pass
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent-wood)', lineHeight: 1 }}>
                15+
              </div>
              <div style={{ fontSize: '0.825rem', color: '#94A3B8', fontWeight: 600, marginTop: '0.35rem' }}>
                Years Calgary Framing Experience
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: '#10B981', lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
                <span>5.0</span>
                <Star size={20} fill="#10B981" color="#10B981" />
              </div>
              <div style={{ fontSize: '0.825rem', color: '#94A3B8', fontWeight: 600, marginTop: '0.35rem' }}>
                Client Satisfaction Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / SOCIAL PROOF SECTION */}
      <TrustSection />

      {/* SERVICES SECTION */}
      <ServicesOverview />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* PROCESS SECTION */}
      <ProcessSection />

      {/* RECENT PROJECTS PORTFOLIO */}
      <ProjectsPortfolio />

      {/* SERVICE AREAS */}
      <AreasSection />

      {/* FAQ SECTION */}
      <HomeFAQ limit={6} />

      {/* LEAD GENERATION BANNER */}
      <LeadBannerCTA
        headline="Planning a New Home or Renovation in Calgary?"
        copy="Tell us about your project and we'll get back to you within 24 hours to discuss your framing scope and blueprint takeoff."
      />
    </>
  );
}
