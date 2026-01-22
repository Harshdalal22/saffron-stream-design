import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heritageBg from "@/assets/heritage-bg.jpg";

export function HeritageSection() {
  return (
    <section id="heritage" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heritageBg}
          alt="Heritage"
          className="w-full h-full object-cover"
        />
        <div className="heritage-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-body text-sm tracking-[0.3em] uppercase">
              Our Story
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6"
          >
            A Legacy of{" "}
            <span className="text-gradient-gold italic">Sweetness</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-cream/80 text-lg leading-relaxed mb-6"
          >
            In 1965, in the heart of Chirawa, a small town in Rajasthan, our
            founder began crafting sweets with a simple philosophy — use the
            purest ingredients and let tradition guide every creation.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-cream/70 text-base leading-relaxed mb-10"
          >
            Three generations later, we continue to honor that legacy. Our ghee
            comes from local farms, our recipes remain unchanged, and every sweet
            is still made by hand with the same love and dedication.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="btn-gold group rounded-full px-8 py-6 text-base"
            >
              Discover Our Heritage
              <ArrowRight
                size={18}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-gold/30"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -right-10 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-gold/20"
      />
    </section>
  );
}
