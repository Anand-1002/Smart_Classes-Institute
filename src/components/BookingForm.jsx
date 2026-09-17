import React, { useState, useEffect } from 'react';
import { COURSES_DATA, BRANCHES_DATA } from '../data/instituteData.js';

export default function BookingForm({ preselectedCourse, preselectedBranch }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    course: preselectedCourse || 'Effective Communication Training',
    campus: preselectedBranch || 'Sonarpur Main Campus (Baikunthapur)'
  });

  useEffect(() => {
    if (preselectedCourse) {
      setFormData(prev => ({ ...prev, course: preselectedCourse }));
    }
  }, [preselectedCourse]);

  useEffect(() => {
    if (preselectedBranch) {
      setFormData(prev => ({ ...prev, campus: preselectedBranch }));
    }
  }, [preselectedBranch]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Smart Classes, I would like to book a Diagnostic Session.\n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Program:* ${formData.course}\n*Campus:* ${formData.campus}`;
    const url = `https://wa.me/917890102966?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="newsletter-bar-section" id="contact">
      <div className="container">
        <div className="newsletter-bar-inner">
          <h2 className="newsletter-title">Reserve Your Private Session</h2>
          <p className="newsletter-sub">
            Connect directly with Coach Sourav Chatterjee for a 1-on-1 diagnostic consultation. Strictly limited 8–10 seats per batch.
          </p>

          <form className="newsletter-form" onSubmit={handleFormSubmit}>
            <input
              type="text"
              required
              placeholder="Your Full Name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="newsletter-input"
            />
            <input
              type="tel"
              required
              placeholder="Phone / WhatsApp Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              Book Session
            </button>
          </form>

          <div style={{ display: 'flex', gap: '20px', marginTop: '16px', fontSize: '0.82rem', color: '#BDB5AA', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span>✓ Instant WhatsApp Confirmation</span>
            <span>✓ Zero Obligation Diagnostic</span>
            <span>✓ Direct Contact: +91 78901 02966</span>
          </div>
        </div>
      </div>
    </section>
  );
}
