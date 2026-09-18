# SMART CLASSES — Spoken English & Executive Personality Institute 🎓✨

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-Proprietary-blue?style=flat-square)](LICENSE)
[![Google Rating](https://img.shields.io/badge/Google%20Rating-4.9%20%E2%98%85%20(79%2B%20Reviews)-F4B400?style=flat-square&logo=google&logoColor=white)](https://maps.google.com/?q=Smart+Classes+Vivekananda+Road+Sonarpur+700149)
[![Location](https://img.shields.io/badge/Campuses-Sonarpur%2C%20Kolkata-crimson?style=flat-square&logo=googlemaps&logoColor=white)](https://maps.google.com/?q=Smart+Classes+Vivekananda+Road+Sonarpur+700149)
[![Status](https://img.shields.io/badge/Status-Live%20Production-success?style=flat-square)]()

The official responsive web application for **SMART CLASSES** — Kolkata's premier spoken English, stage-first communication, and executive personality coaching institute situated across two campuses in Sonarpur, Kolkata. Founded and mentored personally by **Coach Sourav Chatterjee** (Spiritual Life Coach & Executive Communication Mentor).

Designed with a modern **"Executive Quiet Luxury"** visual language, this web application provides seamless course exploration, verified social proof, interactive campus locators, and automated demo class scheduling.

---

## 🌟 Key Features

- **🏛️ Executive Quiet Luxury Aesthetic**: Sophisticated typography pairing (*Cinzel*, *Cormorant Garamond*, *Inter*), warm champagne gold accents, and subtle glassmorphic surfaces.
- **🌓 Light & Dark Theme Support**: Instant theme switcher with smooth transitions and persistent state stored in `localStorage`.
- **📱 100% Mobile & Touch Optimized**: Fluid typography via CSS `clamp()`, collision-free sticky navigation, swipe-friendly gallery, and responsive modal dialogues.
- **🎙️ Interactive Curriculum Catalog**: Detailed breakdowns for 8 signature coaching programs with interactive syllabus modals and instant course pre-selection for demo booking.
- **📍 Dual-Campus Interactive Locator**: Embedded Google Maps, transit directions from Sonarpur Railway Station, landmark cues, and facility highlights for both Sonarpur branches.
- **⭐ Google-Verified Reviews & Testimonials**: Showcase of genuine student stories from working executives, students, homemakers, and entrepreneurs (4.9★ rating from 79+ reviews).
- **📸 Workshop & Stage Photo Gallery**: Real classroom glimpses highlighting podium practice, group discussions, and 1-on-1 mentorship sessions.
- **📅 Interactive Demo Class Booking Desk**: Streamlined lead capture form connecting prospective students directly to admissions with automatic course and branch mapping.
- **⚡ Quick Access Action Widgets**: Floating WhatsApp direct chat button and one-tap emergency calling for instant query resolution.
- **🔍 SEO & Local Business Structured Data**: Comprehensive OpenGraph tags and schema-compliant JSON-LD (`EducationalOrganization`, `PostalAddress`, `AggregateRating`, and `OpeningHoursSpecification`).
- **🔀 Multi-Route Redirection Stubs**: Clean fallback and redirection pages (`about.html`, `courses.html`, `branches.html`, etc.) routing legacy links into the unified Single Page App.

---

## 📚 Curriculum Offered

| Program | Focus Area | Duration | Key Outcomes |
| :--- | :--- | :--- | :--- |
| **Personality Development** | Executive Leadership | 2–3 Months | Body language, grooming, vocal gravitas & business etiquette |
| **Public Speaking Skills** | Stage Fear Elimination | 2 Months | Podium drills, extempore talks, speech structure & presence |
| **Effective Communication** | Spoken Fluency | 3 Months | Eliminating native thought lag, accent polish & conversations |
| **Confidence Building** | Mindset Conditioning | 2 Months | Overcoming social anxiety, imposter syndrome & hesitation |
| **Leadership & Life Coaching**| Executive Gravitas | 3 Months | Negotiation, boardroom poise, goal setting & team inspiration |
| **Spiritual Guidance** | Inner Clarity & EQ | Integrated | Mindfulness, breathwork, stress release & mental focus |
| **Shadow Healing** | Subconscious Healing | 2 Months | Healing fear of judgment, childhood blocks & self-doubt |
| **Numerology & Name Correction**| Destiny Alignment | 1.5–2 Months| Vibrational name analysis, brand optimization & auspicious cycles|

---

## 📂 Project Structure

```text
Smart Classes-1/
├── index.html                 # Main entry point with React root, SEO meta & JSON-LD schema
├── logo.svg                   # Vector brand identity mark
├── css/
│   └── professional.css       # Complete Executive Design System, tokens, themes & layout styles
├── js/
│   └── react-app.js           # Production React bundled runtime logic
├── src/                       # Modular React source code
│   ├── App.jsx                # Main Application component & view routing state
│   ├── components/
│   │   ├── Header.jsx         # Sticky navigation, logo & theme toggle
│   │   ├── Hero.jsx           # High-impact value proposition & CTA buttons
│   │   ├── AboutSection.jsx   # Mentor profile & institute philosophy
│   │   ├── CoursesSection.jsx # Course card grid & curriculum filter
│   │   ├── CourseModal.jsx    # Pop-up modal displaying full syllabus & outcomes
│   │   ├── WhyUsSection.jsx   # 12-point competitive differentiation grid & comparison
│   │   ├── BranchesSection.jsx# Interactive cards & embedded Google Maps for both campuses
│   │   ├── ReviewsSection.jsx # Student ratings, testimonial cards & Google badge
│   │   ├── GallerySection.jsx # Categorized photo gallery with zoom & lightbox modal
│   │   ├── FaqSection.jsx     # Accordion FAQ answering top student inquiries
│   │   ├── BookingForm.jsx    # Interactive Demo Class booking form with validation
│   │   ├── FloatingWidgets.jsx# Sticky WhatsApp & Phone quick-action dials
│   │   └── Footer.jsx         # Navigation links, contact info & copyright notice
│   └── data/
│       └── instituteData.js   # Centralized data repository (courses, branches, FAQs, reviews)
├── about.html                 # SEO redirect stub -> index.html
├── branches.html              # SEO redirect stub -> index.html
├── contact.html               # SEO redirect stub -> index.html
├── courses.html               # SEO redirect stub -> index.html
├── faq.html                   # SEO redirect stub -> index.html
├── gallery.html               # SEO redirect stub -> index.html
├── reviews.html               # SEO redirect stub -> index.html
├── why-us.html                # SEO redirect stub -> index.html
└── README.md                  # Project documentation (this file)
```

---

## 🛠️ Technology Stack

- **Frontend Core**: [React 18](https://react.dev/) & [ReactDOM 18](https://react.dev/) (browser-native UMD with fallback CDNs)
- **Styling Architecture**: Pure Vanilla CSS (`professional.css`) utilizing:
  - CSS Custom Properties for dynamic Light/Dark palettes
  - CSS Grid & Flexbox for responsive layouts
  - Viewport fluid typography using `clamp()`
  - Glassmorphic backdrop filters and hardware-accelerated animations
- **Typography**:
  - *Cinzel* (Headers & Monogram)
  - *Cormorant Garamond* (Editorial Quotes & Subheadings)
  - *Inter* (UI & Body Text)
- **Maps & External APIs**: Google Maps Embed API, WhatsApp Click-to-Chat protocol, Tel protocol
- **Structured Data**: Schema.org JSON-LD for rich Google Local Pack placement

---

## 🚀 Getting Started

This project is built to run directly on any static web server or modern browser without mandatory build tooling.

### 1. Clone the Repository
```bash
git clone https://github.com/Anand-1002/Smart_Classes-Institute.git
cd Smart_Classes-Institute
```

### 2. Run Locally

You can launch the web application using any of the following lightweight static servers:

#### Using Python 3:
```bash
python -m http.server 3000
```
Then visit: `http://localhost:3000`

#### Using Node.js (`serve` or `npx live-server`):
```bash
npx serve .
# or
npx live-server
```

#### Using VS Code:
- Open the project directory in VS Code.
- Right-click `index.html` and select **"Open with Live Server"**.

---

## 📍 Campus Locations

### 🏫 Campus 1: Sonarpur Main Campus (Baikunthapur)
- **Address**: 1, Flat No. D, Baikunthapur, 352 Vivekananda Road, Opposite Sonarpur Vidyapith School, Sonarpur, Rajpur, Kolkata 700149
- **Landmark**: Opposite Sonarpur Vidyapith School (5 mins by Toto/Auto from Sonarpur Station)
- **Facilities**: Dedicated Podium Stage, Speech Recording & Analysis, Air-Conditioned Micro-Batches

### 🏫 Campus 2: Sonarpur Power House Campus
- **Address**: Sonarpur Power House, beside ICICI Bank, Kolkata, West Bengal 700150
- **Landmark**: Beside ICICI Bank, Power House Crossing
- **Facilities**: MNC Interview Simulation Lab, Acoustic Speech Booth, Discussion Lounge

---

## 📞 Contact & Admissions

- **Founder & Chief Mentor**: Coach Sourav Chatterjee
- **Admissions Helpline / WhatsApp**: [+91 78901 02966](https://wa.me/917890102966)
- **Email**: [suvo.sourav8@gmail.com](mailto:suvo.sourav8@gmail.com)
- **Hours of Operation**: Monday – Sunday: 8:00 AM – 9:00 PM IST

---

## 📄 License & Ownership

Copyright © 2026 **SMART CLASSES — Spoken English & Personality Development Training Institute**. All rights reserved.  
Unauthorized duplication or commercial distribution of course curriculum, branding assets, or media is strictly prohibited.
