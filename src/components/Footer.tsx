import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-gold/20 mt-0">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-2xl font-bold text-gold tracking-widest">
            EL PETRA
          </div>
          <div className="font-serif italic text-sm text-wheat tracking-[0.25em] mt-1">
            shawarma
          </div>
          <p className="font-serif italic text-wheat/80 mt-4 max-w-xs">
            „Gustul Orientului, în inima Iașului."
          </p>
        </div>

        <div>
          <h4 className="font-display text-gold text-sm tracking-widest mb-4">NAVIGARE</h4>
          <ul className="space-y-2 text-wheat/80">
            <li><Link to="/" className="hover:text-gold transition-colors">Acasă</Link></li>
            <li><Link to="/meniu" className="hover:text-gold transition-colors">Meniu</Link></li>
            <li><Link to="/galerie" className="hover:text-gold transition-colors">Galerie</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-gold text-sm tracking-widest mb-4">CONTACT</h4>
          <ul className="space-y-3 text-wheat/80 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <span>Str. Vasile Alecsandri 7-11, Iași 700054</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-gold shrink-0" />
              <a href="tel:+40790915977" className="hover:text-gold transition-colors">
                +40 790 915 977
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={16} className="text-gold shrink-0" />
              <a
                href="https://instagram.com/elpetrashawarma"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                @elpetrashawarma
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="gold-divider mx-6" />
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-wheat/60 tracking-wider">
        © 2025 El Petra Shawarma. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
