const newsItems = [
  'Pakistan overtakes Vietnam to become world\u2019s 3rd-largest rice exporter, driven by 50%+ Basmati growth (Dec 2025)',
  'Govt introduces 9% FOB rebate on Basmati priced above $750/MT to ease exporter pressure (Jan 2026)',
  'USDA\u2019s July 2026 outlook points to stronger Chinese import demand reshaping global rice trade',
  'REAP delegation visits Oman to expand GCC trade relationships and supply chains (Apr 2026)',
  'Pakistan positions Basmati rice and Himalayan pink salt as key Gulf food-security exports at Gulfood 2026',
  'Zero import duties on rice across GCC markets continue to give Pakistani exporters a pricing edge',
  'Non-basmati exports to East Africa and China remain steady as EU and UK reward quality-focused supply',
  'Kainat Basmati remains Pakistan\u2019s flagship export grade amid strong 2026 stock availability',
  'Karachi and Port Qasim continue to handle the bulk of Pakistan\u2019s daily FOB rice trade volume',
  'Rising competition from India\u2019s return to open exports pushes Pakistani suppliers toward tighter, buyer-first pricing',
];

export default function IndustryPulse() {
  const loopItems = [...newsItems, ...newsItems];

  return (
    <div className="relative overflow-hidden border-y border-amber-500/20 bg-[#0A1930] py-3">
      <div className="flex items-center">
        <div className="z-10 flex flex-shrink-0 items-center gap-2 bg-[#0A1930] pl-4 pr-4 sm:pl-8">
          <span className="h-1.5 w-1.5 flex-shrink-0 animate-pulse rounded-full bg-amber-400" />
          <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.16em] text-amber-400">
            Rice Industry Pulse
          </span>
        </div>
        <div className="ticker-track flex flex-shrink-0 items-center gap-14 whitespace-nowrap">
          {loopItems.map((item, i) => (
            <span key={i} className="flex items-center gap-14 text-xs text-slate-300 sm:text-[13px]">
              {item}
              <span className="text-amber-500/40">&#9670;</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .ticker-track {
          animation: ticker-scroll 110s linear infinite;
        }
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
