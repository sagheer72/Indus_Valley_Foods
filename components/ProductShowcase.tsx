'use client';

import Image from 'next/image';
import { CheckCircle, ArrowRight, Wheat, Gem, Package } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function ProductShowcase() {
  const { t } = useLanguage();
  const p = t.products;

  const riceSpecs = [
    { label: p.riceSpecBroken, value: p.riceSpecBrokenValue },
    { label: p.riceSpecMoisture, value: p.riceSpecMoistureValue },
    { label: p.riceSpecMilling, value: p.riceSpecMillingValue },
  ];
  const saltSpecs = [
    { label: p.saltSpecPurity, value: p.saltSpecPurityValue },
    { label: p.saltSpecColor, value: p.saltSpecColorValue },
    { label: p.saltSpecForms, value: p.saltSpecFormsValue },
  ];
  const packagingOptions = [
    { label: p.packagingSizesLabel, value: p.packagingSizesValue },
    { label: p.packagingMaterialsLabel, value: p.packagingMaterialsValue },
    { label: p.packagingPrivateLabel, value: p.packagingPrivateValue },
  ];

  return (
    <section id="products" className="bg-slate-50 py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
            {p.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-serif font-bold text-emerald-950 sm:text-4xl lg:text-5xl">
            {p.heading}
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">{p.sub}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-8">
          {/* CARD 1: RICE */}
          <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-emerald-950/10 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative h-56 w-full overflow-hidden sm:h-64">
              <Image
                src="https://images.pexels.com/photos/18328392/pexels-photo-18328392.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Premium Super Kernel Basmati and IRRI-9 Non-Basmati long grain rice from Pakistan, Sortex-cleaned for worldwide bulk export"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-950/90">
                  <Wheat className="h-5 w-5 text-amber-400" strokeWidth={1.5} />
                </span>
                <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-900">
                  {p.riceBadge}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h3 className="text-2xl font-serif font-bold text-emerald-950 sm:text-3xl">
                {p.riceTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.riceDesc}</p>

              <div className="mt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-600">
                  {p.variantsLabel}
                </p>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-slate-100 bg-slate-50 p-3.5">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-800">
                      {p.riceGroup1}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {p.riceGroup1Items.map((item) => (
                        <li key={item} className="text-xs font-medium text-slate-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-slate-100 bg-slate-50 p-3.5">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-800">
                      {p.riceGroup2}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {p.riceGroup2Items.map((item) => (
                        <li key={item} className="text-xs font-medium text-slate-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                {riceSpecs.map((spec) => (
                  <div key={spec.label} className="flex items-baseline justify-between gap-3 text-xs">
                    <span className="flex-shrink-0 font-semibold uppercase tracking-wide text-slate-500">
                      {spec.label}
                    </span>
                    <span className="text-right font-medium text-emerald-900">{spec.value}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-auto pt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-950 py-3.5 text-sm font-semibold text-white hover:bg-emerald-900 active:scale-[0.98] transition-all duration-200"
              >
                {p.inquireBtn}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </a>
            </div>
          </article>

          {/* CARD 2: SALT */}
          <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-emerald-950/10 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative h-56 w-full overflow-hidden sm:h-64">
              <Image
                src="https://images.pexels.com/photos/7779878/pexels-photo-7779878.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Authentic Himalayan pink salt crystals from Pakistan, hand-mined for worldwide bulk export"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-950/90">
                  <Gem className="h-5 w-5 text-amber-400" strokeWidth={1.5} />
                </span>
                <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-900">
                  {p.saltBadge}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h3 className="text-2xl font-serif font-bold text-emerald-950 sm:text-3xl">
                {p.saltTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.saltDesc}</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {p.saltVarieties.map((item) => (
                  <div key={item} className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5">
                    <p className="text-xs font-semibold text-emerald-950">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                {saltSpecs.map((spec) => (
                  <div key={spec.label} className="flex items-baseline justify-between gap-3 text-xs">
                    <span className="flex-shrink-0 font-semibold uppercase tracking-wide text-slate-500">
                      {spec.label}
                    </span>
                    <span className="text-right font-medium text-emerald-900">{spec.value}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-auto pt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-950 py-3.5 text-sm font-semibold text-white hover:bg-emerald-900 active:scale-[0.98] transition-all duration-200"
              >
                {p.inquireBtn}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </a>
            </div>
          </article>
        </div>

        {/* PACKAGING */}
        <div className="mt-8 rounded-2xl border border-emerald-950/10 bg-white p-6 sm:p-8">
          <div className="flex items-center gap-2.5">
            <Package className="h-5 w-5 text-amber-600" strokeWidth={2} />
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-600">
              {p.packagingHeading}
            </p>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {packagingOptions.map((item) => (
              <div key={item.label} className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800">
                  {item.label}
                </p>
                <p className="mt-1.5 text-sm font-medium text-slate-700">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
