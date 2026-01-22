import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: "bestseller" | "fresh";
  weights?: string[];
}

export function ProductCard({
  name,
  description,
  price,
  image,
  badge,
  weights = ["500g", "1kg", "2kg"],
}: ProductCardProps) {
  const [selectedWeight, setSelectedWeight] = useState(weights[0]);
  const [isLiked, setIsLiked] = useState(false);

  const priceMultiplier = selectedWeight === "1kg" ? 2 : selectedWeight === "2kg" ? 3.8 : 1;
  const displayPrice = Math.round(price * priceMultiplier);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="product-card group"
    >
      {/* Image Container */}
      <div className="product-card-image aspect-square relative overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badge */}
        {badge && (
          <div className="absolute top-4 left-4">
            {badge === "bestseller" ? (
              <span className="badge-bestseller">Bestseller</span>
            ) : (
              <span className="badge-fresh">Freshly Made</span>
            )}
          </div>
        )}

        {/* Like Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-soft transition-colors"
        >
          <Heart
            size={18}
            className={`transition-colors ${
              isLiked ? "fill-saffron text-saffron" : "text-foreground"
            }`}
          />
        </motion.button>

        {/* Quick Add Button */}
        <div className="quick-add-btn">
          <Button className="btn-luxury rounded-full px-6 py-2 text-sm shadow-luxury">
            <Plus size={16} className="mr-1" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Weight Selector */}
        <div className="flex gap-2 mb-4">
          {weights.map((weight) => (
            <button
              key={weight}
              onClick={() => setSelectedWeight(weight)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                selectedWeight === weight
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {weight}
            </button>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-display text-xl text-foreground">₹{displayPrice}</span>
            <span className="text-sm text-muted-foreground ml-1">/ {selectedWeight}</span>
          </div>
          <Button
            size="sm"
            variant="outline"
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
