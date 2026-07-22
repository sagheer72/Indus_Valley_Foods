'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations, type Locale } from './i18n';

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof translations['en'];
  dir: 'ltr' | 'rtl';
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const saved = window.localStorage.getItem('ivf-locale') as Locale | null;
    if (saved === 'en' || saved === 'ar') {
      setLocaleState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem('ivf-locale', next);
  };

  const value: LanguageContextType = {
    locale,
    setLocale,
    t: translations[locale],
    dir: locale === 'ar' ? 'rtl' : 'ltr',
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
