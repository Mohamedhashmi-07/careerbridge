import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { MatchScoreCircle } from '../components/MatchScoreCircle';
import { ProgressBar } from '../components/ProgressBar';
import {
  User,
  Users,
  Compass,
  Building2,
  BookOpen,
  DollarSign,
  TrendingUp,
  CheckCircle2,
  Lock,
  ArrowRight,
  RotateCcw,
  Sparkles,
  MapPin,
  ExternalLink
} from 'lucide-react';

export const Dashboard = () => {
  const { t } = useLanguage();
  const { user, studentPref, parentPref, matchResults, savedInstitutions, decisionPlan, resetAllData } = useApp();
  const navigate = useNavigate();

  const journeySteps = [
    { num: 1, title: t('dashboard.steps.s1.title'), path: '/student-preferences', status: 'Completed', icon: <User className="w-5 h-5 text-blue-600" /> },
    { num: 2, title: t('dashboard.steps.s2.title'), path: '/parent-preferences', status: 'Completed', icon: <Users className="w-5 h-5 text-indigo-600" /> },
    { num: 3, title: t('dashboard.steps.s3.title'), path: '/analysis', status: `${matchResults.overallScore}% Match`, icon: <Sparkles className="w-5 h-5 text-amber-600" /> },
    { num: 4, title: t('dashboard.steps.s4.title'), path: '/courses', status: 'Explored', icon: <BookOpen className="w-5 h-5 text-emerald-600" /> },
    { num: 5, title: t('dashboard.steps.s5.title'), path: '/institutions', status: `${savedInstitutions.length} Saved`, icon: <Building2 className="w-5 h-5 text-teal-600" /> },
    { num: 6, title: t('dashboard.steps.s6.title'), path: '/map', status: 'Available', icon: <MapPin className="w-5 h-5 text-rose-600" /> },
    { num: 7, title: t('dashboard.steps.s7.title'), path: '/careers', status: 'Ready', icon: <TrendingUp className="w-5 h-5 text-purple-600" /> },
    { num: 8, title: t('dashboard.steps.s8.title'), path: '/scholarships', status: '4 Schemes', icon: <DollarSign className="w-5 h-5 text-amber-600" /> },
    { num: 9, title: t('dashboard.steps.s9.title'), path: '/decision-lock', status: decisionPlan.isLocked ? 'Locked' : 'Pending', icon: <Lock className="w-5 h-5 text-brand-600" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top greeting banner */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {t('dashboard.greeting')}
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              {t('dashboard.greetingSub')}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/student-preferences"
              className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2"
            >
              <span>{t('dashboard.continueAssessment')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={resetAllData}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              title={t('dashboard.resetData')}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Journey Progress Bar */}
        <ProgressBar currentStep={3} />

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Assessment Progress */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
              {t('dashboard.assessmentProgress')}
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-3xl font-black text-slate-900">80%</span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                On Track
              </span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full" style={{ width: '80%' }} />
            </div>
          </div>

          {/* Compatibility Score */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
              {t('dashboard.overallScore')}
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-3xl font-black text-brand-600">
                {matchResults.overallScore}%
              </span>
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                High Harmony
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-2 line-clamp-1">
              Student ({studentPref.preferredLocation}) + Parent Budget
            </p>
          </div>

          {/* Saved Colleges */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
              {t('dashboard.savedCount')}
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-3xl font-black text-slate-900">
                {savedInstitutions.length}
              </span>
              <Link to="/institutions" className="text-xs font-bold text-brand-600 hover:underline">
                View List →
              </Link>
            </div>
            <p className="text-xs text-slate-500 mt-2 line-clamp-1">
              Central Polytechnic, Chennai
            </p>
          </div>

          {/* Decision Status */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
              {t('dashboard.decisionStatus')}
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-lg font-black text-slate-900">
                {decisionPlan.isLocked ? t('dashboard.locked') : t('dashboard.inProgress')}
              </span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                decisionPlan.isLocked
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-amber-100 text-amber-800'
              }`}>
                {decisionPlan.isLocked ? 'Secured' : 'Step 9'}
              </span>
            </div>
            <Link to="/decision-lock" className="text-xs font-bold text-brand-600 hover:underline block mt-2">
              {decisionPlan.isLocked ? 'View Final Plan →' : 'Lock Decision →'}
            </Link>
          </div>

        </div>

        {/* Career Journey Sequential Cards Grid */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-soft space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight">
                {t('dashboard.journeyTitle')}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                {t('dashboard.journeySubtitle')}
              </p>
            </div>
            <Link
              to="/analysis"
              className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
            >
              <span>{t('dashboard.revisitAnalysis')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {journeySteps.map((step) => (
              <Link
                key={step.num}
                to={step.path}
                className="p-5 rounded-2xl border border-slate-200 hover:border-brand-500 hover:shadow-card bg-slate-50/50 hover:bg-white transition-all flex items-start justify-between group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">
                      Step {step.num}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {step.title}
                    </h3>
                    <span className="inline-block mt-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {step.status}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
