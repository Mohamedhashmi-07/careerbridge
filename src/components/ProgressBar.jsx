import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Check, ChevronRight } from 'lucide-react';

export const ProgressBar = ({ currentStep = 1 }) => {
  const { t } = useLanguage();
  const location = useLocation();

  const steps = [
    { num: 1, label: t('dashboard.steps.s1.title') || "Student Profile", path: "/student-preferences" },
    { num: 2, label: t('dashboard.steps.s2.title') || "Parent Form", path: "/parent-preferences" },
    { num: 3, label: t('dashboard.steps.s3.title') || "Analysis", path: "/analysis" },
    { num: 4, label: t('dashboard.steps.s4.title') || "Courses", path: "/courses" },
    { num: 5, label: t('dashboard.steps.s5.title') || "Colleges", path: "/institutions" },
    { num: 6, label: t('dashboard.steps.s6.title') || "Map View", path: "/map" },
    { num: 7, label: t('dashboard.steps.s7.title') || "Skill & Career", path: "/careers" },
    { num: 8, label: t('dashboard.steps.s8.title') || "Scholarships", path: "/scholarships" },
    { num: 9, label: t('comparisonPage.pageTitle') || "Family Comparison", path: "/family-comparison" },
    { num: 10, label: t('decisionLock.pageTitle') || "Decision Lock", path: "/decision-lock" }
  ];

  const progressPercent = Math.min(100, Math.round((currentStep / steps.length) * 100));

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-soft mb-8">
      {/* Top progress header */}
      <div className="flex items-center justify-between mb-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-slate-900">{t('dashboard.journeyTitle')}</span>
          <span className="text-slate-400">•</span>
          <span className="text-brand-600 font-bold">Step {currentStep} of {steps.length}</span>
        </div>
        <div className="font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full text-xs">
          {progressPercent}% Complete
        </div>
      </div>

      {/* Progress Bar Line */}
      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-4">
        <div
          className="bg-gradient-to-r from-brand-600 to-indigo-600 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Horizontal Step Pills (scrollable on mobile) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
        {steps.map((step, idx) => {
          const isDone = currentStep > step.num;
          const isCurrent = currentStep === step.num;

          return (
            <React.Fragment key={step.num}>
              <Link
                to={step.path}
                className={`flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-medium transition-all ${
                  isCurrent
                    ? 'bg-brand-600 text-white font-bold shadow-sm'
                    : isDone
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                    : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600'
                }`}
              >
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                  isCurrent
                    ? 'bg-white text-brand-600 font-bold'
                    : isDone
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'bg-slate-200 text-slate-600'
                }`}>
                  {isDone ? <Check className="w-3 h-3 stroke-[3]" /> : step.num}
                </span>
                <span className="whitespace-nowrap line-clamp-1 max-w-[120px]">{step.label}</span>
              </Link>
              {idx < steps.length - 1 && (
                <ChevronRight className="w-3 h-3 text-slate-300 flex-shrink-0" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
