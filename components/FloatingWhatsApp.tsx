'use client';

import { MessageCircle } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export default function FloatingWhatsApp() {
  return (
    <a
      href={COMPANY.whatsappHrefWithText(
        'Hello, I would like to inquire about your rice and pink salt export.'
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-105 active:scale-95 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping-slow" />
      <MessageCircle className="relative h-7 w-7" strokeWidth={2} fill="white" />

      <style>{`
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.6; }
          75%, 100% { transform: scale(1.6); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 2.2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </a>
  );
}
