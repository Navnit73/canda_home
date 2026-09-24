import React from 'react';
import Link from 'next/link';
import { HardHat, Phone, Mail, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG, SERVICES_DATA, SERVICE_AREAS_DATA } from '@/config/companyConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#090C10', color: '#CBD5E1', borderTop: '1px solid #1F2633', paddingTop: '4.5rem', paddingBottom: '2.5rem' }}>
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Col 1: Brand & Positioning */}
          <div style={{ maxWidth: '340px' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', textDecoration: 'none' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
              >
                <HardHat size={22} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: '#FFFFFF' }}>
                  {COMPANY_CONFIG.name}
                </div>
                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--accent-wood)', letterSpacing: '0.05em' }}>
                  Residential Framing • Calgary, AB
                </div>
              </div>
            </Link>

            <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              Professional residential home framing contractor serving Calgary, Airdrie, Cochrane, Chestermere, Okotoks, and surrounding communities. Quality timber craftsmanship built for Alberta homes.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#E2E8F0' }}>
                <MapPin size={16} color="var(--accent-primary)" />
                <span>{COMPANY_CONFIG.addressPlaceholder}</span>
              </div>
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#E2E8F0' }}
              >
                <Phone size={16} color="var(--accent-primary)" />
                <span>{COMPANY_CONFIG.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_CONFIG.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#E2E8F0' }}
              >
                <Mail size={16} color="var(--accent-primary)" />
                <span>{COMPANY_CONFIG.email}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Framing Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0 }}>
              {SERVICES_DATA.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    style={{
                      fontSize: '0.875rem',
                      color: '#94A3B8',
                      transition: 'color var(--transition-fast)',
                      display: 'inline-block',
                    }}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Service Areas
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0 }}>
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
                  >
                    {area.name} Framing
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas"
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--accent-wood)',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}
                >
                  <span>View All Areas</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Socials */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Company & Resources
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0, marginBottom: '1.5rem' }}>
              <li>
                <Link href="/about" style={{ fontSize: '0.875rem', color: '#94A3B8' }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" style={{ fontSize: '0.875rem', color: '#94A3B8' }}>
                  Recent Projects
                </Link>
              </li>
              <li>
                <Link href="/faq" style={{ fontSize: '0.875rem', color: '#94A3B8' }}>
                  Framing FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ fontSize: '0.875rem', color: '#94A3B8' }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/quote" style={{ fontSize: '0.875rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                  Request a Free Quote
                </Link>
              </li>
            </ul>

            <h5 style={{ color: '#E2E8F0', fontSize: '0.85rem', marginBottom: '0.6rem' }}>Follow Us</h5>
            <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem' }}>
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

        {/* Bottom Legal & Copyright Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: '#64748B',
          }}
        >
          <div>
            © {currentYear} {COMPANY_CONFIG.name}. All rights reserved. Residential Home Framing Contractor in Calgary, Alberta.
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy-policy" style={{ color: '#94A3B8' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ color: '#94A3B8' }}>
              Terms & Conditions
            </Link>
            <Link href="/quote" style={{ color: 'var(--accent-primary)' }}>
              Online Estimate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
