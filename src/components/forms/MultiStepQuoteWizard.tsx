'use client';

import React, { useState, useRef } from 'react';
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
  ShieldCheck,
  AlertCircle,
  Check,
} from 'lucide-react';

type PlanStatus = 'yes' | 'in_progress' | 'no';
type ContactMethod = 'phone' | 'email' | 'text';

interface QuoteFormData {
  projectType: string;
  squareFootage: string;
  community: string;
  city: string;
  timeline: string;
  hasPlans: PlanStatus;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  preferredContact: ContactMethod;
  projectDetails: string;
}

function generateQuoteRef(seed1: string, seed2: string): string {
  let hash = 5381;
  const combined = `${seed1}:${seed2}`;
  for (let i = 0; i < combined.length; i++) {
    hash = (hash << 5) + hash + combined.charCodeAt(i);
  }
  return String((Math.abs(hash) % 900000) + 100000);
}

export default function MultiStepQuoteWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [quoteRefNumber, setQuoteRefNumber] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [stepError, setStepError] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState<QuoteFormData>({
    projectType: 'New Home Framing',
    squareFootage: '',
    community: '',
    city: 'Calgary (Northwest)',
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
    { id: 'Basement Framing', label: 'Basement Suite', desc: 'Legal suites & developments', icon: Layers },
    { id: 'Garage Framing', label: 'Garage Framing', desc: 'Detached or attached garages', icon: Building },
    { id: 'Home Addition', label: 'Home Addition', desc: 'Second floor or rear extensions', icon: PlusSquare },
    { id: 'Renovation Framing', label: 'Renovation & Beams', desc: 'Load-bearing wall removal & LVLs', icon: Hammer },
    { id: 'Structural Framing', label: 'Structural & Post/Beam', desc: 'Engineered floors, trusses & posts', icon: Wrench },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileNames = Array.from(e.target.files).map((f) => f.name);
      setUploadedFiles((prev) => [...prev, ...fileNames]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const scrollToCardTop = () => {
    if (cardRef.current) {
      const yOffset = -80;
      const y = cardRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const validateStep = (stepNumber: number): boolean => {
    setStepError(null);
    if (stepNumber === 1) {
      if (!formData.projectType) {
        setStepError('Please select a project type.');
        return false;
      }
      if (!formData.city) {
        setStepError('Please select your project location.');
        return false;
      }
    }
    if (stepNumber === 3) {
      if (!formData.firstName.trim()) {
        setStepError('Please enter your first name.');
        return false;
      }
      if (!formData.lastName.trim()) {
        setStepError('Please enter your last name.');
        return false;
      }
      if (!formData.phone.trim()) {
        setStepError('Please enter your phone number.');
        return false;
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        setStepError('Please enter a valid email address.');
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
      scrollToCardTop();
    }
  };

  const handlePrev = () => {
    setStepError(null);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    scrollToCardTop();
  };

  const goToStep = (step: number) => {
    if (step < currentStep) {
      setStepError(null);
      setCurrentStep(step);
      scrollToCardTop();
    } else if (step === currentStep + 1 && validateStep(currentStep)) {
      setCurrentStep(step);
      scrollToCardTop();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      setQuoteRefNumber(generateQuoteRef(formData.phone, formData.email));
      setSubmitted(true);
      scrollToCardTop();
    }
  };

  const stepLabels = [
    { num: 1, title: 'Scope & Area', desc: 'Type & Location' },
    { num: 2, title: 'Plans & Specs', desc: 'Drawings & Scope' },
    { num: 3, title: 'Contact Info', desc: 'Takeoff Delivery' },
  ];

  if (submitted) {
    return (
      <div
        ref={cardRef}
        className="card"
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.25rem, 4vw, 2.5rem)',
          textAlign: 'center',
          backgroundColor: '#FFFFFF',
          boxShadow: 'var(--shadow-xl)',
          borderRadius: 'var(--radius-lg)',
        }}
      >
        <div
          style={{
            width: '72px',
            height: '72px',
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
          <CheckCircle2 size={42} />
        </div>

        <span className="badge badge-orange" style={{ marginBottom: '0.85rem' }}>
          Takeoff Request Received
        </span>

        <h2 style={{ fontSize: 'clamp(1.6rem, 3.6vw, 2.1rem)', color: 'var(--text-dark)', marginBottom: '0.85rem' }}>
          Thank you, {formData.firstName}!
        </h2>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto 2rem auto', lineHeight: 1.65 }}>
          Our Calgary estimating team will review your plans and contact you within 24 hours with an itemized takeoff. Reference #CAL-{quoteRefNumber || '849201'}
        </p>

        <div
          style={{
            backgroundColor: 'var(--bg-subtle)',
            padding: '1.5rem',
            borderRadius: 'var(--radius-md)',
            textAlign: 'left',
            maxWidth: '520px',
            margin: '0 auto 2rem auto',
            fontSize: '0.9rem',
            border: '1px solid var(--border-light)',
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-dark)', fontSize: '0.95rem' }}>
            Submission Summary:
          </div>
          <div style={{ marginBottom: '0.4rem', color: 'var(--text-dark-secondary)' }}>• <strong>Project Scope:</strong> {formData.projectType}</div>
          <div style={{ marginBottom: '0.4rem', color: 'var(--text-dark-secondary)' }}>• <strong>Location:</strong> {formData.community ? `${formData.community}, ` : ''}{formData.city}</div>
          <div style={{ marginBottom: '0.4rem', color: 'var(--text-dark-secondary)' }}>• <strong>Timeline:</strong> {formData.timeline}</div>
          <div style={{ marginBottom: '0.4rem', color: 'var(--text-dark-secondary)' }}>• <strong>Blueprints:</strong> {formData.hasPlans === 'yes' ? 'Plans Attached/Ready' : formData.hasPlans === 'in_progress' ? 'Plans In Progress' : 'No Plans Yet'} {uploadedFiles.length > 0 ? `(${uploadedFiles.length} file attached)` : ''}</div>
          <div style={{ color: 'var(--text-dark-secondary)' }}>• <strong>Contact:</strong> {formData.firstName} {formData.lastName} ({formData.phone} • {formData.email})</div>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setCurrentStep(1);
          }}
          className="btn btn-primary btn-lg"
        >
          Submit Another Project
        </button>
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      className="card"
      style={{
        maxWidth: '860px',
        margin: '0 auto',
        padding: 'clamp(1.5rem, 4vw, 2.75rem)',
        backgroundColor: '#FFFFFF',
        boxShadow: 'var(--shadow-xl)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-light)',
      }}
    >
      {/* 3-STEP INTUITIVE PROGRESS HEADER */}
      <div style={{ marginBottom: '2.25rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', position: 'relative' }}>
          {stepLabels.map((s) => {
            const isActive = currentStep === s.num;
            const isCompleted = currentStep > s.num;
            return (
              <button
                key={s.num}
                type="button"
                onClick={() => goToStep(s.num)}
                style={{
                  background: isActive ? 'var(--accent-primary-subtle)' : isCompleted ? '#F8FAFC' : 'transparent',
                  border: '1.5px solid',
                  borderColor: isActive ? 'var(--accent-primary)' : isCompleted ? 'var(--accent-primary)' : 'var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'clamp(0.6rem, 2vw, 0.85rem) 0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  cursor: isCompleted ? 'pointer' : 'default',
                  textAlign: 'left',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? 'var(--accent-primary)' : isCompleted ? 'var(--accent-primary)' : 'var(--border-light)',
                    color: isActive || isCompleted ? '#FFFFFF' : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    flexShrink: 0,
                  }}
                >
                  {isCompleted ? <Check size={16} strokeWidth={3} /> : s.num}
                </div>
                <div style={{ minWidth: 0, overflow: 'hidden' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: 'clamp(0.78rem, 2vw, 0.92rem)',
                      color: isActive ? 'var(--accent-primary)' : 'var(--text-dark)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {s.title}
                  </div>
                  <div
                    style={{
                      fontSize: '0.7rem',
                      color: 'var(--text-muted)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: 'none',
                    }}
                    className="step-desc-desktop"
                  >
                    {s.desc}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* STEP TITLE */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
          <span className="badge badge-orange">
            Step {currentStep} of 3
          </span>
          <span className="badge badge-live">
            <span className="live-dot" style={{ width: '6px', height: '6px' }} />
            <span>24-Hr Response</span>
          </span>
        </div>
        <h2 style={{ fontSize: 'clamp(1.35rem, 3.4vw, 1.8rem)', color: 'var(--text-dark)', fontFamily: 'var(--font-heading)' }}>
          {currentStep === 1 && 'What type of framing project are you planning?'}
          {currentStep === 2 && 'Upload blueprints or tell us your scope'}
          {currentStep === 3 && 'Where should we send your itemized takeoff?'}
        </h2>
        <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
          {currentStep === 1 && 'Select your project scope and estimated timeline to get started.'}
          {currentStep === 2 && 'PDF, DWG, or phone photos are accepted. You can also skip if you have no plans yet.'}
          {currentStep === 3 && 'Enter your contact info to receive your itemized framing estimate.'}
        </p>
      </div>

      {stepError && (
        <div
          style={{
            backgroundColor: '#FEF2F2',
            border: '1px solid #FECACA',
            color: '#DC2626',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.875rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <AlertCircle size={18} style={{ flexShrink: 0 }} />
          <span>{stepError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* ================= STEP 1: SCOPE & LOCATION ================= */}
        {currentStep === 1 && (
          <div>
            {/* Project Types Selection */}
            <label className="form-label" style={{ marginBottom: '0.75rem', fontSize: '0.9rem' }}>
              Select Framing Category *
            </label>
            <div className="wizard-choice-grid" style={{ marginTop: 0, marginBottom: '1.75rem' }}>
              {projectTypes.map((item) => {
                const IconComponent = item.icon;
                const isSelected = formData.projectType === item.id;
                return (
                  <div
                    key={item.id}
                    className={`wizard-choice-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, projectType: item.id })}
                    style={{
                      position: 'relative',
                      padding: '1.15rem 0.85rem',
                      minHeight: '100px',
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setFormData({ ...formData, projectType: item.id });
                      }
                    }}
                  >
                    {isSelected && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '6px',
                          right: '6px',
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent-primary)',
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Check size={12} strokeWidth={3} />
                      </div>
                    )}
                    <IconComponent
                      size={26}
                      color={isSelected ? 'var(--accent-primary)' : '#64748B'}
                    />
                    <div className="choice-title" style={{ fontWeight: 700, fontSize: '0.9rem', marginTop: '0.2rem' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>
                      {item.desc}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Location & Timeline */}
            <div className="grid-2 grid-form-mobile" style={{ gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Project City / Region *</label>
                <select
                  className="form-control form-select"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                >
                  <option value="Calgary (Northwest)">Calgary (Northwest)</option>
                  <option value="Calgary (Southwest)">Calgary (Southwest)</option>
                  <option value="Calgary (Southeast)">Calgary (Southeast)</option>
                  <option value="Calgary (Northeast)">Calgary (Northeast)</option>
                  <option value="Calgary Inner-City">Calgary Inner-City</option>
                  <option value="Airdrie">Airdrie</option>
                  <option value="Cochrane">Cochrane</option>
                  <option value="Chestermere">Chestermere</option>
                  <option value="Okotoks">Okotoks</option>
                  <option value="Springbank / Bearspaw">Springbank / Bearspaw</option>
                  <option value="Foothills County / Acreage">Foothills County / Acreage</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Neighborhood / Community (Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Altadore, Mahogany, Aspen Woods..."
                  value={formData.community}
                  onChange={(e) => setFormData({ ...formData, community: e.target.value })}
                />
              </div>
            </div>

            {/* Timeline Pills & Sq Ft */}
            <div className="grid-2 grid-form-mobile" style={{ gap: '1.25rem', marginTop: '1.25rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Estimated Framing Start *</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                  {['Ready Immediately', 'Within 1-2 Months', '3-6 Months', 'Planning & Budget'].map((time) => {
                    const isSelected = formData.timeline === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: time })}
                        style={{
                          padding: '0.65rem 0.5rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1.5px solid',
                          borderColor: isSelected ? 'var(--accent-primary)' : 'var(--border-light)',
                          backgroundColor: isSelected ? 'var(--accent-primary-subtle)' : '#FFFFFF',
                          color: isSelected ? 'var(--accent-primary)' : 'var(--text-dark)',
                          fontWeight: isSelected ? 700 : 500,
                          fontSize: '0.8125rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.35rem',
                          transition: 'all var(--transition-fast)',
                        }}
                      >
                        <Calendar size={13} />
                        <span>{time}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Approximate Square Footage (Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. 2,400 sq.ft. (2-Storey)"
                  value={formData.squareFootage}
                  onChange={(e) => setFormData({ ...formData, squareFootage: e.target.value })}
                />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.3rem', display: 'block' }}>
                  Helps us prepare an initial square-foot takeoff breakdown.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 2: PLANS & SCOPE ================= */}
        {currentStep === 2 && (
          <div>
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label className="form-label">Do you have architectural blueprints or drawings ready? *</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                {[
                  { id: 'yes', label: 'Yes, Plans Ready', desc: 'Ready for takeoff' },
                  { id: 'in_progress', label: 'In Progress', desc: 'Drafts available' },
                  { id: 'no', label: 'No Plans Yet', desc: 'Need consultation' },
                ].map((opt) => {
                  const isSelected = formData.hasPlans === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, hasPlans: opt.id as PlanStatus })}
                      style={{
                        padding: '0.9rem 0.6rem',
                        borderRadius: 'var(--radius-md)',
                        border: '2px solid',
                        borderColor: isSelected ? 'var(--accent-primary)' : 'var(--border-light)',
                        backgroundColor: isSelected ? 'var(--accent-primary-subtle)' : '#FFFFFF',
                        color: isSelected ? 'var(--accent-primary)' : 'var(--text-dark)',
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)',
                      }}
                    >
                      <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>{opt.label}</div>
                      <div style={{ fontSize: '0.72rem', color: isSelected ? 'var(--accent-primary)' : 'var(--text-muted)', marginTop: '0.2rem' }}>
                        {opt.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Upload Zone */}
            <div className="upload-zone" style={{ position: 'relative', marginBottom: '1.5rem' }}>
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
                aria-label="Upload blueprint files"
              />
              <UploadCloud size={38} color="var(--accent-primary)" style={{ margin: '0 auto 0.5rem auto' }} />
              <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
                Click to browse or drag & drop blueprint files
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Supports PDF, DWG, DXF, PNG, JPG, or ZIP (Up to 50MB)
              </div>
              <div style={{ marginTop: '0.65rem' }}>
                <span className="badge badge-orange" style={{ fontSize: '0.72rem' }}>
                  Tip: PDF architectural takeoffs get estimated within 24 hours
                </span>
              </div>
            </div>

            {uploadedFiles.length > 0 && (
              <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-dark)' }}>
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
                      padding: '0.65rem 0.95rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.85rem',
                      border: '1px solid var(--border-light)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden' }}>
                      <File size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '280px' }}>{file}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(idx)}
                      style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', flexShrink: 0, padding: '4px' }}
                      aria-label={`Remove file ${file}`}
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Scope Notes */}
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Project Scope & Framing Notes (Optional)</label>
              <textarea
                className="form-control"
                placeholder="Details on ceiling heights, basement walkout, engineered LVL/steel beams, target start date, or specific questions..."
                value={formData.projectDetails}
                onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                style={{ minHeight: '95px' }}
              />
            </div>
          </div>
        )}

        {/* ================= STEP 3: CONTACT & DELIVERY ================= */}
        {currentStep === 3 && (
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
                  placeholder="(403) 555-0182"
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
                  placeholder="david@builder.ca"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label className="form-label">Preferred Contact Method</label>
              <div style={{ display: 'flex', gap: '1.25rem', marginTop: '0.4rem', flexWrap: 'wrap' }}>
                {[
                  { id: 'phone', label: '📞 Phone Call' },
                  { id: 'email', label: '✉️ Email' },
                  { id: 'text', label: '💬 Text Message' },
                ].map((method) => (
                  <label key={method.id} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', cursor: 'pointer', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                    <input
                      type="radio"
                      name="preferredContact"
                      checked={formData.preferredContact === method.id}
                      onChange={() => setFormData({ ...formData, preferredContact: method.id as ContactMethod })}
                      style={{ accentColor: 'var(--accent-primary)', width: '16px', height: '16px' }}
                    />
                    <span style={{ fontWeight: formData.preferredContact === method.id ? 700 : 400 }}>{method.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* LIVE TAKE-OFF RECAP BOX */}
            <div
              style={{
                backgroundColor: 'var(--bg-subtle)',
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                border: '1.5px solid var(--border-light)',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                <span style={{ fontWeight: 700, color: 'var(--text-dark)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  📋 Estimate Summary
                </span>
                <button
                  type="button"
                  onClick={() => goToStep(1)}
                  style={{ background: 'none', border: 'none', color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}
                >
                  Edit Scope ✏️
                </button>
              </div>

              <div className="grid-2 grid-form-mobile" style={{ gap: '0.5rem', fontSize: '0.85rem' }}>
                <div><strong>Project:</strong> {formData.projectType}</div>
                <div><strong>Location:</strong> {formData.community ? `${formData.community}, ` : ''}{formData.city}</div>
                <div><strong>Timeline:</strong> {formData.timeline}</div>
                <div><strong>Plans:</strong> {formData.hasPlans === 'yes' ? 'Plans Ready' : formData.hasPlans === 'in_progress' ? 'Plans In Progress' : 'No Plans'} {uploadedFiles.length > 0 ? `(${uploadedFiles.length} file)` : ''}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <ShieldCheck size={16} color="var(--success)" style={{ flexShrink: 0 }} />
              <span>100% Confidential • We never share your blueprint files with unauthorized third parties.</span>
            </div>
          </div>
        )}

        {/* ================= WIZARD NAVIGATION FOOTER ================= */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-light)',
            flexWrap: 'wrap',
          }}
        >
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="btn btn-outline"
              style={{ minWidth: '110px' }}
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="btn btn-primary btn-lg"
              style={{ minWidth: '160px' }}
            >
              <span>Continue</span>
              <ArrowRight size={17} />
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{ flex: 1, minWidth: '260px' }}
            >
              <span>Submit Framing Takeoff Request</span>
              <ArrowRight size={18} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
