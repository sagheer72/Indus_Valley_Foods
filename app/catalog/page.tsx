import Link from 'next/link';
import { ArrowLeft, ArrowRight, Ship, CreditCard, Truck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { COMPANY } from '@/lib/constants';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://indusvalley-foods.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Export Catalog',
      item: 'https://indusvalley-foods.com/catalog',
    },
  ],
};

function ManifestRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-dashed border-amber-400/25 py-2.5 text-[13px] last:border-b-0">
      <span className="text-emerald-200/60">{label}</span>
      <span className="font-medium text-amber-300">{value}</span>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <section className="bg-emerald-950 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-200/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            Back to home
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-px w-10 bg-amber-400" />
            <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-amber-300">
              Export Catalog &middot; 2026
            </span>
          </div>

          <h1 className="mt-4 max-w-2xl text-4xl font-serif font-bold leading-tight text-white sm:text-5xl">
            Nature&apos;s Finest, <span className="text-amber-400 italic">Bound for the World</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-emerald-100/80 sm:text-base">
            Full specifications for every product line offered by {COMPANY.name},
            Karachi. Shipped on FOB or CIF terms with free physical samples on request.
          </p>
        </div>
      </section>

      {/* RICE */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
            Product Line 01
          </span>
          <h2 className="mt-3 text-3xl font-serif font-bold text-emerald-950 sm:text-4xl">
            Premium Pakistani Rice
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Varieties
              </h3>
              <div className="mt-4 flex flex-col divide-y divide-slate-200 border-y border-slate-200">
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-sm font-medium text-slate-800">1121 Basmati — White</span>
                  <span className="text-xs font-mono text-emerald-700">RETAIL / WHOLESALE</span>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-sm font-medium text-slate-800">1121 Basmati — Creamy Sella</span>
                  <span className="text-xs font-mono text-emerald-700">PARBOILED</span>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-sm font-medium text-slate-800">1121 Basmati — Steam</span>
                  <span className="text-xs font-mono text-emerald-700">QUICK-COOK</span>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-sm font-medium text-slate-800">IRRI-9 Non-Basmati</span>
                  <span className="text-xs font-mono text-emerald-700">HIGH-VOLUME BULK EXPORT</span>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-sm font-medium text-slate-800">IRRI-6 / PK-385</span>
                  <span className="text-xs font-mono text-emerald-700">COMMERCIAL LONG GRAIN</span>
                </div>
              </div>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-slate-500">
                Packing Options
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {['1KG Pouch', '2KG Pouch', '5KG Pouch', '25KG PP / Jute', '50KG PP / Jute'].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-emerald-200 px-3 py-1.5 text-xs font-mono text-emerald-800"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-2xl bg-emerald-950 p-6 sm:p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200/50">
                  Spec Sheet
                </span>
                <span className="rounded-full bg-amber-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-950">
                  Verified
                </span>
              </div>
              <ManifestRow label="Cleaning" value="100% Sortex Cleaned" />
              <ManifestRow label="Avg. Grain Length" value="8.35mm +" />
              <ManifestRow label="Moisture" value="Below 12.5%" />
              <ManifestRow label="Milling" value="Well-Milled, Double Polished" />
            </div>
          </div>
        </div>
      </section>

      {/* SALT */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
            Product Line 02
          </span>
          <h2 className="mt-3 text-3xl font-serif font-bold text-emerald-950 sm:text-4xl">
            Himalayan Pink Salt
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="order-2 rounded-2xl bg-emerald-950 p-6 sm:p-8 lg:order-1">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200/50">
                  Spec Sheet
                </span>
                <span className="rounded-full bg-amber-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-950">
                  Verified
                </span>
              </div>
              <ManifestRow label="Sourcing" value="100% Organic, Hand-Mined" />
              <ManifestRow label="Grade" value="Certified Food Grade" />
              <ManifestRow label="Mineral Content" value="84+ Trace Minerals" />
              <ManifestRow label="Origin" value="Salt Range, Punjab" />
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Varieties
              </h3>
              <div className="mt-4 flex flex-col divide-y divide-slate-200 border-y border-slate-200">
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-sm font-medium text-slate-800">Extra Fine Powder</span>
                  <span className="text-xs font-mono text-emerald-700">TABLE / SEASONING</span>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-sm font-medium text-slate-800">Medium Granules — 1–2mm</span>
                  <span className="text-xs font-mono text-emerald-700">COOKING</span>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-sm font-medium text-slate-800">Medium Granules — 2–5mm</span>
                  <span className="text-xs font-mono text-emerald-700">GRINDER / MILL FILL</span>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-sm font-medium text-slate-800">Cooking Blocks / Tiles</span>
                  <span className="text-xs font-mono text-emerald-700">GRILL &amp; SERVING</span>
                </div>
              </div>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-slate-500">
                Packing Options
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {['500g Pouch', '1KG Pouch', '25KG Bulk Laminate Bag'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-emerald-200 px-3 py-1.5 text-xs font-mono text-emerald-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TERMS */}
      <section className="bg-emerald-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">
            Trade Terms
          </span>
          <h2 className="mt-3 text-3xl font-serif font-bold text-white sm:text-4xl">
            Logistics &amp; Payment
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
            <div className="bg-emerald-950 p-7">
              <Ship className="h-6 w-6 text-amber-400" strokeWidth={1.5} />
              <h4 className="mt-4 text-base font-semibold text-white">Shipping Terms</h4>
              <p className="mt-2 text-sm text-emerald-200/60">
                FOB Karachi Port, or CIF to any global port — with particular
                experience across Gulf, European, and worldwide shipping routes.
              </p>
            </div>
            <div className="bg-emerald-950 p-7">
              <CreditCard className="h-6 w-6 text-amber-400" strokeWidth={1.5} />
              <h4 className="mt-4 text-base font-semibold text-white">Payment Terms</h4>
              <p className="mt-2 text-sm text-emerald-200/60">
                Confirmed irrevocable Letter of Credit (L/C at sight) or advance
                Telegraphic Transfer (T/T) only.
              </p>
            </div>
            <div className="bg-emerald-950 p-7">
              <Truck className="h-6 w-6 text-amber-400" strokeWidth={1.5} />
              <h4 className="mt-4 text-base font-semibold text-white">Samples</h4>
              <p className="mt-2 text-sm text-emerald-200/60">
                Free physical product samples for verification, shipped via
                DHL or FedEx upon request.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-4 text-sm font-semibold text-emerald-950 hover:bg-amber-600 active:scale-[0.98] transition-all duration-200"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
