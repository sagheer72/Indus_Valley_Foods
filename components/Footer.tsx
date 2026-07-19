import Link from 'next/link';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-xl font-serif font-bold text-white">{COMPANY.name}</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-emerald-200/60">
              Premium Pakistani rice and Himalayan pink salt, exported worldwide
              direct from Karachi Port.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-emerald-200/70">
              <MapPin className="h-4 w-4 flex-shrink-0 text-amber-400" strokeWidth={2} />
              {COMPANY.locationDetail}
            </div>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Quick Links
            </h5>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-emerald-200/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Products
            </h5>
            <ul className="mt-5 flex flex-col gap-3">
              <li className="text-sm text-emerald-200/70">1121 Basmati Rice</li>
              <li className="text-sm text-emerald-200/70">IRRI-6 Long Grain</li>
              <li className="text-sm text-emerald-200/70">Himalayan Pink Salt</li>
              <li className="text-sm text-emerald-200/70">Cooking Salt Blocks</li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Contact
            </h5>
            <ul className="mt-5 flex flex-col gap-3">
              <li className="text-sm text-emerald-200/70">{COMPANY.owner}</li>
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-2 text-sm text-emerald-200/70 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-amber-400" strokeWidth={2} />
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.emailHref}
                  className="flex items-center gap-2 text-sm text-emerald-200/70 hover:text-white transition-colors break-all"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-amber-400" strokeWidth={2} />
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-emerald-200/50">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-emerald-200/50">
            <Globe className="h-3.5 w-3.5" strokeWidth={2} />
            Exporting from Karachi, Pakistan to the world
          </div>
        </div>
      </div>
    </footer>
  );
}
