'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, ArrowRight, Globe } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import { useLanguage } from '@/lib/LanguageContext';

function GrainIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path
        d="M17 2C10 6 7 13 9 20C10.5 25 14 29 17 32C20 29 23.5 25 25 20C27 13 24 6 17 2Z"
        fill="#064e3b"
      />
      <path
        d="M17 5.5C12.5 8.5 10.5 13.5 12 18.5C13 22 15 25 17 27.5"
        stroke="#f59e0b"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M17 32V16"
        stroke="#f59e0b"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.products, href: '#products' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.catalog, href: '/catalog' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/85 border-b border-emerald-950/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2.5">
            <GrainIcon />
            <span className="text-lg sm:text-2xl font-serif font-bold tracking-tight leading-none">
              <span className="text-emerald-900">Indus Valley</span>{' '}
              <span className="text-amber-500">Foods</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-emerald-900 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-950/15 px-3.5 py-2.5 text-sm font-semibold text-emerald-950 hover:bg-emerald-950/5 transition-colors"
              aria-label="Switch language"
            >
              <Globe className="h-4 w-4" strokeWidth={2} />
              {locale === 'en' ? 'العربية' : 'English'}
            </button>
            <a
              href={COMPANY.emailHref}
              className="hidden xl:inline-flex items-center gap-2 rounded-full border border-emerald-950/15 px-4 py-2.5 text-sm font-medium text-emerald-950 hover:bg-emerald-950/5 transition-colors"
              aria-label="Email Indus Valley Foods"
            >
              <Mail className="h-4 w-4" strokeWidth={2} />
              {t.nav.email}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 transition-all duration-200 whitespace-nowrap"
            >
              {t.nav.quote}
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-emerald-950 hover:bg-emerald-950/5"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-emerald-950/10 bg-white/95 backdrop-blur-md">
          <div className="flex flex-col gap-1 px-4 py-4 sm:px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-800 hover:bg-emerald-950/5"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-emerald-950/15 px-5 py-3 text-sm font-semibold text-emerald-950"
            >
              <Globe className="h-4 w-4" strokeWidth={2} />
              {locale === 'en' ? 'العربية (Switch to Arabic)' : 'English (التبديل إلى الإنجليزية)'}
            </button>

            <div className="mt-3 flex flex-col gap-3 border-t border-emerald-950/10 pt-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-900 px-5 py-3.5 text-sm font-semibold text-white active:scale-[0.98] transition-transform"
              >
                {t.nav.quote}
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
              <a
                href={COMPANY.emailHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-950/20 px-5 py-3.5 text-sm font-semibold text-emerald-950 active:scale-[0.98] transition-transform"
              >
                <Mail className="h-4 w-4" strokeWidth={2} />
                {t.nav.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
