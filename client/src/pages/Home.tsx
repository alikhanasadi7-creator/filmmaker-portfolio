/* ============================================================= 
   QUIET CINEMA — Home Page (Redesigned)
   Professional Artist Website with Refined Typography
   Layout: Nav → Headline + Description → Hero Slideshow → Quote → Footer
   ============================================================= */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import HeroSlideshow from "@/components/HeroSlideshow";

const UNCERTAIN_FUTURES_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663377378181/CwzaKbdNMGbLVzfz.png";
const YOUTUBE_THUMBNAIL_2 = "https://img.youtube.com/vi/JTl4IpGNyCw/maxresdefault.jpg";
const YOUTUBE_THUMBNAIL_3 = "https://img.youtube.com/vi/Up9qPBxeyHk/maxresdefault.jpg";

const heroSlides = [
  {
    id: 1,
    image: UNCERTAIN_FUTURES_IMAGE,
    alt: "Uncertain Futures — Documentary about women's lived experiences and collective dialogue",
  },
  {
    id: 2,
    image: YOUTUBE_THUMBNAIL_2,
    alt: "TREES — Environmental installation exploring hidden communication systems of trees",
  },
  {
    id: 3,
    image: YOUTUBE_THUMBNAIL_3,
    alt: "GRF Back to School Campaign — Animated film promoting access to education",
  },
];

export default function Home() {
  const identityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Minimal, Elegant, Editorial Layout */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-0 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl">
          {/* Main Headline - Refined, Cinematic, Minimal */}
          <h1
            className="font-display animate-fade-up"
            style={{
              fontSize: "clamp(2.5rem, 3.5vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: "oklch(0.12 0.005 60)",
              marginBottom: "1rem",
              maxWidth: "600px",
            }}
          >
            Cinematic Stories That Communicate Change
          </h1>

          {/* Supporting Description - Elegant, Readable, Narrower */}
          <p
            className="font-body animate-fade-up delay-100"
            style={{
              fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
              fontWeight: 400,
              lineHeight: 1.7,
              letterSpacing: "0.01em",
              color: "oklch(0.35 0.008 60)",
              maxWidth: "520px",
              marginBottom: "1.5rem",
            }}
          >
            I create compelling visual narratives for brands, organisations, and cultural collaborators. Through documentary filmmaking and impact campaigns, I help tell stories that matter.
          </p>

          {/* CTA - Minimal Text Link */}
          <div
            className="animate-fade-up delay-200"
            style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}
          >
            <Link href="/projects">
              <span
                className="font-body text-xs tracking-widest uppercase"
                style={{
                  color: "oklch(0.12 0.005 60)",
                  letterSpacing: "0.1em",
                  borderBottom: "0.5px solid oklch(0.12 0.005 60)",
                  paddingBottom: "2px",
                  transition: "opacity 0.3s",
                  fontSize: "0.875rem",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.5")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                View Projects →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Slideshow - Balanced Visual Anchor */}
      <section className="w-full py-8 md:py-12 lg:py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl">
          <HeroSlideshow slides={heroSlides} autoPlayInterval={5000} />
        </div>
      </section>

      {/* Quote / Statement Section */}
      <section className="mt-24 md:mt-32 lg:mt-40 px-6 md:px-12 lg:px-24 pb-20 md:pb-32 lg:pb-40">
        <div className="max-w-2xl mx-auto reveal">
          <div className="divider mb-12" />
          <blockquote
            className="font-display"
            style={{
              fontSize: "clamp(1.5rem, 2.2vw, 1.95rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.6,
              letterSpacing: "0.01em",
              color: "oklch(0.12 0.005 60)",
            }}
          >
            "Every frame is a question. Every cut is an answer."
          </blockquote>
          <div className="divider mt-12" />
        </div>
      </section>
    </div>
  );
}
