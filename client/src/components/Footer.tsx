/* =============================================================
   QUIET CINEMA — Footer Component
   Minimal: name left, links right, thin top rule
   ============================================================= */
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-10 gap-6">
          <div>
            <p
              className="font-display text-base"
              style={{ fontWeight: 300, letterSpacing: "0.04em", color: "oklch(0.12 0.005 60)" }}
            >
              Alex Morgan
            </p>
            <p
              className="font-body text-xs mt-1"
              style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.04em" }}
            >
              Documentary Filmmaker & Video Editor — London
            </p>
          </div>

          <div className="flex items-center gap-8">
            <Link href="/work">
              <span className="nav-link" style={{ fontSize: "0.75rem" }}>Work</span>
            </Link>
            <Link href="/about">
              <span className="nav-link" style={{ fontSize: "0.75rem" }}>About</span>
            </Link>
            <Link href="/contact">
              <span className="nav-link" style={{ fontSize: "0.75rem" }}>Contact</span>
            </Link>
          </div>
        </div>

        <div className="divider" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 gap-2">
          <p
            className="font-body text-xs"
            style={{ color: "oklch(0.65 0.008 60)", letterSpacing: "0.04em" }}
          >
            © {new Date().getFullYear()} Alex Morgan. All rights reserved.
          </p>
          <p
            className="font-body text-xs"
            style={{ color: "oklch(0.65 0.008 60)", letterSpacing: "0.04em" }}
          >
            London, United Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
}
