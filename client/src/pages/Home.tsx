/* ============================================================= 
   QUIET CINEMA — Home Page (Three-Section Full-Page Scroll)
   Section 1: Centered Hero Text
   Section 2: Showreel Video (slides up smoothly)
   Section 3: Logos + Quote (slides up smoothly)
   ============================================================= */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

function Home() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  // Track scroll and dispatch event for smooth transitions
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrolled = window.scrollY;
          const scrollProgress = scrollHeight > 0 ? scrolled / scrollHeight : 0;
          
          // Dispatch custom event with scroll progress
          window.dispatchEvent(
            new CustomEvent('homeScrollProgress', { detail: { progress: scrollProgress } })
          );
          
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background">
      <Navigation />

      {/* SECTION 1: Hero Text - Full Viewport Height, Centered */}
      <section
        ref={section1Ref}
        className="relative h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-3xl text-center">
          {/* Main Headline - Centered, Refined */}
          <h1
            className="font-display animate-fade-up"
            style={{
              fontSize: "clamp(2.5rem, 4vw, 4rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: "oklch(0.12 0.005 60)",
              marginBottom: "2rem",
            }}
          >
            Cinematic Films for Brands, Culture and Social Impact
          </h1>

          {/* Supporting Description - Centered, Readable */}
          <p
            className="font-body animate-fade-up delay-100"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              fontWeight: 400,
              lineHeight: 1.8,
              letterSpacing: "0.005em",
              color: "oklch(0.35 0.008 60)",
              maxWidth: "700px",
              margin: "0 auto 3rem",
            }}
          >
            I create cinematic films for brands, charities, and cultural organisations, crafting visual stories that connect audiences with meaningful ideas and real-world impact.
          </p>

          {/* CTA - Minimal Text Link */}
          <div className="animate-fade-up delay-200">
            <Link href="/projects">
              <span
                className="font-body text-xs tracking-widest uppercase inline-block"
                style={{
                  color: "oklch(0.12 0.005 60)",
                  letterSpacing: "0.1em",
                  borderBottom: "0.5px solid oklch(0.12 0.005 60)",
                  paddingBottom: "4px",
                  transition: "opacity 0.3s",
                  fontSize: "0.875rem",
                  cursor: "pointer",
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

      {/* SECTION 2: Showreel Video - Slides Up Smoothly */}
      <section
        ref={section2Ref}
        className="relative h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-24 bg-background"
      >
        <div className="w-full max-w-6xl">
          {/* YouTube Video Embed */}
          <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Cgdm2V3AmBY?si=faCqB2ac23rIbv4c&controls=1"
              title="Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: Logos + Quote - Slides Up Smoothly */}
      <section
        ref={section3Ref}
        className="relative min-h-screen w-full px-6 md:px-12 lg:px-24 py-20 md:py-32 lg:py-40 bg-background"
      >
        {/* Logos Section */}
        <div className="max-w-5xl mx-auto mb-20 md:mb-32 lg:mb-40">
          <p
            className="font-body text-xs tracking-widest uppercase mb-12 text-center"
            style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.12em" }}
          >
            Selected Work
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 items-center justify-items-center">
            {/* Row 1: 4 logos */}
            <div className="h-20 md:h-24 lg:h-28 flex items-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/download_858174bc.jpeg"
                alt="British Muslim Heritage Centre"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="h-20 md:h-24 lg:h-28 flex items-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/grant_png_black_cb4d5bfe.png"
                alt="Arts Council England"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="h-20 md:h-24 lg:h-28 flex items-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/FundedbyUKGov-stacked_0_8195ea34.png"
                alt="Funded by UK Government"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="h-20 md:h-24 lg:h-28 flex items-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/factory-international_third_party_use_black_CMYK_765282e4.webp"
                alt="Factory International"
                className="h-full w-auto object-contain"
              />
            </div>
            {/* Row 2: 3 logos */}
            <div className="h-20 md:h-24 lg:h-28 flex items-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/images_9fd6a056.png"
                alt="Raffle Aid"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="h-20 md:h-24 lg:h-28 flex items-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/premier-logo-4_fa3c6889.jpg"
                alt="Premier Boxing Club Bolton"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="h-20 md:h-24 lg:h-28 flex items-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663377378181/cvGZpLDgUbhouszAuFobVz/R_78a035d2.png"
                alt="Things That Go On Things"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="max-w-2xl mx-auto text-center">
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

export default Home;
