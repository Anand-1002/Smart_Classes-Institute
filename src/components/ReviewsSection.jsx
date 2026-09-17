import React from 'react';
import { REVIEWS_DATA } from '../data/instituteData.js';

export default function ReviewsSection({ onBookDemo }) {
  const alumniReviews = [
    {
      id: 1,
      name: "Debasish Mukherjee",
      role: "IT Consultant, Salt Lake Sector V",
      avatar: "Debasish Mukherjee.png",
      text: "I had extreme hesitation speaking in client sprint calls. Within 6 weeks at Smart Classes under Sourav Sir's guidance, my translation lag vanished. The daily podium sessions transformed my confidence completely."
    },
    {
      id: 2,
      name: "Rajanya Giri",
      role: "MBA Candidate, Kolkata",
      avatar: "Rajanya Giri.png",
      text: "I was terrified of extempore speeches and group discussions. Sourav Sir's 3-second mental structuring technique enabled me to clear my campus placement interview with a top MNC on my first attempt!"
    },
    {
      id: 3,
      name: "Arya Chakraborty",
      role: "Marketing Engineer, Kolkata",
      avatar: "Arya Chakraborty.png",
      text: "Unlike regular coaching institutes that force grammar rules, Smart Classes focuses on live psychology, breath control, and daily stage immersion. It was a complete rebirth for my personality."
    }
  ];

  return (
    <section className="testimonials-band" id="reviews">
      <div className="container">
        <div className="section-header">
          <span className="section-badge" style={{ color: 'var(--text-primary)' }}>Alumni Perspectives</span>
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle" style={{ color: 'var(--text-primary)' }}>
            Verified transformations from students, corporate consultants, and scholars across Kolkata.
          </p>
        </div>

        <div className="testimonials-grid">
          {alumniReviews.map(rev => (
            <div key={rev.id} className="testimonial-card-luxury">
              <img
                src={rev.avatar}
                alt={rev.name}
                className="testimonial-avatar"
              />
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">“{rev.text}”</p>
              <div>
                <h4 className="testimonial-author">{rev.name}</h4>
                <p className="testimonial-role">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
