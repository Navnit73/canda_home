'use client';

import React from 'react';
import Link from 'next/link';
import { X, Phone, Mail, ArrowRight, ChevronRight, HardHat } from 'lucide-react';
import { COMPANY_CONFIG, SERVICES_DATA, SERVICE_AREAS_DATA } from '@/config/companyConfig';

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}

export default function MobileNavDrawer({
  isOpen,
  onClose,
  onOpenQuoteModal,
}: MobileNavDrawerProps) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(13, 17, 23, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '85%',
          maxWidth: '380px',
          height: '100%',
          backgroundColor: '#0D1117',
          color: '#FFFFFF',
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflowY: 'auto',
          boxShadow: '-4px 0 25px rgba(0,0,0,0.5)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <Link href="/" onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
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
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em', color: '#FFF' }}>
                  {COMPANY_CONFIG.name}
                </div>
                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--accent-wood)', letterSpacing: '0.05em' }}>
                  Calgary Framing
                </div>
              </div>
            </Link>
            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#94A3B8',
                cursor: 'pointer',
                padding: '0.5rem',
              }}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '2rem' }}>
            <Link
              href="/"
              onClick={onClose}
              style={{
                padding: '0.75rem 0',
                fontSize: '1.05rem',
                fontWeight: 600,
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>Home</span>
              <ChevronRight size={16} color="#64748B" />
            </Link>
            <Link
              href="/about"
              onClick={onClose}
              style={{
                padding: '0.75rem 0',
                fontSize: '1.05rem',
                fontWeight: 600,
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>About</span>
              <ChevronRight size={16} color="#64748B" />
            </Link>
            <Link
              href="/services"
              onClick={onClose}
              style={{
                padding: '0.75rem 0',
                fontSize: '1.05rem',
                fontWeight: 600,
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>Framing Services</span>
              <ChevronRight size={16} color="#64748B" />
            </Link>
            <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '0.5rem' }}>
              {SERVICES_DATA.slice(0, 5).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={onClose}
                  style={{ fontSize: '0.875rem', color: '#94A3B8', padding: '0.3rem 0' }}
                >
                  • {s.title}
                </Link>
              ))}
            </div>

            <Link
              href="/projects"
              onClick={onClose}
              style={{
                padding: '0.75rem 0',
                fontSize: '1.05rem',
                fontWeight: 600,
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>Recent Projects</span>
              <ChevronRight size={16} color="#64748B" />
            </Link>

            <Link
              href="/areas"
              onClick={onClose}
              style={{
                padding: '0.75rem 0',
                fontSize: '1.05rem',
                fontWeight: 600,
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>Service Areas</span>
              <ChevronRight size={16} color="#64748B" />
            </Link>

            <Link
              href="/faq"
              onClick={onClose}
              style={{
                padding: '0.75rem 0',
                fontSize: '1.05rem',
                fontWeight: 600,
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>FAQ</span>
              <ChevronRight size={16} color="#64748B" />
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              style={{
                padding: '0.75rem 0',
                fontSize: '1.05rem',
                fontWeight: 600,
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>Contact</span>
              <ChevronRight size={16} color="#64748B" />
            </Link>
          </nav>
        </div>

        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="btn btn-outline-white btn-block"
              style={{ padding: '0.75rem' }}
            >
              <Phone size={16} />
              <span>Call {COMPANY_CONFIG.phone}</span>
            </a>
            <Link
              href="/quote"
              onClick={onClose}
              className="btn btn-primary btn-block"
              style={{ padding: '0.75rem' }}
            >
              <span>Request Free Quote</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ fontSize: '0.8rem', color: '#64748B', textAlign: 'center' }}>
            Calgary & Surrounding Area • Residential Framing
          </div>
        </div>
      </div>
    </div>
  );
}
