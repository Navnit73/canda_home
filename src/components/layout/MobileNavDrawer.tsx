'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  X,
  Phone,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  HardHat,
  ShieldCheck,
  Home,
  Compass,
  Layers,
  Building,
  PlusSquare,
  Hammer,
  Wrench,
  MapPin,
  FileText,
  Star,
} from 'lucide-react';
import { COMPANY_CONFIG, SERVICES_DATA, SERVICE_AREAS_DATA } from '@/config/companyConfig';

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: () => void;
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

export default function MobileNavDrawer({
  isOpen,
  onClose,
  onOpenQuoteModal,
}: MobileNavDrawerProps) {
  const [servicesExpanded, setServicesExpanded] = useState(true);
  const [areasExpanded, setAreasExpanded] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(7, 10, 16, 0.85)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'modalFadeIn 200ms ease-out',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '88%',
          maxWidth: '380px',
          height: '100%',
          backgroundColor: '#0D1117',
          color: '#FFFFFF',
          padding: '1.75rem 1.25rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflowY: 'auto',
          boxShadow: '-8px 0 35px rgba(0,0,0,0.6)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
            <Link href="/" onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
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
                  boxShadow: '0 4px 12px rgba(255, 90, 31, 0.4)',
                }}
              >
                <HardHat size={22} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em', color: '#FFF' }}>
                  {COMPANY_CONFIG.name}
                </div>
                <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--accent-wood)', letterSpacing: '0.06em', fontWeight: 700 }}>
                  Residential Framing • Calgary
                </div>
              </div>
            </Link>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                color: '#94A3B8',
                cursor: 'pointer',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Trust Banner Inside Mobile Drawer */}
          <div
            style={{
              backgroundColor: 'rgba(255, 90, 31, 0.1)',
              border: '1px solid rgba(255, 90, 31, 0.25)',
              borderRadius: '8px',
              padding: '0.75rem 0.9rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem',
              fontSize: '0.8rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#FFA472', fontWeight: 600 }}>
              <ShieldCheck size={16} color="var(--accent-primary)" />
              <span>Alberta Code Compliant</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: '#F59E0B', fontWeight: 700 }}>
              <Star size={13} fill="#F59E0B" />
              <span>5.0</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <Link
              href="/"
              onClick={onClose}
              style={{
                padding: '0.75rem 0.65rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: pathname === '/' ? 'var(--accent-primary)' : '#F1F5F9',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <span>Home</span>
              <ChevronRight size={16} color="#64748B" />
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              style={{
                padding: '0.75rem 0.65rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: pathname === '/about' ? 'var(--accent-primary)' : '#F1F5F9',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <span>About Us</span>
              <ChevronRight size={16} color="#64748B" />
            </Link>

            {/* Services Accordion */}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <button
                type="button"
                onClick={() => setServicesExpanded(!servicesExpanded)}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.65rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: pathname.startsWith('/services') ? 'var(--accent-primary)' : '#F1F5F9',
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span>Framing Services</span>
                <ChevronDown size={16} style={{ transform: servicesExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 200ms', color: '#64748B' }} />
              </button>

              {servicesExpanded && (
                <div style={{ padding: '0.35rem 0.5rem 0.85rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {SERVICES_DATA.map((service) => {
                    const IconComp = serviceIcons[service.slug] || Home;
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={onClose}
                        style={{
                          fontSize: '0.85rem',
                          color: '#CBD5E1',
                          padding: '0.4rem 0.5rem',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        }}
                      >
                        <IconComp size={15} color="var(--accent-primary)" />
                        <span>{service.title}</span>
                      </Link>
                    );
                  })}
                  <Link
                    href="/services"
                    onClick={onClose}
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--accent-wood)',
                      fontWeight: 700,
                      padding: '0.4rem 0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>View All Services</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/projects"
              onClick={onClose}
              style={{
                padding: '0.75rem 0.65rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: pathname.startsWith('/projects') ? 'var(--accent-primary)' : '#F1F5F9',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <span>Recent Projects</span>
              <ChevronRight size={16} color="#64748B" />
            </Link>

            {/* Service Areas Accordion */}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <button
                type="button"
                onClick={() => setAreasExpanded(!areasExpanded)}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.65rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: pathname.startsWith('/areas') ? 'var(--accent-primary)' : '#F1F5F9',
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span>Service Areas</span>
                <ChevronDown size={16} style={{ transform: areasExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 200ms', color: '#64748B' }} />
              </button>

              {areasExpanded && (
                <div style={{ padding: '0.35rem 0.5rem 0.85rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {SERVICE_AREAS_DATA.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/areas/${area.slug}`}
                      onClick={onClose}
                      style={{
                        fontSize: '0.85rem',
                        color: '#CBD5E1',
                        padding: '0.4rem 0.5rem',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      }}
                    >
                      <MapPin size={15} color="var(--accent-primary)" />
                      <span>{area.name} Framing</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/faq"
              onClick={onClose}
              style={{
                padding: '0.75rem 0.65rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: pathname === '/faq' ? 'var(--accent-primary)' : '#F1F5F9',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <span>Framing FAQ</span>
              <ChevronRight size={16} color="#64748B" />
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              style={{
                padding: '0.75rem 0.65rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: pathname === '/contact' ? 'var(--accent-primary)' : '#F1F5F9',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>Contact Us</span>
              <ChevronRight size={16} color="#64748B" />
            </Link>
          </nav>
        </div>

        {/* Action Footer Inside Drawer */}
        <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="btn btn-outline-white btn-block"
              style={{ padding: '0.8rem' }}
            >
              <Phone size={17} color="var(--accent-primary)" />
              <span>Call {COMPANY_CONFIG.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenQuoteModal();
              }}
              className="btn btn-primary btn-block"
              style={{ padding: '0.85rem' }}
            >
              <FileText size={17} />
              <span>Request Free Quote</span>
            </button>
          </div>

          <div style={{ fontSize: '0.75rem', color: '#64748B', textAlign: 'center', lineHeight: 1.4 }}>
            Serving Greater Calgary • Mon–Fri 7am–5:30pm
          </div>
        </div>
      </div>
    </div>
  );
}
