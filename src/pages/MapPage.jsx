import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { InteractiveMap } from '../components/InteractiveMap';
import { ProgressBar } from '../components/ProgressBar';
import { MapPin, Building2, Navigation, ArrowRight } from 'lucide-react';

export const MapPage = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const focusId = searchParams.get('focus');

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Step Progress Tracker */}
        <ProgressBar currentStep={6} />

        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-600 block">
            Step 6 of 8 • Geographic Map Exploration
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t('mapPage.pageTitle')}
          </h1>
          <p className="text-sm sm:text-base text-slate-500">
            {t('mapPage.pageSubtitle')}
          </p>
        </div>

        {/* Interactive Map Component */}
        <InteractiveMap initialSelectedId={focusId} />

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between pt-4">
          <Link
            to="/institutions"
            className="text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900"
          >
            ← Back to Institution Shortlist
          </Link>
          <Link
            to="/careers"
            className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2"
          >
            <span>Explore Career Paths & Job Outlook</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
