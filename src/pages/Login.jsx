import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { GraduationCap, Sparkles, ArrowRight, Lock, Mail, User } from 'lucide-react';

export const Login = () => {
  const { t } = useLanguage();
  const { login, loadDemoData } = useApp();
  const navigate = useNavigate();

  const [email, setEmail] = useState('hashmi@example.com');
  const [password, setPassword] = useState('password123');
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    login("Hashmi Rahman", email);
    navigate('/dashboard');
  };

  const handleDemoUser = () => {
    loadDemoData();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-md w-full space-y-8 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-card">
        
        {/* Brand header */}
        <div className="text-center">
          <div className="inline-flex w-12 h-12 rounded-2xl bg-brand-600 text-white items-center justify-center mb-4 shadow-md shadow-brand-500/20">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {t('auth.loginTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            {t('auth.loginSubtitle')}
          </p>
        </div>

        {/* Demo User Fast-Track Button */}
        <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-center space-y-2">
          <span className="text-[11px] font-bold text-amber-900 block">
            {t('auth.demoUserNotice')}
          </span>
          <button
            type="button"
            onClick={handleDemoUser}
            className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t('auth.continueDemoBtn')}</span>
          </button>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              {t('auth.emailLabel')}
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('auth.emailPlaceholder')}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              {t('auth.passwordLabel')}
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('auth.passwordPlaceholder')}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
              />
              <span>{t('auth.rememberMe')}</span>
            </label>
            <a href="#forgot" className="text-brand-600 hover:text-brand-700 font-semibold">
              {t('auth.forgotPassword')}
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md shadow-brand-500/20 transition-all flex items-center justify-center gap-2"
          >
            <span>{t('auth.loginBtn')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center pt-2 border-t border-slate-100">
          <Link
            to="/signup"
            className="text-xs font-bold text-brand-600 hover:text-brand-700"
          >
            {t('auth.noAccount')}
          </Link>
        </div>

      </div>
    </div>
  );
};
