/* =============================================================
   EDITORIAL MINIMAL — Showreel Page
   Clean centered layout with editorial typography
   ============================================================= */
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Showreel() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in-text").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="pt-36 pb-8 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 lg:col-start-2">
            <p className="label-upper mb-4 animate-fade-up" style={{ color: "var(--sage-dark)" }}>
              Reel
            </p>
            <h1
              className="font-display animate-fade-up delay-100"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--charcoal)",
                letterSpacing: "-0.01em",
              }}
            >
              Showreel
            </h1>
            <p
              className="font-body mt-5 animate-fade-up delay-200"
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.7,
                color: "oklch(0.45 0.008 60)",
                maxWidth: "500px",
              }}
            >
              A selection of recent work spanning documentary, branded content, and cultural projects.
            </p>
          </div>
        </div>
        <div className="divider mt-10" />
      </section>

      {/* Video */}
      <section className="px-6 md:px-12 lg:px-24 py-12 lg:py-16">
        <div className="fade-in-text grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-10 lg:col-start-2">
            <div className="relative">
              {/* Sage accent behind */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full"
                style={{ backgroundColor: "var(--sage)", opacity: 0.08 }}
              />
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

      <Footer />
    </div>
  );
}
