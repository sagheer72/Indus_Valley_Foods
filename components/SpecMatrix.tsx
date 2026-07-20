const riceMatrix = [
  {
    variety: 'Super Kernel Basmati',
    type: 'Basmati — Aromatic',
    agl: '7.2mm – 7.4mm',
    moisture: '13% Max',
    broken: '2% – 5% Max',
    use: 'Premium retail & food service',
  },
  {
    variety: '1121 Kainat Basmati',
    type: 'Basmati — Extra Long',
    agl: '8.3mm +',
    moisture: '13% Max',
    broken: '2% – 5% Max',
    use: 'Premium export, extra-long grain buyers',
  },
  {
    variety: 'IRRI-9 Non-Basmati',
    type: 'Non-Basmati — Long Grain',
    agl: '6.0mm – 6.2mm',
    moisture: '13% Max',
    broken: '5% – 25% (per order)',
    use: 'High-volume bulk export',
  },
  {
    variety: 'IRRI-6 Non-Basmati',
    type: 'Non-Basmati — Long Grain',
    agl: '6.0mm',
    moisture: '13% Max',
    broken: '5% – 25% (per order)',
    use: 'Catering, camps & institutional buyers',
  },
];

export default function SpecMatrix() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
            Technical Reference
          </span>
          <h2 className="mt-4 text-3xl font-serif font-bold text-[#0A1930] sm:text-4xl lg:text-5xl">
            Rice Grain Specification Matrix
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            A scannable reference across our full Basmati and Non-Basmati range
            — exact figures shared and reconfirmed on every quotation.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-[#0A1930]/10">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="bg-[#0A1930] text-white">
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">Variety</th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">Category</th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">AGL</th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">Moisture</th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">Broken %</th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">Typical Use</th>
              </tr>
            </thead>
            <tbody>
              {riceMatrix.map((row, i) => (
                <tr
                  key={row.variety}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                >
                  <td className="px-5 py-4 text-sm font-bold text-[#0A1930]">{row.variety}</td>
                  <td className="px-5 py-4 text-xs font-medium text-amber-700">{row.type}</td>
                  <td className="px-5 py-4 font-mono text-xs text-slate-700">{row.agl}</td>
                  <td className="px-5 py-4 font-mono text-xs text-slate-700">{row.moisture}</td>
                  <td className="px-5 py-4 font-mono text-xs text-slate-700">{row.broken}</td>
                  <td className="px-5 py-4 text-xs text-slate-600">{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-slate-400">
          Figures represent our standard export specification. Broken % is
          adjustable per buyer requirement and confirmed on the pre-shipment
          sample.
        </p>
      </div>
    </section>
  );
}
