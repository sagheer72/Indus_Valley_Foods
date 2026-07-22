'use client';

import { Target, Handshake, Sprout } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();
  const a = t.about;

  const pillars = [
    { icon: Sprout, title: a.pillar1Title, detail: a.pillar1Detail },
    { icon: Target, title: a.pillar2Title, detail: a.pillar2Detail },
    { icon: Handshake, title: a.pillar3Title, detail: a.pillar3Detail },
  ];

  return (
    <section id="about" className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
              {a.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-serif font-bold text-emerald-950 sm:text-4xl">
              {a.heading}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">{a.para1}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{a.para2}</p>
          </div>

          <div className="flex flex-col gap-5">
            {pillars.map(({ icon: Icon, title, detail }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl border border-emerald-950/10 bg-slate-50 p-5"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-emerald-950">
                  <Icon className="h-5 w-5 text-amber-400" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-bold text-emerald-950">{title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
