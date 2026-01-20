import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/mfh-logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src={logo} 
              alt="MFH Chartered Accountants Inc." 
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              MFH Chartered Accountants Inc. provides professional auditing, accounting, 
              and advisory services to businesses across South Africa. Trusted for our 
              expertise, integrity, and commitment to client success.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-secondary font-semibold">★ 4.3</span>
              <span className="text-primary-foreground/60">|</span>
              <span className="text-primary-foreground/80">11 Google Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:0123745169" className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors">
                  <Phone className="h-5 w-5" />
                  012 374 5169
                </a>
              </li>
              <li>
                <a href="mailto:info@mfhca.co.za" className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors">
                  <Mail className="h-5 w-5" />
                  info@mfhca.co.za
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>
                  469 Barbara Coetzer St,<br />
                  Erasmia, Pretoria, 0183
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} MFH Chartered Accountants Inc. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Certified Public Accountants | SAICA Registered
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;