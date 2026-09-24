'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, HelpCircle, ArrowRight, Phone } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import LeadBannerCTA from '@/components/common/LeadBannerCTA';
import SchemaOrg from '@/components/common/SchemaOrg';
import { FAQ_DATA, COMPANY_CONFIG } from '@/config/companyConfig';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openId, setOpenId] = useState<string | null>('types-of-homes');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'services', label: 'Services & Scope' },
    { id: 'process', label: 'Quoting & Process' },
    { id: 'blueprints', label: 'Blueprints & Plans' },
    { id: 'timeline', label: 'Timelines' },
    { id: 'general', label: 'General & Areas' },
  ];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <SchemaOrg
        type="FAQPage"
        faqList={FAQ_DATA.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      <section className="section-sm" style={{ backgroundColor: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />
          <span className="section-tag">Help & Answers</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
            Have questions about residential wood framing in Calgary? Here are answers to common questions regarding our process, blueprint requirements, timelines, and services.
          </p>

          {/* Search Box */}
          <div style={{ position: 'relative', maxWidth: '540px', marginTop: '2rem' }}>
            <Search
              size={20}
              color="#94A3B8"
              style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Search framing questions (e.g. plans, basements, timeline)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control"
              style={{ paddingLeft: '2.85rem', paddingRight: '1rem', height: '48px', borderRadius: 'var(--radius-full)' }}
            />
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-narrow">
          {/* Category Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: '1.5px solid',
                  borderColor: activeCategory === cat.id ? 'var(--accent-primary)' : 'var(--border-light)',
                  backgroundColor: activeCategory === cat.id ? 'var(--accent-primary)' : '#FFFFFF',
                  color: activeCategory === cat.id ? '#FFFFFF' : 'var(--text-dark)',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          {filteredFaqs.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    style={{
                      border: '1.5px solid',
                      borderColor: isOpen ? 'var(--accent-primary)' : 'var(--border-light)',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: isOpen ? '#FFFFFF' : 'var(--bg-light)',
                      transition: 'all var(--transition-fast)',
                      overflow: 'hidden',
                    }}
                  >
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      style={{
                        width: '100%',
                        padding: '1.25rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: isOpen ? 'var(--accent-primary)' : 'var(--text-dark)',
                      }}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <div
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                          transition: 'transform var(--transition-fast)',
                          flexShrink: 0,
                          color: isOpen ? 'var(--accent-primary)' : 'var(--text-muted)',
                        }}
                      >
                        <ChevronDown size={20} />
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: '0 1.5rem 1.25rem 1.5rem',
                          color: 'var(--text-dark-secondary)',
                          fontSize: '0.95rem',
                          lineHeight: 1.65,
                          borderTop: '1px solid rgba(0,0,0,0.05)',
                          paddingTop: '0.85rem',
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', backgroundColor: 'var(--bg-light)', borderRadius: 'var(--radius-md)' }}>
              <HelpCircle size={40} color="var(--accent-primary)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>No matching questions found</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Have a specific question not covered here? Reach out directly and we’ll be happy to help.
              </p>
              <Link href="/contact" className="btn btn-primary btn-sm">
                <span>Contact Us Directly</span>
              </Link>
            </div>
          )}

          <div
            style={{
              marginTop: '4rem',
              backgroundColor: '#0D1117',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              color: '#FFFFFF',
              textAlign: 'center',
            }}
          >
            <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '0.75rem' }}>
              Still have questions about your build?
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto 1.5rem auto' }}>
              Talk directly with our framing team or send your drawings for a personalized review.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/quote" className="btn btn-primary">
                <span>Request a Free Quote</span>
                <ArrowRight size={16} />
              </Link>
              <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="btn btn-outline-white">
                <Phone size={16} color="var(--accent-primary)" />
                <span>Call {COMPANY_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <LeadBannerCTA />
    </>
  );
}
