import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { ProgressBar } from '../components/ProgressBar';
import {
  Users,
  BookOpen,
  MapPin,
  IndianRupee,
  Building2,
  Shield,
  Briefcase,
  Sparkles,
  AlertCircle
} from 'lucide-react';

export const ParentPreferences = () => {
  const { t } = useLanguage();
  const { parentPref, setParentPref, addToast } = useApp();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(parentPref);
  const [error, setError] = useState('');

  const priorityOptions = [
    { key: 'affordability', label: t('parent.priorityOptions.affordability') },
    { key: 'reputation', label: t('parent.priorityOptions.reputation') },
    { key: 'distance', label: t('parent.priorityOptions.distance') },
    { key: 'jobOpportunities', label: t('parent.priorityOptions.jobOpportunities') },
    { key: 'safety', label: t('parent.priorityOptions.safety') },
    { key: 'placementSupport', label: t('parent.priorityOptions.placementSupport') }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.preferredLocation) {
      setError(t('parent.validationError'));
      return;
    }
    setError('');
    setParentPref(formData);
    addToast(t('toasts.parentSaved'), 'success');
    navigate('/analysis');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Step Progress Tracker */}
        <ProgressBar currentStep={2} />

        {/* Form Container */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-card">
          
          <div className="border-b border-slate-100 pb-6 mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 block mb-1">
              Step 2 of 2 • Parent / Guardian Perspective
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {t('parent.pageTitle')}
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              {t('parent.pageSubtitle')}
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm font-semibold flex items-center gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* 1. Parent Name & Relationship */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {t('parent.parentName')} *
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.parentName || ''}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder={t('parent.parentNamePlaceholder')}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {t('parent.relationship')}
                </label>
                <select
                  value={formData.relationship || 'father'}
                  onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                >
                  <option value="father">{t('parent.relations.father')}</option>
                  <option value="mother">{t('parent.relations.mother')}</option>
                  <option value="guardian">{t('parent.relations.guardian')}</option>
                </select>
              </div>
            </div>

            {/* 2. Preferred Course & Alternative */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {t('parent.preferredCourse')} *
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.preferredCourse || ''}
                    onChange={(e) => setFormData({ ...formData, preferredCourse: e.target.value })}
                    placeholder={t('parent.preferredCoursePlaceholder')}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {t('parent.alternativeCourse')}
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={formData.alternativeCourse || ''}
                    onChange={(e) => setFormData({ ...formData, alternativeCourse: e.target.value })}
                    placeholder={t('parent.alternativeCoursePlaceholder')}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  />
                </div>
              </div>
            </div>

            {/* 3. Preferred Location & Maximum Family Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {t('parent.preferredLocation')} *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.preferredLocation || ''}
                    onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                    placeholder={t('parent.locationPlaceholder')}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    {t('parent.maxBudget')}
                  </label>
                  <span className="text-sm font-black text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-lg border border-indigo-200">
                    ₹{Number(formData.maxBudget || 60000).toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="120000"
                  step="5000"
                  value={formData.maxBudget || 60000}
                  onChange={(e) => setFormData({ ...formData, maxBudget: e.target.value })}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 mt-2"
                />
              </div>
            </div>

            {/* 4. Institution Type & Priority */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {t('parent.institutionType')}
                </label>
                <select
                  value={formData.institutionType || 'government'}
                  onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                >
                  <option value="government">Government / Govt-Aided (Affordable & Recognized)</option>
                  <option value="private">Private (Modern Facilities & Placements)</option>
                  <option value="either">Either / Open to Both</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Top Family Priority
                </label>
                <select
                  value={formData.priority || 'affordability'}
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                >
                  {priorityOptions.map((opt) => (
                    <option key={opt.key} value={opt.key}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 5. Parent Career Expectations */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                {t('parent.careerExpectations')}
              </label>
              <select
                value={formData.careerExpectations || 'higherEducation'}
                onChange={(e) => setFormData({ ...formData, careerExpectations: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
              >
                <option value="government">{t('parent.careerOptions.government')}</option>
                <option value="private">{t('parent.careerOptions.private')}</option>
                <option value="higherEducation">{t('parent.careerOptions.higherEducation')}</option>
                <option value="skilledEmployment">{t('parent.careerOptions.skilledEmployment')}</option>
                <option value="entrepreneurship">{t('parent.careerOptions.entrepreneurship')}</option>
                <option value="flexible">{t('parent.careerOptions.flexible')}</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-end">
              <button
                type="submit"
                className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-500/25 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{t('parent.analyzeBtn')}</span>
              </button>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
};
