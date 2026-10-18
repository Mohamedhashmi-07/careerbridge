import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { ProgressBar } from '../components/ProgressBar';
import {
  Lock,
  Unlock,
  CheckCircle2,
  Printer,
  Sparkles,
  ShieldCheck,
  Building2,
  BookOpen,
  TrendingUp,
  RotateCcw,
  ExternalLink,
  Share2
} from 'lucide-react';

export const DecisionLock = () => {
  const { t } = useLanguage();
  const { decisionPlan, setDecisionPlan, addToast } = useApp();

  const [checklist, setChecklist] = useState(decisionPlan.checklist || {
    c1: true,
    c2: true,
    c3: false,
    c4: false,
    c5: false,
  });

  const [isLocked, setIsLocked] = useState(decisionPlan.isLocked || false);

  const handleToggleCheck = (key) => {
    const updated = { ...checklist, [key]: !checklist[key] };
    setChecklist(updated);
    setDecisionPlan({ ...decisionPlan, checklist: updated });
  };

  const handleLockDecision = () => {
    setIsLocked(true);
    setDecisionPlan({
      ...decisionPlan,
      isLocked: true,
      lockedAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      checklist,
    });

    // Celebratory confetti trigger
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }

    addToast(t('toasts.decisionLocked'), 'success');
  };

  const handleUnlock = () => {
    setIsLocked(false);
    setDecisionPlan({ ...decisionPlan, isLocked: false });
    addToast("Decision plan unlocked for editing.", 'info');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 print:bg-white print:py-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 print:px-0">
        
        {/* Step Progress Tracker (hidden on print) */}
        <div className="print:hidden">
          <ProgressBar currentStep={10} />
        </div>

        {/* Success Banner if already locked */}
        {isLocked && (
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black">
                  {t('decisionLock.lockedSuccessTitle')}
                </h2>
                <p className="text-xs sm:text-sm text-emerald-100 mt-0.5">
                  {t('decisionLock.lockedSuccessDesc')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 print:hidden">
              <button
                onClick={handlePrint}
                className="px-4 py-2.5 rounded-xl bg-white text-emerald-950 font-bold text-xs shadow hover:bg-emerald-50 transition-colors flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4 text-emerald-700" />
                <span>{t('decisionLock.printBtn')}</span>
              </button>
              <button
                onClick={handleUnlock}
                className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors flex items-center gap-1.5"
              >
                <Unlock className="w-4 h-4" />
                <span>{t('decisionLock.editBtn')}</span>
              </button>
            </div>
          </div>
        )}

        {/* Main Document Summary Card */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-card space-y-8 print:border-none print:shadow-none print:p-0">
          
          {/* Header */}
          <div className="border-b border-slate-100 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                  CareerBridge Official Family Decision Summary
                </span>
                {isLocked && (
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Status: Locked & Confirmed
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {t('decisionLock.pageTitle')}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {t('decisionLock.pageSubtitle')}
              </p>
            </div>

            <div className="text-right sm:text-right">
              <span className="text-3xl font-black text-brand-600 block">89%</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Family Consensus</span>
            </div>
          </div>

          {/* Selected Pathway Details Grid */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-500">
              {t('decisionLock.summaryTitle')}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1">
                <div className="flex items-center gap-1.5 text-brand-600 font-bold text-xs mb-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{t('decisionLock.selectedCourse')}</span>
                </div>
                <p className="font-extrabold text-slate-900">Diploma in Computer Engineering</p>
                <p className="text-xs text-slate-500">3 Years • AICTE Approved</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs mb-1">
                  <Building2 className="w-4 h-4" />
                  <span>{t('decisionLock.selectedInstitute')}</span>
                </div>
                <p className="font-extrabold text-slate-900">Central Polytechnic College (Govt)</p>
                <p className="text-xs text-slate-500">Chennai • ₹14,500/year</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1">
                <div className="flex items-center gap-1.5 text-indigo-600 font-bold text-xs mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>{t('decisionLock.selectedCareer')}</span>
                </div>
                <p className="font-extrabold text-slate-900">Junior Developer → Lateral B.E.</p>
                <p className="text-xs text-slate-500">Est. CTC: ₹2.8 - 3.8 LPA</p>
              </div>
            </div>
          </div>

          {/* Key Reasons for Consensus */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900">
              {t('decisionLock.keyReasonsTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
              {t('decisionLock.reasonsList') && Array.isArray(t('decisionLock.reasonsList')) && t('decisionLock.reasonsList').map((reason, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-200/60 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-800 font-medium leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Checklist */}
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {t('decisionLock.checklistTitle')}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Ensure every regulatory prerequisite is officially verified before submitting admission fee.
              </p>
            </div>

            <div className="space-y-2">
              {[
                { key: 'c1', label: t('decisionLock.checks.c1') },
                { key: 'c2', label: t('decisionLock.checks.c2') },
                { key: 'c3', label: t('decisionLock.checks.c3') },
                { key: 'c4', label: t('decisionLock.checks.c4') },
                { key: 'c5', label: t('decisionLock.checks.c5') },
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer text-xs sm:text-sm font-medium text-slate-700"
                >
                  <input
                    type="checkbox"
                    checked={checklist[item.key] || false}
                    onChange={() => handleToggleCheck(item.key)}
                    className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-slate-300"
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Next Action Steps */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900">
              {t('decisionLock.nextStepsTitle')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              {t('decisionLock.steps') && Array.isArray(t('decisionLock.steps')) && t('decisionLock.steps').map((st, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="text-[10px] font-black uppercase text-brand-600 block">
                    {st.step}
                  </span>
                  <p className="font-medium text-slate-800 leading-relaxed">
                    {st.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer (hidden on print) */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 print:hidden">
            <Link
              to="/family-comparison"
              className="text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900"
            >
              ← Re-evaluate Compromise Options
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm transition-colors flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>{t('decisionLock.printBtn')}</span>
              </button>

              {!isLocked ? (
                <button
                  onClick={handleLockDecision}
                  className="px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-sm shadow-md shadow-brand-500/25 transition-all flex items-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>{t('decisionLock.lockBtn')}</span>
                </button>
              ) : (
                <button
                  onClick={handleUnlock}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{t('decisionLock.editBtn')}</span>
                </button>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
