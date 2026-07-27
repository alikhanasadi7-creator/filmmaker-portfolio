/* =============================================================
   EDITORIAL MINIMAL — Projects Page
   Creative asymmetric layout — staggered grid with varied sizes,
   overlapping elements, and editorial positioning
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

// Creative layout positions for each project card
const layoutConfigs = [
  { colSpan: "lg:col-span-7", colStart: "lg:col-start-1", aspect: "aspect-[16/10]", textAlign: "right", textCol: "lg:col-span-4 lg:col-start-9", mt: "lg:-mt-12" },
  { colSpan: "lg:col-span-5", colStart: "lg:col-start-7", aspect: "aspect-[4/5]", textAlign: "left", textCol: "lg:col-span-4 lg:col-start-2", mt: "lg:mt-16" },
  { colSpan: "lg:col-span-6", colStart: "lg:col-start-2", aspect: "aspect-[16/9]", textAlign: "right", textCol: "lg:col-span-4 lg:col-start-9", mt: "lg:-mt-8" },
  { colSpan: "lg:col-span-5", colStart: "lg:col-start-6", aspect: "aspect-[3/4]", textAlign: "left", textCol: "lg:col-span-4 lg:col-start-1", mt: "lg:mt-20" },
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
      <section className="pt-36 pb-16 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 lg:col-start-1">
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
              Selected Work
            </h1>
          </div>
          <div className="lg:col-span-4 lg:col-start-8 flex items-end">
            <p
              className="font-body animate-fade-up delay-200"
              style={{
                fontSize: "0.8125rem",
                lineHeight: 1.7,
                color: "oklch(0.45 0.008 60)",
              }}
            >
              A curated selection of documentary, branded, and cultural projects — each crafted with cinematic precision.
            </p>
          </div>
        </div>
      </section>

      {/* Creative Staggered Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-32">
        {projects.map((project, index) => {
          const layout = layoutConfigs[index % layoutConfigs.length];
          return (
            <div
              key={project.id}
              className={`fade-in-text grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16 lg:mb-8 ${layout.mt}`}
            >
              {/* Image */}
              <div className={`${layout.colSpan} ${layout.colStart} ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                <div
                  className="project-card relative group cursor-pointer overflow-hidden"
                  onClick={() => setSelectedVideo(project.videoId)}
                >
                  <div className={`relative ${layout.aspect} overflow-hidden`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: "grayscale(70%) contrast(1.05)" }}
                    />
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "rgba(255,255,255,0.92)" }}
                      >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M4 2l12 7-12 7V2z" fill="var(--charcoal)" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Number overlay */}
                  <span
                    className="absolute bottom-4 left-5 font-display"
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      color: "oklch(0.6 0.008 60)",
                    }}
                  >
                    0{project.id}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className={`${layout.textCol} ${index % 2 !== 0 ? "lg:order-1" : ""} flex flex-col justify-end`}>
                <p className="label-upper mb-2" style={{ color: "var(--sage-dark)", fontSize: "0.6rem" }}>
                  {project.category}
                </p>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
                    fontWeight: 300,
                    color: "var(--charcoal)",
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </h2>
                <p
                  className="font-body mt-1"
                  style={{ fontSize: "0.7rem", color: "oklch(0.55 0.008 60)", letterSpacing: "0.08em" }}
                >
                  {project.year}
                </p>
                <p
                  className="font-body mt-4"
                  style={{
                    fontSize: "0.8rem",
                    lineHeight: 1.7,
                    color: "oklch(0.4 0.008 60)",
                  }}
                >
                  {project.description}
                </p>
                <button
                  onClick={() => setSelectedVideo(project.videoId)}
                  className="label-upper mt-5 inline-flex items-center gap-2 group self-start"
                  style={{ color: "var(--charcoal)", fontSize: "0.6rem" }}
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
          );
        })}
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
