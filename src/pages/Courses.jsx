import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { coursesData } from '../data/courses';
import { ProgressBar } from '../components/ProgressBar';
import {
  BookOpen,
  Sparkles,
  ArrowRight,
  Clock,
  GraduationCap,
  IndianRupee,
  Building2,
  TrendingUp,
  Search,
  Filter
} from 'lucide-react';

export const Courses = () => {
  const { t, getLocalized } = useLanguage();
  const { setSelectedCourseId } = useApp();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCourses = coursesData.filter((c) => {
    const name = getLocalized(c.name).toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchesSearch = name.includes(query);
    const matchesCat = selectedCategory === 'all' || c.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleViewCourse = (id) => {
    setSelectedCourseId(id);
    navigate(`/courses/${id}`);
  };

  const handleFindInstitutions = (id) => {
    setSelectedCourseId(id);
    navigate(`/institutions?course=${id}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Step Progress Tracker */}
        <ProgressBar currentStep={4} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-600 block">
            Step 4 of 8 • Personalized Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t('coursesPage.pageTitle')}
          </h1>
          <p className="text-sm sm:text-base text-slate-500">
            {t('coursesPage.pageSubtitle')}
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-soft flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('coursesPage.searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t('common.all')}
            </button>
            <button
              onClick={() => setSelectedCategory('it')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'it'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              IT & Digital
            </button>
            <button
              onClick={() => setSelectedCategory('iti')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'iti'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              ITI Trades
            </button>
            <button
              onClick={() => setSelectedCategory('polytechnic')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'polytechnic'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Polytechnic
            </button>
            <button
              onClick={() => setSelectedCategory('healthcare')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'healthcare'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Healthcare
            </button>
          </div>

        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-soft hover:shadow-card hover:border-brand-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Card Top Row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {course.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-2">
                      {getLocalized(course.name)}
                    </h3>
                  </div>

                  {/* Match Badge */}
                  <div className="flex items-center gap-1 px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-black text-sm flex-shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{course.matchPercentage}% {t('common.match')}</span>
                  </div>
                </div>

                {/* Why It Matches Box */}
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-600 mb-5 leading-relaxed">
                  <span className="font-bold text-slate-800 block mb-1">
                    {t('coursesPage.whyItMatches')}
                  </span>
                  <p>{getLocalized(course.whyMatches)}</p>
                </div>

                {/* Key Course Metrics */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-xs mb-5">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">{t('common.duration')}</span>
                    <span className="font-bold text-slate-800">{getLocalized(course.duration)}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">{t('common.estimatedFee')}</span>
                    <span className="font-bold text-slate-800">₹{course.estimatedFee.toLocaleString('en-IN')}/yr</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Institutions</span>
                    <span className="font-bold text-brand-600">{course.institutionCount} offering</span>
                  </div>
                </div>

                {/* Eligibility Line */}
                <div className="text-xs text-slate-500 mb-6">
                  <span className="font-bold text-slate-700">{t('common.eligibility')}: </span>
                  <span>{getLocalized(course.eligibility)}</span>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleViewCourse(course.id)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm text-center shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{t('coursesPage.viewCourseBtn')}</span>
                </button>

                <button
                  onClick={() => handleFindInstitutions(course.id)}
                  className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5"
                >
                  <Building2 className="w-4 h-4 text-slate-500" />
                  <span>{t('coursesPage.findInstitutionsBtn')}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
