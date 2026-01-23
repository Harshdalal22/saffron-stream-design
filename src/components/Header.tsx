import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Our Heritage", href: "#heritage" },
  { name: "Shop All", href: "#shop" },
  { name: "Gifting Boxes", href: "#gifting" },
  { name: "Track Order", href: "#track" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Orange-Red Gradient Banner with Hindi Typography */}
      <div className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 text-white py-3 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          सियाराम स्वीट्स चिड़ावा वाले
        </motion.h1>
        <p className="text-xs md:text-sm mt-1 opacity-90">Siyaram Sweets Chirawa Wale</p>
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-header py-3 shadow-soft"
            : "bg-cream py-4 shadow-sm"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* 3D Animated Logo */}
          <motion.a
            href="/"
            className="flex items-center perspective-1000"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="relative"
              animate={{
                rotateY: [0, 10, -10, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              whileHover={{
                rotateY: 15,
                rotateX: -5,
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              <motion.img
                src={logo}
                alt="Siyaram's Sweets"
                className="h-10 md:h-12 w-auto drop-shadow-lg"
                style={{
                  filter: "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2))",
                }}
              />
              {/* 3D Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/20 to-yellow-400/20 blur-xl -z-10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="font-body text-sm font-medium tracking-wide text-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <motion.div
              className="hidden md:flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50">
                <Search size={16} className="text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for Kaju Katli..."
                  className="bg-transparent text-sm w-40 focus:outline-none text-foreground placeholder:text-muted-foreground placeholder:text-sm"
                />
              </div>
            </motion.div>

            {/* User */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-foreground hover:bg-secondary"
            >
              <User size={20} />
            </Button>

            {/* Cart */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full relative text-foreground hover:bg-secondary"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-saffron text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Button>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full text-foreground hover:bg-secondary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden glass-header mt-2 mx-4 rounded-xl overflow-hidden"
            >
              <nav className="flex flex-col p-4 gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="py-3 px-4 text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                {/* Mobile Search */}
                <div className="flex items-center gap-2 mt-2 px-4 py-3 rounded-lg border border-border bg-background/50">
                  <Search size={16} className="text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search for sweets..."
                    className="bg-transparent text-sm flex-1 focus:outline-none text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
