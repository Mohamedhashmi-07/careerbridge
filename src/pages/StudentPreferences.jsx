import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { ProgressBar } from '../components/ProgressBar';
import {
  User,
  GraduationCap,
  Percent,
  CheckSquare,
  MapPin,
  IndianRupee,
  Building2,
  BookOpen,
  Briefcase,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export const StudentPreferences = () => {
  const { t } = useLanguage();
  const { studentPref, setStudentPref, addToast } = useApp();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(studentPref);
  const [error, setError] = useState('');

  const skillOptions = [
    "Coding", "Electronics", "Healthcare", "Design",
    "Mechanical", "Agriculture", "Business", "Construction",
    "Logistics", "Digital Marketing", "Other"
  ];

  const handleSkillToggle = (skill) => {
    const current = formData.skills || [];
    if (current.includes(skill)) {
      setFormData({ ...formData, skills: current.filter((s) => s !== skill) });
    } else {
      setFormData({ ...formData, skills: [...current, skill] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.qualification || !formData.preferredLocation) {
      setError(t('student.validationError'));
      return;
    }
    setError('');
    setStudentPref(formData);
    addToast(t('toasts.studentSaved'), 'success');
    navigate('/parent-preferences');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Step Progress Tracker */}
        <ProgressBar currentStep={1} />

        {/* Form Container */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-card">
          
          <div className="border-b border-slate-100 pb-6 mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-600 block mb-1">
              Step 1 of 2 • Student Profile
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {t('student.pageTitle')}
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              {t('student.pageSubtitle')}
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm font-semibold flex items-center gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* 1. Name & Qualification */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {t('student.name')} *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.name || ''}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('student.namePlaceholder')}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {t('student.qualification')} *
                </label>
                <div className="relative">
                  <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <select
                    value={formData.qualification || 'class10'}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium appearance-none"
                  >
                    <option value="class10">{t('student.qualifications.class10')}</option>
                    <option value="class12">{t('student.qualifications.class12')}</option>
                    <option value="itiPass">{t('student.qualifications.itiPass')}</option>
                    <option value="diplomaPass">{t('student.qualifications.diplomaPass')}</option>
                    <option value="other">{t('student.qualifications.other')}</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 2. Marks & Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {t('student.marks')} *
                </label>
                <div className="relative">
                  <Percent className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="number"
                    min="35"
                    max="100"
                    value={formData.marks || ''}
                    onChange={(e) => setFormData({ ...formData, marks: e.target.value })}
                    placeholder={t('student.marksPlaceholder')}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {t('student.preferredLocation')} *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.preferredLocation || ''}
                    onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                    placeholder={t('student.locationPlaceholder')}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                  />
                </div>
              </div>
            </div>

            {/* 3. Budget Range Slider */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {t('student.budget')}
                </label>
                <span className="text-sm font-black text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-lg border border-brand-200">
                  ₹{Number(formData.budget || 50000).toLocaleString('en-IN')} / year
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="100000"
                step="5000"
                value={formData.budget || 50000}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
              />
              <p className="text-[11px] text-slate-400 mt-1">{t('student.budgetHint')}</p>
            </div>

            {/* 4. Interested Skills Checkboxes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                {t('student.skills')}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                {skillOptions.map((skill) => {
                  const isChecked = (formData.skills || []).includes(skill);
                  return (
                    <button
                      type="button"
                      key={skill}
                      onClick={() => handleSkillToggle(skill)}
                      className={`p-2.5 rounded-xl text-xs font-bold border text-left transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-brand-50 text-brand-700 border-brand-500 ring-1 ring-brand-500'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <span>{skill}</span>
                      {isChecked && <CheckSquare className="w-3.5 h-3.5 text-brand-600" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. Preferred Course Category & Institution Preference */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {t('student.preferredCourseCategory')}
                </label>
                <select
                  value={formData.preferredCourseCategory || 'it'}
                  onChange={(e) => setFormData({ ...formData, preferredCourseCategory: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                >
                  <option value="it">IT & Digital Skills (Computer Engg, Web)</option>
                  <option value="iti">ITI & Trades (Electrician, Fitter)</option>
                  <option value="polytechnic">Diploma Engineering (Mechanical, Civil)</option>
                  <option value="healthcare">Healthcare & Allied Care</option>
                  <option value="agriculture">Agriculture Technology</option>
                  <option value="design">Design & Digital Media</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {t('student.institutionType')}
                </label>
                <select
                  value={formData.institutionType || 'either'}
                  onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                >
                  <option value="government">{t('student.instTypes.government')}</option>
                  <option value="private">{t('student.instTypes.private')}</option>
                  <option value="either">{t('student.instTypes.either')}</option>
                </select>
              </div>
            </div>

            {/* 6. Learning Style & Career Aspiration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {t('student.learningStyle')}
                </label>
                <select
                  value={formData.learningStyle || 'practical'}
                  onChange={(e) => setFormData({ ...formData, learningStyle: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                >
                  <option value="practical">{t('student.learningStyles.practical')}</option>
                  <option value="theory">{t('student.learningStyles.theory')}</option>
                  <option value="mixed">{t('student.learningStyles.mixed')}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {t('student.careerInterest')}
                </label>
                <select
                  value={formData.careerInterest || 'technology'}
                  onChange={(e) => setFormData({ ...formData, careerInterest: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                >
                  <option value="technology">{t('student.careerInterests.technology')}</option>
                  <option value="healthcare">{t('student.careerInterests.healthcare')}</option>
                  <option value="engineering">{t('student.careerInterests.engineering')}</option>
                  <option value="government">{t('student.careerInterests.government')}</option>
                  <option value="business">{t('student.careerInterests.business')}</option>
                  <option value="creative">{t('student.careerInterests.creative')}</option>
                  <option value="skilledTrade">{t('student.careerInterests.skilledTrade')}</option>
                  <option value="notSure">{t('student.careerInterests.notSure')}</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-end">
              <button
                type="submit"
                className="px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md shadow-brand-500/25 transition-all flex items-center gap-2"
              >
                <span>{t('student.saveAndContinue')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
};
