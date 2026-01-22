import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  shop: [
    { name: "Best Sellers", href: "#" },
    { name: "Laddus", href: "#" },
    { name: "Pedas", href: "#" },
    { name: "Kaju Specialties", href: "#" },
    { name: "Gift Boxes", href: "#" },
  ],
  company: [
    { name: "Our Heritage", href: "#heritage" },
    { name: "Quality Promise", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  support: [
    { name: "Contact Us", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "Track Order", href: "#track" },
    { name: "Returns", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-cream">
      {/* Newsletter */}
      <div className="border-b border-cream/10">
        <div className="container mx-auto py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h3 className="font-display text-3xl mb-4">
              Join the <span className="text-gradient-gold">Siyaram Family</span>
            </h3>
            <p className="font-body text-cream/60 mb-8">
              Subscribe for exclusive offers, festive specials, and a taste of tradition
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold"
              />
              <button className="btn-gold px-8 py-3 rounded-full font-body font-medium">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Siyaram's Sweets" className="h-14 w-auto mb-6" />
            <p className="font-body text-cream/60 text-sm leading-relaxed mb-6 max-w-xs">
              Bringing the authentic taste of Rajasthani mithai to your celebrations
              since 1965. Crafted with love, served with tradition.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-cream/70 text-sm">
                <MapPin size={16} className="text-gold" />
                <span>Main Market, Chirawa, Rajasthan 333026</span>
              </div>
              <div className="flex items-center gap-3 text-cream/70 text-sm">
                <Phone size={16} className="text-gold" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-cream/70 text-sm">
                <Mail size={16} className="text-gold" />
                <span>hello@siyaramsweets.com</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg mb-6">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream/60 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream/60 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream/60 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-cream/40">
            © 2024 Siyaram Sweets Chirawa Wale. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-cream/40 hover:text-cream transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-cream/40 hover:text-cream transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
