import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const WOLT_URL =
  "https://wolt.com/ro/rou/iasi/restaurant/el-petra-shawarma-69ccfdd5844ce44e47771616";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Acasă" },
    { to: "/meniu", label: "Meniu" },
    { to: "/galerie", label: "Galerie" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-background/95 backdrop-blur-md border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl font-bold text-gold tracking-widest">
            EL PETRA
          </span>
          <span className="font-serif italic text-xs text-wheat tracking-[0.3em] mt-0.5">
            shawarma
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-display text-sm tracking-wider text-wheat hover:text-gold transition-colors"
              activeProps={{ className: "font-display text-sm tracking-wider text-gold" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <a href={WOLT_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Comandă pe Wolt
          </a>
        </nav>

        <button
          className="md:hidden text-gold p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Meniu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-background border-t border-gold/20 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-display text-base tracking-wider text-wheat hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WOLT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-2"
            onClick={() => setOpen(false)}
          >
            Comandă pe Wolt
          </a>
        </nav>
      )}
    </header>
  );
}
