/* =============================================================
   EDITORIAL MINIMAL — Films Page
   Large cinematic cards with sage green accents,
   editorial serif titles, wide-spaced labels
   ============================================================= */
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const films = [
  {
    id: 1,
    title: "SLOW DUSK",
    year: "2025",
    category: "Documentary",
    location: "Iran",
    duration: "Full Length",
    description:
      "A cinematic portrait of fishermen in the north of Iran, whose lives are bound to a sea that was never theirs to lose. For decades, decisions made far from the shore have driven the Caspian to the edge of silence — yet the fishermen remain, holding on to a way of life the sea can no longer sustain and the state has long stopped protecting.\n\nThe film's soundscape was constructed through a laboratory process — a composer immersed in the sonic world of the landscape until something shifted: the environment began to speak back. The sea, the shore, the wind — no longer ambient, but present. What emerged was not a score but a dialogue between the human and the natural world, in which nature itself becomes a voice — bearing witness, responding, remembering.",
    videoId: "6ZAw_DxCFC0",
    thumbnail: "https://img.youtube.com/vi/6ZAw_DxCFC0/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "ASHIN",
    year: "2024",
    category: "Documentary",
    location: "Iran",
    duration: "30 Min",
    description:
      "A desert village. An old woman who is its living memory. A young woman who believes the only way to save it is to erase it. Told through two women who cannot both be right — and somewhere between their truths, we ask: who gets to decide what a place is worth saving for?",
    videoId: "W07wjL5RDa0",
    thumbnail: "https://img.youtube.com/vi/W07wjL5RDa0/maxresdefault.jpg",
  },
];

export default function Films() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="pt-36 pb-12 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 lg:col-start-2">
            <p className="label-upper mb-4 animate-fade-up" style={{ color: "var(--sage-dark)" }}>
              Filmography
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
              Films
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
              Independent documentary work exploring memory, place, and the human condition.
            </p>
          </div>
        </div>
        <div className="divider mt-10" />
      </section>

      {/* Film Cards */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="space-y-24 lg:space-y-32">
          {films.map((film, index) => (
            <div key={film.id} className="fade-in-text">
              {/* Film card — full width cinematic */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Large thumbnail */}
                <div className={`lg:col-span-8 ${index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-5"}`}>
                  <div
                    className="project-card relative group cursor-pointer"
                    onClick={() => setSelectedVideo(film.videoId)}
                  >
                    {/* Sage accent */}
                    <div
                      className="absolute -bottom-5 -right-5 w-full h-full"
                      style={{ backgroundColor: "var(--sage)", opacity: 0.1 }}
                    />
                    <div className="relative aspect-[21/9] overflow-hidden">
                      <img
                        src={film.thumbnail}
                        alt={film.title}
                        className="w-full h-full object-cover"
                        style={{ filter: "grayscale(70%) contrast(1.1)" }}
                      />
                      {/* Play overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
                        >
                          <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                            <path d="M4 2l12 7-12 7V2z" fill="var(--charcoal)" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Film info */}
                <div className={`lg:col-span-4 ${index % 2 === 0 ? "lg:col-start-9" : "lg:col-start-1 lg:row-start-1"} flex flex-col justify-center`}>
                  <p className="label-upper mb-2" style={{ color: "var(--sage-dark)" }}>
                    {film.category} · {film.location} · {film.duration}
                  </p>
                  <h2
                    className="font-display"
                    style={{
                      fontSize: "clamp(2rem, 3.5vw, 3rem)",
                      fontWeight: 300,
                      color: "var(--charcoal)",
                      lineHeight: 1.15,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {film.title}
                  </h2>
                  <p
                    className="font-body mt-1"
                    style={{ fontSize: "0.8rem", color: "oklch(0.5 0.008 60)", letterSpacing: "0.05em" }}
                  >
                    {film.year}
                  </p>
                  <div className="mt-5 space-y-3">
                    {film.description.split("\n\n").map((para, i) => (
                      <p
                        key={i}
                        className="font-body"
                        style={{
                          fontSize: "0.8125rem",
                          lineHeight: 1.75,
                          color: "oklch(0.4 0.008 60)",
                        }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedVideo(film.videoId)}
                    className="label-upper mt-6 inline-flex items-center gap-2 group self-start"
                    style={{ color: "var(--charcoal)", fontSize: "0.65rem" }}
                  >
                    <span className="relative">
                      Watch Film
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
                    </span>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="0.8"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
          style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedVideo(null)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </button>
          <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                title="Film"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
