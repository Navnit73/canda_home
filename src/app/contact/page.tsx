import React from 'react';
import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/forms/ContactForm';
import SchemaOrg from '@/components/common/SchemaOrg';
import { COMPANY_CONFIG } from '@/config/companyConfig';

export const metadata: Metadata = {
  title: 'Contact Us | Request a Residential Framing Quote Calgary',
  description: 'Get in touch with our Calgary residential home framing team. Call, email, or submit your plans online for a free, itemized framing estimate.',
  alternates: {
    canonical: 'https://calgaryhomeframing.ca/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <SchemaOrg
        type="LocalBusiness"
        title="Contact Us"
        description="Contact Calgary Home Framing contractor team."
        url="https://calgaryhomeframing.ca/contact"
      />

      <section className="section-sm" style={{ backgroundColor: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
          <span className="section-tag">Direct Communication</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.25rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Get in Touch With Our Calgary Framing Team
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '800px', lineHeight: 1.65 }}>
            Ready to discuss your new home, custom build, detached garage, or basement framing requirements? We are here to answer questions, review your blueprints, and provide an accurate takeoff.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-sidebar" style={{ gap: '3.5rem' }}>
            {/* Form Column */}
            <div>
              <ContactForm />
            </div>

            {/* Direct Info & Coverage Overview */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                {/* Contact Details Card */}
                <div className="card" style={{ padding: '2.25rem', backgroundColor: 'var(--bg-light)', border: '1px solid var(--border-light)' }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                    Direct Contact Details
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                    <div style={{ display: 'flex', gap: '0.9rem' }}>
                      <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'var(--accent-primary-subtle)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Phone size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>Direct Line</div>
                        <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                          {COMPANY_CONFIG.phone}
                        </a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.9rem' }}>
                      <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'var(--accent-primary-subtle)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Mail size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>Email Address</div>
                        <a href={`mailto:${COMPANY_CONFIG.email}`} style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                          {COMPANY_CONFIG.email}
                        </a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.9rem' }}>
                      <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'var(--accent-primary-subtle)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <MapPin size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>Service Region</div>
                        <div style={{ fontSize: '0.925rem', color: 'var(--text-dark)', fontWeight: 600 }}>
                          Calgary, Airdrie, Cochrane, Chestermere, Okotoks & Foothills
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.9rem' }}>
                      <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'var(--accent-primary-subtle)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Clock size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>Operating Hours</div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-dark-secondary)' }}>
                          {COMPANY_CONFIG.hours}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regional Coverage Card */}
                <div className="card" style={{ padding: '2.25rem', backgroundColor: '#0A0E17', color: '#FFFFFF', border: '1px solid #1E293B' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
                    <MapPin size={18} />
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Regional Coverage
                    </span>
                  </div>

                  <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                    Active Framing Crews in Calgary
                  </h4>

                  <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    We deploy dedicated residential framing crews across all Calgary quadrants and surrounding municipality building jurisdictions.
                  </p>

                  <div style={{ backgroundColor: '#111726', border: '1px solid #1E293B', borderRadius: 'var(--radius-sm)', padding: '1.15rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#CBD5E1' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>• NW Calgary / Bearspaw / Sunset</span>
                      <span style={{ color: 'var(--success)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span className="live-dot" style={{ width: '6px', height: '6px' }} /> Active
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>• SW Calgary / Springbank / Altadore</span>
                      <span style={{ color: 'var(--success)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span className="live-dot" style={{ width: '6px', height: '6px' }} /> Active
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>• SE & NE Calgary / Mahogany / Seton</span>
                      <span style={{ color: 'var(--success)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span className="live-dot" style={{ width: '6px', height: '6px' }} /> Active
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>• Airdrie / Cochrane / Okotoks / Chestermere</span>
                      <span style={{ color: 'var(--success)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span className="live-dot" style={{ width: '6px', height: '6px' }} /> Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
