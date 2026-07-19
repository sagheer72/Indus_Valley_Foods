import Image from 'next/image';
import { CheckCircle, ArrowRight, Wheat, Gem } from 'lucide-react';

const riceVarieties = [
  'Super Kernel Basmati',
  '1121 Basmati — Sella & Steam',
  'IRRI-6 Long Grain',
  'Double Polished, Well-Cleaned',
];

const riceFeatures = [
  '100% Sortex-cleaned, extra-long grain length (8.35mm+)',
  'Strictly moisture-controlled, premium double-polished milling grade',
  'Packing from 2kg retail pouches to 50kg PP / Jute bags',
];

const saltVarieties = [
  'Fine Grain — Food Grade',
  'Coarse Grain — Cooking',
  'Cooking Blocks / Tiles',
  '100% Organic Purity',
];

const saltFeatures = [
  '100% organic, hand-mined, unrefined mineral composition',
  'Rich in 84+ trace minerals, certified food-grade quality control',
  'Retail pouches through heavy-duty bulk export bags',
];

export default function ProductShowcase() {
  return (
    <section id="products" className="bg-slate-50 py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
            Our Commodities
          </span>
          <h2 className="mt-4 text-3xl font-serif font-bold text-emerald-950 sm:text-4xl lg:text-5xl">
            Two Commodities. Uncompromising Export Standards.
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
                alt="Premium long-grain Super Kernel and 1121 Basmati rice from Pakistan, Sortex-cleaned for worldwide bulk export including Dubai and Gulf markets"
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
                Premium Pakistani Basmati Rice
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Sortex-cleaned Super Kernel and 1121 Basmati, plus IRRI-6 long
                grain, milled to strict export specification for global food
                procurement teams worldwide.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {riceVarieties.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5"
                  >
                    <p className="text-xs font-semibold text-emerald-950">{item}</p>
                  </div>
                ))}
              </div>

              <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-6">
                {riceFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-700"
                      strokeWidth={2}
                    />
                    {item}
                  </li>
                ))}
              </ul>

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
                alt="Authentic Himalayan pink salt crystals from Pakistan, 100% organic and hand-mined for worldwide bulk export including Saudi Arabia and the Gulf"
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
                Verified Himalayan Pink Salt
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Authentic, hand-mined Himalayan pink salt, pure and unrefined,
                supplied as fine or coarse grain, or solid cooking blocks.
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

              <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-6">
                {saltFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600"
                      strokeWidth={2}
                    />
                    {item}
                  </li>
                ))}
              </ul>

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
      </div>
    </section>
  );
}
