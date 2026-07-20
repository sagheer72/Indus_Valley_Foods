const newsItems = [
  'Pakistan overtakes Vietnam to become world\u2019s 3rd-largest rice exporter, UAE its top destination (Dec 2025 surge)',
  'REAP delegation visits Oman to strengthen GCC trade ties and expand Gulf supply chains (Apr 2026)',
  'Pakistan targets $10B in rice exports as government pledges Karachi Port support to exporters',
  'Zero import duties on rice in GCC markets give Pakistani exporters a competitive edge',
  'Pakistan positions Basmati rice and Himalayan pink salt as key Gulf food-security exports at Gulfood 2026',
  'Basmati shipments surge over 50% month-on-month, driving Pakistan\u2019s rice export rebound',
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
        <div className="ticker-track flex flex-shrink-0 items-center gap-12 whitespace-nowrap">
          {loopItems.map((item, i) => (
            <span key={i} className="flex items-center gap-12 text-xs text-slate-300 sm:text-[13px]">
              {item}
              <span className="text-amber-500/40">&#9670;</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .ticker-track {
          animation: ticker-scroll 55s linear infinite;
        }
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
