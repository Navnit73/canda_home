'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, FileText, Phone } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/companyConfig';

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
      <div className="hero-quote-card" style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}>
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'var(--success-bg)',
            color: 'var(--success)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem auto',
          }}
        >
          <CheckCircle2 size={32} />
        </div>
        <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
          Thanks! Your project request has been received.
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          We will contact you shortly to review your blueprints and framing requirements.
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
          <span className="badge badge-orange" style={{ marginBottom: '0.4rem' }}>
            Fast Estimates
          </span>
          <h3 style={{ fontSize: '1.35rem', color: 'var(--text-dark)' }}>
            Request a Framing Quote
          </h3>
        </div>
        <FileText size={28} color="var(--accent-primary)" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: '0.85rem' }}>
          <label className="form-label" style={{ fontSize: '0.8125rem' }}>Your Name *</label>
          <input
            type="text"
            required
            className="form-control"
            style={{ padding: '0.65rem 0.85rem', fontSize: '0.9rem' }}
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
              style={{ padding: '0.65rem 0.85rem', fontSize: '0.9rem' }}
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
              style={{ padding: '0.65rem 0.85rem', fontSize: '0.9rem' }}
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
              style={{ padding: '0.65rem 0.85rem', fontSize: '0.9rem' }}
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            >
              <option value="New Home Framing">New Home Framing</option>
              <option value="Custom Home Framing">Custom Home Framing</option>
              <option value="Basement Framing">Basement Framing</option>
              <option value="Garage Framing">Garage Framing</option>
              <option value="Home Addition">Home Addition</option>
              <option value="Renovation Framing">Renovation Framing</option>
              <option value="Structural Framing">Structural Framing</option>
            </select>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" style={{ fontSize: '0.8125rem' }}>Project Location *</label>
            <input
              type="text"
              required
              className="form-control"
              style={{ padding: '0.65rem 0.85rem', fontSize: '0.9rem' }}
              placeholder="e.g. Calgary NW, Airdrie"
              value={formData.projectLocation}
              onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
            />
          </div>
        </div>

        <div className="form-group" style={{ marginBottom: '1rem' }}>
          <label className="form-label" style={{ fontSize: '0.8125rem' }}>Project Notes (Optional)</label>
          <input
            type="text"
            className="form-control"
            style={{ padding: '0.65rem 0.85rem', fontSize: '0.9rem' }}
            placeholder="Target start date, square footage, plans status..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block" style={{ padding: '0.85rem' }}>
          <Send size={16} />
          <span>Request My Quote</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginTop: '0.85rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          <span>Prefer to talk?</span>
          <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
            Call {COMPANY_CONFIG.phone}
          </a>
        </div>
      </form>
    </div>
  );
}
