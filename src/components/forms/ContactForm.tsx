'use client';

import React, { useState } from 'react';
import { Send, UploadCloud, CheckCircle2, File, X, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA } from '@/config/companyConfig';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'New Home Framing',
    location: '',
    message: '',
    preferredContact: 'phone',
  });

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

  if (submitted) {
    return (
      <div
        className="card"
        style={{
          padding: '3.5rem 2rem',
          textAlign: 'center',
          backgroundColor: '#FFFFFF',
          boxShadow: 'var(--shadow-xl)',
        }}
      >
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
            boxShadow: '0 0 0 8px rgba(16, 185, 129, 0.15)',
          }}
        >
          <CheckCircle2 size={40} />
        </div>
        <span className="badge badge-orange" style={{ marginBottom: '0.75rem' }}>
          Message Sent Successfully
        </span>
        <h3 style={{ fontSize: '1.7rem', marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
          Thank you, {formData.name.split(' ')[0] || 'there'}!
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2rem auto', lineHeight: 1.65 }}>
          Our framing management team will review your message regarding your <strong>{formData.projectType}</strong> and get in touch with you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn btn-primary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div
      className="card"
      style={{
        padding: 'clamp(1.5rem, 4vw, 2.75rem)',
        backgroundColor: '#FFFFFF',
        boxShadow: 'var(--shadow-xl)',
        borderRadius: 'var(--radius-lg)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.55rem', color: 'var(--text-dark)', fontFamily: 'var(--font-heading)' }}>
          Send Us a Project Message
        </h3>
        <span className="badge badge-orange">
          24h Response
        </span>
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', marginBottom: '1.75rem' }}>
        Fill out the details below and our estimating crew will get in touch promptly.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Full Name *</label>
          <input
            type="text"
            required
            className="form-control"
            placeholder="e.g. David Miller"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="grid-2 grid-form-mobile" style={{ gap: '1rem', marginBottom: '0' }}>
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
          <div className="form-group">
            <label className="form-label">Email Address *</label>
            <input
              type="email"
              required
              className="form-control"
              placeholder="e.g. david@example.ca"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="grid-2 grid-form-mobile" style={{ gap: '1rem', marginBottom: '0' }}>
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
              <option value="General Inquiry">General Framing Inquiry</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Project Location / Area *</label>
            <input
              type="text"
              required
              className="form-control"
              placeholder="e.g. Altadore, Cochrane, Airdrie"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Message / Framing Scope Notes</label>
          <textarea
            className="form-control"
            placeholder="Please share details regarding your timeline, square footage, architectural plan status, or questions..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            style={{ minHeight: '110px' }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
          <label className="form-label">Attach Blueprints or Drawings (Optional)</label>
          <div className="upload-zone" style={{ position: 'relative', padding: '1.5rem 1rem' }}>
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
            <UploadCloud size={30} color="var(--accent-primary)" style={{ margin: '0 auto 0.4rem auto' }} />
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-dark)' }}>
              Upload Blueprints or Site Sketches
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Supports PDF, DWG, PNG, or JPG formats
            </div>
          </div>

          {uploadedFiles.length > 0 && (
            <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {uploadedFiles.map((file, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'var(--bg-subtle)',
                    padding: '0.5rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.825rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <File size={15} color="var(--accent-primary)" />
                    <span>{file}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(idx)}
                    style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer' }}
                  >
                    <X size={15} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="form-group" style={{ marginBottom: '1.75rem' }}>
          <label className="form-label">Preferred Contact Method</label>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.35rem', flexWrap: 'wrap' }}>
            {[
              { id: 'phone', label: 'Phone Call' },
              { id: 'email', label: 'Email' },
              { id: 'text', label: 'Text Message' },
            ].map((m) => (
              <label key={m.id} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', cursor: 'pointer', fontSize: '0.875rem' }}>
                <input
                  type="radio"
                  name="contactMethod"
                  checked={formData.preferredContact === m.id}
                  onChange={() => setFormData({ ...formData, preferredContact: m.id })}
                />
                <span>{m.label}</span>
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-lg btn-block">
          <Send size={18} />
          <span>Submit Project Inquiry</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem', marginTop: '1.15rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <ShieldCheck size={16} color="var(--success)" />
          <span>100% Confidential & Secure • No Spam Guarantee</span>
        </div>
      </form>
    </div>
  );
}
