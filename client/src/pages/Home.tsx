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

// Partner logos
const PARTNER_1 = "https://private-us-east-1.manuscdn.com/sessionFile/SY7V5OoJepJFWouXljRbZx/sandbox/bN01zGEGcaAUax5YJBn29W-img-1_1771863596000_na1fn_bG9nb3M.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvU1k3VjVPb0plcEpGV291WGxqUmJaeC9zYW5kYm94L2JOMDF6R0VHY2FBVWF4NVlKQm4yOVctaW1nLTFfMTc3MTg2MzU5NjAwMF9uYTFmbl9iRzluYjNNLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=T5zzxPQMqbqJQIFxVaYKwzpqRBsqYCl8ybmXhM~ydJJLjMPmh0Ys-HqPXQCqCy3ksNlqJqVVBOEHMqPiMuWPpqkqHAEJlkTB1Dv5Wd9VVBmvMTvwHnCXnfMFCJwjJDqoEjzpXcJcbqM8Yvp7j1JLqB2F~Iqx7fTqHqVqKqNqFqHqJqLqNqPqRqTqVqXqZq1q3q5q7q9qBqDqFqHqJqLqNqPqRqTqVqXqZq1q3q5q7q9qBqDqFqHqJqLqNqPqRqTqVqXqZq1q3q5q7q9qBqDqFqHqJqLqNqPqRqTqVqXqZq1q3q5q7q9qBqDqFqHqJqLqNqPqRqTqVqXqZq1q3q5q7q9qBqDqFqHqJqLqNqPqRqTqVqXqZq1q3q5q7q9qBqDqFqHqJqLqNqPqRqTqVqXqZq1q3q5q7q9qBqDqFqHqJqLqNqPqRqTqVqXqZq1q3q5q7q9qBqDqFqH__";

// Showreel thumbnail
const SHOWREEL_THUMB = "https://img.youtube.com/vi/Cgdm2V3AmBY/maxresdefault.jpg";

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
            {/* Left: Text content */}
            <div className="lg:col-span-5 lg:col-start-2">
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

            {/* Right: Sage green block with image */}
            <div className="lg:col-span-5 lg:col-start-7 animate-fade-up delay-200">
              <div className="relative">
                {/* Sage green background block — offset */}
                <div
                  className="absolute -top-6 -right-6 w-full h-full"
                  style={{ backgroundColor: "var(--sage)", opacity: 0.3 }}
                />
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={SHOWREEL_THUMB}
                    alt="Alikhan Asadi — Filmmaker"
                    className="w-full h-full object-cover grayscale"
                    style={{ filter: "grayscale(100%) contrast(1.05)" }}
                  />
                </div>
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
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14 opacity-50">
              <img src={PARTNER_1} alt="Partners" className="h-8 lg:h-10 object-contain" style={{ filter: "grayscale(100%)" }} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
