import RFQForm from './RFQForm';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
            Request For Quotation
          </span>
          <h2 className="mt-4 text-3xl font-serif font-bold text-emerald-950 sm:text-4xl lg:text-5xl">
            Get Your Custom Export Quote
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Tell us what you need — send it straight to WhatsApp or Email and
            our team replies within 24 hours with current FOB/CIF pricing.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-emerald-950/10 bg-white p-6 shadow-sm sm:mt-12 sm:p-10">
          <RFQForm />
        </div>
      </div>
    </section>
  );
}
