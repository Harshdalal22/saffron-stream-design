import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PriceListSection } from "@/components/PriceListSection";
import { ProductGrid } from "@/components/ProductGrid";
import { HeritageSection } from "@/components/HeritageSection";
import { QualitySection } from "@/components/QualitySection";
import { GiftingSection } from "@/components/GiftingSection";
import { Footer } from "@/components/Footer";
import { FloatingCart } from "@/components/FloatingCart";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductGrid />
      <PriceListSection />
      <HeritageSection />
      <QualitySection />
      <GiftingSection />
      <Footer />
      <FloatingCart />
    </div>
  );
};

export default Index;
