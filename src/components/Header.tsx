import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/mfh-logo.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <a href="tel:0123745169" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" />
                <span>012 374 5169</span>
              </a>
              <a href="mailto:info@mfhca.co.za" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">info@mfhca.co.za</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="hidden md:inline">469 Barbara Coetzer St, Erasmia, Pretoria</span>
              <span className="md:hidden">Pretoria</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="MFH Chartered Accountants Inc." 
              className="h-20 w-auto"
            />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-secondary after:transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-md font-semibold hover:bg-accent transition-colors"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-md font-semibold hover:bg-accent transition-colors text-center"
              >
                Get a Quote
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;