'use client';

import React, { useState } from 'react';
import {
  Home,
  Building,
  Hammer,
  Layers,
  PlusSquare,
  Wrench,
  Compass,
  UploadCloud,
  File,
  X,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Calendar,
  MapPin,
  User,
  Phone,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/companyConfig';

export default function MultiStepQuoteWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    projectType: 'New Home Framing',
    squareFootage: '',
    community: '',
    city: 'Calgary',
    timeline: 'Within 1-2 Months',
    hasPlans: 'yes',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    preferredContact: 'phone',
    projectDetails: '',
  });

  const projectTypes = [
    { id: 'New Home Framing', label: 'New Home', desc: 'Single family, infill, duplex', icon: Home },
    { id: 'Custom Home Framing', label: 'Custom Home', desc: 'Architectural & high ceilings', icon: Compass },
    { id: 'Basement Framing', label: 'Basement Framing', desc: 'Basement suite or development', icon: Layers },
    { id: 'Garage Framing', label: 'Garage Framing', desc: 'Detached or attached garage', icon: Building },
    { id: 'Home Addition', label: 'Home Addition', desc: 'Second floor or rear extension', icon: PlusSquare },
    { id: 'Renovation Framing', label: 'Renovation Framing', desc: 'Load-bearing wall removal & beams', icon: Hammer },
    { id: 'Structural Framing', label: 'Structural Framing', desc: 'Engineered floors, trusses & posts', icon: Wrench },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileNames = Array.from(e.target.files).map((f) => f.name);
      setUploadedFiles([...uploadedFiles, ...fileNames]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
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
          maxWidth: '700px',
          margin: '0 auto',
          padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.25rem, 4vw, 2.5rem)',
          textAlign: 'center',
          backgroundColor: '#FFFFFF',
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
          }}
        >
          <CheckCircle2 size={40} />
        </div>

        <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 1.85rem)', color: 'var(--text-dark)', marginBottom: '0.85rem' }}>
          Thanks! Your project request has been received.
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '520px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
          We’ll contact you shortly to review your blueprints and discuss your framing scope. Reference #CAL-{Math.floor(100000 + Math.random() * 900000)}
        </p>

        <div
          style={{
            backgroundColor: 'var(--bg-subtle)',
            padding: '1.25rem',
            borderRadius: 'var(--radius-md)',
            textAlign: 'left',
            maxWidth: '480px',
            margin: '0 auto 2rem auto',
            fontSize: '0.875rem',
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
            Submission Summary:
          </div>
          <div>• <strong>Project:</strong> {formData.projectType}</div>
          <div>• <strong>Location:</strong> {formData.community ? `${formData.community}, ` : ''}{formData.city}</div>
          <div>• <strong>Timeline:</strong> {formData.timeline}</div>
          <div>• <strong>Plans:</strong> {formData.hasPlans.toUpperCase()} {uploadedFiles.length > 0 ? `(${uploadedFiles.length} file attached)` : ''}</div>
          <div>• <strong>Contact:</strong> {formData.firstName} {formData.lastName} ({formData.phone})</div>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setCurrentStep(1);
          }}
          className="btn btn-primary"
        >
          Submit Another Project
        </button>
      </div>
    );
  }

  const progressPercent = ((currentStep - 1) / 4) * 100;

  return (
    <div
      className="card"
      style={{
        maxWidth: '820px',
        margin: '0 auto',
        padding: 'clamp(1.25rem, 4vw, 2.5rem)',
        backgroundColor: '#FFFFFF',
        boxShadow: 'var(--shadow-xl)',
      }}
    >
      {/* Progress Header */}
      <div className="wizard-progress">
        <div className="wizard-progress-bar" style={{ width: `${progressPercent}%` }} />
        {[1, 2, 3, 4, 5].map((step) => (
          <div
            key={step}
            className={`wizard-step-node ${currentStep === step ? 'active' : currentStep > step ? 'completed' : ''}`}
          >
            {currentStep > step ? <CheckCircle2 size={16} /> : step}
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
        <span className="section-tag">
          Step {currentStep} of 5
        </span>
        <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.55rem)', marginTop: '0.25rem' }}>
          {currentStep === 1 && 'What type of framing project is this?'}
          {currentStep === 2 && 'Where is the project located and when do you plan to start?'}
          {currentStep === 3 && 'Do you have architectural or structural blueprints?'}
          {currentStep === 4 && 'How can our framing team reach you?'}
          {currentStep === 5 && 'Any additional details or special framing notes?'}
        </h3>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Project Type */}
        {currentStep === 1 && (
          <div>
            <div className="wizard-choice-grid">
              {projectTypes.map((item) => {
                const IconComponent = item.icon;
                const isSelected = formData.projectType === item.id;
                return (
                  <div
                    key={item.id}
                    className={`wizard-choice-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, projectType: item.id })}
                  >
                    <IconComponent
                      size={26}
                      color={isSelected ? 'var(--accent-primary)' : '#64748B'}
                    />
                    <div className="choice-title" style={{ fontWeight: 700, fontSize: '0.9rem' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {item.desc}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="form-group" style={{ marginTop: '1.5rem' }}>
              <label className="form-label">Approximate Square Footage (Optional)</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. 2,400 sq.ft."
                value={formData.squareFootage}
                onChange={(e) => setFormData({ ...formData, squareFootage: e.target.value })}
              />
            </div>
          </div>
        )}

        {/* Step 2: Location & Timeline */}
        {currentStep === 2 && (
          <div>
            <div className="grid-2 grid-form-mobile" style={{ gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">City / Region *</label>
                <select
                  className="form-control form-select"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                >
                  <option value="Calgary">Calgary (NW, SW, SE, NE)</option>
                  <option value="Airdrie">Airdrie</option>
                  <option value="Cochrane">Cochrane</option>
                  <option value="Chestermere">Chestermere</option>
                  <option value="Okotoks">Okotoks</option>
                  <option value="Springbank / Bearspaw">Springbank / Bearspaw</option>
                  <option value="Other Surrounding Area">Other Surrounding Area</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Community / Neighborhood (Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Altadore, Seton, Cooper's Crossing"
                  value={formData.community}
                  onChange={(e) => setFormData({ ...formData, community: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Estimated Framing Start Timeline *</label>
              <div className="wizard-choice-grid">
                {['Ready Immediately', 'Within 1-2 Months', '3-6 Months', 'Planning / Budgeting'].map((time) => (
                  <div
                    key={time}
                    className={`wizard-choice-card ${formData.timeline === time ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, timeline: time })}
                    style={{ padding: '0.85rem' }}
                  >
                    <Calendar size={20} color={formData.timeline === time ? 'var(--accent-primary)' : '#64748B'} />
                    <div className="choice-title" style={{ fontSize: '0.825rem', fontWeight: 600 }}>
                      {time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Plans & Blueprint Upload */}
        {currentStep === 3 && (
          <div>
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label className="form-label">Do you have architectural blueprints or drawings ready? *</label>
              <div className="wizard-choice-grid">
                {[
                  { id: 'yes', label: 'Yes, Plans Ready' },
                  { id: 'in_progress', label: 'Plans In Progress' },
                  { id: 'no', label: 'No Plans Yet' },
                ].map((opt) => (
                  <div
                    key={opt.id}
                    className={`wizard-choice-card ${formData.hasPlans === opt.id ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, hasPlans: opt.id })}
                    style={{ padding: '1rem 0.75rem' }}
                  >
                    <div className="choice-title" style={{ fontWeight: 700, fontSize: '0.9rem' }}>
                      {opt.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="upload-zone" style={{ position: 'relative' }}>
              <input
                type="file"
                multiple
                accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png,.zip"
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
              <UploadCloud size={36} color="var(--accent-primary)" style={{ margin: '0 auto 0.5rem auto' }} />
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
                Click to browse or drag & drop blueprint files
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Supports PDF, DWG, DXF, PNG, JPG, or ZIP (Up to 50MB)
              </div>
            </div>

            {uploadedFiles.length > 0 && (
              <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                  Attached Files ({uploadedFiles.length}):
                </div>
                {uploadedFiles.map((file, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'var(--bg-subtle)',
                      padding: '0.5rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.825rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      <File size={15} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '240px' }}>{file}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(idx)}
                      style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', flexShrink: 0 }}
                    >
                      <X size={15} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Step 4: Contact Information */}
        {currentStep === 4 && (
          <div>
            <div className="grid-2 grid-form-mobile" style={{ gap: '1rem', marginBottom: '1rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">First Name *</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="e.g. David"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Last Name *</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="e.g. Anderson"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div className="grid-2 grid-form-mobile" style={{ gap: '1rem', marginBottom: '1rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  required
                  className="form-control"
                  placeholder="e.g. (403) 555-0182"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  required
                  className="form-control"
                  placeholder="e.g. david@builder.ca"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Preferred Contact Method</label>
              <div style={{ display: 'flex', gap: '1.25rem', marginTop: '0.4rem', flexWrap: 'wrap' }}>
                {[
                  { id: 'phone', label: 'Phone Call' },
                  { id: 'email', label: 'Email' },
                  { id: 'text', label: 'Text Message' },
                ].map((method) => (
                  <label key={method.id} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.875rem' }}>
                    <input
                      type="radio"
                      name="preferredContact"
                      checked={formData.preferredContact === method.id}
                      onChange={() => setFormData({ ...formData, preferredContact: method.id })}
                    />
                    <span>{method.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Scope & Review */}
        {currentStep === 5 && (
          <div>
            <div className="form-group">
              <label className="form-label">Project Scope & Special Instructions</label>
              <textarea
                className="form-control"
                placeholder="Share any details on ceiling heights, engineered beam requirements, site access, or specific questions..."
                value={formData.projectDetails}
                onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                style={{ minHeight: '110px' }}
              />
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg-subtle)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                marginTop: '1.25rem',
                fontSize: '0.85rem',
              }}
            >
              <div style={{ fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
                Quick Review:
              </div>
              <div className="grid-2 grid-form-mobile" style={{ gap: '0.4rem' }}>
                <div><strong>Type:</strong> {formData.projectType}</div>
                <div><strong>Location:</strong> {formData.city}</div>
                <div><strong>Timeline:</strong> {formData.timeline}</div>
                <div><strong>Plans:</strong> {formData.hasPlans.toUpperCase()}</div>
                <div><strong>Name:</strong> {formData.firstName} {formData.lastName}</div>
                <div><strong>Phone:</strong> {formData.phone}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              <ShieldCheck size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
              <span>Your contact details are kept strictly confidential for quoting purposes.</span>
            </div>
          </div>
        )}

        {/* Wizard Navigation Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginTop: '2rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--border-light)',
            flexWrap: 'wrap',
          }}
        >
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="btn btn-outline"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 5 ? (
            <button
              type="button"
              onClick={handleNext}
              className="btn btn-primary"
            >
              <span>Continue</span>
              <ArrowRight size={16} />
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{ flex: 1, minWidth: '220px' }}
            >
              <span>Submit Framing Quote Request</span>
              <ArrowRight size={18} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
