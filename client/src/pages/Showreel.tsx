/* ============================================================= 
   SHOWREEL PAGE
   Video plays on user click (no autoplay)
   ============================================================= */
import Navigation from "@/components/Navigation";

export default function Showreel() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* YouTube Video Embed - Directly below nav, no gap */}
      <section className="w-full px-6 md:px-12 lg:px-24 pt-4 pb-20 md:pb-32 lg:pb-40">
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
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
