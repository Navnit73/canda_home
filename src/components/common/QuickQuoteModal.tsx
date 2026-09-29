'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, HardHat, Phone, UploadCloud, File, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG, SERVICES_DATA } from '@/config/companyConfig';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickQuoteModal({ isOpen, onClose }: QuickQuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'New Home Framing',
    location: '',
    timeline: 'Within 1-2 Months',
    message: '',
  });

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
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

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileNames = Array.from(e.target.files).map((f) => f.name);
      setUploadedFiles((prev) => [...prev, ...fileNames]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Request Quick Framing Quote">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'var(--bg-subtle)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            transition: 'all var(--transition-fast)',
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 0.5rem' }}>
            <div
              style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                backgroundColor: 'var(--success-bg)',
                color: 'var(--success)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                boxShadow: '0 0 0 8px rgba(16, 185, 129, 0.12)',
              }}
            >
              <CheckCircle2 size={38} />
            </div>

            <span className="badge badge-orange" style={{ marginBottom: '0.85rem' }}>
              Quote Request Sent
            </span>

            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
              Thank you, {formData.name.split(' ')[0] || 'there'}!
            </h3>

            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 1.75rem auto' }}>
              Our senior framing estimator is reviewing your <strong>{formData.projectType}</strong> project in <strong>{formData.location || 'Calgary'}</strong>. We will get back to you with a detailed scope takeoff within 24 hours.
            </p>

            <div
              style={{
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                marginBottom: '2rem',
                textAlign: 'left',
                fontSize: '0.875rem',
              }}
            >
              <div style={{ fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.4rem' }}>
                Quick Reference:
              </div>
              <div style={{ color: 'var(--text-dark-secondary)' }}>• <strong>Project:</strong> {formData.projectType}</div>
              <div style={{ color: 'var(--text-dark-secondary)' }}>• <strong>Contact Phone:</strong> {formData.phone}</div>
              {uploadedFiles.length > 0 && (
                <div style={{ color: 'var(--text-dark-secondary)' }}>• <strong>Attached Plans:</strong> {uploadedFiles.length} file(s)</div>
              )}
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn btn-primary btn-block"
            >
              Close Window
            </button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'var(--accent-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 12px rgba(255, 90, 31, 0.35)',
                }}
              >
                <HardHat size={20} />
              </div>
              <div>
                <span className="badge badge-orange" style={{ marginBottom: '0.15rem' }}>
                  24-Hour Estimate Turnaround
                </span>
                <h3 style={{ fontSize: '1.45rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark)' }}>
                  Request a Free Framing Quote
                </h3>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Enter your project details below. You can also attach blueprints or drawings for an accurate, itemized framing takeoff.
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
                    placeholder="e.g. john@builder.ca"
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
                    {SERVICES_DATA.map((s) => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Multi-Family Framing">Multi-Family Framing</option>
                    <option value="Other Custom Project">Other Custom Project</option>
                  </select>
                </div>
              </div>

              <div className="grid-2 grid-form-mobile" style={{ gap: '1rem', marginBottom: '0' }}>
                <div className="form-group">
                  <label className="form-label">Project Community / City *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g. Altadore, Cochrane, Airdrie..."
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Target Start Date</label>
                  <select
                    className="form-control form-select"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  >
                    <option value="Ready Immediately">Ready Immediately</option>
                    <option value="Within 1-2 Months">Within 1-2 Months</option>
                    <option value="3-6 Months">3-6 Months</option>
                    <option value="Planning / Budgeting Stage">Planning / Budgeting Stage</option>
                  </select>
                </div>
              </div>

              {/* Upload Blueprints */}
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Attach Blueprints or Drawings (Optional)</label>
                <div className="upload-zone" style={{ position: 'relative', padding: '1rem 0.75rem' }}>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.dwg,.dxf,.jpg,.png,.zip"
                    onChange={handleFileUpload}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      opacity: 0,
                      cursor: 'pointer',
                    }}
                  />
                  <UploadCloud size={24} color="var(--accent-primary)" style={{ margin: '0 auto 0.25rem auto' }} />
                  <div style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                    Click or drag & drop plans (PDF, DWG, PNG)
                  </div>
                </div>

                {uploadedFiles.length > 0 && (
                  <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {uploadedFiles.map((file, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          backgroundColor: 'var(--bg-subtle)',
                          padding: '0.35rem 0.65rem',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.78rem',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', overflow: 'hidden' }}>
                          <File size={13} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{file}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(idx)}
                          style={{ background: 'none', border: 'none', color: 'var(--error)', cursor: 'pointer' }}
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                <label className="form-label">Project Scope Notes</label>
                <textarea
                  className="form-control"
                  placeholder="Square footage, ceiling heights, custom beam needs, or questions..."
                  style={{ minHeight: '75px' }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                  style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}
                >
                  <Phone size={14} color="var(--accent-primary)" />
                  <span>Call {COMPANY_CONFIG.phone}</span>
                </a>

                <button type="submit" className="btn btn-primary" style={{ minWidth: '190px' }}>
                  <Send size={16} />
                  <span>Submit Takeoff Request</span>
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginTop: '1rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                <ShieldCheck size={14} color="var(--success)" />
                <span>100% Free & Confidential • No Obligation</span>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
