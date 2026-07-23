import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-emerald-950 px-6 text-center">
      <span className="text-xs font-medium uppercase tracking-[0.24em] text-amber-400">
        Indus Valley Foods
      </span>
      <h1 className="mt-6 text-6xl font-serif font-bold text-white sm:text-7xl">404</h1>
      <p className="mt-4 max-w-sm text-sm text-emerald-100/70 sm:text-base">
        This page doesn&apos;t exist or has moved. Let&apos;s get you back to
        the export catalog.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-emerald-950 hover:bg-amber-600 active:scale-[0.98] transition-all duration-200"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
        Back to Homepage
      </Link>
    </main>
  );
}
