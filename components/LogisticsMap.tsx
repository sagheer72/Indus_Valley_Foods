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
    detail: 'Containers are loaded at Karachi Port terminals for direct FOB or CIF dispatch worldwide.',
  },
];

// Hub positions plotted on a stylized globe (aesthetic, not literal cartography)
const hubs = [
  { name: 'Dubai', region: 'Gulf', x: 430, y: 215 },
  { name: 'Jeddah', region: 'Middle East', x: 350, y: 258 },
  { name: 'London', region: 'Europe', x: 290, y: 118 },
  { name: 'Nairobi', region: 'Africa', x: 400, y: 328 },
  { name: 'Almaty', region: 'C. Asia', x: 530, y: 140 },
  { name: 'Shanghai', region: 'Far East', x: 655, y: 195 },
  { name: 'New York', region: 'Americas', x: 115, y: 190 },
];

const KARACHI = { x: 470, y: 245 };

function arcPath(x1: number, y1: number, x2: number, y2: number, lift = 55) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - lift;
  return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
}

export default function LogisticsMap() {
  return (
    <section className="relative overflow-hidden bg-[#08111F] py-16 sm:py-24 lg:py-28">
      {/* ambient glow backdrop */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, #f59e0b, transparent)' }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">
            Global Logistics
          </span>
          <h2 className="mt-4 text-3xl font-serif font-bold text-white sm:text-4xl lg:text-5xl">
            Karachi Port to the World
          </h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            One origin, worldwide reach — direct FOB and CIF shipping lanes
            from Karachi&apos;s KICT / PICT terminals to every major import hub.
          </p>
        </div>

        {/* World route diagram */}
        <div className="relative mx-auto mt-14 max-w-4xl rounded-3xl border border-amber-500/15 bg-white/[0.02] p-4 shadow-[0_0_80px_-20px_rgba(245,158,11,0.25)] sm:p-8">
          <svg viewBox="0 0 770 380" className="w-full" role="img" aria-label="Animated shipping routes from Karachi Port to global hubs including Dubai, London, Nairobi, Almaty, Shanghai, and New York">
            <defs>
              <radialGradient id="karachiGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.25" />
              </linearGradient>
            </defs>

            {/* faint globe grid */}
            <ellipse cx="400" cy="200" rx="360" ry="170" fill="none" stroke="#f59e0b" strokeOpacity="0.12" strokeWidth="1" />
            <ellipse cx="400" cy="200" rx="360" ry="80" fill="none" stroke="#f59e0b" strokeOpacity="0.1" strokeWidth="1" />
            <ellipse cx="400" cy="200" rx="230" ry="170" fill="none" stroke="#f59e0b" strokeOpacity="0.1" strokeWidth="1" />
            <line x1="40" y1="200" x2="760" y2="200" stroke="#f59e0b" strokeOpacity="0.1" strokeWidth="1" />

            {/* Karachi glow halo */}
            <circle cx={KARACHI.x} cy={KARACHI.y} r="42" fill="url(#karachiGlow)" opacity="0.5" />

            {/* animated route arcs */}
            {hubs.map((hub, i) => (
              <path
                key={hub.name}
                d={arcPath(KARACHI.x, KARACHI.y, hub.x, hub.y, 50 + (i % 3) * 12)}
                fill="none"
                stroke="url(#arcGradient)"
                strokeWidth="1.6"
                strokeDasharray="7 7"
                className="route-line"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            ))}

            {/* Karachi origin node */}
            <circle cx={KARACHI.x} cy={KARACHI.y} r="5" fill="#0A1930" stroke="#f59e0b" strokeWidth="2" />
            <circle cx={KARACHI.x} cy={KARACHI.y} r="5" fill="#f59e0b" className="pulse-dot" />
            <text x={KARACHI.x} y={KARACHI.y + 30} textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="700">Karachi</text>
            <text x={KARACHI.x} y={KARACHI.y + 46} textAnchor="middle" fill="#94a3b8" fontSize="10.5">KICT / PICT · Origin Port</text>

            {/* Hub nodes */}
            {hubs.map((hub, i) => (
              <g key={hub.name}>
                <circle cx={hub.x} cy={hub.y} r="4.5" fill="#ffffff" opacity="0.9" />
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r="4.5"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1"
                  className="ping-ring"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
                <text x={hub.x} y={hub.y - 14} textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="700">
                  {hub.name}
                </text>
                <text x={hub.x} y={hub.y - 1} textAnchor="middle" fill="#94a3b8" fontSize="9.5">
                  {hub.region}
                </text>
              </g>
            ))}
          </svg>

          <style>{`
            .route-line {
              animation: dash-flow 3.5s linear infinite;
            }
            @keyframes dash-flow {
              to { stroke-dashoffset: -140; }
            }
            .pulse-dot {
              animation: pulse-scale 2s ease-in-out infinite;
              transform-origin: center;
            }
            @keyframes pulse-scale {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.5; transform: scale(1.6); }
            }
            .ping-ring {
              animation: ping-ring 2.4s ease-out infinite;
              transform-origin: center;
            }
            @keyframes ping-ring {
              0% { r: 4.5; opacity: 0.9; }
              100% { r: 13; opacity: 0; }
            }
          `}</style>
        </div>

        {/* Live-motion cargo footage */}
        <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-amber-500/15">
          <video
            className="h-[280px] w-full object-cover sm:h-[380px]"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="https://images.pexels.com/videos/3840442/aerial-barge-boat-business-3840442.jpeg?auto=compress&w=1600"
          >
            <source
              src="https://videos.pexels.com/video-files/3840442/3840442-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#08111F] via-[#08111F]/10 to-transparent" />
          <div className="absolute bottom-4 left-5 sm:bottom-6 sm:left-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-400">
              Container Shipping in Motion
            </p>
            <p className="mt-1 text-sm font-bold text-white sm:text-base">
              Global freight lanes, moving 24/7
            </p>
          </div>
        </div>

        {/* Honest process cards — no fabricated certifications */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {processCards.map(({ icon: Icon, title, detail }) => (
            <div
              key={title}
              className="group rounded-2xl border border-amber-500/15 bg-white/[0.03] p-6 transition-all duration-300 hover:border-amber-500/40 hover:bg-white/[0.06]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15 transition-colors group-hover:bg-amber-500/25">
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
