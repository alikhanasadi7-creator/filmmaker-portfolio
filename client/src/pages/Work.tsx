/* =============================================================
   EDITORIAL MINIMAL — Projects Page
   Asymmetric grid, sage green accents, wide-spaced labels,
   B&W thumbnails with hover color reveal
   ============================================================= */
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// YouTube video thumbnails
const YOUTUBE_THUMBNAIL_1 = "https://img.youtube.com/vi/lm95sT7fyhQ/maxresdefault.jpg";
const YOUTUBE_THUMBNAIL_2 = "https://img.youtube.com/vi/JTl4IpGNyCw/maxresdefault.jpg";
const YOUTUBE_THUMBNAIL_3 = "https://img.youtube.com/vi/Up9qPBxeyHk/maxresdefault.jpg";
const YOUTUBE_THUMBNAIL_4 = "https://img.youtube.com/vi/8cSnAGsYav4/maxresdefault.jpg";

const projects = [
  {
    id: 1,
    title: "Uncertain Futures",
    category: "Documentary | Social Impact & Research",
    year: "2024",
    description: "A collaborative art and research project amplifying women's lived experiences and collective dialogue. I worked as cinematographer and editor, creating a film that communicates the project's social impact and research engagement.",
    image: YOUTUBE_THUMBNAIL_1,
    videoId: "lm95sT7fyhQ",
  },
  {
    id: 2,
    title: "TREES",
    category: "Impact Film | Immersive Installation",
    year: "2024",
    description: "An engaging documentation of an immersive environmental installation exploring the hidden communication systems of trees. The film captures the intersection of art, science, and technology.",
    image: YOUTUBE_THUMBNAIL_2,
    videoId: "JTl4IpGNyCw",
  },
  {
    id: 3,
    title: "GRF – Back to School Campaign",
    category: "Impact Animation | Global Education",
    year: "2025",
    description: "An animated campaign film promoting access to education for displaced and vulnerable children. Through cinematic storytelling and carefully crafted sound design, the film communicates hope and resilience.",
    image: YOUTUBE_THUMBNAIL_3,
    videoId: "Up9qPBxeyHk",
  },
  {
    id: 4,
    title: "EFCL – Ecommerce Fulfilment Centre",
    category: "Corporate Film | Logistics & Brand",
    year: "2025",
    description: "A corporate film created for EFCL, a fulfilment centre offering end-to-end eCommerce warehousing and logistics services. Overseeing the project from script to final result.",
    image: YOUTUBE_THUMBNAIL_4,
    videoId: "8cSnAGsYav4",
  },
];

export default function Work() {
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
              Projects
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
              Selected Works
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
              A curated selection of documentary, branded, and cultural projects.
            </p>
          </div>
        </div>
        <div className="divider mt-10" />
      </section>

      {/* Projects Grid — Alternating layout */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="space-y-20 lg:space-y-28">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="fade-in-text grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
            >
              {/* Image — alternates left/right */}
              <div
                className={`lg:col-span-7 ${index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-6 lg:order-2"}`}
              >
                <div
                  className="project-card relative group"
                  onClick={() => setSelectedVideo(project.videoId)}
                >
                  {/* Sage accent block behind image */}
                  <div
                    className="absolute -bottom-4 w-full h-full"
                    style={{
                      backgroundColor: "var(--sage)",
                      opacity: 0.12,
                      [index % 2 === 0 ? "right" : "left"]: "-16px",
                    }}
                  />
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      style={{ filter: "grayscale(80%) contrast(1.05)" }}
                    />
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
                      >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M4 2l12 7-12 7V2z" fill="var(--charcoal)" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div
                className={`lg:col-span-4 ${index % 2 === 0 ? "lg:col-start-9" : "lg:col-start-1 lg:order-1"}`}
              >
                <p className="label-upper mb-3" style={{ color: "var(--sage-dark)" }}>
                  {project.category}
                </p>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                    fontWeight: 300,
                    color: "var(--charcoal)",
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </h2>
                <p
                  className="font-body mt-2 mb-4"
                  style={{ fontSize: "0.75rem", color: "oklch(0.5 0.008 60)", letterSpacing: "0.05em" }}
                >
                  {project.year}
                </p>
                <p
                  className="font-body"
                  style={{
                    fontSize: "0.8125rem",
                    lineHeight: 1.7,
                    color: "oklch(0.4 0.008 60)",
                  }}
                >
                  {project.description}
                </p>
                <button
                  onClick={() => setSelectedVideo(project.videoId)}
                  className="label-upper mt-6 inline-flex items-center gap-2 group"
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
                title="Video"
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
