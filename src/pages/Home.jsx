import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { InteractiveMap } from '../components/InteractiveMap';
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
  Building2,
  BookOpen,
  DollarSign,
  TrendingUp,
  MapPin,
  Cpu,
  Wrench,
  HeartHandshake,
  Sprout,
  HardHat,
  Truck,
  Palette,
  Briefcase,
  PlayCircle
} from 'lucide-react';

export const Home = () => {
  const { t, getLocalized } = useLanguage();
  const { loadDemoData } = useApp();
  const navigate = useNavigate();

  const handleStartAssessment = () => {
    navigate('/student-preferences');
  };

  const handleTryDemo = () => {
    loadDemoData();
    navigate('/analysis');
  };

  const streamIcons = {
    it: <Cpu className="w-6 h-6 text-blue-600" />,
    iti: <Wrench className="w-6 h-6 text-amber-600" />,
    polytechnic: <GraduationCap className="w-6 h-6 text-indigo-600" />,
    healthcare: <HeartHandshake className="w-6 h-6 text-rose-600" />,
    agriculture: <Sprout className="w-6 h-6 text-emerald-600" />,
    manufacturing: <Building2 className="w-6 h-6 text-slate-700" />,
    construction: <HardHat className="w-6 h-6 text-orange-600" />,
    logistics: <Truck className="w-6 h-6 text-cyan-600" />,
    design: <Palette className="w-6 h-6 text-purple-600" />,
    service: <Briefcase className="w-6 h-6 text-teal-600" />
  };

  const streamKeys = [
    'it', 'iti', 'polytechnic', 'healthcare', 'agriculture',
    'manufacturing', 'construction', 'logistics', 'design', 'service'
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* SIH Pill Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              {t('home.badge')}
            </span>
          </div>

          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15]">
              {t('home.heroTitle')}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t('home.heroSubtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={handleStartAssessment}
                className="px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-lg shadow-brand-500/25 hover:shadow-brand-500/35 transition-all flex items-center gap-2"
              >
                <span>{t('home.startAssessmentBtn')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleTryDemo}
                className="px-6 py-3.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold text-base transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>{t('home.tryDemoBtn')}</span>
              </button>

              <a
                href="#how-it-works"
                className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-base transition-colors flex items-center gap-2"
              >
                <PlayCircle className="w-4 h-4 text-slate-500" />
                <span>{t('home.seeHowItWorksBtn')}</span>
              </a>
            </div>

            {/* Micro Stats Strip */}
            <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-slate-100">
              <div>
                <p className="text-2xl font-black text-slate-900">{t('home.stats.studentsCount')}</p>
                <p className="text-xs text-slate-500 font-medium">{t('home.stats.studentsLabel')}</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">{t('home.stats.institutesCount')}</p>
                <p className="text-xs text-slate-500 font-medium">{t('home.stats.institutesLabel')}</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">{t('home.stats.scholarshipsCount')}</p>
                <p className="text-xs text-slate-500 font-medium">{t('home.stats.scholarshipsLabel')}</p>
              </div>
              <div>
                <p className="text-2xl font-black text-emerald-600">{t('home.stats.familySatisfaction')}</p>
                <p className="text-xs text-slate-500 font-medium">{t('home.stats.familySatisfactionLabel')}</p>
              </div>
            </div>

          </div>

          {/* Hero Visual: Connected Decision Pipeline Illustration */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="text-center mb-6">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-400 block mb-1">
                  Connected Architecture
                </span>
                <h3 className="text-xl sm:text-2xl font-black">
                  Course → Learning → Career → Jobs → Financial Support
                </h3>
              </div>

              {/* Connected Pipeline Flow Grid */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative z-10">
                {/* 1. Student + Parent Inputs */}
                <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                    <Users className="w-4 h-4" />
                    <span>Inputs</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700">
                    <p className="text-xs font-bold text-white">{t('home.heroGraphic.studentPref')}</p>
                    <p className="text-[11px] text-slate-400">{t('home.heroGraphic.studentSub')}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700">
                    <p className="text-xs font-bold text-white">{t('home.heroGraphic.parentPref')}</p>
                    <p className="text-[11px] text-slate-400">{t('home.heroGraphic.parentSub')}</p>
                  </div>
                </div>

                {/* 2. AI Match Engine */}
                <div className="p-4 rounded-2xl bg-brand-950/80 border border-brand-800 flex flex-col justify-center items-center text-center space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold text-brand-300">
                    {t('home.heroGraphic.aiMatch')}
                  </span>
                  <span className="text-2xl font-black text-white">88%</span>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Harmonized
                  </span>
                </div>

                {/* 3. Course & College */}
                <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
                    <GraduationCap className="w-4 h-4" />
                    <span>Pathways</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700">
                    <p className="text-xs font-bold text-white">{t('home.heroGraphic.courseCard')}</p>
                    <p className="text-[11px] text-emerald-400 font-semibold">92% Skill Match</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700">
                    <p className="text-xs font-bold text-white">{t('home.heroGraphic.collegeCard')}</p>
                    <p className="text-[11px] text-slate-400">₹14,500/yr • 8.5 km</p>
                  </div>
                </div>

                {/* 4. Career & Jobs */}
                <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>Progression</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700">
                    <p className="text-xs font-bold text-white">{t('home.heroGraphic.careerCard')}</p>
                    <p className="text-[11px] text-slate-400">₹2.8 – 3.8 LPA</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700">
                    <p className="text-xs font-bold text-white">Lateral B.E. Entry</p>
                    <p className="text-[11px] text-slate-400">Direct 2nd Year CSE</p>
                  </div>
                </div>

                {/* 5. Scholarship & Aid */}
                <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80 space-y-2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-2">
                      <DollarSign className="w-4 h-4" />
                      <span>Support</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700">
                      <p className="text-xs font-bold text-white">{t('home.heroGraphic.aidCard')}</p>
                      <p className="text-[11px] text-emerald-400">100% Tuition Waiver</p>
                    </div>
                  </div>
                  <Link
                    to="/analysis"
                    className="w-full text-center py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs transition-colors"
                  >
                    Inspect Plan →
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Section 1: How CareerBridge Works (5 Clean Cards) */}
      <section id="how-it-works" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-600">
              Structured Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              {t('home.howItWorksTitle')}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              {t('home.howItWorksSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {t('home.steps') && Array.isArray(t('home.steps')) && t('home.steps').map((step, idx) => (
              <div
                key={step.num}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-brand-600/30 block mb-3">
                    {step.num}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-brand-600">
                  <span>Step {idx + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 2: Explore Vocational Pathways (10 Streams) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-600">
              Curated Streams
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              {t('home.streamsTitle')}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              {t('home.streamsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {streamKeys.map((key) => {
              const stream = t(`home.streams.${key}`) || {};
              return (
                <Link
                  key={key}
                  to={`/courses`}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-brand-400 bg-slate-50/50 hover:bg-white hover:shadow-card transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                    {streamIcons[key]}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                    {stream.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {stream.desc}
                  </p>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* Section 3: Why Families Choose CareerBridge */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-600">
              Core Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              {t('home.whyTitle')}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              {t('home.whySubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t('home.whyPoints') && Array.isArray(t('home.whyPoints')) && t('home.whyPoints').map((pt, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm mb-4 border border-emerald-200">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {pt.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 4: Built for Students + Parents (Split Visual) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              {t('home.splitTitle')}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
            
            {/* Student Side */}
            <div className="md:col-span-5 bg-gradient-to-br from-blue-50 to-indigo-50/60 p-6 sm:p-8 rounded-3xl border border-blue-200 shadow-soft">
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                Student Perspective
              </span>
              <p className="text-base sm:text-lg font-bold text-slate-900 mt-4 italic leading-relaxed">
                {t('home.studentQuote')}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span>Priority: Coding, Passion, Hands-on</span>
              </div>
            </div>

            {/* Middle Bridge Match Badge */}
            <div className="md:col-span-1 flex justify-center py-2">
              <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center font-black text-xs shadow-glow">
                VS
              </div>
            </div>

            {/* Parent Side */}
            <div className="md:col-span-5 bg-gradient-to-br from-emerald-50 to-teal-50/60 p-6 sm:p-8 rounded-3xl border border-emerald-200 shadow-soft">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Parent Perspective
              </span>
              <p className="text-base sm:text-lg font-bold text-slate-900 mt-4 italic leading-relaxed">
                {t('home.parentQuote')}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span>Priority: Budget (&lt; ₹60k), Safe Campus, Placement</span>
              </div>
            </div>

          </div>

          {/* Consensus Result Card */}
          <div className="max-w-3xl mx-auto mt-8 p-6 rounded-2xl bg-slate-900 text-white text-center space-y-2 border border-slate-800 shadow-card">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-400">
              {t('home.bridgeMatchTitle')}
            </span>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {t('home.bridgeMatchDesc')}
            </p>
          </div>

        </div>
      </section>

      {/* Section 5: Find Institutions Near You (Interactive Map Section) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-600">
              Geographic Exploration
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              {t('home.mapSectionTitle')}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              {t('home.mapSectionSubtitle')}
            </p>
          </div>

          <InteractiveMap />

          <div className="text-center mt-8">
            <Link
              to="/institutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-colors"
            >
              <Building2 className="w-4 h-4 text-brand-400" />
              <span>{t('home.exploreMapBtn')}</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Section 6: Financial Support & Scholarships Preview */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-600">
              Financial Inclusion
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              {t('home.finTitle')}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              {t('home.finSubtitle')}
            </p>
            <div className="p-3 bg-amber-50 text-amber-900 text-xs font-semibold rounded-xl border border-amber-200 max-w-xl mx-auto">
              {t('home.finNotice')}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-card transition-all">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                Government Aid
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-3 mb-1">
                Post-Matric Scholarship
              </h4>
              <p className="text-xs text-slate-600 mb-4">
                Full tuition fee waiver + monthly stipend for eligible polytechnic students.
              </p>
              <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 block text-center">
                Potentially Eligible
              </span>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-card transition-all">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-purple-800">
                Girl Student Aid
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-3 mb-1">
                AICTE Pragati Scheme
              </h4>
              <p className="text-xs text-slate-600 mb-4">
                ₹50,000 per annum for all 3 years of diploma study in technical disciplines.
              </p>
              <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 block text-center">
                Potentially Eligible
              </span>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-card transition-all">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                Education Loan
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-3 mb-1">
                Vidya Lakshmi Portal
              </h4>
              <p className="text-xs text-slate-600 mb-4">
                Collateral-free subsidized vocational loan up to ₹4,00,000 with interest subsidy.
              </p>
              <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 block text-center">
                Potentially Eligible
              </span>
            </div>

          </div>

          <div className="text-center mt-10">
            <Link
              to="/scholarships"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700"
            >
              <span>Explore All Financial Aid Schemes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Section 7: Final CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-brand-900 via-slate-900 to-indigo-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
            Smart India Hackathon 2024
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {t('home.ctaTitle')}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            {t('home.ctaSubtitle')}
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={handleStartAssessment}
              className="px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-extrabold text-base shadow-xl shadow-brand-500/30 transition-all flex items-center gap-2"
            >
              <span>{t('home.ctaBtn')}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleTryDemo}
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-base transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{t('home.tryDemoBtn')}</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
