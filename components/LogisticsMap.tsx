import { Ruler, ScanLine, Ship } from 'lucide-react';

const processCards = [
  {
    icon: Ruler,
    title: 'Grain Length Verification',
    detail: 'Every batch is measured against its declared AGL before packing, with results shared on request.',
  },
  {
    icon: ScanLine,
    title: 'Optical Colour Sorting',
    detail: 'Sortex-style optical sorting removes discolored and foreign grains prior to final packing.',
  },
  {
    icon: Ship,
    title: 'Karachi Port Loading',
    detail: 'Containers are loaded at Karachi Port terminals for direct FOB or CIF dispatch to your destination.',
  },
];

export default function LogisticsMap() {
  return (
    <section className="bg-[#0A1930] py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">
            Logistics
          </span>
          <h2 className="mt-4 text-3xl font-serif font-bold text-white sm:text-4xl lg:text-5xl">
            Karachi Port to Your Gulf Hub
          </h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Direct shipping lanes from Karachi&apos;s KICT / PICT terminals to
            major Gulf import hubs.
          </p>
        </div>

        {/* Stylized route diagram */}
        <div className="mx-auto mt-14 max-w-4xl">
          <svg viewBox="0 0 800 220" className="w-full" role="img" aria-label="Shipping route from Karachi Port to Jebel Ali and Jeddah">
            <line x1="90" y1="110" x2="710" y2="60" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.7" />
            <line x1="90" y1="110" x2="710" y2="160" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.7" />

            {/* Karachi node */}
            <circle cx="90" cy="110" r="8" fill="#f59e0b" />
            <text x="90" y="145" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="700">Karachi Port</text>
            <text x="90" y="163" textAnchor="middle" fill="#94a3b8" fontSize="10">KICT / PICT Terminals</text>

            {/* Jebel Ali node */}
            <circle cx="710" cy="60" r="7" fill="#ffffff" />
            <text x="710" y="40" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="700">Jebel Ali</text>
            <text x="710" y="24" textAnchor="middle" fill="#94a3b8" fontSize="10">Dubai, UAE</text>

            {/* Jeddah node */}
            <circle cx="710" cy="160" r="7" fill="#ffffff" />
            <text x="710" y="180" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="700">Jeddah Port</text>
            <text x="710" y="196" textAnchor="middle" fill="#94a3b8" fontSize="10">Saudi Arabia</text>
          </svg>
        </div>

        {/* Honest process cards — no fabricated certifications */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {processCards.map(({ icon: Icon, title, detail }) => (
            <div
              key={title}
              className="rounded-xl border border-amber-500/20 bg-white/5 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500/15">
                <Icon className="h-5 w-5 text-amber-400" strokeWidth={1.75} />
              </div>
              <p className="mt-4 text-sm font-bold text-white">{title}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
