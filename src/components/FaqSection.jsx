import React, { useState } from 'react';
import { FAQS_DATA } from '../data/instituteData.js';

export default function FaqSection({ onBookDemo }) {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Curriculum Inquiries</span>
          <h2 className="section-title">Frequently Asked</h2>
          <p className="section-subtitle">
            Answers regarding admissions, methodology, batch schedules, and fee structures.
          </p>
        </div>

        <div className="faq-list">
          {FAQS_DATA.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item ${activeFaq === idx ? 'active' : ''}`}
            >
              <button
                className="faq-question-btn"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">+</span>
              </button>
              {activeFaq === idx && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
