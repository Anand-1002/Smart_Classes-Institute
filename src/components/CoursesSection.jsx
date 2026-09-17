import React, { useState } from 'react';
import { COURSES_DATA } from '../data/instituteData.js';

export default function CoursesSection({ onOpenSyllabus, onBookDemoForCourse }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'communication', label: 'Communication' },
    { id: 'personality', label: 'Executive Presence' },
    { id: 'holistic', label: 'Holistic & Healing' }
  ];

  const filteredCourses = COURSES_DATA.filter(course => {
    if (activeCategory === 'all') return true;
    return course.category === activeCategory;
  });

  return (
    <section className="section section-surface" id="courses">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Curated Curriculum</span>
          <h2 className="section-title">Offerings</h2>
          <p className="section-subtitle">
            Eight specialized training disciplines designed for students, corporate executives, and personal leaders.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs-luxury" role="tablist">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="courses-luxury-grid">
          {filteredCourses.map(course => (
            <article key={course.id} className="course-luxury-card">
              <div>
                <div className="course-card-top">
                  <span className="course-badge-subtle">{course.badge}</span>
                  <span className="course-duration-pill">{course.duration}</span>
                </div>

                <h3 className="course-luxury-title">{course.title}</h3>
                <p className="course-luxury-desc">{course.shortDesc}</p>
              </div>

              <div className="course-card-actions">
                <button
                  className="btn-link"
                  onClick={() => onOpenSyllabus(course)}
                >
                  View Syllabus →
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => onBookDemoForCourse(course.title)}
                >
                  Enroll
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
