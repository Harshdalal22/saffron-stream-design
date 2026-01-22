import { motion } from "framer-motion";
import { ArrowRight, Gift, Sparkles, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import giftBox from "@/assets/gift-box.jpg";

export function GiftingSection() {
  return (
    <section id="gifting" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <img
                src={giftBox}
                alt="Gift Box"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-luxury max-w-xs"
            >
              <div className="flex items-center gap-3 mb-2">
                <Sparkles size={20} className="text-gold" />
                <span className="font-display text-lg text-foreground">Custom Boxes</span>
              </div>
              <p className="font-body text-sm text-muted-foreground">
                Build your own personalized gift box for weddings & celebrations
              </p>
            </motion.div>

            {/* Decorative Ring */}
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full border-2 border-gold/20" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-body text-sm tracking-[0.3em] uppercase">
                Celebrations
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Perfect Gifts for{" "}
              <span className="text-gradient-gold italic">Every Occasion</span>
            </h2>

            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              From intimate family gatherings to grand wedding celebrations, our
              curated gift boxes bring sweetness to every moment. Choose from our
              signature collections or create your own.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {[
                { icon: Gift, text: "Wedding & Bhaji Boxes" },
                { icon: Box, text: "Corporate Gifting Solutions" },
                { icon: Sparkles, text: "Festival Special Collections" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <feature.icon size={18} className="text-gold" />
                  </div>
                  <span className="font-body text-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="btn-luxury group rounded-full px-8 py-6"
              >
                Explore Gift Boxes
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 border-border hover:bg-secondary"
              >
                Build Your Own Box
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
