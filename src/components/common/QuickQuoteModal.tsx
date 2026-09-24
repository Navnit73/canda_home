'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, HardHat, Phone } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/companyConfig';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickQuoteModal({ isOpen, onClose }: QuickQuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'New Home Framing',
    location: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: '#F1F5F9',
            border: 'none',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#64748B',
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
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
                margin: '0 auto 1.5rem auto',
              }}
            >
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
              Thanks! Your project request has been received.
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              Our Calgary framing estimator will review your project requirements and contact you shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn btn-secondary"
            >
              Close Window
            </button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
              >
                <HardHat size={18} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-heading)' }}>
                Request a Framing Quote
              </h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Fill in your build details below and our team will get in touch to discuss your framing scope.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid-2 grid-form-mobile" style={{ gap: '1rem', marginBottom: '0' }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g. John Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="form-control"
                    placeholder="e.g. (403) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid-2 grid-form-mobile" style={{ gap: '1rem', marginBottom: '0' }}>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="e.g. john@example.ca"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Project Type *</label>
                  <select
                    className="form-control form-select"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  >
                    <option value="New Home Framing">New Home Framing</option>
                    <option value="Custom Home Framing">Custom Home Framing</option>
                    <option value="Basement Framing">Basement Framing</option>
                    <option value="Garage Framing">Garage Framing</option>
                    <option value="Home Addition">Home Addition</option>
                    <option value="Renovation / Beam Install">Renovation / Beam Install</option>
                    <option value="Structural Framing">Structural Framing</option>
                    <option value="Other">Other Project</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Project Location / Calgary Community *</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="e.g. Altadore, Cochrane, Airdrie, etc."
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Project Scope & Notes</label>
                <textarea
                  className="form-control"
                  placeholder="Tell us about the home size, target start date, or any specific framing questions..."
                  style={{ minHeight: '85px' }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginTop: '1.5rem' }}>
                <a
                  href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                  style={{ fontSize: '0.875rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <Phone size={14} color="var(--accent-primary)" />
                  <span>Or call {COMPANY_CONFIG.phone}</span>
                </a>

                <button type="submit" className="btn btn-primary">
                  <Send size={16} />
                  <span>Submit Quote Request</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
