import { motion } from "framer-motion";
import heroLaddu from "@/assets/hero-laddu.jpg";
import kajuKatli from "@/assets/kaju-katli.jpg";
import kesarPeda from "@/assets/kesar-peda.jpg";
import giftBox from "@/assets/gift-box.jpg";

const showcaseItems = [
  { image: heroLaddu, name: "Navratan Laddu", delay: 0 },
  { image: kajuKatli, name: "Kaju Katli", delay: 0.2 },
  { image: kesarPeda, name: "Kesar Peda", delay: 0.4 },
  { image: giftBox, name: "Premium Gift Box", delay: 0.6 },
];

export function Showcase3D() {
  return (
    <section className="py-16 bg-gradient-to-b from-cream to-background overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Our <span className="text-gradient-gold">Signature Collection</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Handcrafted with love and tradition
          </p>
        </motion.div>

        {/* 3D Carousel Container */}
        <div className="relative h-80 md:h-96 perspective-1000">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {showcaseItems.map((item, index) => {
                const angle = (360 / showcaseItems.length) * index;
                const radius = 200; // Distance from center

                return (
                  <motion.div
                    key={item.name}
                    className="absolute left-1/2 top-1/2 w-48 h-48 md:w-64 md:h-64 -ml-24 md:-ml-32 -mt-24 md:-mt-32"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay }}
                  >
                    <motion.div
                      className="relative w-full h-full rounded-2xl overflow-hidden shadow-luxury bg-white"
                      whileHover={{ scale: 1.1 }}
                      style={{
                        transform: `rotateY(-${angle}deg)`, // Counter-rotate to keep face forward
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                        <p className="text-cream font-display text-lg text-center">
                          {item.name}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Static Grid for Mobile Fallback */}
        <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden shadow-soft aspect-square"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-3">
                <p className="text-cream font-display text-sm text-center">
                  {item.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
