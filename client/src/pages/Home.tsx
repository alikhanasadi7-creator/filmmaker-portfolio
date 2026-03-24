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
              fontSize: "clamp(2.25rem, 3.2vw, 3.25rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              color: "oklch(0.12 0.005 60)",
              marginBottom: "1.25rem",
              maxWidth: "680px",
            }}
          >
            Cinematic Films for Brands, Culture and Social Impact
          </h1>

          {/* Supporting Description - Elegant, Readable, Narrower */}
          <p
            className="font-body animate-fade-up delay-100"
            style={{
              fontSize: "clamp(0.9375rem, 1.3vw, 1.125rem)",
              fontWeight: 400,
              lineHeight: 1.75,
              letterSpacing: "0.005em",
              color: "oklch(0.35 0.008 60)",
              maxWidth: "600px",
              marginBottom: "2rem",
            }}
          >
            I create cinematic films for brands, charities, and cultural organisations, crafting visual stories that connect audiences with meaningful ideas and real-world impact.
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

      {/* Hero Slideshow - Prominent Cinematic Element */}
      <section className="w-full pt-48 md:pt-80 lg:pt-96 pb-0 px-6 md:px-12 lg:px-24">
        <div className="w-full">
          <HeroSlideshow slides={heroSlides} autoPlayInterval={5000} />
        </div>
      </section>

      {/* Logos / Supporters Section */}
      <section className="mt-8 md:mt-12 lg:mt-16 px-6 md:px-12 lg:px-24 pb-16 md:pb-24 lg:pb-32">
        <div className="max-w-5xl mx-auto">
          <p
            className="font-body text-xs tracking-widest uppercase mb-12 text-center"
            style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.12em" }}
          >
            Selected Work
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {/* British Muslim Heritage Centre */}
            <div className="h-16 md:h-20 flex items-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/download_858174bc.jpeg"
                alt="British Muslim Heritage Centre"
                className="h-full w-auto object-contain"
              />
            </div>
            {/* Arts Council England */}
            <div className="h-16 md:h-20 flex items-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/grant_png_black_cb4d5bfe.png"
                alt="Arts Council England"
                className="h-full w-auto object-contain"
              />
            </div>
            {/* UK Government */}
            <div className="h-16 md:h-20 flex items-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/FundedbyUKGov-stacked_0_8195ea34.png"
                alt="Funded by UK Government"
                className="h-full w-auto object-contain"
              />
            </div>
            {/* Factory International */}
            <div className="h-16 md:h-20 flex items-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/factory-international_third_party_use_black_CMYK_765282e4.webp"
                alt="Factory International"
                className="h-full w-auto object-contain"
              />
            </div>
            {/* Raffle Aid */}
            <div className="h-16 md:h-20 flex items-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/images_9fd6a056.png"
                alt="Raffle Aid"
                className="h-full w-auto object-contain"
              />
            </div>
            {/* Premier Boxing Club Bolton */}
            <div className="h-16 md:h-20 flex items-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/premier-logo-4_fa3c6889.jpg"
                alt="Premier Boxing Club Bolton"
                className="h-full w-auto object-contain"
              />
            </div>
            {/* Things That Go On Things */}
            <div className="h-16 md:h-20 flex items-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/R_78a035d2.png"
                alt="Things That Go On Things"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
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
