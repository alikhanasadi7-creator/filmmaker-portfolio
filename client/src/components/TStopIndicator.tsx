/* =============================================================
   T-STOP LENS INDICATOR — Full-Page Transparent Background
   Large half-circle arc spanning the entire homepage as a 
   decorative background element. Terracotta/copper colored.
   The numbers and arc are oversized and sit behind all content.
   ============================================================= */
import { useState, useEffect } from "react";

// T-stop values on cinema lenses (ARRI Alura style)
const T_STOPS = [2.6, 2.8, 4, 5.6, 8, 11, 16, 22];

// Non-linear positioning mimicking real lens barrel markings
const T_STOP_POSITIONS = [0, 6, 16, 28, 44, 60, 78, 100];

// Terracotta/copper color
const ACCENT_COLOR = "rgba(160, 96, 58, 0.08)";
const ACCENT_ACTIVE = "rgba(160, 96, 58, 0.25)";
const ACCENT_STRONG = "rgba(160, 96, 58, 0.15)";

export default function TStopIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 600);

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

  const dotPosition = scrollProgress * 100;

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      {/* Large half-circle arc SVG — spans the full viewport */}
      <svg
        className="absolute h-full"
        style={{
          left: "-5%",
          top: "0",
          width: "55%",
          height: "100%",
        }}
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        fill="none"
      >
        {/* Main arc — large half circle curving right */}
        <path
          d="M 15 2 C 85 15, 90 35, 75 50 C 60 65, 85 85, 15 98"
          fill="none"
          stroke="rgba(160, 96, 58, 0.06)"
          strokeWidth="0.15"
          vectorEffect="non-scaling-stroke"
        />
        {/* Secondary inner arc for depth */}
        <path
          d="M 12 5 C 60 18, 65 38, 55 50 C 45 62, 60 82, 12 95"
          fill="none"
          stroke="rgba(160, 96, 58, 0.04)"
          strokeWidth="0.1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* T-stop numbers — large, positioned along the left side */}
      <div
        className="absolute left-6 lg:left-12 top-0 bottom-0 flex flex-col justify-between py-24"
        style={{ width: "80px" }}
      >
        {/* T label */}
        <div
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
            color: "rgba(160, 96, 58, 0.2)",
            fontWeight: 500,
            textTransform: "uppercase",
          }}
        >
          T
        </div>

        {/* T-stop values */}
        {T_STOPS.map((stop, i) => {
          const isActive = i === currentIndex;
          const isNear = Math.abs(i - currentIndex) <= 1;

          return (
            <div
              key={stop}
              className="flex items-center gap-2"
              style={{
                transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {/* Tick mark */}
              <div
                style={{
                  width: isActive ? "20px" : isNear ? "12px" : "6px",
                  height: isActive ? "1.5px" : "1px",
                  backgroundColor: isActive
                    ? ACCENT_ACTIVE
                    : isNear
                    ? ACCENT_STRONG
                    : ACCENT_COLOR,
                  transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              />
              {/* Number */}
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: isActive ? "1.1rem" : "0.75rem",
                  fontWeight: isActive ? 400 : 200,
                  color: isActive
                    ? ACCENT_ACTIVE
                    : isNear
                    ? ACCENT_STRONG
                    : ACCENT_COLOR,
                  transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  letterSpacing: "0.05em",
                }}
              >
                {stop}
              </span>
            </div>
          );
        })}

        {/* STOP label */}
        <div
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.5rem",
            letterSpacing: "0.3em",
            color: "rgba(160, 96, 58, 0.2)",
            fontWeight: 400,
            textTransform: "uppercase",
          }}
        >
          STOP
        </div>
      </div>

      {/* Moving dot indicator */}
      {(() => {
        const t = dotPosition / 100;
        const topOffset = 24 + t * (window.innerHeight - 48 - 24); // py-24 offset
        return (
          <div
            className="absolute left-5 lg:left-11"
            style={{
              top: `calc(6rem + ${dotPosition}% * 0.72)`,
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "rgba(160, 96, 58, 0.3)",
              transition: "top 0.15s linear",
              boxShadow: "0 0 8px rgba(160, 96, 58, 0.15)",
            }}
          />
        );
      })()}
    </div>
  );
}
