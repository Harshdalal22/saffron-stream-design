import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

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
  id,
  name,
  description,
  price,
  image,
  badge,
  weights = ["500g", "1kg", "2kg"],
}: ProductCardProps) {
  const [selectedWeight, setSelectedWeight] = useState(weights[0]);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const priceMultiplier = selectedWeight === "1kg" ? 2 : selectedWeight === "2kg" ? 3.8 : 1;
  const displayPrice = Math.round(price * priceMultiplier);

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price: displayPrice,
      weight: selectedWeight,
      image,
    });

    toast({
      title: "Added to cart!",
      description: `${name} (${selectedWeight}) added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
    >
      {/* Image Container - Compact */}
      <div className="relative w-full h-40 sm:h-44 overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />

        {/* Badge - Smaller */}
        {badge && (
          <div className="absolute top-2 left-2">
            {badge === "bestseller" ? (
              <span className="bg-orange-600 text-white text-xs px-2 py-0.5 rounded-md font-medium">
                Bestseller
              </span>
            ) : (
              <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-md font-medium">
                Fresh
              </span>
            )}
          </div>
        )}

        {/* Quick Add Button - Compact */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-2 right-2 bg-white text-orange-600 rounded-lg px-3 py-1.5 text-sm font-semibold shadow-md hover:bg-orange-600 hover:text-white transition-all duration-200 flex items-center gap-1"
        >
          <Plus size={14} />
          ADD
        </button>
      </div>

      {/* Content - Compact */}
      <div className="p-3 sm:p-4">
        {/* Name */}
        <h3 className="font-semibold text-sm sm:text-base text-gray-800 mb-1 line-clamp-1">
          {name}
        </h3>

        {/* Description - Hidden on mobile */}
        <p className="text-xs text-gray-500 mb-2 line-clamp-1 hidden sm:block">
          {description}
        </p>

        {/* Weight Selector - Compact */}
        <div className="flex gap-1.5 mb-3">
          {weights.map((weight) => (
            <button
              key={weight}
              onClick={() => setSelectedWeight(weight)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${selectedWeight === weight
                  ? "bg-orange-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {weight}
            </button>
          ))}
        </div>

        {/* Price and Add Button - Compact */}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-base sm:text-lg text-gray-900">₹{displayPrice}</span>
            <span className="text-xs text-gray-500 ml-1">/{selectedWeight}</span>
          </div>
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg px-3 py-1.5 text-xs sm:text-sm h-auto"
          >
            <ShoppingCart size={14} className="mr-1" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
