/* ============================================================= 
   SHOWREEL PAGE
   Clean, centered layout with balanced spacing
   Video plays on user click (no autoplay)
   ============================================================= */
import Navigation from "@/components/Navigation";

export default function Showreel() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Centered content with balanced vertical spacing */}
      <div className="flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 pt-16 md:pt-24 lg:pt-32 pb-20 md:pb-32 lg:pb-40">
        
        {/* Page title */}
        <h1
          className="font-display text-center mb-4"
          style={{
            fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)",
            fontWeight: 300,
            letterSpacing: "-0.01em",
            color: "oklch(0.12 0.005 60)",
          }}
        >
          Showreel
        </h1>

        {/* Subtitle */}
        <p
          className="font-body text-center mb-12 md:mb-16"
          style={{
            fontSize: "clamp(0.875rem, 1.1vw, 1rem)",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "oklch(0.4 0.008 60)",
            maxWidth: "480px",
          }}
        >
          A selection of recent work spanning documentary, branded content, and cultural projects.
        </p>

        {/* YouTube Video Embed */}
        <div className="w-full max-w-5xl">
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
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
