import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../locales/en';
import { ta } from '../locales/ta';
import { hi } from '../locales/hi';

const translations = { en, ta, hi };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('careerbridge_language') || 'en';
  });

  const setLanguage = (lang) => {
    if (translations[lang]) {
      setLanguageState(lang);
      localStorage.setItem('careerbridge_language', lang);
      document.documentElement.lang = lang;
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Nested translation helper: t("home.heroTitle")
  const t = (keyPath, fallback = '') => {
    if (!keyPath) return '';
    const keys = keyPath.split('.');
    let current = translations[language];

    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        // Fallback to English if key missing in target language
        let fallbackCurrent = translations['en'];
        for (const fbK of keys) {
          if (fallbackCurrent && fallbackCurrent[fbK] !== undefined) {
            fallbackCurrent = fallbackCurrent[fbK];
          } else {
            return fallback || keyPath;
          }
        }
        return fallbackCurrent;
      }
    }

    return current !== undefined ? current : (fallback || keyPath);
  };

  // Helper for localized mock data: e.g. { en: "Computer Engg", ta: "கணினி பொறியியல்", hi: "कंप्यूटर इंजीनियरिंग" }
  const getLocalized = (obj, fallbackKey = 'en') => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    if (typeof obj === 'object') {
      return obj[language] || obj[fallbackKey] || obj['en'] || Object.values(obj)[0] || '';
    }
    return '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getLocalized }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
