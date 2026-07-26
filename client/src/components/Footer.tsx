/* =============================================================
   EDITORIAL MINIMAL — Footer Component
   Clean minimal footer with contact CTA and sage accent
   ============================================================= */
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t" style={{ borderColor: "oklch(0.88 0.006 75)" }}>
      {/* Contact CTA */}
      <div className="px-6 md:px-12 lg:px-24 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 lg:col-start-2">
            <p className="label-upper mb-4" style={{ color: "var(--sage-dark)" }}>
              Get in Touch
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                fontWeight: 300,
                lineHeight: 1.2,
                color: "var(--charcoal)",
              }}
            >
              Let's create something meaningful together.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-8 flex flex-col justify-center">
            <a
              href="mailto:alikhanasadi7@gmail.com"
              className="label-upper inline-flex items-center gap-3 group mb-4"
              style={{ color: "var(--charcoal)", fontSize: "0.7rem" }}
            >
              <span className="relative">
                alikhanasadi7@gmail.com
                <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
            <div className="flex gap-5 mt-4">
              <a
                href="https://www.instagram.com/alikhanasadi"
                target="_blank"
                rel="noopener noreferrer"
                className="label-upper group"
                style={{ color: "oklch(0.5 0.008 60)", fontSize: "0.6rem" }}
              >
                <span className="relative">
                  Instagram
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
              <a
                href="https://vimeo.com/alikhanasadi"
                target="_blank"
                rel="noopener noreferrer"
                className="label-upper group"
                style={{ color: "oklch(0.5 0.008 60)", fontSize: "0.6rem" }}
              >
                <span className="relative">
                  Vimeo
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
              <a
                href="https://www.youtube.com/@alikhanasadi"
                target="_blank"
                rel="noopener noreferrer"
                className="label-upper group"
                style={{ color: "oklch(0.5 0.008 60)", fontSize: "0.6rem" }}
              >
                <span className="relative">
                  YouTube
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="px-6 md:px-12 lg:px-24 py-5 border-t flex items-center justify-between"
        style={{ borderColor: "oklch(0.88 0.006 75)" }}
      >
        <p
          className="font-body"
          style={{ fontSize: "0.65rem", color: "oklch(0.55 0.008 60)", letterSpacing: "0.05em" }}
        >
          © {new Date().getFullYear()} Alikhan Asadi. All rights reserved.
        </p>
        <nav className="hidden md:flex gap-6">
          {[
            { href: "/projects", label: "Projects" },
            { href: "/films", label: "Films" },
            { href: "/showreel", label: "Showreel" },
            { href: "/about", label: "About" },
          ].map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className="font-body"
                style={{ fontSize: "0.6rem", color: "oklch(0.55 0.008 60)", letterSpacing: "0.1em", textTransform: "uppercase" }}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
