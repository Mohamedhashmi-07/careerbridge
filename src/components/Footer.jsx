import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, ShieldCheck, Heart, Sparkles, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Banner / Trust strip */}
      <div className="bg-slate-950 py-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{t('footer.trustStatement')}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 font-semibold text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              Smart India Hackathon 2024
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Career<span className="text-brand-400">Bridge</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t('footer.brandDesc')}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs text-slate-400 font-medium">{t('nav.language')}:</span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs px-2.5 py-1 rounded transition-colors ${
                  language === 'en' ? 'bg-brand-600 text-white font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('ta')}
                className={`text-xs px-2.5 py-1 rounded transition-colors ${
                  language === 'ta' ? 'bg-brand-600 text-white font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                தமிழ்
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`text-xs px-2.5 py-1 rounded transition-colors ${
                  language === 'hi' ? 'bg-brand-600 text-white font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-brand-400 transition-colors">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-brand-400 transition-colors">{t('nav.courses')}</Link>
              </li>
              <li>
                <Link to="/institutions" className="hover:text-brand-400 transition-colors">{t('nav.institutions')}</Link>
              </li>
              <li>
                <Link to="/map" className="hover:text-brand-400 transition-colors">{t('common.viewOnMap')}</Link>
              </li>
              <li>
                <Link to="/scholarships" className="hover:text-brand-400 transition-colors">{t('nav.scholarships')}</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-brand-400 transition-colors">{t('nav.careerPaths')}</Link>
              </li>
            </ul>
          </div>

          {/* For Students */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('footer.forStudentsTitle')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/student-preferences" className="hover:text-brand-400 transition-colors">{t('nav.startAssessment')}</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-brand-400 transition-colors">{t('courseDetails.skillGapTitle')}</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-brand-400 transition-colors">{t('careerPage.timelineTitle')}</Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-brand-400 transition-colors">{t('nav.dashboard')}</Link>
              </li>
            </ul>
          </div>

          {/* For Parents */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('footer.forParentsTitle')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/parent-preferences" className="hover:text-brand-400 transition-colors">{t('parent.pageTitle')}</Link>
              </li>
              <li>
                <Link to="/analysis" className="hover:text-brand-400 transition-colors">{t('analysis.pageTitle')}</Link>
              </li>
              <li>
                <Link to="/family-comparison" className="hover:text-brand-400 transition-colors">{t('comparisonPage.pageTitle')}</Link>
              </li>
              <li>
                <Link to="/decision-lock" className="hover:text-brand-400 transition-colors">{t('decisionLock.pageTitle')}</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>{t('footer.copyright')}</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">{t('footer.privacy')}</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">{t('footer.terms')}</a>
            <a href="#disclaimer" className="hover:text-slate-300 transition-colors">{t('footer.disclaimer')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
