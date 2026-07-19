'use client';

import { useRef, useState } from 'react';
import { ArrowRight, ChevronDown, CheckCircle, MessageCircle, Mail } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

type FormState = {
  fullName: string;
  corporateEmail: string;
  importerCountry: string;
  whatsappNumber: string;
  product: string;
  volume: string;
};

const initialState: FormState = {
  fullName: '',
  corporateEmail: '',
  importerCountry: '',
  whatsappNumber: '',
  product: '',
  volume: '',
};

function buildMessage(data: FormState) {
  return [
    'New RFQ - Indus Valley Foods website',
    `Name: ${data.fullName}`,
    `Email: ${data.corporateEmail}`,
    `Importer Country: ${data.importerCountry}`,
    `WhatsApp: ${data.whatsappNumber}`,
    `Product: ${data.product}`,
    `Target Volume: ${data.volume} metric tons`,
  ].join('\n');
}

export default function RFQForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sendVia, setSendVia] = useState<'whatsapp' | 'email' | null>(null);

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const submitVia = (channel: 'whatsapp' | 'email') => () => {
    if (formRef.current && !formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }

    setSubmitting(true);
    setSendVia(channel);

    const message = buildMessage(form);

    window.setTimeout(() => {
      if (channel === 'whatsapp') {
        window.open(COMPANY.whatsappHrefWithText(message), '_blank', 'noopener,noreferrer');
      } else {
        const subject = `RFQ: ${form.product || 'Product'} - ${form.importerCountry || 'Inquiry'}`;
        const mailHref = `${COMPANY.emailHrefWithSubject(subject)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailHref;
      }
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
          <CheckCircle className="h-8 w-8 text-emerald-700" strokeWidth={1.75} />
        </div>
        <h3 className="mt-6 text-xl font-serif font-bold text-emerald-950">
          Request Sent
        </h3>
        <p className="mt-2 max-w-sm text-sm text-slate-600">
          {sendVia === 'whatsapp'
            ? 'Your inquiry has been prepared on WhatsApp — send the message to complete your request. '
            : 'Your email app has been opened with your inquiry pre-filled — send it to complete your request. '}
          {COMPANY.owner} typically replies within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
          }}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-950/15 px-6 py-3 text-sm font-semibold text-emerald-950 hover:bg-emerald-950/5 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={form.fullName}
            onChange={update('fullName')}
            placeholder="John Carter"
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-700 focus:bg-white focus:ring-2 focus:ring-emerald-700/10"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="corporateEmail" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Corporate Email
          </label>
          <input
            id="corporateEmail"
            name="corporateEmail"
            type="email"
            required
            value={form.corporateEmail}
            onChange={update('corporateEmail')}
            placeholder="procurement@company.com"
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-700 focus:bg-white focus:ring-2 focus:ring-emerald-700/10"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="importerCountry" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Importer Country
          </label>
          <input
            id="importerCountry"
            name="importerCountry"
            type="text"
            required
            value={form.importerCountry}
            onChange={update('importerCountry')}
            placeholder="United Arab Emirates"
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-700 focus:bg-white focus:ring-2 focus:ring-emerald-700/10"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="whatsappNumber" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            WhatsApp Number
          </label>
          <input
            id="whatsappNumber"
            name="whatsappNumber"
            type="tel"
            required
            value={form.whatsappNumber}
            onChange={update('whatsappNumber')}
            placeholder="+971 50 123 4567"
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-700 focus:bg-white focus:ring-2 focus:ring-emerald-700/10"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="productSelection" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Product Selection
          </label>
          <div className="relative">
            <select
              id="productSelection"
              name="productSelection"
              required
              value={form.product}
              onChange={update('product')}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-700 focus:bg-white focus:ring-2 focus:ring-emerald-700/10"
            >
              <option value="" disabled>
                Select a product
              </option>
              <option value="Rice">Rice</option>
              <option value="Pink Salt">Pink Salt</option>
              <option value="Both">Both</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              strokeWidth={2}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="targetVolume" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Target Volume (Metric Tons)
          </label>
          <input
            id="targetVolume"
            name="targetVolume"
            type="number"
            min={1}
            required
            value={form.volume}
            onChange={update('volume')}
            placeholder="25"
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-700 focus:bg-white focus:ring-2 focus:ring-emerald-700/10"
          />
        </div>
      </div>

      <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={submitVia('whatsapp')}
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-4 text-sm font-semibold text-emerald-950 transition-all duration-200 hover:bg-amber-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
        >
          {submitting && sendVia === 'whatsapp' ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-950/40 border-t-emerald-950" />
          ) : (
            <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
          )}
          Send via WhatsApp
        </button>

        <button
          type="button"
          onClick={submitVia('email')}
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-950 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-900 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
        >
          {submitting && sendVia === 'email' ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          ) : (
            <Mail className="h-4 w-4" strokeWidth={2.5} />
          )}
          Send via Email
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        </button>
      </div>
    </form>
  );
}
