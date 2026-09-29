'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Menu,
  ChevronDown,
  HardHat,
  FileText,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Home,
  Layers,
  Building,
  PlusSquare,
  Hammer,
  Wrench,
  Compass,
  Sparkles,
} from 'lucide-react';
import { COMPANY_CONFIG, SERVICES_DATA, SERVICE_AREAS_DATA } from '@/config/companyConfig';
import MobileNavDrawer from './MobileNavDrawer';
import QuickQuoteModal from '@/components/common/QuickQuoteModal';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
}

const serviceIcons: Record<string, React.ElementType> = {
  'new-home-framing': Home,
  'custom-home-framing': Compass,
  'basement-framing': Layers,
  'garage-framing': Building,
  'home-additions': PlusSquare,
  'renovation-framing': Hammer,
  'structural-framing': Wrench,
};

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [areasDropdown, setAreasDropdown] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const pathname = usePathname();

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const areasTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesDropdown(true);
  };
  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdown(false);
    }, 150);
  };

  const handleAreasEnter = () => {
    if (areasTimeoutRef.current) clearTimeout(areasTimeoutRef.current);
    setAreasDropdown(true);
  };
  const handleAreasLeave = () => {
    areasTimeoutRef.current = setTimeout(() => {
      setAreasDropdown(false);
    }, 150);
  };

  const handleOpenQuote = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      setIsQuoteModalOpen(true);
    }
  };

  return (
    <>
      {/* TOP ANNOUNCEMENT & TRUST BAR */}
      <div
        style={{
          backgroundColor: '#070A10',
          borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
          padding: '0.4rem 0',
          fontSize: '0.78rem',
          color: '#94A3B8',
          position: 'relative',
          zIndex: 910,
          overflow: 'hidden',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
          }}
        >
          {/* Left: Region Coverage */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: 0, overflow: 'hidden' }}>
            <div className="top-bar-desktop-text" style={{ alignItems: 'center', gap: '0.4rem', color: '#CBD5E1', whiteSpace: 'nowrap' }}>
              <MapPin size={13} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
              <span>Calgary (NW, SW, SE, NE) • Airdrie • Cochrane • Okotoks • Chestermere</span>
            </div>

            <div className="top-bar-mobile-text" style={{ alignItems: 'center', gap: '0.35rem', color: '#CBD5E1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <MapPin size={12} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>Calgary & Area</span>
            </div>

            <div className="top-bar-desktop-text" style={{ alignItems: 'center', gap: '0.35rem', color: '#10B981', whiteSpace: 'nowrap' }}>
              <ShieldCheck size={13} style={{ flexShrink: 0 }} />
              <span>Alberta Code Compliant</span>
            </div>
          </div>

          {/* Right: Direct Phone */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#F8FAFC', whiteSpace: 'nowrap' }}>
              <span className="live-dot" style={{ width: '6px', height: '6px' }} />
              <span className="top-bar-desktop-text" style={{ fontWeight: 600 }}>Estimators Available:</span>
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                style={{ color: 'var(--accent-primary)', fontWeight: 700 }}
              >
                {COMPANY_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN STICKY NAVBAR */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: isScrolled ? 'rgba(10, 14, 23, 0.98)' : 'rgba(10, 14, 23, 0.95)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid rgba(255, 90, 31, 0.25)' : '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.6)' : 'none',
          transition: 'all var(--transition-normal)',
          padding: isScrolled ? '0.6rem 0' : '0.75rem 0',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
          }}
        >
          {/* Logo Brand Emblem */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'var(--accent-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 4px 12px rgba(255, 90, 31, 0.35)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                flexShrink: 0,
              }}
            >
              <HardHat size={20} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(1rem, 1.8vw, 1.22rem)',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  whiteSpace: 'nowrap',
                }}
              >
                {COMPANY_CONFIG.name}
              </div>
              <div
                className="header-subtitle"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--accent-wood)',
                  whiteSpace: 'nowrap',
                }}
              >
                Residential Framing • Calgary
              </div>
            </div>
          </Link>

          {/* Desktop Navigation (>= 1180px) */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'clamp(0.6rem, 1.2vw, 1.15rem)',
              whiteSpace: 'nowrap',
            }}
            className="desktop-nav"
          >
            <Link
              href="/"
              style={{
                color: pathname === '/' ? 'var(--accent-primary)' : '#CBD5E1',
                fontWeight: 600,
                fontSize: '0.9rem',
                padding: '0.4rem 0.5rem',
                borderRadius: 'var(--radius-sm)',
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
                fontSize: '0.9rem',
                padding: '0.4rem 0.5rem',
                borderRadius: 'var(--radius-sm)',
                transition: 'color var(--transition-fast)',
              }}
            >
              About
            </Link>

            {/* SERVICES MEGA DROPDOWN */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                type="button"
                onClick={() => setServicesDropdown(!servicesDropdown)}
                style={{
                  color: pathname.startsWith('/services') || servicesDropdown ? 'var(--accent-primary)' : '#CBD5E1',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.4rem 0.65rem',
                  borderRadius: 'var(--radius-sm)',
                  background: servicesDropdown ? 'rgba(255, 90, 31, 0.12)' : 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <span>Services</span>
                <ChevronDown size={14} style={{ transform: servicesDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
              </button>

              {servicesDropdown && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 4px)',
                    left: '-80px',
                    width: '580px',
                    zIndex: 1100,
                    animation: 'modalSlideUp 180ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#0B101B',
                      borderRadius: '14px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderTop: '2.5px solid var(--accent-primary)',
                      boxShadow: '0 25px 50px -10px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                      padding: '1.15rem',
                    }}
                  >
                    {/* Megamenu Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem', paddingBottom: '0.65rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span className="badge badge-orange" style={{ fontSize: '0.72rem', padding: '0.2rem 0.55rem' }}>
                          Framing Solutions
                        </span>
                        <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Alberta Code Compliant</span>
                      </div>

                      <Link
                        href="/services"
                        onClick={() => setServicesDropdown(false)}
                        style={{
                          fontSize: '0.8rem',
                          color: 'var(--accent-primary)',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                        }}
                      >
                        <span>View All Services</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>

                    {/* 2-Column Grid */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '0.5rem',
                        marginBottom: '0.85rem',
                      }}
                    >
                      {SERVICES_DATA.map((service) => {
                        const IconComp = serviceIcons[service.slug] || Home;
                        return (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setServicesDropdown(false)}
                            style={{
                              padding: '0.65rem 0.75rem',
                              borderRadius: '8px',
                              backgroundColor: 'rgba(255, 255, 255, 0.02)',
                              border: '1px solid rgba(255, 255, 255, 0.05)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.65rem',
                              transition: 'all var(--transition-fast)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(255, 90, 31, 0.12)';
                              e.currentTarget.style.borderColor = 'rgba(255, 90, 31, 0.35)';
                              e.currentTarget.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                              e.currentTarget.style.transform = 'translateY(0)';
                            }}
                          >
                            <div
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '6px',
                                background: 'linear-gradient(135deg, rgba(255, 90, 31, 0.25) 0%, rgba(255, 90, 31, 0.08) 100%)',
                                color: 'var(--accent-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                border: '1px solid rgba(255, 90, 31, 0.25)',
                              }}
                            >
                              <IconComp size={16} />
                            </div>
                            <div style={{ minWidth: 0, overflow: 'hidden' }}>
                              <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#FFFFFF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {service.title}
                              </div>
                              <div style={{ fontSize: '0.72rem', color: '#94A3B8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {service.slug === 'new-home-framing' && 'Single family, infills & duplexes'}
                                {service.slug === 'custom-home-framing' && 'Architectural plans & tall walls'}
                                {service.slug === 'basement-framing' && 'Legal suites & egress windows'}
                                {service.slug === 'garage-framing' && 'Detached & attached workshops'}
                                {service.slug === 'home-additions' && 'Second-storey & rear bump-outs'}
                                {service.slug === 'renovation-framing' && 'Load-bearing wall removal & LVLs'}
                                {service.slug === 'structural-framing' && 'Engineered posts, beams & trusses'}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Megamenu Footer Bar */}
                    <div
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '8px',
                        padding: '0.65rem 0.85rem',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>
                        Need an itemized blueprint takeoff?
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setServicesDropdown(false);
                          handleOpenQuote();
                        }}
                        className="btn btn-primary btn-sm"
                        style={{
                          padding: '0.35rem 0.75rem',
                          fontSize: '0.78rem',
                          gap: '0.35rem',
                          minHeight: '32px',
                        }}
                      >
                        <Sparkles size={12} />
                        <span>Get Free Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/projects"
              style={{
                color: pathname.startsWith('/projects') ? 'var(--accent-primary)' : '#CBD5E1',
                fontWeight: 600,
                fontSize: '0.9rem',
                padding: '0.4rem 0.5rem',
                borderRadius: 'var(--radius-sm)',
                transition: 'color var(--transition-fast)',
              }}
            >
              Projects
            </Link>

            {/* SERVICE AREAS DROPDOWN */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={handleAreasEnter}
              onMouseLeave={handleAreasLeave}
            >
              <button
                type="button"
                onClick={() => setAreasDropdown(!areasDropdown)}
                style={{
                  color: pathname.startsWith('/areas') || areasDropdown ? 'var(--accent-primary)' : '#CBD5E1',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.4rem 0.65rem',
                  borderRadius: 'var(--radius-sm)',
                  background: areasDropdown ? 'rgba(255, 90, 31, 0.12)' : 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <span>Service Areas</span>
                <ChevronDown size={14} style={{ transform: areasDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
              </button>

              {areasDropdown && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 4px)',
                    left: 0,
                    width: '290px',
                    zIndex: 1100,
                    animation: 'modalSlideUp 180ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#0B101B',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderTop: '2.5px solid var(--accent-wood)',
                      boxShadow: '0 25px 50px -10px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                      padding: '0.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.25rem',
                    }}
                  >
                    <div style={{ padding: '0.35rem 0.5rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-wood)' }}>
                      Calgary & Neighboring Area
                    </div>
                    {SERVICE_AREAS_DATA.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/areas/${area.slug}`}
                        onClick={() => setAreasDropdown(false)}
                        style={{
                          padding: '0.55rem 0.75rem',
                          borderRadius: '6px',
                          color: '#E2E8F0',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'all var(--transition-fast)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 90, 31, 0.12)';
                          e.currentTarget.style.color = 'var(--accent-primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#E2E8F0';
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                          <MapPin size={14} color="var(--accent-primary)" />
                          <span>{area.name} Framing</span>
                        </div>
                        <ArrowRight size={13} color="rgba(255, 255, 255, 0.4)" />
                      </Link>
                    ))}

                    <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.5rem', marginTop: '0.25rem' }}>
                      <Link
                        href="/contact"
                        onClick={() => setAreasDropdown(false)}
                        style={{
                          fontSize: '0.78rem',
                          color: '#FFA472',
                          fontWeight: 600,
                          padding: '0.35rem 0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>Foothills & Custom Sites</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
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
                padding: '0.4rem 0.5rem',
                borderRadius: 'var(--radius-sm)',
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
                padding: '0.4rem 0.5rem',
                borderRadius: 'var(--radius-sm)',
                transition: 'color var(--transition-fast)',
              }}
            >
              Contact
            </Link>
          </nav>

          {/* ACTION BUTTONS (Cleanly sized for Mobile / Tablet / Desktop) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexShrink: 0 }}>
            {/* Desktop Direct Call CTA (>= 1180px) */}
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#FFFFFF',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.88rem',
                padding: '0.5rem 0.85rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                whiteSpace: 'nowrap',
              }}
              className="desktop-phone-btn"
            >
              <Phone size={14} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
              <span>{COMPANY_CONFIG.phone}</span>
            </a>

            {/* Mobile Call Icon Button (< 640px) */}
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 90, 31, 0.12)',
                border: '1px solid rgba(255, 90, 31, 0.35)',
                borderRadius: '8px',
                color: 'var(--accent-primary)',
                width: '38px',
                height: '38px',
                flexShrink: 0,
              }}
              className="mobile-phone-btn"
              aria-label={`Call ${COMPANY_CONFIG.phone}`}
            >
              <Phone size={17} />
            </a>

            {/* Quick Quote Button (Shows icon + text on desktop/tablet, compact on mobile) */}
            <button
              onClick={handleOpenQuote}
              className="btn btn-primary btn-sm header-quote-btn"
              style={{
                padding: '0.5rem 0.85rem',
                gap: '0.35rem',
                fontSize: '0.825rem',
                borderRadius: '8px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
              aria-label="Request a Free Framing Quote"
            >
              <FileText size={14} style={{ flexShrink: 0 }} />
              <span className="quote-btn-text">Get Free Quote</span>
              <span className="quote-btn-short-text">Quote</span>
            </button>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '8px',
                color: '#FFFFFF',
                width: '38px',
                height: '38px',
                cursor: 'pointer',
                flexShrink: 0,
              }}
              className="mobile-hamburger"
              aria-label="Open Navigation Menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      <MobileNavDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenQuoteModal={handleOpenQuote}
      />

      {/* QUICK QUOTE MODAL */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
}
