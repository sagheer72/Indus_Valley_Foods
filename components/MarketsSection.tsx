import { Globe2 } from 'lucide-react';

const markets = [
  { country: 'United Arab Emirates', cities: 'Dubai, Abu Dhabi, Sharjah' },
  { country: 'Saudi Arabia', cities: 'Riyadh, Jeddah, Dammam' },
  { country: 'Qatar', cities: 'Doha' },
  { country: 'Kuwait', cities: 'Kuwait City' },
  { country: 'Oman', cities: 'Muscat, Sohar' },
  { country: 'Bahrain', cities: 'Manama' },
];

export default function MarketsSection() {
  return (
    <section id="markets" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-emerald-950/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-3">
              <Globe2 className="h-5 w-5 text-amber-600" strokeWidth={2} />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
                Markets We Serve
              </span>
            </div>
            <h2 className="mt-3 text-3xl font-serif font-bold text-emerald-950 sm:text-4xl">
              Exporting from Karachi to the Gulf
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-600">
            Direct shipping lanes from Karachi Port cover every major Gulf
            destination — with FOB and CIF terms available for each.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {markets.map((market) => (
            <div
              key={market.country}
              className="rounded-xl border border-emerald-950/10 bg-white p-5 text-center transition-shadow hover:shadow-md"
            >
              <p className="text-sm font-bold text-emerald-950">{market.country}</p>
              <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500">
                {market.cities}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
