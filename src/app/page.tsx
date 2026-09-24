import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Phone, ArrowRight, CheckCircle2, ShieldCheck, HardHat, Calendar, Compass, Layers, Building, Hammer } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/companyConfig';
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
  description: 'Professional residential framing contractor in Calgary & area. New home framing, custom builds, basements, garages, additions, and renovations. Get a free quote today.',
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

        <div className="container hero-content" style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2.5vw, 1.5rem)' }}>
          <div className="hero-grid">
            {/* Left Hero Content */}
            <div style={{ maxWidth: '620px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(232, 89, 12, 0.2)',
                  border: '1px solid rgba(232, 89, 12, 0.4)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
                  fontWeight: 700,
                  color: '#FFA472',
                  marginBottom: '1.25rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                <HardHat size={16} color="var(--accent-primary)" />
                <span>Calgary & Area Residential Framers</span>
              </div>

              <h1 style={{ color: '#FFFFFF', marginBottom: '1.25rem', fontWeight: 800 }}>
                Quality Home Framing Built for Calgary Homes
              </h1>

              <p style={{ color: '#E2E8F0', fontSize: 'clamp(1rem, 2.2vw, 1.15rem)', lineHeight: 1.65, marginBottom: '2rem' }}>
                Professional residential framing for new homes, custom builds, additions, garages, basements, and renovations across Calgary and surrounding communities.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '2rem' }}>
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
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '0.75rem 1.25rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                  paddingTop: '1.25rem',
                }}
              >
                {[
                  'Residential Wood Framing',
                  'Calgary & Surrounding Area',
                  'Quality Workmanship',
                  'Reliable Crew Scheduling',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#CBD5E1', fontSize: '0.85rem' }}>
                    <CheckCircle2 size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                    <span style={{ fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Lead Capture Form (Desktop & Tablet) */}
            <div style={{ maxWidth: '440px', justifySelf: 'center', width: '100%' }}>
              <HeroQuoteCard />
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
        copy="Tell us about your project and we'll get back to you to discuss your framing requirements."
      />
    </>
  );
}
