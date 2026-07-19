import { PackageCheck, ShieldCheck, Ship, Boxes } from 'lucide-react';

const packagingOptions = [
  { label: 'Standard Sizes', detail: '5kg, 10kg, 20kg, 25kg & 50kg bags available for both products' },
  { label: 'Materials', detail: 'PP Bags, Jute Bags, or Non-Woven / Cotton Bags' },
  { label: 'Private Label', detail: 'Custom brand printing available per buyer requirement' },
];

const qcSteps = [
  { step: '01', title: 'Sourcing & Grading', detail: 'Raw material sourced directly and graded before acceptance.' },
  { step: '02', title: 'Sortex Cleaning', detail: 'Electronic color sorting removes discolored and foreign grains.' },
  { step: '03', title: 'Moisture Testing', detail: 'Every batch tested to stay within 13% moisture max.' },
  { step: '04', title: 'Dual Inspection', detail: 'Manual and machine inspection before any packing begins.' },
  { step: '05', title: 'Sample Approval', detail: 'Buyer approves a physical sample before the bulk order proceeds.' },
];

const exportSteps = [
  { step: '01', title: 'Order & Sample Confirmation', detail: 'Specification agreed, sample dispatched and approved by buyer.' },
  { step: '02', title: 'Procurement & Packing', detail: 'Stock procured, cleaned, and packed to the confirmed specification.' },
  { step: '03', title: 'Pre-Shipment Inspection', detail: 'Final quality and quantity check before container loading.' },
  { step: '04', title: 'Customs & Documentation', detail: 'Export documentation, phytosanitary and customs clearance prepared.' },
  { step: '05', title: 'Loading at Karachi Port', detail: 'Container loaded on FOB terms, or full CIF arrangement to your port.' },
  { step: '06', title: 'Shipping & Tracking', detail: 'Buyer receives shipping documents and tracking updates in transit.' },
];

export default function ExportProcess() {
  return (
    <section id="process" className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
            How We Operate
          </span>
          <h2 className="mt-4 text-3xl font-serif font-bold text-emerald-950 sm:text-4xl lg:text-5xl">
            Packaging, Quality Control &amp; Export Logistics
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            A transparent, repeatable process from Karachi Port to your
            warehouse — built for buyers who need consistency, not promises.
          </p>
        </div>

        {/* PACKAGING */}
        <div className="mt-14">
          <div className="flex items-center gap-3">
            <Boxes className="h-5 w-5 text-amber-600" strokeWidth={2} />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-950">
              Packaging Options
            </h3>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {packagingOptions.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-100 bg-slate-50 p-5"
              >
                <p className="text-sm font-bold text-emerald-950">{item.label}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* QUALITY CONTROL */}
        <div className="mt-16">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-amber-600" strokeWidth={2} />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-950">
              Strict Quality Control Flow
            </h3>
          </div>
          <ol className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-5">
            {qcSteps.map((item) => (
              <li
                key={item.step}
                className="rounded-xl border border-emerald-950/10 bg-white p-5 shadow-sm"
              >
                <span className="font-mono text-xs font-semibold text-amber-600">
                  {item.step}
                </span>
                <p className="mt-2 text-sm font-bold text-emerald-950">{item.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* EXPORT PROCESS */}
        <div className="mt-16">
          <div className="flex items-center gap-3">
            <Ship className="h-5 w-5 text-amber-600" strokeWidth={2} />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-950">
              Step-by-Step Export Process from Karachi Port
            </h3>
          </div>
          <ol className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {exportSteps.map((item) => (
              <li
                key={item.step}
                className="relative rounded-xl border border-emerald-950/10 bg-emerald-950 p-5"
              >
                <span className="font-mono text-xs font-semibold text-amber-400">
                  {item.step}
                </span>
                <p className="mt-2 text-sm font-bold text-white">{item.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-emerald-200/60">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* SUPPLY CAPACITY */}
        <div className="mt-16 rounded-2xl border border-emerald-950/10 bg-slate-50 p-6 sm:p-10">
          <div className="flex items-center gap-3">
            <PackageCheck className="h-5 w-5 text-amber-600" strokeWidth={2} />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-950">
              Supply Capacity Terms
            </h3>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-serif font-bold text-emerald-950">1 Container</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                Minimum Order Quantity (~20-25MT)
              </p>
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-emerald-950">Scalable</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                Monthly capacity grows with confirmed demand
              </p>
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-emerald-950">2-4 Weeks</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                Typical lead time from confirmed order to loading
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
