import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import IndustryPulse from '@/components/IndustryPulse';
import ProductShowcase from '@/components/ProductShowcase';
import SpecMatrix from '@/components/SpecMatrix';
import AboutSection from '@/components/AboutSection';
import MarketsSection from '@/components/MarketsSection';
import LogisticsMap from '@/components/LogisticsMap';
import ExportProcess from '@/components/ExportProcess';
import TrustBar from '@/components/TrustBar';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <IndustryPulse />
      <ProductShowcase />
      <SpecMatrix />
      <AboutSection />
      <MarketsSection />
      <LogisticsMap />
      <ExportProcess />
      <TrustBar />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
