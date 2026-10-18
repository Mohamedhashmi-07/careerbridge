import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { scholarshipsData } from '../data/scholarships';
import { ProgressBar } from '../components/ProgressBar';
import {
  DollarSign,
  ShieldCheck,
  Calendar,
  FileText,
  ExternalLink,
  ArrowRight,
  Filter,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const Scholarships = () => {
  const { t, getLocalized } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredScholarships = scholarshipsData.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Step Progress Tracker */}
        <ProgressBar currentStep={8} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-600 block">
            Step 8 of 8 • Financial Empowerment
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t('scholarshipsPage.pageTitle')}
          </h1>
          <p className="text-sm sm:text-base text-slate-500">
            {t('scholarshipsPage.pageSubtitle')}
          </p>
        </div>

        {/* Trust Disclaimer Notice */}
        <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200 text-amber-950 text-xs sm:text-sm font-medium leading-relaxed max-w-4xl mx-auto flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <span>{t('scholarshipsPage.disclaimer')}</span>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-2 rounded-xl font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-brand-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t('scholarshipsPage.categories.all')}
          </button>
          <button
            onClick={() => setActiveCategory('scholarships')}
            className={`px-3.5 py-2 rounded-xl font-bold transition-all ${
              activeCategory === 'scholarships'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t('scholarshipsPage.categories.scholarships')}
          </button>
          <button
            onClick={() => setActiveCategory('schemes')}
            className={`px-3.5 py-2 rounded-xl font-bold transition-all ${
              activeCategory === 'schemes'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t('scholarshipsPage.categories.schemes')}
          </button>
          <button
            onClick={() => setActiveCategory('loans')}
            className={`px-3.5 py-2 rounded-xl font-bold transition-all ${
              activeCategory === 'loans'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t('scholarshipsPage.categories.loans')}
          </button>
        </div>

        {/* Scholarships Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredScholarships.map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {getLocalized(scheme.categoryLabel)}
                    </span>
                    <h3 className="text-lg font-black text-slate-900 mt-2">
                      {getLocalized(scheme.name)}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {t('scholarshipsPage.providerLabel')} <span className="font-semibold text-slate-700">{getLocalized(scheme.provider)}</span>
                    </p>
                  </div>
                </div>

                {/* Amount / Benefit Highlight Banner */}
                <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-900 font-extrabold text-sm mb-4">
                  {getLocalized(scheme.amount)}
                </div>

                {/* Potentially Eligible Badge */}
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-600 space-y-1 mb-5">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{t('scholarshipsPage.eligibleBadge')}</span>
                  </div>
                  <p className="leading-relaxed">
                    {getLocalized(scheme.potentialEligibility)}
                  </p>
                </div>

                {/* Criteria Rows */}
                <div className="space-y-2 text-xs py-3 border-y border-slate-100 mb-5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">{t('scholarshipsPage.applicableCourse')}:</span>
                    <span className="font-bold text-slate-800 text-right">{getLocalized(scheme.applicableCourse)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{t('scholarshipsPage.deadlineLabel')}:</span>
                    <span className="font-bold text-slate-800">{getLocalized(scheme.deadline)}</span>
                  </div>
                </div>

                {/* Required Documents */}
                <div className="mb-5">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    {t('scholarshipsPage.requiredDocs')}
                  </span>
                  <div className="space-y-1.5">
                    {scheme.requiredDocuments.map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <FileText className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        <span>{getLocalized(doc)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px]">
                  Verified Demo Record • {scheme.lastVerified}
                </span>
                <a
                  href="https://scholarships.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{t('common.officialWebsite')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA to Family Comparison */}
        <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-card">
          <div>
            <h3 className="text-lg font-black">Ready to synthesize Student & Parent Perspectives?</h3>
            <p className="text-xs text-slate-300 mt-1">Review the side-by-side consensus matrix and recommended compromises.</p>
          </div>
          <Link
            to="/family-comparison"
            className="px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-xs sm:text-sm shadow-md transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <span>Proceed to Family Comparison Matrix</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
