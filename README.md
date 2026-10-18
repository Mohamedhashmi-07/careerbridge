# CareerBridge 🎓🌉✨

> **AI-Enabled Career Counselling & Family Decision-Support Platform for Vocational Education**  
> *“Helping Students and Families Make Better Career Decisions Together.”*  
> **Smart India Hackathon (SIH) Prototype**

[![React](https://img.shields.io/badge/React-19.2-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![Languages](https://img.shields.io/badge/Languages-English%20%7C%20தமிழ்%20%7C%20हिन्दी-green.svg)](#multilingual-support)

---

## 📌 Overview

**CareerBridge** is an explainable decision-support platform designed to bridge the communication and perspective gap between aspiring students and protective parents when choosing vocational and technical education pathways.

Instead of generic black-box recommendations, CareerBridge computes an **explainable multi-factor harmony index** and maps out a complete, unbroken trajectory:
```text
Student + Parent Aspirations
           ↓
   Explainable AI Match (88%)
           ↓
    Course Selection
           ↓
   Personalized Skill Gap
           ↓
  Accredited Institutes & Map
           ↓
  6-Stage Career Progression
           ↓
   Realistic Job Market
           ↓
Scholarships & Financial Aid
           ↓
  Family Comparison Matrix
           ↓
    Decision Lock 🎉
```

---

## 🌐 100% Comprehensive Multilingual Support

CareerBridge features a centralized localization architecture with zero mixed-language fallback:
- **English** (Default)
- **Tamil (தமிழ்)**
- **Hindi (हिन्दी)**

Every single user-facing element—from navbar, hero, cards, and forms to factor breakdowns, AI explanations, skill-gap roadmaps, map markers, job cards, scholarship rules, and the final decision summary—dynamically adapts to the chosen language.

---

## 🚀 Key Features

1. **Collaborative 10-Step Journey:**
   - Sequential progression guiding families from individual profiles to an aligned, locked decision plan.
2. **Explainable Matching Engine:**
   - Transparent rule-based simulation computing compatibility across Course (25%), Skills (20%), Budget (20%), Location (15%), Institution Type (10%), and Career Goals (10%).
   - Displays factor-level scores, **Areas of Agreement ($\checkmark$)**, **Areas of Difference ($\triangle$)**, and natural language synthesis.
3. **Personalized Skill Gap Analysis:**
   - Evaluates student background vs. curriculum prerequisites.
   - Computes **Curriculum Readiness Score** (e.g. 78%) and provides a tailored 2-week preparation roadmap before classes start.
4. **Interactive Simulated Vector Map:**
   - Visual map of technical institutions across Tamil Nadu with distance markers, popup cards, and filter toggles.
5. **Realistic Job Market & Progression:**
   - 6-stage roadmap (Diploma $\to$ Apprenticeship $\to$ Junior Technician $\to$ Specialization $\to$ Lateral B.E. Entry $\to$ Lead Technician).
   - Real-world sample entry-level jobs with salary ranges and skill tags.
6. **Financial Support & Scholarships:**
   - Post-Matric Scholarships, AICTE Pragati, Vidya Lakshmi Subsidized Loans, and fee waivers with *"Potentially Eligible"* guidance.
7. **Family Comparison Matrix & Compromise Options:**
   - Side-by-side factor comparison with Match / Partial / Difference badges.
   - Generates 3 balanced compromise options (Option A: Govt Polytechnic 89%, Option B: Private with Aid 84%, Option C: Alternative Diploma 81%).
8. **Decision Lock & Print Summary:**
   - Verification checklist, action steps, confetti celebration animation, and printable PDF document.
9. **One-Click Live Demo Mode:**
   - Fast-track evaluation button for hackathon judges to immediately load sample student/parent profiles with an 88% compatibility match.

---

## 🛠️ Tech Stack

- **Framework:** React 19 (Vite)
- **Routing:** React Router v7
- **Styling:** Tailwind CSS (Custom EdTech/GovTech design system)
- **Icons:** Lucide React
- **Celebration Effects:** Canvas Confetti
- **State Management:** React Context API + LocalStorage persistence
- **Architecture:** 100% Frontend-only SPA (No backend or external API dependency)

---

## 📂 Project Structure

```text
careerbridge4/
├── public/
│   └── favicon.svg              # Custom graduation cap + bridge + spark icon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Multilingual header with demo trigger & auth menu
│   │   ├── Footer.jsx           # Trust statement, disclaimers, and links
│   │   ├── ProgressBar.jsx      # 10-step sequential journey tracker
│   │   ├── MatchScoreCircle.jsx # Animated circular SVG score indicator
│   │   ├── InteractiveMap.jsx   # Interactive SVG vector map & filters
│   │   └── Toast.jsx            # Floating notification alerts
│   ├── context/
│   │   ├── LanguageContext.jsx  # 3-language provider (en, ta, hi)
│   │   └── AppContext.jsx       # Auth, preferences, bookmarks, and decision plan
│   ├── data/
│   │   ├── courses.js           # Vocational courses & skill gap data
│   │   ├── institutions.js      # Sample polytechnics & ITIs with coordinates
│   │   ├── scholarships.js      # Government aid, loans & fee waivers
│   │   └── careers.js           # 6-stage career roadmap & realistic job cards
│   ├── locales/
│   │   ├── en.js                # Complete English translations
│   │   ├── ta.js                # Complete Tamil translations
│   │   └── hi.js                # Complete Hindi translations
│   ├── pages/
│   │   ├── Home.jsx             # Landing page with 7 comprehensive sections
│   │   ├── Login.jsx            # Simulated login with Demo User button
│   │   ├── Signup.jsx           # Simulated signup
│   │   ├── Dashboard.jsx        # Student & family progress overview
│   │   ├── StudentPreferences.jsx # Student qualifications & skills form
│   │   ├── ParentPreferences.jsx  # Parent budget & safety form
│   │   ├── PreferenceAnalysis.jsx # Explainable 88% match analysis
│   │   ├── Courses.jsx          # Filterable vocational course catalog
│   │   ├── CourseDetails.jsx    # Curriculum & skill gap analyzer
│   │   ├── Institutions.jsx     # Institutional directory & tabs
│   │   ├── InstitutionDetails.jsx # Campus facilities & verification disclaimer
│   │   ├── MapPage.jsx          # Dedicated interactive map exploration
│   │   ├── CareerPath.jsx       # Visual timeline & job cards
│   │   ├── Scholarships.jsx     # Financial support discovery
│   │   ├── FamilyComparison.jsx # Consensus matrix & compromise options
│   │   └── DecisionLock.jsx     # Final lock, checklist & printable summary
│   ├── utils/
│   │   └── matching.js          # Rule-based explainable AI matching engine
│   ├── App.jsx                  # Route definitions & layout wrapper
│   ├── index.css                # Tailwind directives & typography
│   └── main.jsx                 # React root entry point
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## ⚡ Getting Started Locally

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Mohamedhashmi-07/careerbridge.git

# Navigate to project directory
cd careerbridge

# Install dependencies
npm install

# Start development server
npm run dev
```

Open your browser at `http://127.0.0.1:5173/` to explore CareerBridge!

---

## 🏆 Smart India Hackathon Note

CareerBridge is built as a decision-support prototype. Admission cut-offs, fee concession rules, and scholarship disbursement dates must be officially confirmed through respective institutional authorities (such as DOTE Tamil Nadu or the National Scholarship Portal).
