import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import {
  GraduationCap,
  Sparkles,
  Globe,
  ChevronDown,
  User,
  LogOut,
  Bookmark,
  CheckCircle,
  Menu,
  X,
  Compass,
  Building2,
  BookOpen,
  Award,
  Layers,
  MapPin
} from 'lucide-react';

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { user, logout, savedInstitutions, loadDemoData } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  const [langOpen, setLangOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const langRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleDemoClick = () => {
    loadDemoData();
    navigate('/analysis');
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.howItWorks'), path: '/#how-it-works' },
    { name: t('nav.courses'), path: '/courses' },
    { name: t('nav.institutions'), path: '/institutions' },
    { name: t('nav.mapPage') || 'Map', path: '/map' },
    { name: t('nav.scholarships'), path: '/scholarships' },
    { name: t('nav.careerPaths'), path: '/careers' },
    { name: t('nav.dashboard'), path: '/dashboard' }
  ];

  const languages = [
    { code: 'en', label: 'English', sub: 'English' },
    { code: 'ta', label: 'தமிழ்', sub: 'Tamil' },
    { code: 'hi', label: 'हिन्दी', sub: 'Hindi' }
  ];

  const currentLangLabel = languages.find((l) => l.code === language)?.label || 'English';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with graduation cap + bridge + spark element */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-700 via-brand-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
              {/* Bridge arch line */}
              <svg className="absolute -bottom-1 w-7 h-2 text-white/80" viewBox="0 0 28 8" fill="none">
                <path d="M1 7C8 1 20 1 27 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {/* Sparkle element */}
              <Sparkles className="w-3.5 h-3.5 text-amber-300 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
                  Career<span className="text-brand-600">Bridge</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-brand-50 text-brand-700 border border-brand-200">
                  SIH
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 line-clamp-1 max-w-[200px] sm:max-w-xs">
                {t('nav.tagline')}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-brand-600 bg-brand-50 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Try Demo Button */}
            <button
              onClick={handleDemoClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 hover:border-amber-400 shadow-sm transition-all active:scale-95"
              title="Loads instant demo with 88% student+parent match"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{t('nav.demoMode')}</span>
            </button>

            {/* Language Selector Dropdown */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                aria-label="Select Language"
              >
                <Globe className="w-4 h-4 text-brand-600" />
                <span className="font-semibold">{currentLangLabel}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-xl bg-white shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-bold tracking-wider text-slate-400 uppercase border-b border-slate-100">
                    {t('nav.language')}
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-sm flex items-center justify-between transition-colors ${
                        language === lang.code
                          ? 'bg-brand-50 text-brand-700 font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{lang.label}</span>
                      <span className="text-[11px] text-slate-400 font-normal">({lang.sub})</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* User Profile or Login */}
            {user.isLoggedIn ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 p-1.5 pl-2.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                >
                  <span className="text-xs font-bold text-slate-800 hidden md:inline">
                    {user.name.split(' ')[0]}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-xs shadow-inner">
                    {user.name ? user.name[0].toUpperCase() : 'U'}
                  </div>
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-sm font-bold text-slate-900 truncate">{user.name}</p>
                      <p className="text-xs text-slate-500 truncate">{user.email}</p>
                    </div>

                    <Link
                      to="/dashboard"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 font-medium"
                    >
                      <Compass className="w-4 h-4 text-brand-600" />
                      {t('nav.dashboard')}
                    </Link>

                    <Link
                      to="/student-preferences"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 font-medium"
                    >
                      <User className="w-4 h-4 text-slate-500" />
                      {t('nav.myAssessment')}
                    </Link>

                    <Link
                      to="/institutions"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center justify-between px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 font-medium"
                    >
                      <div className="flex items-center gap-2.5">
                        <Bookmark className="w-4 h-4 text-amber-500" />
                        {t('nav.savedColleges')}
                      </div>
                      {savedInstitutions.length > 0 && (
                        <span className="text-xs font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full">
                          {savedInstitutions.length}
                        </span>
                      )}
                    </Link>

                    <Link
                      to="/decision-lock"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 font-medium"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      {t('nav.decisionPlan')}
                    </Link>

                    <div className="border-t border-slate-100 my-1"></div>

                    <button
                      onClick={() => {
                        logout();
                        setProfileOpen(false);
                        navigate('/');
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 font-medium text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      {t('nav.logout')}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors"
                >
                  {t('nav.login')}
                </Link>
                <Link
                  to="/student-preferences"
                  className="px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-lg bg-brand-600 hover:bg-brand-700 text-white shadow-sm hover:shadow transition-all"
                >
                  {t('nav.getStarted')}
                </Link>
              </div>
            )}

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between py-2 border-b border-slate-100 mb-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t('nav.vocationalStreams')}</span>
            <button
              onClick={handleDemoClick}
              className="inline-flex items-center gap-1 text-xs font-bold bg-amber-50 text-amber-800 border border-amber-300 px-2.5 py-1 rounded-md"
            >
              <Sparkles className="w-3 h-3 text-amber-600" />
              {t('nav.demoMode')}
            </button>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname === link.path
                  ? 'bg-brand-50 text-brand-700 font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <div className="text-xs font-semibold text-slate-500 mb-1">{t('nav.language')}:</div>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-bold text-center border transition-all ${
                    language === lang.code
                      ? 'bg-brand-600 text-white border-brand-600'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
