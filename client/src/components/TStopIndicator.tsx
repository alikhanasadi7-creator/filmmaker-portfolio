/* =============================================================
   T-STOP LENS INDICATOR — Full Page Height
   Fixed vertical indicator on the left side of the homepage.
   Spans from top (T 2.6) to bottom (T 22) with a curved arc.
   The active value changes dynamically as the user scrolls.
   ============================================================= */
import { useState, useEffect } from "react";

// T-stop values on cinema lenses (ARRI Alura style)
const T_STOPS = [2.6, 2.8, 4, 5.6, 8, 11, 16, 22];

// Non-linear positioning to give a "curved" feel — values bunch up at the top
// mimicking real lens barrel markings where wider apertures are closer together
const T_STOP_POSITIONS = [0, 6, 16, 28, 44, 60, 78, 100];

export default function TStopIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial call
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Calculate current T-stop index based on scroll progress mapped to positions
  const scrollPercent = scrollProgress * 100;
  let currentIndex = 0;
  for (let i = 0; i < T_STOP_POSITIONS.length - 1; i++) {
    if (scrollPercent >= T_STOP_POSITIONS[i]) {
      currentIndex = i;
    }
  }
  if (scrollPercent >= T_STOP_POSITIONS[T_STOP_POSITIONS.length - 1]) {
    currentIndex = T_STOP_POSITIONS.length - 1;
  }

  // Interpolate the dot position smoothly
  const dotPosition = scrollProgress * 100;

  return (
    <div
      className="fixed left-5 lg:left-8 top-0 bottom-0 z-40 hidden md:flex flex-col items-center py-24"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      {/* T Label at top */}
      <div
        className="font-body mb-4"
        style={{
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          color: "oklch(0.45 0.012 60)",
          fontWeight: 500,
        }}
      >
        T
      </div>

      {/* Full-height vertical track */}
      <div className="relative flex-1 w-px" style={{ minHeight: "0" }}>
        {/* Track line — subtle curved path via SVG */}
        <svg
          className="absolute inset-0 w-full h-full overflow-visible"
          preserveAspectRatio="none"
          viewBox="0 0 20 1000"
          style={{ width: "20px", left: "-10px" }}
        >
          {/* Curved path */}
          <path
            d="M 10 0 C 14 200, 6 400, 12 600 C 8 800, 10 900, 10 1000"
            fill="none"
            stroke="oklch(0.85 0.006 75)"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* T-stop tick marks and values */}
        {T_STOPS.map((stop, i) => {
          const yPos = T_STOP_POSITIONS[i];
          const isActive = i === currentIndex;
          const isNear = Math.abs(i - currentIndex) === 1;

          return (
            <div
              key={stop}
              className="absolute flex items-center"
              style={{
                top: `${yPos}%`,
                left: "50%",
                transform: "translate(-50%, -50%)",
                transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {/* Tick mark */}
              <div
                style={{
                  width: isActive ? "14px" : isNear ? "9px" : "5px",
                  height: isActive ? "1.5px" : "1px",
                  backgroundColor: isActive
                    ? "oklch(0.12 0.005 60)"
                    : isNear
                    ? "oklch(0.5 0.012 60)"
                    : "oklch(0.78 0.006 75)",
                  transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  position: "absolute",
                  left: "12px",
                }}
              />

              {/* Value label */}
              <span
                className="font-body absolute whitespace-nowrap select-none"
                style={{
                  left: "30px",
                  fontSize: isActive ? "0.7rem" : "0.55rem",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive
                    ? "oklch(0.12 0.005 60)"
                    : isNear
                    ? "oklch(0.45 0.012 60)"
                    : "oklch(0.75 0.006 75)",
                  transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  transform: isActive ? "scale(1.1)" : "scale(1)",
                  transformOrigin: "left center",
                }}
              >
                {stop}
              </span>
            </div>
          );
        })}

        {/* Active position indicator (dot) — moves smoothly with scroll */}
        <div
          className="absolute left-1/2"
          style={{
            top: `${dotPosition}%`,
            transform: "translate(-50%, -50%)",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "oklch(0.12 0.005 60)",
            transition: "top 0.15s linear",
            boxShadow: "0 0 8px rgba(0,0,0,0.2)",
          }}
        />
      </div>

      {/* STOP label at bottom */}
      <div
        className="font-body mt-4"
        style={{
          fontSize: "0.5rem",
          letterSpacing: "0.2em",
          color: "oklch(0.55 0.012 60)",
          textTransform: "uppercase",
        }}
      >
        STOP
      </div>
    </div>
  );
}
