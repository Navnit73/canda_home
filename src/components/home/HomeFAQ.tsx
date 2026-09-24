'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQ_DATA } from '@/config/companyConfig';

interface HomeFAQProps {
  limit?: number;
}

export default function HomeFAQ({ limit = 6 }: HomeFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayFaqs = FAQ_DATA.slice(0, limit);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section" id="faq" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container-narrow">
        <div className="section-header">
          <div className="section-tag">
            Frequently Asked Questions
          </div>
          <h2 className="section-title">
            Common Questions About Calgary Home Framing
          </h2>
          <p className="section-subtitle">
            Get clear, straightforward answers about our residential framing process, blueprints, timelines, and services.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {displayFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
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
                  onClick={() => toggleAccordion(idx)}
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

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link href="/faq" className="btn btn-outline">
            <span>View All Framing FAQs</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
