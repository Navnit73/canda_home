'use client';

import React from 'react';
import Link from 'next/link';
import {
  HardHat,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  ChevronUp,
  FileText,
  Star,
} from 'lucide-react';
import { COMPANY_CONFIG, SERVICES_DATA, SERVICE_AREAS_DATA } from '@/config/companyConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: '#070A10', color: '#CBD5E1', borderTop: '1px solid #162032', paddingTop: '4.5rem', paddingBottom: '2.5rem' }}>
      <div className="container">
        {/* TRUST & ACCREDITATION BANNER */}
        <div
          style={{
            backgroundColor: '#111726',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem 2.25rem',
            marginBottom: '3.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <span className="badge badge-orange">Alberta Quality Standards</span>
              <div style={{ display: 'flex', gap: '2px', color: '#F59E0B' }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} fill="#F59E0B" />
                ))}
              </div>
            </div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '0.35rem' }}>
              Licensed, Insured & Code-Compliant Residential Framing
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.875rem', margin: 0 }}>
              {COMPANY_CONFIG.licensePlaceholder}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <Link href="/quote" className="btn btn-primary">
              <FileText size={16} />
              <span>Get a Free Framing Quote</span>
            </Link>
            <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="btn btn-outline-white">
              <Phone size={16} color="var(--accent-primary)" />
              <span>{COMPANY_CONFIG.phone}</span>
            </a>
          </div>
        </div>

        {/* MAIN 4-COLUMN FOOTER GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Column 1: Brand & Contact Info */}
          <div style={{ maxWidth: '340px' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', textDecoration: 'none' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'var(--accent-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 12px rgba(255, 90, 31, 0.35)',
                }}
              >
                <HardHat size={22} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: '#FFFFFF' }}>
                  {COMPANY_CONFIG.name}
                </div>
                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--accent-wood)', letterSpacing: '0.06em', fontWeight: 700 }}>
                  Residential Framing • Calgary, AB
                </div>
              </div>
            </Link>

            <p style={{ fontSize: '0.88rem', color: '#94A3B8', marginBottom: '1.5rem', lineHeight: 1.65 }}>
              Precision residential wood framing contractor serving Calgary, Airdrie, Cochrane, Chestermere, Okotoks, and surrounding Alberta communities. Built to engineering code tolerances.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: '#E2E8F0' }}>
                <MapPin size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{COMPANY_CONFIG.serviceRegion}</span>
              </div>
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#E2E8F0', fontWeight: 600 }}
              >
                <Phone size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                <span>{COMPANY_CONFIG.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_CONFIG.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#E2E8F0' }}
              >
                <Mail size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                <span>{COMPANY_CONFIG.email}</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#94A3B8', fontSize: '0.825rem' }}>
                <Clock size={16} color="var(--accent-wood)" style={{ flexShrink: 0 }} />
                <span>{COMPANY_CONFIG.hours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Framing Services */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Framing Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', padding: 0 }}>
              {SERVICES_DATA.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    style={{
                      fontSize: '0.875rem',
                      color: '#94A3B8',
                      transition: 'color var(--transition-fast)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Service Areas
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', padding: 0 }}>
              {SERVICE_AREAS_DATA.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    style={{
                      fontSize: '0.875rem',
                      color: '#94A3B8',
                      transition: 'color var(--transition-fast)',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    {area.name} Framing
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas"
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--accent-wood)',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    marginTop: '0.35rem',
                  }}
                >
                  <span>All Calgary Neighborhoods</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Estimate Request */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Quick Links & Estimates
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', padding: 0, marginBottom: '1.5rem' }}>
              <li>
                <Link href="/about" style={{ fontSize: '0.875rem', color: '#94A3B8' }}>
                  About Our Crew
                </Link>
              </li>
              <li>
                <Link href="/projects" style={{ fontSize: '0.875rem', color: '#94A3B8' }}>
                  Recent Project Case Studies
                </Link>
              </li>
              <li>
                <Link href="/faq" style={{ fontSize: '0.875rem', color: '#94A3B8' }}>
                  Framing Process & FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ fontSize: '0.875rem', color: '#94A3B8' }}>
                  Contact Direct
                </Link>
              </li>
              <li>
                <Link href="/quote" style={{ fontSize: '0.875rem', color: 'var(--accent-primary)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span>5-Step Framing Estimate Builder</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
            </ul>

            <h5 style={{ color: '#E2E8F0', fontSize: '0.85rem', marginBottom: '0.65rem' }}>Connect With Us</h5>
            <div style={{ display: 'flex', gap: '0.85rem', fontSize: '0.85rem' }}>
              <a
                href={COMPANY_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#94A3B8' }}
              >
                Instagram
              </a>
              <span style={{ color: '#4B5563' }}>•</span>
              <a
                href={COMPANY_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#94A3B8' }}
              >
                Facebook
              </a>
              <span style={{ color: '#4B5563' }}>•</span>
              <a
                href={COMPANY_CONFIG.socials.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#94A3B8' }}
              >
                Google Business
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & SCROLL TO TOP BAR */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            fontSize: '0.8125rem',
            color: '#64748B',
          }}
        >
          <div>
            © {currentYear} {COMPANY_CONFIG.legalName}. All rights reserved. Professional Residential Framing Contractor in Calgary, Alberta.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/privacy-policy" style={{ color: '#94A3B8' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ color: '#94A3B8' }}>
              Terms & Conditions
            </Link>
            <Link href="/quote" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
              Online Estimate
            </Link>
            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#CBD5E1',
                padding: '0.4rem 0.75rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.78rem',
                fontWeight: 600,
              }}
              aria-label="Scroll to top of page"
            >
              <span>Back to top</span>
              <ChevronUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
