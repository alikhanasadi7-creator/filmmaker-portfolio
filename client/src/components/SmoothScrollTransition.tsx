import React, { useEffect, useRef, useState } from 'react';

interface SmoothScrollTransitionProps {
  children: React.ReactNode;
  nextPageContent: React.ReactNode;
  triggerOffset?: number;
}

export function SmoothScrollTransition({
  children,
  nextPageContent,
  triggerOffset = 0.8,
}: SmoothScrollTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showNextPage, setShowNextPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { scrollHeight, clientHeight } = document.documentElement;
      const scrollTop = window.scrollY;
      const maxScroll = scrollHeight - clientHeight;
      
      // Calculate scroll progress (0 to 1)
      const progress = Math.min(scrollTop / maxScroll, 1);
      
      setScrollProgress(progress);

      // When user scrolls past the trigger point, show next page
      if (progress >= triggerOffset) {
        setShowNextPage(true);
      } else {
        setShowNextPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerOffset]);

  return (
    <div ref={containerRef} className="relative">
      {/* Current page content */}
      <div
        className="transition-opacity duration-500"
        style={{
          opacity: 1 - Math.max(0, (scrollProgress - triggerOffset) / (1 - triggerOffset)),
        }}
      >
        {children}
      </div>

      {/* Next page content - rolls up from bottom */}
      {showNextPage && (
        <div
          className="fixed inset-0 top-full transition-all duration-700 ease-out"
          style={{
            transform: `translateY(${Math.max(0, (scrollProgress - triggerOffset) / (1 - triggerOffset)) * -100}%)`,
          }}
        >
          {nextPageContent}
        </div>
      )}
    </div>
  );
}
