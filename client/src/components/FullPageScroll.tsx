/* ============================================================= 
   Full Page Scroll Manager
   Handles smooth transitions between three sections
   ============================================================= */
import { useEffect, useRef } from "react";

interface FullPageScrollProps {
  children: React.ReactNode;
}

export function FullPageScroll({ children }: FullPageScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      // Allow natural scrolling on desktop and mobile
      // Smooth scroll is handled by CSS scroll-behavior
      return;
    };

    // Add smooth scroll behavior via CSS
    container.style.scrollBehavior = "smooth";

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-x-hidden"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      {children}
    </div>
  );
}

export default FullPageScroll;
