import { Download, ArrowRight, CheckCircle, Wheat, Gem } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-emerald-950 pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full border border-amber-400" />
        <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full border border-amber-400 scale-75" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-16">
        <div className="text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-400/40 bg-amber-400/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-amber-300">
              Direct Exporter &middot; Karachi, Pakistan
            </span>
          </div>

          <h1 className="text-4xl font-serif font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl xl:text-[64px]">
            Direct Basmati Rice &amp; Himalayan Pink Salt,{' '}
            <span className="text-amber-400 italic">Exported from Pakistan</span> to
            the Gulf.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-emerald-100/80 sm:text-lg lg:mx-0">
            Indus Valley Foods is a Karachi-based direct exporter supplying
            internationally certified, Sortex-cleaned Basmati rice and pure
            Himalayan pink salt to importers across the UAE, Saudi Arabia, Qatar
            and the wider Gulf — on flexible FOB and CIF terms.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-4 text-sm font-semibold text-emerald-950 shadow-lg shadow-amber-500/30 hover:bg-amber-600 active:scale-[0.98] transition-all duration-200 sm:text-base"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </a>
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 active:scale-[0.98] transition-all duration-200 sm:text-base"
            >
              <Download className="h-5 w-5" strokeWidth={2} />
              View Export Catalog
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold text-white sm:text-3xl">FOB</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-emerald-200/60">
                &amp; CIF Terms
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold text-white sm:text-3xl">100%</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-emerald-200/60">
                Sortex Cleaned
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold text-white sm:text-3xl">1</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-emerald-200/60">
                Container MOQ
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative rounded-2xl border border-amber-400/20 bg-emerald-900/50 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            <div className="absolute -top-4 left-6 rounded-full bg-amber-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-950 shadow-md">
              Export Grade Specification
            </div>

            <div className="mt-4 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500/15">
                  <Wheat className="h-5 w-5 text-amber-400" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Super Kernel / 1121 Basmati</p>
                  <p className="text-xs text-emerald-200/60">Extra Long Grain</p>
                </div>
              </div>
              <CheckCircle className="h-5 w-5 text-amber-400" strokeWidth={2} />
            </div>

            <div className="flex items-center justify-between border-b border-white/10 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500/15">
                  <Gem className="h-5 w-5 text-amber-400" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Himalayan Pink Salt</p>
                  <p className="text-xs text-emerald-200/60">Food Grade, Mineral Rich</p>
                </div>
              </div>
              <CheckCircle className="h-5 w-5 text-amber-400" strokeWidth={2} />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-[10px] uppercase tracking-wider text-emerald-200/60">
                  Moisture
                </p>
                <p className="mt-1 text-lg font-bold text-white">&lt; 12.5%</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-[10px] uppercase tracking-wider text-emerald-200/60">
                  Grain Length
                </p>
                <p className="mt-1 text-lg font-bold text-white">8.35mm+</p>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-3.5 text-sm font-semibold text-emerald-950 hover:bg-amber-600 active:scale-[0.98] transition-all duration-200"
            >
              Request Current Rates
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
