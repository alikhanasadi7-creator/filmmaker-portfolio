/* ============================================================= 
   SHOWREEL PAGE
   Full-screen embedded YouTube video showcase
   ============================================================= */
import Navigation from "@/components/Navigation";

export default function Showreel() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Title */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-16 lg:pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl">
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
            Showreel
          </h1>

          <p
            className="font-body animate-fade-up delay-100"
            style={{
              fontSize: "clamp(0.9375rem, 1.3vw, 1.125rem)",
              fontWeight: 400,
              lineHeight: 1.75,
              letterSpacing: "0.005em",
              color: "oklch(0.35 0.008 60)",
              maxWidth: "600px",
            }}
          >
            A selection of recent work spanning documentary, branded content, and cultural projects.
          </p>
        </div>
      </section>

      {/* YouTube Video Embed - Constrained Width */}
      <section className="w-full px-6 md:px-12 lg:px-24 pb-20 md:pb-32 lg:pb-40">
        <div className="max-w-4xl">
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%", /* 16:9 aspect ratio */
              height: 0,
              overflow: "hidden",
              borderRadius: "0.5rem",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              src="https://www.youtube.com/embed/Cgdm2V3AmBY?rel=0&modestbranding=1&controls=1"
              title="Alikhan Asadi - Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
