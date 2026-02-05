import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, ChevronDown } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";

import kajuKatli from "@/assets/kaju-katli.jpg";
import kesarPeda from "@/assets/kesar-peda.jpg";
import besanLaddu from "@/assets/besan-laddu.jpg";
import motichoorLaddu from "@/assets/motichoor-laddu.jpg";
import giftBox from "@/assets/gift-box.jpg";
import heroLaddu from "@/assets/hero-laddu.jpg";
import gondLaddu from "@/assets/gond-laddu.jpg";
import kalakand from "@/assets/kalakand.jpg";
import balushahi from "@/assets/balushahi.jpg";
import badamBarfi from "@/assets/badam-barfi.jpg";
import kachori from "@/assets/kachori.jpg";
import gajarPak from "@/assets/gajar-pak.jpg";
import namkeen from "@/assets/namkeen.jpg";
import churma from "@/assets/churma.jpg";

const categories = ["All", "Laddus", "Pedas", "Barfis", "Pak", "Namkeen", "Gift Boxes"];

const products = [
  // Laddus
  { id: 1, name: "लड्डू (Laddu)", description: "Traditional desi ghee laddu, handcrafted with pure ingredients.", price: 190, image: heroLaddu, badge: "bestseller" as const, category: "Laddus" },
  { id: 2, name: "बादाम लड्डू (Badam Laddu)", description: "Rich almond laddu made with premium quality almonds and desi ghee.", price: 220, image: besanLaddu, category: "Laddus" },
  { id: 3, name: "बादाम पिस्ता लड्डू (Badam Pista Laddu)", description: "Luxurious combination of almonds and pistachios in pure ghee.", price: 230, image: motichoorLaddu, badge: "fresh" as const, category: "Laddus" },
  { id: 4, name: "गोंद लड्डू (Gond Laddu)", description: "Nutritious edible gum laddu, perfect for winters and health.", price: 240, image: gondLaddu, category: "Laddus" },
  { id: 5, name: "चूरमा लड्डू (Churma Laddu)", description: "Traditional Rajasthani churma laddu with coarse wheat and jaggery.", price: 230, image: churma, category: "Laddus" },
  { id: 6, name: "पचधारी लड्डू (Pachdhari Laddu)", description: "Five-ingredient special laddu with rich aromatic spices.", price: 240, image: heroLaddu, category: "Laddus" },
  { id: 7, name: "बेसन लड्डू (Besan Laddu)", description: "Aromatic gram flour roasted in desi ghee with cardamom.", price: 240, image: besanLaddu, badge: "fresh" as const, category: "Laddus" },
  { id: 8, name: "मोती चूर लड्डू (Moti Chur Laddu)", description: "Delicate boondi pearls bound with sugar syrup and cardamom.", price: 240, image: motichoorLaddu, category: "Laddus" },

  // Pedas
  { id: 9, name: "पेड़ा (Peda)", description: "Classic mawa peda, slow-cooked to perfection.", price: 240, image: kesarPeda, category: "Pedas" },
  { id: 10, name: "केसर पेड़ा (Kesar Peda)", description: "Infused with hand-picked saffron strands and slow-cooked mawa.", price: 290, image: kesarPeda, badge: "bestseller" as const, category: "Pedas" },
  { id: 11, name: "चेतन पेड़ा (Chetan Peda)", description: "Premium peda with the finest quality mawa and exotic flavors.", price: 700, image: kesarPeda, badge: "fresh" as const, category: "Pedas" },

  // Barfis
  { id: 12, name: "काजू बर्फी (Kaju Barfi)", description: "Silver-coated cashew diamonds, crafted with precision.", price: 380, image: kajuKatli, badge: "bestseller" as const, category: "Barfis" },
  { id: 14, name: "कलाकन्द (Kalakand)", description: "Soft milk cake with golden brown top and cardamom.", price: 240, image: kalakand, category: "Barfis" },
  { id: 15, name: "दिलखुशाल (Dilkhushal)", description: "Heart-shaped delicacy made with khoya and dry fruits.", price: 230, image: kajuKatli, category: "Barfis" },

  // Pak Items
  { id: 16, name: "गोंद पाक (Gond Pak)", description: "Nutritious edible gum sweet, perfect for health.", price: 240, image: gondLaddu, category: "Pak" },
  { id: 19, name: "गाजर पाक (Gajar Pak)", description: "Carrot-based sweet fudge with nuts and raisins.", price: 300, image: gajarPak, badge: "fresh" as const, category: "Pak" },
  { id: 20, name: "चूरमा (Churma)", description: "Traditional coarse wheat sweet with ghee and jaggery.", price: 240, image: churma, category: "Pak" },

  // Namkeen & Others
  { id: 21, name: "मूंगदाल चक्की (Moongdal Chakki)", description: "Crispy moong dal rounds with mild spices.", price: 240, image: besanLaddu, category: "Namkeen" },
  { id: 22, name: "बालूशाही (Balushahi)", description: "Golden flaky fried dessert soaked in sugar syrup.", price: 210, image: balushahi, category: "Namkeen" },
  { id: 25, name: "नमकीन/गट्टा/सुहाल (Namkeen/Gatta/Suhal)", description: "Savory mix of crispy snacks and namkeen.", price: 150, image: namkeen, category: "Namkeen" },

  // Gift Boxes
  { id: 26, name: "Royal Gift Box", description: "An exquisite assortment of our finest sweets.", price: 1850, image: giftBox, category: "Gift Boxes" },
];

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="shop" className="py-24 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4 block">
            Our Collection
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Artisanal <span className="text-gradient-saffron italic">Sweets</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Each creation is a masterpiece, handcrafted with love and the finest ingredients
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 ${selectedCategory === category
                ? "bg-primary text-primary-foreground shadow-soft"
                : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
            >
              {category}
            </button>
          ))}

          <Button
            variant="outline"
            className="rounded-full border-border ml-4"
          >
            <Filter size={16} className="mr-2" />
            More Filters
            <ChevronDown size={14} className="ml-1" />
          </Button>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 px-2 sm:px-0">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="btn-outline-luxury rounded-full px-10 py-6"
          >
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
