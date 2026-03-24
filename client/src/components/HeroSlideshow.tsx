/* =============================================================
   QUIET CINEMA — Hero Slideshow Component
   Minimal full-width slideshow below identity statement
   Links to Work page on click
   Auto-rotates through images with subtle indicators
   ============================================================= */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlide {
  id: number;
  image: string;
  alt: string;
}

interface HeroSlideshowProps {
  slides: HeroSlide[];
  autoPlayInterval?: number; // milliseconds
}

export default function HeroSlideshow({ slides, autoPlayInterval = 6000 }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (index: number) => {
    setCurrentIndex(index % slides.length);
    resetAutoPlay();
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    resetAutoPlay();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);
  };

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlayInterval, slides.length]);

  return (
    <Link href="/projects">
      <div className="w-full overflow-hidden group cursor-pointer" style={{ aspectRatio: "16 / 10.3455" }}>
        {/* Slideshow Container */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out"
              style={{
                opacity: index === currentIndex ? 1 : 0,
                pointerEvents: index === currentIndex ? "auto" : "none",
              }}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 30%" }}
              />
            </div>
          ))}

          {/* Overlay gradient for text readability */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ zIndex: 5 }}
          />

          {/* Navigation Arrows - Visible on Hover */}
          <button
            onClick={(e) => {
              e.preventDefault();
              prevSlide();
            }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ zIndex: 10 }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} strokeWidth={1.5} style={{ color: "white" }} />
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              nextSlide();
            }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ zIndex: 10 }}
            aria-label="Next slide"
          >
            <ChevronRight size={28} strokeWidth={1.5} style={{ color: "white" }} />
          </button>

          {/* Dot Indicators - Bottom Center */}
          <div
            className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2"
            style={{ zIndex: 10 }}
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  goToSlide(index);
                }}
                className="transition-all duration-300"
                style={{
                  width: index === currentIndex ? "20px" : "6px",
                  height: "2px",
                  background: index === currentIndex ? "white" : "rgba(255,255,255,0.5)",
                  border: "none",
                  cursor: "pointer",
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Click to View Work Indicator */}
          <div
            className="absolute bottom-6 md:bottom-8 right-3 md:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ zIndex: 10 }}
          >
            <p
              className="font-body text-xs tracking-widest uppercase"
              style={{ color: "white", letterSpacing: "0.1em" }}
            >
              View Projects →
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
