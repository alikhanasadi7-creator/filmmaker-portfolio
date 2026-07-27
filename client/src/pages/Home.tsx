/* =============================================================
   EDITORIAL MINIMAL — Home Page
   Creative typographic hero inspired by mixed-weight, mixed-size
   layout. Actual brand logos. T-stop as background.
   ============================================================= */
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import TStopIndicator from "@/components/TStopIndicator";
import Footer from "@/components/Footer";

// Actual brand logo URLs
const logos = [
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/download_858174bc.jpeg", alt: "British Muslim Heritage Centre" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/grant_png_black_cb4d5bfe.png", alt: "Arts Council England" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/FundedbyUKGov-stacked_0_8195ea34.png", alt: "Funded by UK Government" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/factory-international_third_party_use_black_CMYK_765282e4.webp", alt: "Factory International" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/images_9fd6a056.png", alt: "Raffle Aid" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/premier-logo-4_fa3c6889.jpg", alt: "Premier Boxing Club Bolton" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/R_78a035d2.png", alt: "Things That Go On Things" },
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

      {/* ===== HERO SECTION — Creative Typographic Layout ===== */}
      <section className="relative min-h-screen flex items-end justify-end overflow-hidden">
        <div className="container relative z-10 pb-16 lg:pb-24">
          {/* Creative typographic composition — bottom right, mixed weights/sizes */}
          <div className="flex flex-col items-end text-right animate-fade-up">
            {/* Line 1 */}
            <div className="flex items-baseline gap-3 lg:gap-5">
              <span
                className="font-display"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "var(--charcoal)",
                  letterSpacing: "-0.02em",
                }}
              >
                CINEMATIC
              </span>
              <span
                className="font-body"
                style={{
                  fontSize: "clamp(0.55rem, 1vw, 0.7rem)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "oklch(0.5 0.008 60)",
                  fontWeight: 300,
                  alignSelf: "center",
                }}
              >
                FOR BRANDS,<br />CULTURE & SOCIAL
              </span>
              <span
                className="font-display"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                  fontWeight: 300,
                  lineHeight: 1,
                  color: "oklch(0.55 0.008 60)",
                  letterSpacing: "-0.02em",
                }}
              >
                FILMS
              </span>
            </div>

            {/* Line 2 */}
            <div className="flex items-baseline gap-3 lg:gap-5 mt-1">
              <span
                className="font-body"
                style={{
                  fontSize: "clamp(0.55rem, 1vw, 0.7rem)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "oklch(0.5 0.008 60)",
                  fontWeight: 300,
                  alignSelf: "center",
                }}
              >
                CONNECTING AUDIENCES WITH
              </span>
              <span
                className="font-display"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "var(--charcoal)",
                  letterSpacing: "-0.02em",
                }}
              >
                MEANINGFUL
              </span>
            </div>

            {/* Line 3 */}
            <div className="flex items-baseline gap-4 lg:gap-6 mt-1">
              <span
                className="font-display"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                  fontWeight: 300,
                  lineHeight: 1,
                  color: "oklch(0.55 0.008 60)",
                  letterSpacing: "-0.02em",
                }}
              >
                IDEAS &
              </span>
              <span
                className="font-display"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "var(--charcoal)",
                  letterSpacing: "-0.02em",
                }}
              >
                IMPACT
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8 animate-fade-up delay-200">
              <a
                href="/showreel"
                className="label-upper inline-flex items-center gap-3 group"
                style={{ color: "var(--charcoal)", fontSize: "0.65rem" }}
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

      {/* ===== COLLABORATIONS — Actual Logos ===== */}
      <section className="py-20 lg:py-28 relative z-10">
        <div className="container">
          <div className="fade-in-text text-center">
            <p className="label-upper mb-12" style={{ color: "oklch(0.5 0.008 60)" }}>
              Collaborations & Partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
              {logos.map((logo) => (
                <div
                  key={logo.alt}
                  className="h-10 md:h-12 lg:h-14 flex items-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: "grayscale(100%)" }}
                  />
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
