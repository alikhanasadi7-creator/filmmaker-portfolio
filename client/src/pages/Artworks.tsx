/* =============================================================
   EDITORIAL MINIMAL — Artworks Page
   Installations and gallery works — separate from commissioned work.
   ============================================================= */
import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type Artwork = {
  slug: string;
  title: string;
  year: string;
  status?: string;
  medium: string;
  venue: string;
  description: string;
  credits: string;
  videoId?: string;
};

export const artworks: Artwork[] = [
  {
    slug: "uncertain-future",
    title: "UNCERTAIN FUTURE",
    year: "2023",
    medium: "Collaborative art and research project — film",
    venue: "Shown at Manchester Art Gallery and MMU Metropolis",
    description:
      "A collaborative art and research project amplifying women's lived experiences and collective dialogue, shown at Manchester Art Gallery and MMU Metropolis. Ali worked as lead editor and cinematographer, shaping a film that communicates the project's social impact and research engagement.",
    credits: "Supported by Arts Council England.",
    videoId: "lm95sT7fyhQ",
  },
  {
    slug: "factory-works",
    title: "FACTORY WORKS",
    year: "2023",
    medium: "Short film accompanying an audio artwork by Neville Gabie",
    venue: "Unveiled at an exclusive showing inside Aviva Studios, Factory International, Manchester",
    description:
      "A short film created to accompany Factory Works, an audio artwork by Neville Gabie pressed across 1,500 vinyl sleeves featuring the workers who built Aviva Studios, Factory International's new home. Co-directed for Manchester Met's School of Digital Arts and unveiled at an exclusive showing inside Aviva Studios.",
    credits: "Co-directed for Manchester Met's School of Digital Arts.",
    videoId: "94GSuMiRi0A",
  },
];

export default function Artworks() {
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
              Installations &amp; Gallery Works
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
              Artworks
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
              Moving image installations and participatory works exploring migration, memory and the Iranian diaspora.
            </p>
          </div>
        </div>
        <div className="divider mt-10" />
      </section>

      {/* Artworks list */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="space-y-16 lg:space-y-20">
          {artworks.map((art) => (
            <Link key={art.slug} href={`/artworks/${art.slug}`}>
              <div className="fade-in-text grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-center cursor-pointer group py-6 border-b" style={{ borderColor: "oklch(0.88 0.006 75)" }}>
                {art.videoId && (
                  <div className="lg:col-span-4 lg:col-start-2">
                    <div className="relative aspect-video overflow-hidden" style={{ backgroundColor: "oklch(0.93 0.005 75)" }}>
                      <img
                        src={`https://img.youtube.com/vi/${art.videoId}/hqdefault.jpg`}
                        alt={art.title}
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                        style={{ filter: "grayscale(70%) contrast(1.1)" }}
                      />
                    </div>
                  </div>
                )}
                <div className={`lg:col-span-6 ${art.videoId ? "lg:col-start-6" : "lg:col-start-2"}`}>
                  <p className="font-body mb-2" style={{ fontSize: "0.75rem", color: "oklch(0.5 0.008 60)" }}>
                    {art.year}
                  </p>
                  <h2
                    className="font-display transition-opacity duration-300 group-hover:opacity-60"
                    style={{
                      fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)",
                      fontWeight: 300,
                      color: "var(--charcoal)",
                      lineHeight: 1.2,
                    }}
                  >
                    {art.title}
                    {art.status && (
                      <span
                        className="font-body ml-3 align-middle"
                        style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--sage-dark)" }}
                      >
                        {art.status}
                      </span>
                    )}
                  </h2>
                  <p className="font-body mt-3" style={{ fontSize: "0.75rem", color: "oklch(0.5 0.008 60)", lineHeight: 1.6 }}>
                    {art.medium}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
