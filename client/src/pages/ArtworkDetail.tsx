/* =============================================================
   EDITORIAL MINIMAL — Artwork Detail Page
   Template: title/year, medium line, venue & history, description,
   installation photos, excerpt, credits & funders.
   ============================================================= */
import { useEffect } from "react";
import { useParams } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RedirectHome from "./RedirectHome";
import { artworks } from "./Artworks";

export default function ArtworkDetail() {
  const { slug } = useParams();
  const art = artworks.find((a) => a.slug === slug);

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
  }, [slug]);

  if (!art) return <RedirectHome />;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-36 pb-10 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 lg:col-start-2">
            <p className="label-upper mb-4 fade-in-text" style={{ color: "var(--sage-dark)" }}>
              Moving Image Artwork {art.status ? `· ${art.status}` : ""}
            </p>
            <h1
              className="font-display fade-in-text"
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--charcoal)",
                letterSpacing: "-0.01em",
              }}
            >
              {art.title}
            </h1>
            {art.year && (
              <p className="font-body mt-3 fade-in-text" style={{ fontSize: "0.8rem", color: "oklch(0.5 0.008 60)" }}>
                {art.year}
              </p>
            )}
          </div>
        </div>
        <div className="divider mt-10" />
      </section>

      {/* Medium / venue */}
      <section className="px-6 md:px-12 lg:px-24 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 lg:col-start-2 fade-in-text space-y-3">
            <p className="font-body italic" style={{ fontSize: "0.9rem", color: "var(--charcoal)" }}>
              {art.medium}
            </p>
            <p className="font-body" style={{ fontSize: "0.8rem", color: "oklch(0.5 0.008 60)", lineHeight: 1.7 }}>
              {art.venue}
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="px-6 md:px-12 lg:px-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 lg:col-start-2 fade-in-text">
            {art.description.split("\n\n").map((para, i) => (
              <p key={i} className="font-body mb-4" style={{ fontSize: "0.9375rem", lineHeight: 1.85, color: "oklch(0.35 0.008 60)" }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation placeholder — photos / excerpt */}
      <section className="px-6 md:px-12 lg:px-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 lg:col-start-2 fade-in-text">
            {art.videoId ? (
              <div className="relative w-full overflow-hidden" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${art.videoId}?rel=0&modestbranding=1`}
                  title={art.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: "none" }}
                />
              </div>
            ) : (
              <div
                className="aspect-video flex items-center justify-center border"
                style={{ borderColor: "oklch(0.85 0.006 75)", backgroundColor: "oklch(0.95 0.005 75)" }}
              >
                <p className="label-upper" style={{ color: "oklch(0.6 0.008 60)" }}>
                  Installation photos &amp; excerpt — to be added
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Credits */}
      {art.credits && (
        <section className="px-6 md:px-12 lg:px-24 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 lg:col-start-2 fade-in-text">
              <p className="label-upper mb-2" style={{ color: "var(--sage-dark)" }}>
                Credits
              </p>
              <p className="font-body" style={{ fontSize: "0.8rem", color: "oklch(0.45 0.008 60)", lineHeight: 1.7 }}>
                {art.credits}
              </p>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
