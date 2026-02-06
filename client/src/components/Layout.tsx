import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { BookingButton } from "./BookingButton";
import { motion, AnimatePresence } from "framer-motion";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
      {/* Top Bar */}
      <div className="bg-foreground text-white py-2 px-4 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <a href="tel:336-905-5616" className="flex items-center gap-1 hover:text-secondary transition-colors">
              <Phone className="w-3 h-3" /> Business: (336) 905-5616
            </a>
            <a href="tel:336-309-1065" className="hidden md:flex items-center gap-1 hover:text-secondary transition-colors">
              <Phone className="w-3 h-3" /> Cell: (336) 309-1065
            </a>
            <span className="hidden sm:flex items-center gap-1">
              <MapPin className="w-3 h-3" /> 2402 Hickswood Rd #108, High Point, NC 27265
            </span>
          </div>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/groups/906064359948904/posts/1957466918141971/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/shinebeauty459/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.tiktok.com/@shinebeautysalonandnail" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              <SiTiktok className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="font-display text-xl md:text-2xl font-bold text-foreground">
              Shine Beauty Salon and Spa
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <BookingButton className="ml-4" />
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[100px] z-40 bg-background/95 backdrop-blur-sm md:hidden p-4 border-t"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium py-2 border-b border-border/50 ${
                    location === link.href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4">
                <BookingButton className="w-full" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 pt-16 pb-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-display text-xl font-bold mb-4">Shine Beauty Salon and Spa</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your go-to beauty destination in High Point, NC at 2402 Hickswood Rd #108. We are dedicated to providing you with the highest quality service in a warm and relaxing environment.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/groups/906064359948904/posts/1957466918141971/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/shinebeauty459/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@shinebeautysalonandnail" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                  <SiTiktok className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    Shine Beauty Salon & Spa<br />
                    2402 Hickswood Rd #108<br />
                    High Point, NC 27265
                  </span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <div className="flex flex-col">
                    <a href="tel:336-905-5616" className="hover:text-primary transition-colors">Business: (336) 905-5616</a>
                    <a href="tel:336-309-1065" className="hover:text-primary transition-colors">Cell: (336) 309-1065</a>
                  </div>
                </li>
                <li className="pt-2">
                  <BookingButton variant="outline" className="w-full sm:w-auto" />
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Shine Beauty Salon & Spa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
