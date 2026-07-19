const faqs = [
  {
    question: 'What is your minimum order quantity (MOQ) for rice and pink salt export?',
    answer:
      'Our standard minimum order quantity is one container (approximately 20-25 metric tons). Smaller trial quantities can be discussed for first-time buyers.',
  },
  {
    question: 'Do you provide free samples before a bulk order?',
    answer:
      'Yes. We ship free physical samples via DHL or FedEx so buyers can verify quality before committing to a bulk order.',
  },
  {
    question: 'What shipping terms do you offer — FOB or CIF?',
    answer:
      'We offer both FOB (Karachi Port) and CIF to any global port. We ship worldwide, with particular experience across the UAE, Saudi Arabia, Qatar, Europe, and Africa.',
  },
  {
    question: 'What payment methods do you accept for export orders?',
    answer:
      'We accept a confirmed irrevocable Letter of Credit (L/C at sight) or advance Telegraphic Transfer (T/T) through secure international banking channels.',
  },
  {
    question: 'Which rice varieties do you export from Pakistan?',
    answer:
      'We export Super Kernel Basmati, 1121 Basmati (White, Sella, and Steam), and IRRI-6 long grain rice, all Sortex-cleaned and moisture-controlled to export specification.',
  },
  {
    question: 'Is your Himalayan pink salt certified food grade?',
    answer:
      'Yes, our Himalayan pink salt is 100% organic, hand-mined, and supplied to certified food-grade quality standards in fine powder, granule, or cooking block form.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FAQSection() {
  return (
    <section id="faq" className="bg-white py-16 sm:py-24 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
            Buyer FAQs
          </span>
          <h2 className="mt-4 text-3xl font-serif font-bold text-emerald-950 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-emerald-950 sm:text-base">
                {faq.question}
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-emerald-950/15 text-xs text-emerald-950 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
