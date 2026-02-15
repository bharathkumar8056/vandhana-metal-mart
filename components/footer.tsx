import { Instagram, Heart, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/assets/logo.png"
                alt="Vandhanaa Metal Mart Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
                unoptimized
              />
              <span className="font-bold text-foreground">Vandhanaa Metal Mart</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Premium wholesale metal vessels supplier, serving international markets with excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+918838169177"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={16} className="flex-shrink-0" />
                  <span className="phone-number">+91 8838 169 177</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Vanthanaametalmart@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  <Mail size={16} className="flex-shrink-0" />
                  <span>Vanthanaametalmart@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} className="flex-shrink-0" />
                <span>Park Town, Chennai<br />India</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/bkb_incorporation/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Instagram size={18} />
                <span>BKB Incorporation</span>
              </a>
              <a
                href="https://www.instagram.com/brandsparksm/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Instagram size={18} />
                <span>Brandspark</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Developer Credits */}
          <div className="mb-6 pb-6 border-b border-border">
            <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1 flex-wrap">
              Developed by{' '}
              <span className="font-semibold text-foreground">BKB Incorporation</span>
              <span>in Association with</span>
              <span className="font-semibold text-foreground">Brandspark</span>
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-center sm:text-left text-sm text-muted-foreground">
              © {currentYear} Vandhanaa Metal Mart. All rights reserved.
            </p>
            <p className="text-center text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart size={16} className="text-primary" /> by BKB & Brandspark
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
