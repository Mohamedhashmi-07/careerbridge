import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { careersData } from '../data/careers';
import { coursesData } from '../data/courses';
import { ProgressBar } from '../components/ProgressBar';
import {
  TrendingUp,
  Briefcase,
  GraduationCap,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Building,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const CareerPath = () => {
  const { t, getLocalized } = useLanguage();
  const { selectedCourseId, setSelectedCourseId } = useApp();

  const [activeCourseId, setActiveCourseId] = useState(selectedCourseId || 'diploma-computer-engg');

  const activeCareer = careersData.find((c) => c.courseId === activeCourseId) || careersData[0];
  const activeCourse = coursesData.find((c) => c.id === activeCourseId) || coursesData[0];

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Step Progress Tracker */}
        <ProgressBar currentStep={7} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-600 block">
            Step 7 of 8 • Long-Term Trajectory
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t('careerPage.pageTitle')}
          </h1>
          <p className="text-sm sm:text-base text-slate-500">
            {t('careerPage.pageSubtitle')}
          </p>
        </div>

        {/* Course Selector Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {coursesData.slice(0, 3).map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCourseId(c.id);
                setSelectedCourseId(c.id);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeCourseId === c.id
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {getLocalized(c.name)}
            </button>
          ))}
        </div>

        {/* 6-Stage Timeline Visual Card */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-card space-y-8">
          <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-600 block">
                {getLocalized(activeCareer.careerTitle)}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                {t('careerPage.timelineTitle')}
              </h2>
            </div>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
              Guaranteed Lateral Pathway
            </span>
          </div>

          {/* Timeline Stages */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-brand-200 space-y-8">
            {activeCareer.progression.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-white border-2 border-brand-600 text-brand-600 flex items-center justify-center font-black text-xs shadow group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  {idx + 1}
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 hover:bg-white hover:shadow-soft transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-brand-600">
                      {getLocalized(item.year)}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">Milestone {idx + 1}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {getLocalized(item.role)}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Focus: <span className="font-semibold text-slate-800">{getLocalized(item.focus)}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Realistic Job Listings Section */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-card space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-xl font-black text-slate-900">
              {t('careerPage.jobMarketTitle')}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Sample entry-level technical roles aligned with {getLocalized(activeCourse.name)}.
            </p>
          </div>

          <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 text-xs font-medium leading-relaxed">
            {t('careerPage.jobMarketDisclaimer')}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeCareer.jobs.map((job) => (
              <div
                key={job.id}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-soft transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 block uppercase">
                        {getLocalized(job.company)}
                      </span>
                      <h4 className="text-base font-bold text-slate-900">
                        {getLocalized(job.title)}
                      </h4>
                    </div>
                    <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                      {job.salaryRange}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 flex items-center gap-1 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{getLocalized(job.location)} • {getLocalized(job.experience)}</span>
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1.5">{t('careerPage.skillsNeeded')}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {job.skills.map((sk) => (
                        <span key={sk} className="px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 text-xs font-medium">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Source: {job.source}</span>
                  <span>{job.lastUpdated}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to Scholarships */}
        <div className="flex items-center justify-between pt-4">
          <Link
            to="/institutions"
            className="text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900"
          >
            ← Back to Institutions
          </Link>
          <Link
            to="/scholarships"
            className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2"
          >
            <span>Explore Financial Support & Scholarships</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
