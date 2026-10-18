import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { institutionsData } from '../data/institutions';
import {
  MapPin,
  Building2,
  Navigation,
  CheckCircle,
  Filter,
  Eye,
  SlidersHorizontal,
  Bookmark,
  Layers,
  Sparkles,
  Phone,
  Maximize2
} from 'lucide-react';

export const InteractiveMap = ({ onSelectInstitution, initialSelectedId = null }) => {
  const { t, getLocalized } = useLanguage();
  const { savedInstitutions, toggleSaveInstitution, setSelectedInstitutionId } = useApp();
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState('all'); // all, government, private, affordable, nearby
  const [selectedInstId, setSelectedInstId] = useState(initialSelectedId || institutionsData[0].id);
  const [viewMode, setViewMode] = useState('split'); // split, mapOnly, listOnly
  const [zoomLevel, setZoomLevel] = useState(1);

  // Filter institutions
  const filteredInstitutions = institutionsData.filter((inst) => {
    if (activeFilter === 'government') return inst.type === 'government' || inst.type === 'govt-aided';
    if (activeFilter === 'private') return inst.type === 'private';
    if (activeFilter === 'affordable') return inst.fees <= 15000;
    if (activeFilter === 'nearby') return inst.distanceKm <= 20;
    return true;
  });

  const selectedInst = institutionsData.find((i) => i.id === selectedInstId) || institutionsData[0];

  const handleMarkerClick = (id) => {
    setSelectedInstId(id);
    setSelectedInstitutionId(id);
    if (onSelectInstitution) onSelectInstitution(id);
  };

  const handleOpenDetails = (id) => {
    setSelectedInstitutionId(id);
    navigate(`/institutions/${id}`);
  };

  // Coordinates mapping to percentage positions on the Tamil Nadu vector map
  // Lat: 8 to 13.5 N, Lon: 76.5 to 80.5 E
  const getCoordinates = (lat, lon) => {
    // Normalizing to SVG canvas percentage
    const minLat = 8.5, maxLat = 13.5;
    const minLon = 76.5, maxLon = 80.5;

    const x = ((lon - minLon) / (maxLon - minLon)) * 80 + 10;
    const y = 90 - (((lat - minLat) / (maxLat - minLat)) * 80 + 5);

    return { x: Math.max(8, Math.min(92, x)), y: Math.max(8, Math.min(92, y)) };
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-card">
      
      {/* Top Filter Bar */}
      <div className="bg-slate-50 p-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        {/* Filter categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" />
            {t('common.filter')}:
          </span>
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeFilter === 'all'
                ? 'bg-brand-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t('common.all')} ({institutionsData.length})
          </button>
          <button
            onClick={() => setActiveFilter('government')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeFilter === 'government'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t('common.government')}
          </button>
          <button
            onClick={() => setActiveFilter('private')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeFilter === 'private'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t('common.private')}
          </button>
          <button
            onClick={() => setActiveFilter('affordable')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeFilter === 'affordable'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t('common.affordable')} (&lt; ₹15k)
          </button>
          <button
            onClick={() => setActiveFilter('nearby')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeFilter === 'nearby'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t('common.nearby')} (&lt; 20 km)
          </button>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 text-xs">
          <button
            onClick={() => setViewMode('split')}
            className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${
              viewMode === 'split' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Split View
          </button>
          <button
            onClick={() => setViewMode('mapOnly')}
            className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${
              viewMode === 'mapOnly' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t('mapPage.mapView')}
          </button>
          <button
            onClick={() => setViewMode('listOnly')}
            className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${
              viewMode === 'listOnly' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t('mapPage.listView')}
          </button>
        </div>
      </div>

      {/* Main Map / List Layout */}
      <div className={`grid ${viewMode === 'split' ? 'grid-cols-1 lg:grid-cols-12' : 'grid-cols-1'} min-h-[520px]`}>
        
        {/* Left Column: Institution Cards (shown in split and listOnly) */}
        {viewMode !== 'mapOnly' && (
          <div className={`${viewMode === 'split' ? 'lg:col-span-5' : 'col-span-1'} border-r border-slate-200 p-4 space-y-3 max-h-[560px] overflow-y-auto bg-slate-50/50`}>
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-1 px-1">
              <span>{filteredInstitutions.length} {t('nav.institutions')}</span>
              <span>Click card to inspect on map</span>
            </div>

            {filteredInstitutions.map((inst) => {
              const isSelected = inst.id === selectedInstId;
              const isSaved = savedInstitutions.includes(inst.id);

              return (
                <div
                  key={inst.id}
                  onClick={() => handleMarkerClick(inst.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer relative ${
                    isSelected
                      ? 'bg-white border-brand-500 shadow-md ring-2 ring-brand-500/10'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                          inst.type === 'government' || inst.type === 'govt-aided'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                        }`}>
                          {inst.type === 'government' ? t('common.government') : t('common.private')}
                        </span>
                        <span className="text-[11px] font-bold text-slate-400">
                          {inst.distanceKm} km away
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 line-clamp-1">
                        {getLocalized(inst.name)}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {getLocalized(inst.city)}, {getLocalized(inst.state)}
                      </p>
                    </div>

                    {/* Match Score Badge */}
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-black text-brand-600 bg-brand-50 px-2 py-0.5 rounded-lg border border-brand-200">
                        {inst.matchScore}%
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">{t('common.estimatedFee')}</span>
                      <span className="font-extrabold text-slate-800">₹{inst.fees.toLocaleString('en-IN')}/yr</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSaveInstitution(inst.id);
                        }}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isSaved ? 'bg-amber-100 text-amber-800' : 'text-slate-400 hover:text-slate-700 bg-slate-100'
                        }`}
                        title="Save to shortlist"
                      >
                        <Bookmark className="w-3.5 h-3.5 fill-current" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenDetails(inst.id);
                        }}
                        className="px-2.5 py-1 text-xs font-bold rounded-lg bg-brand-50 hover:bg-brand-100 text-brand-700 transition-colors"
                      >
                        {t('common.viewDetails')}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Right Column: Simulated Interactive SVG Vector Map (shown in split and mapOnly) */}
        {viewMode !== 'listOnly' && (
          <div className={`${viewMode === 'split' ? 'lg:col-span-7' : 'col-span-1'} relative min-h-[460px] bg-gradient-to-b from-sky-50/70 via-slate-50 to-emerald-50/30 flex items-center justify-center p-4 overflow-hidden`}>
            
            {/* Background Map Grid & Elevation Contours */}
            <svg className="absolute inset-0 w-full h-full text-slate-200/60 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mapGrid)" />
              
              {/* Stylized Coastline / Region Boundary */}
              <path
                d="M 120 40 Q 240 60 380 90 T 520 220 T 600 380 T 580 500 T 480 560 T 300 520 T 160 420 Z"
                fill="#f1f5f9"
                stroke="#cbd5e1"
                strokeWidth="1.5"
                opacity="0.7"
              />
              <path
                d="M 380 90 Q 480 180 560 320 T 580 480"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="3"
                strokeDasharray="6 4"
                opacity="0.8"
              />
            </svg>

            {/* Map Controls */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-1.5 bg-white/90 backdrop-blur-md p-1.5 rounded-xl border border-slate-200 shadow-sm">
              <button
                onClick={() => setZoomLevel((z) => Math.min(1.5, z + 0.1))}
                className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm flex items-center justify-center"
                title="Zoom in"
              >
                +
              </button>
              <button
                onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.1))}
                className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm flex items-center justify-center"
                title="Zoom out"
              >
                -
              </button>
            </div>

            {/* Map Center Notice */}
            <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm text-[11px] font-semibold text-slate-600 flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-brand-600" />
              <span>Simulated Geographic Area: Tamil Nadu Technical Education Clusters</span>
            </div>

            {/* Interactive Markers Container */}
            <div
              className="relative w-full max-w-lg aspect-square transition-transform duration-300"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              {filteredInstitutions.map((inst) => {
                const { x, y } = getCoordinates(inst.latitude, inst.longitude);
                const isSelected = inst.id === selectedInstId;

                return (
                  <div
                    key={inst.id}
                    onClick={() => handleMarkerClick(inst.id)}
                    style={{ left: `${x}%`, top: `${y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 group"
                  >
                    {/* Glowing pulse ring if selected */}
                    {isSelected && (
                      <span className="absolute -inset-2.5 rounded-full bg-brand-500/30 animate-ping pointer-events-none" />
                    )}

                    {/* Marker Pin */}
                    <div
                      className={`relative flex items-center justify-center w-8 h-8 rounded-full shadow-lg border-2 transition-all transform group-hover:scale-125 ${
                        isSelected
                          ? 'bg-brand-600 text-white border-white scale-125 z-30 shadow-brand-500/40'
                          : inst.type === 'government'
                          ? 'bg-emerald-600 text-white border-white'
                          : 'bg-indigo-600 text-white border-white'
                      }`}
                    >
                      <Building2 className="w-4 h-4" />
                      
                      {/* Distance pill */}
                      <span className="absolute -top-5 bg-slate-900 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-md shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        {getLocalized(inst.city)} • {inst.distanceKm} km
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Institution Popover Floating Card */}
            {selectedInst && (
              <div className="absolute bottom-6 right-6 left-6 sm:left-auto sm:w-80 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-200 z-30 animate-in fade-in slide-in-from-bottom-3 duration-200">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                      selectedInst.type === 'government'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-indigo-100 text-indigo-800'
                    }`}>
                      {selectedInst.type === 'government' ? t('common.government') : t('common.private')}
                    </span>
                    <h5 className="text-sm font-bold text-slate-900 mt-1 line-clamp-1">
                      {getLocalized(selectedInst.name)}
                    </h5>
                    <p className="text-xs text-slate-500">
                      {getLocalized(selectedInst.city)} • {selectedInst.distanceKm} km from demo center
                    </p>
                  </div>
                  <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200">
                    {selectedInst.matchScore}% Match
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-slate-100 my-2">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-bold uppercase">{t('common.estimatedFee')}</span>
                    <span className="font-bold text-slate-800">₹{selectedInst.fees.toLocaleString('en-IN')}/yr</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-bold uppercase">{t('common.duration')}</span>
                    <span className="font-bold text-slate-800">{getLocalized(selectedInst.duration)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => handleOpenDetails(selectedInst.id)}
                    className="flex-1 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold text-center transition-colors shadow-sm"
                  >
                    {t('common.viewDetails')}
                  </button>
                  <button
                    onClick={() => toggleSaveInstitution(selectedInst.id)}
                    className={`p-1.5 rounded-xl border transition-colors ${
                      savedInstitutions.includes(selectedInst.id)
                        ? 'bg-amber-100 border-amber-300 text-amber-800'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                    title="Bookmark this institute"
                  >
                    <Bookmark className="w-4 h-4 fill-current" />
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
