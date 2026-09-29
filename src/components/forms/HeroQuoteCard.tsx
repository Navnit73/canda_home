'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, FileText } from 'lucide-react';
import { COMPANY_CONFIG, SERVICES_DATA } from '@/config/companyConfig';

export default function HeroQuoteCard() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'New Home Framing',
    projectLocation: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="hero-quote-card" style={{ textAlign: 'center', padding: '2.5rem 1.75rem' }}>
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'var(--success-bg)',
            color: 'var(--success)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem auto',
            boxShadow: '0 0 0 6px rgba(16, 185, 129, 0.15)',
          }}
        >
          <CheckCircle2 size={34} />
        </div>
        <span className="badge badge-orange" style={{ marginBottom: '0.5rem' }}>
          Request Received
        </span>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
          Thank you, {formData.name.split(' ')[0] || 'there'}!
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          We will review your <strong>{formData.projectType}</strong> project in <strong>{formData.projectLocation || 'Calgary'}</strong> and contact you within 24 hours with an itemized takeoff.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn btn-outline btn-sm"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="hero-quote-card">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
            <span className="badge badge-orange">
              Fast 24-Hr Takeoffs
            </span>
            <span className="badge badge-live">
              <span className="live-dot" style={{ width: '6px', height: '6px' }} />
              <span>Available</span>
            </span>
          </div>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', fontFamily: 'var(--font-heading)' }}>
            Request a Framing Quote
          </h3>
        </div>
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            backgroundColor: 'var(--accent-primary-subtle)',
            color: 'var(--accent-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <FileText size={22} />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: '0.85rem' }}>
          <label className="form-label" style={{ fontSize: '0.8125rem' }}>Full Name *</label>
          <input
            type="text"
            required
            className="form-control"
            style={{ padding: '0.7rem 0.9rem', fontSize: '0.9rem' }}
            placeholder="First and Last Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="grid-2 grid-form-mobile" style={{ gap: '0.75rem', marginBottom: '0.85rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" style={{ fontSize: '0.8125rem' }}>Phone Number *</label>
            <input
              type="tel"
              required
              className="form-control"
              style={{ padding: '0.7rem 0.9rem', fontSize: '0.9rem' }}
              placeholder="(403) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" style={{ fontSize: '0.8125rem' }}>Email Address *</label>
            <input
              type="email"
              required
              className="form-control"
              style={{ padding: '0.7rem 0.9rem', fontSize: '0.9rem' }}
              placeholder="name@email.ca"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="grid-2 grid-form-mobile" style={{ gap: '0.75rem', marginBottom: '0.85rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" style={{ fontSize: '0.8125rem' }}>Project Type *</label>
            <select
              className="form-control form-select"
              style={{ padding: '0.7rem 0.9rem', fontSize: '0.9rem' }}
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            >
              {SERVICES_DATA.map((s) => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
              <option value="Multi-Family Framing">Multi-Family Framing</option>
              <option value="Other Project">Other Custom Project</option>
            </select>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" style={{ fontSize: '0.8125rem' }}>Project Location *</label>
            <input
              type="text"
              required
              className="form-control"
              style={{ padding: '0.7rem 0.9rem', fontSize: '0.9rem' }}
              placeholder="e.g. Altadore, Cochrane, Airdrie"
              value={formData.projectLocation}
              onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
            />
          </div>
        </div>

        <div className="form-group" style={{ marginBottom: '1.15rem' }}>
          <label className="form-label" style={{ fontSize: '0.8125rem' }}>Project Scope Notes (Optional)</label>
          <input
            type="text"
            className="form-control"
            style={{ padding: '0.7rem 0.9rem', fontSize: '0.9rem' }}
            placeholder="Target start date, square footage, plans status..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block" style={{ padding: '0.9rem' }}>
          <Send size={16} />
          <span>Request My Free Quote</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginTop: '0.95rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <span>Prefer direct dispatch?</span>
          <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>
            Call {COMPANY_CONFIG.phone}
          </a>
        </div>
      </form>
    </div>
  );
}
