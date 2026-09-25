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

      {/* ===== HERO SECTION — Name, one-line bio, single image ===== */}
      <section className="relative min-h-screen flex items-center pt-24">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Text */}
            <div className="lg:col-span-6 lg:col-start-1 animate-fade-up order-2 lg:order-1">
              <p className="label-upper mb-5" style={{ color: "var(--sage-dark)" }}>
                Manchester, UK
              </p>
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(2.6rem, 6vw, 5rem)",
                  fontWeight: 300,
                  lineHeight: 1.05,
                  color: "var(--charcoal)",
                  letterSpacing: "-0.01em",
                }}
              >
                Ali Asadi
                <br />
                <span style={{ fontWeight: 700 }}>Artist Filmmaker</span>
              </h1>
              <p
                className="label-upper mt-4"
                style={{ color: "oklch(0.5 0.008 60)", letterSpacing: "0.15em" }}
              >
                Moving Image · Documentary · Installation
              </p>
              <p
                className="font-body mt-6"
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "oklch(0.4 0.008 60)",
                  maxWidth: "480px",
                }}
              >
                Ali Asadi is a Manchester-based artist filmmaker working across documentary, moving image installation and participatory practice.
              </p>
              <div className="mt-8 flex gap-8">
                <a
                  href="/artworks"
                  className="label-upper inline-flex items-center gap-3 group"
                  style={{ color: "var(--charcoal)", fontSize: "0.65rem" }}
                >
                  <span className="relative">
                    Artworks
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
                <a
                  href="/films"
                  className="label-upper inline-flex items-center gap-3 group"
                  style={{ color: "var(--charcoal)", fontSize: "0.65rem" }}
                >
                  <span className="relative">
                    Films
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </div>
            </div>

            {/* One strong image */}
            <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2 fade-in-text">
              <div className="relative">
                <div
                  className="absolute -bottom-5 -right-5 w-full h-full"
                  style={{ backgroundColor: "var(--sage)", opacity: 0.12 }}
                />
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src="/images/about-field.jpg"
                    alt="Ali Asadi, artist filmmaker"
                    className="w-full h-full object-cover"
                    style={{ filter: "grayscale(85%) contrast(1.05)" }}
                  />
                </div>
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
