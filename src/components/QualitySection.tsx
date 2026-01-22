import { motion } from "framer-motion";
import { Droplets, Leaf, Truck, Award } from "lucide-react";

const qualities = [
  {
    icon: Droplets,
    title: "Pure Desi Ghee",
    description: "Sourced from local farms in Rajasthan, our ghee is slow-churned for richness.",
  },
  {
    icon: Leaf,
    title: "No Preservatives",
    description: "Freshly made to order with natural ingredients and traditional methods.",
  },
  {
    icon: Truck,
    title: "Global Shipping",
    description: "From Chirawa to your doorstep, delivered with care worldwide.",
  },
  {
    icon: Award,
    title: "Quality Certified",
    description: "FSSAI certified with strict quality control at every step.",
  },
];

export function QualitySection() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4 block">
            The Siyaram Promise
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Crafted with{" "}
            <span className="text-gradient-saffron italic">Excellence</span>
          </h2>
          <div className="ornament-line w-24 mx-auto mt-6" />
        </motion.div>

        {/* Quality Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualities.map((quality, index) => (
            <motion.div
              key={quality.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center p-8 rounded-2xl bg-card hover:shadow-luxury transition-all duration-500"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-saffron/20 flex items-center justify-center"
              >
                <quality.icon
                  size={28}
                  className="text-gold group-hover:text-saffron transition-colors"
                />
              </motion.div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {quality.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {quality.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
