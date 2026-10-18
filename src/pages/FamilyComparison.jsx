import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { ProgressBar } from '../components/ProgressBar';
import {
  Scale,
  CheckCircle2,
  AlertTriangle,
  MinusCircle,
  Sparkles,
  ArrowRight,
  User,
  Users,
  ShieldCheck,
  Building2,
  Lock
} from 'lucide-react';

export const FamilyComparison = () => {
  const { t, getLocalized } = useLanguage();
  const { studentPref, parentPref, matchResults } = useApp();
  const navigate = useNavigate();

  const comparisonRows = [
    {
      factor: t('comparisonPage.factorCourse'),
      student: `${studentPref.preferredCourseCategory?.toUpperCase()} / Coding`,
      parent: parentPref.preferredCourse,
      status: 'partial',
      statusLabel: t('comparisonPage.statusPartial'),
      note: 'Both agree on technical/engineering disciplines.'
    },
    {
      factor: t('comparisonPage.factorLocation'),
      student: studentPref.preferredLocation,
      parent: parentPref.preferredLocation,
      status: 'match',
      statusLabel: t('comparisonPage.statusMatch'),
      note: 'Both prefer institutions within home district (Chennai).'
    },
    {
      factor: t('comparisonPage.factorBudget'),
      student: `₹${Number(studentPref.budget || 50000).toLocaleString('en-IN')}`,
      parent: `₹${Number(parentPref.maxBudget || 60000).toLocaleString('en-IN')}`,
      status: 'match',
      statusLabel: t('comparisonPage.statusMatch'),
      note: 'Student budget falls comfortably inside parent maximum limit.'
    },
    {
      factor: t('comparisonPage.factorInst'),
      student: studentPref.institutionType === 'private' ? 'Private College' : 'Either / Both',
      parent: parentPref.institutionType === 'government' ? 'Government Institute' : 'Recognized',
      status: 'diff',
      statusLabel: t('comparisonPage.statusDiff'),
      note: 'Student values modern labs; Parent values safety, credibility & low fee.'
    },
    {
      factor: t('comparisonPage.factorCareer'),
      student: studentPref.careerInterest,
      parent: parentPref.careerExpectations,
      status: 'partial',
      statusLabel: t('comparisonPage.statusPartial'),
      note: 'Lateral B.E. admission and software roles offer bridge consensus.'
    }
  ];

  const getStatusBadge = (status, label) => {
    if (status === 'match') {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-300">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          {label}
        </span>
      );
    }
    if (status === 'partial') {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-black text-blue-800 bg-blue-100 px-2.5 py-1 rounded-full border border-blue-300">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          {label}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-black text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
        {label}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Step Progress Tracker */}
        <ProgressBar currentStep={9} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-600 block">
            Step 9 of 10 • Family Consensus Alignment
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t('comparisonPage.pageTitle')}
          </h1>
          <p className="text-sm sm:text-base text-slate-500">
            {t('comparisonPage.pageSubtitle')}
          </p>
        </div>

        {/* Side-by-Side Comparison Table Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-card overflow-hidden">
          
          <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-400">
                Multi-Factor Comparison Matrix
              </span>
              <h2 className="text-xl sm:text-2xl font-black mt-1">
                Student Choice vs. Parent Priorities
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-2xl border border-white/10">
              <span className="text-2xl font-black text-emerald-400">{matchResults.overallScore}%</span>
              <span className="text-xs text-slate-300 font-semibold">Consensus Index</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100/75 border-b border-slate-200 text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                  <th className="py-4 px-6">Decision Factor</th>
                  <th className="py-4 px-6 text-blue-700">Student Preference</th>
                  <th className="py-4 px-6 text-indigo-700">Parent Preference</th>
                  <th className="py-4 px-6 text-center">Harmonization Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 whitespace-nowrap">
                      {row.factor}
                    </td>
                    <td className="py-4 px-6 font-medium text-slate-700">
                      {row.student}
                    </td>
                    <td className="py-4 px-6 font-medium text-slate-700">
                      {row.parent}
                    </td>
                    <td className="py-4 px-6 text-center whitespace-nowrap">
                      {getStatusBadge(row.status, row.statusLabel)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommended Compromise Options (A, B, C) */}
        <div className="space-y-4">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-black text-slate-900">
              {t('comparisonPage.compromiseSectionTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {t('comparisonPage.compromiseSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Option A (Recommended) */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-emerald-500 shadow-card flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-sm">
                Recommended
              </div>

              <div>
                <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 block w-max mb-3">
                  {t('comparisonPage.compromiseA.fit')}
                </span>
                <h4 className="text-base sm:text-lg font-black text-slate-900 mb-2">
                  {t('comparisonPage.compromiseA.title')}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t('comparisonPage.compromiseA.desc')}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-900">₹14,500/year</span>
                <Link
                  to="/decision-lock"
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors"
                >
                  Select & Lock →
                </Link>
              </div>
            </div>

            {/* Option B */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-soft hover:shadow-card hover:border-brand-300 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 block w-max mb-3">
                  {t('comparisonPage.compromiseB.fit')}
                </span>
                <h4 className="text-base sm:text-lg font-black text-slate-900 mb-2">
                  {t('comparisonPage.compromiseB.title')}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t('comparisonPage.compromiseB.desc')}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-900">₹35,000/year (Pre-Aid)</span>
                <Link
                  to="/decision-lock"
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  Select & Lock →
                </Link>
              </div>
            </div>

            {/* Option C */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-soft hover:shadow-card hover:border-brand-300 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200 block w-max mb-3">
                  {t('comparisonPage.compromiseC.fit')}
                </span>
                <h4 className="text-base sm:text-lg font-black text-slate-900 mb-2">
                  {t('comparisonPage.compromiseC.title')}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t('comparisonPage.compromiseC.desc')}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-900">₹12,000/year</span>
                <Link
                  to="/decision-lock"
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  Select & Lock →
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA to Decision Lock */}
        <div className="text-center pt-4">
          <Link
            to="/decision-lock"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all"
          >
            <Lock className="w-5 h-5" />
            <span>{t('comparisonPage.proceedToLockBtn')}</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
