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

const categories = ["All", "Laddus", "Pedas", "Kaju Specialties", "Gift Boxes"];

const products = [
  {
    id: 1,
    name: "Navratan Laddu",
    description: "Nine treasures of nuts and dry fruits in pure desi ghee, a royal indulgence.",
    price: 650,
    image: heroLaddu,
    badge: "bestseller" as const,
    category: "Laddus",
  },
  {
    id: 2,
    name: "Kesar Peda",
    description: "Infused with hand-picked saffron strands and slow-cooked mawa, melts instantly.",
    price: 580,
    image: kesarPeda,
    badge: "fresh" as const,
    category: "Pedas",
  },
  {
    id: 3,
    name: "Premium Kaju Katli",
    description: "Silver-coated cashew diamonds, crafted with precision and pure ingredients.",
    price: 800,
    image: kajuKatli,
    badge: "bestseller" as const,
    category: "Kaju Specialties",
  },
  {
    id: 4,
    name: "Besan Laddu",
    description: "Aromatic gram flour roasted in desi ghee with cardamom and pistachios.",
    price: 450,
    image: besanLaddu,
    category: "Laddus",
  },
  {
    id: 5,
    name: "Motichoor Laddu",
    description: "Delicate boondi pearls bound together with sugar syrup and fragrant cardamom.",
    price: 420,
    image: motichoorLaddu,
    badge: "fresh" as const,
    category: "Laddus",
  },
  {
    id: 6,
    name: "Royal Gift Box",
    description: "An exquisite assortment of our finest sweets, perfect for celebrations.",
    price: 1850,
    image: giftBox,
    category: "Gift Boxes",
  },
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
              className={`px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
