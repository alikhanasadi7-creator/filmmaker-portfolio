/* =============================================================
   EDITORIAL MINIMAL — Navigation Component
   Minimal top nav: left logo (serif), right links (uppercase sans)
   ============================================================= */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const links = [
    { href: "/projects", label: "Projects" },
    { href: "/films", label: "Films" },
    { href: "/showreel", label: "Showreel" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(245,241,237,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "0.5px solid oklch(0.88 0.006 75)" : "none",
        }}
      >
        <div className="px-6 md:px-12 lg:px-24">
          <nav className="flex items-center justify-between py-5">
            {/* Logo / Name — Serif */}
            <Link href="/">
              <span
                className="font-display"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                  color: "var(--charcoal)",
                }}
              >
                Alikhan Asadi
              </span>
            </Link>

            {/* Desktop Nav — Uppercase sans */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className={`nav-link ${location === link.href ? "active" : ""}`}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="block h-px w-6 transition-all duration-300"
                style={{
                  backgroundColor: "var(--charcoal)",
                  transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
                }}
              />
              <span
                className="block h-px w-6 transition-all duration-300"
                style={{
                  backgroundColor: "var(--charcoal)",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-px w-6 transition-all duration-300"
                style={{
                  backgroundColor: "var(--charcoal)",
                  transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
                }}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button
          className="absolute top-5 right-6 p-2"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="block h-px w-6 rotate-45 translate-y-px" style={{ backgroundColor: "var(--charcoal)" }} />
          <span className="block h-px w-6 -rotate-45 -translate-y-px" style={{ backgroundColor: "var(--charcoal)" }} />
        </button>

        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <span className="mobile-nav-link">{link.label}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
