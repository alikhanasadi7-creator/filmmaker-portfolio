/* =============================================================
   EDITORIAL MINIMAL — Home Page
   Asymmetric layout with sage green blocks, wide-spaced type,
   large serif headings, and cinematic imagery.
   T-stop indicator as transparent background.
   ============================================================= */
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import TStopIndicator from "@/components/TStopIndicator";
import Footer from "@/components/Footer";

// Brand logos - individual partners
const partners = [
  { name: "British Muslim Heritage Centre", initials: "BMHC" },
  { name: "Arts Council England", initials: "ACE" },
  { name: "UK Government", initials: "UK GOV" },
  { name: "Factory International", initials: "FACTORY" },
  { name: "Raffle Aid", initials: "RAFFLE AID" },
  { name: "Premier Boxing Club Bolton", initials: "PBC" },
  { name: "Things That Go On Things", initials: "TTGOT" },
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in-text, .reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* T-Stop Background */}
      <TStopIndicator />

      <Navigation />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-32 lg:pt-0">
            {/* Text content — centered */}
            <div className="lg:col-span-6 lg:col-start-2">
              <p
                className="label-upper mb-6 animate-fade-up"
                style={{ color: "var(--sage-dark)" }}
              >
                Documentary Filmmaker & Editor
              </p>
              <h1
                className="font-display animate-fade-up delay-100"
                style={{
                  fontSize: "clamp(3rem, 6vw, 5.5rem)",
                  fontWeight: 300,
                  lineHeight: 1.05,
                  letterSpacing: "-0.01em",
                  color: "var(--charcoal)",
                }}
              >
                Alikhan
                <br />
                Asadi
              </h1>
              <p
                className="font-body mt-8 animate-fade-up delay-200"
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.8,
                  color: "oklch(0.4 0.008 60)",
                  maxWidth: "380px",
                  fontWeight: 300,
                }}
              >
                Crafting visual stories that matter. Working across documentary, 
                branded content, and cultural projects with cinematic sensitivity.
              </p>
              <div className="mt-10 animate-fade-up delay-300">
                <a
                  href="/showreel"
                  className="label-upper inline-flex items-center gap-3 group"
                  style={{ color: "var(--charcoal)", fontSize: "0.7rem" }}
                >
                  <span className="relative">
                    Watch Showreel
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
                  </span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="0.8"/>
                  </svg>
                </a>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ===== SHOWREEL SECTION ===== */}
      <section className="py-24 lg:py-32 relative z-10">
        <div className="container">
          <div className="fade-in-text grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Label */}
            <div className="lg:col-span-3 lg:col-start-2">
              <p className="label-upper" style={{ color: "var(--sage-dark)" }}>
                Selected Work
              </p>
              <p
                className="font-body mt-3"
                style={{ fontSize: "0.8125rem", color: "oklch(0.45 0.008 60)", lineHeight: 1.7 }}
              >
                A selection of recent work spanning documentary, branded content, and cultural projects.
              </p>
            </div>

            {/* Video embed */}
            <div className="lg:col-span-7 lg:col-start-5">
              <div
                className="relative w-full overflow-hidden"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/Cgdm2V3AmBY?rel=0&modestbranding=1&controls=1"
                  title="Alikhan Asadi - Showreel"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUOTE SECTION ===== */}
      <section className="relative z-10">
        <div className="container">
          <div className="fade-in-text py-20 lg:py-28 border-t border-b" style={{ borderColor: "oklch(0.88 0.006 75)" }}>
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-8 lg:col-start-3 text-center">
                <blockquote
                  className="font-display italic"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    fontWeight: 300,
                    lineHeight: 1.4,
                    color: "var(--charcoal)",
                    letterSpacing: "0.01em",
                  }}
                >
                  "Every frame is a question. Every cut is an answer."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COLLABORATIONS ===== */}
      <section className="py-20 lg:py-28 relative z-10">
        <div className="container">
          <div className="fade-in-text text-center">
            <p className="label-upper mb-12" style={{ color: "oklch(0.5 0.008 60)" }}>
              Collaborations & Partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center px-4 py-2 border"
                  style={{
                    borderColor: "oklch(0.82 0.006 75)",
                    minWidth: "100px",
                  }}
                >
                  <span
                    className="font-body text-center"
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "oklch(0.4 0.008 60)",
                      fontWeight: 400,
                    }}
                  >
                    {partner.initials}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
