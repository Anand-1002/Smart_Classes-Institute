import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import AboutSection from './components/AboutSection.jsx';
import CoursesSection from './components/CoursesSection.jsx';
import CourseModal from './components/CourseModal.jsx';
import WhyUsSection from './components/WhyUsSection.jsx';
import BranchesSection from './components/BranchesSection.jsx';
import ReviewsSection from './components/ReviewsSection.jsx';
import GallerySection from './components/GallerySection.jsx';
import FaqSection from './components/FaqSection.jsx';
import BookingForm from './components/BookingForm.jsx';
import Footer from './components/Footer.jsx';
import FloatingWidgets from './components/FloatingWidgets.jsx';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('smartclass_theme');
    if (saved) return saved;
    return 'light';
  });

  const [currentView, setCurrentView] = useState('home');
  const [activeCourseModal, setActiveCourseModal] = useState(null);
  const [preselectedCourse, setPreselectedCourse] = useState('');
  const [preselectedBranch, setPreselectedBranch] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('smartclass_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleBookDemo = () => {
    setCurrentView('contact');
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookDemoForCourse = (courseTitle) => {
    setPreselectedCourse(courseTitle);
    setCurrentView('contact');
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookDemoForBranch = (branchTitle) => {
    setPreselectedBranch(branchTitle);
    setCurrentView('contact');
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      {/* Executive Header Navigation */}
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <main>
        {currentView === 'home' && (
          <>
            <Hero
              onExploreCourses={() => {
                const el = document.getElementById('courses');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onBookDemo={handleBookDemo}
            />
            <AboutSection onBookDemo={handleBookDemo} />
            <CoursesSection
              onOpenSyllabus={(course) => setActiveCourseModal(course)}
              onBookDemoForCourse={handleBookDemoForCourse}
            />
            <WhyUsSection onBookDemo={handleBookDemo} />
            <BranchesSection onBookDemoForBranch={handleBookDemoForBranch} />
            <ReviewsSection onBookDemo={handleBookDemo} />
            <GallerySection />
            <FaqSection onBookDemo={handleBookDemo} />
            <BookingForm
              preselectedCourse={preselectedCourse}
              preselectedBranch={preselectedBranch}
            />
          </>
        )}

        {currentView === 'about' && (
          <>
            <div className="section-header text-center" style={{ padding: '60px 24px 0 24px' }}>
              <div className="section-badge">ABOUT SMART CLASSES</div>
              <h1 className="section-title">About The Institute &amp; Coach Sourav Chatterjee</h1>
            </div>
            <AboutSection onBookDemo={handleBookDemo} />
            <WhyUsSection onBookDemo={handleBookDemo} />
            <BookingForm
              preselectedCourse={preselectedCourse}
              preselectedBranch={preselectedBranch}
            />
          </>
        )}

        {currentView === 'courses' && (
          <>
            <div className="section-header text-center" style={{ padding: '60px 24px 0 24px' }}>
              <div className="section-badge">CURRICULUM CATALOG</div>
              <h1 className="section-title">Explore All 8 Specialized Programs</h1>
            </div>
            <CoursesSection
              onOpenSyllabus={(course) => setActiveCourseModal(course)}
              onBookDemoForCourse={handleBookDemoForCourse}
            />
            <BookingForm
              preselectedCourse={preselectedCourse}
              preselectedBranch={preselectedBranch}
            />
          </>
        )}

        {currentView === 'why-us' && (
          <>
            <div className="section-header text-center" style={{ padding: '60px 24px 0 24px' }}>
              <div className="section-badge">OUR COMPETITIVE ADVANTAGE</div>
              <h1 className="section-title">Why Choose SMART CLASSES Over Others</h1>
            </div>
            <WhyUsSection onBookDemo={handleBookDemo} />
            <BookingForm
              preselectedCourse={preselectedCourse}
              preselectedBranch={preselectedBranch}
            />
          </>
        )}

        {currentView === 'branches' && (
          <>
            <div className="section-header text-center" style={{ padding: '60px 24px 0 24px' }}>
              <div className="section-badge">CAMPUS LOCATIONS</div>
              <h1 className="section-title">Our Physical Campuses in Sonarpur</h1>
            </div>
            <BranchesSection onBookDemoForBranch={handleBookDemoForBranch} />
            <BookingForm
              preselectedCourse={preselectedCourse}
              preselectedBranch={preselectedBranch}
            />
          </>
        )}

        {currentView === 'gallery' && (
          <>
            <div className="section-header text-center" style={{ padding: '60px 24px 0 24px' }}>
              <div className="section-badge">CAMPUS GLIMPSES</div>
              <h1 className="section-title">Student Moments &amp; Workshop Gallery</h1>
            </div>
            <GallerySection />
            <BookingForm
              preselectedCourse={preselectedCourse}
              preselectedBranch={preselectedBranch}
            />
          </>
        )}

        {currentView === 'reviews' && (
          <>
            <div className="section-header text-center" style={{ padding: '60px 24px 0 24px' }}>
              <div className="section-badge">GOOGLE VERIFIED</div>
              <h1 className="section-title">Student Reviews &amp; Testimonials</h1>
            </div>
            <ReviewsSection onBookDemo={handleBookDemo} />
            <BookingForm
              preselectedCourse={preselectedCourse}
              preselectedBranch={preselectedBranch}
            />
          </>
        )}

        {currentView === 'faq' && (
          <>
            <div className="section-header text-center" style={{ padding: '60px 24px 0 24px' }}>
              <div className="section-badge">ADMISSIONS ASSISTANCE</div>
              <h1 className="section-title">Frequently Asked Questions</h1>
            </div>
            <FaqSection onBookDemo={handleBookDemo} />
            <BookingForm
              preselectedCourse={preselectedCourse}
              preselectedBranch={preselectedBranch}
            />
          </>
        )}

        {currentView === 'contact' && (
          <>
            <div className="section-header text-center" style={{ padding: '60px 24px 0 24px' }}>
              <div className="section-badge">ADMISSIONS &amp; DEMO DESK</div>
              <h1 className="section-title">Schedule Your Free Demo Class</h1>
            </div>
            <BookingForm
              preselectedCourse={preselectedCourse}
              preselectedBranch={preselectedBranch}
            />
            <BranchesSection onBookDemoForBranch={handleBookDemoForBranch} />
          </>
        )}
      </main>

      {/* Course Details Modal */}
      {activeCourseModal && (
        <CourseModal
          course={activeCourseModal}
          onClose={() => setActiveCourseModal(null)}
          onBookDemo={handleBookDemoForCourse}
        />
      )}

      {/* Fixed WhatsApp & Call Quick Contact */}
      <FloatingWidgets />

      {/* Executive Footer */}
      <Footer onNavigate={(view) => {
        setCurrentView(view);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />
    </div>
  );
}
