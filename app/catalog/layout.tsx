import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Catalog | Indus Valley Foods',
  description:
    'Full product catalog for Indus Valley Foods — 1121 Basmati rice, IRRI-6 long grain, and Himalayan pink salt, with specifications, packaging, and export terms.',
};

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
