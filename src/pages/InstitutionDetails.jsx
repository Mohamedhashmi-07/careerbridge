import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { institutionsData } from '../data/institutions';
import {
  Building2,
  MapPin,
  IndianRupee,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Bookmark,
  Phone,
  Mail,
  ExternalLink,
  ChevronLeft,
  GraduationCap,
  Sparkles,
  Layers,
  Award
} from 'lucide-react';

export const InstitutionDetails = () => {
  const { id } = useParams();
  const { t, getLocalized } = useLanguage();
  const { savedInstitutions, toggleSaveInstitution } = useApp();
  const navigate = useNavigate();

  const inst = institutionsData.find((i) => i.id === id) || institutionsData[0];
  const isSaved = savedInstitutions.includes(inst.id);

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between">
          <Link
            to="/institutions"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-600 hover:text-brand-600 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{t('common.back')} to Institutions</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleSaveInstitution(inst.id)}
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-colors flex items-center gap-1.5 ${
                isSaved
                  ? 'bg-amber-100 border-amber-300 text-amber-800'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
              <span>{isSaved ? t('institutionsPage.savedBtn') : t('institutionsPage.saveBtn')}</span>
            </button>
            <Link
              to={`/map?focus=${inst.id}`}
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>{t('common.viewOnMap')}</span>
            </Link>
          </div>
        </div>

        {/* Institution Hero Header Card */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-card space-y-4">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${
              inst.type === 'government' || inst.type === 'govt-aided'
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : 'bg-indigo-50 text-indigo-800 border border-indigo-200'
            }`}>
              {getLocalized(inst.typeLabel)}
            </span>
            <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              {t('institutionDetails.verificationBadge')}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {getLocalized(inst.name)}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 flex items-center gap-1.5 mt-1.5">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{getLocalized(inst.contact.address)}</span>
              </p>
            </div>

            <div className="flex items-center gap-2 bg-brand-50 px-4 py-2 rounded-2xl border border-brand-200 flex-shrink-0">
              <Sparkles className="w-4 h-4 text-brand-600" />
              <div className="text-right">
                <span className="text-lg font-black text-brand-700 block leading-tight">{inst.matchScore}%</span>
                <span className="text-[10px] font-bold text-brand-600 uppercase">Family Harmony Fit</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-800 block mb-1">Why Recommended for Your Family:</span>
            <p>{getLocalized(inst.whyRecommended)}</p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100 text-xs">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase block">{t('institutionsPage.feeLabel')}</span>
              <span className="font-bold text-slate-900 text-sm">₹{inst.fees.toLocaleString('en-IN')}/yr</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Proximity</span>
              <span className="font-bold text-slate-900 text-sm">{inst.distanceKm} km from home</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Accreditation</span>
              <span className="font-bold text-slate-900 text-xs">AICTE / DOTE Approved</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Admissions</span>
              <span className="font-bold text-emerald-700 text-xs">Direct Single-Window Merit</span>
            </div>
          </div>
        </div>

        {/* Verification Status Warning / Trust Banner */}
        <div className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 shadow-soft space-y-2">
          <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
            <ShieldCheck className="w-5 h-5 text-amber-600" />
            <span>{t('institutionDetails.verificationTitle')} — {inst.lastChecked}</span>
          </div>
          <p className="text-xs text-amber-900 leading-relaxed">
            {t('institutionDetails.officialDisclaimer')}
          </p>
          <div className="pt-2">
            <a
              href="https://www.dote.tn.gov.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-800 underline"
            >
              <span>{t('institutionDetails.portalLink')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Facilities & Labs */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-soft space-y-4">
          <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-brand-600" />
            <span>{t('institutionDetails.facilities')}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {inst.facilities.map((fac, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{getLocalized(fac)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Track Record */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-soft space-y-3">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-600" />
            <span>{t('institutionDetails.placementStats')}</span>
          </h3>
          <p className="text-sm font-semibold text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
            {getLocalized(inst.placementStats)}
          </p>
        </div>

        {/* Contact Desk */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-soft space-y-4">
          <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
            {t('institutionDetails.contactInfo')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50">
              <Phone className="w-4 h-4 text-slate-400" />
              <span className="font-semibold text-slate-800">{inst.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50">
              <Mail className="w-4 h-4 text-slate-400" />
              <span className="font-semibold text-slate-800">{inst.contact.email}</span>
            </div>
          </div>
        </div>

        {/* Next Steps CTA */}
        <div className="p-6 bg-slate-900 text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold">Interested in locking this institution for your family?</h4>
            <p className="text-xs text-slate-400 mt-1">Review the family compromise options and lock your decision.</p>
          </div>
          <Link
            to="/family-comparison"
            className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-xs sm:text-sm transition-colors whitespace-nowrap"
          >
            Family Comparison →
          </Link>
        </div>

      </div>
    </div>
  );
};
