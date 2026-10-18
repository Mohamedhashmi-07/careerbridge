import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { coursesData } from '../data/courses';
import { institutionsData } from '../data/institutions';
import { ProgressBar } from '../components/ProgressBar';
import {
  BookOpen,
  Clock,
  GraduationCap,
  IndianRupee,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Building2,
  ArrowRight,
  ShieldCheck,
  ChevronLeft
} from 'lucide-react';

export const CourseDetails = () => {
  const { id } = useParams();
  const { t, getLocalized } = useLanguage();
  const { setSelectedCourseId, setSelectedInstitutionId } = useApp();
  const navigate = useNavigate();

  const course = coursesData.find((c) => c.id === id) || coursesData[0];
  const offeringInstitutes = institutionsData.filter((inst) => inst.courses.includes(course.id));

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb / Back */}
        <div className="flex items-center justify-between">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-600 hover:text-brand-600 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{t('common.back')} to Courses</span>
          </Link>
          <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
            {course.matchPercentage}% Compatibility Fit
          </span>
        </div>

        {/* Top Header Card */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-card space-y-4">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              {course.category}
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              AICTE Approved Curriculum
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {getLocalized(course.name)}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            {getLocalized(course.overview)}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">{t('common.duration')}</span>
              <span className="text-sm font-bold text-slate-900">{getLocalized(course.duration)}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">{t('common.estimatedFee')}</span>
              <span className="text-sm font-bold text-slate-900">₹{course.estimatedFee.toLocaleString('en-IN')}/year</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">{t('common.eligibility')}</span>
              <span className="text-xs font-bold text-slate-900 line-clamp-1">{getLocalized(course.eligibility)}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Affiliated Colleges</span>
              <span className="text-sm font-bold text-brand-600">{offeringInstitutes.length} in Tamil Nadu</span>
            </div>
          </div>
        </div>

        {/* Personalized Skill Gap Module */}
        {course.skillGap && (
          <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-brand-950 text-white p-6 sm:p-9 rounded-3xl shadow-card border border-indigo-900/50 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-400 block mb-1">
                  AI Skill Readiness Analyzer
                </span>
                <h3 className="text-xl sm:text-2xl font-black">
                  {t('courseDetails.skillGapTitle')}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  {t('courseDetails.skillGapSubtitle')}
                </p>
              </div>

              {/* Readiness Score Ring/Badge */}
              <div className="flex items-center gap-3 bg-white/10 px-4 py-2.5 rounded-2xl border border-white/10 flex-shrink-0">
                <span className="text-3xl font-black text-amber-300">
                  {course.skillGap.readinessScore}%
                </span>
                <span className="text-xs text-slate-300 font-semibold leading-tight">
                  {t('courseDetails.readinessScore')}
                </span>
              </div>
            </div>

            {/* Current Skills vs Missing Foundations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Student's Current Skills */}
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t('courseDetails.currentSkills')}</span>
                </div>
                <div className="space-y-2">
                  {course.skillGap.currentSkills.map((sk, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-white/5 text-xs font-medium">
                      <span>{getLocalized(sk)}</span>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                        Ready
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Missing Foundation Skills */}
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>{t('courseDetails.requiredSkills')}</span>
                </div>
                <div className="space-y-2">
                  {course.skillGap.missingSkills.map((sk, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-white/5 text-xs font-medium">
                      <span>{getLocalized(sk)}</span>
                      <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded">
                        Prep Needed
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Preparation Roadmap Box */}
            <div className="p-4 rounded-2xl bg-brand-500/20 border border-brand-400/30 text-xs sm:text-sm text-slate-200">
              <span className="font-bold text-white block mb-1">
                {t('courseDetails.prepRecommendation')}
              </span>
              <p className="leading-relaxed text-slate-300">
                {getLocalized(course.skillGap.recommendedPrep)}
              </p>
            </div>
          </div>
        )}

        {/* Subjects & Curriculum */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-soft space-y-4">
          <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
            {t('courseDetails.subjects')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {course.subjects.map((sub, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                <span className="w-5 h-5 rounded-md bg-brand-100 text-brand-700 font-bold text-xs flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <span>{getLocalized(sub)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Career Opportunities & Higher Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-soft space-y-3">
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              <span>{t('courseDetails.careerOptions')}</span>
            </h4>
            <div className="space-y-2">
              {course.careerOptions.map((opt, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-50 text-xs font-semibold text-slate-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{getLocalized(opt)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-soft space-y-3">
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              <span>{t('courseDetails.furtherStudy')}</span>
            </h4>
            <div className="space-y-2">
              {course.furtherStudy.map((opt, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-50 text-xs font-semibold text-slate-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span>{getLocalized(opt)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Institutions Offering This Course */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-soft space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {t('courseDetails.relatedInstitutions')}
              </h3>
              <p className="text-xs text-slate-500">
                Accredited polytechnics and ITIs in your region
              </p>
            </div>
            <Link
              to="/institutions"
              className="text-xs font-bold text-brand-600 hover:text-brand-700"
            >
              View All Institutes →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {offeringInstitutes.map((inst) => (
              <div
                key={inst.id}
                className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {inst.type}
                    </span>
                    <span className="text-xs font-bold text-brand-600">
                      {inst.matchScore}% Match
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 line-clamp-1">
                    {getLocalized(inst.name)}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {getLocalized(inst.city)} • {inst.distanceKm} km
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-900">
                    ₹{inst.fees.toLocaleString('en-IN')}/yr
                  </span>
                  <Link
                    to={`/institutions/${inst.id}`}
                    className="text-xs font-bold text-brand-600 hover:underline"
                  >
                    View College →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
