import Image from 'next/image';
import { CheckCircle, ArrowRight, Wheat, Gem, Package } from 'lucide-react';

const riceVariantGroups = [
  {
    label: 'Basmati — Aromatic Long Grain',
    items: ['Super Kernel Basmati (AGL 7.2–7.4mm)', '1121 Basmati — Sella & Steam'],
  },
  {
    label: 'Non-Basmati — Bulk Long Grain',
    items: ['IRRI-9 Long Grain (AGL 6.0–6.2mm)', 'IRRI-6 Long Grain'],
  },
];

const riceSpecs = [
  { label: 'Broken %', value: '2–5% Max (per buyer requirement)' },
  { label: 'Moisture', value: '13% Max' },
  { label: 'Milling', value: 'Well-Milled, Double Polished, Sortex Cleaned' },
];

const saltVarieties = [
  'Fine Powder',
  'Coarse Granules',
  'Lumps',
  'Purity (NaCl) 98–99%',
];

const saltSpecs = [
  { label: 'Purity (NaCl)', value: '98% – 99%' },
  { label: 'Color', value: 'Premium Light Pink / Dark Pink' },
  { label: 'Forms', value: 'Coarse Granules, Fine Powder, Lumps' },
];

const packagingOptions = [
  { label: 'Available Sizes', value: '5kg, 10kg, 20kg, 25kg & 50kg' },
  { label: 'Material Types', value: 'PP Bags, Jute Bags, Non-Woven / Cotton Bags' },
  { label: 'Private Label', value: 'Custom brand printing available on request' },
];

function SpecList({ specs }: { specs: { label: string; value: string }[] }) {
  return (
    <div className="mt-5 space-y-2 border-t border-slate-100 pt-5">
      {specs.map((spec) => (
        <div key={spec.label} className="flex items-baseline justify-between gap-3 text-xs">
          <span className="flex-shrink-0 font-semibold uppercase tracking-wide text-slate-500">
            {spec.label}
          </span>
          <span className="text-right font-medium text-emerald-900">{spec.value}</span>
        </div>
      ))}
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="products" className="bg-slate-50 py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
            Our Commodities
          </span>
          <h2 className="mt-4 text-3xl font-serif font-bold text-emerald-950 sm:text-4xl lg:text-5xl">
            Two Commodities. Export-Grade Specification.
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Every shipment is Sortex-cleaned, moisture-controlled, and packed to
            your exact specification before it leaves Karachi Port.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-8">
          {/* CARD 1: RICE */}
          <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-emerald-950/10 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative h-56 w-full overflow-hidden sm:h-64">
              <Image
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?fm=jpg&q=80&w=1200&auto=format&fit=crop"
                alt="Premium Super Kernel Basmati and IRRI-9 Non-Basmati long grain rice from Pakistan, Sortex-cleaned for worldwide bulk export including Dubai and Gulf markets"
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
                  Product 01
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h3 className="text-2xl font-serif font-bold text-emerald-950 sm:text-3xl">
                Premium Pakistani Rice
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Sortex-cleaned Basmati and IRRI Non-Basmati long grain, milled
                to strict export specification for global food procurement
                teams worldwide.
              </p>

              <div className="mt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-600">
                  Variants Offered
                </p>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {riceVariantGroups.map((group) => (
                    <div
                      key={group.label}
                      className="rounded-lg border border-slate-100 bg-slate-50 p-3.5"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-800">
                        {group.label}
                      </p>
                      <ul className="mt-2 space-y-1">
                        {group.items.map((item) => (
                          <li key={item} className="text-xs font-medium text-slate-700">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <SpecList specs={riceSpecs} />

              <a
                href="#contact"
                className="mt-auto pt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-950 py-3.5 text-sm font-semibold text-white hover:bg-emerald-900 active:scale-[0.98] transition-all duration-200"
              >
                Inquire Now
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
                src="https://images.unsplash.com/photo-1629285464605-8e6493153fdb?fm=jpg&q=80&w=1200&auto=format&fit=crop"
                alt="Authentic Himalayan pink salt crystals from Pakistan, hand-mined for worldwide bulk export including Saudi Arabia and the Gulf"
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
                  Product 02
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h3 className="text-2xl font-serif font-bold text-emerald-950 sm:text-3xl">
                Himalayan Pink Salt
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Authentic, hand-mined Himalayan pink salt, pure and unrefined,
                supplied as fine powder, coarse granules, or lumps.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {saltVarieties.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5"
                  >
                    <p className="text-xs font-semibold text-emerald-950">{item}</p>
                  </div>
                ))}
              </div>

              <SpecList specs={saltSpecs} />

              <a
                href="#contact"
                className="mt-auto pt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-950 py-3.5 text-sm font-semibold text-white hover:bg-emerald-900 active:scale-[0.98] transition-all duration-200"
              >
                Inquire Now
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </a>
            </div>
          </article>
        </div>

        {/* PACKAGING — applies to both products */}
        <div className="mt-8 rounded-2xl border border-emerald-950/10 bg-white p-6 sm:p-8">
          <div className="flex items-center gap-2.5">
            <Package className="h-5 w-5 text-amber-600" strokeWidth={2} />
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-600">
              Packaging Options — Applies to Both Products
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
