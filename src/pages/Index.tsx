import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RetailPriceSection } from "@/components/RetailPriceSection";
import { PriceListSection } from "@/components/PriceListSection";
import { ProductGrid } from "@/components/ProductGrid";
import { HeritageSection } from "@/components/HeritageSection";
import { QualitySection } from "@/components/QualitySection";
import { GiftingSection } from "@/components/GiftingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <RetailPriceSection />
      <ProductGrid />
      <PriceListSection />
      <HeritageSection />
      <QualitySection />
      <GiftingSection />
      <Footer />
    </div>
  );
};

export default Index;
