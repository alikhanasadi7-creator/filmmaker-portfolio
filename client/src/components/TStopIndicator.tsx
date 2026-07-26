/* =============================================================
   T-STOP LENS INDICATOR — Full Page Height, Half-Circle Curve
   Terracotta/copper colored (#A0603A) with a half-circle arc
   spanning from T 2.6 at top to T 22 at bottom.
   ============================================================= */
import { useState, useEffect, useRef } from "react";

// T-stop values on cinema lenses (ARRI Alura style)
const T_STOPS = [2.6, 2.8, 4, 5.6, 8, 11, 16, 22];

// Non-linear positioning mimicking real lens barrel markings
const T_STOP_POSITIONS = [0, 6, 16, 28, 44, 60, 78, 100];

// Terracotta/copper color from the reference
const ACCENT_COLOR = "#A0603A";
const ACCENT_LIGHT = "rgba(160, 96, 58, 0.4)";
const ACCENT_FAINT = "rgba(160, 96, 58, 0.15)";

export default function TStopIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Calculate current T-stop index based on scroll progress
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

  // Dot position follows scroll smoothly
  const dotPosition = scrollProgress * 100;

  return (
    <div
      className="fixed left-4 lg:left-8 top-0 bottom-0 z-40 hidden md:flex flex-col items-center py-20"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        width: "60px",
      }}
    >
      {/* T Label at top */}
      <div
        className="font-body mb-3"
        style={{
          fontSize: "0.65rem",
          letterSpacing: "0.15em",
          color: ACCENT_COLOR,
          fontWeight: 600,
        }}
      >
        T
      </div>

      {/* Full-height vertical track with half-circle curve */}
      <div ref={trackRef} className="relative flex-1 w-full" style={{ minHeight: "0" }}>
        {/* Half-circle curved path SVG */}
        <svg
          className="absolute inset-0 h-full overflow-visible"
          style={{ width: "50px", left: "0" }}
          preserveAspectRatio="none"
          viewBox="0 0 50 100"
          fill="none"
        >
          {/* Half-circle arc curving to the right */}
          <path
            d="M 10 0 C 45 15, 45 40, 30 50 C 15 60, 45 85, 10 100"
            fill="none"
            stroke={ACCENT_FAINT}
            strokeWidth="0.4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* T-stop tick marks and values along the curve */}
        {T_STOPS.map((stop, i) => {
          const yPos = T_STOP_POSITIONS[i];
          const isActive = i === currentIndex;
          const isNear = Math.abs(i - currentIndex) === 1;

          // Calculate horizontal offset for the curve (half-circle feel)
          // Values in the middle bulge outward more
          const t = yPos / 100;
          const curveOffset = Math.sin(t * Math.PI) * 16;

          return (
            <div
              key={stop}
              className="absolute flex items-center"
              style={{
                top: `${yPos}%`,
                left: `${8 + curveOffset}px`,
                transform: "translateY(-50%)",
                transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {/* Tick mark */}
              <div
                style={{
                  width: isActive ? "14px" : isNear ? "9px" : "5px",
                  height: isActive ? "1.5px" : "1px",
                  backgroundColor: isActive
                    ? ACCENT_COLOR
                    : isNear
                    ? ACCENT_LIGHT
                    : ACCENT_FAINT,
                  transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              />

              {/* Value label */}
              <span
                className="font-body whitespace-nowrap select-none ml-2"
                style={{
                  fontSize: isActive ? "0.7rem" : "0.55rem",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive
                    ? ACCENT_COLOR
                    : isNear
                    ? ACCENT_LIGHT
                    : ACCENT_FAINT,
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

        {/* Active position dot — moves smoothly with scroll along the curve */}
        {(() => {
          const t = dotPosition / 100;
          const curveOffset = Math.sin(t * Math.PI) * 16;
          return (
            <div
              className="absolute"
              style={{
                top: `${dotPosition}%`,
                left: `${6 + curveOffset}px`,
                transform: "translateY(-50%)",
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: ACCENT_COLOR,
                transition: "top 0.15s linear, left 0.15s linear",
                boxShadow: `0 0 10px ${ACCENT_LIGHT}, 0 0 4px ${ACCENT_LIGHT}`,
              }}
            />
          );
        })()}
      </div>

      {/* STOP label at bottom */}
      <div
        className="font-body mt-3"
        style={{
          fontSize: "0.5rem",
          letterSpacing: "0.2em",
          color: ACCENT_COLOR,
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        STOP
      </div>
    </div>
  );
}
