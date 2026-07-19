import { Globe2 } from 'lucide-react';

const regions = [
  {
    region: 'Gulf & Middle East',
    countries: 'UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain',
  },
  {
    region: 'Europe',
    countries: 'UK, Germany, Netherlands, Italy, Spain',
  },
  {
    region: 'Africa',
    countries: 'South Africa, Kenya, Nigeria, Egypt',
  },
  {
    region: 'Central & South Asia',
    countries: 'Kazakhstan, Uzbekistan, Afghanistan, Iran',
  },
  {
    region: 'Far East',
    countries: 'China, Malaysia, Indonesia, Philippines',
  },
  {
    region: 'Americas',
    countries: 'United States, Canada',
  },
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
              Exporting from Karachi to the World
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-600">
            Container shipping lanes from Karachi Port reach every major
            region worldwide — with FOB and CIF terms available for each
            destination.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((item) => (
            <div
              key={item.region}
              className="rounded-xl border border-emerald-950/10 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="text-sm font-bold text-emerald-950">{item.region}</p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-slate-500">
                {item.countries}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
