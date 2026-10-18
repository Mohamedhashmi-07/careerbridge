import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { institutionsData } from '../data/institutions';
import { ProgressBar } from '../components/ProgressBar';
import {
  Building2,
  Sparkles,
  MapPin,
  IndianRupee,
  Clock,
  CheckCircle2,
  Bookmark,
  Scale,
  ShieldCheck,
  Search,
  Filter,
  Eye,
  ArrowRight
} from 'lucide-react';

export const Institutions = () => {
  const { t, getLocalized } = useLanguage();
  const { savedInstitutions, toggleSaveInstitution, setSelectedInstitutionId } = useApp();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('all'); // all, bestMatch, govt, private, nearby, affordable
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInstitutions = institutionsData.filter((inst) => {
    const name = getLocalized(inst.name).toLowerCase();
    const city = getLocalized(inst.city).toLowerCase();
    const matchesQuery = name.includes(searchQuery.toLowerCase()) || city.includes(searchQuery.toLowerCase());

    if (!matchesQuery) return false;
    if (activeTab === 'bestMatch') return inst.matchScore >= 90;
    if (activeTab === 'govt') return inst.type === 'government' || inst.type === 'govt-aided';
    if (activeTab === 'private') return inst.type === 'private';
    if (activeTab === 'nearby') return inst.distanceKm <= 20;
    if (activeTab === 'affordable') return inst.fees <= 15000;
    return true;
  });

  const handleOpenDetails = (id) => {
    setSelectedInstitutionId(id);
    navigate(`/institutions/${id}`);
  };

  const handleViewOnMap = (id) => {
    setSelectedInstitutionId(id);
    navigate(`/map?focus=${id}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Step Progress Tracker */}
        <ProgressBar currentStep={5} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t('common.verified')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t('institutionsPage.pageTitle')}
          </h1>
          <p className="text-sm sm:text-base text-slate-500">
            {t('institutionsPage.pageSubtitle')}
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-soft space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search college name, district..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
              />
            </div>

            {/* Quick Map Button */}
            <Link
              to="/map"
              className="w-full md:w-auto px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              <span>{t('institutionsPage.viewMapBtn')}</span>
            </Link>
          </div>

          {/* Preset Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-t border-slate-100 pt-3 text-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t('institutionsPage.tabs.all')}
            </button>
            <button
              onClick={() => setActiveTab('bestMatch')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                activeTab === 'bestMatch'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t('institutionsPage.tabs.bestMatch')}
            </button>
            <button
              onClick={() => setActiveTab('govt')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                activeTab === 'govt'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t('institutionsPage.tabs.govt')}
            </button>
            <button
              onClick={() => setActiveTab('private')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                activeTab === 'private'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t('institutionsPage.tabs.private')}
            </button>
            <button
              onClick={() => setActiveTab('nearby')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                activeTab === 'nearby'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t('institutionsPage.tabs.nearby')}
            </button>
            <button
              onClick={() => setActiveTab('affordable')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                activeTab === 'affordable'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t('institutionsPage.tabs.affordable')}
            </button>
          </div>
        </div>

        {/* Institutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredInstitutions.map((inst) => {
            const isSaved = savedInstitutions.includes(inst.id);

            return (
              <div
                key={inst.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-soft hover:shadow-card hover:border-brand-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top info and badges */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${
                          inst.type === 'government' || inst.type === 'govt-aided'
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : 'bg-indigo-50 text-indigo-800 border border-indigo-200'
                        }`}>
                          {inst.type === 'government' ? t('common.government') : t('common.private')}
                        </span>
                        <span className="text-[11px] font-bold text-slate-500">
                          {inst.distanceKm} km away
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 line-clamp-1">
                        {getLocalized(inst.name)}
                      </h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{getLocalized(inst.city)}, {getLocalized(inst.state)}</span>
                      </p>
                    </div>

                    {/* Match Score Badge */}
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-brand-50 text-brand-700 border border-brand-200 font-black text-sm flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-brand-600" />
                      <span>{inst.matchScore}% Match</span>
                    </div>
                  </div>

                  {/* Why Recommended Narrative */}
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-600 mb-5 leading-relaxed">
                    <span className="font-bold text-slate-800 block mb-1">
                      {t('institutionsPage.whyRecommended')}
                    </span>
                    <p>{getLocalized(inst.whyRecommended)}</p>
                  </div>

                  {/* Institution Details Grid */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-xs mb-4">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">{t('institutionsPage.feeLabel')}</span>
                      <span className="font-extrabold text-slate-900">₹{inst.fees.toLocaleString('en-IN')}/yr</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">{t('common.duration')}</span>
                      <span className="font-bold text-slate-900">{getLocalized(inst.duration)}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">{t('common.source')}</span>
                      <span className="font-bold text-emerald-700 text-[11px] truncate block">DOTE Verified</span>
                    </div>
                  </div>

                  {/* Key Course line */}
                  <div className="text-xs text-slate-600 mb-5">
                    <span className="font-bold text-slate-700">{t('institutionsPage.courseOffered')} </span>
                    <span className="text-brand-700 font-semibold">{getLocalized(inst.keyCourse)}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleOpenDetails(inst.id)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm text-center shadow-sm transition-colors"
                  >
                    {t('institutionsPage.viewDetailsBtn')}
                  </button>

                  <button
                    onClick={() => handleViewOnMap(inst.id)}
                    className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-colors flex items-center gap-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{t('institutionsPage.viewMapBtn')}</span>
                  </button>

                  <button
                    onClick={() => toggleSaveInstitution(inst.id)}
                    className={`p-2.5 rounded-xl border transition-colors ${
                      isSaved
                        ? 'bg-amber-100 border-amber-300 text-amber-800'
                        : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
                    }`}
                    title={isSaved ? "Saved" : "Save College"}
                  >
                    <Bookmark className="w-4 h-4 fill-current" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
