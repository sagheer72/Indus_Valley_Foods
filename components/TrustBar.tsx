import { Ship, ShieldCheck, PackageCheck, PlaneTakeoff } from 'lucide-react';

const items = [
  {
    icon: Ship,
    title: 'Direct Karachi Port Export',
    body: 'Optimized FOB and CIF timelines shipped straight from Karachi Port to any global destination.',
  },
  {
    icon: ShieldCheck,
    title: 'Uncompromising Quality',
    body: 'Strict moisture and sorting checks on every batch before it is approved for packing.',
  },
  {
    icon: PackageCheck,
    title: 'Bespoke Packaging',
    body: 'Custom branding, retail pouches, or heavy-duty bulk bags built around your market.',
  },
  {
    icon: PlaneTakeoff,
    title: 'Free Worldwide Sampling',
    body: 'Expedited global dispatch via DHL and FedEx, at no cost before you commit.',
  },
];

export default function TrustBar() {
  return (
    <section id="quality" className="bg-emerald-950 py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">
            Why Global Buyers Trust Us
          </span>
          <h2 className="mt-4 text-3xl font-serif font-bold text-white sm:text-4xl lg:text-5xl">
            Enterprise-Grade Compliance
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col items-center bg-emerald-950 p-8 text-center sm:items-start sm:text-left"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15">
                <Icon className="h-6 w-6 text-amber-400" strokeWidth={1.5} />
              </div>
              <h4 className="mt-5 text-base font-semibold text-white">{title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-emerald-200/60">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
