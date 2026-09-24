'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, ChevronDown, HardHat, FileText, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG, SERVICES_DATA, SERVICE_AREAS_DATA } from '@/config/companyConfig';
import MobileNavDrawer from './MobileNavDrawer';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
}

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [areasDropdown, setAreasDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          backgroundColor: isScrolled ? 'rgba(13, 17, 23, 0.97)' : 'rgba(13, 17, 23, 0.98)',
          backdropFilter: 'blur(10px)',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(255, 255, 255, 0.06)',
          transition: 'all var(--transition-fast)',
          padding: isScrolled ? '0.65rem 0' : '0.85rem 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', flexShrink: 0 }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                backgroundColor: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 4px 12px rgba(232, 89, 12, 0.35)',
                flexShrink: 0,
              }}
            >
              <HardHat size={22} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(1rem, 3.5vw, 1.25rem)',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                }}
              >
                {COMPANY_CONFIG.name}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--accent-wood)',
                  display: 'block',
                }}
              >
                Residential Framing • Calgary
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.4rem',
            }}
            className="desktop-nav"
          >
            <Link
              href="/"
              style={{
                color: pathname === '/' ? 'var(--accent-primary)' : '#CBD5E1',
                fontWeight: 600,
                fontSize: '0.925rem',
                transition: 'color var(--transition-fast)',
              }}
            >
              Home
            </Link>

            <Link
              href="/about"
              style={{
                color: pathname === '/about' ? 'var(--accent-primary)' : '#CBD5E1',
                fontWeight: 600,
                fontSize: '0.925rem',
                transition: 'color var(--transition-fast)',
              }}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/services"
                style={{
                  color: pathname.startsWith('/services') ? 'var(--accent-primary)' : '#CBD5E1',
                  fontWeight: 600,
                  fontSize: '0.925rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  transition: 'color var(--transition-fast)',
                }}
              >
                <span>Services</span>
                <ChevronDown size={15} />
              </Link>

              {servicesDropdown && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '290px',
                    paddingTop: '0.5rem',
                    zIndex: 950,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#161B22',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
                      padding: '0.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.2rem',
                    }}
                  >
                    {SERVICES_DATA.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        style={{
                          padding: '0.6rem 0.85rem',
                          borderRadius: '6px',
                          color: '#E2E8F0',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          transition: 'all var(--transition-fast)',
                          display: 'block',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(232, 89, 12, 0.15)';
                          e.currentTarget.style.color = 'var(--accent-primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#E2E8F0';
                        }}
                      >
                        {service.title}
                      </Link>
                    ))}
                    <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', margin: '0.35rem 0' }} />
                    <Link
                      href="/services"
                      style={{
                        padding: '0.5rem 0.85rem',
                        fontSize: '0.8125rem',
                        color: 'var(--accent-wood)',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>View All Services</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/projects"
              style={{
                color: pathname.startsWith('/projects') ? 'var(--accent-primary)' : '#CBD5E1',
                fontWeight: 600,
                fontSize: '0.925rem',
                transition: 'color var(--transition-fast)',
              }}
            >
              Projects
            </Link>

            {/* Areas Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setAreasDropdown(true)}
              onMouseLeave={() => setAreasDropdown(false)}
            >
              <Link
                href="/areas"
                style={{
                  color: pathname.startsWith('/areas') ? 'var(--accent-primary)' : '#CBD5E1',
                  fontWeight: 600,
                  fontSize: '0.925rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  transition: 'color var(--transition-fast)',
                }}
              >
                <span>Service Areas</span>
                <ChevronDown size={15} />
              </Link>

              {areasDropdown && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '240px',
                    paddingTop: '0.5rem',
                    zIndex: 950,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#161B22',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
                      padding: '0.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.2rem',
                    }}
                  >
                    {SERVICE_AREAS_DATA.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/areas/${area.slug}`}
                        style={{
                          padding: '0.6rem 0.85rem',
                          borderRadius: '6px',
                          color: '#E2E8F0',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          transition: 'all var(--transition-fast)',
                          display: 'block',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(232, 89, 12, 0.15)';
                          e.currentTarget.style.color = 'var(--accent-primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#E2E8F0';
                        }}
                      >
                        {area.name} Framing
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/faq"
              style={{
                color: pathname === '/faq' ? 'var(--accent-primary)' : '#CBD5E1',
                fontWeight: 600,
                fontSize: '0.925rem',
                transition: 'color var(--transition-fast)',
              }}
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              style={{
                color: pathname === '/contact' ? 'var(--accent-primary)' : '#CBD5E1',
                fontWeight: 600,
                fontSize: '0.925rem',
                transition: 'color var(--transition-fast)',
              }}
            >
              Contact
            </Link>
          </nav>

          {/* Header Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {/* Desktop Phone CTA */}
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#FFFFFF',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.9rem',
                padding: '0.55rem 0.9rem',
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all var(--transition-fast)',
              }}
              className="desktop-phone-btn"
            >
              <Phone size={15} color="var(--accent-primary)" />
              <span>Call {COMPANY_CONFIG.phone}</span>
            </a>

            {/* Quote CTA Button */}
            <Link
              href="/quote"
              className="btn btn-primary btn-sm"
              style={{ display: 'inline-flex', padding: '0.5rem 0.85rem' }}
            >
              <FileText size={15} />
              <span className="quote-btn-text">Get a Free Quote</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '6px',
                color: '#FFFFFF',
                width: '42px',
                height: '42px',
                cursor: 'pointer',
                flexShrink: 0,
              }}
              className="mobile-hamburger"
              aria-label="Open Navigation Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        <style jsx global>{`
          @media (max-width: 480px) {
            .quote-btn-text {
              display: none;
            }
          }
        `}</style>
      </header>

      <MobileNavDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenQuoteModal={onOpenQuoteModal || (() => {})}
      />
    </>
  );
}
