import { Target, Handshake, Sprout } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

const pillars = [
  {
    icon: Sprout,
    title: 'Sourced Directly',
    detail:
      'Rice and Himalayan pink salt sourced directly from Karachi-based mills and the Salt Range, keeping the supply chain short and quality traceable.',
  },
  {
    icon: Target,
    title: 'Founder-Led',
    detail:
      `Run personally by ${COMPANY.owner} — every inquiry, sample, and shipment is handled directly, with no middlemen between you and the source.`,
  },
  {
    icon: Handshake,
    title: 'Built on Long-Term Trade',
    detail:
      'Focused on transparent pricing, sample-first verification, and consistent quality — the fundamentals of a trade relationship worth repeating.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
              About Us
            </span>
            <h2 className="mt-4 text-3xl font-serif font-bold text-emerald-950 sm:text-4xl">
              A Direct Line from Karachi to Your Warehouse
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
              {COMPANY.name} was founded to connect Pakistan&apos;s rice mills
              and salt mines directly with buyers abroad — without layers of
              brokers in between. We work with Super Kernel Basmati, IRRI-9
              Non-Basmati, and Himalayan pink salt, sourced from Karachi and
              the Salt Range, and shipped on terms that make sense for both
              sides of the trade.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              As a founder-led export business, every buyer gets direct
              access to {COMPANY.owner} — no call centers, no account
              managers passing your inquiry along. Just a straight line to
              the person closing your deal.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {pillars.map(({ icon: Icon, title, detail }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl border border-emerald-950/10 bg-slate-50 p-5"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-emerald-950">
                  <Icon className="h-5 w-5 text-amber-400" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-bold text-emerald-950">{title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
