/**
 * SMART CLASSES — High-Fashion Editorial Luxury Single Page Application
 * Design Language: "COACH & CO." Minimalist Luxury & Warm Editorial Aesthetics
 * Palette: Warm Alabaster Linen (#F9F6F0), Warm Sand (#F3ECE2), 
 *          Bisque Taupe Band (#DFD6C9), Espresso Noir (#191715)
 */

(function () {
  const { useState, useEffect, createElement: h } = React;

  // --- Institute Data ---
  const INSTITUTE_INFO = {
    name: "SMART CLASSES",
    tagline: "Curated Spoken English & Executive Personality Coaching",
    phone: "+91 78901 02966",
    phoneClean: "+917890102966",
    whatsappNumber: "917890102966",
    email: "suvo.sourav8@gmail.com",
    rating: "4.9",
    reviewsCount: "79+",
    studentsTrained: "1,000+",
    successRate: "95%"
  };

  const COURSES_DATA = [
    {
      id: "personality-development",
      title: "Personality Development",
      category: "personality",
      badge: "Executive Leadership",
      duration: "2 - 3 Months",
      shortDesc: "Develop your own distinct personal presence. Master confident body language, professional grooming, assertive voice modulation, and corporate etiquette.",
      overview: "Develop your own unique identity. Master body language, professional grooming, assertive communication, voice modulation, and social etiquette.",
      modules: [
        "Body Language & Posture Training (Standing, sitting, walking with commanding presence)",
        "Personal Grooming, Wardrobe Psychology & Distinct Identity Architecture",
        "Social, Dining & Executive Business Etiquette (Corporate & personal)",
        "Voice Modulation, Pitch Calibration & Speech Clarity Drills",
        "Self-Confidence, Positive Mindset & Cognitive Attitude Conditioning",
        "Non-Verbal Signals & Reading Audience Reactions in Meetings",
        "Assertive vs Aggressive Communication Calibration"
      ],
      outcomes: "Transforms hesitant individuals into poised, magnetic communicators who carry themselves with authority and charm in any executive or social room."
    },
    {
      id: "public-speaking",
      title: "Public Speaking Skills",
      category: "communication",
      badge: "High Impact",
      duration: "2 Months",
      shortDesc: "Overcome stage fear completely. Deliver captivating extempore speeches, presentations, and address large auditoriums with ease.",
      overview: "Overcome stage fear completely. Deliver powerful podium speeches, extempore talks, and captivate any audience with clarity and magnetism.",
      modules: [
        "Micro-Podium Drills & Immediate Stage Fear Elimination",
        "Extempore & Impromptu Speech Master Techniques (3-second mental framing)",
        "Lectern, Microphone Technique & Stage Movement Mastery",
        "Audience Engagement, Hook Openers & Eye Contact Calibration",
        "Structured Speech Delivery (Hook, Core Message, Call to Action)",
        "Dealing with Stage Blackouts, Nervous Shakes & Dry Mouth",
        "Humor, Storytelling & Rhetorical Devices in Professional Speaking"
      ],
      outcomes: "100% elimination of stage fright. You will be able to step onto any podium or stage without prepared notes and deliver captivating speeches."
    },
    {
      id: "effective-communication",
      title: "Effective Communication Training",
      category: "communication",
      badge: "Most Popular",
      duration: "3 Months",
      shortDesc: "Practical Spoken English fluency, active listening, vocabulary expansion, thought translation elimination, and real-life conversation mastery.",
      overview: "Practical Spoken English fluency, active listening, vocabulary expansion, thought translation elimination, and real-life conversation mastery.",
      modules: [
        "Practical Spoken English & Daily Conversational Roleplays",
        "Eliminating Native Language (Bengali/Hindi) Thought Translation Lag",
        "Vocabulary, Phrasal Verbs & Modern English Idioms Mastery",
        "Pronunciation Precision, Neutral Indian Accent & Syllable Stress",
        "Real-World Scenarios: Corporate Meetings, Travel, Banking, Interviews",
        "Active Listening Skills & Asking Intelligent Follow-Up Questions",
        "Small Talk, Networking & Sustaining 20+ Minute Spontaneous Dialogues"
      ],
      outcomes: "Think directly in English without hesitation or translation lag. Speak naturally with peers, colleagues, clients, and family."
    },
    {
      id: "confidence-building",
      title: "Confidence Building",
      category: "personality",
      badge: "Foundational",
      duration: "2 Months",
      shortDesc: "Constructive 1-on-1 feedback, positive mindset conditioning, elimination of imposter syndrome, and overcome social speaking anxiety.",
      overview: "Constructive 1-on-1 feedback, positive mindset conditioning, elimination of imposter syndrome, and overcome social speaking anxiety.",
      modules: [
        "1-on-1 Personal Feedback Loops & Safe Environment Speaking",
        "Overcoming Social Judgment, Ridicule Fear & Speaking Anxiety",
        "Rewiring Limiting Beliefs & Building a Resilient Growth Mindset",
        "Micro-Wins Framework: Daily 5-Minute English Action Steps",
        "Small Batch Supportive Guidance with Zero Peer Pressure",
        "Overcoming Perfectionism & Embracing Constructive Mistakes",
        "Building Resilience During High-Stakes or Uncomfortable Conversations"
      ],
      outcomes: "Breaks the psychological barrier of 'What will people think?'. Instills unwavering belief in your self-worth and communication power."
    },
    {
      id: "spiritual-guidance",
      title: "Spiritual Guidance & Self-Development",
      category: "holistic",
      badge: "Holistic",
      duration: "Integrated",
      shortDesc: "Holistic self-awareness, stress management, inner clarity, emotional balance, and spiritual growth guided by Mr. Sourav Chatterjee.",
      overview: "Holistic self-awareness, stress management, inner clarity, emotional balance, and spiritual growth guided by Mr. Sourav Chatterjee.",
      modules: [
        "Inner Clarity, Life Direction & Mindset Transformation",
        "Stress Management & Ancient Mindfulness Breathwork Techniques",
        "Emotional Intelligence (EQ) & Response vs Reaction Training",
        "Discovering Personal Purpose, Dharma & Core Values",
        "Overcoming Negative Overthinking & Chronic Mental Fatigue",
        "Conscious Living & Mindful Speech (Satya & Priyam Vada)",
        "Daily Spiritual Alignment Protocols for Peak Mental Energy"
      ],
      outcomes: "Cultivates profound inner tranquility, laser mental focus, and grounded presence that enhances both communication and everyday well-being."
    },
    {
      id: "leadership-coaching",
      title: "Leadership & Life Coaching",
      category: "personality",
      badge: "Executive Track",
      duration: "3 Months",
      shortDesc: "Leadership mindset, conflict resolution, team motivation, personal goal setting, decision-making, and professional life visioning.",
      overview: "Leadership mindset, conflict resolution, team motivation, personal goal setting, decision-making, and professional life visioning.",
      modules: [
        "Executive Presence & Boardroom Communication Gravitas",
        "Constructive Negotiation & High-Stakes Conflict Resolution",
        "Team Motivation, Delegation & Inspiring Collective Action",
        "Personal Goal Architecture & Strategic Decision-Making Frameworks",
        "Emotional Regulation Under High-Pressure Business Deadlines",
        "Public Representation of Organization / Brand Identity",
        "Life Purpose Clarification & Work-Life Harmonization"
      ],
      outcomes: "Develops commanding leadership capabilities, high emotional intelligence, and boardroom composure sought by modern corporate employers."
    },
    {
      id: "numerology-name",
      title: "Numerology & Name Correction",
      category: "holistic",
      badge: "Consultative",
      duration: "1.5 - 2 Months",
      shortDesc: "Vibrational alignment of names, business branding, life path analysis, and personal destiny enhancement based on ancient numerological science.",
      overview: "Vibrational alignment of names, business branding, life path analysis, and personal destiny enhancement based on ancient numerological science.",
      modules: [
        "Life Path, Destiny & Expression Number Calculation & Analysis",
        "Vibrational Name Correction for Harmonizing Personal Energy",
        "Business Name & Brand Title Numerological Optimization",
        "Identifying Auspicious Dates, Timing & Growth Cycles for Ventures",
        "Remedial Numerological Solutions for Career Stagnation",
        "Compatibility Analysis for Partnerships & Professional Collaborations"
      ],
      outcomes: "Provides actionable clarity into your innate vibrational strengths, helping align personal branding and career milestones for accelerated harmony."
    },
    {
      id: "shadow-healing",
      title: "Shadow Healing & Subconscious Work",
      category: "holistic",
      badge: "Inner Work",
      duration: "2 Months",
      shortDesc: "Heal suppressed emotions, childhood conditioning, subconscious blockages, self-sabotaging habits, and embrace your true authentic self.",
      overview: "Heal suppressed emotions, childhood conditioning, subconscious blockages, self-sabotaging habits, and embrace your true authentic self.",
      modules: [
        "Understanding Subconscious Conditioning & Shadow Archetypes",
        "Inner Child Healing & Reparenting Subconscious Emotional Wounds",
        "Identifying & Disabling Self-Sabotage and Procrastination Cycles",
        "Somatic Emotional Release Drills for Anxiety & Lingering Guilt",
        "Reframing Traumatic Memories into Sources of Resilience & Power",
        "Integrating Repressed Emotions (Anger, Fear, Grief) Positively",
        "Daily Subconscious Reprogramming & Meditation Routines"
      ],
      outcomes: "Liberates you from unconscious behavioral patterns, emotional triggers, and self-doubt so you can show up authentically in life and career."
    }
  ];

  const BRANCHES_DATA = [
    {
      id: "main-campus",
      badge: "Flagship Campus",
      title: "Sonarpur Main Campus (Baikunthapur)",
      address: "1, Flat No. D, Baikunthapur, 352 Vivekananda Road, Opposite Sonarpur Vidyapith School, Sonarpur, Rajpur, West Bengal 700149",
      landmark: "Opposite Sonarpur Vidyapith School",
      hours: "Mon – Sun : 8:00 AM – 9:00 PM",
      phone: "+91 78901 02966",
      transit: "5 mins by Toto/Auto from Sonarpur Station toward Vidyapith School.",
      features: ["Podium Stage", "HD Video Speech Feedback", "Micro-Batch Rooms", "Air Conditioned"],
      mapUrl: "https://maps.google.com/maps?q=Smart%20Classes%20Vivekananda%20Road%20Sonarpur%20700149&t=&z=15&ie=UTF8&iwloc=&output=embed",
      directionsUrl: "https://maps.google.com/?q=Smart+Classes+Vivekananda+Road+Sonarpur+700149"
    },
    {
      id: "power-house",
      badge: "Branch Campus",
      title: "Sonarpur Power House Branch",
      address: "Power House More, beside ICICI Bank, Sonarpur, Kolkata, West Bengal 700150",
      landmark: "Beside ICICI Bank, Power House More",
      hours: "Mon – Sun : 8:00 AM – 9:00 PM",
      phone: "+91 78901 02966",
      transit: "Located right at Power House More, easily reachable from Sonarpur Station.",
      features: ["Weekend Executive Batches", "Discussion Tables", "Corporate Interview Rooms"],
      mapUrl: "https://maps.google.com/maps?q=Sonarpur%20Power%20House%20More%20ICICI%20Bank&t=&z=15&ie=UTF8&iwloc=&output=embed",
      directionsUrl: "https://maps.google.com/?q=Sonarpur+Power+House+More+ICICI+Bank"
    }
  ];

  const REVIEWS_DATA = [
    {
      id: 1,
      name: "Debasish Mukherjee",
      role: "IT Consultant, Salt Lake Sector V",
      rating: 5,
      avatar: "Debasish Mukherjee.png",
      text: "I had extreme hesitation speaking in client sprint calls. Within 6 weeks at Smart Classes under Sourav Sir's guidance, my translation lag vanished. The daily podium sessions transformed my confidence completely."
    },
    {
      id: 2,
      name: "Rajanya Giri",
      role: "MBA Candidate, Kolkata",
      rating: 5,
      avatar: "Rajanya Giri.png",
      text: "I was terrified of extempore speeches and group discussions. Sourav Sir's 3-second mental structuring technique enabled me to clear my campus placement interview with a top MNC on my first attempt!"
    },
    {
      id: 3,
      name: "Arya Chakraborty",
      role: "Marketing Engineer, Kolkata",
      rating: 5,
      avatar: "Arya Chakraborty.png",
      text: "Unlike regular coaching institutes that force grammar rules, Smart Classes focuses on live psychology, breath control, and daily stage immersion. It was a complete rebirth for my personality."
    }
  ];

  const FAQS_DATA = [
    {
      q: "Who is the lead coach at Smart Classes?",
      a: "All flagship batches and 1-on-1 consultations are personally led and mentored by Mr. Sourav Chatterjee, Founder, Spiritual Life Coach, and Communication Specialist."
    },
    {
      q: "What is the typical batch size?",
      a: "To ensure rigorous personalized attention, our batches are strictly limited to 8–10 students. Every single student speaks on our mini-stage during every class session."
    },
    {
      q: "How does Smart Classes differ from traditional Spoken English institutes?",
      a: "Traditional centers teach passive grammar formulas. We utilize real-world stage immersion, subconscious psychological rewiring, extempore drills, and video playback feedback to eliminate hesitation."
    },
    {
      q: "Are the courses suitable for working professionals?",
      a: "Yes. We offer flexible morning, evening, and weekend batches specifically curated for software engineers, doctors, teachers, corporate executives, and college students."
    },
    {
      q: "How can I attend a free diagnostic demo session?",
      a: "You can book directly via the booking form below or message our official WhatsApp (+91 78901 02966). We will arrange a complimentary assessment session with Coach Sourav Chatterjee."
    }
  ];

  const GALLERY_DATA = [
    { id: 1, title: "Executive Podium Session", category: "classes", src: "Executive Podium Session.png", objectPosition: "35% top" },
    { id: 6, title: "Personality Rebirth Cohort", category: "student", src: "Personality Rebirth Cohort.png", objectPosition: "center 30%" },
    { id: 3, title: "Student Speech Presentation", category: "student", src: "Student Speech.png", objectPosition: "45% top" },
    { id: 5, title: "Interactive Workshop", category: "classes", src: "Interaction workshop.png", objectPosition: "center 20%" },
    { id: 2, title: "1-on-1 Mentorship Dialogue", category: "classes", src: "Sir Picture.png", objectPosition: "center top" }
  ];

  // --- Main React Component ---
  function SmartClassesApp() {
    const [theme, setTheme] = useState(() => localStorage.getItem('smartclass_theme') || 'light');
    const [currentView, setCurrentView] = useState('home');
    const [courseFilter, setCourseFilter] = useState('all');
    const [selectedCourseModal, setSelectedCourseModal] = useState(null);
    const [lightboxImage, setLightboxImage] = useState(null);
    const [activeFaq, setActiveFaq] = useState(0);
    const [isMobileNav, setIsMobileNav] = useState(false);

    // Booking Form State
    const [formData, setFormData] = useState({
      fullName: '',
      phone: '',
      course: 'Effective Communication Training',
      campus: 'Sonarpur Main Campus (Baikunthapur)'
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('smartclass_theme', theme);
    }, [theme]);

    const toggleTheme = () => {
      setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    const navigateTo = (viewId) => {
      setCurrentView(viewId);
      setIsMobileNav(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      setFormSubmitted(true);
      const text = `Hello Smart Classes, I would like to book a Diagnostic Session.\n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Program:* ${formData.course}\n*Campus:* ${formData.campus}`;
      const url = `https://wa.me/917890102966?text=${encodeURIComponent(text)}`;
      setTimeout(() => {
        window.open(url, '_blank');
      }, 400);
    };

    const openCourseModal = (course) => {
      setSelectedCourseModal(course);
    };

    const closeCourseModal = () => {
      setSelectedCourseModal(null);
    };

    const selectCourseAndBook = (courseTitle) => {
      setFormData(prev => ({ ...prev, course: courseTitle }));
      closeCourseModal();
      navigateTo('contact');
    };

    const filteredCourses = courseFilter === 'all'
      ? COURSES_DATA
      : COURSES_DATA.filter(c => c.category === courseFilter);

    const navTabs = [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'Philosophy' },
      { id: 'courses', label: 'Offerings' },
      { id: 'why-us', label: 'Method' },
      { id: 'branches', label: 'Campuses' },
      { id: 'reviews', label: 'Reviews' },
      { id: 'gallery', label: 'Gallery' },
      { id: 'faq', label: 'FAQ' },
      { id: 'contact', label: 'Admissions' }
    ];

    return h('div', { className: 'app-shell' },
      // Top Strip
      h('div', { className: 'top-strip' },
        h('div', { className: 'container top-strip-inner' },
          h('div', { className: 'top-strip-left' },
            h('span', { className: 'pulse-dot' }),
            h('span', null, 'New Batches Opening: Strictly 8–10 candidates per cohort with Coach Sourav Chatterjee.')
          ),
          h('div', { className: 'top-strip-right' },
            h('a', { href: 'tel:+917890102966', className: 'top-strip-link' }, '📞 +91 78901 02966'),
            h('span', { style: { color: 'var(--accent-brass)' } }, '★ 4.9 / 5.0 (79+ Google Reviews)')
          )
        )
      ),

      // Header Navigation
      h('header', { className: 'site-header' },
        h('div', { className: 'container header-inner' },
          // Brand Lockup: Logo (Left) + Row-Wise SMART CLASSES with 4.9★ Badge
          h('button', { className: 'brand-logo', onClick: () => navigateTo('home'), 'aria-label': 'Smart Classes Home' },
            h('img', {
              src: 'file:///C:/Users/kumar/.gemini/antigravity-ide/brain/535e9fc1-e42b-4f47-8714-cb5b5eea32cb/.user_uploaded/media_1789314066963.png',
              alt: 'Smart Classes Logo',
              className: 'brand-logo-img',
              onError: (e) => {
                e.target.onerror = null;
                e.target.src = 'logo.svg';
              }
            }),
            h('div', { className: 'logo-col' },
              h('div', { className: 'logo-title-row' },
                h('span', { className: 'logo-word-main' }, 'SMART'),
                h('span', { className: 'logo-word-sub' }, 'CLASSES')
              ),
              h('span', { className: 'logo-tagline' }, 'Spoken English • Personality')
            )
          ),

          // Desktop Nav
          h('nav', { className: 'desktop-nav' },
            navTabs.map(tab =>
              h('button', {
                key: tab.id,
                className: `nav-item-btn ${currentView === tab.id ? 'active' : ''}`,
                onClick: () => navigateTo(tab.id)
              }, tab.label)
            )
          ),

          // Actions
          h('div', { className: 'header-actions' },
            h('button', {
              className: 'theme-toggle',
              onClick: toggleTheme,
              title: theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'
            }, theme === 'light' ? '☾' : '☼'),

            h('button', {
              className: 'btn btn-primary btn-sm',
              onClick: () => navigateTo('contact')
            }, 'Book a Session'),

            h('button', {
              className: 'hamburger-btn',
              onClick: () => setIsMobileNav(true)
            },
              h('span', null),
              h('span', null),
              h('span', null)
            )
          )
        )
      ),

      // Mobile Drawer
      h('div', {
        className: `mobile-nav-backdrop ${isMobileNav ? 'open' : ''}`,
        onClick: () => setIsMobileNav(false)
      },
        h('div', {
          className: 'mobile-nav-drawer',
          onClick: (e) => e.stopPropagation()
        },
          h('button', { className: 'mobile-nav-close', onClick: () => setIsMobileNav(false) }, '✕'),
          h('div', { className: 'brand-logo' },
            h('img', {
              src: 'file:///C:/Users/kumar/.gemini/antigravity-ide/brain/535e9fc1-e42b-4f47-8714-cb5b5eea32cb/.user_uploaded/media_1789314066963.png',
              alt: 'Smart Classes Logo',
              className: 'brand-logo-img',
              onError: (e) => {
                e.target.onerror = null;
                e.target.src = 'logo.svg';
              }
            }),
            h('div', { className: 'logo-col' },
              h('div', { className: 'logo-title-row' },
                h('span', { className: 'logo-word-main' }, 'SMART'),
                h('span', { className: 'logo-word-sub' }, 'CLASSES')
              ),
              h('span', { className: 'logo-tagline' }, 'Spoken English • Personality')
            )
          ),
          h('div', { className: 'mobile-nav-links' },
            navTabs.map(tab =>
              h('button', {
                key: tab.id,
                onClick: () => navigateTo(tab.id)
              }, tab.label)
            )
          ),
          h('div', { style: { marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' } },
            h('button', { className: 'btn btn-primary w-full', onClick: () => navigateTo('contact') }, 'Book a Session'),
            h('a', { href: 'https://wa.me/917890102966', target: '_blank', rel: 'noopener', className: 'btn btn-outline w-full' }, 'WhatsApp Consultation')
          )
        )
      ),

      // Main Views
      h('main', null,
        // --- HERO SECTION (Inspired by COACH & CO.) ---
        (currentView === 'home') && h('section', { className: 'hero-editorial' },
          h('div', { className: 'container' },
            h('div', { className: 'hero-editorial-grid' },
              // Left: Typography & CTAs
              h('div', { className: 'hero-editorial-content' },
                h('span', { className: 'hero-tag' }, 'Curated Coaching for the Modern Visionary'),
                h('h1', { className: 'hero-title' }, 'Elevate Your Presence'),
                h('p', { className: 'hero-subtitle' },
                  'Master Spoken English, commanding public speaking, and executive personality architecture. Personalized 1-on-1 mentorship led by ',
                  h('strong', null, 'Mr. Sourav Chatterjee'),
                  ' in Sonarpur, Kolkata.'
                ),
                h('div', { className: 'hero-actions' },
                  h('button', { className: 'btn btn-primary btn-lg', onClick: () => navigateTo('contact') }, 'Book a Session'),
                  h('button', { className: 'btn btn-outline btn-lg', onClick: () => navigateTo('courses') }, 'Explore Curriculum')
                ),
                // Key Metrics Strip
                h('div', { className: 'hero-metrics-strip' },
                  h('div', { className: 'metric-item' },
                    h('span', { className: 'metric-num' }, '1,000+'),
                    h('span', { className: 'metric-label' }, 'Alumni Mentored')
                  ),
                  h('div', { className: 'metric-item' },
                    h('span', { className: 'metric-num' }, '4.9 ★'),
                    h('span', { className: 'metric-label' }, '79+ Google Reviews')
                  ),
                  h('div', { className: 'metric-item' },
                    h('span', { className: 'metric-num' }, '95%'),
                    h('span', { className: 'metric-label' }, 'Fluency Success')
                  ),
                  h('div', { className: 'metric-item' },
                    h('span', { className: 'metric-num' }, '2'),
                    h('span', { className: 'metric-label' }, 'Sonarpur Campuses')
                  )
                )
              ),

              // Right: Editorial Photography Frame
              h('div', { className: 'hero-image-frame' },
                h('img', {
                  src: 'Sir Picture.png',
                  alt: 'Coach Sourav Chatterjee Mentorship at Smart Classes',
                  className: 'hero-main-img'
                }),
                h('div', { className: 'hero-floating-badge' },
                  h('span', { className: 'floating-badge-title' }, 'Mr. Sourav Chatterjee'),
                  h('span', { className: 'floating-badge-sub' }, 'Spiritual Life Coach & Communication Specialist'),
                  h('span', { style: { fontSize: '0.72rem', color: 'var(--accent-brass)', fontWeight: 600, marginTop: '4px' } }, '★ 10+ Years Empowering Leaders')
                )
              )
            )
          )
        ),

        // --- PHILOSOPHY (ABOUT) ---
        (currentView === 'home' || currentView === 'about') && h('section', { className: 'section section-surface', id: 'about' },
          h('div', { className: 'container' },
            h('div', { className: 'section-header' },
              h('span', { className: 'section-badge' }, 'Our Core Foundation'),
              h('h2', { className: 'section-title' }, 'Philosophy'),
              h('p', { className: 'section-subtitle' },
                'A complete personality rebirth — replacing passive grammar memorization with unshakeable inner authority.'
              )
            ),

            h('div', { className: 'philosophy-grid' },
              // Left: Asymmetric Collage
              h('div', { className: 'philosophy-collage' },
                h('img', {
                  src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
                  alt: 'Linen journal and fountain pen',
                  className: 'collage-img-1'
                }),
                h('img', {
                  src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
                  alt: 'Public speaking in session',
                  className: 'collage-img-2'
                })
              ),

              // Right: Narrative
              h('div', { className: 'philosophy-content' },
                h('blockquote', { className: 'lead-quote' },
                  '“Speaking fluent English is not an intellectual test of rules. It is the quiet authority of an unburdened mind and unshakeable self-belief.”'
                ),
                h('p', null,
                  'Located in Sonarpur, Kolkata, ',
                  h('strong', null, 'SMART CLASSES'),
                  ' was founded by ',
                  h('strong', null, 'Mr. Sourav Chatterjee'),
                  ' to dismantle the emotional barrier that prevents capable individuals from speaking fluently.'
                ),
                h('p', null,
                  'Traditional institutions burden students with passive textbook grammar. We replace this lag with live podium immersion, cognitive formulation conditioning, and subconscious fear release.'
                ),
                h('div', { style: { marginTop: '16px' } },
                  h('button', { className: 'btn btn-primary', onClick: () => navigateTo('contact') }, 'Reserve a Private Session')
                )
              )
            )
          )
        ),

        // --- THE METHOD (WHY US) ---
        (currentView === 'home' || currentView === 'why-us') && h('section', { className: 'section', id: 'why-us' },
          h('div', { className: 'container' },
            h('div', { className: 'section-header' },
              h('span', { className: 'section-badge' }, 'Pedagogy & Advantages'),
              h('h2', { className: 'section-title' }, 'The Method'),
              h('p', { className: 'section-subtitle' },
                'Six foundational pillars designed to eliminate hesitation and instill commanding executive eloquence.'
              )
            ),

            h('div', { className: 'method-grid' },
              [
                { num: '01', title: 'Micro-Batch Mentorship', desc: 'Strictly 8–10 candidates per cohort ensuring intensive 1-on-1 feedback and personalized pacing.' },
                { num: '02', title: 'Daily Podium Immersion', desc: 'Every student stands at the podium and addresses the room in every class session. Zero passive listening.' },
                { num: '03', title: 'Zero Translation Lag', desc: 'Cognitive brain rewiring to formulate thoughts directly in English without translating from Bengali or Hindi.' },
                { num: '04', title: 'Executive Body Language', desc: 'Posture calibration, gaze control, assertive vocal pitch modulation, and refined corporate etiquette.' },
                { num: '05', title: 'Subconscious Fear Release', desc: 'Dissolving imposter syndrome, stage blackouts, and the paralyzing dread of peer judgment.' },
                { num: '06', title: 'Holistic Life Direction', desc: 'Ancient breathwork techniques and emotional intelligence for composure during high-stakes meetings.' }
              ].map(item =>
                h('div', { key: item.num, className: 'method-card' },
                  h('div', null,
                    h('div', { className: 'method-card-number' }, item.num),
                    h('h3', { className: 'method-card-title' }, item.title),
                    h('p', { className: 'method-card-desc' }, item.desc)
                  ),
                  h('div', { style: { marginTop: '24px' } },
                    h('button', { className: 'btn-link', onClick: () => navigateTo('contact') }, 'Learn More →')
                  )
                )
              )
            )
          )
        ),

        // --- OFFERINGS (COURSES) ---
        (currentView === 'home' || currentView === 'courses') && h('section', { className: 'section section-surface', id: 'courses' },
          h('div', { className: 'container' },
            h('div', { className: 'section-header' },
              h('span', { className: 'section-badge' }, 'Curated Curriculum'),
              h('h2', { className: 'section-title' }, 'Offerings'),
              h('p', { className: 'section-subtitle' },
                'Eight specialized training disciplines designed for students, executives, and spiritual seekers.'
              )
            ),

            // Filter Tabs
            h('div', { className: 'filter-tabs-luxury' },
              [
                { id: 'all', label: 'All Disciplines' },
                { id: 'communication', label: 'Communication' },
                { id: 'personality', label: 'Executive Presence' },
                { id: 'holistic', label: 'Holistic & Healing' }
              ].map(tab =>
                h('button', {
                  key: tab.id,
                  className: `filter-tab-btn ${courseFilter === tab.id ? 'active' : ''}`,
                  onClick: () => setCourseFilter(tab.id)
                }, tab.label)
              )
            ),

            // Courses Grid
            h('div', { className: 'courses-luxury-grid' },
              filteredCourses.map(course =>
                h('article', { key: course.id, className: 'course-luxury-card' },
                  h('div', null,
                    h('div', { className: 'course-card-top' },
                      h('span', { className: 'course-badge-subtle' }, course.badge),
                      h('span', { className: 'course-duration-pill' }, course.duration)
                    ),
                    h('h3', { className: 'course-luxury-title' }, course.title),
                    h('p', { className: 'course-luxury-desc' }, course.shortDesc)
                  ),
                  h('div', { className: 'course-card-actions' },
                    h('button', {
                      className: 'btn-link',
                      onClick: () => openCourseModal(course)
                    }, 'View Syllabus →'),
                    h('button', {
                      className: 'btn btn-primary btn-sm',
                      onClick: () => selectCourseAndBook(course.title)
                    }, 'Enroll')
                  )
                )
              )
            )
          )
        ),

        // --- TESTIMONIALS (WARM BISQUE TAUPE BAND - MATCHING REFERENCE IMAGE) ---
        (currentView === 'home' || currentView === 'reviews') && h('section', { className: 'testimonials-band', id: 'reviews' },
          h('div', { className: 'container' },
            h('div', { className: 'section-header' },
              h('span', { className: 'section-badge', style: { color: 'var(--text-primary)' } }, 'Alumni Perspectives'),
              h('h2', { className: 'section-title' }, 'Testimonials'),
              h('p', { className: 'section-subtitle', style: { color: 'var(--text-primary)' } },
                'Verified transformations from students, corporate consultants, and scholars across Kolkata.'
              )
            ),

            h('div', { className: 'testimonials-grid' },
              REVIEWS_DATA.map(rev =>
                h('div', { key: rev.id, className: 'testimonial-card-luxury' },
                  h('img', {
                    src: rev.avatar,
                    alt: rev.name,
                    className: 'testimonial-avatar'
                  }),
                  h('div', { className: 'testimonial-stars' }, '★★★★★'),
                  h('p', { className: 'testimonial-quote' }, `“${rev.text}”`),
                  h('div', null,
                    h('h4', { className: 'testimonial-author' }, rev.name),
                    h('p', { className: 'testimonial-role' }, rev.role)
                  )
                )
              )
            )
          )
        ),

        // --- SONARPUR CAMPUSES ---
        (currentView === 'home' || currentView === 'branches') && h('section', { className: 'section', id: 'branches' },
          h('div', { className: 'container' },
            h('div', { className: 'section-header' },
              h('span', { className: 'section-badge' }, 'Prime Locations'),
              h('h2', { className: 'section-title' }, 'Campuses'),
              h('p', { className: 'section-subtitle' },
                'Conveniently situated in Sonarpur, Kolkata with dedicated podium chambers and air-conditioned discussion rooms.'
              )
            ),

            h('div', { className: 'campuses-grid' },
              BRANCHES_DATA.map(branch =>
                h('div', { key: branch.id, className: 'campus-luxury-card' },
                  h('span', { className: 'campus-badge' }, branch.badge),
                  h('h3', { className: 'campus-title' }, branch.title),
                  h('p', { className: 'campus-address' }, branch.address),
                  h('p', { style: { fontSize: '0.85rem', color: 'var(--text-muted)' } }, `📍 Landmark: ${branch.landmark}`),
                  h('p', { style: { fontSize: '0.85rem', color: 'var(--text-secondary)' } }, `🚆 Transit: ${branch.transit}`),
                  h('div', { className: 'campus-features-list' },
                    branch.features.map((feat, i) =>
                      h('span', { key: i, className: 'campus-feature-tag' }, feat)
                    )
                  ),
                  h('div', { className: 'map-embed-frame' },
                    h('iframe', {
                      src: branch.mapUrl,
                      width: '100%',
                      height: '100%',
                      style: { border: 0 },
                      loading: 'lazy',
                      title: branch.title
                    })
                  ),
                  h('div', { className: 'campus-card-actions' },
                    h('a', {
                      href: branch.directionsUrl,
                      target: '_blank',
                      rel: 'noopener',
                      className: 'btn btn-outline btn-sm'
                    }, 'Open Google Maps ↗'),
                    h('button', {
                      className: 'btn btn-primary btn-sm',
                      onClick: () => {
                        setFormData(prev => ({ ...prev, campus: branch.title }));
                        navigateTo('contact');
                      }
                    }, 'Select This Campus')
                  )
                )
              )
            )
          )
        ),

        // --- GALLERY ---
        (currentView === 'home' || currentView === 'gallery') && h('section', { className: 'section section-surface', id: 'gallery' },
          h('div', { className: 'container' },
            h('div', { className: 'section-header' },
              h('span', { className: 'section-badge' }, 'Visual Chronicle'),
              h('h2', { className: 'section-title' }, 'Gallery'),
              h('p', { className: 'section-subtitle' },
                'Moments from our live speech drills, podium workshops, and personality coaching cohorts.'
              )
            ),

            h('div', { className: 'gallery-grid' },
              GALLERY_DATA.map(item =>
                h('div', {
                  key: item.id,
                  className: 'gallery-item-card',
                  onClick: () => setLightboxImage(item)
                },
                  h('img', {
                    src: item.src,
                    alt: item.title,
                    loading: 'lazy',
                    style: { objectPosition: item.objectPosition || 'center top' }
                  }),
                  h('div', { className: 'gallery-overlay' },
                    h('h4', null, item.title),
                    h('p', null, 'Click to expand')
                  )
                )
              )
            )
          )
        ),

        // --- FAQ SECTION ---
        (currentView === 'home' || currentView === 'faq') && h('section', { className: 'section', id: 'faq' },
          h('div', { className: 'container' },
            h('div', { className: 'section-header' },
              h('span', { className: 'section-badge' }, 'Curriculum Inquiries'),
              h('h2', { className: 'section-title' }, 'Frequently Asked'),
              h('p', { className: 'section-subtitle' },
                'Answers regarding admissions, methodology, batch schedules, and fee structures.'
              )
            ),

            h('div', { className: 'faq-list' },
              FAQS_DATA.map((faq, idx) =>
                h('div', {
                  key: idx,
                  className: `faq-item ${activeFaq === idx ? 'active' : ''}`
                },
                  h('button', {
                    className: 'faq-question-btn',
                    onClick: () => setActiveFaq(activeFaq === idx ? null : idx)
                  },
                    h('span', null, faq.q),
                    h('span', { className: 'faq-icon' }, '+')
                  ),
                  activeFaq === idx && h('div', { className: 'faq-answer' },
                    h('p', null, faq.a)
                  )
                )
              )
            )
          )
        ),

        // --- ADMISSIONS / PRIVATE SESSION BOOKING (NEWSLETTER BAR FROM REFERENCE) ---
        (currentView === 'home' || currentView === 'contact') && h('section', { className: 'newsletter-bar-section', id: 'contact' },
          h('div', { className: 'container' },
            h('div', { className: 'newsletter-bar-inner' },
              h('h2', { className: 'newsletter-title' }, 'Reserve Your Private Session'),
              h('p', { className: 'newsletter-sub' },
                'Connect directly with Coach Sourav Chatterjee for a 1-on-1 diagnostic consultation. Strictly limited 8–10 seats per batch.'
              ),

              h('form', { className: 'newsletter-form', onSubmit: handleFormSubmit },
                h('input', {
                  type: 'text',
                  required: true,
                  placeholder: 'Your Full Name',
                  value: formData.fullName,
                  onChange: (e) => setFormData({ ...formData, fullName: e.target.value }),
                  className: 'newsletter-input'
                }),
                h('input', {
                  type: 'tel',
                  required: true,
                  placeholder: 'Phone / WhatsApp Number',
                  value: formData.phone,
                  onChange: (e) => setFormData({ ...formData, phone: e.target.value }),
                  className: 'newsletter-input'
                }),
                h('button', { type: 'submit', className: 'newsletter-btn' }, 'Book Session')
              ),

              h('div', { style: { display: 'flex', gap: '20px', marginTop: '16px', fontSize: '0.82rem', color: '#BDB5AA' } },
                h('span', null, '✓ Instant WhatsApp Confirmation'),
                h('span', null, '✓ Zero Obligation Diagnostic'),
                h('span', null, '✓ Direct Contact: +91 78901 02966')
              )
            )
          )
        )
      ),

      // Footer
      h('footer', { className: 'site-footer' },
        h('div', { className: 'container' },
          h('div', { className: 'footer-grid' },
            // Col 1: Brand
            h('div', { className: 'footer-col' },
              h('div', { className: 'brand-logo', style: { marginBottom: '16px' } },
                h('img', {
                  src: 'file:///C:/Users/kumar/.gemini/antigravity-ide/brain/535e9fc1-e42b-4f47-8714-cb5b5eea32cb/.user_uploaded/media_1789314066963.png',
                  alt: 'Smart Classes Logo',
                  className: 'brand-logo-img',
                  onError: (e) => {
                    e.target.onerror = null;
                    e.target.src = 'logo.svg';
                  }
                }),
                h('div', { className: 'logo-col' },
                  h('div', { className: 'logo-title-row' },
                    h('span', { className: 'logo-word-main' }, 'SMART'),
                    h('span', { className: 'logo-word-sub' }, 'CLASSES'),
                    h('span', { className: 'brand-rating-badge' },
                      h('span', { className: 'rating-sparkle' }, '✨'),
                      h('span', { className: 'rating-val' }, '4.9'),
                      h('span', { className: 'rating-star' }, '★')
                    )
                  ),
                  h('span', { className: 'logo-tagline' }, 'Spoken English • Personality')
                )
              ),
              h('p', { style: { fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '320px', lineHeight: 1.65 } },
                'Kolkata’s premier academy for eliminating stage fright, formulating thoughts in English, and developing commanding boardroom poise.'
              ),
              h('p', { style: { marginTop: '16px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' } },
                'Coach Sourav Chatterjee: +91 78901 02966'
              )
            ),

            // Col 2: Navigation
            h('div', { className: 'footer-col' },
              h('h4', null, 'Navigation'),
              h('ul', { className: 'footer-links' },
                navTabs.slice(0, 5).map(t =>
                  h('li', { key: t.id },
                    h('button', { onClick: () => navigateTo(t.id) }, t.label)
                  )
                )
              )
            ),

            // Col 3: Disciplines
            h('div', { className: 'footer-col' },
              h('h4', null, 'Disciplines'),
              h('ul', { className: 'footer-links' },
                COURSES_DATA.slice(0, 5).map(c =>
                  h('li', { key: c.id },
                    h('button', { onClick: () => navigateTo('courses') }, c.title)
                  )
                )
              )
            ),

            // Col 4: Sonarpur Campuses
            h('div', { className: 'footer-col' },
              h('h4', null, 'Campuses'),
              h('div', { style: { marginBottom: '12px' } },
                h('strong', { style: { fontSize: '0.85rem', color: 'var(--text-primary)' } }, 'Main Campus (Baikunthapur):'),
                h('p', { style: { fontSize: '0.8rem', color: 'var(--text-secondary)' } },
                  '1, Flat No. D, Baikunthapur, 352 Vivekananda Rd, Opp. Sonarpur Vidyapith School (700149)'
                )
              ),
              h('div', { style: { marginBottom: '16px' } },
                h('strong', { style: { fontSize: '0.85rem', color: 'var(--text-primary)' } }, 'Power House Branch:'),
                h('p', { style: { fontSize: '0.8rem', color: 'var(--text-secondary)' } },
                  'Sonarpur Power House More, beside ICICI Bank (700150)'
                )
              ),
              h('div', { style: { display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.82rem' } },
                h('a', { href: 'tel:+917890102966', style: { color: 'var(--text-primary)', fontWeight: 600 } }, '📞 +91 78901 02966'),
                h('a', { href: 'mailto:suvo.sourav8@gmail.com', style: { color: 'var(--text-muted)' } }, '✉ suvo.sourav8@gmail.com')
              )
            )
          ),

          h('div', { className: 'footer-bottom' },
            h('p', null, '© 2026 SMART CLASSES. Curated Coaching for the Modern Visionary.'),
            h('p', null, 'Quiet Luxury Mentorship • Sonarpur, Kolkata')
          )
        )
      ),

      // Course Syllabus Modal
      selectedCourseModal && h('div', {
        className: 'modal-backdrop',
        onClick: closeCourseModal
      },
        h('div', {
          className: 'modal-dialog',
          onClick: (e) => e.stopPropagation()
        },
          h('button', { className: 'modal-close-btn', onClick: closeCourseModal }, '✕'),
          h('span', { className: 'modal-badge' }, selectedCourseModal.badge),
          h('h3', { className: 'modal-title' }, selectedCourseModal.title),
          h('p', { style: { fontSize: '0.94rem', color: 'var(--text-secondary)', marginBottom: '16px' } },
            selectedCourseModal.overview
          ),
          h('div', { style: { padding: '12px 16px', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)', marginBottom: '20px' } },
            h('strong', { style: { fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-primary)' } }, 'Duration: '),
            h('span', { style: { fontSize: '0.88rem', color: 'var(--text-secondary)' } }, selectedCourseModal.duration)
          ),
          h('h4', { style: { fontSize: '1rem', letterSpacing: '0.08em', marginBottom: '12px' } }, 'Curriculum Modules'),
          h('div', { className: 'modal-modules-list' },
            selectedCourseModal.modules.map((mod, idx) =>
              h('div', { key: idx, className: 'modal-module-item' },
                h('span', { className: 'modal-check-icon' }, '—'),
                h('span', null, mod)
              )
            )
          ),
          h('div', { style: { marginTop: '20px', padding: '16px', borderTop: '1px solid var(--border-subtle)' } },
            h('strong', { style: { fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' } }, 'Expected Outcome:'),
            h('p', { style: { fontSize: '0.88rem', color: 'var(--text-secondary)', fontStyle: 'italic' } }, selectedCourseModal.outcomes)
          ),
          h('div', { className: 'modal-actions' },
            h('button', {
              className: 'btn btn-primary w-full',
              onClick: () => selectCourseAndBook(selectedCourseModal.title)
            }, 'Enroll in This Discipline'),
            h('button', {
              className: 'btn btn-outline',
              onClick: closeCourseModal
            }, 'Close')
          )
        )
      ),

      // Lightbox
      lightboxImage && h('div', {
        className: 'lightbox-backdrop',
        onClick: () => setLightboxImage(null)
      },
        h('div', {
          className: 'lightbox-content',
          onClick: (e) => e.stopPropagation()
        },
          h('button', { className: 'lightbox-close', onClick: () => setLightboxImage(null) }, '✕'),
          h('div', { style: { backgroundColor: '#141210', display: 'flex', justifyContent: 'center', alignItems: 'center' } },
            h('img', {
              src: lightboxImage.src,
              alt: lightboxImage.title,
              style: { width: '100%', maxHeight: '72vh', objectFit: 'contain', display: 'block' }
            })
          ),
          h('div', { style: { padding: '20px' } },
            h('h4', { style: { fontSize: '1.2rem', textTransform: 'uppercase' } }, lightboxImage.title),
            h('p', { style: { fontSize: '0.85rem', color: 'var(--text-muted)' } }, 'Smart Classes Speech & Personality Cohort')
          )
        )
      ),

      // Floating Action Widgets
      h('div', { className: 'floating-widgets' },
        h('a', {
          href: 'https://wa.me/917890102966',
          target: '_blank',
          rel: 'noopener',
          className: 'floating-btn floating-whatsapp',
          title: 'Direct WhatsApp Consultation',
          'aria-label': 'WhatsApp'
        },
          h('svg', { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'currentColor' },
            h('path', { d: 'M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z' })
          )
        ),
        h('a', {
          href: 'tel:+917890102966',
          className: 'floating-btn',
          title: 'Direct Phone Call',
          'aria-label': 'Call Coach'
        },
          h('svg', { width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
            h('path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })
          )
        )
      )
    );
  }

  // Mount React Application to #root
  function mountApp() {
    const container = document.getElementById('root');
    if (container && window.ReactDOM && window.React) {
      const root = ReactDOM.createRoot(container);
      root.render(h(SmartClassesApp));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountApp);
  } else {
    mountApp();
  }
})();
