/* =============================================================
   QUIET CINEMA — Films Page
   Layout: Nav → Page Header → Film Cards → Footer
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
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="pt-40 pb-12 px-6 md:px-12 lg:px-24">
        <p
          className="font-body text-xs tracking-widest uppercase mb-4 animate-fade-up"
          style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.12em" }}
        >
          Filmography
        </p>
        <h1
          className="font-display animate-fade-up delay-100"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 300,
            letterSpacing: "0.02em",
            color: "oklch(0.12 0.005 60)",
            lineHeight: 1.1,
          }}
        >
          Films
        </h1>
      </section>

      {/* Film Cards */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="flex flex-col gap-20">
          {films.map((film, i) => (
            <div
              key={film.id}
              className="reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Video Thumbnail - Full Width */}
              <div
                className="relative overflow-hidden w-full cursor-pointer"
                style={{ aspectRatio: "21/9" }}
                onClick={() => setSelectedVideo(film.videoId)}
              >
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-full h-full object-cover"
                  style={{
                    transition:
                      "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div
                    className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                    style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
                  >
                    <svg
                      className="w-8 h-8 text-red-600 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Film Info */}
              <div className="mt-8 max-w-3xl">
                <div className="flex items-baseline gap-4 mb-2">
                  <h2
                    className="font-display"
                    style={{
                      fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                      fontWeight: 300,
                      letterSpacing: "0.02em",
                      color: "oklch(0.12 0.005 60)",
                    }}
                  >
                    {film.title}
                  </h2>
                  <span
                    className="font-body text-sm"
                    style={{ color: "oklch(0.55 0.012 60)" }}
                  >
                    {film.year}
                  </span>
                </div>
                <p
                  className="font-body text-xs tracking-wider uppercase mb-5"
                  style={{
                    color: "oklch(0.55 0.012 60)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {film.category} | {film.location} | {film.duration}
                </p>
                <div
                  className="font-body text-base leading-relaxed"
                  style={{ color: "oklch(0.35 0.010 60)", lineHeight: 1.8 }}
                >
                  {film.description.split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className={idx > 0 ? "mt-4" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              style={{ fontSize: "2rem", lineHeight: 1 }}
            >
              ×
            </button>
            <div style={{ aspectRatio: "16/9" }}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ borderRadius: "4px" }}
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
