import React from 'react';
import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, HardHat, ShieldCheck, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/forms/ContactForm';
import SchemaOrg from '@/components/common/SchemaOrg';
import { COMPANY_CONFIG, SERVICE_AREAS_DATA } from '@/config/companyConfig';

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
        description="Contact our Calgary home framing contractor team."
        url="https://calgaryhomeframing.ca/contact"
      />

      <section className="section-sm" style={{ backgroundColor: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
          <span className="section-tag">Direct Communication</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Get in Touch With Our Calgary Framing Team
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
            Ready to discuss your new build, custom home, garage, or basement framing requirements? We are here to answer questions and review your blueprints.
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

            {/* Direct Info & Map Simulation */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Contact Details Card */}
                <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--bg-light)' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: 'var(--text-dark)' }}>
                    Direct Contact Information
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', gap: '0.85rem' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '6px', backgroundColor: 'var(--accent-primary-subtle)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Phone size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</div>
                        <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                          {COMPANY_CONFIG.phone}
                        </a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.85rem' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '6px', backgroundColor: 'var(--accent-primary-subtle)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Mail size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</div>
                        <a href={`mailto:${COMPANY_CONFIG.email}`} style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                          {COMPANY_CONFIG.email}
                        </a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.85rem' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '6px', backgroundColor: 'var(--accent-primary-subtle)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <MapPin size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Service Area</div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: 600 }}>
                          Calgary, Alberta and surrounding communities
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.85rem' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '6px', backgroundColor: 'var(--accent-primary-subtle)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Clock size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Hours</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-dark-secondary)' }}>
                          {COMPANY_CONFIG.hours}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regional Map Coverage Simulation Card */}
                <div className="card" style={{ padding: '2rem', backgroundColor: '#0D1117', color: '#FFFFFF', border: '1px solid #1F2633' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
                    <MapPin size={18} />
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Regional Coverage Map
                    </span>
                  </div>

                  <h4 style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                    Calgary Metropolitan Area
                  </h4>

                  <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    [Contractor map locator: Serving Calgary, Airdrie, Cochrane, Chestermere, Okotoks, Bearspaw, Springbank, and Foothills County.]
                  </p>

                  <div style={{ backgroundColor: '#161B22', border: '1px solid #262F3E', borderRadius: 'var(--radius-sm)', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8125rem', color: '#CBD5E1' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>• NW Calgary / Bearspaw</span>
                      <span style={{ color: 'var(--success)' }}>Active Coverage</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>• SW Calgary / Springbank</span>
                      <span style={{ color: 'var(--success)' }}>Active Coverage</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>• SE & NE Calgary</span>
                      <span style={{ color: 'var(--success)' }}>Active Coverage</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>• Airdrie / Cochrane / Okotoks</span>
                      <span style={{ color: 'var(--success)' }}>Active Coverage</span>
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
