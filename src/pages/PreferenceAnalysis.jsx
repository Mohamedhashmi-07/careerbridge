import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { MatchScoreCircle } from '../components/MatchScoreCircle';
import { ProgressBar } from '../components/ProgressBar';
import {
  Sparkles,
  User,
  Users,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Scale,
  BookOpen,
  MapPin,
  IndianRupee,
  Building2,
  Briefcase
} from 'lucide-react';

export const PreferenceAnalysis = () => {
  const { t, getLocalized } = useLanguage();
  const { studentPref, parentPref, matchResults } = useApp();
  const navigate = useNavigate();

  const breakdownList = [
    { label: t('analysis.courseMatch'), score: matchResults.breakdown.course },
    { label: t('analysis.locationMatch'), score: matchResults.breakdown.location },
    { label: t('analysis.budgetMatch'), score: matchResults.breakdown.budget },
    { label: t('analysis.institutionMatch'), score: matchResults.breakdown.institution },
    { label: t('analysis.careerMatch'), score: matchResults.breakdown.career }
  ];

  const agreements = getLocalized(matchResults.agreements) || [];
  const differences = getLocalized(matchResults.differences) || [];
  const explanation = getLocalized(matchResults.explanation) || '';

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Step Progress Tracker */}
        <ProgressBar currentStep={3} />

        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-300 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t('analysis.demoNotice')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t('analysis.pageTitle')}
          </h1>
          <p className="text-sm sm:text-base text-slate-500">
            {t('analysis.pageSubtitle')}
          </p>
        </div>

        {/* Side-by-Side Comparison Columns (Student vs Parent) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Student Profile Card */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-blue-200 shadow-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 pointer-events-none" />
            
            <div className="flex items-center gap-2.5 mb-5 relative z-10">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900">
                  {t('analysis.studentColumn')}
                </h3>
                <p className="text-xs text-slate-500">{studentPref.name}</p>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Preferred Stream:</span>
                <span className="font-bold text-slate-800 uppercase">{studentPref.preferredCourseCategory}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Preferred City:</span>
                <span className="font-bold text-slate-800">{studentPref.preferredLocation}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Annual Budget:</span>
                <span className="font-bold text-slate-800">₹{Number(studentPref.budget || 50000).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Institution Choice:</span>
                <span className="font-bold text-slate-800 capitalize">{studentPref.institutionType}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Career Aspiration:</span>
                <span className="font-bold text-brand-600 capitalize">{studentPref.careerInterest}</span>
              </div>
              <div className="pt-2">
                <span className="text-slate-500 font-medium block mb-1.5">Identified Skills:</span>
                <div className="flex flex-wrap gap-1.5">
                  {(studentPref.skills || []).map((sk) => (
                    <span key={sk} className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-xs font-semibold">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Parent Profile Card */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-indigo-200 shadow-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -z-0 pointer-events-none" />
            
            <div className="flex items-center gap-2.5 mb-5 relative z-10">
              <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900">
                  {t('analysis.parentColumn')}
                </h3>
                <p className="text-xs text-slate-500">{parentPref.parentName} ({parentPref.relationship})</p>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Preferred Course:</span>
                <span className="font-bold text-slate-800 truncate max-w-[200px]">{parentPref.preferredCourse}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Alternative Course:</span>
                <span className="font-bold text-slate-800 truncate max-w-[200px]">{parentPref.alternativeCourse || "Flexible"}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Preferred Area:</span>
                <span className="font-bold text-slate-800">{parentPref.preferredLocation}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Max Annual Budget:</span>
                <span className="font-bold text-emerald-700">₹{Number(parentPref.maxBudget || 60000).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Institution Choice:</span>
                <span className="font-bold text-slate-800 capitalize">{parentPref.institutionType}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Career Expectation:</span>
                <span className="font-bold text-indigo-600 capitalize">{parentPref.careerExpectations}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Overall Compatibility & Factor Breakdown Box */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Circular Progress & Score */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-50/80 rounded-2xl border border-slate-100 text-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-3">
                {t('analysis.overallTitle')}
              </span>
              <MatchScoreCircle score={matchResults.overallScore} size={170} strokeWidth={16} />
              <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                Calculated across 6 weighted preference dimensions.
              </p>
            </div>

            {/* Breakdown Bars */}
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
                {t('analysis.breakdownTitle')}
              </h3>

              <div className="space-y-3">
                {breakdownList.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>{item.label}</span>
                      <span className="text-brand-600">{item.score}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          item.score >= 85 ? 'bg-emerald-500' : item.score >= 75 ? 'bg-brand-500' : 'bg-amber-500'
                        }`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Areas of Agreement & Areas of Difference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Agreements (✓) */}
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-3xl p-6 sm:p-7 shadow-soft">
            <div className="flex items-center gap-2 mb-4 text-emerald-900 font-extrabold text-base">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>{t('analysis.agreementsTitle')}</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              {Array.isArray(agreements) && agreements.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-black mt-0.5">✓</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Differences / Trade-offs (⚠) */}
          <div className="bg-amber-50/60 border border-amber-200 rounded-3xl p-6 sm:p-7 shadow-soft">
            <div className="flex items-center gap-2 mb-4 text-amber-950 font-extrabold text-base">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>{t('analysis.differencesTitle')}</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              {Array.isArray(differences) && differences.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-amber-600 font-black mt-0.5">⚠</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Explainable AI Match Insight Narrative Box */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-brand-400 font-extrabold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>{t('analysis.explanationTitle')}</span>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {explanation}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
          <Link
            to="/family-comparison"
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-sm transition-colors flex items-center gap-2 shadow-sm"
          >
            <Scale className="w-4 h-4 text-slate-500" />
            <span>{t('analysis.compareBtn')}</span>
          </Link>

          <Link
            to="/courses"
            className="px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md shadow-brand-500/25 transition-all flex items-center gap-2"
          >
            <span>{t('analysis.viewCoursesBtn')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
