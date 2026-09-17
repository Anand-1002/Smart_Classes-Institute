import React from 'react';

export default function WhyUsSection({ onBookDemo }) {
  const methodItems = [
    { num: '01', title: 'Micro-Batch Mentorship', desc: 'Strictly 8–10 candidates per cohort ensuring intensive 1-on-1 feedback and personalized pacing.' },
    { num: '02', title: 'Daily Podium Immersion', desc: 'Every student stands at the podium and addresses the room in every class session. Zero passive listening.' },
    { num: '03', title: 'Zero Translation Lag', desc: 'Cognitive brain rewiring to formulate thoughts directly in English without translating from Bengali or Hindi.' },
    { num: '04', title: 'Executive Body Language', desc: 'Posture calibration, gaze control, assertive vocal pitch modulation, and refined corporate etiquette.' },
    { num: '05', title: 'Subconscious Fear Release', desc: 'Dissolving imposter syndrome, stage blackouts, and the paralyzing dread of peer judgment.' },
    { num: '06', title: 'Holistic Life Direction', desc: 'Ancient breathwork techniques and emotional intelligence for composure during high-stakes meetings.' }
  ];

  return (
    <section className="section" id="why-us">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Pedagogy &amp; Advantages</span>
          <h2 className="section-title">The Method</h2>
          <p className="section-subtitle">
            Six foundational pillars designed to eliminate hesitation and instill commanding executive eloquence.
          </p>
        </div>

        <div className="method-grid">
          {methodItems.map(item => (
            <div key={item.num} className="method-card">
              <div>
                <div className="method-card-number">{item.num}</div>
                <h3 className="method-card-title">{item.title}</h3>
                <p className="method-card-desc">{item.desc}</p>
              </div>
              <div style={{ marginTop: '24px' }}>
                <button className="btn-link" onClick={onBookDemo}>
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
