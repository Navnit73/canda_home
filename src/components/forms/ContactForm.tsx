'use client';

import React, { useState } from 'react';
import { Send, UploadCloud, CheckCircle2, File, X, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/companyConfig';

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
    if (e.target.files && e.target.files[0]) {
      const fileNames = Array.from(e.target.files).map((f) => f.name);
      setUploadedFiles([...uploadedFiles, ...fileNames]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
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
          padding: '3rem 2rem',
          textAlign: 'center',
          backgroundColor: '#FFFFFF',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'var(--success-bg)',
            color: 'var(--success)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem auto',
          }}
        >
          <CheckCircle2 size={38} />
        </div>
        <h3 style={{ fontSize: '1.6rem', marginBottom: '0.6rem', color: 'var(--text-dark)' }}>
          Thanks! Your project request has been received.
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '460px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
          We will review your inquiry and contact you shortly to discuss your framing requirements.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn btn-outline btn-sm"
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
        padding: 'clamp(1.25rem, 3.5vw, 2.5rem)',
        backgroundColor: '#FFFFFF',
        boxShadow: 'var(--shadow-lg)',
      }}
    >
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
        Send Us a Message
      </h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
        Fill out the form below and we will get back to you promptly.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Full Name *</label>
          <input
            type="text"
            required
            className="form-control"
            placeholder="First and Last Name"
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
              placeholder="(403) 000-0000"
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
              placeholder="name@example.ca"
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
              <option value="New Home Framing">New Home Framing</option>
              <option value="Custom Home Framing">Custom Home Framing</option>
              <option value="Basement Framing">Basement Framing</option>
              <option value="Garage Framing">Garage Framing</option>
              <option value="Home Addition">Home Addition</option>
              <option value="Renovation Framing">Renovation Framing</option>
              <option value="Structural Framing">Structural Framing</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Project Location / City *</label>
            <input
              type="text"
              required
              className="form-control"
              placeholder="e.g. Calgary SW, Cochrane, Airdrie"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Message / Project Details</label>
          <textarea
            className="form-control"
            placeholder="Please share details regarding your timeline, square footage, or any specific questions..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
          <label className="form-label">Attach Plans / Drawings (Optional)</label>
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
            <UploadCloud size={28} color="var(--accent-primary)" style={{ margin: '0 auto 0.4rem auto' }} />
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dark)' }}>
              Upload Blueprints or Site Sketches
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              PDF, DWG, PNG, or JPG formats
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
                    padding: '0.45rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <File size={14} color="var(--accent-primary)" />
                    <span>{file}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(idx)}
                    style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer' }}
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
          <label className="form-label">Preferred Contact Method</label>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.35rem' }}>
            {[
              { id: 'phone', label: 'Phone' },
              { id: 'email', label: 'Email' },
              { id: 'text', label: 'Text Message' },
            ].map((m) => (
              <label key={m.id} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.875rem' }}>
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
          <span>Request a Quote</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginTop: '1rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          <ShieldCheck size={14} color="var(--accent-primary)" />
          <span>We respect your privacy. No spam.</span>
        </div>
      </form>
    </div>
  );
}
